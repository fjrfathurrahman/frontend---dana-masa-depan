"use client";

import React, { useEffect, useState } from "react";
import DarkModeSwitcher from "../Header/DarkModeSwitcher";
import Logo from "/public/images/favicon.ico";
import Image from "next/image";

const MenuItem = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Tentang",
    hash: "#about",
  },
  {
    name: "Faq",
    hash: "#faq",
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
      setActiveHash(window.location.hash || "#home");
    };

    // Perbarui hash saat berubah
    window.addEventListener("hashchange", updateHash);
    updateHash(); // Set awal

    return () => {
      window.removeEventListener("hashchange", updateHash);
    };
  }, []);
  return (
    <nav className="sticky top-0 z-999 flex w-full">
      <div className="container flex items-center justify-between border-b  border-stroke py-3 dark:border-stroke-dark">
        <span>
          <Image
            src={Logo.src}
            alt="Logo"
            width={65}
            height={65}
            quality={100}
            blurDataURL={Logo.blurDataURL}
          />
        </span>
        <div className="hidden items-center gap-6 2xsm:flex">
          {MenuItem.map((item) => (
            <a key={item.name} href={item.hash} className={`text-dark dark:text-white font-semibold px-3.5 py-1.5 rounded-xl duration-700 ease-in-out ${activeHash === item.hash ? "bg-primary text-white" : ""}`}>
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
