"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import Logo from "@/components/Logo";

const links = [
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const lastY = useRef(0);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const fn = () => {
      const y = window.scrollY;
      setHidden(y > lastY.current && y > 100);
      setScrolled(y > 50);
      lastY.current = y;
      let cur = "";
      for (const l of links) {
        const el = document.getElementById(l.href.slice(1));
        if (el && el.getBoundingClientRect().top <= 200) cur = l.href.slice(1);
      }
      setActive(cur);
    };
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: hidden ? -100 : 0 }}
        transition={{ duration: 0.35 }}
        className="fixed top-0 z-40 w-full"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
          <div
            className="relative h-14 rounded-2xl flex items-center justify-between px-5 transition-all duration-500 overflow-hidden"
            style={{
              backdropFilter: "blur(32px)",
              WebkitBackdropFilter: "blur(32px)",
              border: "1px solid",
              borderColor: scrolled ? "rgba(34,211,238,0.06)" : "rgba(255,255,255,0.04)",
              background: scrolled ? "rgba(6,6,8,0.88)" : "rgba(6,6,8,0.5)",
            }}
          >
            <a href="#"><Logo size={22} /></a>

            <div className="hidden sm:flex gap-8 items-center">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="relative text-[13px] font-medium py-1 transition-colors duration-400"
                  style={{ color: active === l.href.slice(1) ? "#22d3ee" : "rgba(255,255,255,0.3)" }}
                >
                  {l.label}
                  {active === l.href.slice(1) && (
                    <motion.span
                      layoutId="nav-dot"
                      className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#22d3ee]"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </a>
              ))}
              <a href="mailto:kartikbajaj.me@gmail.com" className="btn-primary !py-2 !px-5 !text-xs">
                Let&apos;s Talk
              </a>
            </div>

            <button onClick={() => setOpen(!open)} className="sm:hidden p-2" aria-label="Menu">
              <div className="flex flex-col gap-1.5">
                <motion.span animate={{ rotate: open ? 45 : 0, y: open ? 6 : 0 }} className="block w-5 h-0.5 bg-white/60 rounded-full" transition={{ duration: 0.2 }} />
                <motion.span animate={{ opacity: open ? 0 : 1 }} className="block w-5 h-0.5 bg-white/60 rounded-full" transition={{ duration: 0.2 }} />
                <motion.span animate={{ rotate: open ? -45 : 0, y: open ? -6 : 0 }} className="block w-5 h-0.5 bg-white/60 rounded-full" transition={{ duration: 0.2 }} />
              </div>
            </button>

            {/* Glowing Scroll Progress Bar along bottom edge of navbar capsule */}
            <motion.div
              style={{ scaleX, originX: 0 }}
              className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#22d3ee]/60 to-transparent"
            />
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-30 flex flex-col items-center justify-center gap-10"
            style={{ background: "rgba(6,6,8,0.97)", backdropFilter: "blur(40px)" }}
          >
            <Logo size={32} />
            {links.map((l, i) => (
              <motion.a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: i * 0.06, duration: 0.3 }}
                className="text-3xl font-bold text-white/80"
              >
                {l.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
