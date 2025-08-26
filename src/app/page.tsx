import Image from "next/image";
import banner from "../../public/imgs/home/banner.jpg";
import Link from "next/link";
import { contato } from "../contato/contato";
import Cards from "@/components/home/Cards";
import RenderImgs from "@/components/home/RenderImgs";
import Paralax from "@/components/home/Paralax";

export default function Home() {
  return (
    <div>
      <section className="md:h-[100vh] h-[40vh]">
        <Image
          src={banner}
          height={912}
          width={1439}
          alt="banner.jpeg"
          className="absolute top-0 -z-10"
        />
      </section>
      <section className="px-8 my-15">
        <div className="text-center my-15">
          <h1 className="text-4xl font-cormorant font-[500] text-balance">
            Projetamos espaços personalizados com qualidade
          </h1>
          <h1 className="font-dm font-bold text-3xl text-base-500 text-balance">
            do jeito que você sempre quis.
          </h1>
        </div>
        <div>
          <Cards />
        </div>
      </section>
      <section className="px-8 my-15">
        <hr className="bg-base-500 h-0.5 " />
        <div className="flex md:flex-row flex-col justify-between items-start mt-15 gap-10">
          <div className="">
            <h1 className="text-4xl font-cormorant font-[500] w-[70%]  m-auto md:m-0 text-center md:text-start">
              Transformamos ideias em espaços autênticos
            </h1>
            <h1 className="font-dm font-bold text-3xl text-base-500 w-full m-auto md:m-0 text-center md:text-start">
              Do conceito à entrega.
            </h1>
          </div>
          <p className="font-dm text-2xl md:w-[40%] w-full text-balance text-start">
            Buscamos traduzir a essência dos cliente nos projetos. Tudo é
            pensado com cuidado para tornar cada entrega única e exclusiva.
          </p>
        </div>
        <RenderImgs />
      </section>
      <section className="px-8 my-15">
        <div className="flex justify-center items-center flex-col">
          <h1 className="text-4xl font-cormorant font-[500] text-center text-balance">
            Um processo bem feito é garantia
          </h1>
          <h1 className="font-dm font-bold text-3xl text-base-500 text-balance">
            de resultado desejado.
          </h1>
          <Link
            href={contato}
            className="text-base-100 font-dm bg-base-500 rounded-full px-8 py-4 mt-5 font-semibold text-xl"
          >
            Quero contratar
          </Link>
        </div>
      </section>
      <section className="px-8 my-15">
        <Paralax />
        <div className="flex justify-center items-center gap-10 md:gap-28 mt-15">
          <div>
            <p className="font-dm md:text-5xl text-4xl font-semibold text-base-400">
              +6 anos
            </p>
            <p className="md:text-xl">Experiência</p>
          </div>
          <div>
            <p className="font-dm md:text-5xl text-4xl font-semibold text-base-400">
              155
            </p>
            <p className="md:text-xl">Clientes atendidos</p>
          </div>
          <div>
            <p className="font-dm md:text-5xl text-4xl font-semibold text-base-400">
              100%
            </p>
            <p className="md:text-xl">Clientes satisfeitos</p>
          </div>
        </div>
      </section>
    </div>
  );
}
