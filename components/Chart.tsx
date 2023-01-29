"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const data = {
  labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  datasets: [
    {
      data: [0.1, 0.4, 0.3, 0.6, 0.9, 0.8, 0.7, 0.9,0.1, 0.4, 0.3 , 0.6],
    },
  ],
};
const options = {
  plugins: {
    legend: { display: false },
  },
  elements: {
    line: {
      tension: 0,
      borderWidth: 2,
      borderColor: "#b59deb",
      fill: "start",
  
    },
    point: {
      radius: 0,
      hitRadius: 0,
    },
  },

  scales: {
    xAxis: {
      display: false,
    },
    yAxis: {
      display: false,
    },
  },
};



export { data, options };
