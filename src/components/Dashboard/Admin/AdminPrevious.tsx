"use client";

import ListValue from "@/components/Template/ListValue";
import { useGetAdmin } from "@/hooks/admins/useAdmin";
import { IAdmin } from "@/types/ress";
import { formattedDate } from "@/utils/formated";
import { Avatar, Chip } from "@heroui/react";

const AdminPrevious = ({ params }: { params: string }) => {
  const { data } = useGetAdmin(params);
  const profile = data?.data.data as IAdmin;

  const formatedData = [
    // {
    //   label: "Foto",
    //   value: (
    //     <Avatar
    //       src={`http://localhost:8000/storage/${profile?.photo}`}
    //     />
    //   ),
    // },
    { label: "Nama", value: profile?.name },
    { label: "Email", value: profile?.email },
    { label: "Role", value: <Chip variant="flat" color={profile?.role === "super admin" ? "danger" : "success"}>{profile?.role}</Chip> },
    { label: "Dibuat", value: formattedDate(profile?.created_at as string) },
    { label: "Terakhir Update", value: formattedDate(profile?.updated_at as string)},
  ];

  return (
    <div className="xl:col-span-5 rounded-[10px] bg-white p-6 shadow-1 dark:bg-gray-dark dark:shadow-card">
      <h5>Informasi Admin Sebelumnya</h5>

      <ul className="mt-8 list-disc space-y-4 px-6">
        {formatedData?.map((item, index) => (
          <ListValue
            key={index}
            label={item.label}
            value={item.value as string}
          />
        ))}
      </ul>
    </div>
  );
};

export default AdminPrevious;
