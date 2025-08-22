import React from "react";
import logoDark from "../../../public/svg/logo-dark.svg";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex justify-between items-center px-16 py-8 bg-transparent">
      <Image src={logoDark} height={45} width={281} alt="logo.svg" />
      <nav>
        <ul className="flex gap-4 *:*:bg-base-200 *:*:text-base-400 *:*:px-8 *:*:py-3 *:*:rounded-full *:*:text-sm">
          <li>
            <Link href={""}>Serviços</Link>
          </li>
          <li>
            <Link href={""}>Projetos</Link>
          </li>
          <li>
            <Link href={""}>Entre em contato</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
