"use client";

import { motion } from "motion/react";
import { Building2, Landmark, Tractor, ShoppingCart, BarChart3, Users } from "lucide-react";

const industrySectors = [
  {
    title: "Banca y Finanzas",
    description: "Soluciones de alta transaccionalidad, seguridad bancaria y banca móvil diseñada para millones de usuarios concurrentes.",
    icon: Landmark,
    image: "https://images.unsplash.com/photo-1550565118-3a14e8d0386f?auto=format&fit=crop&q=80&w=800",
    tags: ["Core Bancario", "App Móvil", "Cumplimiento"]
  },
  {
    title: "Agro y Manufactura",
    description: "Optimización de la cadena de suministro mediante captura de datos en campo y monitoreo de producción en tiempo real.",
    icon: Tractor,
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80&w=800",
    tags: ["IoT", "Logística", "Gestión ERP"]
  },
  {
    title: "Retail y Distribución",
    description: "Inteligencia de negocios aplicada al consumo masivo, optimizando inventarios y rutas de distribución eficientes.",
    icon: ShoppingCart,
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800",
    tags: ["Predicción Demanda", "Puntos de Venta", "Ecommerce"]
  }
];

const Industries = () => {
  return (
    <section id="industrias" className="py-32 bg-brand-blue relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-5 py-2 rounded-xl bg-accent-blue/10 border border-accent-blue/30 text-accent-blue text-[10px] font-black tracking-[0.3em] uppercase mb-6 font-mono glow-text"
          >
            Sectores Verticales
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-black text-text-primary sm:text-7xl font-display tracking-tighter"
          >
            EXPERIENCIA POR <span className="text-accent-blue">INDUSTRIA</span>
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {industrySectors.map((sector, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative h-[500px] rounded-[3rem] overflow-hidden border border-accent-blue/10 hover:border-accent-blue/30 transition-all duration-700"
            >
              <img 
                src={sector.image} 
                alt={sector.title}
                className="absolute inset-0 w-full h-full object-cover grayscale opacity-30 group-hover:grayscale-0 group-hover:scale-110 group-hover:opacity-60 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-deep via-brand-deep/80 to-transparent" />
              
              <div className="absolute inset-0 p-12 flex flex-col justify-end">
                <div className="w-16 h-16 rounded-2xl bg-accent-blue/20 flex items-center justify-center mb-6 border border-accent-blue/30 group-hover:scale-110 transition-transform duration-500">
                  <sector.icon size={32} className="text-accent-blue" />
                </div>
                <h3 className="text-4xl font-black text-text-primary mb-4 tracking-tighter uppercase font-display italic">
                  {sector.title}
                </h3>
                <p className="text-text-secondary text-lg leading-relaxed mb-8 font-light line-clamp-3">
                  {sector.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  {sector.tags.map((tag, i) => (
                    <span key={i} className="text-[10px] font-black text-accent-blue bg-accent-blue/10 px-3 py-1.5 rounded-lg border border-accent-blue/20 uppercase tracking-widest font-mono">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
