import { useState } from "react";
import { createPortal } from "react-dom"; // IMPORTANTE: Para el Portal
import { MessageCircle, Menu, X } from "lucide-react";

const WA = "https://wa.me/18092767878";

// Un sub-componente pequeño para los enlaces del menú móvil (para limpieza)
interface MenuLinkProps {
  href: string;
  onClick: () => void;
  children: React.ReactNode;
}

const MenuLink: React.FC<MenuLinkProps> = ({ href, onClick, children }) => (
  <a
    href={href}
    onClick={onClick}
    className="font-display text-2xl hover:text-gold transition-colors tracking-wide animate-fade-in-down" // Animación sutil al aparecer
  >
    {children}
  </a>
);

// EL COMPONENTE DEL PORTAL: Esto es lo que va a renderizar FUERA del Nav
const MobileMenuPortal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return createPortal(
    <div
      className="fixed inset-0 bg-[#0a0a0a] md:hidden flex flex-col items-center justify-center gap-10 z-[100] transition-opacity duration-300 ease-in-out px-10 pt-24 text-white"
      role="dialog"
      aria-modal="true"
    >
      <MenuLink href="#servicios" onClick={onClose}>Servicios</MenuLink>
      <MenuLink href="#galeria" onClick={onClose}>Galería</MenuLink>
      <MenuLink href="#testimonios" onClick={onClose}>Testimonios</MenuLink>
      <MenuLink href="#contacto" onClick={onClose}>Contacto</MenuLink>

      {/* BOTÓN CON ANIMACIÓN DE ENTRADA Y DESTELLO CONTINUO */}
      <a
        href={WA}
        target="_blank"
        rel="noopener noreferrer"
        className="
          relative
          overflow-hidden
          mt-6 
          flex 
          items-center 
          justify-center
          gap-2 
          w-full
          max-w-[280px]
          border 
          border-gold/50 
          px-8 
          py-4 
          text-sm 
          uppercase 
          tracking-wider 
          font-semibold 
          transition-all 
          duration-300 
          hover:border-gold 
          hover:bg-gold/10
          
          /* Animación de entrada: aparece subiendo suavemente con un leve delay */
          animate-in 
          fade-in 
          slide-in-from-bottom-4 
          duration-500 
          delay-300 
          fill-mode-both
        "
      >
        {/* El destello infinito integrado */}
        <span className="absolute inset-0 overflow-hidden pointer-events-none">
          <span
            className="
              opacity-40
              absolute
              top-0
              h-full
              w-[100%]
              bg-gradient-to-r
              from-transparent
              via-yellow-400/30
              to-transparent
              -skew-x-12
              animate-shine-loop
            "
          />
        </span>

        <MessageCircle className="relative z-10 w-4 h-4 text-gold" aria-hidden="true" />
        <span className="relative z-10 text-gradient-gold">
          Agendar Cita
        </span>
      </a>
    </div>,
    document.body
  );
};


export function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // Bloqueamos/desbloqueamos el scroll de la página para evitar scroll detrás del menú
    document.body.style.overflow = !isOpen ? "hidden" : "unset";
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = "unset"; // Aseguramos reponer scroll
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-[101] backdrop-blur-md bg-background/70 border-b border-border/40"> {/* Aumentado z-index del Nav para estar por encima del Portal si fuera necesario cerrar/abrir */}
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo Textual */}
        <a href="#top" className="flex items-baseline gap-1 relative z-50">
          <span className="font-display text-2xl font-semibold tracking-tight">K-Pelo</span>
          <span className="text-gold font-display text-2xl">·</span>
          <span className="font-display text-2xl font-light">Center</span>
        </a>

        {/* Menú de Navegación en Escritorio (PC) */}
        <div className="hidden md:flex items-center gap-8 text-sm">
          <a href="#servicios" className="hover:text-gold transition-colors">Servicios</a>
          <a href="#galeria" className="hover:text-gold transition-colors">Galería</a>
          <a href="#testimonios" className="hover:text-gold transition-colors">Testimonios</a>
          <a href="#contacto" className="hover:text-gold transition-colors">Contacto</a>
        </div>

        {/* Botón Agendar en Escritorio (PC) */}
        <a href={WA} target="_blank" rel="noopener noreferrer"
          className="hidden sm:inline-flex items-center gap-2 bg-foreground text-background px-5 py-2.5 text-sm font-medium hover:bg-gold/80 hover:text-foreground transition-colors">
          <MessageCircle className="w-4 h-4" aria-hidden="true" /> Agendar
        </a>

        {/* BOTÓN ESTILO MENU (Solo visible en Celular) */}
        <button
  onClick={toggleMenu}
  className="md:hidden group relative z-50 transition-colors"
  aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
>
  {/* EL CUADRO CON FONDO GOLD: bg-gold/20 (o bg-gold si lo quieres sólido completo) */}
  <div className="w-9 h-9 bg-gold/100 border border-gold/60 flex items-center justify-center group-hover:bg-gold group-hover:border-gold transition-all duration-300">
    
    {/* EL ICONO: En blanco para un contraste perfecto */}
    {isOpen 
      ? <X className="w-6 h-6 text-white" /> 
      : <Menu className="w-6 h-6 text-white" />
    }
  </div>
</button>
      </div>

      {/* RENDERIZAMOS EL PORTAL SI ESTÁ ABIERTO */}
      {isOpen && <MobileMenuPortal onClose={closeMenu} />}
    </nav>
  );
}