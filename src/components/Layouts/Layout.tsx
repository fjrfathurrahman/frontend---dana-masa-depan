"use client";

import { icons } from "@/resource/icons";
import Footer from "./Footer";
import NavBar from "./NavBar";
import { usePathname } from "next/navigation";

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathName = usePathname();

  return (
    <>
      <div>
        <NavBar />
        <main className="container">{children}</main>
        <Footer />
      </div>

      {pathName !== "/" && (
        <button
          className="fixed bottom-3 left-3 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white sm:bottom-8 sm:left-8"
          onClick={() => window.history.back()}
        >
          {icons.back}
        </button>
      )}
    </>
  );
}
