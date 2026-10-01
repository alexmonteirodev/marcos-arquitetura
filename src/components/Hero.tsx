import Image from "next/image";
import logo from "../../public/imgs/home/logo-white.png";

const links = [
  { href: "#portfolio-lista", label: "Projetos" },
  { href: "#servicos", label: "Serviços" },
  { href: "#portfolio", label: "Processo" },
];

export default function Hero() {
  return (
    <section style={{ position: "relative", width: "100%", height: "100vh", minHeight: 640, overflow: "hidden", display: "flex", flexDirection: "column", color: "var(--white)" }}>
      <Image
        src="/imgs/home/hero.png"
        alt="Fachada de casa moderna com piscina, jardim e pôr do sol"
        fill
        priority
        sizes="100vw"
        style={{ objectFit: "cover", zIndex: 0 }}
      />
      <div style={{ position: "absolute", inset: 0, zIndex: 1, background: "linear-gradient(180deg, oklch(15% 0.01 240 / 0.35) 0%, oklch(15% 0.01 240 / 0) 30%, oklch(15% 0.01 240 / 0) 55%, oklch(10% 0.01 240 / 0.6) 100%)" }} />

      <header className="hero-header" style={{ position: "relative", zIndex: 2, display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%", padding: "32px 40px", gap: 16, flexWrap: "wrap" }}>
        <Image src={logo} alt="Marcos Vinícius Arquitetura" priority style={{ height: 40, width: "auto" }} />
        <nav className="hero-nav" style={{ display: "flex", alignItems: "center", gap: 28, whiteSpace: "nowrap" }}>
          {links.map((link) => (
            <a key={link.label} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
        </nav>
        <a href="#contato" className="pill">entre em contato</a>
      </header>

      <div className="hero-bottom" style={{ position: "relative", zIndex: 2, display: "flex", alignItems: "flex-end", justifyContent: "space-between", padding: "0 40px 40px", marginTop: "auto", gap: 24, flexWrap: "wrap" }}>
        <h1 className="hero-title" style={{ fontSize: "clamp(36px,6vw,72px)", fontWeight: 400, lineHeight: 1.15, letterSpacing: "-0.01em", maxWidth: 640 }}>
          Arquitetura pensada para&nbsp;<br />sua forma de viver.
        </h1>
        <div style={{ fontSize: 14, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", opacity: 0.85 }}>
          (Role para baixo)
        </div>
      </div>
    </section>
  );
}
