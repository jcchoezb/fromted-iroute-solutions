"use client";

import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Carlos Mendoza",
    role: "Gerente de Operaciones",
    company: "Logística Express",
    content: "iRoute transformó nuestra manera de ver los datos. El BI nos ha permitido optimizar rutas y reducir costos en un 15%.",
    avatar: "https://i.pravatar.cc/150?u=carlos"
  },
  {
    name: "Ana Silva",
    role: "Directora IT",
    company: "TechGlobal",
    content: "La aplicación móvil que desarrollaron superó nuestras expectativas. La usabilidad es excelente y el soporte técnico impecable.",
    avatar: "https://i.pravatar.cc/150?u=ana"
  },
  {
    name: "Roberto Guayaquil",
    role: "CEO",
    company: "Distribuciones R.G.",
    content: "Más que un proveedor, son aliados estratégicos. Su software a medida ha crecido con nosotros durante más de 5 años.",
    avatar: "https://i.pravatar.cc/150?u=roberto"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonios" className="py-32 bg-brand-deep overflow-hidden relative">
      <div className="absolute inset-0 bg-grid-tech opacity-10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-5 py-2 rounded-xl bg-accent-blue/10 border border-accent-blue/30 text-accent-blue text-[10px] font-black tracking-[0.3em] uppercase mb-6 font-mono glow-text"
          >
            Validación de Mercado
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl font-black text-text-primary font-display tracking-tighter"
          >
            TESTIMONIOS DE <span className="text-accent-blue">ALTO IMPACTO</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-10 relative z-10">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-10 rounded-[3rem] border-accent-blue/10 flex flex-col items-center text-center group hover:bg-black/5 dark:hover:bg-white/10 transition-all duration-500"
            >
              <div className="relative mb-8 group-hover:scale-110 transition-transform duration-500">
                <img src={t.avatar} alt={t.name} className="w-24 h-24 rounded-3xl border-4 border-accent-blue/10 shadow-2xl grayscale group-hover:grayscale-0 transition-all duration-500" referrerPolicy="no-referrer" />
                <div className="absolute -bottom-3 -right-3 bg-accent-blue p-3 rounded-2xl text-white shadow-xl shadow-accent-blue/40">
                  <Quote size={16} />
                </div>
              </div>
              <div className="flex gap-1.5 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} className="fill-accent-blue text-accent-blue glow-text" />
                ))}
              </div>
              <p className="text-text-secondary italic mb-8 leading-relaxed text-lg font-light">
                "{t.content}"
              </p>
              <div className="mt-auto">
                <h4 className="text-xl font-bold text-text-primary tracking-tight">{t.name}</h4>
                <p className="text-sm text-accent-blue font-black uppercase tracking-widest mt-1 font-mono">{t.role}</p>
                <p className="text-xs text-text-secondary opacity-50 font-medium mt-1">{t.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
