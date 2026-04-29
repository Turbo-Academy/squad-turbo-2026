import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["500", "700", "800", "900"]
});

const serifItalic = Instrument_Serif({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-serif-italic",
  weight: "400",
  style: "italic"
});

export const metadata: Metadata = {
  title: "Marina Costa · Manifesto da mãe que para de seguir produtividade de homem sem filho",
  description:
    "Pomodoro foi feito por homens sem filhos. Mãe de filho pequeno tem 25 minutos seguidos. No máximo. Manifesto · 7 opiniões · 11.05.",
  robots: { index: true, follow: true }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${serifItalic.variable}`}>
      <body>{children}</body>
    </html>
  );
}
