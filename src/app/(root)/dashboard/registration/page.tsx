import TableRegistration from "@/components/Dashboard/Registration/Table";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata = {
  title: "Registrasi | NextAdmin",
  description:
    "This is Next.js Savings Dashboard page for NextAdmin Dashboard Kit",
};

export default function Page() {
  return (
    <DefaultLayout>
      <main className="bg-white p-4">
        <TableRegistration />
      </main>
    </DefaultLayout>
  );
}
