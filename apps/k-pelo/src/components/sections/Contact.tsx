import { ScrollAnimate } from "@/components/ui/ScrollAnimate";
import { cn, anim } from "@/lib/utils";
import { Phone, MapPin, Clock, MessageCircle } from "lucide-react";

const WA = "https://wa.me/18092767878";
const TEL = "+18092767878";

export function Contact() {
  return (
    <section id="contacto" className="py-24 md:py-32 bg-background border-t border-border/40">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollAnimate className={anim.fadeInUpPremium}>
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-gold text-xs tracking-[0.3em] uppercase">Ubicación</span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light mt-4">
              Visít<span className="italic text-gold-deep">anos</span>
            </h2>
          </div>
        </ScrollAnimate>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <ScrollAnimate className={cn(anim.fadeInLeftPremium, "delay-200 space-y-8")}>
            <div>
              <h3 className="font-display text-4xl mb-2 font-light tracking-tight">K-Pelo Center</h3>
              <p className="text-muted-foreground font-light tracking-wide uppercase text-xs">Salón de belleza & cuidado capilar</p>
            </div>
            
            <div className="space-y-6">
              <a href={`tel:${TEL}`} className="flex items-center gap-5 group">
                <div className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center bg-gold/5 group-hover:bg-gold transition-colors duration-300 shrink-0">
                  <Phone className="w-4 h-4 text-gold group-hover:text-foreground transition-colors" aria-hidden="true" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Teléfono</div>
                  <div className="text-lg font-medium group-hover:text-gold transition-colors">+1 809-276-7878</div>
                </div>
              </a>

              <div className="flex items-center gap-5 group">
                <div className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center bg-gold/5 shrink-0">
                  <MapPin className="w-4 h-4 text-gold" aria-hidden="true" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Dirección</div>
                  <div className="text-lg font-light leading-relaxed">Av. Juan Pablo Duarte 115, Santiago de los Caballeros</div>
                </div>
              </div>

              <div className="flex items-center gap-5 group">
                <div className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center bg-gold/5 shrink-0">
                  <Clock className="w-4 h-4 text-gold" aria-hidden="true" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Horario</div>
                  <div className="text-lg font-light">Lunes a Sábado <span className="text-gold mx-2">—</span> 9:00 AM a 7:00 PM</div>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <a href={WA} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-3 border border-gold text-gold hover:bg-gold hover:text-foreground px-8 py-4 font-medium tracking-wide uppercase text-sm rounded-sm transition-all duration-300 hover:shadow-[0_4px_20px_rgba(212,175,55,0.15)] hover:-translate-y-0.5">
                <MessageCircle className="w-4 h-4 fill-current" aria-hidden="true" /> 
                <span>Agendar por WhatsApp</span>
              </a>
            </div>
          </ScrollAnimate>

          <ScrollAnimate className={cn(anim.fadeInRightPremium, "delay-400 h-[450px] shadow-luxe border border-border/40 rounded-sm overflow-hidden group")}>
            <iframe
              title="Ubicación K-Pelo Center"
              src="https://www.google.com/maps?q=Av.+Juan+Pablo+Duarte+115,+Santiago+De+Los+Caballeros&output=embed"
              width="100%" height="100%" style={{ border: 0 }}
              className="grayscale-[20%] contrast-[110%] transition-all duration-700 group-hover:grayscale-0"
              loading="lazy" referrerPolicy="no-referrer-when-downgrade"
            />
          </ScrollAnimate>
        </div>
      </div>
    </section>
  );
}