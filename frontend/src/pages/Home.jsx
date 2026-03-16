import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import "../style/Home.css";
import { useState } from "react";
import testIcon from "../assets/test.png";
import doubtIcon from "../assets/doubt.png";
import progressIcon from "../assets/progress.png";

function Home() {

  const navigate = useNavigate();
  const [blurPage,setBlurPage] = useState(false);

  return (
    <div>

      <Navbar onSettingsToggle={setBlurPage} />

      <div className={`home-container ${blurPage ? "blur-page" : ""}`}>

        <div className="card-container">

          <div
            className="feature-card"
            onClick={() => navigate("/take-test")}
          >
            <img src={testIcon} alt="Take Test"/>
            <h3>Take Test</h3>
          </div>

          <div
            className="feature-card"
            onClick={() => navigate("/ask-doubt")}
          >
            <img src={doubtIcon} alt="Ask Doubt"/>
            <h3>Ask Doubt</h3>
          </div>

          <div
            className="feature-card"
            onClick={() => navigate("/progress")}
          >
            <img src={progressIcon} alt="Progress"/>
            <h3>View Progress</h3>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Home;