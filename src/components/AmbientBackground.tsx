"use client";
import { useEffect, useRef } from "react";

export default function AmbientBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);
    let id: number;

    const onResize = () => { w = canvas.width = window.innerWidth; h = canvas.height = window.innerHeight; };
    window.addEventListener("resize", onResize);

    let scrollY = 0;
    const onScroll = () => { scrollY = window.scrollY; };
    window.addEventListener("scroll", onScroll, { passive: true });

    let t = 0;

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      t += 0.0003;

      const positions = [
        { x: w * 0.15 + Math.sin(t * 0.5) * 100, y: h * 0.2 + Math.cos(t * 0.4) * 80 - scrollY * 0.15, r: 800, a: 0.035 },
        { x: w * 0.8 + Math.sin(t * 0.3) * 120, y: h * 0.5 + Math.cos(t * 0.6) * 100 - scrollY * 0.25, r: 700, a: 0.025 },
        { x: w * 0.5 + Math.sin(t * 0.7) * 80, y: h * 0.85 + Math.cos(t * 0.3) * 60 - scrollY * 0.1, r: 600, a: 0.02 },
      ];

      for (const p of positions) {
        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r);
        g.addColorStop(0, `rgba(34,211,238,${p.a})`);
        g.addColorStop(0.6, `rgba(34,211,238,${p.a * 0.2})`);
        g.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, w, h);
      }

      id = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(id);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <div 
        className="fixed inset-0 pointer-events-none" 
        style={{ 
          zIndex: 0,
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.012) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.012) 1px, transparent 1px)
          `,
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(circle at 50% 50%, black 30%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(circle at 50% 50%, black 30%, transparent 80%)"
        }}
      />
      <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none" style={{ zIndex: 0 }} />
    </>
  );
}
