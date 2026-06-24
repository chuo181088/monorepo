import { MessageCircle } from "lucide-react";

// 🌟 1. Creamos la interfaz para recibir el link de forma dinámica
interface FloatingWhatsAppProps {
  phoneLink: string; // Recibe el "https://wa.me/..." desde afuera
}

export function FloatingWhatsApp({ phoneLink }: FloatingWhatsAppProps) {
  return (
    /* 📌 Contenedor perfectamente fijo en la esquina inferior derecha */
    <div className="fixed bottom-6 right-6 z-50 group">
      
      {/* 🔮 Contenedor interno con el tamaño exacto del botón */}
      <div className="relative w-14 h-14">
        
        {/* ⚡ INYECCIÓN DE CSS LOCAL: Aura dorada tenue y elegante */}
        <style>{`
          @keyframes auraSutil {
            0% {
              transform: scale(1);
              opacity: 0.4;
              filter: blur(1px);
            }
            50% {
              transform: scale(1.15);
              opacity: 0.25;
              filter: blur(3px);
            }
            100% {
              transform: scale(1.25);
              opacity: 0;
              filter: blur(5px);
            }
          }
          .aura-pulso {
            position: absolute;
            inset: 0;
            background-color: #d4af37; /* Mantiene el color dorado premium */
            border-radius: 9999px;
            pointer-events: none;
            z-index: 0;
          }
          .onda-1 { animation: auraSutil 3s infinite ease-out; }
          .onda-2 { animation: auraSutil 3s infinite ease-out 1.5s; }
        `}</style>

        {/* 🌊 Las dos micro-ondas latiendo de fondo */}
        <div className="aura-pulso onda-1" />
        <div className="aura-pulso onda-2" />

        {/* 🟢 Botón verde oficial de WhatsApp con sombra profunda */}
        <a 
          href={phoneLink} // 🌟 2. CORREGIDO: Usamos la prop dinámica aquí
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="WhatsApp"
          className="relative z-10 flex items-center justify-center w-full h-full bg-[#25D366] text-white rounded-full shadow-[0_8px_24px_rgba(0,0,0,0.3)] transition-transform duration-300 active:scale-95 hover:scale-105"
        >
          <MessageCircle className="w-7 h-7 fill-current" />
        </a>
      </div>
    </div>
  );
}