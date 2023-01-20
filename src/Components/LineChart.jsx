import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    x: {
      ticks: {
        color: "#fff",
      },
      grid: {
        color: "rgba(255,255,255,0.2)",
      },
    },
    y: {
      grid: {
        color: "rgba(255,255,255,0.2)",
      },
      ticks: {
        color: "#fff",
        callback: (value, index, ticks) => {
          return "CO2 MINER";
        },
      },
    },
  },
};

const labels = ["WEEK 1", "WEEK 2", "WEEK 3", "WEEK 4"];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: [1000, 1200, 1600, 1000],
      borderColor: "#B89CFD",
      backgroundColor: "#B89CFD",
    },
    {
      label: "Dataset 2",
      data: [2000, 1800, 1000, 2000],
      borderColor: "#4ADAB4",
      backgroundColor: "#4ADAB4",
    },
  ],
};

export function LineChart() {
  return <Line options={options} data={data} />;
}
