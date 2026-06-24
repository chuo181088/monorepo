import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ScrollAnimate } from "@/components/ui/ScrollAnimate"; // <-- Añade esta línea (ajusta la ruta si está en otra carpeta)
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { CalendarHeart } from "lucide-react";


export default function BookingCTA() {
  const [submitting, setSubmitting] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    const form = new FormData(e.currentTarget);
    const nombre = String(form.get("nombre") || "").trim();
    const telefono = String(form.get("telefono") || "").trim();
    const servicio = String(form.get("servicio") || "");
    const fecha = String(form.get("fecha") || "");

    if (!nombre || !telefono || !servicio || !fecha) {
      toast.error("Por favor completa todos los campos requeridos.");
      setSubmitting(false);
      return;
    }

    const msg = `Hola Yira, soy ${nombre}. Me gustaría reservar *${servicio}* para el ${fecha}. Mi teléfono: ${telefono}.`;
    const url = `https://wa.me/18095812222?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
    toast.success("¡Te redirigimos a WhatsApp para confirmar tu cita!");
    setSubmitting(false);
    (e.target as HTMLFormElement).reset();
  }

  return (
    <section id="reservar" className="py-24">
      <div className="container mx-auto px-4 sm:px-6">

        {/* 🌟 Cambiado a Mayúscula y corregido el texto fantasma */}
        <ScrollAnimate variant="default" once={false}>

          {/* Contenedor Principal con Máscara */}
          <div className="relative overflow-hidden rounded-3xl p-[3px] shadow-elegant">
            
            {/* Capa Intermedia: El rayo de luz que gira infinitamente */}
            <div className="absolute inset-[-200%] animate-halo bg-halo-gradient" />

            {/* Capa Superior: Contenido del formulario */}
            <div className="relative grid items-center gap-10 rounded-[1.4rem] bg-background/95 p-6 md:p-14 lg:grid-cols-2">
              <div>
                <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-gold">
                  <CalendarHeart className="h-4 w-4" />
                  Reserva Online
                </span>
                <h2 className="mt-4 font-serif text-3xl leading-tight md:text-5xl">
                  ¿Lista para tu <span className="italic text-gold">Transformación</span>?
                </h2>
                <p className="mt-5 max-w-md text-sm text-muted-foreground md:text-base">
                  Tu momento de relajación y belleza está a solo un clic de
                  distancia. Reserva tu cita de forma fácil y rápida, y nuestro
                  equipo confirmará tu disponibilidad por WhatsApp.
                </p>

                <ul className="mt-8 space-y-3 text-sm text-foreground">
                  <li>· Confirmación inmediata por WhatsApp</li>
                  <li>· Atención personalizada según tu servicio</li>
                  <li>· Cancela o reagenda fácilmente</li>
                </ul>
              </div>

              <form
                onSubmit={handleSubmit}
                className="space-y-4 rounded-2xl border border-border/60 bg-card p-5 shadow-soft sm:p-6 md:p-8"
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="nombre">Nombre</Label>
                    <Input id="nombre" name="nombre" placeholder="Tu nombre" maxLength={80} required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="telefono">Teléfono</Label>
                    <Input id="telefono" name="telefono" type="tel" placeholder="809-000-0000" maxLength={20} required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email (opcional)</Label>
                  <Input id="email" name="email" type="email" placeholder="[email protected]" maxLength={120} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="servicio">Servicio</Label>
                  <Select name="servicio" required>
                    <SelectTrigger id="servicio">
                      <SelectValue placeholder="Elige un servicio" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Corte y Estilo">Corte y Estilo</SelectItem>
                      <SelectItem value="Coloración Experta">Coloración Experta</SelectItem>
                      <SelectItem value="Manicura & Pedicura">Manicura & Pedicura</SelectItem>
                      <SelectItem value="Tratamiento Facial">Tratamiento Facial</SelectItem>
                      <SelectItem value="Maquillaje">Maquillaje</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="fecha">Fecha preferida</Label>
                  <Input id="fecha" name="fecha" type="date" required />
                </div>
                <Button type="submit" variant="gold" size="lg" className="w-full" disabled={submitting}>
                  Ver Disponibilidad y Reservar
                </Button>
              </form>
            </div>
          </div>
          
        </ScrollAnimate>

      </div>
    </section>
  );
}