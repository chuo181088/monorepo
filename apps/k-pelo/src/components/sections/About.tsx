
import { ScrollAnimate } from "@/components/ui/ScrollAnimate";
import { Counter } from "@/components/ui/Counter";
import { cn, anim } from "@/lib/utils";
import aboutImg from "@/assets/about.jpg";

export function About() {
  return (
    <section className="py-24 md:py-32 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <ScrollAnimate className={anim.fadeInLeftPremium}>
          <div className="relative">
            <img 
              src={aboutImg} 
              alt="Interior del salón K-Pelo Center" 
              loading="lazy" 
              decoding="async"
              width={1200} 
              height={1400}
              className="w-full h-[500px] md:h-[600px] object-cover shadow-luxe" 
            />
            <div className="absolute -bottom-6 -right-6 hidden md:block bg-foreground text-background p-8 max-w-xs shadow-xl">
              <div className="text-gold text-4xl font-display mb-1">4.5★</div>
              <div className="text-sm text-background/70">Calificación de nuestros clientes en Google</div>
            </div>
          </div>
        </ScrollAnimate>

        <ScrollAnimate className={cn(anim.fadeInRightPremium, "delay-200")}>
          <div>
            <span className="text-gold text-xs tracking-[0.3em] uppercase">Sobre Nosotros</span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light mt-4 mb-6 leading-tight">
              Más que un Salón,<br />
              <span className="italic text-gold-deep">una Experiencia</span> de Belleza
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              En K-Pelo Center, combinamos arte y técnica para ofrecerte los mejores resultados en cuidado capilar y belleza.
              Con un equipo de estilistas apasionados y un ambiente diseñado para tu comodidad, nos dedicamos a resaltar tu mejor versión.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Nuestra calificación de 4.5 estrellas en Google respalda nuestro compromiso con la calidad y la satisfacción del cliente.
            </p>
            
            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-8">
              <ScrollAnimate className={cn(anim.fadeInUp, "delay-300")}>
                {(isVisible) => (
                  <div>
                    <div className="font-display text-3xl text-gold">
                      <Counter target={10} duration={3000} animate={isVisible} />+
                    </div>
                    <div className="text-sm text-muted-foreground mt-1 uppercase tracking-wider">Años</div>
                  </div>
                )}
              </ScrollAnimate>

              <ScrollAnimate className={cn(anim.fadeInUp, "delay-500")}>
                {(isVisible) => (
                  <div>
                    <div className="font-display text-3xl text-gold">
                      <Counter target={5000} duration={3000} animate={isVisible} />+
                    </div>
                    <div className="text-sm text-muted-foreground mt-1 uppercase tracking-wider">Clientes</div>
                  </div>
                )}
              </ScrollAnimate>

              <ScrollAnimate className={cn(anim.fadeInUp, "delay-700")}>
                {(isVisible) => (
                  <div>
                    <div className="font-display text-3xl text-gold">
                      <Counter target={100} duration={3000} animate={isVisible} />%
                    </div>
                    <div className="text-sm text-muted-foreground mt-1 uppercase tracking-wider">Pasión</div>
                  </div>
                )}
              </ScrollAnimate>
            </div>
          </div>
        </ScrollAnimate>
      </div>
    </section>
  );
}