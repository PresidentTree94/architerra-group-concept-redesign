"use client";
import { useState } from "react";
import Image from "next/image";
import { projects } from "@/data/projectData";

const filters = ["All", ...Array.from(new Set(projects.map(p => p.type))).sort((a: string, b: string) => a.localeCompare(b))];

export default function Projects() {

  const [activeCategory, setActiveCategory] = useState("All");
  const filtered = activeCategory === "All" ? projects : projects.filter((p) => p.type === activeCategory);

  return (
    <main className="bg-background-light">
      <section className="relative h-[40svh] min-h-[320px] flex">
        <Image src="/trails-and-crossings.png" alt="Trails and Crossings" fill sizes="100%" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60"></div>
        <div className="relative flex flex-col justify-center items-center flex-1">
          <span className="tiny text-background-light/70">Our Work</span>
          <h1 className="mt-4 text-5xl sm:text-6xl md:text-7xl text-background-light">Projects</h1>
        </div>
      </section>
      <section className="py-10 border-b border-border">
        <div className="flex flex-wrap justify-center gap-3">
          {filters.map((f, index) => (
            <button key={index} className={`tiny px-5 py-2 rounded-full ${f === activeCategory ? "bg-primary text-background-light" : "bg-background-dark text-foreground-light"} cursor-pointer`} onClick={() => setActiveCategory(f)}>{f}</button>
          ))}
        </div>
      </section>
      <section className="py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.sort((a, b) => a.title.localeCompare(b.title)).map((p, index) => (
            <div key={index} className="relative h-80 rounded-lg overflow-hidden flex items-end group">
              <Image src={`/${p.title.toLowerCase().replace(/ /g, "-")}.png`} alt={p.title} fill sizes="100%" className="object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>
              <div className="relative p-6">
                <span className="tiny text-background-light/60 block">{p.type}</span>
                <h3 className="text-background-light text-xl font-light my-1">{p.title}</h3>
                <p className="text-xs text-background-light/60 flex items-center gap-1"><i className="ri-map-pin-line text-xs"></i>{p.location}, CO</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}