"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const navs = [
  { text: "About", link: "/about" },
  { text: "Projects", link: "/projects" },
  { text: "Services", link: "/services" },
  { text: "Recognition", link: "/recognition" },
  { text: "Contact", link: "/contact" }
];

export default function Navbar() {

  const pathname = usePathname();
  const [open, setOpen] = useState(false); 
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    if (pathname !== "/" || open) {
      setScrolled(true);
      return;
    }
    setScrolled(false);
    const handleScroll = () => setScrolled(window.scrollY > 64);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const isActive = scrolled || open;

  return (
    <header className={`fixed top-0 inset-x-0 z-1 ${isActive ? "bg-background-light border-b" : "bg-transparent"} border-[oklch(.94_.006_80)] transition-all duration-300`}>
      <div className="flex justify-between items-center">
        <div className="h-16 flex justify-between items-center px-6">
          <Link href="/">
            {/*Logo*/}
            <span className={`text-xs font-semibold uppercase tracking-widest ${isActive ? "text-foreground-dark" : "text-background-light"}`}>Architerra Group</span>
          </Link>
          {/*Mobile menu button*/}
        </div>
        <nav className="flex gap-8 px-6 text-sm font-medium">
          {navs.map((n, index) => (
            <Link key={index} href={n.link} className={`${isActive ? "text-foreground-light" : "text-background-light/85"}`}>{n.text}</Link>
          ))}
        </nav>
      </div>
    </header>
  );
}