import Image from "next/image";
import banner from "../../public/imgs/home/banner.jpg";

export default function Home() {
  return (
    <div>
      <section className="h-[100vh]">
        <Image
          src={banner}
          height={912}
          width={1439}
          alt="banner.jpeg"
          className="absolute top-0 -z-10"
        />
      </section>
      <section className="px-16">
        <div className="text-center">
          <h1 className="text-4xl font-cormorant font-[500]">
            Projetamos espaços personalizados com qualidades
          </h1>
          <h1 className="font-dm font-bold text-3xl text-base-500">
            do jeito que você sempre quis.
          </h1>
        </div>
      </section>
    </div>
  );
}
