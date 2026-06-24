import { Button } from "@/components/ui/button";
import { Award, Heart, Sparkles } from "lucide-react";
import { ScrollAnimate } from "@/components/ui/ScrollAnimate"; // 🌟 Importamos tu componente estrella
import aboutImg from "@/assets/about-team.jpg";

const pillars = [
  { icon: Award, title: "Años de experiencia", desc: "Estilistas certificadas." },
  { icon: Sparkles, title: "Productos premium", desc: "Marcas profesionales de alta gama." },
  { icon: Heart, title: "Trato cálido", desc: "Te sentirás como en casa." },
];

export default function About() {
  return (
    <section id="nosotras" className="py-24 overflow-hidden">
      <div className="container mx-auto grid items-center gap-16 px-6 lg:grid-cols-2">
        
        {/* 🎬 LADO IZQUIERDO: La imagen entra suavemente desde la izquierda */}
        <ScrollAnimate variant="counter" once={false}>
          {(isVisible) => (
            <div 
              className={`relative transform-gpu transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
              }`}
            >
              <div className="absolute -left-4 -top-4 h-full w-full rounded-3xl bg-rose/40" aria-hidden />
              <img
                src={aboutImg}
                alt="Yira y su equipo de estilistas profesionales en Santiago"
                loading="lazy"
                width={1200}
                height={1400}
                className="relative rounded-3xl object-cover shadow-elegant"
              />
            </div>
          )}
        </ScrollAnimate>

        {/* LADO DERECHO: Textos y Pilares */}
        <div className="flex flex-col">
          
          {/* 1. Etiqueta superior con cortina */}
          <div className="overflow-hidden py-1">
            <ScrollAnimate variant="counter" once={false} delay={100}>
              {(isVisible) => (
                <span className={`block text-xs font-medium uppercase tracking-[0.3em] text-gold transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
                }`}>
                  Sobre Nosotras
                </span>
              )}
            </ScrollAnimate>
          </div>

          {/* 2. Título con cortina */}
          <div className="overflow-hidden py-1 my-1">
            <ScrollAnimate variant="counter" once={false} delay={220}>
              {(isVisible) => (
                <h2 className={`font-serif text-4xl md:text-5xl tracking-tight text-foreground leading-tight transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
                }`}>
                  Conoce al Equipo de Yira
                </h2>
              )}
            </ScrollAnimate>
          </div>

          {/* 3. Párrafos descriptivos combinados */}
          <div className="overflow-hidden py-1">
            <ScrollAnimate variant="counter" once={false} delay={340}>
              {(isVisible) => (
                <div className={`transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}>
                  <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                    En el Centro de Belleza Yira la pasión por realzar la belleza
                    natural se vive en cada detalle. Con años de experiencia formando
                    parte del corazón de Santiago, nuestro equipo se dedica a ofrecerte
                    un servicio cálido, profesional y siempre a la vanguardia de las
                    últimas tendencias.
                  </p>
                  <p className="mt-4 leading-relaxed text-muted-foreground">
                    Trabajamos solo con productos de alta calidad porque sabemos que tu
                    confianza es nuestro mayor compromiso.
                  </p>
                </div>
              )}
            </ScrollAnimate>
          </div>

          {/* 4. Grid de los tres pilares en cascada horizontal */}
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {pillars.map((p, index) => (
              <ScrollAnimate
                key={p.title}
                variant="counter"
                once={false}
                delay={450 + index * 100} /* Entran secuencialmente después del texto */
              >
                {(isVisible) => (
                  <div 
                    className={`h-full rounded-2xl border border-border/60 bg-card p-5 shadow-soft transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:border-gold/30 hover:shadow-elegant ${
                      isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                    }`}
                  >
                    <p.icon className="h-6 w-6 text-gold" />
                    <h3 className="mt-3 font-serif text-base text-foreground">{p.title}</h3>
                    <p className="mt-1 text-xs text-muted-foreground">{p.desc}</p>
                  </div>
                )}
              </ScrollAnimate>
            ))}
          </div>

          {/* 5. Botón de llamado a la acción con delay final */}
          <div className="overflow-hidden mt-10">
            <ScrollAnimate variant="counter" once={false} delay={800}>
              {(isVisible) => (
                <Button 
                  asChild 
                  variant="gold" 
                  size="lg"
                  className={`transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    isVisible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
                  }`}
                >
                  <a href="#reservar">Agenda tu visita</a>
                </Button>
              )}
            </ScrollAnimate>
          </div>

        </div>
      </div>
    </section>
  );
}