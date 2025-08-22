import Image from "next/image";
import React from "react";
import logoWhite from "../../../public/svg/logo-white.svg";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="px-16 py-8 bg-base-400">
      <div className="flex justify-between mb-16">
        <div className="space-y-10">
          <Image src={logoWhite} height={143} width={325} alt="logo.svg" />
          <Link
            href={""}
            className="text-base-100 bg-base-500 rounded-full px-8 py-4"
          >
            Transforme seu sonho em realidade
          </Link>
        </div>
        <div className="text-base-100 flex gap-32">
          <div className="space-y-6">
            <p className="font-bold">Sobre</p>
            <ul className="space-y-4">
              <li>Portifólio</li>
              <li>Serviços</li>
              <li>Processos</li>
              <li>Contato</li>
            </ul>
          </div>
          <div className="space-y-6">
            <p className="font-bold">Contato</p>
            <ul className="space-y-4">
              <li>Brasília/DF</li>
              <li>(61) 5555-5555</li>
              <li>email@hotmail.com</li>
              <li>@marcos.vinicius.arch</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t-2 border-base-500 flex justify-between text-base-100 py-6">
        <div>
          <p>© Marcos Vinícius arquitetura. Todos os direitos reservados</p>
        </div>
        <div className="flex gap-16">
          <p>Política de privacidade</p>
          <p>Termos e condições</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
