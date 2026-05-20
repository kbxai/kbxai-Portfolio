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
      
      {/* Premium Minimal Navbar */}
      <nav className="fixed top-4 z-50 w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="glass backdrop-blur-xl h-14 rounded-full flex items-center justify-between px-6 border border-white/10 shadow-2xl">
            <span className="text-xl font-bold tracking-tight text-white cursor-pointer">KB.</span>
            <div className="flex gap-6 items-center">
              <a href="#skills" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Core</a>
              <a href="#projects" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Selected Work</a>
              <a href="mailto:kartikbajaj.me@gmail.com" className="hidden sm:inline-flex px-4 py-1.5 rounded-full bg-white text-black text-xs font-semibold hover:bg-gray-200 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      <main className="relative z-10 flex flex-col pt-16">
        <Hero />
        <SkillsTrack />
        <ProjectShowcase />
      </main>

      {/* Footer Minimal */}
      <footer className="relative z-10 border-t border-white/5 py-24 text-center bg-black/40">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-white mb-6 tracking-tight">Ready to build something impactful?</h2>
          <p className="text-gray-400 mb-10 max-w-xl mx-auto font-light text-lg">
            Currently open to AI Full Stack Engineering internships. Feel free to reach out to discuss intelligent systems, backends, or machine learning pipelines.
          </p>
          <a href="mailto:kartikbajaj.me@gmail.com" className="inline-block px-8 py-4 rounded-full bg-white text-black font-bold hover:scale-105 transition-transform tracking-wide">
            Get In Touch
          </a>
          <p className="mt-24 text-xs text-gray-600 font-mono tracking-widest uppercase">
            © {new Date().getFullYear()} Kartik Bajaj. Engineered for the future.
          </p>
        </div>
      </footer>
    </>
  );
}
`;

fs.writeFileSync('src/app/page.tsx', pageCode);
console.log('Page updated');
