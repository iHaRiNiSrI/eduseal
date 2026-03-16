import "../style/Navbar.css";
import { useState, useEffect } from "react";
import { auth, db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import SettingsModal from "./SettingsModal";

function Navbar({ onSettingsToggle}) {

  const [showSettings, setShowSettings] = useState(false);
  const [name, setName] = useState("User");
  const [exam, setExam] = useState("");

  useEffect(() => {

    const storedName = localStorage.getItem("username");
    const storedExam = localStorage.getItem("exam");

    if (storedName) setName(storedName);
    if (storedExam) setExam(storedExam);

    const fetchUser = async () => {

      const user = auth.currentUser;

      if (user) {

        try {

          const docRef = doc(db, "users", user.uid);
          const userDoc = await getDoc(docRef);

          if (userDoc.exists()) {

            const username = userDoc.data().name;
            const examType = userDoc.data().exam;

            setName(username);
            setExam(examType);

            localStorage.setItem("username", username);
            localStorage.setItem("exam", examType);

          }

        } catch (error) {
          console.log("Error fetching user:", error);
        }

      }

    };

    fetchUser();

  }, []);

  return (
    <div className="navbar">

      <div className="logo-section">
        <img src="../src/assets/logo.png" alt="Eduseal Logo" className="logo" />
        <h3 className="app-title">EDUSEAL TUTOR</h3>
      </div>

      <div className="right-section">

        <div className="user-info">
          <span className="user-name">Welcome {name}</span>
          <span className="user-exam">Preparing for {exam}</span>
        </div>

        <button
          className="settings-btn"
          onClick={() => {
            setShowSettings(true);
            onSettingsToggle(true);
          }}
        >
          ⚙
        </button>

      </div>

      {showSettings && (
        <SettingsModal
          closeModal={() => {
            setShowSettings(false);
            onSettingsToggle(false);
          }}
          updateNavbarName={setName}
          updateNavbarExam={setExam}
        />
      )}

    </div>
  );
}

export default Navbar;