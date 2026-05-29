import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="bg-brand-deep text-text-primary pt-32 pb-10 border-t border-accent-blue/10 relative overflow-hidden transition-colors duration-300">
      {/* Glow Effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent-blue/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="relative">
                <Logo />
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-black tracking-tighter font-display uppercase italic text-text-primary">iRoute</span>
                <span className="text-[10px] font-black tracking-[0.4em] text-accent-blue font-mono uppercase leading-tight ml-1">Solutions</span>
              </div>
            </div>
            <p className="text-text-secondary leading-relaxed text-sm font-light">
              Líderes en transformación digital en Ecuador. Más de dos décadas impulsando el éxito empresarial mediante inteligencia de datos y movilidad avanzada en la nube.
            </p>
            <div className="flex gap-3">
              {[Facebook, Linkedin, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 rounded-xl bg-accent-blue/5 flex items-center justify-center hover:bg-accent-blue hover:text-white transition-all border border-accent-blue/10 hover:-translate-y-1">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold text-accent-blue uppercase tracking-widest mb-10 font-mono">Compañía</h4>
            <ul className="space-y-5 text-text-secondary text-sm">
              <li><a href="#" className="hover:text-accent-blue transition-colors flex items-center gap-2 group">Inicio <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" /></a></li>
              <li><a href="#servicios" className="hover:text-accent-blue transition-colors flex items-center gap-2 group">Nuestros Servicios <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" /></a></li>
              <li><a href="#nosotros" className="hover:text-accent-blue transition-colors flex items-center gap-2 group">Sobre Nosotros <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" /></a></li>
              <li><a href="#" className="hover:text-accent-blue transition-colors flex items-center gap-2 group">Trabaja con nosotros <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" /></a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold text-accent-blue uppercase tracking-widest mb-10 font-mono">Soporte</h4>
            <ul className="space-y-5 text-text-secondary text-sm">
              <li className="hover:text-accent-blue transition-colors cursor-pointer">Documentación API</li>
              <li className="hover:text-accent-blue transition-colors cursor-pointer">Estado del Sistema</li>
              <li className="hover:text-accent-blue transition-colors cursor-pointer">Centro de Ayuda</li>
              <li className="hover:text-accent-blue transition-colors cursor-pointer">Portal de Clientes</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold text-accent-blue uppercase tracking-widest mb-10 font-mono">Ubicación</h4>
            <ul className="space-y-6 text-text-secondary text-sm">
              <li className="flex gap-4">
                <div className="bg-accent-blue/10 p-2 rounded-lg h-fit text-accent-blue">
                  <MapPin size={18} />
                </div>
                <span>Av. de las Américas, Guayaquil, Ecuador</span>
              </li>
              <li className="flex gap-4">
                <div className="bg-accent-blue/10 p-2 rounded-lg h-fit text-accent-blue">
                  <Phone size={18} />
                </div>
                <span>+593 4 5021444</span>
              </li>
              <li className="flex gap-4">
                <div className="bg-accent-blue/10 p-2 rounded-lg h-fit text-accent-blue">
                  <Mail size={18} />
                </div>
                <span>info@iroute.com.ec</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-accent-blue/10 pt-10 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.2em] font-mono text-text-secondary opacity-50">
          <p>© 2024 IROUTE SOLUTIONS S.A. TODOS LOS DERECHOS RESERVADOS.</p>
          <div className="flex gap-8 mt-6 md:mt-0">
            <a href="#" className="hover:text-accent-blue transition-colors">POLÍTICAS DE PRIVACIDAD</a>
            <a href="#" className="hover:text-accent-blue transition-colors">LEGAL</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
