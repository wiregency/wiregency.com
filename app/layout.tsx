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
  description: "We design solutions tailored to your needs, from web applications to web design.",
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
    <html lang="en">
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
