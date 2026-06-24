import { useState } from "react";
import { Menu, X, Scissors } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { href: "#servicios", label: "Servicios" },
  { href: "#nosotras", label: "Sobre Nosotras" },
  { href: "#testimonios", label: "Testimonios" },
  { href: "#contacto", label: "Contacto" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/85 backdrop-blur-md">
      <div className="container mx-auto flex h-20 items-center justify-between px-6">
        <a href="#top" className="flex items-center gap-2">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-gold text-gold-foreground shadow-elegant">
            <Scissors className="h-5 w-5" />
          </span>
          <span className="font-serif text-xl leading-tight">
            <span className="block text-foreground">Centro de Belleza</span>
            <span className="block text-sm tracking-[0.3em] text-gold">YIRA</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-gold"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button asChild variant="gold" size="lg">
            <a href="#reservar">Reservar Cita</a>
          </Button>
        </div>

        {/* Botón Hamburguesa Móvil */}
        <button
          className="md:hidden p-2 text-foreground active:scale-95 transition-transform"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* 📱 MENÚ DESPLEGABLE MÓVIL */}
      <div
        className={cn(
          "absolute top-full left-0 w-full border-b border-border/40 bg-background/95 backdrop-blur-md md:hidden transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] transform-gpu",
          open 
            ? "opacity-100 translate-y-0 pointer-events-auto" 
            : "opacity-0 -translate-y-4 pointer-events-none",
        )}
      >
        <div className="container mx-auto flex flex-col gap-4 px-6 py-6">
          {links.map((l, index) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={cn(
                "text-base font-medium text-foreground py-1 transition-all duration-500",
                open ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"
              )}
              style={{
                transitionDelay: `${open ? index * 40 : 0}ms`
              }}
            >
              {l.label}
            </a>
          ))}

          {/* ⚡ BOTÓN DE RESERVA CON DESTELLO INTERNO DIAGONAL AUTOMÁTICO */}
          <Button 
            asChild 
            variant="gold" 
            size="lg" 
            onClick={() => setOpen(false)} 
            className="relative mt-2 w-full overflow-hidden rounded-md transform-gpu transition-all active:scale-[0.98]"
          >
            <a href="#reservar" className="inline-flex items-center justify-center">
              
              {/* 🌊 HAZ DE LUZ DIAGONAL: Cruza el botón dorado de forma continua */}
              <div 
                className="absolute inset-0 pointer-events-none z-0 transform-gpu"
                style={{
                  background: 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.4) 50%, transparent 100%)',
                  width: '200%',
                  height: '100%',
                  top: '0',
                  left: '-100%',
                  transform: 'skewX(-20deg)',
                  animation: 'barrido-shimmer 3.5s infinite ease-in-out',
                }}
              />

              {/* Texto protegido en la capa superior */}
              <span className="relative z-10 font-semibold">
                Reservar Cita
              </span>
            </a>
          </Button>
        </div>
      </div>

      {/* ⚡ Animación CSS Nativa para el destello interno del botón */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes barrido-shimmer {
          0% { left: -150%; }
          30% { left: 150%; }
          100% { left: 150%; }
        }
      `}} />
    </header>
  );
}