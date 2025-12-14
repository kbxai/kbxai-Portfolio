import React from 'react';
import { motion } from 'framer-motion';
import { RESUME_DATA } from '../constants';

const Timeline: React.FC = () => {
  return (
    <section id="education" className="py-32 bg-dark">
        <div className="container mx-auto px-6 max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                
                {/* Education Column */}
                <div>
                    <motion.h2 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-3xl font-display font-bold text-white mb-12 flex items-center gap-4"
                    >
                        Education <span className="h-px flex-1 bg-white/10"></span>
                    </motion.h2>

                    <div className="space-y-12">
                        {RESUME_DATA.education.map((edu, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="group"
                            >
                                <span className="text-primary font-mono text-xs mb-2 block">{edu.duration}</span>
                                <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{edu.institution}</h3>
                                <p className="text-gray-400 mt-1">{edu.degree}</p>
                                <p className="text-gray-500 text-sm mt-2 font-mono">{edu.grade}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Achievements Column */}
                <div>
                    <motion.h2 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-3xl font-display font-bold text-white mb-12 flex items-center gap-4"
                    >
                         Achievements <span className="h-px flex-1 bg-white/10"></span>
                    </motion.h2>

                    <div className="space-y-6">
                        {RESUME_DATA.achievements.map((ach, idx) => (
                            <motion.div
                                key={ach.id}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="p-6 border border-white/5 rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] transition-colors"
                            >
                                <div className="flex items-start gap-4">
                                    <span className="text-primary font-mono text-sm mt-1">0{idx + 1}</span>
                                    <p className="text-gray-300 leading-relaxed">{ach.text}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Timeline;