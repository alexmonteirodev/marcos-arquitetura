"use client";
import Image from "next/image";
import React from "react";
import renderImg from "../../../public/imgs/home/render.svg";

const RenderImgs = () => {
  const [imgI, setImgI] = React.useState(0);

  const images = [
    {
      label: "Render",
      img: renderImg,
    },
    {
      label: "Planta Baixa",
      img: renderImg,
    },
    {
      label: "PLano 1",
      img: renderImg,
    },
  ];

  // React.useEffect(() => {
  //   const interval = setInterval(() => {
  //     setImgI((prev) => (images.length - 1 === prev ? 0 : prev + 1));
  //   }, 3000);

  //   return () => clearInterval(interval);
  // }, []);

  return (
    <div className="relative w-full h-[450px] sm:h-[500px] md:h-[678px] mt-16">
      <Image
        src={images[imgI].img}
        alt="img-jpg"
        fill
        className="object-cover object-center rounded-2xl"
        priority
      />
      <ul className="font-dm font-semibold flex justify-center items-center gap-5 absolute top-5 backdrop-blur-md bg-white/30 px-8 py-4 rounded-2xl left-1/2 -translate-x-1/2">
        {images.map((eachNavItem, i) => (
          <li
            key={i}
            onClick={() => setImgI(i)}
            className={`py-2 px-4 cursor-pointer transition ${
              imgI === i
                ? "backdrop-blur-md bg-white/20 rounded-2xl border border-white/40 text-base-500"
                : "text-gray-500 hover:backdrop-blur-md hover:bg-white/20 rounded-2xl border border-transparent hover:border-white/40 hover:text-base-500"
            }`}
          >
            {eachNavItem.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RenderImgs;
