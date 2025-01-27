"use client";

import { useGetTopBalance, useGetTransactions, useGetWeeklySummary } from "@/hooks/transactions/useTransactions";
import ChartTransaction from "./Transaction/ChartTransaction";
import History from "./Transaction/History";
import Overview from "@/components/DataStats/Overview";
import TopBalances from "./Transaction/TopBalances";
import Average from "./Transaction/Average";
import { useGetOverview } from "@/hooks/useGetOverview";
import Calendar from "./Transaction/Calendar";
import { Spinner } from "@heroui/react";

const SavingsDashboard: React.FC = () => {
  const { data: dataChart, isLoading: loadChart } = useGetWeeklySummary();
  const { data: dataTransactions, isLoading: loadTransactions } = useGetTransactions();
  const { data: dataBalance, isLoading: loadTopBalance } = useGetTopBalance();
  const { data: dataSummary, isLoading: loadSummary } = useGetOverview();

  const summary = dataSummary?.data.data

  if (loadSummary || loadTransactions || loadTopBalance || loadChart ) return <div className="flex h-screen items-center justify-center bg-white dark:bg-dark rounded-xl"><Spinner size="lg"/></div>;

  return (
    <>
      <Overview data={summary} />

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-9 2xl:gap-7.5">
        {dataChart && <ChartTransaction data={dataChart} />}
        {dataBalance && <TopBalances data={dataBalance} />}
        {dataTransactions && <History data={dataTransactions} />}
        {summary && <Average data={summary} />}
        <Calendar />
      </div>
    </>
  );
};

export default SavingsDashboard;
