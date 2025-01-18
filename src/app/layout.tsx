"use client";

import "jsvectormap/dist/css/jsvectormap.css";
import "flatpickr/dist/flatpickr.min.css";
import "@/css/satoshi.css";
import "@/css/style.css";
import { useEffect, useState } from "react";
import Loader from "@/components/common/Loader";
import { HeroUIProvider } from "@heroui/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Poppins } from "next/font/google";
import { Toaster } from "sonner";

const font = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: "--font-inter",
})

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [loading, setLoading] = useState<boolean>(true);

  // const pathname = usePathname();

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={`${font.className} ${font.variable }`}>
        <QueryClientProvider client={new QueryClient()}>
          <HeroUIProvider>
            <Toaster  />
            {loading ? <Loader /> : children}
          </HeroUIProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
