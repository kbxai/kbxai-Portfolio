
import React, { useState, useEffect } from 'react';
import { Home, Command, FolderCode, GraduationCap, Mail, BrainCircuit } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ['home', 'skills', 'expertise', 'projects', 'education'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 300 && rect.bottom >= 300) {
            setActiveSection(section);
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', icon: Home, label: 'Entry' },
    { id: 'skills', icon: BrainCircuit, label: 'Stack' },
    { id: 'expertise', icon: Command, label: 'Focus' },
    { id: 'projects', icon: FolderCode, label: 'Lab' },
    { id: 'education', icon: GraduationCap, label: 'Edu' },
  ];

  return (
    <nav className="fixed top-4 sm:top-10 left-1/2 -translate-x-1/2 z-[100] transition-all duration-700 w-[calc(100%-2rem)] sm:w-auto max-w-[95vw]">
      <div className={`flex items-center justify-center gap-1 sm:gap-2 p-1.5 sm:p-2 rounded-[1.5rem] sm:rounded-[2rem] border border-white/5 backdrop-blur-2xl transition-all duration-700 shadow-3xl ${
        scrolled ? 'bg-black/80 px-2 sm:px-5' : 'bg-white/5 px-2 sm:px-3'
      }`}>
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`group relative flex items-center gap-1 sm:gap-3 px-2.5 sm:px-4 py-2 sm:py-2.5 rounded-xl sm:rounded-[1.5rem] transition-all duration-500 ${
              activeSection === item.id ? 'bg-white/10 text-white shadow-lg shadow-white/5' : 'text-gray-500 hover:text-gray-300'
            }`}
          >
            <item.icon size={14} className={`transition-transform duration-500 ${activeSection === item.id ? 'scale-110' : ''}`} />
            <span className={`hidden sm:block text-[11px] font-bold uppercase tracking-[0.2em] transition-all duration-500 overflow-hidden ${
              activeSection === item.id ? 'max-w-[120px] opacity-100 ml-1' : 'max-w-0 opacity-0'
            }`}>
              {item.label}
            </span>
          </a>
        ))}
        <div className="hidden sm:block w-[1px] h-5 bg-white/10 mx-3" />
        <a 
          href="mailto:kartikbajaj.me@gmail.com"
          className="p-2 sm:p-3 text-gray-500 hover:text-white hover:scale-110 transition-all"
        >
          <Mail size={14} />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
