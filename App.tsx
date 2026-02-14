import React, { useState, useEffect } from 'react';
import { PORTFOLIO_DATA, SKILLS_MATRIX } from './constants';
import Layout from './components/Layout';
import CustomCursor from './components/CustomCursor';
import HeroGeometric from './components/HeroGeometric';
import WelcomeIntro from './components/WelcomeIntro';
import Navbar from './components/Navbar';
import Reveal from './components/Reveal';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Download, 
  BrainCircuit, 
  Layers, 
  ArrowRight, 
  Terminal, 
  Code,
  Database,
  Cpu,
  Globe,
  GitBranch,
  MessageSquare,
  Zap,
  Sparkles,
  ExternalLink,
  ChevronRight,
  ShieldCheck,
  CpuIcon,
  Table,
  Package,
  FileText,
  LayoutTemplate,
  Coffee
} from 'lucide-react';
import { Project } from './types';

// --- Icons Helper ---
const getTechIcon = (name: string, size = 14) => {
  const n = name.toLowerCase();
  
  // Languages
  if (n === 'python' || n.includes('js') || n === 'typescript' || n === 'javascript') return <Code size={size} />;
  if (n === 'java') return <Coffee size={size} />;
  if (n === 'sql') return <Database size={size} />;
  
  // AI/ML
  if (n.includes('ml') || n.includes('machine learning') || n.includes('scikit')) return <BrainCircuit size={size} />;
  if (n.includes('nlp') || n.includes('nltk')) return <MessageSquare size={size} />;
  if (n.includes('llm') || n.includes('openai') || n.includes('gemini') || n.includes('gpt')) return <Sparkles size={size} />;
  if (n.includes('xgboost') || n.includes('gradient')) return <Zap size={size} />;
  if (n.includes('pandas') || n.includes('feature')) return <Table size={size} />;
  
  // Web
  if (n.includes('react') || n.includes('vue') || n.includes('html') || n.includes('css')) return <LayoutTemplate size={size} />;
  if (n.includes('bootstrap') || n.includes('tailwind')) return <Layers size={size} />;
  if (n.includes('fastapi') || n.includes('flask') || n.includes('django') || n.includes('node')) return <Globe size={size} />;
  if (n.includes('rest') || n.includes('api')) return <Globe size={size} />;
  
  // Tools & DB
  if (n.includes('postgre') || n.includes('mysql') || n.includes('sqlite') || n.includes('data')) return <Database size={size} />;
  if (n.includes('git') || n.includes('github') || n.includes('automation')) return <GitBranch size={size} />;
  if (n.includes('linux') || n.includes('bash')) return <Terminal size={size} />;
  if (n.includes('docker') || n.includes('devops')) return <Package size={size} />;
  
  return <Terminal size={size} />;
};

const SectionHeader: React.FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => (
  <Reveal>
    <div className="mb-10 sm:mb-16">
      <div className="text-[9px] sm:text-[10px] font-mono text-gray-500 uppercase tracking-[0.5em] sm:tracking-[0.8em] mb-4 sm:mb-6 flex items-center gap-3 sm:gap-4">
        {subtitle}
        <div className="h-[1px] w-8 sm:w-12 bg-white/10" />
      </div>
      <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tighter text-white leading-none text-gradient">{title}</h2>
    </div>
  </Reveal>
);

