"use client";

import { motion } from "motion/react";
import { Cloud, Shield, Cpu, Terminal, FileText, CheckCircle2 } from "lucide-react";

const cloudFeatures = [
  {
    title: "AWS Architecture",
    description: "Diseñamos infraestructuras resilientes y escalables bajo el AWS Well-Architected Framework, garantizando alta disponibilidad.",
    icon: Cloud,
  },
  {
    title: "CloudFormation Experts",
    description: "Infraestructura como Código (IaC) automatizada para despliegues precisos, repetibles y libres de error humano.",
    icon: Terminal,
  },
  {
    title: "Licenciamiento AWS",
    description: "Gestión estratégica de contratos de licencias AWS para optimizar costos y maximizar el retorno de inversión cloud.",
    icon: FileText,
  },
  {
    title: "Buenas Prácticas",
    description: "Implementación de gobernanza, seguridad multicapa y cumplimiento normativo en cada capa de su arquitectura cloud.",
    icon: Shield,
  },
];

const CloudExcellence = () => {
  return (
    <section id="cloud" className="py-32 bg-brand-deep relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-blue/10 rounded-full blur-[120px] -mr-64 -mt-64" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-block px-5 py-2 rounded-xl bg-orange-500/10 border border-orange-500/30 text-orange-400 text-[10px] font-black tracking-[0.3em] uppercase mb-6 font-mono glow-text">
              AWS Advance Partner
            </div>
            <h2 className="text-5xl lg:text-7xl font-black text-text-primary mb-8 font-display tracking-tighter uppercase leading-[0.9]">
              Excelencia en <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400 inline-block py-2" style={{ filter: "drop-shadow(0 0 8px rgba(251, 146, 60, 0.4))" }}>AWS Cloud</span>
            </h2>
            <p className="text-xl text-text-secondary leading-relaxed font-light mb-10 max-w-xl">
              Somos especialistas en transformar infraestructuras tradicionales en ecosistemas modernos impulsados por AWS. Desde la arquitectura hasta el licenciamiento, guiamos su ruta hacia la nube con precisión quirúrgica.
            </p>
            
            <div className="space-y-6">
              {["Well-Architected Framework", "Cost Optimization", "Enterprise Agreements"].map((item, i) => (
                <div key={i} className="flex items-center gap-4 text-text-primary font-bold tracking-tight">
                  <div className="w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center border border-orange-500/30">
                    <CheckCircle2 size={14} className="text-orange-400" />
                  </div>
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {cloudFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-8 rounded-[2rem] border-accent-blue/10 hover:border-orange-500/30 transition-all group"
              >
                <div className="w-14 h-14 rounded-2xl bg-orange-500/10 flex items-center justify-center mb-6 border border-orange-500/20 group-hover:scale-110 transition-transform">
                  <feature.icon size={28} className="text-orange-400" />
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-3 tracking-tight">{feature.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CloudExcellence;
