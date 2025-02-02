"use client";

import React, { useEffect, useState } from "react";
import DarkModeSwitcher from "../Header/DarkModeSwitcher";
import Logo from "/public/images/favicon.ico";
import Image from "next/image";
import { Button } from "@heroui/react";
import { toast } from "sonner";
import { icons } from "@/resource/icons";
import { usePathname } from "next/navigation";

const MenuItem = [
  {
    name: "Home",
    hash: "#",
  },
  {
    name: "Keunggulan",
    hash: "#features",
  },
  {
    name: "Faq",
    hash: "#faq",
  },
  {
    name: "Sign In",
    hash: "#signIn",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
];

const NavBar = () => {
  const [activeHash, setActiveHash] = useState<string>("");
  const pathName = usePathname();

  useEffect(() => {
    const updateHash = () => {
      setActiveHash(window.location.hash || "#");
    };

    // Perbarui hash saat berubah
    window.addEventListener("hashchange", updateHash);
    updateHash();

    return () => {
      window.removeEventListener("hashchange", updateHash);
    };
  }, []);

  const handleProfileClick = () => {
    const isLogin = localStorage.getItem("student");

    if (isLogin) {
      window.location.href = "/profile";
    } else {
      toast.info("Silahkan login terlebih dahulu");
    }
  };

  const handleLogout = () => {
    toast.success("Logout berhasil, mohon tunggu...");
    localStorage.removeItem("student");
    window.location.href = "/";
  };

  return (
    <nav className="sticky top-0 z-999 flex w-full backdrop-blur">
      <div className="container flex items-center justify-between border-b  border-stroke py-4.5 dark:border-stroke-dark">
        <div className="flex items-center gap-2 sm:gap-4">
          <Image
            src={Logo.src}
            alt="Logo"
            width={55}
            height={55}
            quality={100}
            blurDataURL={Logo.blurDataURL}
          />
          <span className="hidden text-xl font-bold tracking-wide text-dark dark:text-white sm:block md:hidden lg:block">
            Dana Masa Depan
          </span>
        </div>
        <div className="hidden items-center gap-4 md:flex">
          {MenuItem.map((item) => (
            <a
              key={item.name}
              href={item.hash}
              className={`rounded-xl px-3.5 py-1.5 font-semibold text-dark duration-700 ease-in-out dark:text-white ${activeHash === item.hash ? "bg-primary/25 text-primary" : ""}`}
            >
              {item.name}
            </a>
          ))}
        </div>
        <ul className="flex items-center gap-2 2xsm:gap-4">
          <DarkModeSwitcher />
          <Button
            color="primary"
            onPress={() => handleProfileClick()}
            isIconOnly
            radius="full"
          >
            {icons.user}
          </Button>
          {pathName === "/profile" && (
            <Button
              color="danger"
              onPress={() => handleLogout()}
              isIconOnly
              radius="full"
            >
              {icons.logout}
            </Button>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
