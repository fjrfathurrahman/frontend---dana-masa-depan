"use client";

import { useGetTransactions } from "@/hooks/transactions/useTransactions";
import { Card, CardBody, CardHeader } from "@heroui/react";
import CardHistory from "../../Card/CardHistory";

const History = ({data}: {data: any}) => {
  const history = data?.data?.data;

  // Sort the history array in descending order
  const sortedHistory = history?.slice().sort((a: any, b: any) => {
    const dateA = new Date(a.created_at).getTime();
    const dateB = new Date(b.created_at).getTime();
    return dateB - dateA; 
  });

  return (
    <Card className="col-span-12 rounded-[10px] bg-white px-7.5 py-7.5 dark:bg-gray-dark xl:col-span-5">
      <CardHeader>
        <h5 className="h5">Riwayat Transaksi Akhir ini</h5>
      </CardHeader>

      <CardBody className="flex flex-col gap-4" >
        {sortedHistory?.length > 0 ? sortedHistory?.slice(0, 3).map((item: any) => (
          <CardHistory key={item} {...item} />
        )) : <p>Tidak data ditemukan...</p>}
      </CardBody>
    </Card>
  );
};

export default History;
