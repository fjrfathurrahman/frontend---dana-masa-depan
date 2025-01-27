import Detail from "@/components/Dashboard/Admin/Detail";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata = {
  title: "Edit Admin | NextAdmin",
  description: "This is Next.js Savings Dashboard page for NextAdmin Dashboard Kit",
};

export default function Page({ params }: { params: { id: string } }) {
  return (
    <DefaultLayout>
      <Detail id={params.id} />
    </DefaultLayout>
  );
}