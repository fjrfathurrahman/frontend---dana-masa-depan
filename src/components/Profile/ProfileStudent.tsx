"use client";

import { useGetStudent } from "@/hooks/students/useStudent";
import Profile from "../Template/Profile";
import { Chip } from "@heroui/react";
import { formatedCurrency, formattedDate } from "@/utils/formated";
import { icons } from "@/resource/icons";
import { ExportTransactionsByStudent } from "@/hooks/transactions/useTransactions";

const ProfileStudent = () => {
  const getUser = localStorage.getItem("student");
  const id = getUser ? JSON.parse(getUser).id : null;

  // Get student
  const { data } = useGetStudent(id);
  const student = data?.data.data;

  // Export transactions by student
  const { mutate, isLoading: loadExport } = ExportTransactionsByStudent(id);

  return (
    <Profile
      parent
      className="col-span-1 lg:col-span-7 xl:col-span-8"
      actions={{
        download: {
          handleDownload: () => mutate(id),
          load: loadExport,
        },
      }}
      bio={{
        name: student?.name,
        class: student?.class,
        photo: student?.photo,
        phone: student?.phone,
        listData: [
          { label: "NISN", value: student?.student_number },
          { label: "Nama", value: student?.name },
          { label: "Jenis Kelamin", value: student?.gender },
          { label: "Email", value: student?.email },
          { label: "Nomor Telepon", value: student?.phone },
          { label: "Kelas", value: student?.class + " " + student?.major },
          { label: "Diterima", value: formattedDate(student?.approved_at as string) },
          { label: "Dibuat", value: formattedDate(student?.created_at as string) },
          {
            label: "Saldo",
            value: (
              <Chip color="warning" variant="flat" startContent={icons.coin}>
                {formatedCurrency(parseFloat(student?.balance as string ?? 0))}
              </Chip>
            ),
          },
        ],
      }}
    />
  );
};

export default ProfileStudent;
