import { axiosInstance } from "@/lib/axios";
import { TLogin } from "@/lib/Schema";
import axios from "axios";
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
    queryKey: ['admin', id], // Key unik untuk caching
    queryFn: async () => axiosInstance.get(url),
    onError: () => {
      toast.error('Terjadi kesalahan');
    },
  });
}

export { useLoginAdmin, useGetAdmin };
