import { z } from "zod";

const ACCEPTED_IMAGE_TYPES = [ "image/jpeg", "image/jpg", "image/png", "image/gif", "image/svg+xml" ];

export const loginSchema = z.object({
  email: z.string().email("Email tidak valid"),
  password: z.string().min(8, "Password minimal 8 karakter"),
});

export type TLogin = z.infer<typeof loginSchema>;

export const AddAdminSchema = z
  .object({
    name: z
      .string()
      .min(3, { message: "Nama minimal 3 karakter" })
      .max(50, { message: "Nama maksimal 50 karakter" }),

    email: z.string().email({ message: "Email tidak valid" }),

    role: z.enum(["super admin", "teacher", "admin"], {
      errorMap: () => ({
        message:
          "Role hanya bisa salah satu dari: Super Admin, Teacher, atau Admin",
      }),
    }),

    photo: z.custom<FileList>().refine((files) =>!files || ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type), "Hanya format .jpg, .jpeg, .png, .gif dan .svg yang didukung"),


    password: z
      .string()
      .min(8, { message: "Password minimal 8 karakter" })
      .max(128, { message: "Password maksimal 128 karakter" }),

    confirmPassword: z
      .string()
      .min(1, { message: "Konfirmasi password harus diisi" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password tidak cocok",
    path: ["confirmPassword"],
  });

export type TAddAdmin = z.infer<typeof AddAdminSchema>;
