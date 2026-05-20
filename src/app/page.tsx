"use client";
import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AmbientBackground from "@/components/AmbientBackground";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MarqueeSkills from "@/components/MarqueeSkills";
import SkillsTrack from "@/components/SkillsTrack";
import ProjectShowcase from "@/components/ProjectShowcase";
import Logo from "@/components/Logo";

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

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];
const exitEase = [0.76, 0, 0.24, 1] as [number, number, number, number];

function IntroScreen({ onDone }: { onDone: () => void }) {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const t = [
      setTimeout(() => setPhase(1), 200),
      setTimeout(() => setPhase(2), 1100),
      setTimeout(() => setPhase(3), 1700),
      setTimeout(() => setPhase(4), 2300),
      setTimeout(() => setPhase(5), 2600),
      setTimeout(() => {
        document.body.style.overflow = "";
        onDone();
      }, 3200),
    ];
    return () => { t.forEach(clearTimeout); document.body.style.overflow = ""; };
  }, [onDone]);

  const logoSize = "clamp(3rem, 8vw, 5rem)";

  return (
    <motion.div
      className="fixed inset-0 z-[60] flex items-center justify-center"
      style={{ background: "#060608" }}
      exit={{ y: "-100%" }}
      transition={{ duration: 0.6, ease: exitEase }}
    >
      <div
        className="absolute w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(34,211,238,0.04) 0%, transparent 60%)",
          opacity: phase >= 1 ? 1 : 0,
          transition: "opacity 1s",
        }}
      />

      <div className="relative flex flex-col items-center">
        <motion.div
          animate={phase >= 4 ? { scale: 1.08, opacity: 0, filter: "blur(6px)" } : {}}
          transition={{ duration: 0.5, ease }}
          className="flex flex-col items-center gap-6"
        >
          <div className="flex items-baseline overflow-hidden" style={{ fontSize: logoSize, fontWeight: 900, letterSpacing: "-0.02em", lineHeight: 1 }}>
            <motion.span
              initial={{ y: "120%" }}
              animate={phase >= 1 ? { y: 0 } : {}}
              transition={{ duration: 0.7, ease }}
              className="inline-block text-white"
            >
              KB
            </motion.span>
            <motion.span
              initial={{ opacity: 0, scale: 0 }}
              animate={phase >= 1 ? { opacity: 0.85, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2, ease }}
              className="inline-block text-white"
            >
              x
            </motion.span>
            <motion.span
              initial={{ y: "120%" }}
              animate={phase >= 1 ? { y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15, ease }}
              className="inline-block text-[#22d3ee]"
            >
              AI
            </motion.span>
          </div>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={phase >= 2 ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, ease }}
            className="w-12 h-px"
            style={{ background: "linear-gradient(90deg, transparent, rgba(34,211,238,0.3), transparent)", transformOrigin: "center" }}
          />

          <motion.p
            initial={{ opacity: 0, y: 6 }}
            animate={phase >= 2 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15, ease }}
            className="text-white/12 text-[11px] tracking-[0.35em] uppercase font-medium"
          >
            AI / Full-Stack Engineer
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={phase >= 3 ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, ease }}
            className="text-white/8 text-[10px] tracking-[0.2em] uppercase mt-2"
          >
            Welcome to my portfolio
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={phase >= 3 ? { scaleX: 1 } : {}}
          transition={{ duration: 1.2, ease }}
          className="absolute -bottom-16 w-32 h-px"
          style={{ background: "linear-gradient(90deg, transparent, rgba(34,211,238,0.15), transparent)", transformOrigin: "center" }}
        />
      </div>
    </motion.div>
  );
}

function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const fn = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 z-40 w-10 h-10 rounded-lg glass flex items-center justify-center text-white/30 hover:text-[#22d3ee] hover:border-[#22d3ee]/20 transition-colors duration-300"
          aria-label="Back to top"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m18 15-6-6-6 6" />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
}

const socials = [
  { icon: <GithubIcon />, href: "https://github.com/kbxai", label: "GitHub" },
  { icon: <LinkedInIcon />, href: "https://linkedin.com/in/kbxai", label: "LinkedIn" },
  { icon: <MailIcon />, href: "mailto:kartikbajaj.me@gmail.com", label: "Email" },
];

export default function Home() {
  const [introDone, setIntroDone] = useState(false);
  const handleDone = useCallback(() => setIntroDone(true), []);

  return (
    <>
      <AnimatePresence mode="wait">
        {!introDone && <IntroScreen key="intro" onDone={handleDone} />}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: introDone ? 1 : 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
      >
        <AmbientBackground />
        <Navbar />

        <main className="relative z-10 flex flex-col">
          <Hero />
          <MarqueeSkills />
          <SkillsTrack />
          <ProjectShowcase />
        </main>

        <footer id="contact" className="relative z-10 py-24 sm:py-36">
          <div className="gradient-line" />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 sm:mt-36">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease }}
              className="text-center"
            >
              <span className="text-[#22d3ee]/40 text-[11px] font-semibold tracking-[0.2em] uppercase">Contact</span>

              <h2 className="mt-8 font-bold tracking-tight" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.1 }}>
                <span className="text-gradient">Open to</span>
                <br />
                <span style={{ color: "#22d3ee" }}>opportunities</span>
              </h2>

              <p className="text-white/20 mt-6 max-w-md mx-auto text-sm leading-relaxed">
                Seeking a developer or engineer role? Let&apos;s talk about API backend architecture, training pipelines, or databases.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a href="mailto:kartikbajaj.me@gmail.com" className="btn-primary">
                  kartikbajaj.me@gmail.com
                </a>
                <a href="/AI Full Stack Resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-ghost">
                  Download Resume
                </a>
              </div>

              <div className="flex items-center justify-center gap-3 mt-8">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target={s.label !== "Email" ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="p-2.5 rounded-lg border border-white/[0.04] text-white/15 transition-all duration-400 hover:text-[#22d3ee] hover:border-[#22d3ee]/15"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </motion.div>

            <div className="mt-28 pt-6 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <Logo size={18} />
                <span className="text-[10px] text-white/10 font-mono tracking-wider">© {new Date().getFullYear()}</span>
              </div>
              <p className="text-[10px] text-white/10 tracking-wider uppercase">AI / Full-Stack Systems</p>
            </div>
          </div>
        </footer>

        <BackToTop />
      </motion.div>
    </>
  );
}
