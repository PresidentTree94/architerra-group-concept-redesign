"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const navs = [
  { text: "About", link: "" },
  { text: "Projects", link: "/projects" },
  { text: "Services", link: "" },
  { text: "Recognition", link: "" },
  { text: "Contact", link: "" }
];

export default function Navbar() {

  const pathname = usePathname();
  const [open, setOpen] = useState(false); 
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 64);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const isActive = scrolled || open;

  return (
    <header className={`fixed top-0 inset-x-0 z-1 ${isActive ? "bg-background-light border-b" : "bg-transparent"} border-border transition-all duration-300`}>
      <div className="flex flex-col md:flex-row justify-between md:items-center">
        <div className="h-16 flex justify-between items-center px-6">
          <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
            <i className={`ri-triangle-line text-4xl ${isActive ? "text-secondary" : "text-background-light"} transition-colors duration-300`}></i>
            <span className={`text-xs font-semibold uppercase tracking-widest ${isActive ? "text-foreground-dark" : "text-background-light"} transition-colors duration-300`}>Architerra Group</span>
          </Link>
          <i className={`ri-leaf-line text-xl ${isActive ? "text-secondary": "text-background-light"} ${open ? "rotate-120" : "-rotate-30"} md:hidden transition-all duration-300`} onClick={() => setOpen(!open)}></i>
        </div>
        <nav className={`${open ? "flex" : "hidden md:flex"} flex-col md:flex-row gap-8 px-6 py-6 md:py-0 text-sm font-medium border-t border-border md:border-t-0`}>
          {navs.map((n, index) => (
            <Link key={index} href={n.link ? n.link : "#"} className={`${pathname === n.link ? isActive ? "text-primary" : "text-background-light" : isActive ? "text-foreground-light hover:text-primary" : "text-background-light/85 hover:text-background-light"} ${!n.link && "line-through"} transition-colors duration-300`} onClick={() => setOpen(false)}>{n.text}</Link>
          ))}
        </nav>
      </div>
    </header>
  );
}