import type { Metadata } from "next";
import { Manrope, Sora } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackgroundGraphics from "@/components/BackgroundGraphics";

const bodyFont = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const headingFont = Sora({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Atharv Kumbhar | SQL & PL/SQL Expert | Power BI Developer",
  description: "Portfolio of Atharv Kumbhar, a detail-oriented professional specializing in SQL, PL/SQL, Power BI, and Power Apps.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bodyFont.variable} ${headingFont.variable}`}>
      <body>
        <BackgroundGraphics />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
