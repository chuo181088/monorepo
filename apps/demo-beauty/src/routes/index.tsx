import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, useMemo } from "react";
import {
  Syringe,
  Zap,
  Sparkles,
  Star,
  ArrowUpRight,
  MapPin,
  Clock,
  MessageCircle,
  Mail,
  Phone,
  X,
  Check,
} from "lucide-react";
import { z } from "zod";
import heroImg from "@/assets/hero.jpg";
import g1 from "@/assets/g1.jpg";
import g2 from "@/assets/g2.jpg";
import g3 from "@/assets/g3.jpg";
import g4 from "@/assets/g4.jpg";
import g5 from "@/assets/g5.jpg";
import g6 from "@/assets/g6.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aesthetic Lab — Medicina Estética & Tecnología Láser Premium" },
      {
        name: "description",
        content:
          "Estudio de estética avanzada. Medicina estética, tecnología láser y cuidado de la piel premium.",
      },
      { property: "og:title", content: "Aesthetic Lab — Aesthetics. Refined." },
      { property: "og:description", content: "El futuro de tu belleza, hoy." },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Landing,
});

function useParallax() {
  const [y, setY] = useState(0);
  useEffect(() => {
    const onScroll = () => setY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return y;
}

function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-40">
      <div className="mx-auto max-w-7xl px-4 md:px-10 mt-4">
        <nav className="glass-soft rounded-full flex items-center justify-between px-5 md:px-7 py-3 shadow-soft">
          <a href="#" className="flex items-center gap-2">
            <span className="font-display text-2xl text-foreground tracking-wide">AL</span>
            <span className="hidden sm:block text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              Aesthetic Lab
            </span>
          </a>
          <ul className="hidden md:flex items-center gap-8 text-xs uppercase tracking-[0.25em] text-muted-foreground">
            <li><a href="#servicios" className="hover:text-foreground transition-colors">Servicios</a></li>
            <li><a href="#ciencia" className="hover:text-foreground transition-colors">Ciencia</a></li>
            <li><a href="#galeria" className="hover:text-foreground transition-colors">Galería</a></li>
            <li><a href="#reserva" className="hover:text-foreground transition-colors">Reservar</a></li>
          </ul>
          <a
            href="#reserva"
            className="text-[11px] uppercase tracking-[0.2em] px-4 py-2 rounded-full bg-primary text-primary-foreground hover:bg-foreground transition-colors"
          >
            Reservar
          </a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  const y = useParallax();
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-background pt-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10 grid md:grid-cols-12 gap-10 items-center w-full">
        <div className="md:col-span-7 animate-luxe-fade">
          <div className="flex items-center gap-3 mb-8">
            <span className="h-px w-12 bg-taupe" />
            <span className="text-[11px] uppercase tracking-[0.4em] text-taupe">
              Medicina Estética Avanzada
            </span>
          </div>
          <h1 className="font-display text-6xl md:text-8xl leading-[0.95] text-foreground">
            Aesthetics.<br />
            <em className="not-italic text-clay">Refined.</em>
          </h1>
          <p className="mt-8 text-lg text-muted-foreground max-w-xl font-light leading-relaxed">
            El futuro de tu belleza, hoy. Tecnología láser, medicina estética
            y rituales de piel diseñados con precisión clínica y sensibilidad editorial.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <a
              href="#reserva"
              className="group inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-xl text-sm uppercase tracking-[0.2em] shadow-cta hover:bg-foreground transition-colors duration-300"
            >
              Solicitar Consulta Privada
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm uppercase tracking-[0.2em] text-foreground border hairline hover:bg-cream transition-colors"
            >
              Explorar Tratamientos
            </a>
          </div>
        </div>
        <div className="md:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-card">
            <img
              src={heroImg}
              alt="Estudio de estética de lujo"
              width={1200}
              height={1500}
              className="w-full h-full object-cover"
              style={{ transform: `translate3d(0, ${y * 0.05}px, 0) scale(1.05)` }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function SocialProof() {
  return (
    <section className="border-y hairline bg-cream">
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-6 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
        <div className="flex items-center gap-1.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="w-4 h-4 text-taupe" fill="currentColor" strokeWidth={0} />
          ))}
        </div>
        <span className="text-[11px] uppercase tracking-[0.35em] text-muted-foreground text-center">
          Confianza Certificada — Calificación 5.0 en Google
        </span>
        <span className="hidden md:inline h-4 w-px bg-border" />
        <span className="text-[11px] uppercase tracking-[0.35em] text-muted-foreground">
          +2,400 Tratamientos Realizados
        </span>
      </div>
    </section>
  );
}

