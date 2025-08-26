"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

// Substitua com suas imagens reais
import check from "../../../public/imgs/home/paralax-aprovaçao.svg";
import projeto from "../../../public/imgs/home/paralax-projeto.svg";
import keys from "../../../public/imgs/home/paralax-keys.svg";
import img3 from "../../../public/imgs/3.jpg";
import img4 from "../../../public/imgs/4.jpg";

const Paralax = () => {
  const lines = [
    { label: "Chamada introdutória" },
    { label: "Proposta orçamentária" },
    { label: "Projeto preliminar" },
    { label: "Aprovação" },
    { label: "Entrega" },
  ];

  const images = [keys, projeto, check];

  return (
    <div className="flex gap-5 justify-center items-center">
      <div className="bg-base-300 text-4xl rounded-2xl font-dm size-[660px] flex justify-start items-center pl-15">
        <ul className="space-y-3">
          {lines.map((line, i) => (
            <li key={i}>{line.label}</li>
          ))}
        </ul>
      </div>
      <div>
        <Image src={projeto} height={670} width={635} alt="image.jpg" />
      </div>
    </div>
  );
};

export default Paralax;
