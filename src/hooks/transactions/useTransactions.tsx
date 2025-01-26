import { axiosInstance } from "@/lib/axios";
import { useMutation, useQuery } from "react-query";
import { toast } from "sonner";
import * as XLSX from "xlsx";

/**
 * A custom hook to add a new transaction.
 *
 * @returns {UseMutationResult} - The result of the mutation, including status and functions
 */
function useTransaction() {
  return useMutation(
    async (data: FormData) => {
      await axiosInstance.post("/transactions", data);
    },
    {
      onSuccess: () => {
        toast.success("Action berhasil!");
      },
      onError: () => {
        toast.error("Terjadi kesalahan");
      },
    },
  );
}

/**
 * A custom hook to fetch all transaction data.
 *
 * @returns {UseQueryResult} - The result of the query, including status, data, and error information.
 */
function useGetTransactions() {
  return useQuery({
    queryFn: async () => await axiosInstance.get("transactions"),
    queryKey: ["transactions"],
    staleTime: 10000,
    onSuccess: (data) => console.log(data),
    onError: () => {
      toast.error("Terjadi kesalahan");
    },
  });
}

/**
 * A custom hook to fetch transactions by student ID.
 *
 * @param {string} id - The student ID for which transactions are retrieved.
 * @returns {UseQueryResult} - The result of the query, including status, data, and error information.
 */
function useGetTransactionByStudent(id: string) {
  return useQuery({
    queryFn: async () =>
      await axiosInstance.get(`transactions/getTransactionsByStudentId/${id}`),
    queryKey: ["transactions", id],
    staleTime: 10000,
    // onSuccess: (data) => console.log(data),
    onError: () => {
      toast.error("Terjadi kesalahan");
    },
  });
}

/**
 * A custom hook to fetch the top balance of transactions.
 *
 * @returns {UseQueryResult} - The result of the query, including status, data, and error information.
 */
function useGetTopBalance() {
  return useQuery({
    queryFn: async () => await axiosInstance.get("transactions/top-balances"),
    queryKey: ["top-balance"],
    staleTime: 10000,
    // onSuccess: (data) => console.log(data),
    onError: () => {
      toast.error("Terjadi kesalahan");
    },
  })
}

/**
 * A custom hook to fetch the weekly summary of transactions.
 *
 * @returns {UseQueryResult<WeeklyTransaction[]>} - The result of the query, including status, data, and error information.
 */

export function useGetWeeklySummary() {
  return useQuery<WeeklyTransaction[]>({
    queryFn: async () => {
      const response = await axiosInstance.get("/transactions/weekly-summary");
      const data = response.data.data;

      // Format tanggal menjadi nama hari
      const formattedData = data.map((item: WeeklyTransaction) => ({
        ...item,
        day: new Intl.DateTimeFormat("id-ID", { weekday: "long" }).format(
          new Date(item.date),
        ),
      }));

      return formattedData;
    },
    queryKey: ["weekly-summary"],
    staleTime: 10000,
    onSuccess: (data) => console.log("Weekly Summary Fetched:", data),
    onError: () => {
      toast.error("Terjadi kesalahan saat mengambil data.");
    },
  });
}

/**
 * Export data to an Excel file.
 *
 * @param {any[]} data - Data to be exported.
 * @param {string} filename - The name of the file to be exported (without extension).
 */
function ExportTransactions(data: any[], filename: string) {
  const worksheet = XLSX.utils.json_to_sheet(data);
  const workbook = XLSX.utils.book_new();

  XLSX.utils.book_append_sheet(workbook, worksheet, "Transactions");
  XLSX.writeFile(workbook, `${filename}.xlsx`);
}

function ExportTransactionsByStudent(id: string | number) {
  return useMutation({
    mutationFn: async (id: string | number) => {
      const response = await axiosInstance.get(`/transactions/student/${id}`, {
        responseType: "blob",
      });

      // Proses unduhan file
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `Transactions_Student_${id}.xlsx`);

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    },
    onSuccess: () => {
      toast.success("File berhasil diunduh.");
    },
    onError: () => {
      toast.error("Gagal mengunduh file.");
    },
  });
}

export interface WeeklyTransaction {
  date: string;
  day: string;
  total_deposit: number;
  total_withdrawal: number;
}

export {
  useTransaction,
  useGetTransactions,
  ExportTransactions,
  useGetTransactionByStudent,
  ExportTransactionsByStudent,
  useGetTopBalance
};
