import type { Metadata } from "next";
import { Fraunces, Albert_Sans } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  axes: ["opsz"],
});

const albertSans = Albert_Sans({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-albert",
});

export const metadata: Metadata = {
  title: "La vague d'espoir — 24 heures de nage pour la santé mentale",
  description:
    "La vague d'espoir : une nage d'endurance de 24 heures en eau libre pour sensibiliser la population aux maladies mentales et amasser des fonds pour la recherche et le soutien en santé mentale.",
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🌊</text></svg>",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${fraunces.variable} ${albertSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
