// import Image from "next/image";
// import banner from "../../public/imgs/home/banner.jpg";
// import mensageIcon from "../../public/imgs/home/mesage-icon.svg";
// import Link from "next/link";
// import { contato } from "../contato/contato";
// import Cards from "@/components/home/Cards";
// import RenderImgs from "@/components/home/RenderImgs";
// import Paralax from "@/components/home/Paralax";
// import Testimonials from "@/components/home/Testimonials";

// export default function Home() {
//   return (
//     <div>
//       <section className="md:h-[100vh] h-[40vh]">
//         <Image
//           src={banner}
//           height={912}
//           width={1439}
//           alt="banner.jpeg"
//           className="absolute top-0 -z-10"
//         />
//       </section>
//       <section className="px-8 my-15">
//         <div className="text-center my-15">
//           <h1 className="text-4xl font-cormorant font-[500] text-balance">
//             Projetamos espaços personalizados com qualidade
//           </h1>
//           <h1 className="font-dm font-bold text-3xl text-base-500 text-balance">
//             do jeito que você sempre quis.
//           </h1>
//         </div>
//         <div>
//           <Cards />
//         </div>
//       </section>
//       <section className="px-8 my-15">
//         <hr className="bg-base-500 h-0.5 " />
//         <div className="flex md:flex-row flex-col justify-between items-start mt-15 gap-10">
//           <div className="">
//             <h1 className="text-4xl font-cormorant font-[500] w-[70%]  m-auto md:m-0 text-center md:text-start">
//               Transformamos ideias em espaços autênticos
//             </h1>
//             <h1 className="font-dm font-bold text-3xl text-base-500 w-full m-auto md:m-0 text-center md:text-start">
//               Do conceito à entrega.
//             </h1>
//           </div>
//           <p className="font-dm text-2xl md:w-[40%] w-full text-balance text-start">
//             Buscamos traduzir a essência dos cliente nos projetos. Tudo é
//             pensado com cuidado para tornar cada entrega única e exclusiva.
//           </p>
//         </div>
//         <RenderImgs />
//       </section>
//       <section className="px-8 my-15">
//         <div className="flex justify-center items-center flex-col">
//           <h1 className="text-4xl font-cormorant font-[500] text-center text-balance">
//             Um processo bem feito é garantia
//           </h1>
//           <h1 className="font-dm font-bold text-3xl text-base-500 text-balance">
//             de resultado desejado.
//           </h1>
//           <Link
//             href={contato}
//             className="text-base-100 font-dm bg-base-500 rounded-full px-8 py-4 mt-5 font-semibold text-xl hover:rounded-xl hover:bg-base-200 hover:text-base-400 transition duration-300 ease-in-out hover:scale-105"
//           >
//             Quero contratar
//           </Link>
//         </div>
//       </section>
//       <section className="px-8 my-15">
//         <Paralax />
//         <div className="flex justify-center items-center gap-10 md:gap-28 mt-15">
//           <div>
//             <p className="font-dm md:text-5xl text-4xl font-semibold text-base-400">
//               +6 anos
//             </p>
//             <p className="md:text-xl">Experiência</p>
//           </div>
//           <div>
//             <p className="font-dm md:text-5xl text-4xl font-semibold text-base-400">
//               155
//             </p>
//             <p className="md:text-xl">Clientes atendidos</p>
//           </div>
//           <div>
//             <p className="font-dm md:text-5xl text-4xl font-semibold text-base-400">
//               100%
//             </p>
//             <p className="md:text-xl">Clientes satisfeitos</p>
//           </div>
//         </div>
//       </section>
//       <section className="px-8 my-15" id="contato">
//         <div className="my-15">
//           <h1 className="text-3xl md:text-4xl font-cormorant font-[500]  m-auto md:m-0 text-center">
//             Entregamos um trabalho impecável
//           </h1>
//           <h1 className="font-dm font-bold text-3xl text-base-500 w-full m-auto md:m-0 text-center ">
//             que supera expectativas.
//           </h1>
//         </div>
//         <Testimonials />
//         <div className="mt-35 flex items-center justify-center flex-col gap-10">
//           <h1 className="font-dm  text-3xl text-base-500 w-full m-auto md:m-0 text-center ">
//             Vamos tirar o seu projeto do papel?
//           </h1>
//           <Link href={contato} className="">
//             <div className="inline-flex items-center gap-15 font-dm font-semibold text-2xl bg-[#F3F3F2] py-4 px-8 rounded-full hover:scale-110 duration-200 transition hover:bg-base-300">
//               <p>Enviar mensagem</p>
//               <div className=" bg-base-300 p-6 flex justify-center items-center rounded-full ">
//                 <Image
//                   src={mensageIcon}
//                   height={25}
//                   width={25}
//                   alt="ico.svg"
//                   className="animate-bounce"
//                 />
//               </div>
//             </div>
//           </Link>
//         </div>
//       </section>
//     </div>
//   );
// }

