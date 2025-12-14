import React from 'react';
import { motion } from 'framer-motion';
import { RESUME_DATA } from '../constants';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import Scene3D from './Scene3D';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden px-6 pt-20 bg-dark selection:bg-primary/30">
      {/* 3D Scene Layer */}
      <Scene3D />

      <div className="absolute inset-0 bg-grid-white pointer-events-none z-0" />
      
      {/* Vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-transparent to-dark pointer-events-none z-0" />

      <div className="container mx-auto z-10 max-w-6xl relative pointer-events-auto mt-10 md:mt-0">
        
        {/* Status Line */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-3 mb-8"
        >
          <div className="h-px w-8 bg-white/20"></div>
          <span className="text-primary font-mono text-xs tracking-widest uppercase">
            Available for Internships
          </span>
        </motion.div>

        {/* Main Heading */}
        <div className="mb-8">
            <div className="overflow-hidden">
                <motion.h1
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="text-6xl sm:text-8xl md:text-9xl font-display font-bold leading-none tracking-tight text-white mix-blend-difference"
                >
                KARTIK
                </motion.h1>
            </div>
            <div className="overflow-hidden">
                <motion.h1
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="text-6xl sm:text-8xl md:text-9xl font-display font-bold leading-none tracking-tight text-gray-600"
                >
                BAJAJ
                </motion.h1>
            </div>
        </div>

        {/* Subtitle & Description */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
            <motion.div 
                className="md:col-span-7"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
            >
                <p className="text-xl md:text-2xl text-gray-400 leading-relaxed font-light">
                    Transforming raw data into <span className="text-white font-medium">intelligent decisions</span>. 
                    Specializing in <span className="text-primary">Machine Learning</span> pipelines, 
                    AI Agents, and scalable system architecture.
                </p>
                
                <div className="flex flex-wrap gap-4 mt-8">
                    <a 
                        href="#projects" 
                        className="group relative px-8 py-4 bg-white text-black font-bold rounded-full overflow-hidden"
                    >
                        <span className="relative z-10 flex items-center gap-2 group-hover:gap-4 transition-all">
                            View Work <ArrowRight size={18} />
                        </span>
                        <div className="absolute inset-0 bg-primary transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-out z-0" />
                    </a>

                    <a 
                        href={RESUME_DATA.contact.resume}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-4 border border-white/20 text-white font-medium rounded-full hover:bg-white/5 transition-colors flex items-center gap-2"
                    >
                        Resume <Download size={18} />
                    </a>
                </div>
            </motion.div>

            {/* Socials minimal */}
            <motion.div 
                className="md:col-span-5 flex md:justify-end gap-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
            >
                <a href={`https://${RESUME_DATA.contact.github}`} className="text-gray-500 hover:text-white transition-colors"><Github size={24} /></a>
                <a href={`https://${RESUME_DATA.contact.linkedin}`} className="text-gray-500 hover:text-white transition-colors"><Linkedin size={24} /></a>
                <a href={`mailto:${RESUME_DATA.contact.email}`} className="text-gray-500 hover:text-white transition-colors"><Mail size={24} /></a>
            </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-12 left-6 md:left-1/2 md:-translate-x-1/2 flex flex-col items-center gap-2 text-white/30"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-px h-12 bg-gradient-to-b from-transparent via-white/30 to-transparent"></div>
      </motion.div>
    </section>
  );
};

export default Hero;