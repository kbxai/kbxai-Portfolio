const fs = require('fs');

const heroTsx = `"use client";
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '@/lib/data';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
      
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-gray-300 text-xs font-semibold tracking-widest uppercase"
      >
        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
        Available for Internships
      </motion.div>

      <motion.h1 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="text-6xl sm:text-8xl lg:text-9xl font-extrabold tracking-tighter mb-6 text-gradient"
      >
        {PORTFOLIO_DATA.personal.name.split(' ')[0]}<br />
        {PORTFOLIO_DATA.personal.name.split(' ')[1]}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="text-xl sm:text-2xl text-gray-400 max-w-2xl mb-12 leading-relaxed"
      >
        I build <strong className="text-white font-medium">end-to-end AI systems</strong> and <strong className="text-white font-medium">production full-stack applications</strong>.
      </motion.p>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-wrap gap-4 justify-center"
      >
        <a 
          href="/resume.pdf" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="group relative px-8 py-4 bg-white text-black font-semibold rounded-full overflow-hidden transition-all hover:scale-105"
        >
          <span className="relative z-10">View Resume</span>
        </a>
        <a 
          href="#projects"
          className="px-8 py-4 glass text-white font-medium rounded-full transition-all hover:bg-white/10"
        >
          Explore Work
        </a>
      </motion.div>

      {/* Subtle bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
    </section>
  );
}
`;

fs.writeFileSync('src/components/Hero.tsx', heroTsx);
console.log('Hero updated');
