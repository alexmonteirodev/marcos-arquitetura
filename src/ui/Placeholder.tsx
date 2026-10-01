import type { CSSProperties } from "react";

// Bloco listrado do design para fotos ainda não fornecidas — trocar por <Image> quando houver a foto.
export function Placeholder({ label, style }: { label: string; style?: CSSProperties }) {
  return (
    <div className="placeholder" style={style}>
      {label}
    </div>
  );
}
