import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
      position: "top",
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
      ticks: {
        display: false,
      },
    },
    y: {
      ticks: {
        display: false,
      },
      grid: {
        display: false,
      },
    },
  },
};

export const data = {
  labels: ["CO2 MINER", "CO2 MINER", "CO2 MINER", "CO2 MINER", "CO2 MINER"],
  datasets: [
    {
      data: [100, 200, 300, 400, 500],
      backgroundColor: ["#4ADAB4", "#B89CFD", "#FFB2F5", "#FFA6A6", "#54A0FF"],
    },
  ],
};

export function BarChart() {
  return <Bar options={options} data={data} />;
}
