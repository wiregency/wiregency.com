import type { Metadata } from "next";
import "./globals.css";
import Banner from "@/components/Banner";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Wiregency",
  description: "Développement & design d'applications web sur mesure.",
};

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} font-sans antialiased`}>
        <GoogleAnalytics />
        <Banner />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
