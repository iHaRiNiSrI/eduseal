import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../style/TakeTest.css";

function TakeTest() {

  const navigate = useNavigate();

  const [mode, setMode] = useState("");

  const exam = localStorage.getItem("exam") || "JEE";

  const subjects =
    exam === "JEE"
      ? ["Physics", "Chemistry", "Maths"]
      : ["Physics", "Chemistry", "Biology"];

  const topics = {

    Physics: [
      "Mechanics",
      "Electrodynamics",
      "Thermal Physics & Fluids",
      "Optics & Modern Physics"
    ],

    Chemistry: [
      "Physical Chemistry",
      "Organic Chemistry",
      "Inorganic Chemistry",
      "Applied Chemistry & Biochemistry"
    ],

    Maths: [
      "Algebra",
      "Calculus",
      "Coordinate Geometry",
      "Trigonometry & Vectors"
    ],

    Biology: [
      "Cell Biology & Genetics",
      "Human Physiology",
      "Diversity of Organisms",
      "Ecology & Reproduction"
    ]

  };

  return (

    <div className="taketest-page">

      <Navbar />

      <div className="taketest-container">

        {/* CARD SECTION */}

        <div
          className={`test-card-container ${
            mode === "subject"
              ? "cards-subject"
              : mode === "topic"
              ? "cards-topic"
              : ""
          }`}
        >

          {/* FULL TEST */}

          <div
            className="test-card"
            onClick={() =>
              navigate("/test", { state: { testType: "full" } })
            }
          >
            <h3>Full Mock Test</h3>
            <p>Simulate the real exam experience</p>
          </div>


          {/* SUBJECT TEST */}

          <div
            className="test-card"
            onClick={() => setMode("subject")}
          >
            <h3>Subject Wise Test</h3>
            <p>Practice one subject at a time</p>
          </div>


          {/* TOPIC TEST */}

          <div
            className="test-card"
            onClick={() => setMode("topic")}
          >
            <h3>Topic Wise Test</h3>
            <p>Focus on specific topics</p>
          </div>

        </div>


        {/* SUBJECT OPTIONS */}

        {mode === "subject" && (
          <div className="selection-box">

            <h3>Select Subject</h3>

            {subjects.map((sub) => (
              <button
                key={sub}
                className="option-btn"
                onClick={() =>
                  navigate("/test", {
                    state: {
                      testType: "subject",
                      subject: sub
                    }
                  })
                }
              >
                {sub}
              </button>
            ))}

          </div>
        )}


        {/* TOPIC OPTIONS */}

        {mode === "topic" && (

          <div className="selection-box">

            <h3>Select Topic</h3>

            {subjects.map((sub) => (

              <div key={sub} className="topic-section">

                <h4>{sub}</h4>

                {topics[sub].map((topic) => (

                  <button
                    key={topic}
                    className="option-btn"
                    onClick={() =>
                      navigate("/test", {
                        state: {
                          testType: "topic",
                          subject: sub,
                          topic: topic
                        }
                      })
                    }
                  >
                    {topic}
                  </button>

                ))}

              </div>

            ))}

          </div>

        )}

      </div>


      {/* RETURN HOME BUTTON */}

      <button
        className="return-home-btn"
        onClick={() => navigate("/home")}
      >
        Return Home
      </button>

    </div>

  );
}

export default TakeTest;