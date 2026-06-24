import { Scissors, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border/60 bg-background py-14">
      <div className="container mx-auto grid gap-10 px-6 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-gold text-gold-foreground">
              <Scissors className="h-5 w-5" />
            </span>
            <span className="font-serif text-lg">
              Centro de Belleza <span className="text-gold">Yira</span>
            </span>
          </div>
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            Salón de belleza en Santiago de los Caballeros. Estilistas expertos
            en realzar tu estilo.
          </p>
        </div>

        <div>
          <p className="font-serif text-base">Enlaces</p>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><a href="#servicios" className="hover:text-gold">Servicios</a></li>
            <li><a href="#nosotras" className="hover:text-gold">Sobre Nosotras</a></li>
            <li><a href="#testimonios" className="hover:text-gold">Testimonios</a></li>
            <li><a href="#contacto" className="hover:text-gold">Contacto</a></li>
          </ul>
        </div>

        <div>
          <p className="font-serif text-base">Contacto</p>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>Av. Las Carreras, Santiago de los Caballeros</li>
            <li><a href="tel:+18095812222" className="hover:text-gold">+1 809-581-2222</a></li>
            <li><a href="mailto:[email protected]" className="hover:text-gold">[email protected]</a></li>
          </ul>
          <a
            href="https://www.facebook.com/CentroDeBellezaYira"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground hover:bg-gold hover:text-gold-foreground"
            aria-label="Facebook"
          >
            <Facebook className="h-4 w-4" />
          </a>
        </div>
      </div>

      <div className="container mx-auto mt-10 border-t border-border/60 px-6 pt-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Centro de Belleza Yira. Todos los derechos reservados. · Diseñado con Lovable.
      </div>
    </footer>
  );
}
