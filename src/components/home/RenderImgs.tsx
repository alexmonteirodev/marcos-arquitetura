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
  return (
    <div className=" mt-15 relative">
      <Image src={images[imgI].img} height={678} width={1300} alt="img-jpg" />
      <div>
        <ul className="font-dm font-semibold flex justify-center items-center gap-5  absolute top-5 backdrop-blur-md bg-white/30 px-8 py-4 rounded-2xl left-1/2 -translate-x-1/2">
          {images.map((eachNavItem, i) => {
            return (
              <li
                key={i}
                onClick={() => setImgI(i)}
                className={`py-2 px-4 cursor-pointer ${
                  imgI === i
                    ? "backdrop-blur-md bg-white/20 rounded-2xl border border-white/40"
                    : ""
                }`}
              >
                {eachNavItem.label}
              </li>
            );
          })}
        </ul>

        {/* <ul className="font-dm font-semibold flex justify-center items-center gap-5  absolute top-5 backdrop-blur-md bg-white/30 px-8 py-4 rounded-2xl left-1/2 -translate-x-1/2">
          <li className=" backdrop-blur-md py-2 px-4 bg-white/20 rounded-2xl border border-white/40">
            Render
          </li>
          <li>Planta Baixa</li>
          <li>PLano 1</li>
        </ul> */}
      </div>
    </div>
  );
};

export default RenderImgs;
