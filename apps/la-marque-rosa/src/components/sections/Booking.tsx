// src/components/sections/Booking.tsx
import React, { useState } from "react";
import { Calendar, Clock, User, Mail, MessageSquare, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollAnimate } from "@/components/ui/ScrollAnimate";

interface BookingProps {
  phoneLink?: string;
  email?: string;
}

export default function Booking({ phoneLink = "tel:+18092768888", email = "info@lamarquerosa.com" }: BookingProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "masaje",
    date: "",
    time: "",
    notes: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulación de envío hermético acelerado
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <section id="reservar" className="py-24 lg:py-32 bg-blush relative overflow-hidden">
      {/* 🔮 Detalles estéticos de fondo */}
      <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute -right-24 -bottom-24 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />
      
      <div className="mx-auto max-w-3xl px-6 relative z-10">
        
        {/* 🎬 CABECERA CON REVELADO ASCENDENTE LIMPIO */}
        <ScrollAnimate 
          once={false} 
          variant="counter"
          className="text-center max-w-2xl mx-auto mb-12 [transition-duration:1200ms]! ease-[cubic-bezier(0.16,1,0.3,1)] [transform:translateY(20px)] data-[state=visible]:[transform:translateY(0)]"
        >
          <div className="text-xs uppercase tracking-[0.35em] text-rose-deep mb-4">Reserva Inmediata</div>
          <h2 className="font-display text-4xl sm:text-5xl leading-tight">
            Comienza tu viaje hacia la <span className="italic text-rose-deep">serenidad</span>.
          </h2>
          <p className="mt-4 text-sm text-muted-foreground max-w-md mx-auto">
            Selecciona tu tratamiento, fecha y hora preferida. Nuestro equipo se pondrá en contacto contigo en minutos para confirmar.
          </p>
        </ScrollAnimate>

        {/* 📋 CONTENEDOR DEL FORMULARIO AUTÓNOMO */}
        <ScrollAnimate 
          once={false} 
          variant="counter"
          delay={150}
          className="bg-card border border-border/60 p-6 md:p-12 shadow-md rounded-md [transition-duration:1400ms]! ease-[cubic-bezier(0.16,1,0.3,1)] [transform:translateY(30px)] data-[state=visible]:[transform:translateY(0)]"
        >
          {isSubmitted ? (
            <div className="text-center py-12">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary mb-6">
                <Sparkles className="h-6 w-6" />
              </div>
              <h3 className="font-display text-2xl text-foreground">¡Solicitud Recibida!</h3>
              <p className="mt-4 text-sm text-muted-foreground max-w-sm mx-auto leading-relaxed">
                Hemos bloqueado tu espacio de forma tentativa. Nos comunicaremos contigo vía WhatsApp o correo para formalizar tu cita.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline" onClick={() => setIsSubmitted(false)} className="rounded-md">
                  Nueva Reserva
                </Button>
                <Button asChild className="rounded-md bg-primary text-primary-foreground">
                  <a href={phoneLink}>Contactar por WhatsApp</a>
                </Button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                {/* Nombre */}
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider text-muted-foreground flex items-center gap-2 font-medium">
                    <User className="h-3.5 w-3.5 text-gold" /> Nombre Completo
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-secondary/10 border border-border/40 px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors rounded-md text-foreground"
                    placeholder="Tu nombre"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider text-muted-foreground flex items-center gap-2 font-medium">
                    <Mail className="h-3.5 w-3.5 text-gold" /> Correo Electrónico
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-secondary/10 border border-border/40 px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors rounded-md text-foreground"
                    placeholder="correo@ejemplo.com"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-3 gap-6">
                {/* Servicio */}
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider text-muted-foreground flex items-center gap-2 font-medium">
                    <Sparkles className="h-3.5 w-3.5 text-gold" /> Tratamiento
                  </label>
                  <div className="relative">
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-secondary/10 border border-border/40 px-3 py-3 text-sm focus:outline-none focus:border-primary transition-colors rounded-md text-foreground appearance-none cursor-pointer"
                    >
                      <option value="masaje">Masajes Terapéuticos</option>
                      <option value="facial">Faciales Rejuvenecedores</option>
                      <option value="corporal">Rituales Corporales</option>
                    </select>
                  </div>
                </div>

                {/* Fecha */}
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider text-muted-foreground flex items-center gap-2 font-medium">
                    <Calendar className="h-3.5 w-3.5 text-gold" /> Fecha Ideal
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full bg-secondary/10 border border-border/40 px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors rounded-md text-foreground"
                  />
                </div>

                {/* Hora */}
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider text-muted-foreground flex items-center gap-2 font-medium">
                    <Clock className="h-3.5 w-3.5 text-gold" /> Hora Preferida
                  </label>
                  <input
                    type="time"
                    required
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full bg-secondary/10 border border-border/40 px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors rounded-md text-foreground"
                  />
                </div>
              </div>

              {/* Notas */}
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-wider text-muted-foreground flex items-center gap-2 font-medium">
                  <MessageSquare className="h-3.5 w-3.5 text-gold" /> Preferencias Especiales
                </label>
                <textarea
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full bg-secondary/10 border border-border/40 px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors rounded-md text-foreground resize-none"
                  placeholder="Ej. Alergias, enfoque en espalda..."
                />
              </div>

              {/* Botón de Envío con Destello Radial Veloz */}
              <div className="pt-4">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="relative w-full rounded-md py-6 uppercase tracking-[0.15em] bg-primary text-primary-foreground overflow-hidden active:scale-[0.98] transition-all disabled:opacity-50 group/btn-submit px-6 whitespace-nowrap transform-gpu"
                >
                  {!isSubmitting && (
                    <div 
                      className="absolute inset-0 pointer-events-none z-0 mix-blend-screen opacity-0 transform-gpu"
                      style={{
                        background: 'radial-gradient(circle, rgba(255, 255, 255, 0.45) 0%, transparent 70%)',
                        animation: 'latido-veloz 1.6s infinite cubic-bezier(0.25, 1, 0.5, 1)',
                      }}
                    />
                  )}

                  <span className="relative z-10 block text-xs font-medium whitespace-nowrap">
                    {isSubmitting ? "Procesando Solicitude..." : "Solicitar Reserva Ahora"}
                  </span>
                </Button>
              </div>
            </form>
          )}
        </ScrollAnimate>
      </div>

      {/* ⚡ Registro seguro de Keyframes */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes latido-veloz {
          0% {
            transform: scale(0.1);
            opacity: 0;
          }
          20% {
            opacity: 1;
          }
          75% {
            transform: scale(2.3);
            opacity: 0;
          }
          100% {
            transform: scale(2.3);
            opacity: 0;
          }
        }
      `}} />
    </section>
  );
}