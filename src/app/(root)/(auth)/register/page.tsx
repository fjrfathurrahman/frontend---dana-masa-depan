import FormRegister from "@/components/Forms/FormRegister";
import Faq from "@/components/Home/Faq";
import Layout from "@/components/Layouts/Layout";

export const metadata = {
  title: "Register | NextAdmin",
  description:
    "This is Next.js Savings Dashboard page for NextAdmin Dashboard Kit",
};

export default function Register() {
  return (
    <Layout>
      <main className="py-8">
        <FormRegister />
        <Faq/>
      </main>
    </Layout>
  );
}
