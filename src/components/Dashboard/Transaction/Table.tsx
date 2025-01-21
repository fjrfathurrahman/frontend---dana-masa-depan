"use client";

import TableData from "@/components/Table";
import { useGetTransactions } from "@/hooks/transactions/useTransactions";

const TableTransaction = () => {
  const { data, status } = useGetTransactions();
  const transactions = data?.data?.data;

  return (
    <>
      <TableData
        data={transactions}
        status={status}
        columns={[
          { key: "id", label: "No" },
          { key: "admin.name", label: "Nama" },
          { key: "type", label: "Type" },
          { key: "amount", label: "Jumlah" },
          { key: "actions", label: "Action" },
        ]}
      />
    </>
  );
};

export default TableTransaction;
