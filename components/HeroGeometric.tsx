
import React, { useEffect, useRef } from 'react';

const HeroGeometric = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isVisibleRef = useRef(true);

  useEffect(() => {
    // Intersection Observer to pause animation when off-screen
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.isIntersecting;
      },
      { threshold: 0 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true }); // alpha: true is default, but explicit doesn't hurt
    if (!ctx) return;

    let width = canvas.width = canvas.offsetWidth;
    let height = canvas.height = canvas.offsetHeight;

    // Icosahedron Vertices (Golden Ratio)
    const t = (1 + Math.sqrt(5)) / 2;
    const vertices = [
      [-1,  t,  0], [ 1,  t,  0], [-1, -t,  0], [ 1, -t,  0],
      [ 0, -1,  t], [ 0,  1,  t], [ 0, -1, -t], [ 0,  1, -t],
      [ t,  0, -1], [ t,  0,  1], [-t,  0, -1], [-t,  0,  1]
    ];

    // Edges (Indices of connected vertices) - Standard Icosahedron connections
    const fullEdges = [
       [0, 11], [0, 5], [0, 1], [0, 7], [0, 10], [1, 5], [1, 9], [1, 8], [1, 7], 
       [2, 11], [2, 10], [2, 6], [2, 3], [2, 4], [3, 9], [3, 4], [3, 8], [3, 6], 
       [4, 9], [4, 5], [4, 11], [5, 11], [5, 9], [6, 10], [6, 7], [6, 8], 
       [7, 10], [7, 8], [8, 9], [10, 11]
    ];

    let angleX = 0;
    let angleY = 0;
    let animationFrameId: number;

    const loop = () => {
      if (!isVisibleRef.current) {
        // Skip rendering if not visible, but keep requesting frame to check flag
        // Alternatively, we could cancel/restart the loop in the observer, 
        // but this is simpler and low cost enough (just a boolean check).
        animationFrameId = requestAnimationFrame(loop);
        return;
      }

      if (!ctx || !canvas) return;
      
      // Clear canvas
      ctx.clearRect(0, 0, width, height);

      // Rotation Speed
      angleX += 0.003;
      angleY += 0.003;

      const scale = Math.min(width, height) * 0.25; 
      const cx = width / 2;
      const cy = height / 2;

      ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
      ctx.lineWidth = 1;
      ctx.lineCap = 'round';

      // 3D Projection
      // Pre-allocate or map. Map is fine here for 12 vertices.
      const projected = vertices.map(v => {
        const x = v[0];
        const y = v[1];
        const z = v[2];

        // Rotate Y
        const x1 = x * Math.cos(angleY) - z * Math.sin(angleY);
        const z1 = z * Math.cos(angleY) + x * Math.sin(angleY);
        
        // Rotate X
        const y1 = y * Math.cos(angleX) - z1 * Math.sin(angleX);
        const z2 = z1 * Math.cos(angleX) + y * Math.sin(angleX);

        // Perspective
        const perspective = 4;
        // z2 varies roughly between -2 and 2. 
        // dist varies. 
        const dist = perspective / (perspective - z2 / 4);

        return {
          x: cx + x1 * scale,
          y: cy + y1 * scale 
        };
      });

      // Draw Edges
      ctx.beginPath();
      for (let i = 0; i < fullEdges.length; i++) {
        const edge = fullEdges[i];
        const v1 = projected[edge[0]];
        const v2 = projected[edge[1]];
        ctx.moveTo(v1.x, v1.y);
        ctx.lineTo(v2.x, v2.y);
      }
      ctx.stroke();

      // Draw Vertices (Dots)
      ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
      for (let i = 0; i < projected.length; i++) {
        const p = projected[i];
        ctx.beginPath();
        ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(loop);
    };

    const handleResize = () => {
      if (canvas) {
        width = canvas.width = canvas.offsetWidth;
        height = canvas.height = canvas.offsetHeight;
      }
    };

    window.addEventListener('resize', handleResize);
    loop();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (containerRef.current) observer.unobserve(containerRef.current);
      observer.disconnect();
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute top-0 right-0 w-full md:w-1/2 h-full pointer-events-none opacity-60 z-0">
      <canvas ref={canvasRef} className="w-full h-full" />
      {/* Gradient fade to blend with background */}
      <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#0a0a0a] via-[#0a0a0a]/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent via-[#0a0a0a]/10" />
    </div>
  );
};

export default HeroGeometric;
