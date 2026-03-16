function QuestionCard({ question, options, selected, onSelect }) {

  return (
    <div className="question-card">

      <div className="question-text">
        {question}
      </div>

      <div className="options-container">

        {options.map((option, index) => (

          <div
            key={index}
            className={`option-box ${selected === option ? "selected" : ""}`}
            onClick={() => onSelect(option)}
          >
            {option}
          </div>

        ))}

      </div>

    </div>
  );
}

export default QuestionCard;