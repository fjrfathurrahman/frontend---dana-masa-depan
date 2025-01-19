import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import SavingsDashboard from "@/components/Dashboard/SavingsDashboard";

export const metadata: Metadata = {
  title:
    "Next.js E-commerce Dashboard Page | NextAdmin - Next.js Dashboard Kit",
  description: "This is Next.js Home page for NextAdmin Dashboard Kit",
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
