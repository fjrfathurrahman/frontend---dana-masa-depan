"use client";

import { useGetTopBalance, useGetTransactions, useGetWeeklySummary } from "@/hooks/transactions/useTransactions";
import ChartTransaction from "./Transaction/ChartTransaction";
import History from "./Transaction/History";
import Overview from "@/components/DataStats/Overview";
import TopBalances from "./Transaction/TopBalances";

const SavingsDashboard: React.FC = () => {
  const { data: dataSummary, isLoading: loadSummary } = useGetWeeklySummary();
  const { data: dataTransactions, isLoading: loadTransactions } = useGetTransactions();
  const { data: dataBalance, isLoading: loadTopBalance } = useGetTopBalance();

  if (loadSummary || loadTransactions) return null;

  return (
    <>
      <Overview />

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-9 2xl:gap-7.5">
        {dataSummary && <ChartTransaction data={dataSummary} />}
        {dataBalance && <TopBalances data={dataBalance} />}
        {dataTransactions && <History data={dataTransactions} />}
      </div>
    </>
  );
};

export default SavingsDashboard;
