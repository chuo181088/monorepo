import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Star, MapPin, Phone, MessageCircle, Sparkles, Heart, Leaf, Award, Instagram, Facebook, Menu, X } from "lucide-react";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import { useEffect } from "react";
import { ScrollAnimate } from "@/components/ui/ScrollAnimate";

import heroImg from "@/assets/hero.jpg";
import sFacial from "@/assets/service-facial.jpg";
import sMassage from "@/assets/service-massage.jpg";
import sMicro from "@/assets/service-micro.jpg";
import sDrainage from "@/assets/service-drainage.jpg";
import darleen from "@/assets/darleen.jpg";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";

export const Route = createFileRoute("/")({
  component: LandingPage,
  head: () => ({
    meta: [
      { title: "Estetic Center Darleen Curiel — Centro de Estética en Santiago RD" },
      {
        name: "description",
        content:
          "Centro de estética en Santiago de los Caballeros. Tratamientos faciales, masajes reductores y cuidado de la piel profesional con Darleen Curiel. Agenda tu cita hoy.",
      },
      { property: "og:title", content: "Estetic Center Darleen Curiel — Estética en Santiago RD" },
      { property: "og:description", content: "Resalta tu belleza natural con tratamientos faciales y corporales de vanguardia." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://darleen-curiel.lucian-creative.lat/" }, // Es mejor poner la URL absoluta
      // Aquí agregamos la etiqueta OG de imagen
      { property: "og:image", content: "https://darleen-curiel.lucian-creative.lat/og-darleen.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
    ],
    links: [{ rel: "canonical", href: "https://darleen-curiel.lucian-creative.lat/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BeautySalon",
          name: "Estetic Center Darleen Curiel",
          // Actualizamos la URL de la imagen aquí también
          image: "https://darleen-curiel.lucian-creative.lat/og-darleen.jpg",
          telephone: "+1-829-692-5111",
          url: "https://darleen-curiel.lucian-creative.lat/",
          address: {
            "@type": "PostalAddress",
            streetAddress: "C. 23 15",
            addressLocality: "Santiago de los Caballeros",
            postalCode: "51000",
            addressCountry: "DO",
          },
          aggregateRating: { "@type": "AggregateRating", ratingValue: "4.8", reviewCount: "50" },
        }),
      },
    ],
  }),
});

const WHATSAPP = "https://wa.me/18296925111?text=Hola%20Darleen%2C%20me%20gustar%C3%ADa%20agendar%20una%20cita";

const services = [
  { title: "Limpieza Facial Profunda", desc: "Renovación completa que purifica, exfolia e hidrata para una piel luminosa y saludable.", img: sFacial },
  { title: "Masajes Reductores", desc: "Técnicas avanzadas de moldeamiento corporal para tonificar y definir tu silueta.", img: sMassage },
  { title: "Microdermoabrasión", desc: "Exfoliación profesional que renueva la piel, atenúa manchas y revela un cutis más uniforme.", img: sMicro },
  { title: "Drenaje Linfático", desc: "Masaje terapéutico que desintoxica el organismo, reduce la retención y mejora la circulación.", img: sDrainage },
];

const gallery = [g1, g2, g3, g4, sFacial];

const testimonials = [
  { quote: "Un servicio increíble. Mi piel nunca se había sentido tan bien. 100% recomendada.", name: "María P." },
  { quote: "Darleen es una profesional excepcional. El trato es cálido y los resultados, visibles desde la primera sesión.", name: "Carolina R." },
  { quote: "El mejor centro de estética en Santiago. Higiene impecable y productos de primera calidad.", name: "Luisa M." },
];




