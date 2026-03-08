"use client";

import { useReveal } from "./useReveal";


export function RevealProvider({ children }: { children: React.ReactNode }) {
  useReveal();
  return <>{children}</>;
}