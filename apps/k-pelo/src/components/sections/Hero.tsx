import { HeroAnimate } from "../ui/HeroAnimate";
import { MessageCircle } from "lucide-react";
import heroImg from "@/assets/hero.jpg";

const WA = "https://wa.me/18092767878";

export function Hero() {
  return (
    <HeroAnimate>
      {(showEffects) => (
        <section
          id="top"
          className="relative isolate overflow-hidden min-h-screen flex items-center justify-center"
          >
          {/* Video de fondo */}
          <video
  autoPlay
  loop
  muted
  playsInline
  preload="metadata"
  className="hidden md:block absolute inset-0 w-full h-full object-cover"
>
  <source src="/videos/k-pelo-Desktop.mp4" type="video/mp4" />

  <img
    src={heroImg}
    alt="Estilista profesional trabajando en K-Pelo Center"
    className="w-full h-full object-cover hidden md:block"
  />
</video>

{/* Mobile */}
<video
  autoPlay
  loop
  muted
  playsInline
  preload="metadata"
  className="block md:hidden absolute inset-0 w-full h-full object-cover"
>
  <source src="/videos/k-pelo.mp4" type="video/mp4" />

  <img
    src={heroImg}
    alt="Estilista profesional trabajando en K-Pelo Center"
    className="w-full h-full object-cover"
  />
</video>

{/* Overlay */}
<div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
          {/* Contenido */}
          <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white pt-20">
            <div
              className={`inline-flex items-center gap-2 px-4 py-1.5 border border-gold/40 text-gold text-xs tracking-[0.3em] uppercase mb-8 transition-all duration-700 ease-out transform ${
                showEffects
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-4"
              }`}
            >
              <span />
              ✦ Salón Premium en Santiago ✦
            </div>

            <h1
              className={`font-display text-5xl md:text-7xl lg:text-8xl font-light leading-[1.05] mb-6 transition-all duration-700 ease-out delay-100 transform ${
                showEffects
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
            >
              Transforma tu Estilo en
              <br />
              <span className="italic text-gradient-gold font-medium">
                K-Pelo Center
              </span>
            </h1>

            <p
              className={`text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 font-light transition-all duration-700 ease-out delay-200 transform ${
                showEffects
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              Expertos en Belleza y Cuidado Capilar en el corazón de Santiago.
            </p>

            <div
              className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 ease-out delay-300 transform ${
                showEffects
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-2"
              }`}
            >
              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 bg-gold text-foreground px-8 py-4 font-medium hover:shadow-gold transition-all hover:-translate-y-0.5"
              >
                <MessageCircle className="w-5 h-5" aria-hidden="true" />
                Agendar Cita por WhatsApp
              </a>

              <a
                href="#servicios"
                className="inline-flex items-center gap-3 border border-white/40 text-white px-8 py-4 font-medium hover:bg-white hover:text-foreground transition-all"
              >
                Ver Nuestros Servicios
              </a>
            </div>

            <div
              className={`mt-16 flex items-center justify-center gap-2 text-sm text-white/70 transition-all duration-700 ease-out delay-500 ${
                showEffects
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-95"
              }`}
            >
             

              <span className="ml-2">⭐⭐⭐⭐ 4.5 estrellas</span>
            </div>
          </div>
        </section>
      )}
    </HeroAnimate>
  );
}