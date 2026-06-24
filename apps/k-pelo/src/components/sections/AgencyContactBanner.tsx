import { ScrollAnimate } from "@/components/ui/ScrollAnimate";
import { cn, anim } from "@/lib/utils";
import { MessageCircle } from "lucide-react";



{/* 🚀 FIRMA DE TU AGENCIA LUCIAN CREATIVE: Vinculada directamente a tu WhatsApp */}
export function AgencyContactBanner() {
  // Constante con tu número de WhatsApp de negocios
  const LUCIAN_WA = "https://wa.me/18094421018";

  return (
    <section className="relative py-20 bg-[#111111] text-white overflow-hidden border-t border-white/5 block w-full">
      {/* Estilos CSS inyectados para las animaciones infinitas de móvil */}
      <style>{`
        @keyframes pulsoOnda {
          0% {
            box-shadow: 0 0 0 0 rgba(212, 175, 55, 0.5);
          }
          70% {
            box-shadow: 0 0 0 15px rgba(212, 175, 55, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(212, 175, 55, 0);
          }
        }
        @keyframes brilloFondo {
          0%, 100% { opacity: 0.08; transform: scale(1); }
          50% { opacity: 0.15; transform: scale(1.05); }
        }
        .boton-pulsante {
          animation: pulsoOnda 2s infinite ease-in-out;
        }
        .aura-animada {
          animation: brilloFondo 6s infinite ease-in-out;
        }
      `}</style>

      {/* Nubes de fondo con movimiento orgánico automático */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="aura-animada absolute -top-12 left-1/4 w-[300px] h-[300px] bg-[#d4af37] rounded-full blur-[100px]" />
        <div className="aura-animada absolute -bottom-12 right-1/4 w-[300px] h-[300px] bg-[#b8860b] rounded-full blur-[100px]" style={{ animationDelay: '3s' }} />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 text-center z-10">
        <ScrollAnimate className={anim.fadeInUpPremium}>
          <span className="text-[#d4af37] text-xs uppercase tracking-[0.4em] inline-block mb-3">
            ¿Te gusta esta plataforma?
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-light tracking-tight text-white mb-6">
            Lleva tu negocio al <span className="italic text-[#d4af37]">siguiente nivel</span>
          </h2>
        </ScrollAnimate>

        <ScrollAnimate className={cn(anim.fadeInUpPremium, "delay-150")}>
          <p className="text-white/70 font-light text-sm md:text-base max-w-xl mx-auto leading-relaxed mb-8">
            Esta landing fue diseñada y optimizada a medida por Lucian Creative (@Chuo). Si quieres una web premium, veloz y de alto impacto para tu marca, hablemos.
          </p>
        </ScrollAnimate>

        <ScrollAnimate className={cn(anim.fadeInUpPremium, "delay-300")}>
          <div className="relative inline-block max-w-full">
            {/* 📱 BOTÓN CON PULSO AUTOMÁTICO: No depende de hover, emite ondas solo */}
            <a 
              href={LUCIAN_WA} 
              target="_blank" 
              rel="noopener noreferrer"
              className="boton-pulsante inline-flex items-center justify-center gap-2 bg-[#d4af37] text-black px-6 py-4 font-semibold text-xs sm:text-sm tracking-normal sm:tracking-wider uppercase rounded-sm whitespace-nowrap active:scale-[0.95] transition-transform duration-150"
            >
              <MessageCircle className="w-4 h-4 fill-current flex-shrink-0 text-black" /> 
              <span>Cotizar Mi Proyecto</span>
            </a>
          </div>
        </ScrollAnimate>
      </div>
    </section>
  );
}