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
      link: "",
      img: cardArquitetura,
    },
    {
      label: "Projeto de Interiores",
      link: "",
      img: cardInteriores,
    },
    {
      label: "Acompanhamento de Obra",
      link: "",
      img: cardInteriores,
    },
  ];
  return (
    <div className="flex justify-center items-center gap-5">
      {cardsObj.map((eachCard, i) => (
        <div className="rounded-xl relative" key={i}>
          <Image src={eachCard.img} height={500} width={500} alt="img.jpg" />
          <div className="flex justify-between items-center w-full absolute bottom-0">
            <p className="left-5 font-dm text-2xl font-semibold pl-5">
              {eachCard.label}
            </p>
            <Link href={eachCard.link} className="cursor-pointer right-3 ">
              <Image src={plus} height={80} width={80} alt="+"></Image>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
