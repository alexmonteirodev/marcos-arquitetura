// "use client";
// import Image from "next/image";
// import React from "react";
// import renderImg from "../../../public/imgs/home/render.svg";

// const RenderImgs = () => {
//   const [imgI, setImgI] = React.useState(0);

//   const images = [
//     {
//       label: "Render",
//       img: renderImg,
//     },
//     {
//       label: "Planta Baixa",
//       img: renderImg,
//     },
//     {
//       label: "Plano 1",
//       img: renderImg,
//     },
//   ];

//   React.useEffect(() => {
//     const interval = setInterval(() => {
//       setImgI((prev) => (images.length - 1 === prev ? 0 : prev + 1));
//     }, 3000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="relative w-full h-[450px] sm:h-[500px] md:h-[678px] mt-16">
//       <Image
//         src={images[imgI].img}
//         alt="img-jpg"
//         fill
//         className="object-cover object-center rounded-2xl"
//         priority
//       />
//       <ul className="font-dm font-semibold flex justify-center items-center gap-5 absolute top-5 backdrop-blur-md bg-white/30 px-8 py-4 rounded-2xl left-1/2 -translate-x-1/2">
//         {images.map((eachNavItem, i) => (
//           <li
//             key={i}
//             onClick={() => setImgI(i)}
//             className={`py-2 px-4 cursor-pointer transition ${
//               imgI === i
//                 ? "backdrop-blur-md bg-white/20 rounded-2xl border border-white/40 text-base-500"
//                 : "text-gray-500 hover:backdrop-blur-md hover:bg-white/20 rounded-2xl border border-transparent hover:border-white/40 hover:text-base-500"
//             }`}
//           >
//             {eachNavItem.label}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

"use client";
import Image from "next/image";
import React from "react";
import renderImg from "../../../public/imgs/home/render.svg";

const images = [
  { label: "Render", img: renderImg },
  { label: "Planta Baixa", img: renderImg },
  { label: "Plano 1", img: renderImg },
];

const RenderImgs = () => {
  const [imgI, setImgI] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setImgI((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full mt-12" style={{ aspectRatio: "16/9" }}>
      {/* Pré-renderiza todas as imagens, mostra só a ativa */}
      {images.map((img, i) => (
        <Image
          key={i}
          src={img.img}
          alt={img.label}
          fill
          className={`object-cover object-center rounded-2xl transition-opacity duration-700 ${
            i === imgI ? "opacity-100" : "opacity-0"
          }`}
          priority={i === 0}
        />
      ))}

      {/* Nav pills */}
      <ul className="font-dm font-semibold flex justify-center items-center gap-2 sm:gap-4 absolute top-4 sm:top-5 backdrop-blur-md bg-white/30 px-4 sm:px-8 py-2 sm:py-3 rounded-2xl left-1/2 -translate-x-1/2 whitespace-nowrap z-10 text-sm sm:text-base">
        {images.map((item, i) => (
          <li
            key={i}
            onClick={() => setImgI(i)}
            className={`py-1.5 px-3 sm:py-2 sm:px-4 cursor-pointer rounded-xl border transition duration-200 ${
              imgI === i
                ? "bg-white/30 border-white/50 text-base-500"
                : "border-transparent text-gray-500 hover:bg-white/20 hover:border-white/30 hover:text-base-500"
            }`}
          >
            {item.label}
          </li>
        ))}
      </ul>

      {/* Progress dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setImgI(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === imgI ? "w-8 bg-white" : "w-2 bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default RenderImgs;