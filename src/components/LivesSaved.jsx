import React from "react";
import "../index.css";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale, //x axis
  LinearScale, //y axis
  PointElement,
  Legend,
  Tooltip,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip
);

export default function LivesSaved() {
  const data = {
    labels: ["2014", "2016", "2018", "2020", "2022"],
    datasets: [
      {
        label: "lives saved (in thousand)",
        data: [2.2, 4.3, 6.5, 8.8, 10],
        data:[{x: 2014, y:2.2},
          {x: 2016, y:4.3},
          {x: 2018, y:6.5},
          {x: 2020, y:8.8},
          {x: 2022, y:10},
        ],
        borderColor: "rgb(151,226,231)",
        pointBorderColor: "rgb(151,226,231)",
        tension: 0.3,
        borderWidth:4,
        fill:0,
        backgroundColor: "rgb(151,226,231)",
      },
      
    ],
  };

  const options = {
    plugins: {
      legend: true,
    },
    y: {
       min: 0,
      max: 10,
      ticks: {
        stepSize: 2,
      },
    },
  };


  return (
    <div className="div-lives">
      <h2 className="ls-heading">Lives Saved</h2>
      <h1 className="ls-no">10,875</h1>
      <div className="line-graph">
        <Line
          className="lc-style"
          data={data}
          options={options}
          width="100%"
          height="100%"
        ></Line>
      </div>
    </div>
  );
}
