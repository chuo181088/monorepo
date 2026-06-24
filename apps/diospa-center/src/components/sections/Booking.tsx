// src/components/sections/Booking.tsx

import React, { useState } from "react";
import { Calendar, Clock, User, Mail, MessageSquare, Sparkles } from "lucide-react";
import { Button } from "@salones/ui-components/button";
import { ScrollAnimate } from "@salones/ui-components/ScrollAnimate";

interface ServicioOption {
  value: string;
  label: string;
}

interface BookingProps {
  microTitulo: string;
  titulo: string;
  tituloHighlight: string;
  descripcion: string;
  botonText: string;
  phoneLink: string;
  email: string;
  servicios: ServicioOption[];
}

export default function Booking({
  microTitulo,
  titulo,
  tituloHighlight,
  descripcion,
  botonText,
  phoneLink,
  email,
  servicios,
}: BookingProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    date: "",
    time: "",
    notes: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Por ahora: solo simulación
    // Después: enviar a Supabase o email
    setTimeout(() => {
      console.log("Datos del formulario:", formData);
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <section id="reservar" className="py-28 md:py-40 bg-secondary/30 relative overflow-hidden">
      <div className="mx-auto max-w-3xl px-6 relative z-10">
        
        {/* Cabecera */}
        <ScrollAnimate once={false}>
          {(isVisible) => (
            <div 
              className={`text-center max-w-2xl mx-auto mb-12 transform transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <div className="text-xs uppercase tracking-[0.35em] text-primary mb-6">
                {microTitulo}
              </div>
              <h2 className="font-serif text-4xl md:text-5xl leading-tight">
                {titulo} <span className="italic">{tituloHighlight}</span>.
              </h2>
              <p className="mt-4 text-sm text-muted-foreground max-w-md mx-auto">
                {descripcion}
              </p>
            </div>
          )}
        </ScrollAnimate>

        {/* Formulario */}
        <ScrollAnimate once={false}>
          {(isVisible) => (
            <div 
              className={`bg-background border border-border/60 p-8 md:p-12 shadow-sm transform transition-all duration-[1400ms] delay-100 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              {isSubmitted ? (
                <div className="text-center py-12 animate-fade-in">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary mb-6">
                    <Sparkles className="h-6 w-6" />
                  </div>
                  <h3 className="font-serif text-2xl text-foreground">¡Solicitud Recibida!</h3>
                  <p className="mt-4 text-sm text-muted-foreground max-w-sm mx-auto leading-relaxed">
                    Hemos bloqueado tu espacio de forma tentativa. Nos comunicaremos contigo vía WhatsApp o correo para formalizar tu cita.
                  </p>
                  <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                    <Button variant="outline" onClick={() => setIsSubmitted(false)} className="rounded-none">
                      Nueva Reserva
                    </Button>
                    <Button asChild className="rounded-none bg-primary text-primary-foreground">
                      <a href={phoneLink}>Contactar por WhatsApp</a>
                    </Button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    {/* Nombre */}
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                        <User className="h-3.5 w-3.5 text-primary" /> Nombre Completo
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-secondary/20 border border-border/50 px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors rounded-none text-foreground"
                        placeholder="Tu nombre"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                        <Mail className="h-3.5 w-3.5 text-primary" /> Correo Electrónico
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-secondary/20 border border-border/50 px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors rounded-none text-foreground"
                        placeholder="correo@ejemplo.com"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-3 gap-6">
                    {/* Servicio (dinámico desde config) */}
                    <div className="space-y-2 sm:col-span-1">
                      <label className="text-xs uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                        <Sparkles className="h-3.5 w-3.5 text-primary" /> Tratamiento
                      </label>
                      <select
                        required
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full bg-secondary/20 border border-border/50 px-3 py-3 text-sm focus:outline-none focus:border-primary transition-colors rounded-none text-foreground appearance-none"
                      >
                        <option value="">Seleccionar...</option>
                        {servicios.map((servicio) => (
                          <option key={servicio.value} value={servicio.value}>
                            {servicio.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Fecha */}
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                        <Calendar className="h-3.5 w-3.5 text-primary" /> Fecha Ideal
                      </label>
                      <input
                        type="date"
                        required
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full bg-secondary/20 border border-border/50 px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors rounded-none text-foreground"
                      />
                    </div>

                    {/* Hora */}
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                        <Clock className="h-3.5 w-3.5 text-primary" /> Hora Preferida
                      </label>
                      <input
                        type="time"
                        required
                        value={formData.time}
                        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                        className="w-full bg-secondary/20 border border-border/50 px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors rounded-none text-foreground"
                      />
                    </div>
                  </div>

                  {/* Notas */}
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                      <MessageSquare className="h-3.5 w-3.5 text-primary" /> Preferencias Especiales (Opcional)
                    </label>
                    <textarea
                      rows={3}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full bg-secondary/20 border border-border/50 px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors rounded-none text-foreground resize-none"
                      placeholder="Ej. Alergias, enfoque en espalda, presión alta..."
                    />
                  </div>

                  {/* Botón */}
                  <div className="pt-4">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="relative w-full rounded-none py-6 uppercase tracking-normal sm:tracking-[0.2em] bg-primary text-primary-foreground overflow-hidden active:scale-[0.99] transition-all disabled:opacity-50 group/btn-submit px-2 sm:px-6"
                    >
                      <div 
                        className="absolute inset-0 pointer-events-none z-0 mix-blend-screen opacity-0"
                        style={{
                          background: 'radial-gradient(circle, rgba(255, 255, 255, 0.45) 0%, transparent 70%)',
                          animation: !isSubmitting ? 'latido-veloz 1.6s infinite cubic-bezier(0.25, 1, 0.5, 1)' : 'none',
                        }}
                      />
                      <span className="relative z-10 block text-[11px] sm:text-xs md:text-sm font-medium tracking-wide sm:tracking-[0.2em]">
                        {isSubmitting ? "Procesando Solicitud..." : botonText}
                      </span>
                      <style>{`
                        @keyframes latido-veloz {
                          0% { transform: scale(0.1); opacity: 0; }
                          20% { opacity: 1; }
                          75% { transform: scale(2.5); opacity: 0; }
                          100% { transform: scale(2.5); opacity: 0; }
                        }
                      `}</style>
                    </Button>
                  </div>
                </form>
              )}
            </div>
          )}
        </ScrollAnimate>
      </div>
    </section>
  );
}