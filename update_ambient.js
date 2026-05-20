const fs = require('fs');
const code = `"use client";
import { useEffect, useRef } from 'react';

export default function AmbientBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let w = canvas.width = window.innerWidth;
    let h = canvas.height = window.innerHeight;

    window.addEventListener('resize', () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    });

    let time = 0;

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      time += 0.002;

      // Soft ambient gradients representing deep space / premium focus
      const cx1 = w * 0.5 + Math.sin(time) * 300;
      const cy1 = h * 0.3 + Math.cos(time) * 200;
      
      const cx2 = w * 0.2 + Math.sin(time * 0.8) * 400;
      const cy2 = h * 0.7 + Math.cos(time * 1.2) * 300;

      const grad1 = ctx.createRadialGradient(cx1, cy1, 0, cx1, cy1, 800);
      grad1.addColorStop(0, 'rgba(255, 255, 255, 0.03)');
      grad1.addColorStop(1, 'rgba(0, 0, 0, 0)');

      const grad2 = ctx.createRadialGradient(cx2, cy2, 0, cx2, cy2, 1000);
      grad2.addColorStop(0, 'rgba(150, 150, 150, 0.02)');
      grad2.addColorStop(1, 'rgba(0, 0, 0, 0)');

      ctx.fillStyle = grad1;
      ctx.fillRect(0, 0, w, h);
      
      ctx.fillStyle = grad2;
      ctx.fillRect(0, 0, w, h);

      requestAnimationFrame(draw);
    };

    draw();

  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 pointer-events-none z-[-2]"
    />
  );
}
`;

fs.writeFileSync('src/components/AmbientBackground.tsx', code);
console.log('Ambient updated');
