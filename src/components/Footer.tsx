const navLinks = [
  { href: "#servicos", label: "Serviços"  },
  { href: "#projetos", label: "Portfólio" },
  { href: "#processo", label: "Processos" },
  { href: "#contato",  label: "Contato"   },
];

const contactLinks = [
  { href: "#",                        label: "Brasília, DF"          },
  { href: "tel:6155555555",           label: "(61) 5555-55555"       },
  { href: "mailto:email@hotmail.com", label: "email@hotmail.com"     },
  { href: "#",                        label: "@marcos.vinicius.arch" },
];

export default function Footer() {
  return (
    <footer style={{ background: "var(--black)", padding: "72px 80px 40px" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr", gap: 80, paddingBottom: 56, borderBottom: "1px solid rgba(255,255,255,0.08)", marginBottom: 40 }}>

        {/* Brand */}
        <div>
          <h3 style={{ fontFamily: "var(--sans)", fontWeight: 300, fontSize: 16, letterSpacing: 3, color: "var(--white)", textTransform: "uppercase", marginBottom: 4 }}>
            Marcos Vinícius
          </h3>
          <p style={{ fontFamily: "var(--sans)", fontSize: 9, letterSpacing: 5, color: "var(--mist)", textTransform: "uppercase", marginBottom: 24 }}>
            Arquitetura
          </p>
          <span style={{ fontFamily: "var(--display)", fontStyle: "italic", fontSize: 16, color: "rgba(255,255,255,0.45)", lineHeight: 1.6, maxWidth: 260, display: "block" }}>
            Transformando sonhos em espaços que perdurem.
          </span>
        </div>

        {/* Nav */}
        <div>
          <h4 style={{ fontFamily: "var(--sans)", fontSize: 11, letterSpacing: 3, textTransform: "uppercase", color: "rgba(255,255,255,0.35)", marginBottom: 20 }}>
            Navegação
          </h4>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
            {navLinks.map(l => (
              <li key={l.href}>
                <a href={l.href} className="footer-link">{l.label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 style={{ fontFamily: "var(--sans)", fontSize: 11, letterSpacing: 3, textTransform: "uppercase", color: "rgba(255,255,255,0.35)", marginBottom: 20 }}>
            Contato
          </h4>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
            {contactLinks.map(l => (
              <li key={l.label}>
                <a href={l.href} className="footer-link">{l.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontFamily: "var(--body)", fontSize: 12, color: "rgba(255,255,255,0.25)", letterSpacing: 0.3 }}>
          © Marcos Vinícius Arquitetura. Todos os direitos reservados.
        </span>
        <div style={{ display: "flex", gap: 32 }}>
          {["Política de Privacidade", "Termos e Condições"].map(l => (
            <a key={l} href="#" className="footer-legal-link">{l}</a>
          ))}
        </div>
      </div>
    </footer>
  );
}