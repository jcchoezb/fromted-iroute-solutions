"use client";

import { motion } from "motion/react";

const technologies = [
  { name: "Mobile", tech: ["Swift", "Kotlin", "React Native", "Flutter"] },
  { name: "Backend", tech: ["Node.js", "Java", "Python", "Go"] },
  { name: "Database", tech: ["Oracle", "PostgreSQL", "MongoDB", "Redis"] },
  { name: "Cloud", tech: ["Azure", "AWS", "Google Cloud"] },
  { name: "BI", tech: ["PowerBI", "Tableau", "Databricks"] }
];

const TechStack = () => {
  return (
    <section className="py-32 bg-brand-deep border-t border-accent-blue/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-tech opacity-5 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="lg:w-1/3">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl lg:text-5xl font-black text-text-primary mb-8 font-display tracking-tighter leading-tight uppercase underline decoration-accent-blue decoration-4 underline-offset-8">Ecosistema <br /> Tecnológico</h2>
              <p className="text-text-secondary leading-relaxed text-lg font-light">
                Implementamos estándares internacionales utilizando las tecnologías más robustas del mercado global, garantizando escalabilidad y respaldo continuo.
              </p>
            </motion.div>
          </div>
          
          <div className="lg:w-2/3 grid grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {technologies.map((group, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="glass-card p-8 rounded-[2rem] border-accent-blue/10 hover:border-accent-blue/30 transition-all group"
              >
                <h4 className="text-accent-blue font-black mb-6 uppercase tracking-[0.2em] text-xs font-mono glow-text">{group.name}</h4>
                <div className="flex flex-wrap gap-2.5">
                  {group.tech.map((t, i) => (
                    <span key={i} className="text-sm font-bold text-text-primary bg-accent-blue/5 px-3 py-1.5 rounded-xl border border-accent-blue/10 group-hover:bg-accent-blue/10 transition-colors uppercase font-mono tracking-tighter">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
