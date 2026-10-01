import { Placeholder } from "@/ui/Placeholder";

const stats = [
  { value: "+7", label: "Anos de experiência" },
  { value: "+155", label: "Projetos desenvolvidos" },
];

export default function About() {
  return (
    <section id="servicos" className="page-section" style={{ maxWidth: 1280, margin: "0 auto", padding: "160px 32px 120px" }}>
      <div className="reveal" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 420px), 1fr))", gap: 64, alignItems: "center" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 32, maxWidth: 560 }}>
          <h2 className="section-title">Arquitetura<br />com propósito</h2>
          <div className="body-text" style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <p>
              Cada espaço conta uma história, por isso, todo projeto começa com uma escuta cuidadosa. Entendemos a rotina, os desejos e a personalidade de quem vai viver naquele espaço para transformar tudo isso em um projeto com identidade.
            </p>
            <p>
              Do conceito aos detalhes, cada escolha tem um propósito: criar espaços autênticos, atemporais e verdadeiramente seu.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 200px), 1fr))", gap: "32px 64px" }}>
            {stats.map((stat) => (
              <div key={stat.label} style={{ display: "flex", flexDirection: "column", gap: 14, padding: "8px 0" }}>
                <div style={{ fontSize: "clamp(36px,6vw,64px)", fontWeight: 600, lineHeight: 1, letterSpacing: "-0.03em", color: "var(--ink)" }}>
                  {stat.value}
                </div>
                <div style={{ fontSize: 13, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--muted)" }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="about-photos" style={{ position: "relative", width: "100%", aspectRatio: "1/1.05", maxWidth: 560, justifySelf: "end" }}>
          <Placeholder label="foto · ambiente interno, luz natural" style={{ position: "absolute", top: 0, left: 0, width: "78%", height: "88%", borderRadius: 4 }} />
          <div style={{ position: "absolute", right: 0, bottom: 0, width: "42%", height: "44%", padding: "8px 0 0 8px", background: "var(--white)" }}>
            <Placeholder label="foto · detalhe, textura" style={{ width: "100%", height: "100%", borderRadius: 4 }} />
          </div>
        </div>
      </div>
    </section>
  );
}
