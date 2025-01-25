import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import TableStudent from "@/components/Dashboard/Student/Table";
import ModalAdd from "@/components/Dashboard/Student/ModalAdd";
import ExportToExcel from "@/components/Dashboard/Student/ExportToExcel";

export const metadata: Metadata = {
  title: "Next.js Student Page | NextAdmin - Next.js Dashboard Kit",
  description: "This is Next.js Profile page for NextAdmin Dashboard Kit",
};

export default function Admin() {
  return (
    <DefaultLayout>
      <div className="mx-auto w-full">
        <Breadcrumb pageName="Siswa">
          <ModalAdd/>
          <ExportToExcel/>
        </Breadcrumb>
        <TableStudent/>       
      </div>
    </DefaultLayout>
  );
}
