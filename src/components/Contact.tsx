import Image from "next/image";

export default function Contact() {
  return (
    <section id="contato" className="page-section contact-grid" style={{ maxWidth: 1280, margin: "0 auto", padding: "120px 32px 160px", display: "grid", gridTemplateColumns: "minmax(0, 420px) minmax(0, 560px)", justifyContent: "center", gap: 64, alignItems: "center" }}>
      <div className="reveal" style={{ position: "relative", aspectRatio: "1/1", width: "100%", maxWidth: 420, overflow: "hidden", borderRadius: 6, background: "oklch(92% 0.01 90)" }}>
        <Image src="/imgs/home/marcos-retrato.png" alt="Marcos Vinícius, arquiteto" fill sizes="(max-width: 900px) 100vw, 420px" style={{ objectFit: "cover" }} />
      </div>
      <div className="reveal" style={{ display: "flex", flexDirection: "column", gap: 24, maxWidth: 560 }}>
        <h2 className="section-title">Arquiteto Marcos Vinícius</h2>
        <p className="body-text">
          Para mim, cada projeto começa pela escuta: entender quem vai viver aquele espaço, sua rotina e seus desejos. A partir disso, transformo essas informações em soluções pensadas nos detalhes e acompanho cada etapa até a entrega.
          <br /><br />
          Com mais de 7 anos de experiência, desenvolvo projetos que unem técnica, funcionalidade e identidade.
        </p>
        <a href="mailto:contato@marcosvinicius.arch" className="pill-dark">
          Conte sua ideia <span>○</span>
        </a>
      </div>
    </section>
  );
}
