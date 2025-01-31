"use client";

import TableData from "@/components/Table";
import { useGetStudentByStatus } from "@/hooks/students/useStudent";
import { Select, SelectItem } from "@heroui/react";
import { useState } from "react";

const TableRegistration = () => {
  const [filterStatus, setFilterStatus] = useState("pending");
  const { data, status } = useGetStudentByStatus(filterStatus);
  const students = data?.data.data;

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterStatus(event.target.value);
  };
  

  return (
    <>  
      <Select className="max-w-xs" variant="flat" label="Status" value={filterStatus} onChange={handleFilterChange} placeholder="Pilih Status" defaultSelectedKeys={[filterStatus]}>
        {[{ key: "pending", label: "Pending" }, { key: "approved", label: "Approved" }, { key: "rejected", label: "Rejected" }].map((item) => (
          <SelectItem key={item.key} color="primary">{item.label}</SelectItem>
        ))}
      </Select>

      <TableData
        type="student"
        data={students}
        status={status}
        columns={[
          { key: "id", label: "No" },
          { key: "photo", label: "Photo" },
          { key: "student_number", label: "NISN" },
          { key: "name", label: "Name" },
          { key: "gender", label: "Jenis Kelamin" },
          { key: "email", label: "Email" },
          { key: "status", label: "Status" },
          { key: "changeStatus", label: "Keputusan" },
        ]}
      />
    </>
  );
};

export default TableRegistration;
