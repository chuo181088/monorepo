import { ScrollAnimate } from "@/components/ui/ScrollAnimate"; // 🌟 Asegura la ruta correcta de tu archivo
import hairImg from "@/assets/service-hair.jpg";
import colorImg from "@/assets/service-color.jpg";
import nailsImg from "@/assets/service-nails.jpg";
import facialImg from "@/assets/service-facial.jpg";

const services = [
  {
    img: hairImg,
    title: "Corte y Estilo",
    desc: "Renueva tu look con un corte moderno y un peinado profesional adaptado a tu estilo único.",
    price: "Desde $800",
  },
  {
    img: colorImg,
    title: "Coloración Experta",
    desc: "Balayage, mechas y tintes con productos premium que cuidan la salud y el brillo de tu cabello.",
    price: "Desde $2,500",
  },
  {
    img: nailsImg,
    title: "Manicura & Pedicura Spa",
    desc: "Manos y pies perfectos con tratamientos spa que nutren, hidratan y embellecen.",
    price: "Desde $600",
  },
  {
    img: facialImg,
    title: "Tratamientos Faciales",
    desc: "Limpieza profunda, hidratación y rituales faciales que revelan tu mejor versión.",
    price: "Desde $1,500",
  },
];

export default function Services() {
  return (
   <section id="servicios" className="bg-rose-soft/40 py-24">
  <div className="container mx-auto px-6">
    
    {/* 🎬 ENCABEZADO INTERACTIVO: Con once={false} para que se ejecute siempre en el scroll */}
    <div className="mx-auto max-w-2xl text-center">
      
      {/* 1. Etiqueta superior */}
      <div className="overflow-hidden h-6 flex items-center justify-center">
        <ScrollAnimate variant="counter" once={false} delay={100}>
          {(isVisible) => (
            <span 
              className={`block text-xs font-medium uppercase tracking-[0.3em] text-gold transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] transform-gpu ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
              }`}
            >
              Servicios
            </span>
          )}
        </ScrollAnimate>
      </div>

      {/* 2. Título Principal */}
      <div className="overflow-hidden my-3 py-1">
        <ScrollAnimate variant="counter" once={false} delay={250}>
          {(isVisible) => (
            <h2 
              className={`font-serif text-4xl md:text-5xl tracking-tight text-foreground leading-tight transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] transform-gpu ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
              }`}
            >
              Nuestros Servicios Estrella
            </h2>
          )}
        </ScrollAnimate>
      </div>

      {/* 3. Párrafo Descriptivo */}
      <div className="overflow-hidden py-1">
        <ScrollAnimate variant="counter" once={false} delay={400}>
          {(isVisible) => (
            <p 
              className={`text-muted-foreground max-w-lg mx-auto text-base transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] transform-gpu ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
              }`}
            >
              Experiencias de belleza diseñadas para realzar tu estilo, con la
              atención experta que mereces.
            </p>
          )}
        </ScrollAnimate>
      </div>

    </div>
        
        {/* Grid de Servicios con Entrada Lateral y Precios con Pulso de Luz */}
<div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
  {services.map((s, index) => (
    <ScrollAnimate
      key={s.title}
      variant="counter"
      once={false}
      delay={index * 120}
      className="flex flex-col"
    >
      {(isVisible) => (
        <article 
          className={`group flex flex-1 flex-col overflow-hidden rounded-2xl bg-card border border-border/10 shadow-soft transform-gpu transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-2 hover:shadow-elegant hover:border-gold/30 ${
            isVisible ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
          }`}
        >
          {/* Contenedor de la Imagen con Etiqueta de Precio Flotante */}
          <div className="relative aspect-[4/5] overflow-hidden bg-muted">
            <img
              src={s.img}
              alt={s.title}
              loading="lazy"
              width={800}
              height={1000}
              className="h-full w-full object-cover transition-all duration-700 ease-out group-hover:scale-105 group-hover:brightness-[1.02]"
            />
            
            {/* 🏷️ CONTAINER DEL PRECIO: Posicionamiento absoluto */}
            <div className="absolute top-4 right-4 z-10">
  
  {/* 🌟 EL PULSO RESONANTE BLANCO: Ahora brota luz blanca desde el borde dorado */}
  <div className="absolute inset-0 rounded-full bg-white/60 animate-pulso-precio-blanco" style={{ animationDelay: '0s' }} />
  <div className="absolute inset-0 rounded-full bg-white/30 animate-pulso-precio-blanco" style={{ animationDelay: '1.2s' }} />
  
  {/* Píldora del Precio Real (Capa Superior Dorada) */}
  <div className="relative rounded-full bg-gold px-3 py-1 shadow-md border border-white/10 transform transition-transform duration-300 group-hover:scale-105">
    <span className="text-xs font-semibold  tracking-wide text-white">
      {s.price}
    </span>
  </div>
</div>

            <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </div>

          {/* Información del Servicio */}
          <div className="flex flex-1 flex-col gap-3 p-6 bg-card transition-colors duration-500 group-hover:bg-background/50">
            <h3 className="font-serif text-xl text-foreground transition-colors duration-300 group-hover:text-gold">
              {s.title}
            </h3>
            <p className="flex-1 text-sm leading-relaxed text-muted-foreground transition-colors duration-300 group-hover:text-foreground/90">
              {s.desc}
            </p>
            
            <div className="pt-2 flex items-center justify-between border-t border-border/10">
              <span className="text-xs uppercase tracking-wider text-muted-foreground/60 font-medium">Atención Experta</span>
              <span className="text-xs font-semibold text-gold tracking-wide">Yira Spa</span>
            </div>
          </div>
        </article>
      )}
    </ScrollAnimate>
  ))}
</div>

{/* ⚡ MOTOR DE ANIMACIÓN: Copiar y pegar abajo del componente o meter en tu CSS */}
<style dangerouslySetInnerHTML={{ __html: `
  @keyframes pulso-onda {
    0% {
      transform: scale(1);
      opacity: 0.8;
    }
    100% {
      transform: scale(1.4);
      opacity: 0;
    }
  }
  .animate-pulso-precio-onda {
    animation: pulso-onda 2.5s infinite cubic-bezier(0.16, 1, 0.3, 1);
  }
`}} />
      </div>
    </section>
  );
}