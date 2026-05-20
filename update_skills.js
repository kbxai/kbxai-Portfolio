const fs = require('fs');

const skillsCode = `"use client";
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA, SKILLS_MATRIX } from '@/lib/data';

export default function SkillsTrack() {
  return (
    <section id="skills" className="py-32 relative border-t border-white/5 bg-black/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="text-4xl font-bold tracking-tight mb-8">Technical Arsenal</h2>
              <p className="text-gray-400 text-lg mb-12 font-light leading-relaxed">
                Core competencies spanning high-performance machine learning research and scalable full-stack web architecture.
              </p>
              
              <div className="space-y-12">
                {PORTFOLIO_DATA.education.map((edu, i) => (
                  <div key={i} className="relative pl-6 border-l border-white/10">
                    <div className="absolute w-3 h-3 bg-white rounded-full -left-[6.5px] top-2" />
                    <h4 className="text-white font-semibold text-lg">{edu.degree}</h4>
                    <p className="text-white/60 mt-1">{edu.institution}</p>
                    <div className="flex items-center gap-4 mt-3 text-sm font-mono text-white/40">
                      <span>{edu.year}</span>
                      <span>â€¢</span>
                      <span className="text-white">{edu.grade}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid sm:grid-cols-2 gap-4">
              {SKILLS_MATRIX.map((group, idx) => (
                <motion.div
                  key={group.category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="glass-panel p-8 flex flex-col justify-center"
                >
                  <h4 className="text-xl font-bold text-white mb-6 uppercase tracking-wider text-sm">{group.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map(skill => (
                      <span key={skill} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-md text-sm text-gray-300">
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
`;

fs.writeFileSync('src/components/SkillsTrack.tsx', skillsCode);
console.log('Skiils updated');
