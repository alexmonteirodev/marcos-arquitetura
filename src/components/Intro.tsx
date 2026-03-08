import { Eyebrow } from "@/ui/Eyebrow";


const stats = [
  { number: "+6",   label: "Anos de Experiência" },
  { number: "155",  label: "Clientes Atendidos"  },
  { number: "100%", label: "Clientes Satisfeitos" },
];

export default function Intro() {
  return (
    <section
      id="sobre"
      style={{ background: "var(--linen)", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center", padding: "120px 80px" }}
    >
      {/* Text */}
      <div className="reveal">
        <Eyebrow label="Nossa Missão" />
        <h2 style={{ fontFamily: "var(--display)", fontWeight: 400, fontSize: "clamp(36px,4vw,52px)", lineHeight: 1.1, color: "var(--black)" }}>
          Transformamos ideias em espaços<br />
          <strong style={{ fontWeight: 500, fontStyle: "italic" }}>autênticos e únicos.</strong>
        </h2>
        <p style={{ fontFamily: "var(--body)", fontSize: 17, lineHeight: 1.8, color: "#4a4a44", marginTop: 24, maxWidth: 480 }}>
          Traduzimos a essência de cada cliente nos projetos. Cada detalhe é pensado com cuidado para tornar a entrega única — do conceito à obra concluída.
        </p>
      </div>

      {/* Stats */}
      <div className="reveal" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 40, transitionDelay: "0.15s" }}>
        {stats.map((s) => (
          <div key={s.label} style={{ display: "flex", flexDirection: "column", gap: 6, paddingTop: 24, borderTop: "1px solid var(--mist)" }}>
            <span style={{ fontFamily: "var(--display)", fontSize: 52, fontWeight: 300, color: "var(--forest)", lineHeight: 1 }}>
              {s.number}
            </span>
            <span style={{ fontFamily: "var(--body)", fontSize: 13, letterSpacing: 0.5, color: "var(--mist)", textTransform: "uppercase" }}>
              {s.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}