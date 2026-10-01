import Image from "next/image";
import logo from "../../public/imgs/home/logo-white.png";

const aboutLinks = [
  { href: "#portfolio", label: "Instagram" },
  { href: "#servicos", label: "Serviços" },
  { href: "#portfolio", label: "Processos" },
  { href: "#contato", label: "Contato" },
];

const contactInfo = ["Brasília", "(61) 5555-5555", "email@hotmail.com"];

const columnStyle = { display: "flex", flexDirection: "column", gap: 12, fontSize: 17, lineHeight: 1.3 } as const;

export default function Footer() {
  return (
    <footer style={{ background: "var(--ink)", color: "var(--footer-text)" }}>
      <div className="page-section" style={{ maxWidth: 1280, margin: "0 auto", padding: "72px 32px 56px", display: "flex", flexWrap: "wrap", gap: "48px 64px", justifyContent: "space-between", alignItems: "flex-end" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <Image src={logo} alt="Marcos Vinícius Arquitetura" style={{ height: 44, width: "auto", alignSelf: "flex-start" }} />
          <p style={{ fontSize: 17, lineHeight: 1.5 }}>Transforme seu sonho em realidade.</p>
          <a href="#contato" className="footer-cta" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 20, background: "var(--paper)", borderRadius: 100, padding: "8px 8px 8px 28px", alignSelf: "flex-start", minWidth: 240 }}>
            <span style={{ fontWeight: 600, fontSize: 16 }}>Entre em contato</span>
            <span style={{ width: 40, height: 40, borderRadius: "50%", background: "var(--ink)", color: "var(--paper)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>→</span>
          </a>
        </div>

        <div style={{ display: "flex", gap: 80, flexWrap: "wrap", alignItems: "flex-end" }}>
          <div style={columnStyle}>
            <div style={{ fontWeight: 600, color: "var(--white)" }}>Sobre</div>
            {aboutLinks.map((link) => (
              <a key={link.label} href={link.href} className="footer-link">{link.label}</a>
            ))}
          </div>
          <div style={columnStyle}>
            <div style={{ fontWeight: 600, color: "var(--white)" }}>Contato</div>
            {contactInfo.map((item) => (
              <div key={item}>{item}</div>
            ))}
          </div>
        </div>
      </div>

      <div className="page-section" style={{ maxWidth: 1280, margin: "0 auto", padding: "20px 32px", display: "flex", justifyContent: "space-between", gap: 16, flexWrap: "wrap", borderTop: "1px solid var(--line)", fontSize: 12, color: "var(--legal-text)" }}>
        <span>© Marcos Vinícius arquitetura. Todos os direitos reservados.</span>
        <span style={{ display: "flex", gap: 16 }}>
          <a href="#" className="footer-link" style={{ color: "inherit" }}>Política de privacidade</a>
          <a href="#" className="footer-link" style={{ color: "inherit" }}>Termos e condições</a>
        </span>
      </div>
    </footer>
  );
}
