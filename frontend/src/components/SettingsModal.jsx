import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ConfirmModal from "./ConfirmModal";

import { signOut } from "firebase/auth";
import { auth, db } from "../firebase";
import { doc, updateDoc, collection, getDocs, deleteDoc } from "firebase/firestore";

function SettingsModal({ closeModal, updateNavbarName, updateNavbarExam }) {

  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [exam, setExam] = useState(localStorage.getItem("exam") || "JEE");

  const [showConfirm, setShowConfirm] = useState(false);

  const [usernameMsg, setUsernameMsg] = useState("");
  const [examMsg, setExamMsg] = useState("");

  const changeUsername = async () => {

    if (!username) {
      setUsernameMsg("Enter a username first.");
      return;
    }

    try {

      const uid = auth.currentUser.uid;

      await updateDoc(doc(db,"users",uid),{
        name: username
      });

      localStorage.setItem("username", username);

      updateNavbarName(username);

      setUsernameMsg("✅ Username updated successfully");
      setExamMsg("");
      setUsername("");

    } catch(error){

      console.log(error);
      setUsernameMsg("❌ Failed to update username");

    }

  };

  const confirmExamChange = async () => {

    try{

      const uid = auth.currentUser.uid;

      const testsRef = collection(db,"users",uid,"tests");
      const snapshot = await getDocs(testsRef);

      snapshot.forEach(async (docItem)=>{
        await deleteDoc(docItem.ref);
      });

      await updateDoc(doc(db,"users",uid),{
        exam: exam
      });

      localStorage.setItem("exam",exam);

      updateNavbarExam(exam);

      setExamMsg("✅ Exam updated and progress cleared.");
      setUsernameMsg("");

      setShowConfirm(false);

    }catch(error){

      console.log(error);

    }

  };

  const logout = async () => {

    try{

      await signOut(auth);

      localStorage.removeItem("exam");
      localStorage.removeItem("username");
      localStorage.removeItem("ongoingTest");

      closeModal();

      navigate("/login");

    }catch(error){

      alert(error.message);

    }

  };

  return (
    <>
      {/* BLUR BACKGROUND */}
      <div style={blurOverlay} onClick={closeModal}></div>

      {/* SETTINGS MODAL */}
      <div style={modalWrapper}>
        <div style={modalStyle}>

          {/* HEADER */}
          <div style={headerStyle}>
            <h3 style={{marginBottom:"10px"}}>Settings</h3>

            <button style={closeButtonStyle} onClick={closeModal}>
              ✖
            </button>
          </div>

          {/* USERNAME SECTION */}
          <div style={sectionStyle}>
            <h4>Change Username</h4>

            <input
              style={inputStyle}
              placeholder="New username"
              value={username}
              onChange={(e)=>setUsername(e.target.value)}
            />

            <button style={buttonStyle} onClick={changeUsername}>
              Update Username
            </button>

            {usernameMsg && <p>{usernameMsg}</p>}
          </div>

          {/* EXAM SECTION */}
          {/* EXAM SECTION */}
<div style={sectionStyle}>
  <h4>Change Exam</h4>

  <select
    style={inputStyle}
    value={exam}
    onChange={(e)=>setExam(e.target.value)}
  >
    <option value="JEE">JEE</option>
    <option value="NEET">NEET</option>
  </select>

  {!showConfirm && (
    <button style={buttonStyle} onClick={()=>setShowConfirm(true)}>
      Update Exam
    </button>
  )}

  {showConfirm && (
    <div style={confirmBox}>
      <p style={{marginBottom:"12px"}}>
        Changing exam will delete all your saved progress.
      </p>

      <div style={confirmButtons}>
        <button style={confirmBtn} onClick={confirmExamChange}>
          Yes, Continue
        </button>

        <button
          style={cancelBtn}
          onClick={()=>setShowConfirm(false)}
        >
          Cancel
        </button>
      </div>
    </div>
  )}

  {examMsg && <p>{examMsg}</p>}
</div>

          {/* LOGOUT SECTION */}
          <div style={logoutSection}>
            <button style={logoutButton} onClick={logout}>
              Logout
            </button>
          </div>

        </div>
      </div>

      
    </>
  );
}

/* BLUR BACKGROUND */

const blurOverlay = {
  position: "fixed",
  top: "90px",
  left: 0,
  width: "100%",
  height: "calc(100% - 90px)",

  backdropFilter: "blur(10px)",
  WebkitBackdropFilter: "blur(10px)",

  background: "rgba(0,0,0,0.2)",

  zIndex: 90
};

/* MODAL POSITION */

const modalWrapper = {
  position: "fixed",
  top: "120px",
  right: "40px",
  zIndex: 100
};

/* GLASS MODAL */

const modalStyle = {
  width: "320px",
  padding: "22px",
  borderRadius: "18px",
  background: "rgba(255,255,255,0.15)",
  backdropFilter: "blur(20px)",
  border: "1px solid rgba(255,255,255,0.25)",
  boxShadow: "0 20px 50px rgba(0,0,0,0.35)",
  color: "white"
};

const headerStyle = {
  display:"flex",
  justifyContent:"space-between",
  alignItems:"center"
};

const sectionStyle = {
  marginTop:"18px"
};

const logoutSection = {
  marginTop:"25px"
};

const closeButtonStyle = {
  border:"none",
  background:"transparent",
  color:"white",
  fontSize:"16px",
  cursor:"pointer"
};

const inputStyle = {
  width:"100%",
  padding:"10px",
  marginTop:"8px",
  marginBottom:"10px",
  borderRadius:"8px",
  border:"none"
};

const buttonStyle = {
  width:"100%",
  padding:"10px",
  borderRadius:"8px",
  border:"none",
  cursor:"pointer",
  background:"rgba(255,255,255,0.25)",
  color:"white",
  marginBottom:"6px"
};

const logoutButton = {
  width:"100%",
  padding:"10px",
  borderRadius:"8px",
  border:"none",
  cursor:"pointer",
  background:"#ef4444",
  color:"white"
};

const confirmBox = {
  marginTop: "10px",
  padding: "12px",
  borderRadius: "10px",

  background: "rgba(255,255,255,0.12)",
  border: "1px solid rgba(255,255,255,0.25)"
};

const confirmButtons = {
  display: "flex",
  justifyContent: "space-between"
};

const confirmBtn = {
  padding: "8px 12px",
  borderRadius: "6px",
  border: "none",
  background: "#22c55e",
  color: "white",
  cursor: "pointer"
};

const cancelBtn = {
  padding: "8px 12px",
  borderRadius: "6px",
  border: "none",
  background: "#ef4444",
  color: "white",
  cursor: "pointer"
};

export default SettingsModal;