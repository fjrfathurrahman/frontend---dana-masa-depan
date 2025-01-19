import { axiosInstance } from "@/lib/axios";
import { useQuery } from "react-query";
import { toast } from "sonner";

/**
 * * A custom hook to fetch student data by ID or get all students.
 *
 * @param {string | number} [id] - The ID of the student to retrieve. If not provided, fetches all students.
 * @returns {UseQueryResult} - The result of the query, including status, data, and error information.
 */
function useGetStudent(id?: string | number) {
  const url = `students/${id || ''}`;

  return useQuery({
    queryKey: ['students', id],
    queryFn: async () => axiosInstance.get(url),
    onError: () => {
      toast.error('Terjadi kesalahan');
    },
  });
}

export {
  useGetStudent
}