import { Facebook, MessageCircle } from "lucide-react";

const WA = "https://wa.me/18092767878";
const TEL = "+18092767878";

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-14 border-t border-gold/20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8 items-center">
        <div>
          <div className="flex items-baseline gap-1">
            <span className="font-display text-2xl font-semibold">K-Pelo</span>
            <span className="text-gold font-display text-2xl">·</span>
            <span className="font-display text-2xl font-light">Center</span>
          </div>
          <p className="text-background/50 text-sm mt-2">Santiago de los Caballeros, RD</p>
        </div>
        <div className="text-center">
          <a href={`tel:${TEL}`} className="text-background/80 hover:text-gold transition-colors">+1 809-276-7878</a>
        </div>
        <div className="flex md:justify-end justify-center gap-3">
          <a href="https://www.facebook.com/kpelocenter" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
            className="w-11 h-11 border border-background/20 flex items-center justify-center hover:bg-gold hover:border-gold hover:text-foreground transition-colors">
            <Facebook className="w-5 h-5" aria-hidden="true" />
          </a>
          <a href={WA} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"
            className="w-11 h-11 border border-background/20 flex items-center justify-center hover:bg-gold hover:border-gold hover:text-foreground transition-colors">
            <MessageCircle className="w-5 h-5" aria-hidden="true" />
          </a>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-10 pt-6 border-t border-background/10 text-center text-xs text-background/40">
        © {new Date().getFullYear()} K-Pelo Center. Todos los derechos reservados.
      </div>
    </footer>
  );
}