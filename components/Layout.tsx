
import React, { ReactNode, useEffect, useRef } from 'react';

import Logo from './Logo';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const progressBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const scrollY = window.scrollY;
      // Calculate 0 to 1
      const progress = totalScroll > 0 ? scrollY / totalScroll : 0;

      if (progressBarRef.current) {
        // Use transform: scaleX for GPU-accelerated smooth animation without layout thrashing
        progressBarRef.current.style.transform = `scaleX(${progress})`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial call
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#030303] text-gray-200 font-sans selection:bg-white/10 selection:text-white relative overflow-x-hidden">

      <Logo />

      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-[1px] z-[1000] pointer-events-none">
        <div
          ref={progressBarRef}
          className="h-full bg-gradient-to-r from-cyan-500 via-indigo-500 to-orange-500 origin-left will-change-transform"
          style={{ transform: 'scaleX(0)' }}
        />
      </div>

      {/* Ambient Visuals */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[80vw] h-[80vw] bg-cyan-500/10 rounded-full blur-[160px] animate-blob will-change-transform" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-indigo-500/5 rounded-full blur-[140px] animate-blob will-change-transform" style={{ animationDelay: '2s' }} />
        <div className="absolute top-[40%] right-[10%] w-[40vw] h-[40vw] bg-purple-500/5 rounded-full blur-[120px] animate-blob will-change-transform" style={{ animationDelay: '4s' }} />
      </div>

      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default Layout;
