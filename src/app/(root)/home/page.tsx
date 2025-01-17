import Hero from "@/components/Home/Hero";
import Layout from "@/components/Layouts/Layout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next.js Home Page | NextAdmin - Next.js Dashboard Kit",
  description: "This is Next.js Home page for NextAdmin Dashboard Kit",
}

export default function Home(): JSX.Element {
  return (
    <>
      <Layout>
        <Hero/>
      </Layout>
    </>
  );
}