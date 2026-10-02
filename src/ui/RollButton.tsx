import { RollText } from "./RollText";

type RollButtonProps = {
  href: string;
  variant?: "light" | "dark";
  children: string;
  className?: string;
};

export function RollButton({
  href,
  variant = "light",
  children,
  className = "",
}: RollButtonProps) {
  return (
    <a
      href={href}
      className={`${variant === "light" ? "pill" : "pill-dark"} btn-roll ${className}`}
    >
      <RollText>{children}</RollText>
      <span className="btn-dot" aria-hidden />
    </a>
  );
}
