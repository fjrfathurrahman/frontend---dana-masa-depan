import { axiosInstance } from "@/lib/axios";
import { useMutation, useQuery, useQueryClient } from "react-query";
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
    refetchInterval: 10000,
    onError: () => {
      toast.error('Terjadi kesalahan');
    },
  });
}

/**
 * * A custom hook to add a new student.
 *
 * @returns {UseMutationResult} - The result of the mutation, including status and functions
 */
function useAddStudent() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: FormData) => axiosInstance.post("/students", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['students'], refetchActive: true });
      toast.success("Action berhasil!");
    },
    onError: () => {
      toast.error("Terjadi kesalahan");
    },
  })
}

export {
  useGetStudent,
  useAddStudent
}