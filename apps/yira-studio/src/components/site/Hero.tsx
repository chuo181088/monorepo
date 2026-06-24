import { Button } from "@/components/ui/button";
import { Sparkles, Star } from "lucide-react";
import heroImg from "@/assets/hero-salon.jpg";
import { HeroAnimate } from "@/components/ui/HeroAnimate"; // Asegúrate de que la ruta de importación sea correcta

export default function Hero() {
  return (
    <HeroAnimate>
      {(showEffects) => (
        <section id="top" className="relative isolate overflow-hidden">
          {/* 🖼️ FONDO: Se desenfoca o aclara según el estado del scroll */}
          <div className="absolute inset-0 -z-10">
            <img
              src={heroImg}
              alt="Interior elegante del Centro de Belleza Yira en Santiago"
              className={`h-full w-full object-cover transform-gpu transition-all duration-[1800ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
                showEffects 
                  ? "blur-0 scale-100 opacity-100" 
                  : "blur-[20px] scale-105 opacity-30"
              }`}
              width={1920}
              height={1080}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/30" />
          </div>

          <div className="container mx-auto grid min-h-[88vh] grid-cols-1 items-center px-6 py-24 lg:grid-cols-2">
            <div className="max-w-xl">
              
              {/* 🌟 CONTENIDO: Subida escalonada y fluida controlada por showEffects */}
              <div className="flex flex-col transform-gpu">
                
                {/* 1. Tag de Ubicación */}
                <span className={`inline-flex w-fit items-center gap-2 rounded-full border border-gold/30 bg-rose-soft/60 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-gold transform-gpu transition-all duration-[2000ms] ease-[cubic-bezier(0.16,1,0.3,1)] delay-[100ms] ${
                  showEffects ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}>
                  <Sparkles className="h-3.5 w-3.5" />
                  Santiago de los Caballeros
                </span>

                {/* 2. Título Principal */}
                <h1 className={`mt-6 font-serif text-5xl leading-[1.05] text-foreground md:text-6xl lg:text-7xl transform-gpu transition-all duration-[2000ms] ease-[cubic-bezier(0.16,1,0.3,1)] delay-[250ms] ${
                  showEffects ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}>
                  Tu Belleza,
                  <br />
                  <span className="italic text-gold">Nuestra Pasión.</span>
                </h1>

                {/* 3. Párrafo Descriptivo */}
                <p className={`mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground transform-gpu transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] delay-[400ms] ${
                  showEffects ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}>
                  El salón de belleza de referencia en Santiago de los Caballeros para un
                  servicio excepcional y resultados que te encantarán.
                </p>

                {/* 4. Botones de Acción */}
                <div className={`mt-10 flex flex-wrap items-center gap-4 transform-gpu transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] delay-[550ms] ${
                  showEffects ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}>
                  {/* 📱 BOTÓN ORIGINAL RESTAURADO: Con Ola Interna y Borde de Luz Inyectado vía Pseudo-elemento */}
<Button 
  asChild 
  variant="gold" 
  size="xl" 
  className="relative rounded-md overflow-hidden transform-gpu transition-all duration-200 active:scale-[0.96] active:brightness-105 px-8 py-5"
>
  <a href="#reservar" className="inline-flex items-center justify-center group/btn">
    
    {/* 🌟 EFFECTO DEL BORDE: Anillo de luz inyectado por encima que parpadea de forma independiente */}
    <div className="absolute inset-0 rounded-md border border-white/0 pointer-events-none z-20 animate-borde-blanco-puro" />
    
    {/* 🌊 OLA INTERNA: El destello diagonal automático */}
    <div 
      className="absolute inset-0 pointer-events-none z-0 transform-gpu"
      style={{
        background: 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.4) 50%, transparent 100%)',
        width: '200%',
        height: '100%',
        top: '0',
        left: '-100%',
        transform: 'skewX(-20deg)',
        animation: 'ola-brillante 3.5s infinite ease-in-out',
      }}
    />
    
    {/* Texto limpio en el centro (Eje Z intermedio) */}
    <span className="relative z-10 flex items-center justify-center gap-2 font-medium whitespace-nowrap">
      Reservar Cita Ahora
    </span>

    {/* ⚡ Keyframes: Separados por completo de las propiedades nativas de Shadcn */}
    <style dangerouslySetInnerHTML={{ __html: `
      @keyframes ola-brillante {
        0% {
          left: -150%;
        }
        30% {
          left: 150%;
        }
        100% {
          left: 150%;
        }
      }
      @keyframes pulso-borde-puro {
        0% {
          border-color: rgba(255, 255, 255, 0.1);
          box-shadow: inset 0 0 0px rgba(255, 255, 255, 0), 0 0 0px rgba(255, 255, 255, 0);
        }
        50% {
          border-color: rgba(255, 255, 255, 0.9); /* Contorno blanco nítido */
          box-shadow: inset 0 0 4px rgba(255, 255, 255, 0.4), 0 0 12px 2px rgba(255, 255, 255, 0.6); /* Resplandor interno y externo */
        }
        100% {
          border-color: rgba(255, 255, 255, 0.1);
          box-shadow: inset 0 0 0px rgba(255, 255, 255, 0), 0 0 0px rgba(255, 255, 255, 0);
        }
      }
      .animate-borde-blanco-puro {
        animation: pulso-borde-puro 2.8s infinite ease-in-out;
      }
    `}} />
  </a>
</Button>
                  {/* 📱 BOTÓN OUTLINE PERFECTO: Con Esquinas Redondeadas, Tamaño Compacto y Destello Exterior Fino */}
<Button 
  asChild 
  variant="outlineGold" 
  size="xl" 
  className="relative rounded-full bg-transparent border-0 px-6 py-3.5 transform-gpu transition-all duration-200 active:scale-[0.96] active:brightness-95"
>
  <a href="#servicios" className="inline-flex items-center justify-center rounded-full">
    
    {/* 🌠 EL DESTELLO REAL: Anillo perimetral que hace viajar el haz de luz blanca por el borde exterior */}
    <div 
      className="absolute inset-0 rounded-full pointer-events-none z-0"
      style={{
        border: "2px solid transparent",
        backgroundImage: "conic-gradient(from var(--angulo-final), rgba(255, 255, 255, 1) 0deg, rgba(212, 175, 55, 0.3) 40deg, transparent 80deg)",
        backgroundOrigin: "border-box",
        backgroundClip: "border-box",
        WebkitMask: "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
        mask: "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
        WebkitMaskComposite: "xor",
        maskComposite: "exclude",
        animation: "girar-destello-final 3.5s infinite linear",
      }}
    />

    {/* Texto negro original, con el tamaño y padding exacto del botón original */}
    <span className="relative z-10 text-base font-semibold whitespace-nowrap text-black">
      Ver Servicios
    </span>

    {/* ⚡ Registro del ángulo para la rotación nativa limpia sin deformar el botón */}
    <style dangerouslySetInnerHTML={{ __html: `
      @property --angulo-final {
        syntax: '<angle>';
        initial-value: 0deg;
        inherits: false;
      }
      @keyframes girar-destello-final {
        0% {
          --angulo-final: 0deg;
        }
        100% {
          --angulo-final: 360deg;
        }
      }
    `}} />
  </a>
</Button>
                </div>

                {/* 5. Calificaciones de Estrellas */}
                <div className={`mt-10 flex items-center gap-4 transform-gpu transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] delay-[700ms] ${
                  showEffects ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-gold text-gold"
                      />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-semibold text-foreground">4.3</span> · Calificación en Google
                  </p>
                </div>

              </div>
            </div>
          </div>
        </section>
      )}
    </HeroAnimate>
  );
}
