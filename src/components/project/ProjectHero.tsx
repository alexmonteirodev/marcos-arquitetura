"use client";
import { Fragment } from "react";
import Image from "next/image";
import { SiteHeader } from "@/components/SiteHeader";
import { useHeroProgress } from "@/ui/useHeroProgress";

type ProjectHeroProps = {
  name: string;
  src?: string;
  alt: string;
  location: string;
  country: string;
};

export function ProjectHero({
  name,
  src,
  alt,
  location,
  country,
}: ProjectHeroProps) {
  const wrapRef = useHeroProgress<HTMLElement>();
  const words = name.split(" ");

  return (
    <section ref={wrapRef} className="hero-wrap">
      <div
        className="hero-sticky"
        style={{
          display: "flex",
          flexDirection: "column",
          color: "var(--white)",
        }}
      >
        <div className="hero-media" style={{ background: "var(--ink)" }}>
          {src && (
            <Image
              src={src}
              alt={alt}
              fill
              priority
              sizes="100vw"
              quality={90}
              style={{ objectFit: "cover" }}
            />
          )}
        </div>
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 1,
            background:
              "linear-gradient(180deg, oklch(15% 0.01 240 / 0.4) 0%, oklch(15% 0.01 240 / 0) 30%, oklch(15% 0.01 240 / 0) 50%, oklch(10% 0.01 240 / 0.65) 100%)",
          }}
        />
        <div className="hero-overlay" />

        <SiteHeader base="/" />

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
          <h1 className="project-title">
            {words.map((word, i) => (
              <Fragment key={i}>
                {i > 0 && " "}
                <span className="intro-line">
                  <span
                    style={{ "--d": `${0.5 + i * 0.12}s` } as React.CSSProperties}
                  >
                    {word}
                  </span>
                </span>
              </Fragment>
            ))}
          </h1>
          <div
            className="intro-fade"
            style={
              {
                "--d": "0.9s",
                display: "flex",
                flexDirection: "column",
                gap: 6,
                fontSize: 16,
                textAlign: "right",
              } as React.CSSProperties
            }
          >
            <span>{location}</span>
            <span>{country}</span>
            <span
              style={{
                marginTop: 16,
                fontSize: 14,
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                opacity: 0.85,
              }}
            >
              (Role para explorar)
            </span>
          </div>
        </div>
      </div>
      <div className="hero-spacer" aria-hidden />
    </section>
  );
}
