import { Sparkles } from "lucide-react";
import heroImg from "@/assets/hero-salon.jpg"; 
import Nav from "./Nav"; 
// 🌟 1. Importamos cn para manejar las clases condicionales
import { cn } from "@/lib/utils"; 
// 🌟 2. Importamos el componente de animación
import { HeroAnimate } from "@/components/ui/HeroAnimate"; 

const BOOKING_URL = "#reservar";

export default function Hero() {
  return (
    <HeroAnimate>
      {(showEffects) => {
        // ⏱️ Función auxiliar para meter el retraso (delay) a cada elemento
        const getAnimateClasses = (delay: string) => 
          cn(
            "transition-all duration-1000 transform",
            showEffects ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
            delay
          );

        return (
          <section id="top" className="relative min-h-[100svh] w-full overflow-hidden">
            <img
              src={heroImg}
              alt="Interior elegante del centro de belleza La Marque Rosa"
              className="absolute inset-0 h-full w-full object-cover"
              width={1920}
              height={1280}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/25 to-black/55" />
            
            <Nav />

            <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-6 pt-32 pb-20 lg:px-12">
              <div className="max-w-3xl text-white">
                
                {/* 🌟 Animación elemento 1: El subtítulo de la ubicación */}
                <div className={getAnimateClasses("delay-100")}>
                  <div className="mb-6 flex items-center gap-3 text-gold">
                    <span className="gold-divider" />
                    <span className="text-xs uppercase tracking-[0.35em]">Santiago de los Caballeros</span>
                  </div>
                </div>

                {/* 🌟 Animación elemento 2: El título principal (usando tu rosa blush para el contraste) */}
                <h1 className={cn("font-display text-5xl leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl", getAnimateClasses("delay-300"))}>
                  Eleva tu belleza,
                  <span className="block italic text-gold">redefine tu bienestar.</span>
                </h1>

                {/* 🌟 Animación elemento 3: El párrafo descriptivo */}
                <p className={cn("mt-6 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg", getAnimateClasses("delay-500"))}>
                  Tu centro de belleza y estética de confianza. Dedicadas a realzar tu belleza natural con
                  tratamientos de vanguardia y atención completamente personalizada.
                </p>

                {/* 🌟 Animación elemento 4: Los botones de acción */}
                <div className={cn("mt-10 flex flex-wrap items-center gap-4", getAnimateClasses("delay-700"))}>
                  {/* 🌟 BOTÓN DEL HERO CON DESTELLO DE CRISTAL EN DOBLE DIRECCIÓN (IDA Y VUELTA) */}
<a
  href="tel:+18092768888"
  className="relative inline-flex items-center justify-center gap-3 rounded-full bg-primary px-8 py-5 text-sm uppercase tracking-[0.35em] text-primary-foreground shadow-md transition-all duration-300 hover:bg-rose-deep active:scale-95 transform-gpu overflow-hidden group whitespace-nowrap"
>
  {/* Capa del Destello Metálico Inclinado */}
  <div 
    className="absolute inset-0 pointer-events-none z-0 transform-gpu"
    style={{
      background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.0) 25%, rgba(255,255,255,0.35) 50%, rgba(255,255,255,0.0) 75%, transparent 100%)',
      width: '200%',
      height: '100%',
      top: '0',
      left: '-150%',
      transform: 'skewX(-25deg)',
      animation: 'doble-barrido 6s infinite ease-in-out', // Ciclo total de 6 segundos para dar espacio a la ida y vuelta
    }}
  />

  {/* Texto del Hero asegurado en el eje Z */}
  <span className="relative z-10 flex items-center gap-3 font-medium">
    Reservar mi cita
    <Sparkles className="h-4 w-4 shrink-0" />
  </span>

  {/* ⚡ Keyframes optimizados para el efecto de rebote de luz */}
  <style dangerouslySetInnerHTML={{ __html: `
    @keyframes doble-barrido {
      0% {
        left: -150%;
      }
      20% {
        left: 150%; /* 1. Viaje de Ida: Izquierda a Derecha rápido */
      }
      30% {
        left: 150%; /* Micro-pausa en la derecha */
      }
      50% {
        left: -150%; /* 2. Viaje de Vuelta: Derecha a Izquierda */
      }
      100% {
        left: -150%; /* Pausa larga de descanso antes de reiniciar */
      }
    }
  `}} />
</a>
                  <a
                    href="#servicios"
                    className="text-sm uppercase tracking-[0.2em] text-white underline-offset-8 hover:text-gold hover:underline"
                  >
                    Ver nuestros servicios →
                  </a>
                </div>

              </div>
            </div>
          </section>
        );
      }}
    </HeroAnimate>
  );
}