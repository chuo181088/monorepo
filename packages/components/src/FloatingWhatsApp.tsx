// src/components/ui/FloatingWhatsApp.tsx

import React from "react";
import { MessageCircle } from "lucide-react";

interface FloatingWhatsAppProps {
  whatsappLink: string;
}

export function FloatingWhatsApp({ whatsappLink }: FloatingWhatsAppProps) {
  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center h-14 w-14 rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 hover:scale-110 transition-all duration-300"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
      
      {/* Animación de pulso */}
      <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping" />
    </a>
  );
}