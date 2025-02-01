import FormLogin from "@/components/Forms/FormLogin";
import Layout from "@/components/Layouts/Layout";
import Image from "next/image";
import image from "/public/images/content/dashboard.png";
import Faq from "@/components/Home/Faq";

export const metadata = {
  title: "Sign In Siswa | NextAdmin",
  description: "This is Next.js Savings Dashboard page for NextAdmin Dashboard Kit",
}

export default function SignIn() {
  return (
    <Layout>
      <div>
        <div className="grid grid-cols-1 gap-x-4 gap-y-6 md:grid-cols-2 py-12">
          <div className="mx-auto">
            <Image
              src={image.src}
              alt="image"
              width={750}
              height={750}
              quality={100}
              blurDataURL={image.blurDataURL}
            />
          </div>
          <FormLogin />
        </div>
        <Faq/>
      </div>
    </Layout>
  );
}