import Detail from "@/components/Dashboard/Student/Detail";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next.js Savings Dashboard Page | NextAdmin - Next.js Dashboard Kit",
  description: "This is Next.js Savings Dashboard page for NextAdmin Dashboard Kit",
};

export default function Page({ params }: { params: { id: string } }) {
  
  return (
    <DefaultLayout>
      <Detail id={params.id} />
    </DefaultLayout>
  );
}