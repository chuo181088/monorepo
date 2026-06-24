import { MessageCircle } from "lucide-react";

const WA = "https://wa.me/18092767878";

export function FloatingWhatsApp() {

  return (
    <div className="fixed bottom-6 right-6 z-50 group">
      <div className="relative w-14 h-14">
        <div className="aura-pulso onda-1" />
        <div className="aura-pulso onda-2" />
        <a href={WA} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"
          className="relative z-10 flex items-center justify-center w-full h-full bg-[#25D366] text-white rounded-full shadow-[0_8px_24px_rgba(0,0,0,0.3)] transition-transform duration-300 active:scale-95 hover:scale-105">
          <MessageCircle className="w-7 h-7 fill-current" aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}