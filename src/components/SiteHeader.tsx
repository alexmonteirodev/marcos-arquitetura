import Image from "next/image";
import logo from "../../public/imgs/home/logo.svg";
import { RollButton } from "@/ui/RollButton";
import { RollText } from "@/ui/RollText";

const links = [
  { href: "#portfolio-lista", label: "Projetos" },
  { href: "#portfolio", label: "Serviços" },
  { href: "#portfolio", label: "galeria" },

  // { href: "#portfolio", label: "Processo" },
];

type SiteHeaderProps = {
  /** Prefixo das âncoras: "" na Home, "/" nas outras páginas (leva de volta às seções da Home) */
  base?: string;
};

export function SiteHeader({ base = "" }: SiteHeaderProps) {
  return (
    <header
      className="hero-header"
      style={{
        position: "relative",
        zIndex: 2,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        padding: "32px 40px",
        gap: 16,
        flexWrap: "wrap",
      }}
    >
      <a href={base || "#"} aria-label="Marcos Vinícius Arquitetura — início">
        <Image
          src={logo}
          alt="Marcos Vinícius Arquitetura"
          priority
          className="intro-fade"
          style={
            {
              height: 46,
              width: "auto",
              "--d": "0.2s",
            } as React.CSSProperties
          }
        />
      </a>
      <div className="flex flex-row items-center justify-center gap-12">
        <nav
          className="hero-nav"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 24,
            whiteSpace: "nowrap",
          }}
        >
          {links.map((link, i) => (
            <a
              key={link.label}
              href={`${base}${link.href}`}
              className="nav-link btn-roll intro-fade "
              style={{ "--d": `${0.3 + i * 0.08}s` } as React.CSSProperties}
            >
              <RollText>{link.label}</RollText>
            </a>
          ))}
        </nav>
        <span
          className="intro-fade"
          style={{ "--d": "0.55s" } as React.CSSProperties}
        >
          <RollButton href={`${base}#contato`} variant="dark">
            entre em contato
          </RollButton>
        </span>
      </div>
    </header>
  );
}
