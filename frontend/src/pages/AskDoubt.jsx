import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import { auth, db } from "../firebase";
import {
  collection,
  addDoc,
  getDocs,
  serverTimestamp,
  orderBy,
  query
} from "firebase/firestore";

import "../style/AskDoubt.css";

function AskDoubt() {

  const navigate = useNavigate();

  const [doubt, setDoubt] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const chatEndRef = useRef(null);

  // auto scroll
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // load chats
  useEffect(() => {

    const loadChats = async () => {

      try {

        const user = auth.currentUser;
        if (!user) return;

        const q = query(
          collection(db, "users", user.uid, "chats"),
          orderBy("createdAt")
        );

        const snapshot = await getDocs(q);

        const chats = [];

        snapshot.forEach((doc) => {

          const data = doc.data();

          chats.push({
            sender: "user",
            text: data.question
          });

          chats.push({
            sender: "ai",
            text: data.answer
          });

        });

        setMessages(chats);

      } catch (error) {
        console.log("Error loading chats:", error);
      }

    };

    loadChats();

  }, []);

  const askAI = async () => {

    if (doubt.trim() === "" || loading) return;

    const question = doubt;

    setMessages(prev => [...prev, { sender:"user", text:question }]);

    setDoubt("");
    setLoading(true);

    try {

      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/ask-doubt`, {
          method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ question })
      });

      if (!response.ok) throw new Error("Backend error");

      const data = await response.json();


const aiReply = {
  sender: "ai",
  text: (data.answer || "No response from AI")
    .replace(/\*\*/g, "")
    .replace(/\\n/g, "\n")
};

      setMessages(prev => [...prev, aiReply]);

      const user = auth.currentUser;
      if (!user) return;

      await addDoc(collection(db, "users", user.uid, "chats"), {
        question,
        answer:data.answer,
        createdAt:serverTimestamp()
      });

    } catch (error) {

      console.log("Frontend error:", error);

      setMessages(prev => [...prev, {
        sender:"ai",
        text:"⚠️ Unable to reach AI server."
      }]);

    } finally {
      setLoading(false);
    }

  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      askAI();
    }
  };

  return (

    <div className="ask-page">

      {/* HEADER */}

      <div className="ask-header">

        <h2>Ask Eduseal Tutor</h2>

        <button
          className="home-btn"
          onClick={()=>navigate("/home")}
        >
          Return Home
        </button>

      </div>


      {/* CHAT CONTAINER */}

      <div className="chat-container">

        {messages.map((msg,index)=>(
  <div
    key={index}
    className={`message ${msg.sender}`}
  >
    {msg.text.split("\n").map((line,i)=>(
      <div key={i}>{line}</div>
    ))}
  </div>
))}

        {loading && (
          <div className="message ai">
            AI is thinking...
          </div>
        )}

        <div ref={chatEndRef}></div>

      </div>


      {/* INPUT AREA */}

      <div className="input-container">

        <textarea
          placeholder="Type your doubt..."
          value={doubt}
          onChange={(e)=>setDoubt(e.target.value)}
          onKeyDown={handleKeyPress}
        />

        <button onClick={askAI} disabled={loading}>
          {loading ? "Waiting..." : "Ask AI"}
        </button>

      </div>

    </div>

  );
}

export default AskDoubt;