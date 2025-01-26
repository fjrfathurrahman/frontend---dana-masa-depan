"use client";

import ModalDelete from "@/components/modals/ModalDelete";
import TableData from "@/components/Table";
import { useDeleteAdmin, useGetAdmin } from "@/hooks/admins/useAdmin";
import { IAdmin } from "@/types/ress";
import { useDisclosure } from "@heroui/react";
import { useState } from "react";
import ModalView from "./ModalView";
import Link from "next/link";

const TableAdmin = () => {
  const [selectedItem, setSelectedItem] = useState<number | null>(null);
  const { data, status } = useGetAdmin();
  const admins = data?.data?.data as IAdmin[];

  const { mutate: Delete, status: statusDelete } = useDeleteAdmin();
  const { isOpen: openDelete, onOpenChange: openChangeDelete, onOpen: onOpenDelete, onClose } = useDisclosure();

  const openModalDelete = (itemId: number) => {
    setSelectedItem(itemId);
    onOpenDelete();
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
        actions={{ handleDelete: openModalDelete, handleView: () => console.log("view") }}
        data={admins}
        status={status}
        type="admin"
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
        open={openDelete}
        close={onClose}
        onOpenChange={openChangeDelete}
        confirmDelete={onDelete}
        status={statusDelete}
      />
    </>
  );
};

export default TableAdmin;
