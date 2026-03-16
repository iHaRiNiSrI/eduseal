import { useState, useEffect, useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../style/TestPage.css";
import QuestionCard from "../components/QuestionCard";
import QuestionNavigator from "../components/QuestionNavigator";

import questionBank from "../data/questionBank";

import { auth, db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

function TestPage() {

  const location = useLocation();
  const navigate = useNavigate();

  const testType = location.state?.testType;
  const subject = location.state?.subject;
  const topic = location.state?.topic;

  const exam = localStorage.getItem("exam") || "JEE";

  useEffect(() => {
    if (!location.state) {
      navigate("/take-test");
    }
  }, [location, navigate]);

  // TEST TIME
  let testTime = 600;

  if (testType === "subject") testTime = 900;
  if (testType === "full") testTime = 1800;

  // DATASET TOPIC RANGES

  const topicRanges = {

    Physics: {
      "Mechanics": [1, 62],
      "Electrodynamics": [63, 124],
      "Thermal and Fluids ": [125, 186],
      "Optics and Modern Physics": [187, 248]
    },

    Chemistry: {
      "Physical Chemistry": [248, 310],
      "Organic Chemistry": [311, 372],
      "Inorganic Chemistry": [373, 434],
      "Applied Chemistry & Biochemistry": [435, 496]
    },

    Maths: {
      "Algebra": [497, 558],
      "Calculus": [559, 620],
      "Coordinate Geometry": [621, 682],
      "Trig and Vectors": [683, 744]
    },

    Biology: {
      "Cell and Genetics": [745, 806],
      " Physiology": [807, 868],
      "Diversity and Org": [869, 930],
      "Ecology and Repro": [931, 992]
    }

  };

  // FLATTEN DATASET

  const flattenQuestions = () => {

    let subjectsAllowed =
      exam === "JEE"
        ? ["Physics", "Chemistry", "Maths"]
        : ["Physics", "Chemistry", "Biology"];

    let allQuestions = [];

    questionBank.forEach(subjectData => {

      if (subjectsAllowed.includes(subjectData.subject)) {

        subjectData.topics.forEach(topic => {

          topic.questions.forEach(q => {

            allQuestions.push({
              ...q,
              subject: subjectData.subject,
              topic: topic.name
            });

          });

        });

      }

    });

    return allQuestions;
  };

  const pickRandom = (arr, count) => {
    return [...arr].sort(() => 0.5 - Math.random()).slice(0, count);
  };

  const getQuestionsByRange = (questions, start, end) => {
    return questions.filter(q => q.id >= start && q.id <= end);
  };

  // GENERATE QUESTIONS

  const generateQuestions = () => {

    const allQuestions = flattenQuestions();

    // FULL TEST
    if (testType === "full") {

      const buildSubject = (topics, count) => {

        const topicNames = Object.keys(topics);
        const perTopic = Math.floor(count / topicNames.length);

        let result = [];

        topicNames.forEach(t => {

          const [start, end] = topics[t];

          const topicQuestions =
            getQuestionsByRange(allQuestions, start, end);

          result.push(...pickRandom(topicQuestions, perTopic));

        });

        return result.slice(0, count);
      };

      const physics = buildSubject(topicRanges.Physics, 10);
      const chemistry = buildSubject(topicRanges.Chemistry, 10);

      const third =
        exam === "JEE"
          ? buildSubject(topicRanges.Maths, 10)
          : buildSubject(topicRanges.Biology, 10);

      return [...physics, ...chemistry, ...third];
    }

    // SUBJECT TEST
    if (testType === "subject") {

      const topics = topicRanges[subject];
      const topicNames = Object.keys(topics);
      const perTopic = Math.floor(15 / topicNames.length);

      let result = [];

      topicNames.forEach(t => {

        const [start, end] = topics[t];

        const topicQuestions =
          getQuestionsByRange(allQuestions, start, end);

        result.push(...pickRandom(topicQuestions, perTopic));

      });

      return result.slice(0, 15);
    }

    // TOPIC TEST
    if (testType === "topic") {

      const [start, end] = topicRanges[subject][topic];

      const topicQuestions =
        getQuestionsByRange(allQuestions, start, end);

      return pickRandom(topicQuestions, 10);
    }

  };

  const savedTest = JSON.parse(localStorage.getItem("ongoingTest"));

  const [questions] = useState(savedTest?.questions || generateQuestions());
  const [current, setCurrent] = useState(savedTest?.current || 0);
  const [answers, setAnswers] = useState(savedTest?.answers || {});
  const [timeLeft, setTimeLeft] = useState(savedTest?.timeLeft || testTime);
  const [submitted, setSubmitted] = useState(false);

  // SAVE TEST PROGRESS

  useEffect(() => {

    localStorage.setItem("ongoingTest", JSON.stringify({
      questions,
      answers,
      current,
      timeLeft
    }));

  }, [answers, current, timeLeft, questions]);

  const goToQuestion = (index) => setCurrent(index);

  const handleSelect = (option) => {
    setAnswers({ ...answers, [current]: option });
  };

  const nextQuestion = () => {
    if (current < questions.length - 1) setCurrent(current + 1);
  };

  const prevQuestion = () => {
    if (current > 0) setCurrent(current - 1);
  };

  // SUBMIT TEST

  const submitTest = useCallback(async () => {

    if (submitted) return;

    const unanswered = questions.length - Object.keys(answers).length;

    if (unanswered > 0) {

      const confirmSubmit = window.confirm(
        `You still have ${unanswered} unanswered questions. Submit anyway?`
      );

      if (!confirmSubmit) return;
    }

    setSubmitted(true);

    let correct = 0;

    questions.forEach((q, index) => {
      if (answers[index] === q.answer) correct++;
    });

    const score = Math.round((correct / questions.length) * 100);

    try {

      const uid = auth.currentUser?.uid;
      if (!uid) return;

      await addDoc(collection(db, "users", uid, "tests"), {
        type: testType,
        totalQuestions: questions.length,
        correct,
        score,
        questions,
        answers,
        createdAt: serverTimestamp()
      });

    } catch (error) {

      console.log("Error saving test:", error);

    }

    localStorage.removeItem("ongoingTest");

    navigate("/summary", { state: { questions, answers } });

  }, [answers, questions, submitted, navigate, testType]);

 
  useEffect(() => {

    if (timeLeft <= 0) {
      submitTest();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timer);

  }, [timeLeft, submitTest]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  if (!questions || questions.length === 0) return null;

return (

  <div className="test-page">

    <div className="test-header">

      <h3>
        Time Left: {minutes}:{seconds.toString().padStart(2, "0")}
      </h3>

      <h3>
        Question {current + 1} / {questions.length}
      </h3>

    </div>


    <div className="test-layout">

      {/* LEFT SIDE QUESTION */}

      <div className="question-section">

        <div className="question-area">

  <QuestionCard
    question={questions[current]?.question}
    options={questions[current]?.options || []}
    selected={answers[current]}
    onSelect={handleSelect}
  />

</div>

        <div className="nav-buttons">

          <button className="nav-btn" onClick={prevQuestion}>
            Previous
          </button>

          <button className="nav-btn" onClick={nextQuestion}>
            Next
          </button>

        </div>

      </div>


      {/* RIGHT SIDE NAVIGATOR */}

      <div className="navigator-section">

        <QuestionNavigator
          questions={questions}
          current={current}
          answers={answers}
          goToQuestion={goToQuestion}
        />

        <button
          className="submit-btn"
          onClick={submitTest}
          disabled={Object.keys(answers).length === 0}
        >
          Submit Test
        </button>

      </div>

    </div>


    <button
      className="exit-test"
      onClick={() => {

        const confirmExit = window.confirm(
          "Leaving the test will discard progress. Continue?"
        );

        if (!confirmExit) return;

        localStorage.removeItem("ongoingTest");
        navigate("/home");

      }}
    >
      Return to Home
    </button>

  </div>
);

}

export default TestPage;