"use client";

import Layout from "@/components/Layouts/Layout";
import Profile from "@/components/Template/Profile";
import { useGetStudent } from "@/hooks/students/useStudent";
import { ExportTransactionsByStudent } from "@/hooks/transactions/useTransactions";
import { icons } from "@/resource/icons";
import { formatedCurrency } from "@/utils/formated";
import { Chip } from "@heroui/react";

export default function Page({ params }: { params: { id: string } }) {
  const { data } = useGetStudent(params.id);
  const { mutate, isLoading: loadExport } = ExportTransactionsByStudent(
    params.id,
  );
  const profile = data?.data.data;

  return (
    <Layout>
      
      <button
        className="mb-8 mt-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white"
        onClick={() => window.history.back()}
      >
        {icons.back}
      </button>

      <div className="mb-12 grid grid-cols-1 gap-4 xl:grid-cols-7">
        <Profile
          parent
          actions={{
            download: {
              handleDownload: () => mutate(params.id),
              load: loadExport,
            },
          }}
          bio={{
            name: profile?.name,
            class: profile?.class,
            photo: profile?.photo,
            phone: profile?.phone,
            listData: [
              { label: "NISN", value: profile?.student_number },
              { label: "Nama", value: profile?.name },
              { label: "Jenis Kelamin", value: profile?.gender },
              { label: "Kelas", value: profile?.class + " " + profile?.major },
              {
                label: "Saldo",
                value: (
                  <Chip color="warning" variant="flat">
                    {formatedCurrency(profile?.balance ?? 0)}
                  </Chip>
                ),
              },
            ],
          }}
        />
      </div>
    </Layout>
  );
}
