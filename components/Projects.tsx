import React from 'react';
import { motion } from 'framer-motion';
import { RESUME_DATA } from '../constants';
import { ArrowUpRight, Github, Folder } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-32 bg-dark relative z-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-mono text-sm tracking-wider uppercase mb-4 block">Selected Works</span>
            <h2 className="text-5xl md:text-6xl font-display font-bold text-white">
              Featured <br/> <span className="text-gray-700">Projects</span>
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-8 md:mt-0"
          >
             <p className="text-gray-400 max-w-sm text-sm">
                A selection of machine learning pipelines, full-stack applications, and AI agents built for performance.
             </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
          {RESUME_DATA.projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="group cursor-pointer"
            >
                <div className="relative p-8 md:p-10 rounded-3xl bg-[#080808] border border-white/5 hover:border-white/10 transition-colors duration-500 overflow-hidden h-full flex flex-col">
                    
                    {/* Hover Glow */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    <div className="flex justify-between items-start mb-12 relative z-10">
                        <div className="p-3 bg-white/5 rounded-2xl text-white group-hover:scale-110 transition-transform duration-500">
                             <Folder size={24} />
                        </div>
                        <div className="flex gap-2">
                             <a href={`https://${RESUME_DATA.contact.github}`} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full border border-white/10 hover:bg-white hover:text-black hover:border-white text-gray-400 transition-all duration-300">
                                <Github size={18} />
                             </a>
                             <div className="p-3 rounded-full border border-white/10 text-gray-400 group-hover:bg-primary group-hover:text-black group-hover:border-primary transition-all duration-300">
                                <ArrowUpRight size={18} />
                             </div>
                        </div>
                    </div>

                    <div className="relative z-10 mt-auto">
                        <div className="flex items-center gap-3 mb-4">
                             <span className="px-3 py-1 rounded-full text-xs font-medium border border-white/10 text-gray-400">
                                {project.type}
                             </span>
                        </div>
                        
                        <h3 className="text-3xl font-display font-bold text-white mb-4 group-hover:text-primary transition-colors">
                            {project.title}
                        </h3>
                        
                        <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
                            {project.description[0]}
                        </p>

                        <div className="flex flex-wrap gap-2">
                             {project.tech.map((t) => (
                                 <span key={t} className="text-xs font-mono text-gray-500">#{t}</span>
                             ))}
                        </div>
                    </div>
                </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;