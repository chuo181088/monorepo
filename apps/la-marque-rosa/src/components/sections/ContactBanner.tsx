// src/components/sections/ContactBanner.tsx
import { Flower2, Sparkles } from "lucide-react";
import { ScrollAnimate } from "@/components/ui/ScrollAnimate";

export default function ContactBanner() {
  return (
    <section id="reservar" className="relative overflow-hidden bg-blush py-24 lg:py-32">
      {/* Orbes de luz de fondo */}
      <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-primary/40 blur-3xl" />
      <div className="absolute -right-24 -bottom-24 h-96 w-96 rounded-full bg-gold/20 blur-3xl" />
      
      <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-12">
        <ScrollAnimate 
          once={false} 
          variant="counter" 
          delay={100} 
          className="relative mx-auto max-w-3xl px-6 text-center lg:px-12 [transition-duration:1200ms]! ease-[cubic-bezier(0.175,0.885,0.32,1.1)] [transform:translateY(24px)] data-[state=visible]:[transform:translateY(0)]"
        >
          <Flower2 className="mx-auto h-10 w-10 text-gold" />
          <h2 className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl">
            ¿Lista para <span className="italic text-rose-deep">consentirte?</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Tu momento de relajación está a solo un clic de distancia. Reserva tu cita de forma fácil y
            rápida, y prepárate para vivir la experiencia La Marque Rosa. {/* Corregido 'rápidas' */}
          </p>
          
          {/* 🌟 BOTÓN DE CONVERSIÓN CON PULSO DE DESTELLO RADIAL PREMIUM */}
          <a
            href="tel:+18092768888"
            className="mt-10 inline-flex items-center justify-center gap-3 rounded-sm bg-foreground px-6 py-5 sm:px-10 text-sm uppercase tracking-[0.3em] text-background shadow-xl transition-all duration-300 hover:bg-rose-deep active:scale-95 transform-gpu whitespace-nowrap w-full sm:w-auto overflow-hidden relative group"
          >
            {/* El Destello Radial (Acelerado en GPU y con mix-blend para fundirse con el fondo) */}
            <div 
              className="absolute inset-0 pointer-events-none z-0 mix-blend-screen opacity-0 transform-gpu"
              style={{
                background: 'radial-gradient(circle, rgba(255, 255, 255, 0.35) 0%, transparent 70%)',
                animation: 'latido-veloz 1.6s infinite cubic-bezier(0.25, 1, 0.5, 1)',
              }}
            />

            {/* Texto e icono obligados a estar por encima del destello */}
            <span className="relative z-10 flex items-center gap-3">
              Reservar ahora
              <Sparkles className="h-4 w-4 shrink-0" />
            </span>
          </a>

          <p className="mt-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            O llámanos directamente al +1 809-276-8888
          </p>

          {/* ⚡ Keyframes inyectados de forma segura para evitar re-renders pesados */}
          <style dangerouslySetInnerHTML={{ __html: `
            @keyframes latido-veloz {
              0% {
                transform: scale(0.1);
                opacity: 0;
              }
              20% {
                opacity: 1;
              }
              65% {
                opacity: 0;
              }
              100% {
                transform: scale(2.2);
                opacity: 0;
              }
            }
          `}} />

        </ScrollAnimate>
      </div>
    </section>
  );
}