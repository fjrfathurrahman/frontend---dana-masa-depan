import { axiosInstance } from "@/lib/axios";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { toast } from "sonner";
import * as XLSX from "xlsx";

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


/**
 * * A custom hook to update student data.
 *
 * @param {string | number} id - The ID of the student to update.
 * @returns {UseMutationResult} - The result of the mutation, including status and functions
 */
function useUpdateStudent(id: number | string) {
  return useMutation({
    mutationFn: async (data: FormData) => axiosInstance.post(`/students/edit/${id}`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      }
    }),
    mutationKey: ['students', id],
    onSuccess: () => {
      toast.success("Action berhasil!");
    },
    onError: () => {
      toast.error("Terjadi kesalahan");
    }
  })
}
/**
 * * a custom hook to delete a student
 *
 * @param {string | number} id - id student yang ingin dihapus
 * @returns {UseMutationResult} - hasil mutasi untuk operasi penghapusan
 */
function useDeleteStudent() {
  return useMutation({
    mutationFn: async (id: number | string) => axiosInstance.delete(`/students/${id}`),
    mutationKey: ['students'],
    onSuccess: () => {
      toast.success("Action berhasil!");
    },
    onError: () => {
      toast.error("Terjadi kesalahan");
    }
  })
}

/**
 * Export student data to an Excel file.
 *
 * @param {any[]} data - The student data to be exported.
 * @param {string} fileName - The name of the file to be exported (without extension).
 */
const ExportStudents = (data: any[], fileName: string) => {
  const worksheet = XLSX.utils.json_to_sheet(data);
  const workbook = XLSX.utils.book_new();

  XLSX.utils.book_append_sheet(workbook, worksheet, "Students");
  XLSX.writeFile(workbook, `${fileName}.xlsx`);
}

export {
  useGetStudent,
  useAddStudent,
  useUpdateStudent,
  useDeleteStudent,
  ExportStudents
}