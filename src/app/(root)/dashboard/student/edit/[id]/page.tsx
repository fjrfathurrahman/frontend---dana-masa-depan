import EditStudent from "@/components/Dashboard/Student/Edit";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata = {
  title: "Next.js Edit Student Page | NextAdmin - Next.js Dashboard Kit",
  description: "This is Next.js Edit Student page for NextAdmin Dashboard Kit",
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
