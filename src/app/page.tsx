import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import { RevealProvider } from "@/ui/RevealProvider";
import { SmoothScroll } from "@/ui/SmoothScroll";

export default function Home() {
  return (
    <RevealProvider>
      <SmoothScroll />
      <main>
        <Hero
          focusX={77}
          focusY={90}
          zoom={1.25}
          scrollZoom={0.03}
          parallax={25}
        />
        <div className="page-over">
          <About />
          <Portfolio />
          <Services />
          <Contact />
        </div>
      </main>
      <div className="page-over">
        <Footer />
      </div>
    </RevealProvider>
  );
}
