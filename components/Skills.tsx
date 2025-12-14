import React from 'react';
import { motion } from 'framer-motion';
import { RESUME_DATA } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-dark border-t border-white/5">
      <div className="container mx-auto px-6">
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-16"
        >
            <h2 className="text-sm font-mono text-primary tracking-widest uppercase mb-4">Tech Stack</h2>
            <p className="text-2xl md:text-3xl text-gray-400 max-w-3xl font-light">
                My technical toolkit allows me to build <span className="text-white">robust ML models</span> and scalable applications.
            </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {RESUME_DATA.skills.map((category, idx) => (
                <motion.div
                    key={category.category}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                >
                    <h3 className="text-lg font-bold text-white mb-6 border-l-2 border-primary pl-4">
                        {category.category}
                    </h3>
                    <div className="flex flex-col gap-3">
                        {category.skills.map((skill) => (
                            <div key={skill} className="text-gray-400 text-sm font-mono border-b border-white/5 pb-2 hover:text-white hover:pl-2 transition-all cursor-default">
                                {skill}
                            </div>
                        ))}
                    </div>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;