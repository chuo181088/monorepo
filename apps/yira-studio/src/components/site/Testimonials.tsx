import { Star, Quote } from "lucide-react";
import { ScrollAnimate } from "@/components/ui/ScrollAnimate";

const items = [
  {
    quote:
      "¡El mejor trato y resultados increíbles! Por fin encontré mi salón de confianza en Santiago. ¡100% recomendado!",
    name: "Ana M.",
  },
  {
    quote:
      "Profesionalismo de principio a fin. Me hicieron exactamente el color que quería. El ambiente es súper relajante.",
    name: "Laura P.",
  },
  {
    quote:
      "Salí encantada con mi manicura. Atención impecable y un espacio precioso. Sin duda volveré pronto.",
    name: "Carolina R.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonios" className="relative overflow-hidden bg-gradient-to-b from-rose-soft/40 to-background py-24">
      <div className="container mx-auto px-6">
        
        {/* Encabezado */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-gold">
            Testimonios
          </span>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl tracking-tight text-foreground">
            Lo que Nuestras Clientas Dicen
          </h2>
          <div className="mt-5 flex items-center justify-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-gold text-gold" />
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">4.3</span> en Google · clientas felices
            </p>
          </div>
        </div>

        {/* 📱 GRID DE TESTIMONIOS: Con Cortina Física desde el Centro */}
        {/* 📱 GRID DE TESTIMONIOS: Desenfoque progresivo suave (Glow & Blur Fade-In) */}
<div className="mt-16 grid gap-8 md:grid-cols-3">
  {items.map((t, index) => (
    /* Usamos el variante 'counter' por su rootMargin rápido (-50px) para que reaccione al instante */
    <ScrollAnimate
      key={t.name}
      variant="counter"
      once={false}
      delay={index * 150} /* Secuencia limpia de izquierda a derecha */
      className="flex flex-col"
    >
      {(isVisible) => (
        <figure
          className={`flex flex-col gap-6 rounded-2xl border bg-card p-8 shadow-soft transform-gpu transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-2 hover:border-gold/30 hover:shadow-elegant ${
            isVisible 
              ? "blur-none scale-100 opacity-100 border-border/60" 
              : "blur-md scale-[0.97] opacity-0 border-border/10"
          }`}
        >
          <Quote className="h-8 w-8 text-gold/60" />
          <blockquote className="flex-1 text-base leading-relaxed text-foreground font-light">
            "{t.quote}"
          </blockquote>
          <figcaption className="border-t border-border/60 pt-4">
            <p className="font-serif text-lg text-foreground">{t.name}</p>
            <p className="text-xs uppercase tracking-widest text-muted-foreground">Clienta verificada</p>
          </figcaption>
        </figure>
      )}
    </ScrollAnimate>
  ))}
</div>
      </div>
    </section>
  );
}