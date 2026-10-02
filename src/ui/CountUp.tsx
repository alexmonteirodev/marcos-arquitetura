"use client";
import { useEffect, useRef, useState } from "react";

type CountUpProps = {
  value: string; // ex.: "+155"
  duration?: number;
};

const easeOut = (t: number) => 1 - Math.pow(1 - t, 4);

export function CountUp({ value, duration = 1800 }: CountUpProps) {
  const [, prefix = "", digits = "0", suffix = ""] = value.match(/^(\D*)(\d+)(.*)$/) ?? [];
  const target = Number(digits);
  const ref = useRef<HTMLSpanElement>(null);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCurrent(target);
      return;
    }
    let raf = 0;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / duration);
          setCurrent(Math.round(easeOut(t) * target));
          if (t < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.5 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [target, duration]);

  return (
    <span ref={ref} aria-label={value} style={{ fontVariantNumeric: "tabular-nums" }}>
      {prefix}
      {current}
      {suffix}
    </span>
  );
}
