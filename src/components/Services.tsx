"use client";
import { useEffect, useRef, useState } from "react";
import { Placeholder } from "@/ui/Placeholder";

const services = [
  { name: "Projeto de Arquitetura", image: "foto · fachada, projeto arquitetônico" },
  { name: "Projeto de Interiores", image: "foto · ambiente interno decorado" },
  { name: "Acompanhamento de obra", image: "foto · obra em andamento" },
  { name: "Fachada e volumetria", image: "render · volumetria e fachada" },
  { name: "Consultoria", image: "foto · reunião de consultoria" },
];

export default function Services() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const track = trackRef.current;
      if (!track) return;
      const rect = track.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      const progress = total > 0 ? Math.min(1, Math.max(0, -rect.top / total)) : 0;
      setActiveIndex(Math.min(services.length - 1, Math.floor(progress * services.length)));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section id="portfolio" className="page-section" style={{ position: "relative", maxWidth: 1280, margin: "0 auto", padding: "60px 32px" }}>
      <div ref={trackRef} style={{ position: "relative", height: `calc(100vh * ${services.length})` }}>
        <div className="services-sticky" style={{ position: "sticky", top: 0, height: "100vh", display: "flex", alignItems: "center", gap: 56 }}>
          <div style={{ flex: 1, minWidth: 260, display: "flex", flexDirection: "column", gap: 16 }}>
            <h2 className="section-title">serviços</h2>
            <p className="body-text" style={{ lineHeight: 1.6, maxWidth: 460, margin: "8px 0 24px" }}>
              Cada projeto pede uma abordagem diferente. Por isso, reunimos diferentes serviços para acompanhar cada etapa, da ideia à realização.
            </p>
            {services.map((service, i) => {
              const active = i === activeIndex;
              return (
                <div key={service.name} style={{ padding: "4px 0" }}>
                  <div style={{ fontSize: "clamp(20px,2.4vw,28px)", fontWeight: 600, letterSpacing: "-0.01em", transition: "color 0.3s ease, opacity 0.3s ease", color: active ? "var(--ink)" : "var(--inactive)", opacity: active ? 1 : 0.7 }}>
                    {service.name}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="services-image" style={{ width: 460, maxWidth: "46%", height: 520, maxHeight: "70vh", borderRadius: 6, overflow: "hidden", flexShrink: 0 }}>
            <Placeholder label={services[activeIndex].image} style={{ width: "100%", height: "100%", fontSize: 11 }} />
          </div>
        </div>
      </div>
    </section>
  );
}
