"use client";

import { ExportStudents, useGetStudent } from "@/hooks/students/useStudent";
import { icons } from "@/resource/icons";
import { Button } from "@heroui/react";

const ExportToExcel = () => {
  const { data: students, isLoading } = useGetStudent();

  const handleExport = () => {
    if (!students) return;

    // Format data untuk ekspor
    const formattedData = students.data.data.map((item: any) => ({
      ID: item.id,
      "Student Number": item.student_number,
      Name: item.name,
      Class: item.class,
      Major: item.major,
      Gender: item.gender,
      Address: item.address,
      Email: item.email,
      Phone: item.phone,
      Photo: item.photo,
      Balance: item.balance,
      "Created At": item.created_at,
      "Updated At": item.updated_at,
    }));

    // Ekspor ke Excel
    ExportStudents(formattedData, "Students");
  };

  return (
    <Button onClick={handleExport} color="warning" className="text-white font-medium">
      {icons.export}
      Export
    </Button>
  );
};

export default ExportToExcel;
