import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  style: ["normal", "italic"],
  axes: ["SOFT", "WONK"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Appartamenti Vela Milano — Un'oasi verde nel cuore di Milano",
  description:
    "Tre appartamenti bilocali luminosi a Loreto / Piola, 400m dalla metro. Balconi, cucine complete, prodotti bio, garage privato. Host multilingue, check-in fino a mezzanotte.",
  openGraph: {
    title: "Appartamenti Vela Milano",
    description: "Un'oasi verde nel cuore di Milano — Loreto / Piola",
    images: ["/photos/esterno_1.jpg"],
    locale: "it_IT",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
