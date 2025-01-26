import AdminPrevious from "@/components/Dashboard/Admin/AdminPrevious";
import EditAdmin from "@/components/Dashboard/Admin/Edit";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata = {
  title: "Next.js Edit Admin Page | NextAdmin - Next.js Dashboard Kit",
  description: "This is Next.js Edit Admin page for NextAdmin Dashboard Kit",
};

export default function Page({ params }: { params: { id: string } }) {
  return (
    <DefaultLayout>
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
        <EditAdmin params={params.id} />
        <AdminPrevious params={params.id} />
      </div>
    </DefaultLayout>
  );
}
