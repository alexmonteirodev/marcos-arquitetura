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
    <header className="flex justify-between items-center px-8 py-8 bg-transparent font-dm">
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
        className="md:hidden flex flex-col gap-1 *:h-1 *:w-8 *:bg-base-500 *:rounded-full bg-base-100 px-3 py-4 rounded-full"
        onClick={() => setMobileMenu((prev) => !prev)}
      >
        <div></div>
        <div></div>
        <div></div>
      </button>
      {mobileMenu && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center backdrop-blur-xl gap-8">
          <button
            onClick={() => setMobileMenu(false)}
            className="size-12 text-2xl font-bold absolute top-8 right-8 bg-base-100 p-7 rounded-full flex justify-center items-center"
          >
            <p>x</p>
          </button>
          {links.map((link, i) => {
            const isActive = pathName === link.href;
            return (
              <Link
                key={i}
                href={link.href}
                onClick={() => setMobileMenu(false)}
                className={`px-8 py-3 font-bold text-xl  animate-slideIn transition-all duration-200 ease-in-out ${
                  isActive
                    ? "bg-base-400 text-base-100 rounded-xl"
                    : "bg-base-200 text-base-400 rounded-full"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
};

export default Header;
