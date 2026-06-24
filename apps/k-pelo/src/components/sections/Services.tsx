import { ScrollAnimate } from "@/components/ui/ScrollAnimate";
import { cn, anim } from "@/lib/utils";
import { Scissors, Palette, Sparkles, Hand } from "lucide-react";
import { MessageCircle } from "lucide-react";

const WA = "https://wa.me/18092767878";



const services = [
  { icon: Scissors, title: "Cortes y Peinados", desc: "Diseños modernos y clásicos para hombres y mujeres, adaptados a tu estilo personal.",price: "Desde $20",time: "30-60 min" },

  { icon: Palette, title: "Coloración Profesional", desc: "Desde balayage hasta colores vibrantes, usamos productos de alta gama para proteger y embellecer tu cabello.", price: "Desde $50", time: "60-120 min" },

  { icon: Sparkles, title: "Tratamientos Capilares", desc: "Hidratación profunda, keratina y reparación para un cabello sano, fuerte y brillante.", price: "Desde $30", time: "45-90 min" },

  { icon: Hand, title: "Manicura y Pedicura", desc: "El toque final para un look impecable con nuestros servicios de cuidado de uñas.", price: "Desde $25", time: "30-60 min" },
];

export function Services() {
  return (
    <section id="servicios" className="py-24 md:py-32 bg-gradient-dark text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      <div className="max-w-7xl mx-auto px-6 relative">
        <ScrollAnimate className={anim.fadeInUpPremium}>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-gold text-xs tracking-[0.3em] uppercase">Servicios</span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light mt-4 mb-4">
              Nuestros <span className="italic text-gradient-gold">Servicios</span> Destacados
            </h2>
            <p className="text-white/60">Cada servicio diseñado para realzar tu belleza natural.</p>
          </div>
        </ScrollAnimate>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, index) => {
            const delays = ["delay-200", "delay-300", "delay-400", "delay-500"];
            const currentDelay = delays[index] || "delay-100";
            const currentAnim = index % 2 === 0 ? anim.fadeInLeftPremium : anim.fadeInRightPremium;

            return (
              <ScrollAnimate key={s.title} className={cn(currentAnim, currentDelay)}>
    {/* CAMBIO 1: Agregamos 'grid grid-rows-[auto_auto_1fr_auto_auto] row-span-5' */}
    <div className="group p-8 border border-white/10 hover:border-gold/60 bg-white/[0.02] hover:bg-white/[0.05] transition-all hover:-translate-y-1 h-full grid grid-rows-[auto_auto_1fr_auto_auto] row-span-5 gap-y-2">

      {/* Fila 1: El Icono */}
      <div className="w-14 h-14 border border-gold/40 flex items-center justify-center mb-4 group-hover:bg-gold group-hover:border-gold transition-colors">
        <s.icon className="w-6 h-6 text-gold group-hover:text-foreground transition-colors" aria-hidden="true" />
      </div>

      {/* Fila 2: El Título */}
      <h3 className="font-display text-2xl mb-1">{s.title}</h3>
      
      {/* Fila 3: La Descripción (Usa 1fr para absorber el espacio restante de forma elástica) */}
      <p className="text-white/60 text-sm leading-relaxed mb-4">
        {s.desc}
      </p>
      
      {/* Fila 4: Los Precios (Eliminamos el mt-5 para que la Grid controle el flujo) */}
      <div className="space-y-2 border-t border-white/10 pt-4 mb-4">
        <div className="flex justify-between text-sm">
          <span className="text-white/50">Duración</span>
          <span className="text-gold">{s.time}</span>
        </div>

        <div className="flex justify-between text-sm">
          <span className="text-white/50">Precio</span>
          <span className="text-gold">{s.price}</span>
        </div>
      </div>

      {/* Fila 5: El Botón (Cambiamos mt-10 por mt-auto solo por seguridad) */}
      <a
        href={WA}
        target="_blank"
        rel="noopener noreferrer"
        className="
          relative
          overflow-hidden
          mt-auto
          inline-flex
          items-center
          justify-center
          gap-2
          w-full
          border
          border-gold/50
          px-5
          py-4
          text-sm
          uppercase
          tracking-wider
          font-semibold
          transition-all
          duration-300
          hover:border-gold
          hover:bg-gold/10
          hover:shadow-[0_0_20px_rgba(212,175,55,.15)]
          hover:-translate-y-0.5
        "
      >
        <span className="absolute inset-0 overflow-hidden pointer-events-none">
          <span className="opacity-50 absolute top-0 h-full w-[100%] bg-gradient-to-r from-transparent via-yellow-400/40 to-transparent -skew-x-12 animate-shine-loop" />
        </span>

        <MessageCircle className="relative z-10 w-4 h-4 text-gold" aria-hidden="true" />
        <span className="relative z-10 text-gradient-gold">
          Agendar Cita
        </span>
      </a>
    </div>
  </ScrollAnimate>
);
          })}
        </div>

        <ScrollAnimate className={cn(anim.fadeInUpPremium, "delay-600")}>
          <div className="text-center mt-14">
            <a href={WA} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-3 border border-gold/60 text-gold px-8 py-4 font-medium tracking-wide uppercase text-sm rounded-sm transition-all duration-300 relative group">
              <div className="pulso-movil" />
              <span className="relative z-10">Ver Lista de Precios Completa</span>
            </a>
          </div>
        </ScrollAnimate>
      </div>
    </section>
  );
}