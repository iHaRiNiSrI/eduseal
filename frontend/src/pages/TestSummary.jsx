import { useLocation, useNavigate } from "react-router-dom";
import "../style/TestSummary.css";

function TestSummary() {

  const location = useLocation();
  const navigate = useNavigate();

  const { questions, answers } = location.state;

  let correct = 0;
  let attempted = 0;

  questions.forEach((q, index) => {
    if (answers[index]) attempted++;
    if (answers[index] === q.answer) correct++;
  });

  const wrong = attempted - correct;
  const score = Math.round((correct / questions.length) * 100);

  return (

    <div className="summary-page">

      {/* TOP BAR */}

      <div className="summary-header">

        <h2>Test Summary</h2>

        <button
          className="home-btn"
          onClick={() => navigate("/home")}
        >
          Return Home
        </button>

      </div>


      {/* SCORE CARDS */}

      <div className="summary-cards">

        <div className="summary-card">
          <h3>{questions.length}</h3>
          <p>Total Questions</p>
        </div>

        <div className="summary-card">
          <h3>{attempted}</h3>
          <p>Attempted</p>
        </div>

        <div className="summary-card">
          <h3>{correct}</h3>
          <p>Correct</p>
        </div>

        <div className="summary-card">
          <h3>{wrong}</h3>
          <p>Wrong</p>
        </div>

        <div className="summary-card">
          <h3>{questions.length - attempted}</h3>
          <p>Unattempted</p>
        </div>

        <div className="summary-card score">
          <h3>{score}%</h3>
          <p>Score</p>
        </div>

      </div>


      {/* REVIEW QUESTIONS */}

      <h3 className="review-title">Review Questions</h3>

      {questions.map((q, index) => {

        const userAnswer = answers[index];
        const correctAnswer = q.answer;

        return (

          <div key={index} className="review-card">

            <h4>
              Q{index + 1}. {q.question}
            </h4>

            <div className="review-options">

              {q.options.map((opt, i) => {

                let className = "review-option";

                if (opt === correctAnswer) className += " correct";
                if (opt === userAnswer && opt !== correctAnswer) className += " wrong";

                return (
                  <div key={i} className={className}>
                    {opt}
                  </div>
                );

              })}

            </div>

            <p>
              Your Answer: <b>{userAnswer || "Not Attempted"}</b>
            </p>

            <p>
              Correct Answer: <b>{correctAnswer}</b>
            </p>

          </div>

        );

      })}

    </div>

  );
}

export default TestSummary;