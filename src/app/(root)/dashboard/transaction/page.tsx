import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import TableTransaction from "@/components/Dashboard/Transaction/Table";
import ModalTransaction from "@/components/Dashboard/Transaction/ModalTransaction";
import ExportToExcel from "@/components/Dashboard/Transaction/ExportToExcel";

export const metadata: Metadata = {
  title: "Transaksi | NextAdmin",
  description: "This is Next.js Savings Dashboard page for NextAdmin Dashboard Kit",
};

export default function Transaction() {
  return (
    <DefaultLayout>
      <div className="mx-auto w-full">
        <Breadcrumb pageName="Transaksi">
          <ModalTransaction/>
          <ExportToExcel/>
        </Breadcrumb>

        <TableTransaction/>
      </div>
    </DefaultLayout>
  );
}
