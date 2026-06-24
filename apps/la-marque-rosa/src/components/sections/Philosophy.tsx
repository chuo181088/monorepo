// src/components/sections/Philosophy.tsx
import { ScrollAnimate } from "@/components/ui/ScrollAnimate";
import { Counter } from "@/components/ui/Counter";
import aboutImg from "@/assets/about-interior.jpg";

export default function Philosophy() {
  return (
    <section id="filosofia" className="bg-background py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:px-12">
        
        {/* 🎭 BLOQUE 1: LA IMAGEN (Efecto de Zoom elegante desde el fondo) */}
        <ScrollAnimate once={false} className="relative overflow-hidden rounded-sm">
          {(isVisible) => (
            <div className="relative overflow-hidden w-full h-full rounded-sm transform-gpu">
              <img
                src={aboutImg}
                alt="Interior del salón La Marque Rosa"
                loading="lazy"
                width={1200}
                height={1400}
                className={`aspect-[4/5] w-full rounded-sm object-cover transition-all duration-[2200ms] ease-out will-change-[transform,opacity,filter] transform-gpu ${
                  isVisible 
                    ? "scale-100 opacity-100 blur-none" 
                    : "scale-96 opacity-0 blur-[2px]" // Solo 4% de escala y un sutil blur de 2px
                }`}
              />
              <div className="absolute -bottom-6 -right-6 hidden h-32 w-32 items-center justify-center rounded-full bg-gold text-center font-display text-sm leading-tight text-gold-foreground shadow-xl lg:flex z-20">
                <span>Pasión<br />desde 2018</span>
              </div>
            </div>
          )}
        </ScrollAnimate>

        {/* 📝 BLOQUE 2: EL TEXTO (Efecto Default con desenfoque suave) */}
        <div className="flex flex-col justify-center">
          <ScrollAnimate once={false} delay={250} variant="default">
            <span className="mb-4 text-xs uppercase tracking-[0.35em] text-rose-deep">
              Nuestra filosofía
            </span>
            <h2 className="font-display text-4xl leading-tight sm:text-5xl">
              Pasión por la belleza,<br />
              <span className="italic text-rose-deep">compromiso contigo.</span>
            </h2>
            <span className="gold-divider mt-8" />
            <p className="mt-8 text-base leading-relaxed text-muted-foreground">
              En <span className="text-foreground">La Marque Rosa</span> creemos que el verdadero
              bienestar nace de cuidarse por dentro y por fuera. Ubicadas en el corazón de Santiago,
              nuestro equipo de expertas está dedicado a ofrecerte una experiencia única y
              personalizada.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Utilizamos solo productos de la más alta calidad y las técnicas más innovadoras para
              garantizar resultados que no solo se ven, sino que se sienten. Tu confianza es nuestro
              mayor orgullo.
            </p>
          </ScrollAnimate>

          {/* 📊 BLOQUE 3: LAS ESTADÍSTICAS (Independiente, dispara los contadores) */}
          <ScrollAnimate once={false} delay={150} variant="counter" className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-8">
            {(isVisible) => (
              <>
                {/* Contador 1: Clientas felices (+1.2k) */}
                <div>
                  <div className="font-display text-3xl text-rose-deep flex items-center">
                    <span>+</span>
                    <Counter target={1200} animate={isVisible} duration={2000} />
                  </div>
                  <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                    Clientas felices
                  </div>
                </div>

                {/* Contador 2: Tratamientos (15+) */}
                <div>
                  <div className="font-display text-3xl text-rose-deep flex items-center">
                    <Counter target={15} animate={isVisible} duration={2000} />
                    <span>+</span>
                  </div>
                  <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                    Tratamientos
                  </div>
                </div>

                {/* Contador 3: Google (4.6★) */}
                <div>
                  <div className="font-display text-3xl text-rose-deep flex items-center">
                    <Counter target={4.6} animate={isVisible} duration={2000} decimals={1} />
                    <span className="text-xl ml-0.5">★</span>
                  </div>
                  <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                    En Google
                  </div>
                </div>
              </>
            )}
          </ScrollAnimate>
        </div>

      </div>
    </section>
  );
}