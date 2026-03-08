"use client";
import { Eyebrow } from "@/ui/Eyebrow";
import Image from "next/image";
import Link from "next/link";


const cards = [
  { tag: "01", name: "Projeto de Arquitetura", href: "/servicos",             img: "/imgs/home/card-arquitetura.jpg" },
  { tag: "02", name: "Projeto de Interiores",  href: "/servicos#interiores",  img: "/imgs/home/card-interiores.jpg"  },
  { tag: "03", name: "Acompanhamento de Obra", href: "/servicos#obra",        img: "/imgs/home/card-obra.jpg"        },
];

export default function Services() {
  return (
    <section id="servicos" style={{ background: "var(--white)", padding: "120px 80px" }}>
      {/* Header */}
      <div className="reveal" style={{ marginBottom: 72 }}>
        <Eyebrow label="Serviços" />
        <h2 style={{ fontFamily: "var(--display)", fontWeight: 400, fontSize: "clamp(36px,4vw,52px)", lineHeight: 1.1, color: "var(--black)" }}>
          Projetamos espaços personalizados<br />
          <strong style={{ fontWeight: 500, fontStyle: "italic" }}>do jeito que você sempre quis.</strong>
        </h2>
      </div>

      {/* Grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }}>
        {cards.map((card, i) => (
          <Link
            key={card.tag}
            href={card.href}
            className="reveal service-card"
            style={{ position: "relative", borderRadius: 4, overflow: "hidden", aspectRatio: "4/5", cursor: "pointer", display: "block", transitionDelay: `${i * 0.1}s` }}
          >
            <Image
              src={card.img}
              alt={card.name}
              fill
              style={{ objectFit: "cover", transition: "transform 0.7s cubic-bezier(0.25,0.46,0.45,0.94)" }}
              className="service-card-img"
            />
            {/* Overlay */}
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(20,26,16,0.80) 0%, transparent 55%)" }} />
            {/* Content */}
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "36px 32px" }}>
              <span style={{ fontFamily: "var(--sans)", fontSize: 10, letterSpacing: 3, textTransform: "uppercase", color: "var(--gold)", display: "block", marginBottom: 10 }}>
                {card.tag}
              </span>
              <div style={{ fontFamily: "var(--display)", fontSize: 28, fontWeight: 400, color: "var(--white)", lineHeight: 1.2 }}>
                {card.name}
              </div>
            </div>
            {/* Icon */}
            <div
              className="service-icon"
              style={{ position: "absolute", top: 28, right: 28, width: 44, height: 44, borderRadius: "50%", background: "rgba(255,255,255,0.12)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontSize: 18, transition: "background 0.3s, border-color 0.3s" }}
            >
              +
            </div>
          </Link>
        ))}
      </div>

      <style>{`
        .service-card:hover .service-card-img { transform: scale(1.05); }
        .service-card:hover .service-icon { background: var(--gold) !important; border-color: var(--gold) !important; }
      `}</style>
    </section>
  );
}