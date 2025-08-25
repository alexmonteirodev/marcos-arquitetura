import Image from "next/image";
import banner from "../../public/imgs/home/banner.jpg";
import Link from "next/link";
import { contato } from "../contato/contato";
import Cards from "@/components/home/Cards";
import RenderImgs from "@/components/home/RenderImgs";

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
      <section className="px-16 my-15">
        <div className="text-center my-15">
          <h1 className="text-4xl font-cormorant font-[500]">
            Projetamos espaços personalizados com qualidades
          </h1>
          <h1 className="font-dm font-bold text-3xl text-base-500">
            do jeito que você sempre quis.
          </h1>
        </div>
        <div>
          <Cards />
        </div>
      </section>
      <section className="px-16 my-15">
        <hr className="bg-base-500 h-0.5 " />
        <div className="flex justify-between items-start mt-15">
          <div className=" ">
            <h1 className="text-4xl font-cormorant font-[500] w-[60%]">
              Transformamos ideias em espaços autênticos
            </h1>
            <h1 className="font-dm font-bold text-3xl text-base-500 w-[60%]">
              Do conceito à entrega.
            </h1>
          </div>
          <p className="font-dm text-2xl w-[40%]">
            Buscamos traduzir a essência dos cliente nos projetos. Tudo é
            pensado com cuidado para tornar cada entrega única e exclusiva.
          </p>
        </div>
        <RenderImgs />
      </section>

      <section className="px-16 my-15">
        <div className="flex justify-center items-center flex-col">
          <h1 className="text-4xl font-cormorant font-[500]">
            Um processo bem feito é garantia
          </h1>
          <h1 className="font-dm font-bold text-3xl text-base-500">
            de resultado desejado.
          </h1>
          <Link
            href={contato}
            className="text-base-100 font-dm bg-base-500 rounded-full px-8 py-4"
          >
            Quero contratar
          </Link>
        </div>
      </section>
    </div>
  );
}
