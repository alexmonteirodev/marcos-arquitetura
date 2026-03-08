// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import React from "react";
// import arrowLeft from "../../../public/imgs/home/arrow-left.svg";
// import img0 from "../../../public/imgs/home/testimonial-img-0.svg";

// const Testimonials = () => {
//   const [testimonialI, setTestimonialI] = React.useState(0);
//   const testimonialsList = [
//     {
//       img: img0,
//       name: "Márcia Andrea",
//       testimonial:
//         "Adorei o trabalho, foi tudo como esperado e o Marcos foi super atencioso. O que mais gostei foi que ele fez de tudo para tornar realidade as vontades que eu queria trazer pra casa.",
//       link: "",
//     },
//     {
//       img: img0,
//       name: "joao",
//       testimonial:
//         "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque necessitatibus odio ab enim, iure doloribus qui consequuntur dolorum tenetur explicabo consequatur eos totam dolor at et exercitationem modi iste adipisci.",
//       link: "",
//     },
//     {
//       img: img0,
//       name: "jose",
//       testimonial:
//         "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque necessitatibus odio ab enim, iure doloribus qui consequuntur dolorum tenetur explicabo consequatur eos totam dolor at et exercitationem modi iste adipisci.",
//       link: "",
//     },
//   ];

//   React.useEffect(() => {
//     const interval = setInterval(() => {
//       setTestimonialI((prev) =>
//         prev === testimonialsList.length - 1 ? 0 : prev + 1
//       );
//     }, 5000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="flex justify-center items-center gap-10 relative">
//       <button
//         onClick={() => setTestimonialI((prev) => (prev <= 0 ? 2 : prev - 1))}
//         className="cursor-pointer active:scale-110 transition"
//       >
//         <Image src={arrowLeft} height={20} width={20} alt="arrow.svg" />
//       </button>
//       <div className="flex justify-center items-center flex-col md:flex-row gap-12">
//         <div className="size-90 ">
//           <Image
//             src={testimonialsList[testimonialI].img}
//             width={440}
//             height={440}
//             alt={"img.jpg"}
//           />
//         </div>
//         <div className="flex flex-col text-xl md:w-[440px] font-dm ">
//           <p className="font-semibold first-letter:uppercase ">
//             {testimonialsList[testimonialI].name}
//           </p>
//           <p>{testimonialsList[testimonialI].testimonial}</p>
//           <Link
//             href={testimonialsList[testimonialI].link}
//             className="text-base-100 font-dm bg-base-500 rounded-full px-8 py-4 mt-5 font-semibold text-xl hover:rounded-xl hover:bg-base-200 hover:text-base-400 transition duration-300 ease-in-out hover:scale-105 self-start"
//           >
//             Ver Projeto
//           </Link>
//           <div className="absolute left-1/2 -bottom-10 -translate-x-1/2 flex justify-center items-center gap-3 transition *:h-1.5 *:w-15">
//             <div
//               className={`${
//                 testimonialI === 0
//                   ? "bg-base-500 rounded-full"
//                   : "bg-base-300 rounded-full"
//               }`}
//             ></div>
//             <div
//               className={`${
//                 testimonialI === 1
//                   ? "bg-base-500 rounded-full"
//                   : "bg-base-300 rounded-full"
//               }`}
//             ></div>
//             <div
//               className={`${
//                 testimonialI === 2
//                   ? "bg-base-500 rounded-full"
//                   : "bg-base-300 rounded-full"
//               }`}
//             ></div>
//           </div>
//         </div>
//       </div>
//       <button
//         onClick={() =>
//           setTestimonialI((prev) =>
//             prev === testimonialsList.length - 1 ? 0 : prev + 1
//           )
//         }
//         className="cursor-pointer active:scale-110 transition"
//       >
//         <Image
//           src={arrowLeft}
//           height={20}
//           width={20}
//           alt="arrow.svg"
//           className="rotate-180"
//         />
//       </button>
//     </div>
//   );
// };

// export default Testimonials;
"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import arrowLeft from "../../../public/imgs/home/arrow-left.svg";
import img0 from "../../../public/imgs/home/testimonial-img-0.svg";

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
    name: "João Silva",
    testimonial:
      "Experiência incrível do início ao fim. O projeto superou todas as minhas expectativas e o processo foi muito transparente.",
    link: "",
  },
  {
    img: img0,
    name: "José Fernandes",
    testimonial:
      "Profissionalismo e criatividade em cada detalhe. Recomendo a qualquer pessoa que queira transformar o seu espaço.",
    link: "",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = React.useState(0);
  const total = testimonialsList.length;

  const prev = () => setCurrent((p) => (p <= 0 ? total - 1 : p - 1));
  const next = () => setCurrent((p) => (p >= total - 1 ? 0 : p + 1));

  React.useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, []);

  const t = testimonialsList[current];

  return (
    <div className="relative flex justify-center items-center gap-4 sm:gap-8 md:gap-10 pb-14 ">
      {/* Arrow Left
      <button
        onClick={prev}
        aria-label="Depoimento anterior"
        className="cursor-pointer active:scale-110 transition shrink-0 p-2 rounded-full hover:bg-base-300"
      >
        <Image src={arrowLeft} height={20} width={20} alt="anterior" />
      </button> */}

      {/* Content */}
      <div className="flex justify-center items-center flex-col md:flex-row gap-8 md:gap-12 max-w-3xl w-full ">
        {/* Photo */}
        {/* <div className="relative size-64 sm:size-72 md:size-80 lg:size-90 shrink-0 rounded-2xl overflow-hidden">
          <Image
            src={t.img}
            fill
            alt={t.name}
            className="object-cover"
          />
        </div> */}

        {/* Text */}
        <div className="flex flex-col font-dm md:max-w-[440px] w-full ">
          {/* Quote mark */}
          <span className="text-5xl text-base-500/30 font-serif leading-none mb-2 select-none">
            "
          </span>
          <p className="text-lg md:text-xl text-balance leading-relaxed mb-4">
            {t.testimonial}
          </p>
          <p className="font-semibold text-base-500 capitalize mb-5">
            — {t.name}
          </p>
          {t.link && (
            <Link
              href={t.link}
              className="text-base-100 font-dm bg-base-500 rounded-full px-8 py-3 font-semibold text-base hover:rounded-xl hover:bg-base-200 hover:text-base-400 transition duration-300 ease-in-out hover:scale-105 self-start"
            >
              Ver Projeto
            </Link>
          )}
        </div>
      </div>

      {/* Arrow Right
      <button
        onClick={next}
        aria-label="Próximo depoimento"
        className="cursor-pointer active:scale-110 transition shrink-0 p-2 rounded-full hover:bg-base-300"
      >
        <Image src={arrowLeft} height={20} width={20} alt="próximo" className="rotate-180" />
      </button> */}

      {/* Dots */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-2">
        {testimonialsList.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Ir para depoimento ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === current ? "w-8 bg-base-500" : "w-4 bg-base-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;