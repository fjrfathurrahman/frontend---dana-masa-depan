import Faq from "@/components/Home/Faq";
import Search from "@/components/Home/Search";
import Layout from "@/components/Layouts/Layout";

export const metadata = {
  title: "Search | NextAdmin",
  description: "This is Next.js Savings Dashboard page for NextAdmin Dashboard Kit",
}

export default function Page() {

  return (
    <Layout>
     <Search/>
     <Faq/>
    </Layout>
  );
}