const services = [
  { icon: Syringe, title: "Inyecciones Estéticas", desc: "Bótox, ácido hialurónico y bioestimuladores con técnica forense para resultados imperceptibles.", code: "01" },
  { icon: Zap, title: "Tecnología Láser", desc: "Plataformas láser de cuarta generación: rejuvenecimiento, depilación definitiva y resurfacing.", code: "02" },
  { icon: Sparkles, title: "Cuidado de Piel Avanzado", desc: "Protocolos cosmecéuticos a medida con principios activos de grado médico y diagnóstico digital.", code: "03" },
];

function Services() {
  return (
    <section id="servicios" className="py-28 md:py-36 bg-background">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex items-end justify-between mb-14 flex-wrap gap-6">
          <div>
            <span className="text-[11px] uppercase tracking-[0.4em] text-taupe">— Servicios de Vanguardia</span>
            <h2 className="font-display text-5xl md:text-7xl mt-4 max-w-2xl">
              Una doctrina <em className="text-clay not-italic">técnica</em> del lujo.
            </h2>
          </div>
          <a href="#" className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-clay hover:text-foreground transition-colors">
            Ver Catálogo Técnico
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s) => (
            <article
              key={s.code}
              className="bg-card rounded-2xl p-8 md:p-10 shadow-soft hover:shadow-card transition-all duration-500 hover:-translate-y-1 group"
            >
              <div className="flex items-start justify-between mb-12">
                <div className="w-12 h-12 rounded-full border hairline flex items-center justify-center bg-cream">
                  <s.icon className="w-5 h-5 text-clay" strokeWidth={1.4} />
                </div>
                <span className="text-[10px] tracking-[0.3em] text-muted-foreground">/{s.code}</span>
              </div>
              <h3 className="font-display text-3xl mb-4">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-light">{s.desc}</p>
              <div className="mt-10 pt-6 border-t hairline flex items-center justify-between">
                <span className="text-[11px] uppercase tracking-[0.3em] text-clay">Detalles</span>
                <ArrowUpRight className="w-4 h-4 text-clay group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Science() {
  return (
    <section id="ciencia" className="py-28 md:py-36 bg-cream">
      <div className="mx-auto max-w-7xl px-6 md:px-10 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-card">
          <img src={g1} alt="Ritual de cuidado de la piel" width={800} height={1000} loading="lazy" className="w-full h-full object-cover" />
        </div>
        <div>
          <span className="text-[11px] uppercase tracking-[0.4em] text-taupe">— La Ciencia Detrás</span>
          <h2 className="font-display text-5xl md:text-6xl mt-4 leading-[1.05]">
            Donde la <em className="text-clay not-italic">medicina</em> encuentra el diseño.
          </h2>
          <p className="mt-8 text-muted-foreground font-light leading-relaxed">
            Cada protocolo es supervisado por nuestro equipo médico, con
            tecnología certificada de origen suizo y alemán. Diagnóstico digital,
            biometría facial 3D y trazabilidad completa de cada activo aplicado.
          </p>
          <dl className="mt-12 grid grid-cols-3 gap-6 border-t hairline pt-8">
            {[
              { k: "12+", v: "Años de práctica" },
              { k: "ISO", v: "Certificación clínica" },
              { k: "100%", v: "Productos auditados" },
            ].map((m) => (
              <div key={m.v}>
                <dt className="font-display text-clay text-3xl md:text-4xl">{m.k}</dt>
                <dd className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground mt-2">{m.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  const items = [
    { src: g2, h: "row-span-2", alt: "Tecnología láser estética" },
    { src: g3, h: "", alt: "Retrato editorial" },
    { src: g4, h: "", alt: "Sérum cosmético premium" },
    { src: g5, h: "row-span-2", alt: "Sala de tratamiento minimalista" },
    { src: g6, h: "", alt: "Precisión médica" },
    { src: g1, h: "", alt: "Ritual de piel" },
  ];
  return (
    <section id="galeria" className="py-28 md:py-36 bg-background">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-14 max-w-2xl">
          <span className="text-[11px] uppercase tracking-[0.4em] text-taupe">— Galería Curada</span>
          <h2 className="font-display text-5xl md:text-7xl mt-4">
            Una estética <em className="text-clay not-italic">cinematográfica</em>.
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 auto-rows-[220px] md:auto-rows-[280px] gap-3 md:gap-4">
          {items.map((it, i) => (
            <figure key={i} className={`relative overflow-hidden rounded-xl group shadow-soft ${it.h}`}>
              <img src={it.src} alt={it.alt} loading="lazy" className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────── Booking Form ─────────────── */

const SERVICES = [
  "Inyecciones Estéticas",
  "Tecnología Láser",
  "Cuidado de Piel Avanzado",
  "Consulta General",
];

const bookingSchema = z.object({
  name: z.string().trim().min(2, "Ingresa tu nombre").max(80, "Máximo 80 caracteres"),
  whatsapp: z.string().trim().min(7, "Número inválido").max(20, "Máximo 20 dígitos").regex(/^[+0-9\s().-]+$/, "Solo números y símbolos"),
  service: z.string().min(1, "Selecciona un servicio"),
  date: z.string().min(1, "Selecciona una fecha"),
});

type BookingForm = z.infer<typeof bookingSchema>;

function FloatingField({
  label,
  id,
  type = "text",
  value,
  onChange,
  error,
  children,
  min,
}: {
  label: string;
  id: string;
  type?: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  children?: React.ReactNode;
  min?: string;
}) {
  const filled = value.length > 0;
  const Wrapper = children ? "div" : "div";
  return (
    <Wrapper className="relative">
      {children ? (
        children
      ) : (
        <input
          id={id}
          type={type}
          value={value}
          min={min}
          onChange={(e) => onChange(e.target.value)}
          placeholder=" "
          className={`peer w-full bg-transparent border-b ${error ? "border-destructive" : "hairline"} px-1 pt-6 pb-2 text-foreground outline-none focus:border-clay transition-colors`}
        />
      )}
      <label
        htmlFor={id}
        className={`absolute left-1 transition-all pointer-events-none text-muted-foreground ${
          filled ? "top-1 text-[10px] uppercase tracking-[0.25em] text-taupe" : "top-5 text-sm"
        } peer-focus:top-1 peer-focus:text-[10px] peer-focus:uppercase peer-focus:tracking-[0.25em] peer-focus:text-clay`}
      >
        {label}
      </label>
      {error && <p className="mt-1 text-[11px] text-destructive">{error}</p>}
    </Wrapper>
  );
}

function Booking() {
  const today = useMemo(() => new Date().toISOString().split("T")[0], []);
  const [form, setForm] = useState<BookingForm>({ name: "", whatsapp: "", service: "", date: "" });
  const [errors, setErrors] = useState<Partial<Record<keyof BookingForm, string>>>({});
  const [sent, setSent] = useState(false);

  const update = <K extends keyof BookingForm>(k: K, v: string) => {
    setForm((f) => ({ ...f, [k]: v }));
    setErrors((e) => ({ ...e, [k]: undefined }));
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const res = bookingSchema.safeParse(form);
    if (!res.success) {
      const errs: Partial<Record<keyof BookingForm, string>> = {};
      res.error.issues.forEach((i) => {
        const k = i.path[0] as keyof BookingForm;
        errs[k] = i.message;
      });
      setErrors(errs);
      return;
    }
    setSent(true);
  };

  return (
    <section id="reserva" className="py-28 md:py-36 bg-cream">
      <div className="mx-auto max-w-6xl px-6 md:px-10 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div>
          <span className="text-[11px] uppercase tracking-[0.4em] text-taupe">— Reserva tu momento</span>
          <h2 className="font-display text-5xl md:text-7xl mt-4 leading-[0.95]">
            Tu <em className="text-clay not-italic">transformación</em> comienza aquí.
          </h2>
          <p className="mt-6 text-muted-foreground font-light leading-relaxed max-w-md">
            Reserva una consulta privada con nuestro equipo médico. Te
            confirmaremos por WhatsApp en menos de 24 horas, con total
            confidencialidad.
          </p>
          <ul className="mt-10 space-y-3 text-sm text-muted-foreground">
            {["Diagnóstico personalizado sin costo", "Plan de tratamiento confidencial", "Atención privada con cita reservada"].map((b) => (
              <li key={b} className="flex items-center gap-3">
                <span className="w-5 h-5 rounded-full bg-taupe/15 flex items-center justify-center">
                  <Check className="w-3 h-3 text-clay" strokeWidth={2.2} />
                </span>
                {b}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-card rounded-3xl shadow-card p-7 md:p-10">
          {sent ? (
            <div className="py-16 text-center">
              <div className="w-14 h-14 rounded-full bg-cream mx-auto flex items-center justify-center">
                <Check className="w-6 h-6 text-clay" strokeWidth={1.6} />
              </div>
              <h3 className="font-display text-3xl mt-6">Gracias, {form.name.split(" ")[0]}.</h3>
              <p className="text-sm text-muted-foreground mt-3 max-w-xs mx-auto">
                Hemos recibido tu solicitud. Te contactaremos por WhatsApp para confirmar tu cita.
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-7" noValidate>
              <div>
                <span className="text-[10px] uppercase tracking-[0.35em] text-taupe">Formulario privado</span>
                <h3 className="font-display text-3xl mt-2">Agenda tu consulta</h3>
              </div>

              <FloatingField id="name" label="Nombre completo" value={form.name} onChange={(v) => update("name", v)} error={errors.name} />
              <FloatingField id="whatsapp" label="WhatsApp" type="tel" value={form.whatsapp} onChange={(v) => update("whatsapp", v)} error={errors.whatsapp} />

              <FloatingField id="service" label="Servicio de interés" value={form.service} onChange={(v) => update("service", v)} error={errors.service}>
                <select
                  id="service"
                  value={form.service}
                  onChange={(e) => update("service", e.target.value)}
                  className={`peer w-full bg-transparent border-b ${errors.service ? "border-destructive" : "hairline"} px-1 pt-6 pb-2 text-foreground outline-none focus:border-clay transition-colors appearance-none`}
                >
                  <option value=""> </option>
                  {SERVICES.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </FloatingField>

              <FloatingField id="date" label="Fecha preferida" value={form.date} onChange={(v) => update("date", v)} error={errors.date}>
                <input
                  id="date"
                  type="date"
                  min={today}
                  value={form.date}
                  onChange={(e) => update("date", e.target.value)}
                  className={`peer w-full bg-transparent border-b ${errors.date ? "border-destructive" : "hairline"} px-1 pt-6 pb-2 text-foreground outline-none focus:border-clay transition-colors`}
                />
              </FloatingField>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-xl text-sm uppercase tracking-[0.2em] shadow-cta hover:bg-foreground transition-colors duration-300"
              >
                Reservar mi consulta
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <p className="text-[11px] text-muted-foreground text-center">
                Al enviar aceptas nuestra política de privacidad. Tus datos no se comparten.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contacto" className="py-24 bg-background border-t hairline">
      <div className="mx-auto max-w-7xl px-6 md:px-10 grid md:grid-cols-2 gap-10">
        <div className="relative aspect-[4/3] md:aspect-auto rounded-2xl overflow-hidden shadow-soft bg-cream">
          <div
            className="absolute inset-0 opacity-70"
            style={{
              backgroundImage:
                "linear-gradient(rgba(176,159,149,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(176,159,149,0.18) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(166,139,128,0.18),transparent_60%)]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-clay shadow-[0_0_0_8px_rgba(166,139,128,0.18)]" />
            <span className="text-[10px] uppercase tracking-[0.3em] text-clay">Aesthetic Lab</span>
          </div>
        </div>

        <div className="flex flex-col justify-between">
          <div>
            <span className="text-[11px] uppercase tracking-[0.4em] text-taupe">— Ubicación & Contacto</span>
            <h2 className="font-display text-4xl md:text-5xl mt-4">Visítanos en privado.</h2>
          </div>

          <ul className="mt-10 space-y-6 text-sm">
            <li className="flex gap-4 items-start">
              <MapPin className="w-4 h-4 text-clay mt-1" strokeWidth={1.4} />
              <div>
                <p className="text-foreground">Av. Reforma 1820, Piso 12</p>
                <p className="text-muted-foreground">Polanco · Ciudad de México</p>
              </div>
            </li>
            <li className="flex gap-4 items-start">
              <Clock className="w-4 h-4 text-clay mt-1" strokeWidth={1.4} />
              <div>
                <p className="text-foreground">Lun — Vie · 10:00 a 20:00</p>
                <p className="text-muted-foreground">Sábados con cita previa</p>
              </div>
            </li>
          </ul>

          <div className="mt-10 grid grid-cols-3 gap-3">
            {[
              { icon: MessageCircle, label: "WhatsApp", href: "https://wa.me/525555555555" },
              { icon: Mail, label: "Email", href: "mailto:hello@aestheticlab.mx" },
              { icon: Phone, label: "Llamar", href: "tel:+525555555555" },
            ].map((c) => (
              <a
                key={c.label}
                href={c.href}
                className="bg-cream rounded-xl p-4 flex flex-col items-center gap-2 shadow-soft hover:shadow-card hover:-translate-y-0.5 transition-all"
              >
                <c.icon className="w-4 h-4 text-clay" strokeWidth={1.4} />
                <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{c.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t hairline py-10 bg-background">
      <div className="mx-auto max-w-7xl px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
        <span>© {new Date().getFullYear()} Aesthetic Lab</span>
        <span className="text-clay">Crafted by Lucian Creative</span>
      </div>
    </footer>
  );
}

/* ─────────────── Floating WhatsApp ─────────────── */

function WhatsAppFAB() {
  const [showTip, setShowTip] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShowTip(true), 2500);
    const h = setTimeout(() => setShowTip(false), 10000);
    return () => {
      clearTimeout(t);
      clearTimeout(h);
    };
  }, []);

  return (
    <div className="fixed bottom-5 right-5 md:bottom-7 md:right-7 z-50 flex items-end gap-3">
      {showTip && !dismissed && (
        <div className="animate-tip-in glass-soft shadow-card rounded-2xl px-4 py-3 max-w-[220px] relative">
          <button
            onClick={() => setDismissed(true)}
            aria-label="Cerrar"
            className="absolute -top-2 -left-2 w-6 h-6 rounded-full bg-card shadow-soft flex items-center justify-center text-muted-foreground hover:text-foreground"
          >
            <X className="w-3 h-3" />
          </button>
          <p className="text-xs text-foreground leading-snug">¿Necesitas ayuda para agendar?</p>
          <span className="absolute -bottom-1.5 right-6 w-3 h-3 rotate-45 bg-white/70 border-r border-b hairline" />
        </div>
      )}
      <a
        href="https://wa.me/525555555555?text=Hola%20Aesthetic%20Lab%2C%20me%20gustar%C3%ADa%20agendar%20una%20consulta."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chatear por WhatsApp"
        className="animate-wa-pulse w-14 h-14 md:w-16 md:h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-foreground transition-colors"
      >
        <MessageCircle className="w-6 h-6" strokeWidth={1.6} />
      </a>
    </div>
  );
}

function Landing() {
  return (
    <main className="bg-background text-foreground min-h-screen">
      <Nav />
      <Hero />
      <SocialProof />
      <Services />
      <Science />
      <Gallery />
      <Booking />
      <Contact />
      <Footer />
      <WhatsAppFAB />
    </main>
  );
}
