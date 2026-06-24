// src/components/sections/DeveloperBranding.tsx
import { Code2, ArrowUpRight, MessageSquareCode } from "lucide-react";
import { ScrollAnimate } from "@/components/ui/ScrollAnimate";

// Enlace directo a tu WhatsApp profesional o portafolio lucian-creative.lat
const DEVELOPER_WHATSAPP = "https://wa.me/18094421018?text=Hola%20Lucian,%20vi%20una%20de%20tus%20landings%20y%20me%20interesa%20un%20sitio%20web.";

export default function DeveloperBranding() {
  return (
    <section className="bg-[#0B0F19] text-slate-400 py-12 border-t border-slate-800/60 relative overflow-hidden">
      {/* Micro destello de luz sutil en la esquina para dar profundidad */}
      <div className="absolute -right-24 -bottom-24 h-64 w-64 rounded-full bg-blue-500/5 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-6xl px-6 relative z-10">
        <ScrollAnimate
          once={false}
          variant="counter"
          delay={100}
          className="flex flex-col sm:flex-row items-center justify-between gap-6 [transition-duration:1000ms]! ease-[cubic-bezier(0.175,0.885,0.32,1.1)] [transform:translateY(15px)] data-[state=visible]:[transform:translateY(0)]"
        >
          {/* Identidad del Desarrollador */}
          <div className="flex items-center gap-4 text-center sm:text-left flex-col sm:flex-row">
            <div className="h-11 w-11 rounded-md bg-slate-900 border border-slate-800 flex items-center justify-center text-blue-400 shadow-inner">
              <Code2 className="h-5 w-5 animate-pulse" />
            </div>
            <div>
              <h4 className="text-sm font-medium text-slate-200 tracking-wide">
                ¿Necesitas una página web de alto impacto para tu negocio?
              </h4>
              <p className="text-xs text-slate-500 mt-1">
                Diseño premium, optimización móvil y animaciones fluidas. Desarrollado por Lucian Creative (lucian-creative.lat).
              </p>
            </div>
          </div>

          {/* Botón de Conversión Directo */}
          <a
            href={DEVELOPER_WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-slate-900 border border-slate-800 hover:border-slate-700 px-5 py-3 text-xs font-medium uppercase tracking-[0.15em] text-slate-200 shadow-xl transition-all duration-300 hover:text-white active:scale-95 whitespace-nowrap transform-gpu group"
          >
            <MessageSquareCode className="h-4 w-4 text-blue-400 transition-transform group-hover:scale-110" />
            Hablemos de tu proyecto
            <ArrowUpRight className="h-3.5 w-3.5 text-slate-500 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </ScrollAnimate>
      </div>
    </section>
  );
}