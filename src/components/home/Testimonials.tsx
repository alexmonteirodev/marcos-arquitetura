"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import arrowLeft from "../../../public/imgs/home/arrow-left.svg";
import img0 from "../../../public/imgs/home/testimonial-img-0.svg";

const Testimonials = () => {
  const [testimonialI, setTestimonialI] = React.useState(0);
  const testimonialsList = [
    {
      img: img0,
      name: "Márcia Andrea",
      testimonial:
        "Adorei o trabalho, foi tudo como esperado e o Marcos foi super atencioso. O que mais gostei foi que ele fez de tudo para tornar realidade as vontades que eu queria trazer pra casa.",
      link: "",
    },
    {
      img: img0,
      name: "joao",
      testimonial:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque necessitatibus odio ab enim, iure doloribus qui consequuntur dolorum tenetur explicabo consequatur eos totam dolor at et exercitationem modi iste adipisci.",
      link: "",
    },
    {
      img: img0,
      name: "jose",
      testimonial:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque necessitatibus odio ab enim, iure doloribus qui consequuntur dolorum tenetur explicabo consequatur eos totam dolor at et exercitationem modi iste adipisci.",
      link: "",
    },
  ];
  return (
    <div className="flex justify-center items-center gap-10 relative">
      <button
        onClick={() => setTestimonialI((prev) => (prev <= 0 ? 2 : prev - 1))}
        className="cursor-pointer active:scale-110 transition"
      >
        <Image src={arrowLeft} height={20} width={20} alt="arrow.svg" />
      </button>
      <div className="flex justify-center items-center flex-col md:flex-row gap-12">
        <div className="size-90 ">
          <Image
            src={testimonialsList[testimonialI].img}
            width={440}
            height={440}
            alt={"img.jpg"}
          />
        </div>
        <div className="flex flex-col text-xl md:w-[440px] font-dm ">
          <p className="font-semibold first-letter:uppercase">
            {testimonialsList[testimonialI].name}
          </p>
          <p>{testimonialsList[testimonialI].testimonial}</p>
          <Link
            href={testimonialsList[testimonialI].link}
            className="text-base-100 font-dm bg-base-500 rounded-full px-8 py-4 mt-5 font-semibold text-xl hover:rounded-xl hover:bg-base-200 hover:text-base-400 transition duration-300 ease-in-out hover:scale-105 self-start"
          >
            Ver Projeto
          </Link>
          <div className="absolute left-1/2 -bottom-10 -translate-x-1/2 flex justify-center items-center gap-3 transition *:h-1.5 *:w-15">
            <div
              className={`${
                testimonialI === 0
                  ? "bg-base-500 rounded-full"
                  : "bg-base-300 rounded-full"
              }`}
            ></div>
            <div
              className={`${
                testimonialI === 1
                  ? "bg-base-500 rounded-full"
                  : "bg-base-300 rounded-full"
              }`}
            ></div>
            <div
              className={`${
                testimonialI === 2
                  ? "bg-base-500 rounded-full"
                  : "bg-base-300 rounded-full"
              }`}
            ></div>
          </div>
        </div>
      </div>
      <button
        onClick={() =>
          setTestimonialI((prev) =>
            prev === testimonialsList.length - 1 ? 0 : prev + 1
          )
        }
        className="cursor-pointer active:scale-110 transition"
      >
        <Image
          src={arrowLeft}
          height={20}
          width={20}
          alt="arrow.svg"
          className="rotate-180"
        />
      </button>
    </div>
  );
};

export default Testimonials;
