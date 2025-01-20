import { axiosInstance } from "@/lib/axios";
import { useQuery } from "react-query";
import { toast } from "sonner";

function useTransactions() {
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
  useTransactions
}