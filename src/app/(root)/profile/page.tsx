import Faq from "@/components/Home/Faq";
import Layout from "@/components/Layouts/Layout";
import ProfileStudent from "@/components/Profile/ProfileStudent";
import TabsProfile from "@/components/Profile/TabsProfile";

export const metadata = {
  title: "Profile | NextAdmin",
  description:
    "This is Next.js Savings Dashboard page for NextAdmin Dashboard Kit",
};

export default function Page() {
  return (
    <Layout>
      <div className="py-12">
        <main className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <ProfileStudent />
          <TabsProfile/>
        </main>
        <Faq />
      </div>
    </Layout>
  );
}
