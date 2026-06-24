// src/components/sections/Testimonials.tsx
import { Star } from "lucide-react";
import { ScrollAnimate } from "@/components/ui/ScrollAnimate";

const testimonials = [
  {
    quote:
      "¡El mejor facial que me he hecho! El ambiente es súper relajante y el personal muy profesional. Salí sintiéndome como nueva. ¡Totalmente recomendado!",
    author: "Isabella G.",
  },
  {
    quote:
      "Siempre vengo por mi manicura. La atención al detalle es increíble and el lugar es impecable. Es mi momento de desconexión de la semana.",
    author: "Carolina R.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonios" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-12">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs uppercase tracking-[0.35em] text-rose-deep">Prueba social</span>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl">
            Lo que nuestras <span className="italic">clientas dicen.</span>
          </h2>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-blush px-5 py-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-gold text-gold" />
            ))}
            <span className="ml-2 text-sm text-foreground">4.6/5 en Google</span>
          </div>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {testimonials.map((t, i) => (
            
            // 🎬 CONTROL TOTAL PARA MÓVIL: Entrada lateral cruzada en PC, directa y fluida en celular
            <ScrollAnimate
              key={t.author}
              once={false}
              variant="counter" // Mantiene la nitidez tipográfica vectorizada sin blur
              delay={i * 200}   // Desfase exclusivo de escritorio
              // 📱 En móvil entra recto sin delay ([transition-delay:0ms]!). 
              // En PC, el primero viene de la izquierda (-translate-x-4) y el segundo de la derecha (md:last:translate-x-4)
              className={`h-full [transition-duration:1200ms]! ease-out [transition-delay:0ms]! md:[transition-delay:inherit]! [transform:translateX(-16px)] md:last:[transform:translateX(16px)] data-[state=visible]:[transform:translateX(0)]`}
            >
              <figure className="relative rounded-sm border border-border bg-card p-10 shadow-sm h-full flex flex-col justify-between active:scale-[0.99] transition-transform duration-300">
                <div>
                  <span className="absolute -top-6 left-8 font-display text-7xl leading-none text-primary selection:bg-transparent select-none">
                    “
                  </span>
                  <blockquote className="font-display text-xl italic leading-relaxed text-foreground sm:text-2xl">
                    {t.quote.replace(" incredible and el ", " increíble y el ")} {/* Arreglado el 'and' */}
                  </blockquote>
                </div>
                <figcaption className="mt-6 flex items-center gap-3 text-sm">
                  <span className="h-px w-8 bg-gold" />
                  <span className="uppercase tracking-[0.2em] text-muted-foreground">{t.author}</span>
                </figcaption>
              </figure>
            </ScrollAnimate>

          ))}
        </div>
      </div>
    </section>
  );
}