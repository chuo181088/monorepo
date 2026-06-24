// src/components/sections/Services.tsx
import { Sparkles, Hand, Leaf } from "lucide-react";
import facialImg from "@/assets/service-facial.jpg";
import nailsImg from "@/assets/service-nails.jpg";
import massageImg from "@/assets/service-massage.jpg";
import { ScrollAnimate } from "@/components/ui/ScrollAnimate";

const BOOKING_URL = "#reservar";

const services = [
  {
    title: "Faciales Personalizados",
    desc: "Un tratamiento diseñado para las necesidades únicas de tu piel, dejándola radiante, hidratada y rejuvenecida.",
    img: facialImg,
    icon: Sparkles,
  },
  {
    title: "Manicura y Pedicura Spa",
    desc: "Más que un esmaltado. Una experiencia de relajación completa para tus manos y pies, dejándolos suaves y perfectos.",
    img: nailsImg,
    icon: Hand,
  },
  {
    title: "Masajes Relajantes",
    desc: "Libera el estrés y la tensión muscular con nuestras técnicas de masaje diseñadas para restaurar el equilibrio de tu cuerpo y mente.",
    img: massageImg,
    icon: Leaf,
  },
];

export default function Services() {
  return (
    <section id="servicios" className="bg-blush py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        
        {/* 🎬 CABECERA: Usamos 'counter' para que entre nítido y limpio de abajo hacia arriba */}
        <ScrollAnimate once={false} variant="counter" className="mx-auto max-w-2xl text-center">
          <span className="text-xs uppercase tracking-[0.35em] text-rose-deep">Carta de servicios</span>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl">
            Servicios diseñados <span className="italic">para ti.</span>
          </h2>
          <div className="mt-6 flex justify-center"><span className="gold-divider" /></div>
        </ScrollAnimate>

        {/* REJILLA DE TARJETAS */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {services.map((s, i) => (
            
            // 🎬 TARJETAS EN CASCADA: Entrada ultra nítida con desplazamiento sutil hacia arriba
            <ScrollAnimate
              key={s.title}
              once={false}
              variant="counter" 
              delay={i * 200} // Esto aplica el delay nativo que TS sí reconoce
              // 📱 La magia para móvil: Forzamos el delay a 0ms en pantallas pequeñas ([transition-delay:0ms]!)
              className="h-full [transition-duration:1000ms]! ease-out [transform:translateY(8px)] data-[state=visible]:[transform:translateY(0)] [transition-delay:0ms]! md:[transition-delay:inherit]!"
            >
              <article className="group relative overflow-hidden rounded-sm bg-card shadow-sm transition-all duration-500 ease-out h-full flex flex-col active:scale-[0.98]">
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={s.img}
                    alt={s.title}
                    loading="lazy"
                    width={800}
                    height={1000}
                    className="h-full w-full object-cover transition-transform duration-1000"
                  />
                </div>
                <div className="p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <s.icon className="h-6 w-6 text-gold" />
                    <h3 className="mt-4 font-display text-2xl">{s.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                  </div>
                </div>
              </article>
            </ScrollAnimate>

          ))}
        </div>

        {/* 🎬 ENLACE INFERIOR */}
        <ScrollAnimate once={false} delay={200} variant="counter" className="mt-14 text-center">
          <a
            href={BOOKING_URL}
            className="inline-flex items-center gap-2 border-b border-rose-deep pb-1 text-sm uppercase tracking-[0.25em] text-gold transition-colors hover:text-gold hover:border-gold"
          >
            Explorar todos los servicios →
          </a>
        </ScrollAnimate>
        
      </div>
    </section>
  );
}