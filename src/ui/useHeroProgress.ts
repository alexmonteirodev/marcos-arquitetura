"use client";
import { useEffect, useRef } from "react";

/** Grava `--p` (0→1) no elemento enquanto o conteúdo seguinte sobe por cima do hero */
export function useHeroProgress<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const el = ref.current;
      if (!el) return;
      const progress = Math.min(1, Math.max(0, window.scrollY / window.innerHeight));
      el.style.setProperty("--p", progress.toFixed(4));
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

  return ref;
}
