
import React, { useEffect, useRef, useState } from 'react';

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const [cursorState, setCursorState] = useState<'default' | 'hover' | 'hidden'>('default');

  useEffect(() => {
    let mouseX = 0, mouseY = 0;
    let followerX = 0, followerY = 0;
    
    // Only used to init position
    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
      }
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Check for button, a, or input roles for hover state
      const isClickable = target.closest('a, button, [role="button"], input, textarea');
      setCursorState(isClickable ? 'hover' : 'default');
    };

    const onMouseLeave = () => setCursorState('hidden');
    const onMouseEnter = () => setCursorState('default');

    let animationFrameId: number;

    const animateFollower = () => {
      // Smooth lerp: 0.15 is the easing factor
      followerX += (mouseX - followerX) * 0.15;
      followerY += (mouseY - followerY) * 0.15;

      if (followerRef.current) {
        followerRef.current.style.transform = `translate3d(${followerX}px, ${followerY}px, 0) translate(-50%, -50%)`;
      }
      animationFrameId = requestAnimationFrame(animateFollower);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mouseover', onMouseOver, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);
    
    animateFollower();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <div 
        ref={cursorRef}
        className={`fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[10001] mix-blend-difference transition-opacity duration-300 will-change-transform ${cursorState === 'hidden' ? 'opacity-0' : 'opacity-100'}`}
      />
      <div 
        ref={followerRef}
        className={`fixed top-0 left-0 rounded-full border border-white/20 pointer-events-none z-[10000] transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] flex items-center justify-center will-change-transform
          ${cursorState === 'hover' ? 'w-14 h-14 bg-white/10 border-white/0' : 'w-10 h-10'}
          ${cursorState === 'hidden' ? 'opacity-0 scale-0' : 'opacity-100 scale-100'}
        `}
      >
        <div className={`absolute inset-0 rounded-full border border-white/5 transition-transform duration-700 ${cursorState === 'hover' ? 'scale-110 animate-soft-pulse' : 'scale-100'}`} />
      </div>
    </>
  );
};

export default CustomCursor;
