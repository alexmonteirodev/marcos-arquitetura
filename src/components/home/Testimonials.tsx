"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
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
    <div className="flex justify-center items-center gap-5">
      <button
        onClick={() => setTestimonialI((prev) => (prev <= 0 ? 2 : prev - 1))}
        className="cursor-pointer"
      >
        left
      </button>
      <div className="flex justify-center items-center flex-col md:flex-row gap-12">
        <div>
          <Image
            src={testimonialsList[testimonialI].img}
            width={440}
            height={440}
            alt={"img.jpg"}
          />
        </div>
        <div className="flex flex-col text-xl md:w-[440px] font-dm ">
          <p className="font-semibold">{testimonialsList[testimonialI].name}</p>
          <p>{testimonialsList[testimonialI].testimonial}</p>
          <Link
            href={testimonialsList[testimonialI].link}
            className="text-base-100 font-dm bg-base-500 rounded-full px-8 py-4 mt-5 font-semibold text-xl hover:rounded-xl hover:bg-base-200 hover:text-base-400 transition duration-300 ease-in-out hover:scale-105 self-start"
          >
            Ver Projeto
          </Link>
        </div>
      </div>
      <button
        onClick={() =>
          setTestimonialI((prev) =>
            prev === testimonialsList.length - 1 ? 0 : prev + 1
          )
        }
        className="cursor-pointer"
      >
        right
      </button>
    </div>
  );
};

export default Testimonials;
