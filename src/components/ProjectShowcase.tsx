"use client";
import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PORTFOLIO_DATA } from "@/lib/data";

const ArrowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 17L17 7" /><path d="M7 7h10v10" />
  </svg>
);

const filters = [
  { label: "All", value: "all" },
  { label: "Machine Learning", value: "ml" },
  { label: "Full Stack", value: "fs" },
];

const bentoClass = [
  "md:col-span-3 md:row-span-2",
  "md:col-span-2",
  "md:col-span-2",
  "md:col-span-3 md:row-span-2",
  "md:col-span-5",
];

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

function ProjectCard({ project, index }: { project: (typeof PORTFOLIO_DATA.projects)[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const num = String(index + 1).padStart(2, "0");

  const onMouseMove = (e: React.MouseEvent) => {
    const el = cardRef.current;
    if (!el || window.innerWidth < 768) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    el.style.setProperty("--mx", `${x}px`);
    el.style.setProperty("--my", `${y}px`);

    const rx = ((y / rect.height) - 0.5) * -5; // tilt max 2.5deg
    const ry = ((x / rect.width) - 0.5) * 5;
    el.style.transform = `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-2px)`;
  };

  const onMouseLeave = () => {
    const el = cardRef.current;
    if (!el) return;
    el.style.transform = "";
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30, x: index % 2 === 0 ? -20 : 20 }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      exit={{ opacity: 0, scale: 0.97 }}
      viewport={{ once: false, amount: 0.15 }}
      transition={{ duration: 0.7, delay: index * 0.08, ease }}
      className={bentoClass[index] || "md:col-span-2"}
    >
      <div
        ref={cardRef}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        className="card spotlight h-full overflow-hidden group"
      >
        <div className="relative p-6 sm:p-8 h-full flex flex-col" style={{ zIndex: 2 }}>
          <div className="flex justify-between items-start mb-5">
            <span className="text-4xl sm:text-5xl font-bold select-none text-white/[0.03]">
              {num}
            </span>
            {project.metric && (
              <span className="text-[11px] font-mono font-semibold px-3 py-1.5 rounded-lg bg-[#22d3ee]/[0.06] border border-[#22d3ee]/15 text-[#22d3ee]/80">
                {project.metric}
              </span>
            )}
          </div>

          <h3 className="text-lg sm:text-xl font-semibold text-white/90 tracking-tight leading-snug mb-3">
            {project.title}
          </h3>

          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.tags.map((tag: string) => (
              <span key={tag} className="text-[11px] font-medium text-white/20 border border-white/[0.04] px-2.5 py-1 rounded-md">
                {tag}
              </span>
            ))}
          </div>

          <ul className="space-y-2 mb-6 flex-grow">
            {project.description.map((d: string, i: number) => (
              <li key={i} className="text-white/30 text-[13px] leading-relaxed flex items-start">
                <span className="mr-2 mt-[7px] w-1 h-1 rounded-full bg-[#22d3ee]/30 shrink-0" />
                {d}
              </li>
            ))}
          </ul>

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group/link inline-flex items-center gap-2 text-sm font-medium text-[#22d3ee]/50 hover:text-[#22d3ee] transition-colors duration-400 mt-auto pt-4 border-t border-white/[0.04]"
          >
            View Repository
            <span className="transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5">
              <ArrowIcon />
            </span>
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectShowcase() {
  const [filter, setFilter] = useState("all");

  const projects = filter === "all"
    ? PORTFOLIO_DATA.projects
    : PORTFOLIO_DATA.projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-24 sm:py-32">
      <div className="gradient-line mb-24 sm:mb-32" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, ease }}
          className="mb-14"
        >
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <div>
              <span className="text-[#22d3ee]/60 text-[11px] font-semibold tracking-[0.2em] uppercase">Portfolio</span>
              <h2 className="text-gradient mt-3" style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 700, letterSpacing: "-0.03em" }}>
                Selected Works
              </h2>
              <p className="text-white/20 mt-3 max-w-md text-sm">
                Deep learning models and backend systems built for scale.
              </p>
            </div>

            <div className="flex gap-0.5 p-1 rounded-lg glass shrink-0 self-start sm:self-auto">
              {filters.map((f) => (
                <button
                  key={f.value}
                  onClick={() => setFilter(f.value)}
                  className="relative px-4 py-2 text-xs font-semibold rounded-md transition-colors duration-300"
                  style={{ color: filter === f.value ? "#000" : "rgba(255,255,255,0.25)" }}
                >
                  {filter === f.value && (
                    <motion.div
                      layoutId="filter-pill"
                      className="absolute inset-0 rounded-md bg-[#22d3ee]"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{f.label}</span>
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        <AnimatePresence mode="popLayout">
          <motion.div layout className="grid grid-cols-1 md:grid-cols-5 gap-3 auto-rows-min">
            {projects.map((p, i) => (
              <ProjectCard key={p.title} project={p} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
