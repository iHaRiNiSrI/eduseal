function QuestionNavigator({ questions, current, answers, goToQuestion }) {

  return (
    <div>

      <h3 className="navigator-title">Question Navigator</h3>

      <div className="navigator-grid">

        {questions.map((q, index) => (

          <button
            key={index}
            className={`nav-circle 
              ${current === index ? "current" : ""}
              ${answers[index] ? "answered" : ""}
            `}
            onClick={() => goToQuestion(index)}
          >
            {index + 1}
          </button>

        ))}

      </div>

    </div>
  );
}

export default QuestionNavigator;