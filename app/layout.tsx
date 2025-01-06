import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import PromotionalBanner from "@/components/Banner";

// Pour une police plus moderne, je suggère d'utiliser Inter
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

// Si vous voulez garder Geist Mono pour le code
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Wiregency",
  description: "Développement & design d'applications web sur mesure.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${inter.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <PromotionalBanner />
        {children}
      </body>
    </html>
  );
}
