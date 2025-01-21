import { axiosInstance } from "@/lib/axios";
import { useQuery } from "react-query";
import { toast } from "sonner";

/**
 * A custom hook to fetch an overview summary from the dashboard API.
 *
 * @returns {UseQueryResult} - The result of the query, including status, data, and error information.
 */
export function useGetOverview() {
  return useQuery({
    queryKey: ["overview"],
    queryFn: async () => await axiosInstance.get("dashboard/summary"),
    refetchInterval: 10000,
    // onSuccess: () => {},
    onError: () => {
      toast.error("Terjadi kesalahan");
    },
  });
}