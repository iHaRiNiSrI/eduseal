import "../style/Login.css";
import { useState } from "react";
import {
  signInWithEmailAndPassword,
  sendEmailVerification,
  sendPasswordResetEmail
} from "firebase/auth";
import { auth, db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import loginImage from "../assets/loginsignup.png";   // ✅ added import

function Login() {

  const navigate = useNavigate();

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [loading,setLoading] = useState(false);
  const [showPassword,setShowPassword] = useState(false);
  const [unverifiedUser,setUnverifiedUser] = useState(null);

  const handleLogin = async () => {

    setLoading(true);

    try{

      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;

      if(!user.emailVerified){

        setUnverifiedUser(user);

        alert("Please verify your email first.");

        setLoading(false);
        return;

      }

      const uid = user.uid;

      const userDoc = await getDoc(doc(db,"users",uid));

      if(userDoc.exists()){

        const exam = userDoc.data().exam;

        localStorage.setItem("exam",exam);

      }

      navigate("/home");

    }catch(error){

      alert(error.message);

    }

    setLoading(false);
  };

  const resendVerification = async () => {

    if(unverifiedUser){

      try{

        await sendEmailVerification(unverifiedUser);

        alert("Verification email sent again!");

      }catch(error){

        alert(error.message);

      }

    }
  };

  const forgotPassword = async () => {

    if(!email){

      alert("Please enter your email first.");

      return;
    }

    try{

      await sendPasswordResetEmail(auth,email);

      alert("Password reset email sent!");

    }catch(error){

      alert(error.message);

    }

  };

  return (

    <div className="login-container">

      {/* LEFT SIDE LOGIN */}
      <div className="login-left">

        <div className="login-card">

          <h2>Login</h2>

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

          <button onClick={handleLogin} disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>

          <button className="secondary-btn" onClick={forgotPassword}>
            Forgot Password
          </button>

          {unverifiedUser && (
            <button className="secondary-btn" onClick={resendVerification}>
              Resend Verification Email
            </button>
          )}

          <p className="signup-text">Don't have an account?</p>

          <button
            className="signup-btn"
            onClick={()=>navigate("/signup")}
          >
            Create Account
          </button>

        </div>

      </div>

      {/* RIGHT SIDE IMAGE */}
      <div className="login-right">

        <img
          src={loginImage}     // ✅ fixed here
          alt="study illustration"
        />

      </div>

    </div>

  );
}

export default Login;