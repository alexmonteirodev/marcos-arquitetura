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
    </div>
  );
}
