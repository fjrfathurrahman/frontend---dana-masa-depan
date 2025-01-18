"use client";

import { IAdmin } from "@/components/ProfileBox";
import { useGetAdmin } from "@/hooks/admins/useAdmin";
import TableData from "@/components/Table";


const TableList = () => {
  const { data, status } = useGetAdmin();
  const admins = data?.data?.data as IAdmin[];

  return (
    <>
      <TableData
        data={admins}
        status={status}
        columns={[
          { key: "id", label: "No" },
          { key: "photo", label: "Photo" },
          { key: "name", label: "Name" },
          { key: "email", label: "Email" },
          { key: "role", label: "Role" },
          { key: "actions", label: "Action" },
        ]}
      />
    </>
  );
};

export default TableList;
