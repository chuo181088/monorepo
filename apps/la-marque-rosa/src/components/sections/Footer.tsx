// src/components/sections/Footer.tsx
import { Flower2, MapPin, Phone, Clock, Facebook, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contacto" className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-3">
          <div>
            <div className="flex items-center gap-2 text-gold">
              <Flower2 className="h-5 w-5" />
              <span className="font-display text-xl text-background">La Marque Rosa</span>
            </div>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-background/70">
              Centro de belleza y estética. Donde tu belleza florece.
            </p>
            <ul className="mt-8 space-y-4 text-sm text-background/80">
              <li className="flex gap-3">
                <MapPin className="h-4 w-4 shrink-0 text-gold" />
                Calle 10 #25, Santiago de los Caballeros 51000, R.D.
              </li>
              <li className="flex gap-3">
                <Phone className="h-4 w-4 shrink-0 text-gold" />
                <a href="tel:+18092768888" className="hover:text-gold">+1 809-276-8888</a>
              </li>
              <li className="flex gap-3">
                <Clock className="h-4 w-4 shrink-0 text-gold" />
                Lunes a Sábado: 9:00 AM – 7:00 PM
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-[0.3em] text-gold">Ubicación</h3>
            <div className="mt-4 overflow-hidden rounded-sm border border-background/10">
              <iframe
                title="Mapa La Marque Rosa"
                src="https://www.google.com/maps?q=Calle+10+%2325,+Santiago+de+los+Caballeros,+Dominican+Republic&output=embed"
                width="100%"
                height="240"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block w-full"
              />
            </div>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-[0.3em] text-gold">Síguenos</h3>
            <div className="mt-4 flex gap-3">
              <a
                href="https://www.facebook.com/lamarquerosa"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-background/20 text-background/80 transition-colors hover:border-gold hover:bg-gold hover:text-gold-foreground"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-background/20 text-background/80 transition-colors hover:border-gold hover:bg-gold hover:text-gold-foreground"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
            <p className="mt-8 text-xs leading-relaxed text-background/60">
              Mantente al día con nuestras promociones, nuevos tratamientos y consejos de belleza.
            </p>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-3 border-t border-background/10 pt-8 text-xs text-background/60 sm:flex-row">
          <p>© 2024 La Marque Rosa. Todos los derechos reservados.</p>
          <p>Diseño web por Lucian-Creative.</p>
        </div>
      </div>
    </footer>
  );
}