"use client";
import { useEffect } from "react";
import Lenis from "lenis";

// Navegação pelo voltar/avançar do navegador: deixa o Next restaurar a posição anterior
let fromHistory = false;
// Primeira carga (ou F5): deixa o navegador decidir a posição
let firstMount = true;
if (typeof window !== "undefined") {
  window.addEventListener("popstate", () => {
    fromHistory = true;
  });
}

export function SmoothScroll() {
  useEffect(() => {
    // Página nova aberta por link: sempre começa no topo (o Lenis guardaria a posição anterior)
    const resetToTop = !firstMount && !fromHistory && !window.location.hash;
    firstMount = false;
    fromHistory = false;
    if (resetToTop) window.scrollTo(0, 0);

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const lenis = new Lenis({ lerp: 0.1, anchors: true });
    if (resetToTop) lenis.scrollTo(0, { immediate: true, force: true });
    let raf = requestAnimationFrame(function loop(time) {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    });
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, []);

  return null;
}