function LandingPage() {
  // 2. INYECTAMOS EL OBSERVADOR AQUÍ ADENTRO:
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          } else {
            // TRUCO PREMIUM: Al removerla, permites que el efecto se repita al volver a pasar
            entry.target.classList.remove("is-visible");
          }
        });
      },
      { 
        threshold: 0.1, // Se dispara apenas asoma un 10%
        rootMargin: "0px 0px -40px 0px" // Un pequeño margen para que se aprecie el inicio del movimiento
      }
    );

    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Toaster richColors position="top-center" />
      <Nav />
      <Hero />
      <Stats />
      <Services />
      <About />
      <Gallery />
      <Testimonials />
      <Booking />
      <Footer />
      <AgencyContactBanner/>

    </div>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "#servicios", label: "Servicios" },
    { href: "#nosotros", label: "Nosotros" },
    { href: "#galeria", label: "Galería" },
    { href: "#testimonios", label: "Testimonios" },
    { href: "#contacto", label: "Contacto" },
  ];
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="container-px mx-auto flex h-20 max-w-7xl items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-gold" />
          <span className="font-serif text-xl tracking-tight">
            Estetic Center <span className="text-gold">Darleen Curiel</span>
          </span>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href={WHATSAPP}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-soft transition hover:opacity-90 md:inline-flex"
        >
          Agendar Cita
        </a>
        <button onClick={() => setOpen(!open)} className="md:hidden" aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="container-px mx-auto flex flex-col gap-4 py-4">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm text-muted-foreground">
                {l.label}
              </a>
            ))}
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="rounded-full bg-primary px-5 py-3 text-center text-sm font-medium text-primary-foreground">
              Agendar Cita
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="container-px mx-auto grid max-w-7xl gap-12 py-16 lg:grid-cols-2 lg:items-center lg:py-28">
        
        {/* A. EL TEXTO: Revelado inmediato hacia arriba */}
        <div className="space-y-7 hero-texto-fade">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs uppercase tracking-widest text-muted-foreground">
            <Star className="h-3.5 w-3.5 fill-gold text-gold" />
            4.8 en Google · Santiago de los Caballeros
          </span>
          <h1 className="text-5xl leading-[1.05] md:text-6xl lg:text-7xl">
            Resalta tu <em className="not-italic text-gold">belleza natural</em>.
            <br />
            La experiencia que mereces.
          </h1>
          <p className="max-w-lg text-lg leading-relaxed text-muted-foreground">
            Tratamientos estéticos faciales y corporales de vanguardia en el corazón de Santiago. Cuidado profesional, resultados visibles y un trato hecho a tu medida.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-medium text-primary-foreground shadow-elegant transition hover:opacity-90"
            >
              Agendar mi Cita Ahora
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-7 py-4 text-sm font-medium transition hover:bg-secondary"
            >
              Ver Servicios
            </a>
          </div>
          <div className="flex items-center gap-6 pt-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-2"><Award className="h-4 w-4 text-gold" /> +10 años de experiencia</div>
            <div className="flex items-center gap-2"><Heart className="h-4 w-4 text-rose" /> Atención personalizada</div>
          </div>
        </div>

        {/* B. LA FOTO: Revelado cinemático de enfoque inmediato */}
        <div className="relative hero-foto-blur">
          <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-accent via-secondary to-mint/40 blur-2xl opacity-70" />
          <img
            src={heroImg}
            alt="Centro de estética Darleen Curiel en Santiago"
            className="aspect-[4/5] w-full rounded-[2rem] object-cover shadow-elegant"
            width={1600}
            height={1200}
          />
          <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-border bg-card p-5 shadow-soft md:block">
            <div className="flex items-center gap-1 text-gold">
              {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
            </div>
            <p className="mt-1 font-serif text-2xl">4.8 / 5</p>
            <p className="text-xs text-muted-foreground">Calificación en Google</p>
          </div>
        </div>

      </div>
    </section>
  );
}

