"use client";

import ModalDelete from "@/components/modals/ModalDelete";
import TableData from "@/components/Table";
import React from "react";
import { useDeleteStudent, useGetStudent } from "@/hooks/students/useStudent";
import { useDisclosure } from "@heroui/react";

const TableStudent = () => {
  const [selectedItem, setSelectedItem] = React.useState<number | null>(null);
  const { mutate: Delete, status: statusDelete } = useDeleteStudent();
  const {
    isOpen: openDelete,
    onOpenChange: openChangeDelete,
    onOpen: onOpenDelete,
    onClose,
  } = useDisclosure();

  const { data } = useGetStudent();
  const students = data?.data?.data;

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
        type="student"
        data={students}
        status={status}
        actions={{ handleDelete: openModalDelete, handleView: () => console.log("view") }}
        columns={[
          { key: "id", label: "No" },
          { key: "photo", label: "Photo" },
          { key: "student_number", label: "NISN" },
          { key: "name", label: "Name" },
          { key: "gender", label: "Jenis Kelamin" },
          { key: "email", label: "Email" },
          { key: "class", label: "Kelas" },
          { key: "major", label: "Jurusan" },
          { key: "actions", label: "Action" },
        ]}
      />

      <ModalDelete
        open={openDelete}
        close={onClose}
        status={statusDelete}
        onOpenChange={openChangeDelete}
        confirmDelete={onDelete}
      />
    </>
  );
};

export default TableStudent;
