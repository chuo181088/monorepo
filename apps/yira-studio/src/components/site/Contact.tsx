import { MapPin, Phone, Mail, Clock, Facebook } from "lucide-react";

export default function Contact() {
  return (
    <section id="contacto" className="bg-rose-soft/40 py-24">
      <div className="container mx-auto grid gap-12 px-6 lg:grid-cols-2">
        <div>
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-gold">
            Contacto
          </span>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl">Visítanos</h2>
          <p className="mt-4 max-w-md text-muted-foreground">
            Estamos en el corazón de Santiago de los Caballeros, listas para
            recibirte con una sonrisa.
          </p>

          <ul className="mt-10 space-y-6">
            <li className="flex items-start gap-4">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-gold text-gold-foreground">
                <MapPin className="h-5 w-5" />
              </span>
              <div>
                <p className="font-semibold">Dirección</p>
                <p className="text-sm text-muted-foreground">Av. Las Carreras, Santiago de los Caballeros 51000, RD</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-gold text-gold-foreground">
                <Phone className="h-5 w-5" />
              </span>
              <div>
                <p className="font-semibold">Teléfono</p>
                <a href="tel:+18095812222" className="text-sm text-muted-foreground hover:text-gold">
                  +1 809-581-2222
                </a>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-gold text-gold-foreground">
                <Mail className="h-5 w-5" />
              </span>
              <div>
                <p className="font-semibold">Email</p>
                <a href="mailto:[email protected]" className="text-sm text-muted-foreground hover:text-gold">
                  [email protected]
                </a>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-gold text-gold-foreground">
                <Clock className="h-5 w-5" />
              </span>
              <div>
                <p className="font-semibold">Horario</p>
                <p className="text-sm text-muted-foreground">Lun – Vie: 9:00 AM – 7:00 PM</p>
                <p className="text-sm text-muted-foreground">Sábados: 9:00 AM – 5:00 PM</p>
                <p className="text-sm text-muted-foreground">Domingos: Cerrado</p>
              </div>
            </li>
          </ul>

          <div className="mt-10 flex gap-3">
            <a
              href="https://www.facebook.com/CentroDeBellezaYira"
              target="_blank"
              rel="noopener noreferrer"
              className="grid h-11 w-11 place-items-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-gold hover:text-gold-foreground"
              aria-label="Facebook"
            >
              <Facebook className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl border border-border/60 shadow-elegant">
          <iframe
            title="Ubicación Centro de Belleza Yira"
            src="https://www.google.com/maps?q=Av.+Las+Carreras,+Santiago+de+los+Caballeros,+Dominican+Republic&output=embed"
            className="h-full min-h-[480px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
