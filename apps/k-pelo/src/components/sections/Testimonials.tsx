import { ScrollAnimate } from "@/components/ui/ScrollAnimate";
import { cn, anim } from "@/lib/utils";
import { Star } from "lucide-react";

const testimonials = [
  { text: "¡El mejor servicio de Santiago! Salí sintiéndome renovada. El personal es súper profesional y atento.", name: "María R.", role: "Cliente desde 2022" },
  { text: "Excelente atención y resultados increíbles. Recomiendo 100% los tratamientos de keratina.", name: "Ana P.", role: "Tratamiento de Keratina" },
  { text: "Un ambiente acogedor y estilistas que realmente escuchan lo que quieres. Siempre salgo encantada.", name: "Laura M.", role: "Coloración" },
];

export function Testimonials() {
  return (
    <section id="testimonios" className="py-24 md:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollAnimate className={anim.fadeInUpPremium}>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-gold text-xs tracking-[0.3em] uppercase">Testimonios</span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light mt-4 mb-4">
              Lo que Dicen <span className="italic text-gold-deep">Nuestros Clientes</span>
            </h2>
          </div>
        </ScrollAnimate>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {testimonials.map((t, i) => {
            let currentAnim = anim.fadeInUp;
            let currentDelay = "delay-0";

            if (i === 0) { currentAnim = anim.fadeInLeftPremium; currentDelay = "delay-100"; } 
            else if (i === 1) { currentAnim = anim.fadeInUpPremium; currentDelay = "delay-300"; } 
            else if (i === 2) { currentAnim = anim.fadeInRightPremium; currentDelay = "delay-100"; }

            return (
              <ScrollAnimate key={i} className={cn(currentAnim, currentDelay, "h-full")}>
                <div className="bg-background p-8 border border-border hover:shadow-luxe transition-shadow h-full flex flex-col justify-between">
                  <div>
                    <div className="flex text-gold mb-5">
                      {[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 fill-current" aria-hidden="true" />)}
                    </div>
                    <p className="text-foreground leading-relaxed mb-6 font-display text-xl italic">"{t.text}"</p>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground uppercase tracking-widest font-medium">— {t.name}</div>
                    <div className="text-xs text-gold mt-1">{t.role}</div>
                  </div>
                </div>
              </ScrollAnimate>
            );
          })}
        </div>

        <ScrollAnimate className={cn(anim.fadeInUpPremium, "delay-500")}>
          <div className="py-6 flex flex-col items-center justify-center gap-4 text-center max-w-xl mx-auto">
            <div className="flex flex-row items-center gap-1 text-gold">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} className="w-6 h-6 fill-current estrella-ola" aria-hidden="true" style={{ animationDelay: `${i * 0.1}s` }} />
              ))}
            </div>
            <div className="space-y-2">
              <span className="font-display text-3xl sm:text-5xl text-foreground font-light tracking-tight block">
                4.5 <span className="italic text-gold-deep font-normal">de 5</span>
              </span>
              <span className="text-[10px] sm:text-xs tracking-[0.3em] uppercase text-muted-foreground block font-medium">
                Excelencia Avalada en Google Reviews
              </span>
            </div>
          </div>
        </ScrollAnimate>
      </div>
    </section>
  );
}