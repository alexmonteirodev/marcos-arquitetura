import type { Metadata } from "next";
import { Hanken_Grotesk } from "next/font/google";
import "./globals.css";

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-hanken",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Marcos Vinícius Arquitetura",
  description: "Projetos de arquitetura, interiores e acompanhamento de obra em Brasília, DF.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={hanken.variable}>
      <body>{children}</body>
    </html>
  );
}
