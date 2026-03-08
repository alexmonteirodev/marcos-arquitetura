export function BtnDark({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} className="btn-dark">
      {children}
    </a>
  );
}