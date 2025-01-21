import { axiosInstance } from "@/lib/axios";
import { useMutation, useQuery } from "react-query";
import { toast } from "sonner";

/**
 * A custom hook to add a new transaction.
 *
 * @returns {UseMutationResult} - The result of the mutation, including status and functions
 */
function useTransaction() {
  return useMutation({
    mutationFn: async (data: FormData) => axiosInstance.post("/transactions", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }),
    mutationKey: ['transactions'],
    refetchInterval: 10000,
    onSuccess: () => {
      toast.success("Action berhasil!");
    },
    onError: () => {
      toast.error("Terjadi kesalahan");
    }
  })
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
    }

  })
}

export {
  useTransaction,
  useGetTransactions
}