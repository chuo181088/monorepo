import { ScrollAnimate } from "@/components/ui/ScrollAnimate";
import { cn, anim } from "@/lib/utils";
import { MessageCircle } from "lucide-react";

const WA = "https://wa.me/18092767878";

export function FinalCTA() {
  return (
    <section className="relative py-24 md:py-32 bg-foreground text-background overflow-hidden border-t border-border/10">
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <div className="absolute -top-12 left-1/4 w-[500px] h-[500px] bg-gold rounded-full blur-[120px]" />
        <div className="absolute -bottom-12 right-1/4 w-[500px] h-[500px] bg-gold-deep rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 text-center z-10">
        <ScrollAnimate className={anim.fadeInUpPremium}>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-light mb-8 leading-[1.15] tracking-tight">
            Es Momento de un<br />
            <span className="italic text-gradient-gold">Cambio Inolvidable</span>
          </h2>
        </ScrollAnimate>

        <ScrollAnimate className={cn(anim.fadeInUpPremium, "delay-200")}>
          <p className="text-background/80 font-light text-lg md:text-xl mb-12 max-w-xl mx-auto leading-relaxed">
            Tu cabello habla antes de que digas una palabra. Permítenos diseñar la versión perfecta de tu estilo. ¡Separa tu espacio hoy!
          </p>
        </ScrollAnimate>

        <ScrollAnimate className={cn(anim.fadeInUpPremium, "delay-300")}>
          <div className="relative inline-block p-[1.5px] overflow-hidden rounded-sm group transition-transform duration-300 hover:-translate-y-1 max-w-full">
            <div className="linea-borde-activa pointer-events-none" />
            <a href={WA} target="_blank" rel="noopener noreferrer"
              className="relative z-10 inline-flex items-center justify-center gap-2 sm:gap-3 bg-foreground text-background px-5 py-4 sm:px-12 sm:py-5 font-semibold text-sm sm:text-lg tracking-wide uppercase rounded-[2px] transition-colors duration-300 group-hover:bg-foreground/90 select-none whitespace-nowrap">
              <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 fill-current text-gold flex-shrink-0" aria-hidden="true" /> 
              <span className="text-gradient-gold">Agendar Cita por WhatsApp</span>
            </a>
          </div>
        </ScrollAnimate>
      </div>
    </section>
  );
}