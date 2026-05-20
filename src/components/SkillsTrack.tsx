"use client";
import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { PORTFOLIO_DATA, SKILLS_MATRIX } from "@/lib/data";

const icons: Record<string, React.ReactNode> = {
  "AI / ML & LLMs": (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 4.5a2.5 2.5 0 0 0-4.96-.46 2.5 2.5 0 0 0-1.98 3 2.5 2.5 0 0 0 1.32 4.24 3 3 0 0 0 .34 5.58 2.5 2.5 0 0 0 2.96 3.08A2.5 2.5 0 0 0 12 19.5a2.5 2.5 0 0 0 2.32.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0 1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 12 4.5" />
    </svg>
  ),
  "Data & Backend": (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="8" x="2" y="2" rx="2" /><rect width="20" height="8" x="2" y="14" rx="2" />
      <line x1="6" x2="6.01" y1="6" y2="6" /><line x1="6" x2="6.01" y1="18" y2="18" />
    </svg>
  ),
  "Programming & Databases": (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  "Frontend & Tools": (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect width="18" height="18" x="3" y="3" rx="2" /><path d="M3 9h18" /><path d="M9 21V9" />
    </svg>
  ),
};

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

export default function SkillsTrack() {
  const timelineRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 65%", "end 65%"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
    restDelta: 0.001
  });

  return (
    <section id="skills" className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, ease }}
          className="mb-16"
        >
          <span className="text-[#22d3ee]/60 text-[11px] font-semibold tracking-[0.2em] uppercase">Foundation</span>
          <h2 className="text-gradient mt-3" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", fontWeight: 700, letterSpacing: "-0.03em" }}>
            Technical Arsenal
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-14 lg:gap-20">
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.6, ease }}
            >
              <h3 className="text-white/60 font-semibold text-xs uppercase tracking-[0.15em] mb-8">Education</h3>
              
              <div ref={timelineRef} className="relative">
                <div className="absolute left-0 top-1.5 bottom-1.5 w-px bg-white/[0.06]" />
                <motion.div
                  style={{ scaleY, originY: 0 }}
                  className="absolute left-0 top-1.5 bottom-1.5 w-px bg-[#22d3ee]/40"
                />

                {PORTFOLIO_DATA.education.map((edu, i) => (
                  <div key={i} className="relative pl-6 pb-8 last:pb-0">
                    <div className="absolute w-2 h-2 rounded-full -left-[3.5px] top-1.5 bg-[#060608] border border-white/20 transition-colors duration-500" />
                    
                    <motion.div
                      initial={{ opacity: 0, x: -8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: false, amount: 0.15 }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                    >
                      <h4 className="text-white/80 font-semibold text-sm">{edu.degree}</h4>
                      <p className="text-white/25 mt-1 text-xs">{edu.institution}</p>
                      <div className="flex items-center gap-2 mt-2 text-[11px] font-mono text-white/15">
                        <span>{edu.year}</span>
                        <span className="w-0.5 h-0.5 rounded-full bg-white/15" />
                        <span className="text-[#22d3ee]/50">{edu.grade}</span>
                      </div>
                    </motion.div>
                  </div>
                ))}
              </div>

              <div className="mt-10 space-y-3">
                {PORTFOLIO_DATA.values.map((v) => (
                  <div key={v.title} className="card p-4">
                    <h4 className="text-white/70 text-xs font-semibold tracking-wide">{v.title}</h4>
                    <p className="text-white/20 text-[11px] leading-relaxed mt-1">{v.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-8">
            <div className="grid sm:grid-cols-2 gap-3">
              {SKILLS_MATRIX.map((group, idx) => (
                <motion.div
                  key={group.category}
                  initial={{ opacity: 0, x: 30, scale: 0.95 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  viewport={{ once: false, amount: 0.15 }}
                  transition={{ duration: 0.6, delay: idx * 0.12, ease }}
                  className="card p-6 group"
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div className="p-2 rounded-lg bg-[#22d3ee]/[0.05] text-[#22d3ee]/40 transition-all duration-400 group-hover:text-[#22d3ee]/80 group-hover:bg-[#22d3ee]/[0.08]">
                      {icons[group.category]}
                    </div>
                    <h4 className="text-[11px] font-semibold uppercase tracking-[0.12em] text-white/25">{group.category}</h4>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 rounded-lg text-xs font-medium text-white/30 border border-white/[0.04] transition-all duration-400 cursor-default hover:text-[#22d3ee]/70 hover:border-[#22d3ee]/15"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
