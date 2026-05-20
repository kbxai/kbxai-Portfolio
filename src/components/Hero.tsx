"use client";
import { useState, useEffect, useRef } from "react";
import React from "react";
import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/lib/data";

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.16c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 9 18v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);
const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" />
  </svg>
);
const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

function MaskedReveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <div style={{ overflow: "hidden", paddingBottom: "0.25em", marginBottom: "-0.25em" }}>
      <motion.div
        initial={{ y: "110%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.div>
    </div>
  );
}

function CountUp({ target, decimals = 0, suffix = "" }: { target: number; decimals?: number; suffix?: string }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const t0 = performance.now();
        const animate = (now: number) => {
          const p = Math.min((now - t0) / 2000, 1);
          const ease = 1 - Math.pow(1 - p, 4);
          setVal(parseFloat((ease * target).toFixed(decimals)));
          if (p < 1) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
      }
    });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, decimals]);

  return <span ref={ref}>{val.toFixed(decimals)}{suffix}</span>;
}

function HeroVisual() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!ref.current) return;
      const rx = (e.clientY / window.innerHeight - 0.5) * -15;
      const ry = (e.clientX / window.innerWidth - 0.5) * 15;
      ref.current.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg)`;
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  const nodes = [
    // Input layer (left)
    { id: "i1", top: "25%", left: "15%", s: 4, o: 0.35, delay: 0.8 },
    { id: "i2", top: "50%", left: "15%", s: 4, o: 0.35, delay: 0.9 },
    { id: "i3", top: "75%", left: "15%", s: 4, o: 0.35, delay: 1.0 },
    // Hidden layer (middle)
    { id: "h1", top: "15%", left: "48%", s: 5.5, o: 0.6, delay: 1.0, glow: true },
    { id: "h2", top: "38%", left: "48%", s: 5.5, o: 0.6, delay: 1.1, glow: true },
    { id: "h3", top: "62%", left: "48%", s: 5.5, o: 0.6, delay: 1.2, glow: true },
    { id: "h4", top: "85%", left: "48%", s: 5.5, o: 0.6, delay: 1.3, glow: true },
    // Output layer (right)
    { id: "o1", top: "50%", left: "80%", s: 8, o: 0.9, delay: 1.4, glow: true },
  ];

  const connections = [
    // Input to Hidden
    { x1: "15%", y1: "25%", x2: "48%", y2: "15%", delay: 1.1 },
    { x1: "15%", y1: "25%", x2: "48%", y2: "38%", delay: 1.15 },
    { x1: "15%", y1: "25%", x2: "48%", y2: "62%", delay: 1.2 },
    { x1: "15%", y1: "50%", x2: "48%", y2: "15%", delay: 1.2 },
    { x1: "15%", y1: "50%", x2: "48%", y2: "38%", delay: 1.25 },
    { x1: "15%", y1: "50%", x2: "48%", y2: "62%", delay: 1.3 },
    { x1: "15%", y1: "50%", x2: "48%", y2: "85%", delay: 1.35 },
    { x1: "15%", y1: "75%", x2: "48%", y2: "38%", delay: 1.3 },
    { x1: "15%", y1: "75%", x2: "48%", y2: "62%", delay: 1.35 },
    { x1: "15%", y1: "75%", x2: "48%", y2: "85%", delay: 1.4 },
    // Hidden to Output
    { x1: "48%", y1: "15%", x2: "80%", y2: "50%", delay: 1.4 },
    { x1: "48%", y1: "38%", x2: "80%", y2: "50%", delay: 1.45 },
    { x1: "48%", y1: "62%", x2: "80%", y2: "50%", delay: 1.5 },
    { x1: "48%", y1: "85%", x2: "80%", y2: "50%", delay: 1.55 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, delay: 0.4 }}
      className="relative w-64 h-64 lg:w-[350px] lg:h-[350px]"
      style={{ perspective: "800px" }}
    >
      <div
        ref={ref}
        className="w-full h-full relative"
        style={{ transformStyle: "preserve-3d", transition: "transform 0.12s ease-out" }}
      >
        {/* Tilted blueprint base grid */}
        <div 
          className="absolute inset-4 rounded-full pointer-events-none opacity-20"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(34,211,238,0.15) 1px, transparent 1px)",
            backgroundSize: "20px 20px",
            transform: "rotateX(72deg) translateZ(-30px)",
            maskImage: "radial-gradient(circle at 50% 50%, black, transparent 75%)",
            WebkitMaskImage: "radial-gradient(circle at 50% 50%, black, transparent 75%)",
          }}
        />

        {/* Tilted outer transformer loops */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 0.08 }}
          transition={{ duration: 1.5, delay: 0.6 }}
          className="absolute rounded-full border border-[#22d3ee] inset-2"
          style={{ transform: "rotateX(70deg) rotateZ(-30deg)" }}
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 0.04 }}
          transition={{ duration: 1.5, delay: 0.8 }}
          className="absolute rounded-full border border-white inset-12"
          style={{ transform: "rotateX(65deg) rotateZ(45deg)" }}
        />

        {/* Neural connection weights (Synapses) & Fiber Data Pulses */}
        <svg className="absolute inset-0 w-full h-full" style={{ overflow: "visible" }}>
          {connections.map((c, i) => (
            <React.Fragment key={i}>
              {/* Static Background Weight Line */}
              <motion.line
                x1={c.x1} y1={c.y1} x2={c.x2} y2={c.y2}
                stroke="rgba(255,255,255,0.03)"
                strokeWidth="0.75"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.2, delay: c.delay, ease }}
              />
              {/* Pulsing Data Channel Overlay */}
              <motion.line
                x1={c.x1} y1={c.y1} x2={c.x2} y2={c.y2}
                stroke="rgba(34,211,238,0.28)"
                strokeWidth="0.85"
                className="pulse-line"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.2, delay: c.delay + 0.15, ease }}
              />
            </React.Fragment>
          ))}
        </svg>

        {/* Output Node Breathing Aura */}
        <motion.div
          className="absolute rounded-full bg-[#22d3ee]/10 pointer-events-none"
          animate={{ scale: [1, 1.35, 1], opacity: [0.18, 0.05, 0.18] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          style={{
            top: "50%",
            left: "80%",
            width: 44,
            height: 44,
            x: "-50%",
            y: "-50%",
            filter: "blur(4px)",
          }}
        />

        {/* Neural Layer Nodes */}
        {nodes.map((n, i) => (
          <motion.div
            key={n.id}
            initial={{ opacity: 0, scale: 0, x: "-50%", y: "-50%" }}
            animate={{ opacity: n.o, scale: 1, x: "-50%", y: "-50%" }}
            transition={{ duration: 0.6, delay: n.delay, type: "spring", stiffness: 200 }}
            className="absolute rounded-full flex items-center justify-center"
            style={{
              top: n.top,
              left: n.left,
              width: n.s * 3,
              height: n.s * 3,
              background: n.glow ? "#22d3ee" : "#ffffff",
              boxShadow: n.glow ? "0 0 16px rgba(34,211,238,0.6), 0 0 32px rgba(34,211,238,0.2)" : "0 0 8px rgba(255,255,255,0.2)",
            }}
          />
        ))}

        {/* Subtle layer tag labels */}
        <div className="absolute left-[15%] top-[14%] -translate-x-1/2 text-[8px] font-mono tracking-widest text-white/10 uppercase select-none">Input</div>
        <div className="absolute left-[48%] top-[6%] -translate-x-1/2 text-[8px] font-mono tracking-widest text-white/10 uppercase select-none">Layers</div>
        <div className="absolute left-[80%] top-[40%] -translate-x-1/2 text-[8px] font-mono tracking-widest text-[#22d3ee]/25 uppercase select-none">Output</div>
      </div>
    </motion.div>
  );
}

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

export default function Hero() {
  const p = PORTFOLIO_DATA.personal;

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-24 pb-16">
      <div className="max-w-6xl mx-auto w-full">

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2.5 mb-10 justify-center lg:justify-start"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#22d3ee]" style={{ boxShadow: "0 0 10px rgba(34,211,238,0.8)" }} />
          <span className="text-[10px] font-semibold tracking-[0.25em] uppercase text-[#22d3ee]/80">
            {p.tagline}
          </span>
          <span className="text-white/10 mx-1">•</span>
          <span className="text-[10px] font-semibold tracking-[0.25em] uppercase text-white/30">
            Available for Internships
          </span>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12 lg:gap-8">
          <div className="flex-1 text-center lg:text-left">
            <h1>
              <MaskedReveal delay={0.2}>
                <span
                  className="block text-gradient"
                  style={{ fontSize: "clamp(3rem, 8vw, 7rem)", fontWeight: 800, letterSpacing: "-0.05em", lineHeight: 1.15 }}
                >
                  {p.name.split(" ")[0]}
                </span>
              </MaskedReveal>
              <MaskedReveal delay={0.35}>
                <span
                  className="block"
                  style={{ fontSize: "clamp(3rem, 8vw, 7rem)", fontWeight: 800, letterSpacing: "-0.05em", lineHeight: 1.15, color: "#22d3ee" }}
                >
                  {p.name.split(" ")[1]}
                </span>
              </MaskedReveal>
            </h1>

            <motion.p
              initial={{ opacity: 0, filter: "blur(8px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 1, delay: 0.8 }}
              className="mt-8 text-white/35 max-w-lg leading-relaxed mx-auto lg:mx-0"
              style={{ fontSize: "clamp(0.95rem, 2vw, 1.1rem)" }}
            >
              Building <span className="text-white/60">end-to-end AI systems</span> and{" "}
              <span className="text-white/60">production full-stack apps</span>. Data Science undergrad at{" "}
              <span className="text-[#22d3ee]/80">IIT Madras</span>.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1, ease }}
              className="flex flex-wrap gap-3 mt-8 justify-center lg:justify-start"
            >
              <a href="/AI Full Stack Resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-primary">
                View Resume
              </a>
              <a href="#projects" className="btn-ghost">
                Explore Work →
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3 }}
              className="flex items-center gap-3 mt-8 justify-center lg:justify-start"
            >
              {[
                { icon: <GithubIcon />, href: `https://${p.github}`, label: "GitHub" },
                { icon: <LinkedInIcon />, href: `https://${p.linkedin}`, label: "LinkedIn" },
                { icon: <MailIcon />, href: `mailto:${p.email}`, label: "Email" },
              ].map((s, i) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target={s.label !== "Email" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.35 + i * 0.08, ease }}
                  className="p-2.5 rounded-lg border border-white/[0.05] text-white/20 transition-all duration-400 hover:text-[#22d3ee] hover:border-[#22d3ee]/20 hover:bg-[#22d3ee]/[0.04]"
                >
                  {s.icon}
                </motion.a>
              ))}
            </motion.div>
          </div>

          <div className="hidden lg:flex items-center justify-center">
            <HeroVisual />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.5, ease }}
          className="mt-20 flex items-center justify-center lg:justify-start"
        >
          <div className="flex items-center divide-x divide-white/[0.06]">
            {[
              { val: 5, dec: 0, suf: "+", label: "Projects" },
              { val: 0.954, dec: 3, suf: "", label: "Kaggle F1" },
              { val: 8.23, dec: 2, suf: "", label: "CGPA" },
              { val: null, text: "IIT", label: "Madras" },
            ].map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6 + i * 0.1, duration: 0.5, ease }}
                className="px-6 sm:px-8 first:pl-0 last:pr-0 text-center"
              >
                <div className="text-2xl sm:text-3xl font-bold text-white font-mono-num tracking-tight">
                  {s.val !== null ? <CountUp target={s.val} decimals={s.dec} suffix={s.suf} /> : s.text}
                </div>
                <div className="text-[10px] text-white/15 font-medium mt-1 tracking-[0.1em]">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#060608] to-transparent pointer-events-none" />
    </section>
  );
}
