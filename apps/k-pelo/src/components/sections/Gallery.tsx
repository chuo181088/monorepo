import { ScrollAnimate } from "@/components/ui/ScrollAnimate";
import { cn, anim } from "@/lib/utils";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

const gallery = [
  { src: g1, alt: "Balayage profesional", span: "row-span-2" },
  { src: g2, alt: "Corte masculino moderno", span: "" },
  { src: g3, alt: "Tratamiento de keratina", span: "" },
  { src: g4, alt: "Manicura elegante", span: "" },
  { src: g5, alt: "Coloración rubia", span: "row-span-2" },
  { src: g6, alt: "Estilista en acción", span: "" },
];

export function Gallery() {
  return (
    <section id="galeria" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollAnimate className={anim.fadeInUpPremium}>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-gold text-xs tracking-[0.3em] uppercase">Portafolio</span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light mt-4 mb-4">
              Nuestras <span className="italic text-gold-deep">Transformaciones</span>
            </h2>
            <p className="text-muted-foreground">
              Una imagen vale más que mil palabras. Inspírate con los resultados de nuestros clientes.
            </p>
          </div>
        </ScrollAnimate>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] md:auto-rows-[260px] gap-3">
          {gallery.map((img, i) => {
            const delays = ["delay-0", "delay-150", "delay-300", "delay-450", "delay-600", "delay-750"];
            const currentDelay = delays[i] || "delay-0";

            return (
              <ScrollAnimate key={i} className={cn(anim.zoomInPremium, img.span, "h-full w-full")}>
                <div className="group relative overflow-hidden h-full w-full">
                  <img 
                    src={img.src} 
                    alt={img.alt} 
                    loading="lazy" 
                    decoding="async"
                    width={800} 
                    height={1024}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <p className="text-white font-display text-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 opacity-0 group-hover:opacity-100">
                      {img.alt}
                    </p>
                  </div>
                </div>
              </ScrollAnimate>
            );
          })}
        </div>
      </div>
    </section>
  );
}
