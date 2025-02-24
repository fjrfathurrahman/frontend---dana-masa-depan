import EditStudent from "@/components/Dashboard/Student/Edit";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata = {
  title: "Edit Siswa | NextAdmin",
  description: "This is Next.js Savings Dashboard page for NextAdmin Dashboard Kit",
}

export default function Page({ params }: { params: { id: string } }) {
  return (
    <DefaultLayout>
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-12">
        <EditStudent params={params.id} />
      </div>
    </DefaultLayout>
  );
}
