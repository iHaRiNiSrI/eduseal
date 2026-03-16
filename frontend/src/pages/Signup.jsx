import "../style/Login.css";
import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification
} from "firebase/auth";
import { auth, db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import loginImage from "../assets/loginsignup.png";

function Signup() {

  const navigate = useNavigate();

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [exam,setExam] = useState("JEE");
  const [showPassword,setShowPassword] = useState(false);
  const [loading,setLoading] = useState(false);
  const [createdUser,setCreatedUser] = useState(null);
  const [verified,setVerified] = useState(false);

  const handleSignup = async () => {

    setLoading(true);

    try{

      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;

      setCreatedUser(user);

      await setDoc(doc(db,"users",user.uid),{
        name:name,
        email:email,
        exam:exam
      });

      await sendEmailVerification(user);

      alert("Verification email sent. Please check your inbox.");

    }catch(error){

      alert(error.message);

    }

    setLoading(false);
  };

  const resendVerification = async () => {

    if(createdUser){

      await sendEmailVerification(createdUser);

      alert("Verification email sent again!");

    }

  };

  const checkVerification = async () => {

    if(createdUser){

      await createdUser.reload();

      if(createdUser.emailVerified){

        setVerified(true);

      } else {

        alert("Email not verified yet.");

      }

    }

  };

  return (

    <div className="login-container">

      {/* LEFT SIDE SIGNUP */}
      <div className="login-left">

        <div className="login-card">

          <h2>Create Account</h2>

          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e)=>setName(e.target.value)}
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />

          <div className="password-field">

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />

            <span
              className="eye-icon"
              onClick={()=>setShowPassword(!showPassword)}
            >
              {showPassword ? "🙈" : "🙉"}
            </span>

          </div>

          <select
            value={exam}
            onChange={(e)=>setExam(e.target.value)}
          >
            <option value="JEE">JEE</option>
            <option value="NEET">NEET</option>
          </select>

          <button onClick={handleSignup} disabled={loading}>
            {loading ? "Creating account..." : "Signup"}
          </button>

          {createdUser && (
            <>
              <button className="secondary-btn" onClick={resendVerification}>
                Resend Verification Email
              </button>

              <button className="secondary-btn" onClick={checkVerification}>
                Check Verification Status
              </button>
            </>
          )}

          {verified && (
            <p style={{color:"green"}}>
              Email verified successfully. You can log in now.
            </p>
          )}

          <p className="signup-text">Already have an account?</p>

          <button
            className="signup-btn"
            onClick={()=>navigate("/login")}
          >
            Go to Login
          </button>

        </div>

      </div>

      {/* RIGHT SIDE IMAGE */}
      <div className="login-right">

        <img
          src={loginImage}
          alt="study illustration"
        />

      </div>

    </div>

  );
}

export default Signup;