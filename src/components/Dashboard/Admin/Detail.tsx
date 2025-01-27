"use client";

import Profile from "@/components/Template/Profile";
import { useGetAdmin } from "@/hooks/admins/useAdmin";
import { ExportTransactionsByAdmin } from "@/hooks/transactions/useTransactions";
import { formattedDateOnly } from "@/utils/formated";
import { Chip, Spinner } from "@heroui/react";

const Detail = ({ id }: { id: string }) => {
  const { data: admins, isLoading: loadAdmins } = useGetAdmin(id);
  const { mutate, isLoading: loadExport } = ExportTransactionsByAdmin(id);

  const admin = admins?.data.data;

  if (loadAdmins) return  <div className="flex h-screen items-center justify-center rounded-xl bg-white dark:bg-dark"><Spinner size="lg" /></div>

  return (
    <main>
      <div className="grid grid-cols-1 gap-12 xl:grid-cols-6">
        <Profile
          actions={{
            download: { handleDownload: () => mutate(id), load: loadExport },
          }}
          bio={{
            name: admin.name,
            photo: admin.photo,
            listData: [
              { label: "Nama", value: admin.name },
              { label: "Email", value: admin.email },
              {
                label: "role",
                value: (
                  <Chip
                    color={admin.role === "super admin" ? "danger" : "success"}
                    variant="flat"
                  >
                    {admin.role}
                  </Chip>
                ),
              },
              { label: "Dibuat", value: formattedDateOnly(admin.created_at) },
            ],
          }}
        />

        <div className="space-y-8 xl:col-span-2">
          {/* <HistoryDetail data={transactionsByStudent} /> */}
        </div>
      </div>
    </main>
  );
};

export default Detail;
