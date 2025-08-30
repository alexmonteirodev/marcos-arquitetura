import Image from "next/image";
import React from "react";
import apartamentoRd from ".././../../public/imgs/projetos/apartamento-rd.svg";
import casaEj from ".././../../public/imgs/projetos/casa-ej.svg";
import chacaraBa from ".././../../public/imgs/projetos/chacara-ba.svg";

const Projects = () => {
  const projetos = [
    {
      ano: "2025",
      name: "Apartamento RD",
      info: {
        quartos: 2,
        banheiros: 2,
        gourmet: false,
        social: true,
        piscina: false,
      },
      img: apartamentoRd,
      link: "",
    },
    {
      ano: "2024",
      name: "Chácara BA",
      info: {
        quartos: 1,
        banheiros: 1,
        gourmet: true,
        social: false,
        piscina: true,
      },
      img: chacaraBa,
      link: "",
    },
    {
      ano: "2023",
      name: "Casa EJ",
      info: {
        quartos: 3,
        banheiros: 3,
        gourmet: true,
        social: false,
        piscina: false,
      },
      img: casaEj,
      link: "",
    },
  ];
  return (
    <div className="px-8 my-15 *:my-15">
      <section>
        <h1 className="text-3xl md:text-4xl font-cormorant font-[500] m-auto md:m-0 text-center">
          Projetos Selecionados
        </h1>
      </section>
      <section className="space-y-15">
        {projetos.map((projeto, i) => (
          <div key={i} className="flex flex-wrap justify-between items-start">
            <div className="flex pt-10">
              <p className="font-dm text-2xl">{projeto.ano}</p>
            </div>
            <div className="flex flex-wrap-reverse gap-10 md:gap-25 border-t-2 border-base-500 pt-10">
              <div>
                <div className="text-xl">
                  <h2 className="font-dm text-2xl">{projeto.name}</h2>
                  <p>
                    {projeto.info.quartos
                      ? projeto.info.quartos + " quartos"
                      : ""}
                  </p>
                  <p>
                    {projeto.info.banheiros
                      ? projeto.info.banheiros + " banheiros"
                      : ""}
                  </p>
                  <p>{projeto.info.gourmet ? "Área gourmet" : ""}</p>
                  <p>{projeto.info.social ? "Área social / Cozinha" : ""}</p>
                  <p>{projeto.info.piscina ? "piscina" : ""}</p>
                </div>
              </div>
              <Image src={projeto.img} height={500} width={617} alt="img.jpg" />
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Projects;
