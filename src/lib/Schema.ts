import { z } from "zod";

const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/gif",
  "image/svg+xml",
];

export const loginSchema = z.object({
  email: z.string().email("Email tidak valid"),
  password: z.string().min(8, "Password minimal 8 karakter"),
  role: z.enum(["admin", "student"]),
});

export type TLogin = z.infer<typeof loginSchema>;

export const UpdateAdminSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Nama minimal 3 karakter" })
    .max(50, { message: "Nama maksimal 50 karakter" })
    .optional(),
  email: z.string().email({ message: "Email tidak valid" }).optional(),
  role: z.string().optional(),
  photo: z
    .custom<FileList>()
    .refine(
      (files) => !files || ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
      "Hanya format .jpg, .jpeg, .png, .gif dan .svg yang didukung",
    )
    .optional(),
  password: z
    .string()
    .min(8, { message: "Password minimal 8 karakter" })
    .max(128, { message: "Password maksimal 128 karakter" })
    .optional(),
  confirmPassword: z
    .string()
    .min(1, { message: "Konfirmasi password harus diisi" })
    .optional(),
});

export type TUpdateAdmin = z.infer<typeof UpdateAdminSchema>;

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

    photo: z
      .custom<FileList>()
      .refine(
        (files) => !files || ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
        "Hanya format .jpg, .jpeg, .png, .gif dan .svg yang didukung",
      ),

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

export const UpdateStudentSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Nama minimal 3 karakter" })
    .max(50, { message: "Nama maksimal 50 karakter" })
    .optional(),
  student_number: z
    .string()
    .min(3, { message: "NISN minimal 3 karakter" })
    .max(11, { message: "NISN maksimal 11 karakter" })
    .optional(),
  class: z
    .enum(["X", "XI", "XII"], {
      errorMap: () => ({
        message: "Kelas hanya bisa salah satu dari: X, XI, atau XII",
      }),
    })
    .optional(),
  major: z
    .string()
    .min(3, { message: "Jurusan minimal 3 karakter" })
    .max(50, { message: "Jurusan maksimal 50 karakter" })
    .optional(),
  gender: z
    .enum(["Laki-laki", "Perempuan"], {
      errorMap: () => ({
        message:
          "Jenis kelamin hanya bisa salah satu dari: Laki-laki atau Perempuan",
      }),
    })
    .optional(),
  address: z
    .string()
    .min(3, { message: "Alamat minimal 3 karakter" })
    .optional(),
  email: z.string().email({ message: "Email tidak valid" }).optional(),
  phone: z
    .string()
    .min(3, { message: "Nomor handphone minimal 3 karakter" })
    .max(13, { message: "Nomor handphone maksimal 13 karakter" })
    .optional(),
  photo: z
    .custom<FileList>()
    .refine(
      (files) => !files || ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
      "Hanya format .jpg, .jpeg, .png, .gif dan .svg yang didukung",
    )
    .optional(),
});

export type TUpdateStudent = z.infer<typeof UpdateStudentSchema>;

export const AddStudentSchema = z
  .object({
    name: z
      .string()
      .min(3, { message: "Nama minimal 3 karakter" })
      .max(260, { message: "Nama maksimal 260 karakter" }),
    student_number: z
      .string()
      .min(3, { message: "NISN minimal 3 karakter" })
      .max(11, { message: "NISN maksimal 11 karakter" }),
    class: z.enum(["X", "XI", "XII"], {
      errorMap: () => ({
        message: "Kelas hanya bisa salah satu dari: X, XI, atau XII",
      }),
    }),
    major: z
      .string()
      .min(3, { message: "Jurusan minimal 3 karakter" })
      .max(50, { message: "Jurusan maksimal 50 karakter" }),
    gender: z.enum(["Laki-laki", "Perempuan"], {
      errorMap: () => ({
        message:
          "Jenis kelamin hanya bisa salah satu dari: Laki-laki atau Perempuan",
      }),
    }),
    address: z
      .string()
      .min(3, { message: "Alamat minimal 3 karakter" })
      .max(260, { message: "Alamat maksimal 260 karakter" }),
    email: z.string().email({ message: "Email tidak valid" }),
    phone: z
      .string()
      .min(3, { message: "Nomor handphone minimal 3 karakter" })
      .max(13, { message: "Nomor handphone maksimal 13 karakter" }),
    photo: z
      .custom<FileList>()
      .refine(
        (files) => !files || ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
        "Hanya format .jpg, .jpeg, .png, .gif dan .svg yang didukung",
      ),
    password: z
      .string()
      .min(8, { message: "Password minimal 8 karakter" })
      .max(128, { message: "Password maksimal 128 karakter" }),
    confirmPassword: z
      .string()
      .min(8, { message: "Konfirmasi password minimal 8 karakter" })
      .max(128, { message: "Konfirmasi password maksimal 128 karakter" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Konfirmasi password tidak sesuai dengan password",
    path: ["confirmPassword"],
  });

export type TAddStudent = z.infer<typeof AddStudentSchema>;

export const TransactionSchema = z.object({
  student_id: z.string().nonempty("Siswa harus dipilih."),
  type: z.string(),
  amount: z.preprocess(
    (value) => {
      const parsedValue = parseFloat(value as string);
      return isNaN(parsedValue) ? null : parsedValue;
    },
    z.number().min(1, "Jumlah transaksi harus lebih dari 0"),
  ),
});

export type TTransactionSchema = z.infer<typeof TransactionSchema>;
