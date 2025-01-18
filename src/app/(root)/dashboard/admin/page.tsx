import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import TableList from "@/components/Dashboard/Admin/TableList";
import ModalAdd from "@/components/Dashboard/Admin/ModalAdd";

export const metadata: Metadata = {
  title: "Next.js Admin Page | NextAdmin - Next.js Dashboard Kit",
  description: "This is Next.js Profile page for NextAdmin Dashboard Kit",
};

export default function Admin() {
  return (
    <DefaultLayout>
      <div className="mx-auto w-full">
        <Breadcrumb pageName="Admin">
          <ModalAdd />
        </Breadcrumb>
        
        <TableList />
      </div>
    </DefaultLayout>
  );
}
