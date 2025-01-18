import { axiosInstance } from "@/lib/axios";
import { TLogin } from "@/lib/Schema";
import { useRouter } from "next/navigation";
import { useMutation } from "react-query";
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


export {
  useLoginAdmin
}