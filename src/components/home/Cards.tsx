import Image from "next/image";
import React from "react";
import cardArquitetura from "../../../public/imgs/home/card-arquitetura.svg";
import cardInteriores from "../../../public/imgs/home/card-interiores.svg";
import Link from "next/link";
import plus from "../../../public/svg/plus.svg";

const Cards = () => {
  const cardsObj = [
    {
      label: "Projeto de Arquitetura",
      link: "/servicos",
      img: cardArquitetura,
    },
    {
      label: "Projeto de Interiores",
      link: "/servicos#interiores",
      img: cardInteriores,
    },
    {
      label: "Acompanhamento de Obra",
      link: "/servicos#obra",
      img: cardInteriores,
    },
  ];
  return (
    <div className="flex md:justify-center items-center gap-10 snap-x overflow-auto snap-mandatory mask-r-from-90% mask-r-to-100% px-25 md:snap-none md:mask-none md:overflow-hidden">
      {cardsObj.map((eachCard, i) => (
        <div
          className="rounded-xl relative snap-center snap-always flex-shrink-0 w-[300px] md:w-[420px]"
          key={i}
        >
          <Image src={eachCard.img} height={500} width={500} alt="img.jpg" />
          <div className="flex justify-between items-center w-full absolute bottom-0">
            <p className="left-5 font-dm text-2xl font-semibold pl-5">
              {eachCard.label}
            </p>
            <Link href={eachCard.link} className="cursor-pointer right-3 ">
              <Image src={plus} height={90} width={90} alt="+"></Image>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
