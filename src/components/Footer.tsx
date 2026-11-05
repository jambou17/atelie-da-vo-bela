import React from 'react';
import { Heart, MessageCircle, MapPin, Phone, Sparkles } from 'lucide-react';
import {
  BRAND_NAME,
  WHATSAPP_FORMATTED,
  LOCATION_DETAILS,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  getWhatsAppLink,
} from '../config';

const InstagramIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-300 pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-12">
          
          {/* Brand Col */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-primary/20 text-sand flex items-center justify-center border border-primary/30">
                <Heart className="w-5 h-5 fill-primary text-primary" />
              </div>
              <span className="font-serif text-2xl font-bold text-white tracking-tight">
                {BRAND_NAME}
              </span>
            </div>

            <p className="text-stone-400 text-sm max-w-sm leading-relaxed">
              Artesanato em crochê com acabamento primoroso. Criamos peças sob medida e personalizadas com fios de alta qualidade para aquecer o coração e embelezar o seu lar.
            </p>

            <div className="flex items-center space-x-3 pt-2">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-stone-800 hover:bg-[#25D366] text-stone-300 hover:text-white flex items-center justify-center transition-colors shadow-2xs"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-stone-800 hover:bg-pink-600 text-stone-300 hover:text-white flex items-center justify-center transition-colors shadow-2xs"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              <span>Navegação Rápida</span>
            </h4>
            <ul className="space-y-2 text-sm text-stone-400">
              <li>
                <a href="#sobre" className="hover:text-sand transition-colors">
                  Sobre o Ateliê
                </a>
              </li>
              <li>
                <a href="#catalogo" className="hover:text-sand transition-colors">
                  Catálogo de Peças
                </a>
              </li>
              <li>
                <a href="#como-funciona" className="hover:text-sand transition-colors">
                  Como Funciona a Encomenda
                </a>
              </li>
              <li>
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-sand transition-colors"
                >
                  Fazer um Orçamento
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Location */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider">
              Atendimento & Região
            </h4>
            <div className="space-y-2.5 text-sm text-stone-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>{LOCATION_DETAILS}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <span>WhatsApp: {WHATSAPP_FORMATTED}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <InstagramIcon className="w-4 h-4 text-primary shrink-0" />
                <span>Instagram: {INSTAGRAM_HANDLE}</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-sand hover:underline"
              >
                <span>Falar diretamente com a artesã</span>
                <span>→</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 mt-8 border-t border-stone-800 text-center sm:flex sm:items-center sm:justify-between text-xs text-stone-500">
          <p>© 2026 {BRAND_NAME}. Todos os direitos reservados.</p>
          <p className="mt-2 sm:mt-0 flex items-center justify-center gap-1">
            Feito à mão com carinho <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500" />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
