import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import SavingsDashboard from "@/components/Dashboard/SavingsDashboard";

export const metadata: Metadata = {
  title: "Dashboard | NextAdmin",
  description: "This is Next.js Savings Dashboard page for NextAdmin Dashboard Kit",
};

export default function Dashboard(): JSX.Element {
  return (
    <>
      <DefaultLayout>
        <SavingsDashboard />
      </DefaultLayout>
    </>
  );
}
