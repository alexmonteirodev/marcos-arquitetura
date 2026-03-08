import { BtnDark } from "@/ui/BtnDark";
import { Eyebrow } from "@/ui/Eyebrow";


const contactItems = [
  { icon: "📍", text: "Brasília, DF" },
  { icon: "📞", text: "(61) 5555-55555" },
  { icon: "✉",  text: "email@hotmail.com" },
  { icon: "📷", text: "@marcos.vinicius.arch" },
];

export default function Cta() {
  return (
    <div id="contato" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: 480 }}>
      {/* Left */}
      <div style={{ background: "var(--linen)", padding: "100px 80px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <Eyebrow label="Vamos Conversar" />
        <h2 style={{ fontFamily: "var(--display)", fontSize: 48, fontWeight: 400, lineHeight: 1.1, color: "var(--black)", marginBottom: 20 }}>
          Vamos tirar o seu projeto<br />
          <em style={{ fontStyle: "italic", color: "var(--sage)" }}>do papel?</em>
        </h2>
        <p style={{ fontFamily: "var(--body)", fontSize: 16, lineHeight: 1.75, color: "#6a6a60", marginBottom: 44, maxWidth: 400 }}>
          Entregamos um trabalho impecável que supera expectativas. Entre em contato e descubra como podemos transformar sua ideia em realidade.
        </p>
        <BtnDark href="mailto:email@hotmail.com">Enviar Mensagem</BtnDark>
      </div>

      {/* Right */}
      <div style={{ background: "var(--forest)", padding: "100px 80px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 16, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: 100, padding: "20px 36px", marginBottom: 48, width: "fit-content" }}>
          <div style={{ width: 44, height: 44, borderRadius: "50%", background: "var(--gold)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>
            ✉
          </div>
          <span style={{ fontFamily: "var(--display)", fontSize: 22, fontStyle: "italic", color: "rgba(255,255,255,0.75)" }}>
            Envie uma mensagem
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          {contactItems.map((item) => (
            <div key={item.text} style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <div style={{ width: 36, height: 36, borderRadius: "50%", background: "rgba(255,255,255,0.08)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, flexShrink: 0 }}>
                {item.icon}
              </div>
              <span style={{ fontFamily: "var(--body)", fontSize: 14, color: "rgba(255,255,255,0.65)", letterSpacing: 0.3 }}>
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}