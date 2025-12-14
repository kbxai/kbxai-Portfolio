import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_ITEMS } from '../constants';
import { Menu, X, Terminal } from 'lucide-react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
    <nav className="fixed top-0 w-full z-50 pointer-events-none p-4 md:p-6 flex justify-center">
      <div className="container mx-auto flex justify-between items-center relative">
        {/* Logo */}
        <motion.a 
          href="#"
          className="pointer-events-auto flex items-center gap-2 group backdrop-blur-md bg-white/5 border border-white/10 px-4 py-2 rounded-full"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Terminal size={16} className="text-primary group-hover:rotate-12 transition-transform" />
          <span className="text-white font-mono font-bold text-sm tracking-tight">kbxai</span>
        </motion.a>

        {/* Desktop Menu - Floating Pill */}
        <motion.div 
          className={`hidden md:flex pointer-events-auto items-center gap-1 p-1.5 rounded-full border transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-xl border-white/10 shadow-2xl shadow-primary/5' : 'bg-transparent border-transparent'}`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="px-5 py-2 text-sm font-medium text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300"
            >
              {item.label}
            </a>
          ))}
          <a 
            href="#contact" 
            className="ml-2 px-5 py-2 text-sm font-bold bg-white text-black rounded-full hover:scale-105 transition-transform"
          >
            Let's Talk
          </a>
        </motion.div>

        {/* Mobile Menu Button */}
        <div className="md:hidden pointer-events-auto">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-white p-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-md active:scale-95 transition-transform"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
    </nav>

    {/* Mobile Menu Overlay */}
    <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="fixed inset-0 bg-dark/95 backdrop-blur-2xl z-40 flex flex-col items-center justify-center space-y-8 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
             {NAV_ITEMS.map((item, idx) => (
              <motion.a
                key={item.label}
                href={item.href}
                className="text-4xl font-display font-bold text-white/50 hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + idx * 0.05 }}
              >
                {item.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;