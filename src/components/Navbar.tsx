import React, { useState } from 'react';
import { Heart, MessageCircle, Menu, X, Sparkles } from 'lucide-react';
import { BRAND_NAME, getWhatsAppLink } from '../config';

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Sobre a Vó Bela', href: '#sobre' },
    { label: 'Catálogo de Peças', href: '#catalogo' },
    { label: 'Como Funciona', href: '#como-funciona' },
  ];

  return (
    <nav className="sticky top-0 z-40 bg-[#fbf7f4]/90 backdrop-blur-md border-b border-stone-200/60 shadow-xs transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-3 group">
            <div className="w-11 h-11 rounded-full bg-primary/10 text-primary flex items-center justify-center border border-primary/20 group-hover:scale-105 transition-transform duration-200 shadow-xs">
              <Heart className="w-5 h-5 fill-primary text-primary" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl font-bold text-stone-900 tracking-tight leading-none group-hover:text-primary transition-colors">
                {BRAND_NAME}
              </span>
              <span className="text-[11px] font-medium text-stone-500 tracking-wider uppercase mt-1 flex items-center gap-1">
                <Sparkles className="w-2.5 h-2.5 text-accent" /> Crochê Artesanal Afetivo
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-stone-700 hover:text-primary font-medium text-sm transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}

            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white text-sm font-semibold px-4 py-2.5 rounded-full shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Pedir Orçamento</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-stone-700 hover:text-primary hover:bg-stone-100/70 focus:outline-hidden"
              aria-label="Abrir menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#fbf7f4] border-b border-stone-200 px-4 pt-3 pb-6 space-y-3 shadow-lg animate-fadeIn">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-base font-medium text-stone-800 hover:bg-stone-100 hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold py-3 rounded-xl shadow-sm text-center"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              <span>Falar no WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