function Stats() {
  const items = [
    { k: "+10", v: "Años cuidándote" },
    { k: "4.8★", v: "Calificación Google" },
    { k: "+2,000", v: "Clientas satisfechas" },
    { k: "100%", v: "Productos premium" },
  ];
  return (
    <section className="border-y border-border/60 bg-secondary/40">
      {/* C. LOS STATS: Usamos el motor global de 'scroll-cascade' */}
      <div className="container-px mx-auto grid max-w-7xl grid-cols-2 gap-8 py-12 md:grid-cols-4 animate-on-scroll scroll-cascade">
        {items.map((i, index) => (
          <div 
            key={i.v} 
            className="text-center"
            /* Delay dinámico para que los números broten uno tras otro */
            style={{ transitionDelay: `${index * 300}ms` }}
          >
            <p className="font-serif text-4xl text-primary md:text-5xl">{i.k}</p>
            <p className="mt-1 text-sm text-muted-foreground">{i.v}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="servicios" className="container-px mx-auto max-w-7xl py-24">
      <div className="mx-auto mb-14 max-w-2xl text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-gold">Servicios</p>
        <h2 className="mt-3 text-4xl md:text-5xl">Nuestros Servicios Estrella</h2>
        <p className="mt-4 text-muted-foreground">
          Tratamientos faciales y corporales diseñados para revelar lo mejor de ti, con tecnología de vanguardia y productos profesionales.
        </p>
      </div>

      {/* 1. EL PAPÁ SE QUEDA LIMPIO (Sin clases de animación) */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {services.map((s) => (
          /* 2. CADA TARJETA LLEVA SU PROPIO DETECTOR Y SU CLASE EXCLUSIVA */
          <article 
            key={s.title} 
            className="group overflow-hidden rounded-3xl border border-border bg-card transition hover:shadow-elegant animate-on-scroll servicio-card"
          >
            <div className="aspect-[4/5] overflow-hidden">
              <img src={s.img} alt={s.title} loading="lazy" width={800} height={1000} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
            </div>
            <div className="space-y-3 p-6">
              <h3 className="text-2xl">{s.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm font-medium text-gold hover:underline">
                Reservar →
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    /* 1. SECCIÓN PRINCIPAL LIMPIA: El fondo beige abre de una vez */
    <section id="nosotros" className="bg-secondary/40">
      <div className="container-px mx-auto grid max-w-7xl gap-14 py-24 lg:grid-cols-2 lg:items-center">
        
        {/* 2. SENSOR EXCLUSIVO PARA LA FOTO: Revelado cinemático */}
        <div className="relative animate-on-scroll about-foto">
          <img src={darleen} alt="Darleen Curiel" loading="lazy" width={900} height={1100} className="aspect-[4/5] w-full rounded-[2rem] object-cover shadow-elegant" />
          <div className="absolute -right-4 -top-4 rounded-2xl bg-gold px-5 py-3 text-gold-foreground shadow-soft">
            <p className="font-serif text-lg">Darleen Curiel</p>
            <p className="text-xs opacity-90">Fundadora · Esteticista</p>
          </div>
        </div>

        {/* 3. SENSOR EXCLUSIVO PARA EL TEXTO: Subida suave */}
        <div className="space-y-6 animate-on-scroll about-contenido">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">Sobre Nosotros</p>
          <h2 className="text-4xl md:text-5xl">Conoce a Darleen Curiel y su compromiso contigo</h2>
          <p className="text-muted-foreground">
            En <strong>Estetic Center Darleen Curiel</strong> creemos que el verdadero lujo es sentirte bien en tu propia piel. Por eso cada tratamiento se diseña a tu medida, en un entorno impecable y con la calidez que mereces.
          </p>
          <p className="text-muted-foreground">
            Con más de una década de experiencia y formación continua, Darleen lidera un equipo apasionado por el cuidado de la piel profesional. Trabajamos solo con productos premium y protocolos seguros para garantizar resultados visibles desde tu primera sesión.
          </p>

          <ul className="grid gap-3 pt-2 sm:grid-cols-2 animate-on-scroll scroll-cascade">
  {[
    { i: Leaf, t: "Productos de alta gama" },
    { i: Sparkles, t: "Higiene impecable" },
    { i: Heart, t: "Trato personalizado" },
    { i: Award, t: "Formación continua" },
  ].map(({ i: Icon, t }, index) => (
    <li 
      key={t} 
      className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3 text-sm transition-all duration-500"
      /* CORRECCIÓN: Cambiamos animationDelay por transitionDelay */
      style={{ transitionDelay: `${index * 250}ms` }}
    >
      <Icon className="h-4 w-4 text-gold" /> {t}
    </li>
  ))}
</ul>

          
        </div>

      </div>
    </section>
  );
}
function Gallery() {
  return (
    /* 1. SECCIÓN TOTALMENTE LIMPIA: Abre fija y sin retrasos */
    <section id="galeria" className="container-px mx-auto max-w-7xl py-24">
      <div className="mx-auto mb-14 max-w-2xl text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-gold">Galería</p>
        <h2 className="mt-3 text-4xl md:text-5xl">Resultados que hablan por sí mismos</h2>
        <p className="mt-4 text-muted-foreground">
          Una mirada a nuestro espacio, nuestros tratamientos y los resultados de quienes confían en nosotros.
        </p>
      </div>

      {/* 2. EL CONTENEDOR PAPÁ TAMBIÉN SE QUEDA LIMPIO */}
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
        {gallery.map((src, i) => (
          <div
            key={i}
            /* 3. LA MAGIA EN CADA FOTO: 
              Le metemos el detector 'animate-on-scroll' y nuestra clase exclusiva 'foto-pop' 
            */
            className={`group overflow-hidden rounded-2xl animate-on-scroll foto-pop ${
              i % 5 === 0 ? "row-span-2 aspect-[3/5]" : "aspect-square"
            }`}
          >
            <img
              src={src}
              alt={`Trabajo ${i + 1}`}
              loading="lazy"
              className="h-full w-full object-cover transition duration-700 group-hover:scale-110 group-hover:brightness-90"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section id="testimonios" className="bg-secondary/40">
      <div className="container-px mx-auto max-w-7xl py-24">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-card px-5 py-2">
            <div className="flex text-gold">{[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}</div>
            <span className="text-sm font-medium">4.8 en Google</span>
          </div>
          <h2 className="mt-5 text-4xl md:text-5xl">Clientes satisfechos, nuestra mayor recompensa</h2>
        </div>

        {/* El contenedor papá limpio */}
        <div className="grid gap-6 md:grid-cols-3 overflow-hidden">
          {testimonials.map((t, i) => (
            <figure 
              key={t.name} 
              /* MIRA AQUÍ: Dejamos 'animate-on-scroll' fijo al principio, 
                y luego dejamos que el IF defina si va a la izquierda o derecha.
              */
              className={`rounded-3xl border border-border bg-card p-8 shadow-soft animate-on-scroll ${
                i % 2 === 0 ? "testimonio-izquierda" : "testimonio-derecha"
              }`}
            >
              <div className="mb-4 flex text-gold">{[...Array(5)].map((_, idx) => <Star key={idx} className="h-4 w-4 fill-current" />)}</div>
              <blockquote className="font-serif text-xl leading-snug text-foreground">"{t.quote}"</blockquote>
              <figcaption className="mt-6 text-sm text-muted-foreground">— {t.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Booking() {
  const [form, setForm] = useState({ nombre: "", telefono: "", servicio: "" });
  
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.nombre.trim() || !form.telefono.trim()) {
      toast.error("Por favor completa nombre y teléfono.");
      return;
    }
    const msg = encodeURIComponent(
      `Hola Darleen, soy ${form.nombre}. Mi teléfono es ${form.telefono}. Estoy interesada en: ${form.servicio || "una evaluación"}.`
    );
    window.open(`https://wa.me/18296925111?text=${msg}`, "_blank");
    toast.success("Te estamos redirigiendo a WhatsApp ✨");
  };

  return (
    /* 1. SECCIÓN PRINCIPAL LIMPIA: El fondo degradado abre de golpe */
    <section id="contacto" className="container-px mx-auto max-w-7xl py-24">
      <div className="grid gap-10 rounded-[2rem] border border-border bg-gradient-to-br from-accent/60 via-secondary to-mint/30 p-8 lg:grid-cols-2 lg:p-14">
        
        {/* 2. COLUMNA DE CONTACTO: Subida sutil e independiente */}
        <div className="space-y-6 animate-on-scroll booking-info">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">Reserva</p>
          <h2 className="text-4xl md:text-5xl">¿Lista para transformar tu piel?</h2>
          <p className="text-muted-foreground">
            No esperes más para darte el cuidado que mereces. Contáctanos hoy mismo para una evaluación personalizada.
          </p>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#25D366] px-7 py-4 text-base font-medium text-white shadow-soft transition hover:opacity-90 sm:w-auto"
          >
            <MessageCircle className="h-5 w-5" />
            Chatea con Nosotros en WhatsApp
          </a>
          <div className="space-y-3 pt-4 text-sm">
            <p className="flex items-start gap-3"><MapPin className="mt-0.5 h-4 w-4 text-gold" /> C. 23 15, Santiago de los Caballeros 51000, RD</p>
            <p className="flex items-center gap-3"><Phone className="h-4 w-4 text-gold" /> +1 (829) 692-5111</p>
          </div>
        </div>

        {/* 3. FORMULARIO DE RESERVA: Zoom cinemático anti-scroll lateral */}
        <form 
          onSubmit={onSubmit} 
          className="space-y-4 rounded-2xl bg-card p-6 shadow-soft sm:p-8 animate-on-scroll booking-form"
        >
          <h3 className="text-2xl">Solicita tu cita</h3>
          <div className="space-y-1">
            <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Nombre</label>
            <input
              value={form.nombre}
              onChange={(e) => setForm({ ...form, nombre: e.target.value })}
              maxLength={80}
              className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-gold focus:ring-1 focus:ring-gold"
              placeholder="Tu nombre completo"
            />
          </div>
          <div className="space-y-1">
            <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Teléfono</label>
            <input
              value={form.telefono}
              onChange={(e) => setForm({ ...form, telefono: e.target.value })}
              maxLength={30}
              className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-gold focus:ring-1 focus:ring-gold"
              placeholder="+1 809 000 0000"
            />
          </div>
          <div className="space-y-1">
            <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Servicio de interés</label>
            <select
              value={form.servicio}
              onChange={(e) => setForm({ ...form, servicio: e.target.value })}
              className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-gold focus:ring-1 focus:ring-gold"
            >
              <option value="">Selecciona un servicio</option>
              {services.map((s) => <option key={s.title}>{s.title}</option>)}
              <option>Otro / Evaluación personalizada</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full rounded-full bg-primary px-6 py-4 text-sm font-medium text-primary-foreground shadow-soft transition hover:opacity-90"
          >
            Enviar solicitud
          </button>
          <p className="text-center text-xs text-muted-foreground">Te responderemos en menos de 24 horas.</p>
        </form>

      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="container-px mx-auto grid max-w-7xl gap-10 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-gold" />
            <span className="font-serif text-xl">Estetic Center Darleen Curiel</span>
          </div>
          <p className="mt-4 max-w-sm text-sm opacity-80">
            Centro de estética en Santiago de los Caballeros. Tratamientos faciales, masajes reductores y cuidado de la piel profesional.
          </p>
          <div className="mt-5 flex gap-3">
            <a href="https://m.facebook.com/profile.php?id=635574539805955" target="_blank" rel="noopener noreferrer" className="rounded-full border border-primary-foreground/20 p-2.5 transition hover:bg-primary-foreground/10" aria-label="Facebook">
              <Facebook className="h-4 w-4" />
            </a>
            <a href="#" className="rounded-full border border-primary-foreground/20 p-2.5 transition hover:bg-primary-foreground/10" aria-label="Instagram">
              <Instagram className="h-4 w-4" />
            </a>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="rounded-full border border-primary-foreground/20 p-2.5 transition hover:bg-primary-foreground/10" aria-label="WhatsApp">
              <MessageCircle className="h-4 w-4" />
            </a>
          </div>
        </div>
        <div>
          <p className="mb-4 font-serif text-lg">Navegación</p>
          <ul className="space-y-2 text-sm opacity-80">
            <li><a href="#servicios">Servicios</a></li>
            <li><a href="#nosotros">Nosotros</a></li>
            <li><a href="#galeria">Galería</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </div>
        <div>
          <p className="mb-4 font-serif text-lg">Contacto</p>
          <ul className="space-y-2 text-sm opacity-80">
            <li>C. 23 15, Santiago 51000, RD</li>
            <li>+1 (829) 692-5111</li>
          </ul>
        </div>
        <div className="md:col-span-4">
          <div className="overflow-hidden rounded-2xl border border-primary-foreground/10">
            <iframe
              title="Ubicación Estetic Center Darleen Curiel"
              src="https://www.google.com/maps?q=C.+23+15,+Santiago+de+los+Caballeros+51000,+Dominican+Republic&output=embed"
              className="h-64 w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 py-6 text-center text-xs opacity-60">
        © {new Date().getFullYear()} Estetic Center Darleen Curiel. Todos los derechos reservados.
      </div>
    </footer>
  );
}

// COMPONENTE INDEPENDIENTE (Asegúrate de tener definidos 'anim' o cámbialos por clases normales de Tailwind)
function AgencyContactBanner() {
  return (
    <section className="relative py-24 md:py-32 bg-[#1c1c1c] text-white overflow-hidden border-t border-white/5 block w-full">
      {/* Estilo nativo para el pulso del radar táctil en móviles */}
      <style>{`
        @keyframes pulsoCelular {
          0% { box-shadow: 0 0 0 0 rgba(212, 175, 55, 0.6); }
          70% { box-shadow: 0 0 0 12px rgba(212, 175, 55, 0); }
          100% { box-shadow: 0 0 0 0 rgba(212, 175, 55, 0); }
        }
        .pulso-lucian {
          animation: pulsoCelular 2s infinite ease-in-out;
        }
      `}</style>

      {/* Sello o destello de fondo elegante de Lucian Creative */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10">
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[450px] h-[450px] bg-[#d4af37] rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 text-center z-10">
        
        {/* ENTRADA DE SELLO 1: Texto de enganche superior */}
        <ScrollAnimate className="animate-fade-in duration-700 ease-out"> 
          <span className="text-gold text-xs uppercase tracking-[0.4em] inline-block mb-3">
            ¿Te gusta esta plataforma?
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-light tracking-tight text-white mb-6">
            Lleva tu negocio al <span className="italic text-gradient-gold">siguiente nivel</span>
          </h2>
        </ScrollAnimate>

        {/* ENTRADA DE SELLO 2: Párrafo descriptivo con retraso coordinado */}
        <ScrollAnimate className="animate-fade-in duration-700 ease-out delay-200">
          <p className="text-white/70 font-light text-sm md:text-base max-w-xl mx-auto leading-relaxed mb-8">
            Esta landing fue diseñada y optimizada a medida por Lucian Creative (@Chuo). Si quieres una web premium, veloz y de alto impacto para tu marca, hablemos.
          </p>
        </ScrollAnimate>

        {/* ENTRADA DE SELLO 3: El botón de conversión definitivo */}
        <ScrollAnimate className="animate-fade-in duration-700 ease-out delay-350">
          <div className="relative inline-block max-w-full">
            <a 
              href="https://wa.me/18094421018?text=Hola%20Lucian%2C%20estoy%20interesado%20en%20una%20landing%20page%20para%20mi%20negocio.%20Me%20gustar%C3%ADa%20saber%20m%C3%A1s%20sobre%20tus%20servicios." 
              target="_blank" 
              rel="noopener noreferrer"
              className="pulso-lucian inline-flex items-center justify-center gap-2 bg-[#d4af37] text-black px-6 py-4 font-semibold text-xs sm:text-sm tracking-normal sm:tracking-wider uppercase rounded-sm whitespace-nowrap active:scale-[0.96] transition-all duration-200"
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
