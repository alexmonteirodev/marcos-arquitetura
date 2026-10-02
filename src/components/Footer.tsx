import Image from "next/image";
import logo from "../../public/imgs/home/logo.svg";
import { RollText } from "@/ui/RollText";
import { RollButton } from "@/ui/RollButton";
import { BrasiliaClock } from "@/ui/BrasiliaClock";

const navLinks = [
  { href: "#portfolio-lista", label: "Projetos" },
  { href: "#servicos", label: "Sobre" },
  { href: "#portfolio", label: "Serviços" },
  { href: "#contato", label: "Instagram" },
];

const contactInfo = [
  { value: "email@hotmail.com" },
  { value: "(61) 98342-1615" },
  { value: "Brasília, DF" },
];

type FooterProps = {
  /** Prefixo das âncoras: "" na Home, "/" nas outras páginas */
  base?: string;
};

export default function Footer({ base = "" }: FooterProps) {
  return (
    <footer
      className="footer-texture"
      style={{ background: "var(--ink)", color: "var(--footer-text)" }}
    >
      <div
        className="page-section"
        style={{ maxWidth: 1280, margin: "0 auto", padding: "var(--footer-space) 40px 28px" }}
      >
        <div className="footer-grid">
          <div className="footer-media">
            <div className="footer-image reveal">
              <Image
                src="/imgs/home/hero.png"
                alt="Fachada de casa moderna projetada por Marcos Vinícius"
                fill
                sizes="(max-width: 900px) 100vw, 300px"
                style={{
                  objectFit: "cover",
                  objectPosition: "30% 50%",
                }}
              />
            </div>
            <Image
              src={logo}
              alt="Marcos Vinícius Arquitetura"
              style={{
                height: 50,
                width: "auto",
                marginTop: 24,
                alignSelf: "flex-start",
              }}
            />
          </div>

          <nav className="footer-nav">
            <div className="footer-eyebrow">(navegação)</div>
            <ul
              style={{
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: 4,
                marginTop: 20,
              }}
            >
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={`${base}${link.href}`}
                    className="footer-link footer-link--big btn-roll"
                  >
                    <RollText>{link.label}</RollText>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="footer-details">
            <div className="footer-eyebrow">(contato)</div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 6,
                marginTop: 16,
                fontSize: 20,
              }}
            >
              {contactInfo.map((item, i) => (
                <div key={i} className="text-white">
                  {item.value}
                </div>
              ))}
            </div>

            <div style={{ marginTop: 70 }}>
              <RollButton href={`${base}#contato`} className="pill--xl">
                entre em contato
              </RollButton>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="flex">
            <span>
              © {new Date().getFullYear()} Marcos Vinícius Arquitetura
            </span>
          </div>
          <div className="footer-bottom__end">
            <a
              href="#"
              className="footer-link btn-roll"
              style={{ color: "inherit" }}
            ></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
