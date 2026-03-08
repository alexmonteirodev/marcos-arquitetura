import Image from "next/image";
import banner from "../../public/imgs/home/banner.jpg";

export default function Hero() {
  return (
    <section style={{ position: "relative", height: "100vh", minHeight: 720, display: "flex", alignItems: "flex-end", padding: "0 80px 100px", overflow: "hidden" }}>
      <Image
        src={banner}
        alt="Marcos Vinícius Arquitetura"
        fill
        priority
        style={{ objectFit: "cover", objectPosition: "center", zIndex: 0 }}
      />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(20,26,16,0.70) 0%, rgba(20,26,16,0.30) 60%, transparent 100%)", zIndex: 1 }} />

      <div style={{ position: "relative", zIndex: 2, maxWidth: 560 }} className="hero-content">
        <div className="hero-eyebrow" style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 28 }}>
          <div style={{ width: 48, height: 1, background: "var(--gold)" }} />
          <span style={{ fontFamily: "var(--sans)", fontSize: 11, letterSpacing: 3, textTransform: "uppercase", color: "var(--gold)" }}>
            Brasília · Arquitetura Autoral
          </span>
        </div>

        <h1 className="hero-h1" style={{ fontFamily: "var(--display)", fontWeight: 400, fontSize: "clamp(52px,6vw,76px)", lineHeight: 1.08, color: "var(--white)", marginBottom: 36 }}>
          Arquitetura <em style={{ fontStyle: "italic", color: "var(--mist)" }}>sob medida</em> para você.
        </h1>

        <div className="hero-actions" style={{ display: "flex", alignItems: "center", gap: 40 }}>
          <a href="#servicos" className="btn-primary">Ver Serviços</a>
          <a href="#projetos" className="btn-ghost">Explorar Projetos <span>→</span></a>
        </div>
      </div>
    </section>
  );
}