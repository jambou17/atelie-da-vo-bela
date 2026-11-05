import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { getWhatsAppLink, BRAND_NAME } from '../config';

const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-40 flex flex-col items-end">
      {/* Friendly pop-up balloon */}
      {showTooltip && (
        <div className="relative mb-2 bg-white text-stone-800 text-xs py-2 px-3.5 rounded-2xl shadow-lg border border-stone-200/80 max-w-[210px] animate-bounce duration-1000">
          <button
            type="button"
            onClick={() => setShowTooltip(false)}
            className="absolute -top-1.5 -left-1.5 bg-stone-200 hover:bg-stone-300 text-stone-600 rounded-full p-0.5"
            aria-label="Fechar balão"
          >
            <X className="w-3 h-3" />
          </button>
          <p className="font-semibold text-stone-900 leading-tight">
            Olá! Dúvidas ou orçamentos?
          </p>
          <p className="text-[11px] text-stone-500 mt-0.5">
            Fale direto com o {BRAND_NAME}!
          </p>
          {/* Balloon tail */}
          <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-white border-r border-b border-stone-200/80 rotate-45" />
        </div>
      )}

      {/* WhatsApp Action Button */}
      <a
        href={getWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95"
        aria-label="Abrir conversa no WhatsApp"
      >
        {/* Soft pulse ring */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/40 animate-ping group-hover:hidden opacity-75" />
        
        <MessageCircle className="w-7 h-7 fill-white relative z-10" />
      </a>
    </div>
  );
};

export default FloatingWhatsApp;
