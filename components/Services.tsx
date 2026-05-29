"use client";

import { motion } from "motion/react";
import { Smartphone, PieChart, Code2, ShieldCheck, Zap, Layers, ChevronRight, ArrowRight } from "lucide-react";

const services = [
  {
    title: "Soluciones Móviles",
    description: "Aplicaciones con arquitectura enfocada en transaccionalidad, integrando geolocalización y notificaciones push para una gestión eficiente en campo.",
    icon: Smartphone,
    color: "from-blue-500/20 to-blue-600/20 text-blue-400"
  },
  {
    title: "Analítica e Inteligencia",
    description: "Predecimos el comportamiento de sus clientes mediante modelos avanzados que transforman datos en acciones estratégicas y ofertas diferenciadas.",
    icon: PieChart,
    color: "from-indigo-500/20 to-indigo-600/20 text-indigo-400"
  },
  {
    title: "Aplicaciones Web",
    description: "Diseño e interfaz de alto impacto. Desarrollamos software estable, seguro y adaptable utilizando las tecnologías más disruptivas del ecosistema React.",
    icon: Code2,
    color: "from-cyan-500/20 to-cyan-600/20 text-cyan-400"
  },
  {
    title: "Control de Calidad (QA)",
    description: "Gestión integral de pruebas y automatización de procesos para garantizar softwares robustos y libres de errores en entornos productivos.",
    icon: ShieldCheck,
    color: "from-slate-500/20 to-slate-600/20 text-slate-400"
  },
  {
    title: "Nube & Infraestructura",
    description: "Migración y gestión de infraestructuras en la nube, optimizando el rendimiento y reduciendo costos de mantenimiento IT.",
    icon: Layers,
    color: "from-emerald-500/20 to-emerald-600/20 text-emerald-400"
  },
  {
    title: "Consultoría IT",
    description: "Evaluación técnica y estratégica para alinear su infraestructura tecnológica con los objetivos de crecimiento de su organización.",
    icon: Zap,
    color: "from-amber-500/20 to-amber-600/20 text-amber-400"
  }
];

const Services = () => {
  return (
    <section id="servicios" className="py-32 bg-brand-blue relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-accent-blue/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-8">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-5 py-2 rounded-xl bg-accent-blue/10 border border-accent-blue/30 text-accent-blue text-[10px] font-black tracking-[0.3em] uppercase mb-6 font-mono glow-text"
            >
              Arquitectura de Soluciones
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-5xl font-black text-text-primary sm:text-7xl font-display leading-[1] tracking-tighter"
            >
              TECNOLOGÍA QUE <br /> <span className="text-accent-blue glow-text">TRANSFORMA</span> INDUSTRIAS
            </motion.h2>
          </div>
          <motion.p 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
            className="text-xl text-text-secondary max-w-sm mb-2 font-light border-l-2 border-accent-blue pl-8"
          >
            Ingeniería de software de alto nivel diseñada para optimizar cada proceso crítico de su organización.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, borderColor: "rgba(0, 102, 255, 0.5)" }}
              className="glass-card p-12 rounded-[2.5rem] border-accent-blue/10 hover:bg-accent-blue/5 transition-all duration-500 group relative overflow-hidden"
            >
              {/* Corner accent */}
              <div className="absolute top-0 right-0 p-10 text-accent-blue opacity-20 group-hover:opacity-100 group-hover:translate-x-2 group-hover:-translate-y-2 transition-all">
                <ChevronRight size={28} />
              </div>

              <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-10 shadow-2xl relative`}>
                <div className="absolute inset-0 bg-white/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                <service.icon size={36} className="relative z-10" />
              </div>
              
              <h3 className="text-3xl font-bold text-text-primary mb-6 group-hover:text-accent-blue transition-colors tracking-tight">{service.title}</h3>
              <p className="text-text-secondary leading-relaxed text-base lg:text-lg font-light mb-10">
                {service.description}
              </p>
              
              <div className="mt-2 pt-8 border-t border-accent-blue/10">
                <a href="#" className="inline-flex items-center gap-3 text-xs font-black text-accent-blue uppercase tracking-[0.2em] hover:gap-5 transition-all font-mono">
                  FICHA TÉCNICA <ArrowRight size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
