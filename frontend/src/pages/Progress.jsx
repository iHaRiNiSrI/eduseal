import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { auth, db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid
} from "recharts";

import "../style/Progress.css";

function Progress() {

  const navigate = useNavigate();

  const [subjectData,setSubjectData] = useState([]);
  const [topicData,setTopicData] = useState([]);
  const [scoreData,setScoreData] = useState([]);

  const [stats,setStats] = useState({
    tests:0,
    totalQuestions:0,
    correct:0,
    accuracy:0,
    best:0,
    worst:100,
    average:0,
    strongest:"",
    weakest:""
  });

  const exam = localStorage.getItem("exam") || "JEE";

  useEffect(()=>{

    const loadProgress = async()=>{

      try{

        const user = auth.currentUser;
        if(!user) return;

        const snapshot = await getDocs(
          collection(db,"users",user.uid,"tests")
        );

        let physics={correct:0,total:0};
        let chemistry={correct:0,total:0};
        let maths={correct:0,total:0};
        let biology={correct:0,total:0};

        let topicStats={};

        let totalCorrect=0;
        let totalQuestions=0;

        let best=0;
        let worst=100;
        let totalScore=0;
        let tests=0;

        snapshot.forEach(doc=>{

          const test=doc.data();

          tests++;
          totalScore+=test.score;

          if(test.score>best) best=test.score;
          if(test.score<worst) worst=test.score;

          if(!test.questions || !test.answers) return;

          test.questions.forEach((q,index)=>{

            const subject=q.subject;
            const topic=q.topic;
            const correct=q.answer;
            const userAnswer=test.answers[index];

            totalQuestions++;

            if(userAnswer===correct) totalCorrect++;

            if(subject==="Physics"){
              physics.total++;
              if(userAnswer===correct) physics.correct++;
            }

            if(subject==="Chemistry"){
              chemistry.total++;
              if(userAnswer===correct) chemistry.correct++;
            }

            if(subject==="Maths"){
              maths.total++;
              if(userAnswer===correct) maths.correct++;
            }

            if(subject==="Biology"){
              biology.total++;
              if(userAnswer===correct) biology.correct++;
            }

            if(!topicStats[topic]){
              topicStats[topic]={correct:0,total:0};
            }

            topicStats[topic].total++;

            if(userAnswer===correct){
              topicStats[topic].correct++;
            }

          });

        });

        const physicsScore = physics.total
          ? Math.round((physics.correct/physics.total)*100)
          :0;

        const chemistryScore = chemistry.total
          ? Math.round((chemistry.correct/chemistry.total)*100)
          :0;

        const mathsScore = maths.total
          ? Math.round((maths.correct/maths.total)*100)
          :0;

        const biologyScore = biology.total
          ? Math.round((biology.correct/biology.total)*100)
          :0;

        const subjects = exam==="JEE"
        ? [
          {subject:"Physics",score:physicsScore},
          {subject:"Chemistry",score:chemistryScore},
          {subject:"Maths",score:mathsScore}
        ]
        : [
          {subject:"Physics",score:physicsScore},
          {subject:"Chemistry",score:chemistryScore},
          {subject:"Biology",score:biologyScore}
        ];

        setSubjectData(subjects);

        const strongest=subjects.reduce((a,b)=>a.score>b.score?a:b);
        const weakest=subjects.reduce((a,b)=>a.score<b.score?a:b);

        const accuracy = totalQuestions
        ? Math.round((totalCorrect/totalQuestions)*100)
        :0;

        const average = tests
        ? Math.round(totalScore/tests)
        :0;

        setStats({
          tests,
          totalQuestions,
          correct:totalCorrect,
          accuracy,
          best,
          worst,
          average,
          strongest:strongest.subject,
          weakest:weakest.subject
        });

        const topicArray = Object.keys(topicStats).map(t=>({
          topic:t,
          score:Math.round(
            (topicStats[t].correct/topicStats[t].total)*100
          )
        }));

        setTopicData(topicArray);

        const scoreArray = snapshot.docs
        .map((doc, index) => {
          const data = doc.data();

          return {
            score: data.score,
            date: data.createdAt?.seconds
              ? new Date(data.createdAt.seconds * 1000).toLocaleDateString()
              : `Test ${index + 1}`,
            time: data.createdAt?.seconds || 0
          };
        })
        .sort((a, b) => a.time - b.time);

        setScoreData(scoreArray);

      }catch(error){
        console.log("Progress loading error:",error);
      }

    };

    loadProgress();

  },[]);

return (

  <div className="progress-page">

    <div className="progress-header">
      <h2>Progress Dashboard</h2>

      <button
        className="home-btn"
        onClick={()=>navigate("/home")}
      >
        Return Home
      </button>
    </div>


    <div className="top-section">

      <div className="stats-grid">

        <div className="stat-card">
          <h3>{stats.tests}</h3>
          <p>Total Tests</p>
        </div>

        <div className="stat-card">
          <h3>{stats.correct}</h3>
          <p>Correct</p>
        </div>

        <div className="stat-card">
          <h3>{stats.totalQuestions}</h3>
          <p>Total Questions</p>
        </div>

        <div className="stat-card">
          <h3>{stats.accuracy}%</h3>
          <p>Accuracy</p>
        </div>

        <div className="stat-card">
          <h3>{stats.best}%</h3>
          <p>Best Score</p>
        </div>

        <div className="stat-card">
          <h3>{stats.average}%</h3>
          <p>Average Score</p>
        </div>

      </div>


      <div className="chart-card">

        <h3>Subject Accuracy</h3>

        <RadarChart
          width={420}
          height={300}
          data={subjectData}
        >

          <PolarGrid stroke="rgba(255,255,255,0.3)" />

          <PolarAngleAxis
            dataKey="subject"
            tick={{ fill:"white", fontSize:13 }}
            axisLine={false}
          />

          <PolarRadiusAxis
            tick={false}
            axisLine={false}
            domain={[0,100]}
          />

          <Radar
            dataKey="score"
            stroke="#4f46e5"
            fill="#4f46e5"
            fillOpacity={0.5}
          />

          <Tooltip
            formatter={(v)=>`${v}%`}
            contentStyle={{
              background:"#111827",
              border:"none",
              borderRadius:"8px",
              color:"white"
            }}
          />

        </RadarChart>

      </div>

    </div>


    <div className="bottom-section">

      <div className="chart-card">

        <h3>Topic Performance</h3>

        <BarChart width={550} height={300} data={topicData}>

          <CartesianGrid strokeDasharray="3 3"/>

          <XAxis
            dataKey="topic"
            tick={false}
            axisLine={false}
            tickLine={false}
          />

          <YAxis
            domain={[0,100]}
            tick={{ fill:"white" }}
          />

          <Tooltip
            formatter={(v)=>`${v}%`}
            contentStyle={{
              background:"#111827",
              border:"none",
              borderRadius:"8px",
              color:"white"
            }}
          />

          <Bar dataKey="score" fill="#22c55e"/>

        </BarChart>

      </div>


      <div className="chart-card">

        <h3>Score Distribution</h3>

        <BarChart width={420} height={300} data={scoreData}>

          <CartesianGrid strokeDasharray="3 3"/>

          <XAxis
            dataKey="date"
            tick={{ fill:"white", fontSize:12 }}
          />

          <YAxis
            domain={[0,100]}
            tick={{ fill:"white" }}
          />

          <Tooltip
            formatter={(v)=>`${v}%`}
            contentStyle={{
              background:"#111827",
              border:"none",
              borderRadius:"8px",
              color:"white"
            }}
          />

          <Bar dataKey="score" fill="#6366f1"/>

        </BarChart>

      </div>

    </div>

  </div>

);
}

export default Progress;