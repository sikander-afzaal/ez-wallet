import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["CO2 MINER", "CO2 MINER", "CO2 MINER", "CO2 MINER"],
  datasets: [
    {
      label: "Rewards",
      data: [12, 19, 3, 5],
      backgroundColor: ["#4ADAB4", "#B89CFD", "#FFB2F5", "#FFA6A6"],
      borderColor: ["#4ADAB4", "#B89CFD", "#FFB2F5", "#FFA6A6"],
      borderWidth: 1,
    },
  ],
};

function DoughnutApp() {
  return <Doughnut data={data} />;
}

export default DoughnutApp;
