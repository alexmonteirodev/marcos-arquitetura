"use client";
import { useEffect, useState } from "react";

// Horário de atendimento (mesmo da linha "H:" do footer)
const OPEN_DAYS = [1, 2, 3, 4, 5]; // seg–sex
const OPEN_HOUR = 9;
const CLOSE_HOUR = 18;

const timeFmt = new Intl.DateTimeFormat("pt-BR", {
  timeZone: "America/Sao_Paulo",
  hour: "2-digit",
  minute: "2-digit",
});
const partsFmt = new Intl.DateTimeFormat("en-US", {
  timeZone: "America/Sao_Paulo",
  weekday: "short",
  hour: "numeric",
  hourCycle: "h23",
});
const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function read(now: Date) {
  const parts = partsFmt.formatToParts(now);
  const day = WEEKDAYS.indexOf(parts.find((p) => p.type === "weekday")?.value ?? "");
  const hour = Number(parts.find((p) => p.type === "hour")?.value);
  return {
    time: timeFmt.format(now),
    open: OPEN_DAYS.includes(day) && hour >= OPEN_HOUR && hour < CLOSE_HOUR,
  };
}

export function BrasiliaClock() {
  // Só preenche depois de montar: evita divergência entre servidor e navegador
  const [state, setState] = useState<{ time: string; open: boolean } | null>(null);

  useEffect(() => {
    const tick = () => setState(read(new Date()));
    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, []);

  return (
    <span>
      {state ? state.time : "--:--"} em Brasília, estamos{" "}
      <span style={{ color: "var(--white)" }}>
        {state ? (state.open ? "abertos" : "fechados") : "…"}
      </span>
    </span>
  );
}
