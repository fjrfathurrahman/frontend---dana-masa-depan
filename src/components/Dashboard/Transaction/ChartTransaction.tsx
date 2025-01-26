import { Card, CardBody, CardHeader } from "@heroui/react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { useGetWeeklySummary } from "@/hooks/transactions/useTransactions";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ChartTransaction = ({data}: {data: any[]}) => {

  // Format data untuk Chart.js
  const labels = data?.map((item) => item.day);
  const depositData = data?.map((item) => item.total_deposit);
  const withdrawalData = data?.map((item) => item.total_withdrawal);

  const chartData = {
    labels,
    datasets: [
      {
        label: "Deposit",
        data: depositData,
        backgroundColor: "rgba(54, 162, 235, 0.5)", 
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
      {
        label: "Withdrawal",
        data: withdrawalData,
        backgroundColor: "rgba(255, 99, 132, 0.5)", 
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Ringkasan Transaksi Minggu ini",
      },
    },
  };

  return (
    <Card className="col-span-12 rounded-[10px] bg-white px-7.5 pb-6 pt-7.5 dark:bg-gray-dark xl:col-span-7 h-max">
      <CardHeader>
        <h5 className="h5 mb-6">Transaksi Minggu ini</h5>
      </CardHeader>
      <CardBody>
        { data ? <Bar data={chartData} options={options} /> : <p>Data Tidak ada Ditemukan</p> }
      </CardBody>
    </Card>
  );
};

export default ChartTransaction;
