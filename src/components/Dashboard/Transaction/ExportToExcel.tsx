'use client';

import { ExportTransactions, useGetTransactions } from "@/hooks/transactions/useTransactions";
import { icons } from "@/resource/icons";
import { Button } from "@heroui/react";

const ExportToExcel = () => {
  const { data: transactions, isLoading } = useGetTransactions();

  const handleExport = () => {
    if (!transactions) return;

    // Format data untuk ekspor
    const formattedData = transactions.data.data.map((item: any) => ({
      ID: item.id,
      "Student Name": item.student.name,
      Class: item.student.class,
      Major: item.student.major,
      "Admin Name": item.admin.name,
      "Admin Role": item.admin.role,
      Type: item.type,
      Amount: item.amount,
      "Created At": item.created_at,
      "Updated At": item.updated_at,
    }));

    // Ekspor ke Excel
    ExportTransactions(formattedData, "Transactions");
  };

  return (
    <Button onClick={handleExport} color="warning" className="text-white font-medium">
      {icons.export}
      Export
    </Button>
  );
};


export default ExportToExcel