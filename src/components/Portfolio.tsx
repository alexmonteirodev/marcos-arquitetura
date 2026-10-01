import { Placeholder } from "@/ui/Placeholder";

const projects = [
  { name: "Terra Verde", place: "Brasília · 2026", category: "Residencial", image: "render · fachada em terreno inclinado" },
  { name: "Pátio Nova", place: "Goiânia · 2025", category: "Residencial", image: "foto · pátio interno com jardim" },
  { name: "Casa Cerrado", place: "Anápolis · 2025", category: "Residencial", image: "foto · fachada em madeira e vidro" },
  { name: "Refúgio Sereno", place: "Pirenópolis · 2024", category: "Interiores", image: "foto · varanda com cobertura em madeira" },
];

export default function Portfolio() {
  return (
    <section id="portfolio-lista" className="page-section" style={{ maxWidth: 1280, margin: "0 auto", padding: "120px 32px", display: "flex", flexDirection: "column", gap: 32 }}>
      <div className="reveal" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 24, flexWrap: "wrap" }}>
        <h2 className="section-title">Projetos<br />selecionados</h2>
        <div style={{ fontSize: 24, fontWeight: 700 }}>({String(projects.length).padStart(2, "0")})</div>
      </div>

      <div className="portfolio-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "40px 32px" }}>
        {projects.map((project) => (
          <a key={project.name} href="#contato" className="project-card reveal" style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ borderRadius: 6, overflow: "hidden" }}>
              <Placeholder label={project.image} style={{ width: "100%", aspectRatio: "4/3", fontSize: 11 }} />
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
              <div>
                <div style={{ fontWeight: 700, fontSize: 19 }}>{project.name}</div>
                <div style={{ fontSize: 13, color: "var(--muted-2)", marginTop: 2 }}>{project.place}</div>
              </div>
              <span style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--muted-2)" }}>
                {project.category}
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
