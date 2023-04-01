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

export default function AvgTime() {
  const data = {
    labels: ["2017", "2018", "2019", "2020", "2021", "2022"],
    datasets: [
      {
        label: "Average Time",
        data: [33, 45, 48, 30, 33, 55],
        borderColor: "rgb(151,226,231)",
        pointBorderColor: "rgb(151,226,231)",
        tension: 0,
        fill: true,
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
      max: 60,
      ticks: {
        stepSize: 20,
      },
    },
  };

  return (
    <div className="div-avg">
      <div className="horizontal-bar">
        <h2 className="at-heading">Avg Time to Adopt</h2>
        <h2 className="at-days">45 days</h2>
        <h3 className="age-bucket-time">Avg Time to Adopt by Age Bucket</h3>

        <div className="at-container-div">
          <div class="puppy-at">
            0-1 Puppy
            <div class="puppy thirty"></div>
            30 days
          </div>

          <div class="puppy-at">
            2-6 Adult
            <div class="puppy eithy-five"></div>
            85 days
          </div>

          <div class="puppy-at">
            7+ Senior
            <div class="puppy hundred"></div>
            103 days
          </div>

        </div>

        <p className="note" >Note: Starts at date of transport</p>
        <div></div>
      </div>
      <div className="line-chart-2">
        <h2 className="time-adopt-heading">Avg Time to Adopt over Time</h2>
        <Line
          className="at-line-chart-style"
          data={data}
          options={options}
          // width="10%"
          // height="10%"
        ></Line>
      </div>
    </div>
  );
}
