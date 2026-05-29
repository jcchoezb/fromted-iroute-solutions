"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import Logo from "./Logo";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLightMode, setIsLightMode] = useState(false);

  const toggleTheme = () => {
    setIsLightMode(!isLightMode);
    document.documentElement.classList.toggle("light-mode");
  };

  const navLinks = [
    { name: "INICIO", href: "#" },
    { name: "SERVICIOS", href: "#servicios" },
    { name: "INDUSTRIAS", href: "#industrias" },
    { name: "CLOUD AWS", href: "#cloud" },
    { name: "NOSOTROS", href: "#nosotros" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-brand-deep/80 backdrop-blur-2xl border-b border-accent-blue/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <div className="flex items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-4 group cursor-pointer"
            >
              <div className="relative">
                <Logo />
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-black tracking-tighter text-text-primary font-display uppercase italic leading-none text-shadow-strong dark-mode-logo-text">iRoute</span>
                <span className="text-[10px] font-black tracking-[0.4em] text-accent-blue font-mono uppercase leading-tight ml-1 glow-text">Solutions</span>
              </div>
            </motion.div>
          </div>
          
          <nav className="hidden md:flex space-x-12 items-center">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-text-secondary hover:text-accent-blue transition-all font-black text-[10px] tracking-[0.3em] font-mono hover:glow-text"
              >
                {link.name}
              </a>
            ))}
            
            <button 
              onClick={toggleTheme}
              className="p-2.5 rounded-xl bg-accent-blue/10 border border-accent-blue/20 text-accent-blue hover:bg-accent-blue hover:text-white transition-all shadow-lg shadow-accent-blue/5"
              aria-label="Toggle Theme"
            >
              {isLightMode ? <Moon size={20} /> : <Sun size={20} />}
            </button>

            <button className="bg-accent-blue/10 border border-accent-blue/40 text-text-primary px-8 py-2.5 rounded-xl font-black text-xs tracking-widest hover:bg-accent-blue hover:text-white hover:shadow-[0_0_30px_rgba(var(--accent-blue),0.5)] transition-all font-mono uppercase text-shadow-strong">
              CONSULTORÍA
            </button>
          </nav>

          <div className="flex items-center gap-4 md:hidden">
            <button 
              onClick={toggleTheme}
              className="p-2 text-accent-blue"
            >
              {isLightMode ? <Moon size={24} /> : <Sun size={24} />}
            </button>
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-text-primary hover:text-accent-blue transition-colors"
            >
               {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-brand-deep border-b border-accent-blue/10 overflow-hidden"
          >
            <div className="px-4 py-8 space-y-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-xl font-black text-text-primary/70 hover:text-accent-blue transition-colors uppercase tracking-widest font-display italic"
                >
                  {link.name}
                </a>
              ))}
              <button className="w-full bg-accent-blue text-white py-5 rounded-2xl font-black text-lg tracking-widest font-mono uppercase shadow-lg shadow-accent-blue/20">
                HABLAR CON EXPERTO
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
