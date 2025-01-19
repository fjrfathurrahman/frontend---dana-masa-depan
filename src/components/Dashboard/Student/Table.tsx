'use client'

import TableData from '@/components/Table';
import { useGetStudent } from '@/hooks/students/useStudent'
import React from 'react'

const TableStudent = () => {
  const { data } = useGetStudent();

  const students = data?.data?.data;

  return (
    <>
      <TableData
        // actions={{ handleDelete: openDelete }}
        data={students}
        status={status}
        columns={[
          { key: "id", label: "No" },
          { key: "photo", label: "Photo" },
          { key: "student_number", label: "NISN" },
          { key: "name", label: "Name" },
          { key: "gender", label: "Jenis Kelamin" },
          { key: "email", label: "Email" },
          { key: "class", label: "Class" },
          { key: "major", label: "Major" },
          { key: "actions", label: "Action" },
        ]}
      />

    </>
  );
}

export default TableStudent