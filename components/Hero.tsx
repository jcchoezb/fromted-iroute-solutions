"use client";

import { motion } from "motion/react";
import { ArrowRight, Smartphone, LineChart, Globe, Zap, Shield } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-56 lg:pb-40 overflow-hidden bg-brand-deep transition-colors duration-300">
      {/* Dynamic Tech Background */}
      <div className="absolute inset-0 bg-grid-tech opacity-20 pointer-events-none" />
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[700px] h-[700px] bg-accent-blue/20 rounded-full blur-[140px] opacity-60" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[600px] h-[600px] bg-tech-cyan/10 rounded-full blur-[120px] opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-2 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-accent-blue/10 border border-accent-blue/30 mb-8 backdrop-blur-sm">
              <div className="w-2.5 h-2.5 rounded-full bg-tech-cyan animate-pulse shadow-[0_0_10px_var(--tech-cyan)]" />
              <span className="text-xs font-black text-text-primary uppercase tracking-[0.3em] font-mono">Arquitectura Digital de Vanguardia</span>
            </div>
            
            <h1 className="text-6xl lg:text-[7.5rem] font-black leading-[0.85] tracking-tighter font-display mb-10">
              <span className="text-text-primary text-shadow-strong block mb-2">SOLUCIONES</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue via-tech-cyan to-accent-blue bg-[length:200%_auto] animate-gradient leading-tight py-4 px-2 inline-block brightness-110 contrast-125">
                INTELIGENTES
              </span>
            </h1>
            
            <p className="text-lg lg:text-2xl text-text-secondary leading-relaxed max-w-xl mb-12 font-light">
              Transformamos la complejidad técnica en <span className="text-text-primary font-bold">ventaja competitiva</span>. Business Intelligence y movilidad diseñada para la escala real sobre <span className="text-accent-blue font-bold">AWS Cloud</span>.
            </p>
            
            <div className="flex flex-wrap gap-6">
              <button className="group px-10 py-5 bg-accent-blue text-white rounded-2xl font-bold text-xl hover:shadow-accent-blue/40 hover:-translate-y-1 transition-all flex items-center gap-4 active:scale-95">
                INICIAR PROYECTO <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-10 py-5 glass-card text-text-primary rounded-2xl font-bold text-xl hover:bg-black/5 dark:hover:bg-white/5 transition-all active:scale-95">
                VER PORTAFOLIO
              </button>
            </div>

            <div className="mt-20 grid grid-cols-3 gap-12 border-t border-accent-blue/20 pt-12">
              <div>
                <span className="block text-4xl lg:text-5xl font-black text-text-primary font-display tracking-tighter">20+</span>
                <span className="text-[10px] text-accent-blue font-black uppercase tracking-[0.2em] font-mono mt-2 block">Años de Innovación</span>
              </div>
              <div>
                <span className="block text-4xl lg:text-5xl font-black text-text-primary font-display tracking-tighter">500+</span>
                <span className="text-[10px] text-accent-blue font-black uppercase tracking-[0.2em] font-mono mt-2 block">Casos de Éxito</span>
              </div>
              <div>
                <span className="block text-4xl lg:text-5xl font-black text-text-primary font-display tracking-tighter">100%</span>
                <span className="text-[10px] text-accent-blue font-black uppercase tracking-[0.2em] font-mono mt-2 block">I+D Ecuatoriano</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mt-20 lg:mt-0 relative"
          >
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden border border-accent-blue/10 shadow-[0_0_80px_-15px_rgba(0,123,255,0.3)]">
               <div className="absolute inset-0 bg-blue-900/10 pointer-events-none" />
               <img 
                src="https://images.unsplash.com/photo-1551288049-bbda38a5fbd1?auto=format&fit=crop&q=80&w=2000" 
                alt="Modern Tech Workspace" 
                className="w-full h-auto scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Tech Floating Elements */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="absolute -top-10 -right-10 glass-card p-6 rounded-3xl z-20"
            >
              <div className="bg-blue-500/20 p-3 rounded-2xl mb-4">
                <Globe className="text-blue-400" size={32} />
              </div>
              <div className="font-mono text-[10px] text-blue-300/50 mb-1">NETWORK_STATUS</div>
              <div className="text-sm font-bold text-text-primary uppercase tracking-wider">Conectividad Global</div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 15, 0] }}
              transition={{ repeat: Infinity, duration: 8, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-10 -left-10 glass-card p-6 rounded-3xl z-20"
            >
              <div className="flex items-center gap-4">
                <div className="bg-cyan-500/20 p-3 rounded-2xl">
                  <Zap className="text-cyan-400" size={28} />
                </div>
                <div>
                  <div className="font-mono text-[10px] text-cyan-300/50">SYSTEM_READY</div>
                  <div className="text-sm font-bold text-text-primary uppercase">Alta Disponibilidad</div>
                </div>
              </div>
            </motion.div>

            {/* Glowing Accent */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-[2.5rem] blur-2xl opacity-20 -z-10 animate-pulse" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
