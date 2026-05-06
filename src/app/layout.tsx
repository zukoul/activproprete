import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Activ'propreté — Nettoyage professionnel à Yamoussoukro",
  description:
    "Activ'propreté, entreprise de nettoyage à Yamoussoukro (Côte d'Ivoire). Bureaux, hôtels, cliniques, résidences, écoles, banques, chantiers. Devis gratuit.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-slate-900">
        {children}
      </body>
    </html>
  );
}
