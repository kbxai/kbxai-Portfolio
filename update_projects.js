const fs = require('fs');

const pt = `"use client";
import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '@/lib/data';

const GithubSvg = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.16c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 9 18v4"></path>
  </svg>
);

const ProjectCard = ({ project, index }: { project: any, index: number }) => {
  const isLarge = index === 0 || index === 3;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className={\`glass-panel overflow-hidden group flex flex-col \${isLarge ? 'md:col-span-2' : 'md:col-span-1'}\`}
    >
      <div className="p-8 md:p-10 flex-grow flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-start mb-6">
            <h3 className="text-3xl font-bold text-white tracking-tight">{project.title}</h3>
            {project.metric && (
              <span className="text-xs font-mono px-3 py-1 rounded-full border border-white/20 text-gray-300 bg-white/5">
                {project.metric}
              </span>
            )}
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map((tag: string) => (
              <span key={tag} className="text-xs font-medium text-gray-400 bg-black/40 border border-white/5 px-3 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>

          <ul className="space-y-4 mb-8">
            {project.description.map((desc: string, i: number) => (
              <li key={i} className="text-gray-400 text-sm md:text-base leading-relaxed flex items-start">
                <span className="mr-3 text-gray-600 mt-1">â€”</span>
                {desc}
              </li>
            ))}
          </ul>
        </div>

        <div className="pt-6 mt-auto flex items-center justify-between border-t border-white/5">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-gray-300 transition-colors"
          >
            <GithubSvg />
            View Repository
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default function ProjectShowcase() {
  return (
    <section id="projects" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-5xl font-bold tracking-tight mb-6">Selected Works</h2>
          <p className="text-gray-400 max-w-2xl text-xl font-light">Deep learning models and robust backend architectures built for scale and impact.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PORTFOLIO_DATA.projects.map((project, idx) => (
            <ProjectCard key={project.title} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
`;

fs.writeFileSync('src/components/ProjectShowcase.tsx', pt);
console.log('Projects UI updated');
