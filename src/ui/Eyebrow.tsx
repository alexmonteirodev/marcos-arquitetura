export function Eyebrow({ label, center = false }: { label: string; center?: boolean }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 20, justifyContent: center ? "center" : "flex-start" }}>
      <div style={{ width: 32, height: 1, background: "var(--gold)", flexShrink: 0 }} />
      <span style={{ fontFamily: "var(--sans)", fontSize: 11, letterSpacing: 3, textTransform: "uppercase", color: "var(--gold)" }}>
        {label}
      </span>
    </div>
  );
}