import Image from "next/image";
import banner from "../../public/imgs/home/banner.jpg";
import mensageIcon from "../../public/imgs/home/mesage-icon.svg";
import Link from "next/link";
import { contato } from "../contato/contato";
import Cards from "@/components/home/Cards";
import RenderImgs from "@/components/home/RenderImgs";
import Paralax from "@/components/home/Paralax";
import Testimonials from "@/components/home/Testimonials";

const stats = [
  { value: "+6 anos", label: "Experiência" },
  { value: "155", label: "Clientes atendidos" },
  { value: "100%", label: "Clientes satisfeitos" },
];

export default function Home() {
  return (
    <main>
      {/* ── Hero ── */}
      <section className="relative md:h-screen h-[55vh] flex items-end">
        <Image
          src={banner}
          fill
          alt="Banner"
          className="object-cover object-center -z-10"
          priority
        />
        {/* Gradient so content below isn't jarring */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30 -z-10" />
      </section>

      {/* ── Cards ── */}
      <section className="px-6 sm:px-10 lg:px-16 py-20 md:py-28">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-cormorant font-[500] text-balance">
            Projetamos espaços personalizados com qualidade
          </h2>
          <p className="font-dm font-bold text-2xl md:text-3xl text-base-500 mt-1">
            do jeito que você sempre quis.
          </p>
        </div>
        <Cards />
      </section>

      {/* ── RenderImgs ── */}
      <section className="px-6 sm:px-10 lg:px-16 py-20 md:py-28">
        <hr className="bg-base-500 h-px border-none mb-16" />
        <div className="flex md:flex-row flex-col justify-between items-start gap-8 mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-cormorant font-[500] max-w-sm text-center md:text-start">
              Transformamos ideias em espaços autênticos
            </h2>
            <p className="font-dm font-bold text-2xl md:text-3xl text-base-500 text-center md:text-start">
              Do conceito à entrega.
            </p>
          </div>
          <p className="font-dm text-lg md:text-xl lg:text-2xl md:max-w-[40%] text-base-600/70 leading-relaxed">
            Buscamos traduzir a essência dos clientes nos projetos. Tudo é
            pensado com cuidado para tornar cada entrega única e exclusiva.
          </p>
        </div>
        <RenderImgs />
      </section>

      {/* ── CTA ── */}
      <section className="px-6 sm:px-10 lg:px-16 py-20 md:py-24">
        <div className="flex justify-center items-center flex-col gap-6 text-center">
          <h2 className="text-4xl md:text-5xl font-cormorant font-[500] text-balance max-w-lg">
            Um processo bem feito é garantia
          </h2>
          <p className="font-dm font-bold text-2xl md:text-3xl text-base-500">
            de resultado desejado.
          </p>
          <Link
            href={contato}
            className="text-base-100 font-dm bg-base-500 rounded-full px-10 py-4 mt-2 font-semibold text-lg hover:rounded-xl hover:bg-base-200 hover:text-base-400 transition duration-300 ease-in-out hover:scale-105"
          >
            Quero contratar
          </Link>
        </div>
      </section>

        <Paralax />
      {/* ── Processo + Stats ── */}
      <section className="px-6 sm:px-10 lg:px-16 py-20 md:py-28">

        {/* Stats */}
        <div className="flex justify-center items-start gap-8 sm:gap-16 md:gap-28 mt-20 flex-wrap">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center md:text-left">
              <p className="font-dm text-4xl md:text-5xl font-semibold text-base-400 leading-none">
                {stat.value}
              </p>
              <p className="font-dm text-sm md:text-base text-base-500/70 mt-1 tracking-wide uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="px-6 sm:px-10 lg:px-16 py-20 md:py-28" id="contato">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-cormorant font-[500]">
            Entregamos um trabalho impecável
          </h2>
          <p className="font-dm font-bold text-2xl md:text-3xl text-base-500 mt-1">
            que supera expectativas.
          </p>
        </div>

        <Testimonials />

        {/* Final CTA */}
        <div className="mt-28 flex items-center justify-center flex-col gap-8">
          <p className="font-dm text-2xl md:text-3xl text-base-500 text-center">
            Vamos tirar o seu projeto do papel?
          </p>
          <Link href={contato}>
            <div className="inline-flex items-center gap-8 font-dm font-semibold text-xl bg-[#F3F3F2] py-4 px-8 rounded-full hover:scale-105 duration-200 transition hover:bg-base-300">
              <span>Enviar mensagem</span>
              <div className="bg-base-300 p-5 flex justify-center items-center rounded-full">
                <Image
                  src={mensageIcon}
                  height={22}
                  width={22}
                  alt="Ícone de mensagem"
                  className="animate-bounce"
                />
              </div>
            </div>
          </Link>
        </div>
      </section>
    </main>
  );
}