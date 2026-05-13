import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RM Gesso – Forro & Drywall em Piracicaba",
  description: "Especialistas em forro drywall, PVC, vinílico, painel ripado, steel frame e gesso liso. Piracicaba–SP.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,400&family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}>{children}</body>
    </html>
  );
}
