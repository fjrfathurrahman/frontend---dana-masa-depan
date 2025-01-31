import FormRegister from "@/components/Home/Forms/Register";
import Layout from "@/components/Layouts/Layout";

export const metadata = {
  title: "Register | NextAdmin",
  description:
    "This is Next.js Savings Dashboard page for NextAdmin Dashboard Kit",
};

export default function Register() {
  return (
    <Layout>
      <main className="my-8 grid grid-cols-1">
        <FormRegister />
      </main>
    </Layout>
  );
}
