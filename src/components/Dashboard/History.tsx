"use client";

import { useTransactions } from "@/hooks/transactions/useTransactions";
import { Card, CardBody, CardHeader } from "@heroui/react";
import CardHistory from "../Card/CardHistory";

const History = () => {
  const { data } = useTransactions();
  const history = data?.data?.data;

  return (
    <Card className="col-span-12 rounded-[10px] bg-white px-7.5 pt-7.5 shadow-1 dark:bg-gray-dark dark:shadow-card xl:col-span-5">
      <CardHeader>
        <h5 className="h5">Riwayat Transaksi Akhir ini</h5>
      </CardHeader>

      <CardBody className="flex flex-col gap-4" >
        {history?.length > 0 ? history?.slice(0, 4).map((item: any) => (
          <CardHistory key={item} {...item} />
        )) : <p>Tidak data ditemukan...</p>}
      </CardBody>
    </Card>
  );
};

export default History;
