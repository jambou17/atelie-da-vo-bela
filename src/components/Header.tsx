import React from 'react';
import { MessageCircle, Sparkles, MapPin, ShieldCheck, ArrowDown } from 'lucide-react';
import { BRAND_NAME, getWhatsAppLink } from '../config';

const Header: React.FC = () => {
  return (
    <header className="relative overflow-hidden bg-gradient-to-b from-[#f5ede4] via-[#fbf7f4] to-[#fbf7f4] pt-12 pb-20 lg:pt-20 lg:pb-28">
      {/* Decorative blurred backdrop glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/10 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute top-24 right-10 w-72 h-72 bg-accent/10 blur-2xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sand/70 border border-sand-dark/30 text-stone-800 text-xs sm:text-sm font-medium shadow-2xs">
              <Sparkles className="w-4 h-4 text-primary" />
              <span>Trabalho 100% artesanal, sob encomenda e personalizado</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-stone-900 tracking-tight leading-[1.15]">
              O aconchego do crochê feito à mão no{' '}
              <span className="text-primary italic font-normal block sm:inline">
                {BRAND_NAME}
              </span>
            </h1>

            <p className="text-base sm:text-lg text-stone-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-sans">
              Peças afetivas e exclusivas para vestir a sua mesa, decorar seu lar e presentear quem você ama. Cada ponto é tecido com carinho, paciência e fios nobres sob medida para você.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold px-8 py-4 rounded-full shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5 text-base"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>Pedir Orçamento no WhatsApp</span>
              </a>

              <a
                href="#catalogo"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-stone-50 text-stone-800 border border-stone-300 font-semibold px-7 py-4 rounded-full shadow-2xs hover:border-primary/50 transition-all duration-200 text-base"
              >
                <span>Ver Vitrine de Peças</span>
                <ArrowDown className="w-4 h-4 text-stone-500" />
              </a>
            </div>

            {/* Highlights / Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 border-t border-stone-200/70 text-left">
              <div className="flex items-center gap-2.5 text-xs text-stone-600">
                <div className="w-7 h-7 rounded-full bg-accent/15 text-accent-dark flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <span>Fios nobres e acabamento impecável</span>
              </div>

              <div className="flex items-center gap-2.5 text-xs text-stone-600">
                <div className="w-7 h-7 rounded-full bg-primary/15 text-primary flex items-center justify-center shrink-0">
                  <Sparkles className="w-4 h-4" />
                </div>
                <span>Cores e tamanhos 100% personalizados</span>
              </div>

              <div className="flex items-center gap-2.5 text-xs text-stone-600">
                <div className="w-7 h-7 rounded-full bg-sand-dark/20 text-stone-700 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <span>Jarinu, SP • Envio para todo o Brasil</span>
              </div>
            </div>
          </div>

          {/* Hero Visual Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              {/* Outer decorative ring */}
              <div className="absolute -inset-3 bg-gradient-to-tr from-primary/20 via-accent/20 to-sand/40 rounded-3xl blur-md" />

              <div className="relative bg-white p-3 rounded-2xl shadow-soft border border-stone-200/80 overflow-hidden">
                <div className="relative aspect-4/3 rounded-xl overflow-hidden group">
                  <img
                    src="https://images.unsplash.com/photo-1584992236310-6edddc08acff?auto=format&fit=crop&w=800&q=80"
                    alt="Peças artesanais em crochê do Ateliê da Vó Bela"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent flex items-end p-5">
                    <div className="text-white">
                      <span className="text-xs uppercase tracking-wider font-semibold text-sand">Tradição & Afeto</span>
                      <p className="font-serif text-lg font-bold">Cada laçada tem uma história</p>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-[#fbf7f4] rounded-xl mt-3 flex items-center justify-between">
                  <div className="text-left">
                    <p className="text-xs font-semibold text-stone-500 uppercase tracking-wide">Orçamento sem compromisso</p>
                    <p className="font-serif font-bold text-stone-900 text-sm">Produzido sob medida para você</p>
                  </div>
                  <span className="inline-block bg-primary text-white text-xs font-bold px-3 py-1.5 rounded-full">
                    Sob Orçamento
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;
