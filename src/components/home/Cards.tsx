// import Image from "next/image";
// import React from "react";
// import cardArquitetura from "../../../public/imgs/home/card-arquitetura.svg";
// import cardInteriores from "../../../public/imgs/home/card-interiores.svg";
// import Link from "next/link";
// import plus from "../../../public/svg/plus.svg";

// const Cards = () => {
//   const cardsObj = [
//     {
//       label: "Projeto de Arquitetura",
//       link: "/servicos",
//       img: cardArquitetura,
//     },
//     {
//       label: "Projeto de Interiores",
//       link: "/servicos#interiores",
//       img: cardInteriores,
//     },
//     {
//       label: "Acompanhamento de Obra",
//       link: "/servicos#obra",
//       img: cardInteriores,
//     },
//   ];
//   return (
//     <div className="flex md:justify-center items-center gap-10 snap-x overflow-auto snap-mandatory mask-r-from-90% mask-r-to-100% px-25 md:snap-none md:mask-none md:overflow-hidden">
//       {cardsObj.map((eachCard, i) => (
//         <div
//           className="rounded-xl relative snap-center snap-always flex-shrink-0 w-[300px] md:w-[420px]"
//           key={i}
//         >
//           <Image src={eachCard.img} height={500} width={500} alt="img.jpg" />
//           <div className="flex justify-between items-center w-full absolute bottom-0">
//             <p className="left-5 font-dm text-2xl font-semibold pl-5">
//               {eachCard.label}
//             </p>
//             <Link href={eachCard.link} className="cursor-pointer right-3 ">
//               <Image src={plus} height={90} width={90} alt="+"></Image>
//             </Link>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Cards;
"use client";
import Image from "next/image";
import React from "react";
import cardArquitetura from "../../../public/imgs/home/card-arquitetura.svg";
import cardInteriores from "../../../public/imgs/home/card-interiores.svg";
import Link from "next/link";
import plus from "../../../public/svg/plus.svg";

const Cards = () => {
  const cardsObj = [
    { label: "Projeto de Arquitetura", link: "/servicos", img: cardArquitetura },
    { label: "Projeto de Interiores", link: "/servicos#interiores", img: cardInteriores },
    { label: "Acompanhamento de Obra", link: "/servicos#obra", img: cardInteriores },
  ];

  return (
    <div className="flex md:justify-center items-stretch gap-6 snap-x overflow-x-auto snap-mandatory px-6 md:px-0 md:snap-none md:overflow-visible pb-4 md:pb-0 scrollbar-none">
      {cardsObj.map((eachCard, i) => (
        <Link
          href={eachCard.link}
          key={i}
          className="group rounded-2xl relative snap-center snap-always flex-shrink-0 w-[280px] sm:w-[320px] md:w-[380px] lg:w-[420px] overflow-hidden block"
        >
          <div className="relative w-full aspect-[4/5]">
            <Image
              src={eachCard.img}
              fill
              alt={eachCard.label}
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
          </div>

          {/* Bottom label */}
          <div className="absolute bottom-0 left-0 right-0 flex justify-between items-center p-5">
            <p className="font-dm text-white text-lg font-semibold leading-tight drop-shadow">
              {eachCard.label}
            </p>
            <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-full p-2 group-hover:bg-white/40 transition duration-300">
              <Image src={plus} height={28} width={28} alt="+" />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Cards;