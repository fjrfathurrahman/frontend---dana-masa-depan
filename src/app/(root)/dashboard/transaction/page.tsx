import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import TableTransaction from "@/components/Dashboard/Transaction/Table";

export const metadata: Metadata = {
  title: "Next.js Transaction Page | NextAdmin - Next.js Dashboard Kit",
  description: "This is Next.js Profile page for NextAdmin Dashboard Kit",
};

export default function Transaction() {
  return (
    <DefaultLayout>
      <div className="mx-auto w-full">
        <Breadcrumb pageName="Transaksi"/>


        <TableTransaction/>
      </div>
    </DefaultLayout>
  );
}
