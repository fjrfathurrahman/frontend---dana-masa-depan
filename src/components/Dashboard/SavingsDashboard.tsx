"use client";

import ChartTwo from "../Charts/ChartTwo";
import ChatCard from "../Chat/ChatCard";
import TableOne from "../Tables/TableOne";
import ChartOne from "@/components/Charts/ChartOne";
import Overview from "@/components/DataStats/Overview";

const SavingsDashboard: React.FC = () => {
  return (
    <>
      <Overview />

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-9 2xl:gap-7.5">
        <ChartOne />
        <ChartTwo />
        <div className="col-span-12 xl:col-span-8">
          <TableOne />
        </div>
        <ChatCard />
      </div>
    </>
  );
};

export default SavingsDashboard;
