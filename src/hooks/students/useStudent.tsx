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
  const url = `students/${id || ""}`;

  return useQuery({
    queryKey: ["students", id],
    queryFn: async () => axiosInstance.get(url),
    refetchInterval: 10000,
    onError: () => {
      toast.error("Terjadi kesalahan");
    },
  });
}

/**
 * A custom hook to fetch students based on their status.
 *
 * @param {('pending' | 'approved' | 'rejected' | string)} status - The status of the students to retrieve.
 * @returns {UseQueryResult} - The result of the query, including status, data, and error information.
 */
function useGetStudentByStatus(status: 'pending' | 'approved' | 'rejected' | string) {
  return useQuery({
    queryKey: ["students", status],
    queryFn: async () => axiosInstance.get(`/students/by-status?status=${status}`),
    refetchInterval: 10000,
    onError: () => {
      toast.error("Terjadi kesalahan");
    },
  });
}

/**
 * A custom hook to update the status of a student.
 *
 * @returns {UseMutationResult} - The result of the mutation, including status and functions
 */
function useUpdateStatus() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ id, status }: { id: number | string; status: string }) => {
      const response = await axiosInstance.post(
        `/students/${id}/status`,
        { status, _method: 'PUT' } 
      );
      return response.data; 
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["students"] });
      toast.success("Action berhasil!");
    },
    onError: () => {
      toast.error("Terjadi kesalahan");
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
    mutationFn: async (data: FormData) =>
      axiosInstance.post("/students", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["students"],
        refetchActive: true,
      });
      toast.success("Action berhasil!");
    },
    onError: () => {
      toast.error("Terjadi kesalahan");
    },
  });
}

/**
 * * A custom hook to update student data.
 *
 * @param {string | number} id - The ID of the student to update.
 * @returns {UseMutationResult} - The result of the mutation, including status and functions
 */
function useUpdateStudent(id: number | string) {
  return useMutation({
    mutationFn: async (data: FormData) =>
      axiosInstance.post(`/students/edit/${id}`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }),
    mutationKey: ["students", id],
    onSuccess: () => {
      toast.success("Action berhasil!");
    },
    onError: () => {
      toast.error("Terjadi kesalahan");
    },
  });
}
/**
 * * a custom hook to delete a student
 *
 * @param {string | number} id - id student yang ingin dihapus
 * @returns {UseMutationResult} - hasil mutasi untuk operasi penghapusan
 */
function useDeleteStudent() {
  return useMutation({
    mutationFn: async (id: number | string) =>
      axiosInstance.delete(`/students/${id}`),
    mutationKey: ["students"],
    onSuccess: () => {
      toast.success("Action berhasil!");
    },
    onError: () => {
      toast.error("Terjadi kesalahan");
    },
  });
}

function ExportStudents() {
  return useMutation({
    mutationFn: async () => {
      const response = await axiosInstance.get(`/students/export`, {
        responseType: "blob",
      });

      // Proses unduhan file
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "students.xlsx");

      document.body.appendChild(link);
      link.click();
      window.URL.revokeObjectURL(url);
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

export {
  useGetStudent,
  useAddStudent,
  useUpdateStudent,
  useDeleteStudent,
  useGetStudentByStatus,
  ExportStudents,
  useUpdateStatus
};
