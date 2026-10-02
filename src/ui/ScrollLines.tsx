"use client";
import { useEffect, useRef } from "react";

type ScrollLinesProps = {
  /** Cada item vira um parágrafo */
  paragraphs: string[];
  className?: string;
  /** Opacidade das linhas ainda não reveladas */
  dim?: number;
};

/**
 * Texto que acende linha por linha acompanhando o scroll (vai e volta).
 * As linhas são medidas no navegador, então seguem a quebra real em qualquer largura.
 */
export function ScrollLines({ paragraphs, className, dim = 0.15 }: ScrollLinesProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const words = [...root.querySelectorAll<HTMLSpanElement>("[data-word]")];
    let lines: HTMLSpanElement[][] = [];

    // Agrupa as palavras pela posição vertical = linhas visuais
    const measure = () => {
      lines = [];
      let lastTop: number | null = null;
      for (const w of words) {
        const top = w.offsetTop;
        if (lastTop === null || Math.abs(top - lastTop) > 2) lines.push([]);
        lines[lines.length - 1].push(w);
        lastTop = top;
      }
    };

    let raf = 0;
    const update = () => {
      raf = 0;
      const r = root.getBoundingClientRect();
      const vh = window.innerHeight;
      // 0 quando o topo do texto entra a 85% da tela, 1 quando a base chega a 50%
      const start = vh * 0.85;
      const end = vh * 0.5;
      const progress = Math.min(1, Math.max(0, (start - r.top) / (start - end + r.height)));
      const n = lines.length;
      lines.forEach((line, i) => {
        const p = Math.min(1, Math.max(0, progress * n - i));
        const opacity = (dim + (1 - dim) * p).toFixed(3);
        for (const w of line) w.style.opacity = opacity;
      });
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    const onResize = () => {
      measure();
      onScroll();
    };

    measure();
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    // Fonte carregada depois muda a quebra de linha
    document.fonts?.ready.then(onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [dim]);

  return (
    <div ref={ref} className={className} style={{ display: "flex", flexDirection: "column", gap: "1.65em" }}>
      {paragraphs.map((text, pi) => (
        <p key={pi}>
          {text.split(" ").map((word, wi) => (
            <span key={wi} data-word style={{ transition: "opacity 0.25s linear" }}>
              {word}{" "}
            </span>
          ))}
        </p>
      ))}
    </div>
  );
}
