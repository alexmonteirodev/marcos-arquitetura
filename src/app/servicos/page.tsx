import React from "react";
import fachadaSvg from "../../../public/imgs/services/fachada.svg";
import Image from "next/image";
import Link from "next/link";
import { contato } from "../../contato/contato";
import Testimonials from "@/components/home/Testimonials";

const Servicos = () => {
  const servicos = [
    {
      title: "projeto de",
      subtitle: "arquitetura",
      text: "Pensado para quem deseja construir ou reformar com segurança, personalidade e eficiência. Desenvolvemos projetos completos — do estudo inicial à compatibilização técnica — unindo estética, funcionalidade e viabilidade. Cada detalhe é planejado para refletir suas necessidades e respeitar as exigências do terreno e da legislação. ",
      img: fachadaSvg,
      id: "arquitetura",
    },
    {
      title: "projeto de",
      subtitle: "interiores",
      text: "Pensado para quem deseja construir ou reformar com segurança, personalidade e eficiência. Desenvolvemos projetos completos — do estudo inicial à compatibilização técnica — unindo estética, funcionalidade e viabilidade. Cada detalhe é planejado para refletir suas necessidades e respeitar as exigências do terreno e da legislação. ",
      img: fachadaSvg,
      id: "interiores",
    },
    {
      title: "acompanhamento de",
      subtitle: "obra",
      text: "Pensado para quem deseja construir ou reformar com segurança, personalidade e eficiência. Desenvolvemos projetos completos — do estudo inicial à compatibilização técnica — unindo estética, funcionalidade e viabilidade. Cada detalhe é planejado para refletir suas necessidades e respeitar as exigências do terreno e da legislação. ",
      img: fachadaSvg,
      id: "obra",
    },
    {
      title: "estudo de",
      subtitle: "fachada e volumetria",
      text: "Pensado para quem deseja construir ou reformar com segurança, personalidade e eficiência. Desenvolvemos projetos completos — do estudo inicial à compatibilização técnica — unindo estética, funcionalidade e viabilidade. Cada detalhe é planejado para refletir suas necessidades e respeitar as exigências do terreno e da legislação. ",
      img: fachadaSvg,
    },
    {
      title: "",
      subtitle: "consultoria",
      text: "Pensado para quem deseja construir ou reformar com segurança, personalidade e eficiência. Desenvolvemos projetos completos — do estudo inicial à compatibilização técnica — unindo estética, funcionalidade e viabilidade. Cada detalhe é planejado para refletir suas necessidades e respeitar as exigências do terreno e da legislação. ",
      img: fachadaSvg,
    },
  ];
  return (
    <div className="px-8 my-15 *:my-15">
      <section>
        <h1 className="text-3xl md:text-4xl font-cormorant font-[500] m-auto md:m-0 text-center">
          Da inspiração à realização. Conheça nossos serviços
        </h1>
      </section>
      <section className="space-y-10">
        {servicos.map((service, i) => (
          <div
            key={i}
            id={service.id}
            className="flex justify-center items-center flex-wrap-reverse md:flex-row gap-3"
          >
            <div className="md:w-[40%] space-y-4">
              <h2 className="first-letter:uppercase text-3xl ">
                {service.title}{" "}
                <span className="font-bold">{service.subtitle}</span>
              </h2>
              <p className="text-start text-xl">{service.text}</p>
              <Link
                href={contato}
                className="text-base-100 font-dm bg-base-500 rounded-full px-8 py-4 mt-5 font-semibold text-xl hover:rounded-xl hover:bg-base-200 hover:text-base-400 transition duration-300 ease-in-out hover:scale-105 inline-flex"
              >
                Quero contratar
              </Link>
            </div>
            <div>
              <Image src={service.img} height={440} width={542} alt="img.png" />
            </div>
          </div>
        ))}
      </section>
      <section>
        <div className="my-10">
          <h1 className="text-4xl font-cormorant font-[500] text-center text-balance">
            Mais de seis anos de experiência no mercado
          </h1>
          <h1 className="font-dm font-bold text-3xl text-center text-base-500 text-balance">
            aliando técnica, visão e criatividade.
          </h1>
        </div>
        <Testimonials />
      </section>
    </div>
  );
};

export default Servicos;
