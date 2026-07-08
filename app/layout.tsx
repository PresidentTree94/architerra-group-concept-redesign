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

const socials = [
  { icon: "ri-facebook-fill", link: "https://www.facebook.com/ArchiterraGroup/" },
  { icon: "ri-instagram-line", link: "https://www.instagram.com/architerragroup/" },
  { icon: "ri-linkedin-fill", link: "https://www.linkedin.com/company/the-architerra-group-inc./" }
];

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
        <footer className="bg-foreground-dark">
          <div className="grid grid-cols-1 md:grid-cols-[auto_auto_auto] gap-12 p-8 md:p-16">
            <div>
              <h2 className="text-3xl !text-background-light">Architerra Group</h2>
              <p className="text-foreground-inverse text-sm max-w-xs mt-6 mb-8">A landscape architecture and planning firm committed to enhancing communities through thoughtful design of public spaces.</p>
              <div className="text-foreground-inverse flex gap-4">
                {socials.map((s, index) => (
                  <a key={index} href={s.link} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-foreground-light hover:border-background-light flex items-center justify-center group transition-colors duration-200">
                    <i className={`${s.icon} text-sm group-hover:text-background-light transition-colors duration-200`}></i>
                  </a>
                ))}
              </div>
            </div>
            <div className="space-y-4 md:justify-self-center">
              <h4 className="tiny text-background-light">Our Office</h4>
              <address className="not-italic text-sm text-foreground-inverse">5881 S Deframe Street<br/>Littleton, CO 80127</address>
              <h4 className="tiny text-background-light">Phone</h4>
              <a href="tel:3039480766" className="text-sm text-foreground-inverse hover:text-secondary transition-colors duration-200">303-948-0766</a>
            </div>
            <div className="md:justify-self-end">
              <h4 className="tiny text-background-light mb-4">Disclaimer</h4>
              <p className="text-foreground-inverse text-sm max-w-sm">This is an independent redesign concept created for portfolio purposes. I am not affiliated with Architerra Group. Website content and photographs belong to the company.</p>
            </div>
          </div>
          <div className="text-foreground-light text-xs flex flex-col sm:flex-row justify-between text-center border-t border-foreground-light/30 px-8 md:px-16 py-4">
            <p>&copy; 2026 Architerra Group Concept Redesign</p>
            <p>Made by <a href="https://karlydev.vercel.app/" target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground-inverse transition-colors duration-200">karly.dev</a></p>
          </div>
        </footer>
      </body>
    </html>
  );
}
