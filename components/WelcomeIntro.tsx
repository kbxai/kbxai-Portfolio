
import React, { useEffect, useState } from 'react';

interface WelcomeIntroProps {
  onComplete: () => void;
}

const WelcomeIntro: React.FC<WelcomeIntroProps> = ({ onComplete }) => {
  const [phase, setPhase] = useState<'idle' | 'scanning' | 'exit'>('idle');

  useEffect(() => {
    // Start scanning almost immediately
    const t1 = setTimeout(() => setPhase('scanning'), 100);
    // Start exit phase
    const t2 = setTimeout(() => setPhase('exit'), 1800);
    // Fully unmount
    const t3 = setTimeout(onComplete, 2400);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 z-[10000] bg-[#0a0a0a] flex flex-col items-center justify-center transition-opacity duration-700 ease-in-out ${phase === 'exit' ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
      
      {/* Background Grid Accent */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`, backgroundSize: '40px 40px' }} 
      />

      <div className="relative px-6 text-center">
        {/* Main Name Reveal */}
        <h1 className="text-white text-2xl md:text-4xl font-bold tracking-[0.4em] uppercase overflow-hidden">
          <span className={`inline-block transition-transform duration-1000 ease-out ${phase !== 'idle' ? 'translate-y-0' : 'translate-y-full'}`}>
            Kartik Bajaj
          </span>
        </h1>

        {/* Scanning Line */}
        <div className={`absolute -inset-x-12 top-1/2 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent transition-all duration-[1500ms] ease-in-out
          ${phase === 'scanning' ? 'translate-y-12 opacity-100' : phase === 'exit' ? 'translate-y-24 opacity-0' : '-translate-y-12 opacity-0'}
        `} />
      </div>

      {/* Subtext Status */}
      <div className="mt-8 flex flex-col items-center gap-2">
        <div className="text-[10px] font-mono text-gray-500 tracking-[0.3em] uppercase opacity-60">
          {phase === 'scanning' ? 'Initializing Environment' : phase === 'exit' ? 'System Ready' : 'Awaiting Data'}
        </div>
        <div className="w-48 h-[2px] bg-white/5 overflow-hidden rounded-full">
          <div className={`h-full bg-white/20 transition-all duration-[1800ms] ease-linear
            ${phase === 'scanning' ? 'w-full' : 'w-0'}
          `} />
        </div>
      </div>
    </div>
  );
};

export default WelcomeIntro;
