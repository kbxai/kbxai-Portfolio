const fs = require('fs');
const pageCode = `import React from 'react';
import AmbientBackground from '@/components/AmbientBackground';
import Hero from '@/components/Hero';
import SkillsTrack from '@/components/SkillsTrack';
import ProjectShowcase from '@/components/ProjectShowcase';

export default function Home() {
  return (
    <>
      <AmbientBackground />
      
      {/* Navbar Minimal */}
      <nav className="fixed top-0 z-50 w-full glass border-b-0 border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <span className="text-2xl font-bold tracking-tight text-white glow neon-text-cyan cursor-pointer">KB.</span>
            <div className="flex gap-6">
              <a href="#about" className="text-sm font-medium text-gray-300 hover:text-cyan-400 transition-colors">About</a>
              <a href="#projects" className="text-sm font-medium text-gray-300 hover:text-cyan-400 transition-colors">Projects</a>
            </div>
          </div>
        </div>
      </nav>

      <main className="relative z-10 flex flex-col gap-12 overflow-hidden">
        <Hero />
        <SkillsTrack />
        <ProjectShowcase />
      </main>

      {/* Footer Minimal */}
      <footer className="relative z-10 border-t border-white/10 mt-24 py-12 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-4 tracking-tight">Let's build something <span className="neon-text-cyan text-cyan-400">intelligent.</span></h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Currently open to AI Full Stack Engineer / Backend Internships. Reach out to discuss opportunities.
          </p>
          <a href="mailto:kartikbajaj.me@gmail.com" className="inline-block px-8 py-3 rounded-full bg-white text-black font-bold hover:scale-105 transition-transform">
            Get In Touch
          </a>
          <p className="mt-12 text-sm text-gray-600 font-mono">
            © {new Date().getFullYear()} Kartik Bajaj. Crafted with code and antigravity.
          </p>
        </div>
      </footer>
    </>
  );
}`;

fs.writeFileSync('src/app/page.tsx', pageCode);
console.log('page written');