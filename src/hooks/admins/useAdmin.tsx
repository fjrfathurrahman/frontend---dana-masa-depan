import { axiosInstance } from "@/lib/axios";
import { TAddAdmin, TLogin } from "@/lib/Schema";
import { useDisclosure } from "@heroui/react";
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
    mutationFn: async (data: TLogin) => axiosInstance.post("/admins/login", data),
    onSuccess: (data) => {
      localStorage.setItem('user', JSON.stringify(data.data.admin));

      router.push("/dashboard");
      toast.success("Login berhasil!");
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
  const { onClose } = useDisclosure();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: FormData) => axiosInstance.post("/admins", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['admins'] });
      onClose()
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
  // const queryClient = useQueryClient();
  const { onClose } = useDisclosure();

  return useMutation({
    mutationFn: async (id: number) => axiosInstance.delete(`/admins/${id}`),
    onSuccess: (data) => {
      onClose();
      toast.success("Action berhasil!");
    },
    onError: () => {
      toast.error("Terjadi kesalahan");
    },
  });
}

export { useLoginAdmin, useGetAdmin, useAddAdmin, useDeleteAdmin };
