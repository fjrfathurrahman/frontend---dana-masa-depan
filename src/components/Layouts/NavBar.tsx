"use client";

import React, { useEffect, useState } from "react";
import DarkModeSwitcher from "../Header/DarkModeSwitcher";
import Logo from "/public/images/favicon.ico";
import Image from "next/image";

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

const NavBar: React.FC = () => {
  const [activeHash, setActiveHash] = useState<string>("");

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
  return (
    <nav className="sticky top-0 z-999 flex w-full backdrop-blur">
      <div className="container flex items-center justify-between border-b  border-stroke py-4 dark:border-stroke-dark">
        <div className="flex items-center gap-2 sm:gap-4">
          <Image
            src={Logo.src}
            alt="Logo"
            width={55}
            height={55}
            quality={100}
            blurDataURL={Logo.blurDataURL}
            />
            <span className="font-bold text-xl tracking-wide text-dark dark:text-white hidden sm:block md:hidden lg:block">Dana Masa Depan</span>
        </div>
        <div className="hidden items-center gap-4 md:flex">
          {MenuItem.map((item) => (
            <a key={item.name} href={item.hash} className={`text-dark dark:text-white font-semibold px-3.5 py-1.5 rounded-xl duration-700 ease-in-out ${activeHash === item.hash ? "bg-primary/25 text-primary" : ""}`}>
              {item.name}
            </a>
          ))}
        </div>
        <ul className="flex items-center gap-2 2xsm:gap-4">
          <DarkModeSwitcher />
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
