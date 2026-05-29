"use client";

import { motion } from "motion/react";
import { Users, Target, Rocket, Award } from "lucide-react";

const stats = [
  { label: "Años de Trayectoria", value: "20+" },
  { label: "Proyectos Globales", value: "500+" },
  { label: "Expertos Técnicos", value: "50+" },
  { label: "Retención de Clientes", value: "98%" },
];

const values = [
  {
    title: "Innovación Constante",
    description: "No nos conformamos con lo establecido. Siempre buscamos la tecnología de vanguardia para dar ventaja competitiva.",
    icon: Rocket,
  },
  {
    title: "Enfoque en Resultados",
    description: "Cada línea de código está orientada a generar un impacto positivo en los indicadores clave de su negocio.",
    icon: Target,
  },
  {
    title: "Talento Humano",
    description: "Contamos con el mejor equipo de ingenieros y analistas, certificados en las plataformas líderes mundiales.",
    icon: Users,
  },
  {
    title: "Calidad Certificada",
    description: "Seguimos rigurosos procesos de control de calidad para entregar productos estables y seguros.",
    icon: Award,
  },
];

const AboutUs = () => {
  return (
    <section id="nosotros" className="py-32 bg-brand-deep relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-accent-blue/5 rounded-full blur-[140px] -ml-96" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-block px-5 py-2 rounded-xl bg-accent-blue/10 border border-accent-blue/30 text-accent-blue text-[10px] font-black tracking-[0.3em] uppercase mb-6 font-mono glow-text">
              Nuestra Compañía
            </div>
            <h2 className="text-5xl lg:text-7xl font-black text-text-primary mb-8 font-display tracking-tighter uppercase leading-[0.9]">
              Liderando la <br />
              <span className="text-accent-blue antialiased">Decisión Inteligente</span>
            </h2>
            <p className="text-xl text-text-secondary leading-relaxed font-light mb-8 max-w-xl">
              En <span className="text-text-primary font-bold">iRoute Solutions</span>, creemos que la tecnología es el puente hacia el futuro. Con sede en Ecuador, nos hemos consolidado como el aliado estratégico preferido por las empresas que buscan transformar sus datos en conocimiento y sus procesos en eficiencia.
            </p>
            <p className="text-lg text-text-secondary opacity-70 leading-relaxed font-light mb-12 max-w-xl">
              Nuestra misión es simple: diseñar e implementar soluciones de software que no solo funcionen, sino que inspiren. Desde inteligencia de negocio hasta arquitecturas cloud masivas, llevamos la ingeniería ecuatoriana al estándar internacional.
            </p>
            
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, i) => (
                <div key={i} className="border-l-2 border-accent-blue/30 pl-6">
                  <div className="text-4xl font-black text-text-primary font-display tracking-tighter">
                    {stat.value}
                  </div>
                  <div className="text-[10px] text-accent-blue font-black uppercase tracking-widest font-mono mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-10 rounded-[3rem] border-accent-blue/10 hover:border-accent-blue/30 transition-all group"
              >
                <div className="w-14 h-14 rounded-2xl bg-accent-blue/10 flex items-center justify-center mb-6 border border-accent-blue/20 group-hover:bg-accent-blue group-hover:text-white transition-all duration-500">
                  <value.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-3 tracking-tight">{value.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed font-light">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Culture / Purpose */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-accent-blue/5 rounded-[4rem] p-12 lg:p-24 border border-accent-blue/10 overflow-hidden transition-colors"
        >
          <div className="absolute top-0 right-0 p-24 text-accent-blue/5">
             <Rocket size={400} strokeWidth={0.5} />
          </div>
          <div className="relative z-10 max-w-4xl">
            <h3 className="text-3xl lg:text-5xl font-black text-text-primary mb-8 font-display tracking-tight uppercase">
              Pasión por la <span className="italic">excelencia técnica</span>
            </h3>
            <p className="text-xl lg:text-2xl text-text-secondary leading-relaxed font-light">
              "No somos solo una empresa de software; somos ingenieros de sueños digitales. En iRoute Solutions, cada proyecto es una oportunidad para redefinir lo que es posible mediante la integración inteligente de datos y tecnología cloud."
            </p>
            <div className="mt-12 flex items-center gap-6">
              <div className="w-16 h-16 rounded-2xl bg-accent-blue/10 overflow-hidden border border-accent-blue/10">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200" 
                  alt="Liderazgo" 
                  className="w-full h-full object-cover grayscale"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <div className="text-text-primary font-bold text-lg">Dirección Ejecutiva</div>
                <div className="text-accent-blue text-sm font-black uppercase tracking-widest font-mono">iRoute Solutions S.A.</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
