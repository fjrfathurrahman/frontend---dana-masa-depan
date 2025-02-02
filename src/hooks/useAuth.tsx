import { axiosInstance } from "@/lib/axios";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { useMutation } from "react-query";
import { toast } from "sonner";

/**
 * A custom hook to login a user.
 *
 * @returns {UseMutationResult} - The result of the mutation, including status and functions
 */
export function useLogin() {
  const router = useRouter();

  return useMutation({
    mutationFn: async (data: {
      email: string;
      password: string;
      role: "admin" | "student";
    }) => axiosInstance.post("/auth/login", data),
    onSuccess: (data, variables) => {
      const { role } = variables;
      const userData = data.data.data;

      // Simpan di localStorage dengan key yang berbeda
      localStorage.setItem(role, JSON.stringify(userData));

      // Redirect berdasarkan peran
      if (role === "admin") {
        router.push("/dashboard");
      } else {
        router.push("/profile");
      }

      toast.success("Login berhasil! Mohon tunggu...");
    },
    onError: (e: AxiosError) => {
      const status = (e?.response?.data as { status: number }).status;

      if (status === 404) {
        toast.error("User tidak ditemukan");
      } else if (status === 401) {
        toast.error("Password salah");
      } else if (status === 403) {
        toast.error("Akun belum disetujui oleh admin");
      } else {
        toast.error("Terjadi kesalahan, coba lagi nanti.");
      }
    },
  });
}

/**
 * A custom hook to change the user's password.
 *
 * @returns {UseMutationResult} - The result of the mutation, including status and functions
 */
export function useChangePassword() {
  return useMutation({
    mutationFn: async (data: {
      email: string;
      old_password: string;
      new_password: string;
      role: "admin" | "student";
    }) => axiosInstance.post("/auth/change-password", data),
    onSuccess: () => {
      toast.success("Password berhasil diubah");
    },
    onError: () => {
      toast.error("Terjadi kesalahan, coba lagi nanti.");
    },
  })
}