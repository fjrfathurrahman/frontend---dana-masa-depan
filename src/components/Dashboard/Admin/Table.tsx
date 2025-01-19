"use client";

import ModalDelete from "@/components/modals/ModalDelete";
import TableData from "@/components/Table";
import { useDeleteAdmin, useGetAdmin } from "@/hooks/admins/useAdmin";
import { IAdmin } from "@/types/ress";
import { useDisclosure } from "@heroui/react";
import { useState } from "react";

const TableAdmin = () => {
  const [selectedItem, setSelectedItem] = useState<number | null>(null);
  const { data, status } = useGetAdmin();
  const admins = data?.data?.data as IAdmin[];

  const { mutate: Delete, status: statusDelete } = useDeleteAdmin();
  const { isOpen, onOpenChange, onOpen, onClose } = useDisclosure();

  const openDelete = (itemId: number) => {
    setSelectedItem(itemId);
    onOpen();
  };
  const onDelete = () => {
    if (selectedItem) {
      Delete(selectedItem);
      setSelectedItem(null);
      return onClose();
    }
  };

  return (
    <>
      <TableData
        actions={{ handleDelete: openDelete }}
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

      <ModalDelete
        open={isOpen}
        onOpenChange={onOpenChange}
        confirmDelete={onDelete}
        status={statusDelete}
      />
    </>
  );
};

export default TableAdmin;
