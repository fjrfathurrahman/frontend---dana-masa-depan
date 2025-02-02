import Contact from "@/components/Home/Contact";
import Faq from "@/components/Home/Faq";
import Features from "@/components/Home/Features";
import Hero from "@/components/Home/Hero";
import SignIn from "@/components/Home/SignIn";
import Layout from "@/components/Layouts/Layout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Beranda | NextAdmin - Next.js Dashboard Kit",
  description: "This is Next.js Savings Dashboard page for NextAdmin Dashboard Kit",
}

export default function Home(): JSX.Element {
  return (
    <>
      <Layout>
        <Hero/>
        {/* <Collaborators /> */}
        <Features />
        <SignIn/>
        <Contact />
        <Faq />
      </Layout>
    </>
  );
}