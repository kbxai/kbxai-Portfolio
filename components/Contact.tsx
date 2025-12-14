import React from 'react';
import { motion } from 'framer-motion';
import { RESUME_DATA, SOCIAL_LINKS } from '../constants';
import { ArrowUpRight, Copy } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 bg-black relative overflow-hidden">
      {/* Footer Gradient */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl"
        >
            <p className="text-primary font-mono mb-8">Let's work together</p>
            <h2 className="text-5xl md:text-8xl font-display font-bold text-white mb-12 leading-tight">
                HAVE AN IDEA?<br/>
                <span className="text-gray-700">LET'S BUILD IT.</span>
            </h2>
            
            <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
                <div>
                     <span className="text-gray-500 text-sm font-mono block mb-4">CONTACT DETAILS</span>
                     <a href={`mailto:${RESUME_DATA.contact.email}`} className="text-2xl md:text-3xl text-white hover:text-primary transition-colors border-b border-white/20 pb-1 inline-block">
                        {RESUME_DATA.contact.email}
                     </a>
                     <p className="text-gray-400 mt-4">{RESUME_DATA.contact.location}</p>
                </div>

                <div>
                    <span className="text-gray-500 text-sm font-mono block mb-4">SOCIALS</span>
                    <div className="flex flex-col gap-2">
                        {SOCIAL_LINKS.map((link) => (
                            <a 
                                key={link.label}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group"
                            >
                                {link.label}
                                <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;