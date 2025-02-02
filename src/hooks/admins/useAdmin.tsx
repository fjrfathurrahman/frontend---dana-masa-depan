import { axiosInstance } from "@/lib/axios";
import { TAddAdmin, TLogin } from "@/lib/Schema";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { toast } from "sonner";

/**
 * * function untuk melakukan login admin
 *
 * @returns {UseMutationResult}
 * @example
 */
function useLoginAdmin() {
  const router = useRouter();

  return useMutation({
    mutationFn: async (data: FormData) => axiosInstance.post("/admins/login", data),
    onSuccess: (data) => {
      localStorage.setItem('user', JSON.stringify(data.data.admin));

      router.push("/dashboard");
      toast.success("Login berhasil!, mohon tunggu...");
    },
    onError: (e: AxiosError) => {
      const status = (e?.response?.data as { status: number }).status;

      if (status === 404) {
        toast.error("User tidak ditemukan");
      } else if (status === 401) {
        toast.error("Password salah");
      } else {
        toast.error("Terjadi kesalahan");
      }
    },
  });
}

/**
 * * function untuk melakukan get admin dengan id atau tanpa id
 *
 * @param {string} [id] - id admin yang ingin diambil
 * @returns {UseMutationResult}
 */
function useGetAdmin(id?: string | number) {
  const url = `admins/${id || ''}`;

  return useQuery({
    queryKey: ['admins', id],
    refetchInterval: 10000,
    queryFn: async () => axiosInstance.get(url),
    onError: () => {
      toast.error('Terjadi kesalahan');
    },
  });
}


/**
 * * function untuk melakukan tambah admin
 *
 * @returns {UseMutationResult}
 * @example
 */
function useAddAdmin() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: FormData) => axiosInstance.post("/admins", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admins'] });
      toast.success("Action berhasil!");
    },
    onError: () => {
      toast.error("Terjadi kesalahan");
    },
  })
}


/**
 * * function untuk menghapus admin berdasarkan id
 *
 * @param {string} id - id admin yang ingin dihapus
 * @returns {UseMutationResult} - hasil mutasi untuk operasi penghapusan
 */
function useDeleteAdmin() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: number) => axiosInstance.delete(`/admins/${id}`),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['admins'], refetchActive: true });
      toast.success("Action berhasil!");
    },
    onError: (context: { previousAdmins: any }) => {
      queryClient.setQueryData(['admins'], context.previousAdmins);
      toast.error("Terjadi kesalahan");
    },
  });
}

/**
 * * function untuk mengupdate admin berdasarkan id
 *
 * @param {string | number} id - id admin yang ingin diupdate
 * @returns {UseMutationResult} - hasil mutasi untuk operasi pengupdatean
 */
function useUpdateAdmin(id: string | number) {
  return useMutation({
    mutationFn: async (data: FormData) => axiosInstance.post(`/admins/edit/${id}`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }),
    mutationKey: ['admins', id],
    onSuccess: () => {
      toast.success("Action berhasil!");
    },
    onError: () => {
      toast.error("Terjadi kesalahan");
    },
  })
}

export { useLoginAdmin, useUpdateAdmin, useGetAdmin, useAddAdmin, useDeleteAdmin };
