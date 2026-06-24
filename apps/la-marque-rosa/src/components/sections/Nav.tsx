// src/components/sections/Nav.tsx
import { Flower2 } from "lucide-react";

// Mantenemos la constante aquí dentro ya que solo la usa este componente por ahora
const BOOKING_URL = "#reservar";

export default function Nav() {
  return (
    <header className="absolute top-0 left-0 right-0 z-30">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-12">
        <a href="#top" className="flex items-center gap-2 text-white">
          <Flower2 className="h-5 w-5 text-gold" />
          <span className="font-display text-xl tracking-wide">La Marque Rosa</span>
        </a>
        <nav className="hidden items-center gap-8 text-sm text-white/90 md:flex">
          <a href="#filosofia" className="hover:text-gold transition-colors">Nosotras</a>
          <a href="#servicios" className="hover:text-gold transition-colors">Servicios</a>
          <a href="#testimonios" className="hover:text-gold transition-colors">Testimonios</a>
          <a href="#contacto" className="hover:text-gold transition-colors">Contacto</a>
        </nav>
        <a
          href={BOOKING_URL}
          className="hidden rounded-sm border border-white/40 px-5 py-2 text-xs uppercase tracking-[0.2em] text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-foreground md:inline-block"
        >
          Reservar
        </a>
      </div>
    </header>
  );
}