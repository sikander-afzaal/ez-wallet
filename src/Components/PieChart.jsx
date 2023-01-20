import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["CO2 MINER", "CO2 MINER", "CO2 MINER", "CO2 MINER", "CO2 MINER"],
  datasets: [
    {
      label: "Spent Last Month",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: ["#4ADAB4", "#B89CFD", "#FFB2F5", "#FFA6A6", "#54A0FF"],
      borderColor: ["#4ADAB4", "#B89CFD", "#FFB2F5", "#FFA6A6", "#54A0FF"],
      borderWidth: 1,
    },
  ],
};
// const options = {
//   plugins: {
//     legend: {
//       position: "left",
//     },
//   },
// };

export function PierChart() {
  return <Pie data={data} />;
}
