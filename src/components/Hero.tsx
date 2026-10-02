"use client";
import Image from "next/image";
import { SiteHeader } from "@/components/SiteHeader";
import { useHeroProgress } from "@/ui/useHeroProgress";

type HeroProps = {
  /** Ponto da foto que fica em foco, na horizontal: 0 = esquerda, 50 = centro, 100 = direita */
  focusX?: number;
  /** Ponto da foto que fica em foco, na vertical: 0 = topo, 50 = centro, 100 = base */
  focusY?: number;
  /** Zoom inicial (mínimo 1 — abaixo disso sobraria borda vazia) */
  zoom?: number;
  /** Zoom extra adicionado até o fim do scroll do hero (0 = desliga) */
  scrollZoom?: number;
  /** Quanto a imagem sobe durante o scroll, em vh (0 = desliga o parallax) */
  parallax?: number;
};

export default function Hero({
  focusX = 50,
  focusY = 50,
  zoom = 1,
  scrollZoom = 0.03,
  parallax = 25,
}: HeroProps) {
  // Enquadramento e origem do zoom no mesmo ponto: amplia sem nunca descolar da borda
  const focus = `${focusX}% ${focusY}%`;

  const wrapRef = useHeroProgress<HTMLElement>();

  return (
    <section
      ref={wrapRef}
      className="hero-wrap"
      style={
        {
          "--hero-zoom": Math.max(1, zoom),
          "--hero-focus": focus,
          "--hero-scroll-zoom": scrollZoom,
          "--hero-parallax": `${parallax}vh`,
        } as React.CSSProperties
      }
    >
      <div
        className="hero-sticky"
        style={{
          display: "flex",
          flexDirection: "column",
          color: "var(--white)",
        }}
      >
        <div className="hero-media">
          <Image
            src="/imgs/home/hero.png"
            alt="Fachada de casa moderna com piscina, jardim e pôr do sol"
            fill
            priority
            sizes="100vw"
            quality={90}
            style={{ objectFit: "cover", objectPosition: focus }}
          />
        </div>
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 1,
            background:
              "linear-gradient(180deg, oklch(15% 0.01 240 / 0.35) 0%, oklch(15% 0.01 240 / 0) 30%, oklch(15% 0.01 240 / 0) 55%, oklch(10% 0.01 240 / 0.6) 100%)",
          }}
        />
        <div className="hero-overlay" />

        <SiteHeader />

        <div
          className="hero-bottom"
          style={{
            position: "relative",
            zIndex: 2,
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            padding: "0 40px 40px",
            marginTop: "auto",
            gap: 24,
            flexWrap: "wrap",
          }}
        >
          <h1
            className="hero-title "
            style={{
              fontSize: "clamp(36px,6vw,72px)",
              fontWeight: 400,
              lineHeight: 1.15,
              letterSpacing: "-0.01em",
              maxWidth: 850,
            }}
          >
            <span className="intro-line text-4xl">
              <span style={{ "--d": "0.5s" } as React.CSSProperties}>
                Arquitetura pensada
              </span>
            </span>
            <span className="intro-line text-4xl">
              <span style={{ "--d": "0.62s" } as React.CSSProperties}>
                para sua forma de viver.
              </span>
            </span>
          </h1>
          <div
            className="intro-fade"
            style={
              {
                "--d": "0.9s",
                fontSize: 14,
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                opacity: 0.85,
              } as React.CSSProperties
            }
          >
            (Role para baixo)
          </div>
        </div>
      </div>
      <div className="hero-spacer" aria-hidden />
    </section>
  );
}
