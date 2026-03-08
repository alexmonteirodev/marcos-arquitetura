import { Eyebrow } from "@/ui/Eyebrow";

const steps = [
  { number: "01", title: "Chamada Introdutória",  desc: "Conhecemos você, entendemos sua visão e definimos objetivos claros para o projeto." },
  { number: "02", title: "Proposta Orçamentária", desc: "Elaboramos um orçamento detalhado e transparente, alinhado às suas expectativas." },
  { number: "03", title: "Projeto",               desc: "Desenvolvemos o projeto completo com atenção aos mínimos detalhes e sua aprovação em cada etapa." },
  { number: "04", title: "Entrega",               desc: "Acompanhamos a execução e garantimos que cada detalhe seja fiel ao projeto aprovado." },
];

export default function Process() {
  return (
    <section id="processo" style={{ background: "var(--forest)", color: "var(--white)", padding: "120px 80px" }}>
      <div className="reveal" style={{ textAlign: "center", marginBottom: 80 }}>
        <Eyebrow label="Processo" center />
        <h2 style={{ fontFamily: "var(--display)", fontWeight: 400, fontSize: "clamp(36px,4vw,52px)", lineHeight: 1.1, color: "var(--white)", marginTop: 12 }}>
          Um processo bem feito é garantia<br />
          <strong style={{ fontWeight: 500, fontStyle: "italic", color: "var(--gold)" }}>de resultado desejado.</strong>
        </h2>
      </div>

      <div
        className="reveal"
        style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 1, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 4, overflow: "hidden", transitionDelay: "0.15s" }}
      >
        {steps.map((step) => (
          <div key={step.number} className="process-step" style={{ padding: "56px 40px", background: "var(--forest)" }}>
            <div style={{ fontFamily: "var(--display)", fontSize: 64, fontWeight: 300, color: "rgba(255,255,255,0.10)", lineHeight: 1, marginBottom: 28 }}>
              {step.number}
            </div>
            <div style={{ fontFamily: "var(--display)", fontSize: 24, fontWeight: 400, color: "var(--white)", marginBottom: 14 }}>
              {step.title}
            </div>
            <div style={{ fontFamily: "var(--body)", fontSize: 14, lineHeight: 1.75, color: "rgba(255,255,255,0.55)" }}>
              {step.desc}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}