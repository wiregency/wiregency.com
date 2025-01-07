import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Banner from "@/components/Banner";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

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
        <Banner />
        {children}
      </body>
    </html>
  );
}
