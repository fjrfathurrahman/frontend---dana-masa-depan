"use client";

import { useState, useEffect } from "react";
import { Select, SelectItem } from "@heroui/react";
import CardHistory from "../Card/CardHistory";
import { useGetTransactionByStudent } from "@/hooks/transactions/useTransactions";
import { toast } from "sonner";

const HistoryTransactions = () => {
  const [id, setId] = useState<string | null>(null);
  const [filterType, setFilterType] = useState<string>("all");

  // Ambil student ID dari localStorage
  useEffect(() => {
    try {
      const getUser = localStorage.getItem("student");
      if (getUser) {
        setId(JSON.parse(getUser).id);
      }
    } catch (error) {
      toast.error("Gagal mengambil data pengguna");
    }
  }, []);

  // Fetch data transaksi berdasarkan student ID dan filterType
  const { data, isLoading, isError } = useGetTransactionByStudent(
    id ?? "",
    filterType,
  );
  const transactions = data?.data?.data || [];

  return (
    <div className="space-y-4">
      <div className="pb-4">
        <h3 className="text-xl font-semibold text-dark dark:text-white">
          Riwayat Transaksi Anda
        </h3>
        <p className="text-small">
          Lihat riwayat 5 terakhir transaksi yang telah Anda lakukan
        </p>
      </div>

      <div>
        <Select
          variant="flat"
          label="Type"
          placeholder="Pilih Type Transaksi"
          labelPlacement="outside"
          selectedKeys={[filterType]}
          onChange={(event) => setFilterType(event?.target?.value ?? "all")}
        >
          <SelectItem key="all" value="all">
            Semua
          </SelectItem>
          <SelectItem key="deposit" value="deposit">
            Deposit
          </SelectItem>
          <SelectItem key="withdrawal" value="withdrawal">
            Withdrawal
          </SelectItem>
        </Select>
      </div>

      <div>
        {isLoading && (
          <p className="text-small text-gray-500">Memuat transaksi...</p>
        )}
        {isError && (
          <p className="text-small text-red-500">Gagal memuat transaksi.</p>
        )}
      </div>

      {!isLoading && transactions.length > 0
        ? transactions
            .slice(0, 5)
            .map((item: any) => <CardHistory key={item.id} {...item} />)
        : !isLoading && (
            <h6 className="h6 text-center">Tidak ada riwayat transaksi</h6>
          )}
    </div>
  );
};

export default HistoryTransactions;
