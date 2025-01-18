import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import TableList from "@/components/Dashboard/Admin/TableList";

export const metadata: Metadata = {
  title: "Next.js Admin Page | NextAdmin - Next.js Dashboard Kit",
  description: "This is Next.js Profile page for NextAdmin Dashboard Kit",
};

const Admin = () => {

  return (
    <DefaultLayout>
      <div className="mx-auto w-full">
        <Breadcrumb pageName="Admin" />

        <TableList/>
      </div>
    </DefaultLayout>
  );
};

export default Admin;
