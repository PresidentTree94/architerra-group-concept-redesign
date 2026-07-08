import type { Metadata } from "next";
import { Montserrat, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import "remixicon/fonts/remixicon.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant-garamond",
  subsets: ["latin"],
  style: ["normal", "italic"]
});

export const metadata: Metadata = {
  title: "Architerra Group Concept Redesign",
  description: "A concept redesign for the Architerra Group website, not affiliated or commissioned by Architerra Group.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${cormorantGaramond.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <footer className="bg-foreground-dark px-8 py-4">
          <div className="text-foreground-light text-xs flex flex-col sm:flex-row justify-between text-center">
            <p>&copy; 2026 Architerra Group Concept Redesign</p>
            <p>Made by <a href="https://karlydev.vercel.app/" className="underline">karly.dev</a></p>
          </div>
        </footer>
      </body>
    </html>
  );
}
