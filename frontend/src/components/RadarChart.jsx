import { Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

function RadarChart({ dataValues }) {

  const data = {
    labels: ["Physics", "Chemistry", "Maths"],
    datasets: [
      {
        label: "Performance",
        data: dataValues,
        backgroundColor: "rgba(34,202,236,0.2)",
        borderColor: "rgba(34,202,236,1)"
      }
    ]
  };

  return <Radar data={data} />;
}

export default RadarChart;