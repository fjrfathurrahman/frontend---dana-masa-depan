"use client";

import Profile from "@/components/Template/Profile";
import HistoryDetail from "./HistoryDetail";
import { useGetStudent } from "@/hooks/students/useStudent";
import { formatedCurrency, formattedDateOnly } from "@/utils/formated";
import { Chip, Spinner } from "@heroui/react";
import { icons } from "@/resource/icons";
import { ExportTransactionsByStudent, useGetTransactionByStudent } from "@/hooks/transactions/useTransactions";

const Detail = ({ id }: { id: string }) => {
  const { data: students, isLoading: loadStudents } = useGetStudent(id);
  const { data: transactions, isLoading: loadTransactions } = useGetTransactionByStudent(id);
  const { mutate, isLoading: loadExport } = ExportTransactionsByStudent(id);

  const student = students?.data.data;
  const transactionsByStudent = transactions?.data?.data;

  if (loadStudents || loadTransactions) return <div className="flex h-screen items-center justify-center bg-white dark:bg-dark rounded-xl"><Spinner size="lg"/></div>;

  return (
    <main>
      <div className="grid grid-cols-1 xl:grid-cols-6 gap-12">
        <Profile 
          actions={{download: { handleDownload: () => mutate(id), load: loadExport }}}
          bio={{
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

        <HistoryDetail data={transactionsByStudent} />
      </div>
    </main>
  );
};

export default Detail;
