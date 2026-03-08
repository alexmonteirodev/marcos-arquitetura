// "use client";
// import React, { useState, useEffect, useRef } from "react";
// import Image from "next/image";

// // Substitua com suas imagens reais
// import check from "../../../public/imgs/home/paralax-aprovaçao.svg";
// import projeto from "../../../public/imgs/home/paralax-projeto.svg";
// import keys from "../../../public/imgs/home/paralax-keys.svg";
// import img3 from "../../../public/imgs/3.jpg";
// import img4 from "../../../public/imgs/4.jpg";

// const Paralax = () => {
//   const lines = [
//     { label: "Chamada introdutória" },
//     { label: "Proposta orçamentária" },
//     { label: "Projeto preliminar" },
//     { label: "Aprovação" },
//     { label: "Entrega" },
//   ];

//   const images = [keys, projeto, check];

//   return (
//     <div className="flex md:flex-row flex-col-reverse gap-5 justify-center items-center ">
//       <div className="bg-base-300 md:text-4xl text-3xl rounded-3xl font-dm md:size-[660px] w-full p-20 flex justify-start items-center pl-15 ">
//         <ul className="space-y-3">
//           {lines.map((line, i) => (
//             <li key={i}>{line.label}</li>
//           ))}
//         </ul>
//       </div>
//       <div>
//         <Image src={projeto} height={670} width={635} alt="image.jpg" />
//       </div>
//     </div>
//   );
// };

// export default Paralax;
"use client";
import React from "react";
import Image from "next/image";
import projeto from "../../../public/imgs/home/paralax-projeto.svg";

const steps = [
  { number: "01", label: "Chamada introdutória" },
  { number: "02", label: "Proposta orçamentária" },
  { number: "03", label: "Projeto preliminar" },
  { number: "04", label: "Aprovação" },
  { number: "05", label: "Entrega" },
];

const Paralax = () => {
  return (
    <div className="flex md:flex-row flex-col-reverse gap-6 lg:gap-10 justify-center items-center">
      {/* Steps list */}
      <div className="bg-base-300 rounded-3xl font-dm w-full md:w-auto md:size-[580px] lg:size-[660px] p-10 md:p-14 lg:p-20 flex flex-col justify-center">
        <p className="text-base-500 font-semibold text-sm tracking-widest uppercase mb-6">
          Nosso Processo
        </p>
        <ul className="space-y-4">
          {steps.map((step, i) => (
            <li key={i} className="flex items-center gap-4 group">
              <span className="text-base-500/40 font-dm text-sm font-semibold w-6 shrink-0">
                {step.number}
              </span>
              <div className="h-px w-6 bg-base-500/30 shrink-0" />
              <span className="text-2xl md:text-3xl lg:text-4xl font-dm">
                {step.label}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Image */}
      <div className="w-full md:w-auto flex justify-center">
        <div className="relative w-full max-w-[500px] md:max-w-none md:w-[580px] lg:w-[635px] aspect-square">
          <Image
            src={projeto}
            fill
            alt="Processo de projeto"
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Paralax;