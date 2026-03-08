"use client";
import { useEffect, useState } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0, left: 0, right: 0,
        zIndex: 100,
        padding: "28px 80px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        transition: "background 0.4s, backdrop-filter 0.4s",
        background: scrolled ? "rgba(29,36,23,0.88)" : "transparent",
        backdropFilter: scrolled ? "blur(14px)" : "none",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 1 }}>
        <span style={{ fontFamily: "var(--sans)", fontWeight: 300, fontSize: 15, letterSpacing: 3, color: "var(--white)", textTransform: "uppercase" }}>
          Marcos Vinícius
        </span>
        <span style={{ fontFamily: "var(--sans)", fontWeight: 300, fontSize: 8, letterSpacing: 5, color: "var(--mist)", textTransform: "uppercase" }}>
          Arquitetura
        </span>
      </div>

      <div style={{ display: "flex", gap: 48, alignItems: "center" }}>
        {[
          { href: "#servicos", label: "Serviços" },
          { href: "#projetos", label: "Projetos" },
          { href: "#processo", label: "Processo" },
        ].map((item) => (
          <a key={item.href} href={item.href} className="nav-link">
            {item.label}
          </a>
        ))}
        <a href="#contato" className="nav-cta">
          Entrar em Contato
        </a>
      </div>
    </nav>
  );
}