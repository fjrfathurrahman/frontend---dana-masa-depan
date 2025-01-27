"use client";

import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const Average = ({ data }: { data: any }) => {
  const chartData = {
    data: {
      labels: ["Deposit", "Withdrawal"],
      datasets: [
        {
          arc: true,
          label: "Transaksi Rata Rata",
          data: [data?.total_deposit, data?.total_withdrawal],
          backgroundColor: ["#45d483", "#f7b750"],
          hoverBackgroundColor: ["#17c964", "#f5a524"],
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "Chart.js Pie Chart",
        },
      },
    },
  };

  return (
    <div className="col-span-4 h-max rounded-[10px] bg-white p-8 shadow-1 dark:bg-gray-dark dark:shadow-card">
      <h5 className="h5 mb-6">Transaksi Rata Rata</h5>
      <Pie data={chartData.data} />
    </div>
  );
};

export default Average;
