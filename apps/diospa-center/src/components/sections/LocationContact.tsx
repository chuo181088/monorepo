import React from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { ScrollAnimate } from "@salones/ui-components/ScrollAnimate";

interface LocationContactProps {
  address: string;
  phoneDisplay: string;
  phoneLink: string;
  email: string;
}

export default function LocationContact({ address, phoneDisplay, phoneLink, email }: LocationContactProps) {
  return (
    <section id="contacto" className="py-24 bg-background border-t border-border/40">
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-16 items-center">
        
        {/* BLOQUE IZQUIERDO: DETALLES VISUALES INDEPENDIZADOS */}
        <div className="max-w-lg">
          
          {/* 1. Subtítulo: Entrada independiente */}
          <ScrollAnimate once={false}>
            {(isVisible) => (
              <div 
                className={`text-xs uppercase tracking-[0.35em] text-primary mb-6 flex items-center gap-2 transform transition-all duration-[1000ms] ease-out ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                <span className="h-[1px] w-4 bg-primary/60" /> Ubicación
              </div>
            )}
          </ScrollAnimate>

          {/* 2. Título: Entrada independiente */}
          <ScrollAnimate once={false}>
            {(isVisible) => (
              <h2 
                className={`font-serif text-4xl leading-tight text-foreground transform transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
              >
                Visítanos en nuestro <span className="italic text-primary">santuario</span>.
              </h2>
            )}
          </ScrollAnimate>

          {/* 3. Párrafo: Entrada independiente */}
          <ScrollAnimate once={false}>
            {(isVisible) => (
              <p 
                className={`mt-6 text-base text-muted-foreground leading-relaxed transform transition-all duration-[1200ms] ease-out ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                Te esperamos en un entorno diseñado exclusivamente para tu tranquilidad. Reserva con antelación para asegurar tu espacio de paz.
              </p>
            )}
          </ScrollAnimate>

          {/* 🌟 LISTA DE CONTACTOS: Versión Ultra-Sutil en Cámara Lenta (2200ms) */}
<div className="mt-10 space-y-6">
  
  {/* Dirección: Aparece de primero, pausado */}
  <ScrollAnimate once={false}>
    {(isVisible) => (
      <div className={`flex gap-4 items-start transform transition-all duration-[2200ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
      }`}>
        <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-primary/20 bg-secondary/20 text-primary">
          <MapPin className="h-4 w-4" />
        </div>
        <div>
          <h3 className="text-xs uppercase tracking-wider text-muted-foreground font-medium">Dirección</h3>
          <p className="mt-1 text-sm text-foreground leading-relaxed">{address}</p>
        </div>
      </div>
    )}
  </ScrollAnimate>

  {/* Teléfono: Espera 250ms y aparece majestuoso */}
  <ScrollAnimate once={false}>
    {(isVisible) => (
      <div className={`flex gap-4 items-start transform transition-all duration-[2200ms] delay-[250ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
      }`}>
        <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-primary/20 bg-secondary/20 text-primary">
          <Phone className="h-4 w-4" />
        </div>
        <div>
          <h3 className="text-xs uppercase tracking-wider text-muted-foreground font-medium">Teléfono / WhatsApp</h3>
          <a href={phoneLink} className="mt-1 inline-block text-sm text-foreground hover:text-primary transition-colors font-medium">
            {phoneDisplay}
          </a>
        </div>
      </div>
    )}
  </ScrollAnimate>

  {/* Email: Espera 500ms con una entrada muy fina */}
  <ScrollAnimate once={false}>
    {(isVisible) => (
      <div className={`flex gap-4 items-start transform transition-all duration-[2200ms] delay-[500ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
      }`}>
        <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-primary/20 bg-secondary/20 text-primary">
          <Mail className="h-4 w-4" />
        </div>
        <div>
          <h3 className="text-xs uppercase tracking-wider text-muted-foreground font-medium">Correo Electrónico</h3>
          <a href={`mailto:${email}`} className="mt-1 inline-block text-sm text-foreground hover:text-primary transition-colors">
            {email}
          </a>
        </div>
      </div>
    )}
  </ScrollAnimate>

  {/* Horario: Cierra el desfile a los 750ms */}
  <ScrollAnimate once={false}>
    {(isVisible) => (
      <div className={`flex gap-4 items-start transform transition-all duration-[2200ms] delay-[750ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
      }`}>
        <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-primary/20 bg-secondary/20 text-primary">
          <Clock className="h-4 w-4" />
        </div>
        <div>
          <h3 className="text-xs uppercase tracking-wider text-muted-foreground font-medium">Horario de Atención</h3>
          <p className="mt-1 text-sm text-foreground">Lunes a Sábado: 9:00 AM – 7:00 PM</p>
          <p className="text-xs text-muted-foreground italic mt-0.5">Domingos: Cerrado por descanso divino</p>
        </div>
      </div>
    )}
  </ScrollAnimate>

</div>
        </div>

        {/* 🗺️ BLOQUE DERECHO: EMBED DEL MAPA GOOGLE (Con micro-zoom y delay) */}
        <ScrollAnimate once={false}>
          {(isVisible) => (
            <div 
              className={`relative h-[26rem] md:h-[32rem] bg-secondary/20 border border-border/50 overflow-hidden shadow-sm group transform transition-all duration-[1400ms] delay-200 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-[1.03]"
              }`}
            >
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.639343750805!2d-70.6868846!3d19.4280145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eb1cf61f6ab0e59%3A0xc6cb55db885834f8!2sC.%20Roman%20Franco%208%2C%20Santiago%20de+los+Caballeros+51000!5e0!3m2!1ses-419!2sdo!4v1710000000000!5m2!1ses-419!2sdo" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full transition-all duration-700 pointer-events-autohover:grayscale-0 transition-all duration-700 pointer-events-auto"
                title="Ubicación oficial de DIOSPA CENTER en Santiago de los Caballeros"
              />
              <div className="absolute inset-0 border border-foreground/5 pointer-events-none" />
            </div>
          )}
        </ScrollAnimate>

      </div>
    </section>
  );
}