"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Industries from "@/components/Industries";
import CloudExcellence from "@/components/CloudExcellence";
import AboutUs from "@/components/AboutUs";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import TechStack from "@/components/TechStack";
import { motion, useScroll, useSpring } from "motion/react";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-brand-deep font-sans selection:bg-accent-blue selection:text-white">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-accent-blue origin-[0%] z-[60] shadow-[0_0_15px_rgba(0,102,255,0.8)]"
        style={{ scaleX }}
      />
      
      <Header />
      <main>
        <Hero />
        
        {/* Floating WhatsApp */}
        <a 
          href="https://wa.me/593999999999" 
          target="_blank" 
          rel="noopener noreferrer"
          className="fixed bottom-8 right-8 z-[70] bg-green-500 text-white p-4 rounded-full shadow-[0_0_30px_rgba(34,197,94,0.4)] hover:scale-110 transition-transform active:scale-95 flex items-center justify-center border-4 border-white/10"
          title="Contactanos por WhatsApp"
        >
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.309 1.656zm6.222-4.032c1.503.893 3.129 1.364 4.791 1.365h.004c5.427 0 9.845-4.418 9.848-9.848.002-2.63-1.022-5.101-2.884-6.963-1.862-1.862-4.334-2.887-6.963-2.887-5.43 0-9.848 4.418-9.851 9.848-.001 1.73.453 3.419 1.317 4.91l-.995 3.635 3.729-.978zm10.514-6.841c-.267-.134-1.579-.779-1.824-.867-.245-.089-.423-.134-.599.134-.176.267-.681.867-.834 1.047-.152.179-.306.201-.573.067-.267-.134-1.127-.415-2.147-1.326-.793-.707-1.329-1.581-1.485-1.848-.156-.267-.017-.411.117-.544.121-.12.267-.312.4-.467.133-.156.178-.267.267-.445.089-.178.045-.334-.022-.467-.067-.134-.599-1.446-.823-1.98-.218-.527-.438-.456-.599-.464-.156-.008-.334-.01-.512-.01s-.467.067-.712.334c-.245.267-.935.912-.935 2.225 0 1.313.957 2.58 1.091 2.757.134.178 1.884 2.876 4.564 4.03.637.274 1.135.438 1.523.561.64.204 1.222.175 1.682.107.513-.076 1.579-.645 1.802-1.268.223-.623.223-1.157.156-1.268-.067-.111-.245-.178-.512-.312z" />
          </svg>
        </a>
        
        {/* Confidence Section / Clients */}
        <section className="py-24 bg-brand-blue/30 backdrop-blur-md border-y border-accent-blue/10 relative z-10 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-center text-xs font-bold text-accent-blue uppercase tracking-[0.4em] mb-16 font-mono glow-text">Aliados Estratégicos Globales</p>
            <div className="flex flex-wrap justify-center items-center gap-x-20 gap-y-12 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-1000">
               <span className="text-4xl font-black text-text-primary tracking-tighter font-display italic transition-colors">PHARMACY'S</span>
               <span className="text-4xl font-black text-text-primary tracking-widest font-display transition-colors">SUPERMAXI</span>
               <span className="text-4xl font-black text-text-primary tracking-tighter font-display uppercase transition-colors">TIA</span>
               <span className="text-4xl font-black text-text-primary tracking-tight font-display italic text-shadow-strong transition-colors">HOLCIM</span>
               <span className="text-4xl font-black text-text-primary tracking-widest font-display transition-colors">MOVISTAR</span>
            </div>
          </div>
        </section>

        <Services />
        <Industries />
        <CloudExcellence />
        <AboutUs />
        <TechStack />
        
        {/* Banner Section */}
        <section className="py-40 bg-brand-deep relative overflow-hidden">
          <div className="absolute inset-0 bg-accent-blue/10 mix-blend-overlay opacity-30 pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="glass-card rounded-[3rem] p-20 border-accent-blue/10 flex flex-col lg:flex-row items-center justify-between gap-16 relative z-10 hover:border-accent-blue/20 transition-all duration-500">
              <div className="text-center lg:text-left max-w-2xl">
                <h2 className="text-5xl lg:text-6xl font-black text-text-primary mb-8 font-display leading-tight tracking-tighter uppercase italic">
                  ¿Listo para escalar su <br />
                  <span className="text-accent-blue shadow-sm [text-shadow:_0_1px_2px_rgba(0,0,0,0.1)]">visión digital?</span>
                </h2>
                <p className="text-text-secondary text-xl leading-relaxed font-light font-sans">
                  Agende una consultoría estratégica hoy mismo. Nuestro equipo de ingenieros diseñará la ruta tecnológica que su empresa necesita para liderar el mercado.
                </p>
              </div>
              <button className="whitespace-nowrap px-14 py-7 bg-accent-blue text-white rounded-[2rem] font-bold text-2xl hover:scale-105 active:scale-95 transition-all shadow-lg hover:shadow-accent-blue/40 uppercase tracking-widest font-display">
                CONTACTAR AHORA
              </button>
            </div>
          </div>
        </section>

        <Testimonials />

      </main>
      <Footer />
    </div>
  );
}
