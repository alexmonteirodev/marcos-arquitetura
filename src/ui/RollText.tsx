/** Texto que rola para cima no hover do elemento pai com a classe `btn-roll` */
export function RollText({ children }: { children: string }) {
  return (
    <span className="btn-roll__mask">
      <span className="btn-roll__text" data-text={children}>{children}</span>
    </span>
  );
}
