"use client";
import { BtnDark } from "@/ui/BtnDark";
import { Eyebrow } from "@/ui/Eyebrow";
import Image from "next/image";
import { useState } from "react";


const tabs = ["Render", "Layout", "Planta baixa"];

export default function Portfolio() {
  const [active, setActive] = useState(0);

  return (
    <section id="projetos" style={{ background: "var(--linen)", padding: "80px 80px" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: 80, alignItems: "center" }}>

        {/* Image */}
        <div className="reveal" style={{ position: "relative", borderRadius: 4, overflow: "hidden" }}>
          <Image
            src="/imgs/home/render.jpg"
            alt="Portfólio"
            width={600}
            height={560}
            style={{ width: "100%", height: 560, objectFit: "cover", display: "block" }}
          />
        </div>

        {/* Text */}
        <div className="reveal" style={{ transitionDelay: "0.12s" }}>
          <Eyebrow label="Portfólio" />
          <h2 style={{ fontFamily: "var(--display)", fontWeight: 400, fontSize: 48, lineHeight: 1.1, color: "var(--black)", marginBottom: 24 }}>
            Cada entrega,<br /><em style={{ fontStyle: "italic", color: "var(--sage)" }}>uma obra única.</em>
          </h2>

          {/* Tabs */}
          <div style={{ display: "flex", borderBottom: "1px solid #d4d1c8", marginBottom: 32 }}>
            {tabs.map((tab, i) => (
              <button
                key={tab}
                onClick={() => setActive(i)}
                style={{
                  fontFamily: "var(--sans)", fontSize: 12, letterSpacing: 2, textTransform: "uppercase",
                  color: active === i ? "var(--forest)" : "var(--mist)",
                  background: "none", border: "none",
                  padding: "14px 24px 14px 0", marginRight: 24,
                  cursor: "pointer",
                  borderBottom: active === i ? "2px solid var(--gold)" : "2px solid transparent",
                  marginBottom: -1,
                  transition: "color 0.2s, border-color 0.2s",
                }}
              >
                {tab}
              </button>
            ))}
          </div>

          <p style={{ fontFamily: "var(--body)", fontSize: 16, lineHeight: 1.85, color: "#5a5a52", marginBottom: 40 }}>
            Buscamos traduzir a essência dos clientes em projetos que perdurem. Cada espaço é concebido com intenção, materiais cuidados e atenção aos detalhes que transformam ambientes em experiências.
          </p>

          <BtnDark href="#contato">Quero Contratar</BtnDark>
        </div>
      </div>
    </section>
  );
}