"use client";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { projects, ProjectType } from "@/data/projectData";

export default function Hero() {
  const [featuredProjects, setFeaturedProjects] = useState<ProjectType[]>([]);
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const shuffled = [...projects].sort(() => Math.random() - 0.5);
    setFeaturedProjects(shuffled.slice(0, 4));
  }, []);

  const goToSlide = useCallback((index: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent(index);
    setTimeout(() => setIsAnimating(false), 600);
  }, [isAnimating]);

  const next = useCallback(() => {
    setCurrent((c) => (featuredProjects.length ? (c + 1) % featuredProjects.length : 0));
  }, [featuredProjects.length]);

  const prev = useCallback(() => {
    goToSlide((current - 1 + featuredProjects.length) % featuredProjects.length);
  }, [current, featuredProjects.length, goToSlide]);

  useEffect(() => {
    if (featuredProjects.length === 0) return;
    const timer = setInterval(next, 5500);
    return () => clearInterval(timer);
  }, [next, featuredProjects.length]);

  if (featuredProjects.length === 0) return;

  return (
    <section className="relative min-h-svh flex justify-center items-end">
      {featuredProjects.map((p, index) => (
        <Image key={index} src={`/${p.title.toLowerCase().replace(/ /g, "-")}.png`} alt={p.title} fill sizes="100%" className={`object-cover transition-opacity duration-700 ${index === current ? "opacity-100" : "opacity-0"}`} />
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/15 to-black/50"></div>
      <div className="relative p-8 text-background-light text-center">
        <span className="tiny text-background-light/80">{featuredProjects[current].type}</span>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light mt-3 mb-12">{featuredProjects[current].title}</h1>
        <Link href="/projects" className="tiny inline-block border border-background-light/70 px-8 py-3 hover:bg-background-light hover:text-foreground-dark transition-colors duration-300">View Projects</Link>
        <div className="flex justify-center gap-3 mt-14">
          {featuredProjects.map((_, index) => (
            <button key={index} className={`h-2 ${index === current ? "bg-background-light w-6" : "bg-background-light/40 w-2" } rounded-full cursor-pointer transition-all duration-300`} onClick={() => goToSlide(index)}></button>
          ))}
        </div>
      </div>
      <button onClick={prev} className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 border border-background-light/40 text-background-light w-10 md:w-12 h-10 md:h-12 flex items-center justify-center transition-all hover:border-background-light hover:bg-background-light/10 cursor-pointer">
        <i className="ri-arrow-left-s-line text-lg"></i>
      </button>
      <button onClick={next} className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 border border-background-light/40 text-background-light w-10 md:w-12 h-10 md:h-12 flex items-center justify-center transition-all hover:border-background-light hover:bg-background-light/10 cursor-pointer">
        <i className="ri-arrow-right-s-line text-lg"></i>
      </button>
    </section>
  );
}