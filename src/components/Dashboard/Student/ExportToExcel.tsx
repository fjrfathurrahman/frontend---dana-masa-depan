"use client";

import { ExportStudents } from "@/hooks/students/useStudent";
import { icons } from "@/resource/icons";
import { Button } from "@heroui/react";

const ExportToExcel = () => {
  const { mutate } = ExportStudents()

  return (
    <Button onPress={() => mutate()} color="warning" className="text-white font-medium">
      {icons.export}
      Export
    </Button>
  );
};

export default ExportToExcel;
