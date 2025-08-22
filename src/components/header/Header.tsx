"use client";
import React from "react";
import logoDark from "../../../public/svg/logo-dark.svg";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathName = usePathname();
  const [mobileMenu, setMobileMenu] = React.useState(false);

  const links = [
    { label: "Home", href: "/" },
    { label: "Serviços", href: "/servicos" },
    { label: "Projetos", href: "/projetos" },
    { label: "Entre em contato", href: "/#contato" },
  ];

  return (
    <header className="flex  justify-between items-center px-16 py-8 bg-transparent">
      <Image src={logoDark} height={45} width={281} alt="logo.svg" />
      <nav className="md:block hidden">
        <ul className="flex flex-wrap gap-4">
          {links.map((link, i) => {
            const isActive = pathName === link.href;
            return (
              <li key={i}>
                <Link
                  href={link.href}
                  className={`px-8 py-3 rounded-full text-sm transition-all duration-200 ease-in-out
              ${
                isActive
                  ? "bg-base-400 text-base-100 rounded-xl"
                  : "bg-base-200 text-base-400"
              }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <button
        className="md:hidden flex flex-col gap-1 *:h-1 *:w-8 *:bg-base-500 *:rounded-full"
        onClick={() => setMobileMenu((prev) => !prev)}
      >
        <div></div>
        <div></div>
        <div></div>
      </button>
      {mobileMenu && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center backdrop-blur-md gap-8">
          {links.map((link, i) => (
            <Link
              key={i}
              href={link.href}
              onClick={() => setMobileMenu(false)}
              className="px-8 py-3 rounded-full text-base-400 text-sm bg-base-200 transition-all duration-200 ease-in-out hover:bg-base-400 hover:text-base-100"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