const SkillMatrixCard: React.FC<{ category: string; skills: string[]; theme: string; index: number }> = ({ category, skills, theme, index }) => (
  <Reveal delay={index * 0.05}>
    <div className="p-5 sm:p-8 rounded-xl sm:rounded-[2rem] glass-card group">
      <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
        <div className={`w-2 h-2 rounded-full ${
          theme === 'ml' ? 'bg-cyan-500 shadow-[0_0_12px_rgba(6,182,212,0.5)]' : 
          theme === 'fs' ? 'bg-orange-500 shadow-[0_0_12px_rgba(249,115,22,0.5)]' : 
          'bg-gray-500'
        }`} />
        <h4 className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-gray-400">{category}</h4>
      </div>
      <div className="flex flex-wrap gap-2 sm:gap-2.5">
        {skills.map((skill) => (
          <span key={skill} className="px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-lg sm:rounded-xl bg-white/[0.03] border border-white/5 text-[10px] sm:text-[11px] text-gray-300 font-medium hover:border-white/20 hover:text-white hover:bg-white/5 transition-all cursor-default flex items-center gap-2 sm:gap-2.5">
            <span className="opacity-50 group-hover:opacity-100 transition-opacity">{getTechIcon(skill, 12)}</span>
            {skill}
          </span>
        ))}
      </div>
    </div>
  </Reveal>
);

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => (
  <Reveal delay={index * 0.1}>
    <div className="group relative p-6 sm:p-10 rounded-2xl sm:rounded-[2.5rem] glass-card flex flex-col h-full">
      <div className="relative z-10 flex-grow">
        <div className="flex justify-between items-start mb-5 sm:mb-8">
          <div className={`px-2.5 sm:px-3 py-1 rounded-full text-[9px] sm:text-[10px] uppercase font-bold tracking-[0.2em] sm:tracking-[0.3em] border
            ${project.category === 'ml' 
              ? 'border-cyan-900/40 text-cyan-400 bg-cyan-950/10' 
              : 'border-orange-900/40 text-orange-400 bg-orange-950/10'}
          `}>
            {project.category === 'ml' ? 'Intelligence' : 'Systems'}
          </div>
          {project.metric && (
            <div className="text-[9px] sm:text-[10px] font-mono text-gray-600 tracking-[0.2em] sm:tracking-[0.3em] uppercase">
              {project.metric}
            </div>
          )}
        </div>
        
        <h3 className="text-xl sm:text-3xl font-bold text-gray-100 mb-4 sm:mb-6 group-hover:text-white transition-colors tracking-tighter leading-none">
          {project.title}
        </h3>
        
        <div className="flex flex-wrap gap-3 sm:gap-4 mb-6 sm:mb-10 opacity-70 group-hover:opacity-100 transition-opacity">
          {project.tags.map((tag: string) => (
            <span key={tag} className="text-[9px] sm:text-[10px] text-gray-400 font-mono uppercase tracking-widest flex items-center gap-1.5 sm:gap-2">
              {getTechIcon(tag, 11)} {tag}
            </span>
          ))}
        </div>

        <ul className="space-y-3 sm:space-y-5 mb-6 sm:mb-10">
          {project.description.map((item: string, i: number) => (
             <li key={i} className="text-xs sm:text-sm text-gray-400 leading-relaxed flex items-start gap-3 sm:gap-4 font-light">
               <span className="mt-1.5 sm:mt-2 w-1 h-1 rounded-full bg-white/20 shrink-0" />
               {item}
             </li>
          ))}
        </ul>
      </div>

      {project.githubUrl && (
        <a 
          href={project.githubUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="mt-auto py-3 sm:py-4 px-5 sm:px-8 rounded-xl sm:rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 text-white text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.3em] sm:tracking-[0.4em] transition-all flex items-center justify-center gap-2 sm:gap-3 group/btn relative z-10"
        >
          Inspect Architecture
          <ExternalLink size={12} className="group-hover/btn:translate-x-1 transition-transform text-gray-500" />
        </a>
      )}
    </div>
  </Reveal>
);

function App() {
  const [introFinished, setIntroFinished] = useState(false);

  return (
    <Layout>
      <CustomCursor />
      
      {!introFinished && (
        <WelcomeIntro onComplete={() => setIntroFinished(true)} />
      )}
      
      {introFinished && (
        <>
          <Navbar />
          
          <main className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 relative">
            
            {/* HERO - OBSIDIAN STYLE */}
            <section id="home" className="min-h-screen flex flex-col justify-center relative py-20 sm:py-32">
              <HeroGeometric />
              <div className="relative z-10 max-w-5xl">
                <Reveal>
                  <div className="inline-flex items-center gap-4 px-5 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-gray-400 mb-12 backdrop-blur-xl uppercase tracking-[0.5em]">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-glow" />
                    Open for Internship
                  </div>
                </Reveal>
                
                <Reveal delay={0.1}>
                  <h1 className="text-4xl sm:text-7xl md:text-8xl lg:text-[8rem] xl:text-[9rem] font-bold tracking-tighter text-white mb-6 sm:mb-10 leading-[0.85] text-gradient break-words max-w-full">
                    {PORTFOLIO_DATA.personal.name}
                  </h1>
                </Reveal>
                
                <Reveal delay={0.2}>
                  <p className="text-xl sm:text-3xl md:text-5xl lg:text-6xl text-gray-400 font-light mb-10 sm:mb-16 max-w-4xl leading-[1.1] sm:leading-[1.05] tracking-tight">
                    Engineering <span className="text-white">intelligent systems</span> with mathematical precision.
                  </p>
                </Reveal>

                <Reveal delay={0.3}>
                  <div className="flex flex-wrap gap-4 sm:gap-8 items-center">
                    <a href="https://drive.google.com/file/d/1YepWe1Cn013JRxZWHNmWMyDHI1Ytor0x/view?usp=sharing" target="_blank" className="flex items-center gap-3 sm:gap-4 px-6 sm:px-10 py-4 sm:py-5 bg-white text-black rounded-xl sm:rounded-2xl font-bold uppercase text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.3em] hover:bg-gray-200 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-2xl">
                      <FileText size={16} /> Resume.pdf
                    </a>
                    <div className="flex gap-4 sm:gap-6">
                      <a href={`https://${PORTFOLIO_DATA.personal.github}`} target="_blank" className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-white/5 text-white border border-white/10 rounded-xl sm:rounded-2xl hover:bg-white/10 transition-all hover:-translate-y-1">
                        <Github size={20} />
                      </a>
                      <a href={`https://${PORTFOLIO_DATA.personal.linkedin}`} target="_blank" className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-white/5 text-white border border-white/10 rounded-xl sm:rounded-2xl hover:bg-white/10 transition-all hover:-translate-y-1">
                        <Linkedin size={20} />
                      </a>
                    </div>
                  </div>
                </Reveal>
              </div>
            </section>

            {/* STACK - GRID OF EXCELLENCE */}
            <section id="skills" className="py-16 sm:py-32 border-t border-white/5 scroll-mt-20">
              <SectionHeader title="Technical Core" subtitle="The Stack" />
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {SKILLS_MATRIX.map((item, idx) => (
                  <SkillMatrixCard key={idx} {...item} index={idx} />
                ))}
              </div>
            </section>

            {/* EXPERTISE - BENTO V2 */}
            <section id="expertise" className="py-16 sm:py-32 scroll-mt-20">
              <SectionHeader title="Capabilities" subtitle="Deep Dives" />
              <div className="grid md:grid-cols-12 gap-8">
                
                {/* DS Block */}
                <div className="md:col-span-8 p-6 sm:p-12 rounded-[2rem] sm:rounded-[3rem] glass-card flex flex-col justify-between group overflow-hidden relative">
                  <div className="absolute -top-24 -right-24 w-64 h-64 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none group-hover:opacity-30 transition-opacity" />
                  <Reveal>
                    <div className="flex justify-between items-start mb-8 sm:mb-16">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-[1.5rem] bg-cyan-950/30 flex items-center justify-center text-cyan-400 border border-cyan-500/20 group-hover:scale-110 transition-transform duration-500">
                        <CpuIcon size={24} className="sm:hidden" />
                        <CpuIcon size={32} className="hidden sm:block" />
                      </div>
                      <div className="text-[9px] sm:text-[10px] font-mono text-cyan-600 uppercase tracking-[0.3em] sm:tracking-[0.4em]">Analytics // ML</div>
                    </div>
                    <h3 className="text-2xl sm:text-4xl font-bold text-white mb-4 sm:mb-8 tracking-tighter">Applied Data Intelligence</h3>
                    <p className="text-base sm:text-xl text-gray-400 font-light leading-relaxed mb-8 sm:mb-12 max-w-2xl">
                      Extracting clarity from chaos. Specialized in high-dimensional feature engineering, ensemble modeling, and deep learning architectures.
                    </p>
                    <div className="flex flex-wrap gap-2 sm:gap-3">
                      {PORTFOLIO_DATA.tracks[0].skills.map((s, i) => (
                        <span key={i} className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg sm:rounded-xl bg-cyan-950/20 border border-cyan-900/40 text-[9px] sm:text-[10px] font-mono text-cyan-300/60 uppercase tracking-wider sm:tracking-widest">{s}</span>
                      ))}
                    </div>
                  </Reveal>
                </div>

                {/* Principles */}
                <div className="md:col-span-4 p-6 sm:p-10 rounded-[2rem] sm:rounded-[3rem] glass-card flex flex-col justify-between">
                  <Reveal delay={0.1}>
                    <div className="mb-8 sm:mb-12">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-white/5 flex items-center justify-center text-gray-400 mb-6 sm:mb-8">
                        <ShieldCheck size={20} className="sm:hidden" />
                        <ShieldCheck size={24} className="hidden sm:block" />
                      </div>
                      <h4 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 tracking-tight">Engineering Philosophy</h4>
                      <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-light">
                        I build for production, not just prototypes. Scalability, security, and statistical validity are non-negotiables.
                      </p>
                    </div>
                    <div className="space-y-3 sm:space-y-4">
                      {PORTFOLIO_DATA.values.slice(0, 2).map((val, i) => (
                        <div key={i} className="p-4 sm:p-5 rounded-xl sm:rounded-[1.5rem] bg-white/[0.03] border border-white/5">
                          <h5 className="text-[9px] sm:text-[10px] font-bold text-white mb-1.5 sm:mb-2 uppercase tracking-[0.15em] sm:tracking-[0.2em]">{val.title}</h5>
                          <p className="text-[9px] sm:text-[10px] text-gray-600 leading-relaxed font-mono">{val.description}</p>
                        </div>
                      ))}
                    </div>
                  </Reveal>
                </div>

                {/* Full Stack Block */}
                <div className="md:col-span-12 p-6 sm:p-12 rounded-[2rem] sm:rounded-[3rem] glass-card group overflow-hidden relative">
                   <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-orange-500/10 rounded-full blur-[120px] pointer-events-none group-hover:opacity-30 transition-opacity" />
                   <Reveal delay={0.2}>
                    <div className="grid md:grid-cols-12 gap-8 sm:gap-12 items-center">
                      <div className="md:col-span-7">
                        <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-[1.5rem] bg-orange-950/30 flex items-center justify-center text-orange-400 border border-orange-500/20 mb-8 sm:mb-12">
                          <Layers size={24} className="sm:hidden" />
                          <Layers size={32} className="hidden sm:block" />
                        </div>
                        <h3 className="text-2xl sm:text-4xl font-bold text-white mb-4 sm:mb-8 tracking-tighter">Product Engineering</h3>
                        <p className="text-base sm:text-xl text-gray-400 font-light leading-relaxed mb-6 sm:mb-10">
                          Architecting modular backends and fluid frontends that transform raw logic into seamless user experiences. Type-safe, high-performance, and resilient.
                        </p>
                        <div className="flex flex-wrap gap-2 sm:gap-3">
                           {PORTFOLIO_DATA.tracks[1].skills.map((s, i) => (
                            <span key={i} className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg sm:rounded-xl bg-orange-950/20 border border-orange-900/40 text-[9px] sm:text-[10px] font-mono text-orange-300/60 uppercase tracking-wider sm:tracking-widest">{s}</span>
                          ))}
                        </div>
                      </div>
                      <div className="md:col-span-5 grid grid-cols-2 gap-3 sm:gap-6">
                         {['Efficiency', 'Latency', 'Security', 'Scale'].map((term) => (
                           <div key={term} className="p-4 sm:p-8 rounded-xl sm:rounded-[2rem] bg-white/[0.02] border border-white/5 flex flex-col items-center justify-center gap-2 sm:gap-4 text-[9px] sm:text-[10px] font-mono text-gray-500 uppercase tracking-[0.3em] sm:tracking-[0.4em] group-hover:text-white transition-all group-hover:border-white/10">
                             <Zap size={16} className="sm:hidden text-orange-500/40" />
                             <Zap size={20} className="hidden sm:block text-orange-500/40" />
                             {term}
                           </div>
                         ))}
                      </div>
                    </div>
                  </Reveal>
                </div>

              </div>
            </section>

            {/* PROJECTS - THE LOG */}
            <section id="projects" className="py-16 sm:py-32 scroll-mt-20 border-t border-white/5">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 sm:mb-24 gap-8 sm:gap-12">
                <SectionHeader title="Build Archive" subtitle="Technical Projects" />
                <Reveal delay={0.2}>
                  <a href={`https://${PORTFOLIO_DATA.personal.github}`} target="_blank" className="group flex items-center gap-4 sm:gap-8 py-4 sm:py-5 px-6 sm:px-10 rounded-xl sm:rounded-[1.5rem] bg-white text-black text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.3em] sm:tracking-[0.5em] hover:bg-gray-200 transition-all shadow-xl">
                    View Lab Archive 
                    <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                  </a>
                </Reveal>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 sm:gap-10">
                {PORTFOLIO_DATA.projects.map((project, index) => (
                  <ProjectCard key={index} project={project} index={index} />
                ))}
              </div>
            </section>

            {/* ACADEMICS */}
            <section id="education" className="py-16 sm:py-32 scroll-mt-20 border-t border-white/5">
              <SectionHeader title="Foundations" subtitle="Academic Track" />
              <div className="grid md:grid-cols-2 gap-8 sm:gap-16">
                {PORTFOLIO_DATA.education.map((edu, idx) => (
                  <Reveal key={idx} delay={idx * 0.1}>
                    <div className="group relative pl-8 sm:pl-12 border-l border-white/5 py-4 sm:py-6">
                      <div className="absolute -left-1 top-4 sm:top-6 w-2 h-2 rounded-full bg-white/20 group-hover:bg-white group-hover:scale-150 transition-all duration-500" />
                      <div className="text-[9px] sm:text-[10px] font-mono text-gray-500 uppercase tracking-[0.4em] sm:tracking-[0.5em] mb-4 sm:mb-6">{edu.year}</div>
                      <h4 className="text-2xl sm:text-4xl font-bold text-white mb-2 sm:mb-3 tracking-tighter leading-none">{edu.institution}</h4>
                      <div className="text-gray-400 text-base sm:text-xl mb-5 sm:mb-8 font-light italic">{edu.degree}</div>
                      <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-5 py-2 rounded-lg sm:rounded-xl bg-white/[0.03] border border-white/5 text-[10px] sm:text-[11px] font-mono text-gray-500 tracking-[0.15em] sm:tracking-[0.2em] uppercase group-hover:text-white transition-colors">
                        Result: {edu.grade}
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </section>

            {/* FOOTER - THE CALL TO ACTION */}
            <footer className="pt-24 sm:pt-48 pb-16 sm:pb-32 text-center">
              <Reveal>
                <div className="max-w-4xl mx-auto">
                  <h2 className="text-4xl sm:text-6xl md:text-9xl font-bold text-white mb-10 sm:mb-16 tracking-tighter leading-[0.9] sm:leading-[0.85] text-gradient">
                    Let's build <br /> <span className="text-gray-600">something robust.</span>
                  </h2>
                  <div className="flex flex-col md:flex-row justify-center items-center gap-6 sm:gap-12 mb-16 sm:mb-24">
                    <a href={`mailto:${PORTFOLIO_DATA.personal.email}`} className="text-lg sm:text-2xl md:text-4xl text-gray-400 hover:text-white transition-all flex items-center gap-4 sm:gap-8 font-light group">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-[2rem] glass-card flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                        <Mail size={20} className="sm:hidden" />
                        <Mail size={28} className="hidden sm:block" />
                      </div>
                      <span className="border-b border-white/10 group-hover:border-white transition-all text-sm sm:text-base md:text-inherit break-all sm:break-normal">{PORTFOLIO_DATA.personal.email}</span>
                    </a>
                  </div>
                  
                  <div className="flex flex-wrap justify-center gap-6 sm:gap-16 mb-16 sm:mb-32 border-b border-white/5 pb-10 sm:pb-16 opacity-60 hover:opacity-100 transition-opacity">
                    <a href={`https://${PORTFOLIO_DATA.personal.github}`} target="_blank" className="text-[9px] sm:text-[10px] font-mono uppercase tracking-[0.4em] sm:tracking-[0.6em] text-gray-600 hover:text-white transition-all hover:scale-110">GitHub</a>
                    <a href={`https://${PORTFOLIO_DATA.personal.linkedin}`} target="_blank" className="text-[9px] sm:text-[10px] font-mono uppercase tracking-[0.4em] sm:tracking-[0.6em] text-gray-600 hover:text-white transition-all hover:scale-110">LinkedIn</a>
                    <a href="https://drive.google.com/file/d/1YepWe1Cn013JRxZWHNmWMyDHI1Ytor0x/view?usp=sharing" target="_blank" className="text-[9px] sm:text-[10px] font-mono uppercase tracking-[0.4em] sm:tracking-[0.6em] text-gray-600 hover:text-white transition-all hover:scale-110">Resume</a>
                    <a href={`mailto:${PORTFOLIO_DATA.personal.email}`} className="text-[9px] sm:text-[10px] font-mono uppercase tracking-[0.4em] sm:tracking-[0.6em] text-gray-600 hover:text-white transition-all hover:scale-110">Contact</a>
                  </div>
                  
                  <div className="flex flex-col md:flex-row justify-between items-center text-[8px] sm:text-[9px] text-gray-800 font-mono tracking-[0.4em] sm:tracking-[0.6em] uppercase gap-4 sm:gap-6">
                    <span>Kartik Bajaj // &copy; 2025</span>
                    <span className="hidden md:block">Engineered for Perfection & Clarity</span>
                    <span>30.37N // 76.77E</span>
                  </div>
                </div>
              </Reveal>
            </footer>

          </main>
        </>
      )}
    </Layout>
  );
}

export default App;
