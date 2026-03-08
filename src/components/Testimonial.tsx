"use client";
import { Eyebrow } from "@/ui/Eyebrow";
import { useState, useEffect } from "react";

const testimonials = [
  {
    quote: "Adorei o trabalho, foi tudo como esperado e o Marcos foi super atencioso. O que mais gostei foi que ele fez de tudo para tornar realidade as vontades que eu queria trazer pra casa.",
    name: "Márcia Andrea",
    role: "Cliente — Residência Brasília",
  },
  {
    quote: "Experiência incrível do início ao fim. O projeto superou todas as minhas expectativas e o processo foi muito transparente e organizado.",
    name: "João Silva",
    role: "Cliente — Escritório Brasília",
  },
  {
    quote: "Profissionalismo e criatividade em cada detalhe. Recomendo a qualquer pessoa que queira transformar o seu espaço.",
    name: "José Fernandes",
    role: "Cliente — Residência Goiânia",
  },
];

export default function Testimonial() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActive(p => (p + 1) % testimonials.length), 5000);
    return () => clearInterval(t);
  }, []);

  const t = testimonials[active];

  return (
    <section style={{ background: "var(--warm-off)", padding: "120px 80px", textAlign: "center" }}>
      <div className="reveal">
        <Eyebrow label="Depoimentos" center />
      </div>

      <blockquote
        className="reveal"
        style={{ fontFamily: "var(--display)", fontSize: "clamp(22px,2.5vw,32px)", fontWeight: 300, fontStyle: "italic", lineHeight: 1.6, color: "var(--forest)", maxWidth: 760, margin: "0 auto 40px", transition: "opacity 0.5s" }}
      >
        &ldquo;{t.quote}&rdquo;
      </blockquote>

      <div className="reveal" style={{ fontFamily: "var(--sans)", fontSize: 12, letterSpacing: 3, textTransform: "uppercase", color: "var(--mist)" }}>
        <strong style={{ color: "var(--forest)", display: "block", fontSize: 15, letterSpacing: 1, marginBottom: 4, fontWeight: 400 }}>
          {t.name}
        </strong>
        {t.role}
      </div>

      {/* Dots */}
      <div className="reveal" style={{ display: "flex", justifyContent: "center", gap: 10, marginTop: 48 }}>
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            aria-label={`Depoimento ${i + 1}`}
            style={{
              width: 6, height: 6, borderRadius: "50%", border: "none", cursor: "pointer", padding: 0,
              background: active === i ? "var(--forest)" : "var(--mist)",
              transform: active === i ? "scale(1.4)" : "scale(1)",
              transition: "background 0.2s, transform 0.2s",
            }}
          />
        ))}
      </div>
    </section>
  );
}