"use client";

import Profile from "@/components/Template/Profile";
import { useGetStudent } from "@/hooks/students/useStudent";
import { formatedCurrency, formattedDateOnly } from "@/utils/formated";
import { Chip } from "@heroui/react";
import HistoryDetail from "./HistoryDetail";
import { icons } from "@/resource/icons";

const Detail = ({ id }: { id: string }) => {
  const { data, isLoading } = useGetStudent(id);
  const student = data?.data.data;

  if (isLoading) return null;

  return (
    <main>
      <div className="grid grid-cols-6 gap-12">
        <Profile bio={{
            class: student.class,
            name: student.name,
            phone: student.phone,
            photo: student.photo,
            listData: [
              { label: "NISN", value: student.student_number },
              { label: "Nama", value: student.name },
              { label: "Jenis Kelamin", value: student.gender },
              { label: "Kelas", value: student.class + " " + student.major },
              { label: "Saldo", value: (
                  <Chip color="warning" variant="flat" startContent={icons.coin}>
                    {formatedCurrency(student.balance)}
                  </Chip>
                ),
              },
              { label: "Email", value: student.email },
              { label: "No. HP", value: student.phone },
              { label: "Dibuat", value: formattedDateOnly(student.created_at) },
            ],
          }}
        />

        <HistoryDetail/>
      </div>
    </main>
  );
};

export default Detail;
