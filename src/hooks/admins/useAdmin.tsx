import { axiosInstance } from "@/lib/axios";
import { TAddAdmin, TLogin } from "@/lib/Schema";
import { useDisclosure } from "@heroui/react";
import { useRouter } from "next/navigation";
import { useMutation, useQuery } from "react-query";
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
    mutationFn: async (data: TLogin) => axiosInstance.post("/login", data),
    onSuccess: (data) => {
      router.push("/dashboard");
      toast.success("Login berhasil!");
    },
    onError: () => {
      toast.error("Terjadi kesalahan");
    },
  });
}

/**
 * * function untuk melakukan get admin dengan id atau tanpa id
 *
 * @param {string} [id] - id admin yang ingin diambil
 * @returns {UseMutationResult}
 */
function useGetAdmin(id?: string) {
  const url = `admins/${id || ''}`;

  return useQuery({
    queryKey: ['admins', id],
    queryFn: async () => axiosInstance.get(url),
    onError: () => {
      toast.error('Terjadi kesalahan');
    },
  });
}


function useAddAdmin() {
  const { onClose } = useDisclosure();

  return useMutation({
    mutationFn: async (data: FormData) => axiosInstance.post("/admins", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }),
    onSuccess: (data) => {
      onClose()
      toast.success("Action berhasil!");
    },
    onError: () => {
      toast.error("Terjadi kesalahan");
    },
  })
}

export { useLoginAdmin, useGetAdmin, useAddAdmin };
