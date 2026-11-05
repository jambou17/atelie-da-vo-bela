import React from 'react';
import { Palette, Sparkles, PackageCheck, Send, MessageCircle } from 'lucide-react';
import { getWhatsAppLink } from '../config';

const steps = [
  {
    step: '01',
    icon: Sparkles,
    title: 'Escolha ou Traga sua Ideia',
    description:
      'Navegue pelo nosso catálogo ou nos envie fotos de inspiração do Pinterest e Instagram. Produzimos modelos exclusivos!',
  },
  {
    step: '02',
    icon: Palette,
    title: 'Cores & Medidas Sob Medida',
    description:
      'Ajudamos você a escolher a cartela de cores perfeita e as dimensões ideais para o seu espaço ou evento.',
  },
  {
    step: '03',
    icon: PackageCheck,
    title: 'Confecção Ponto a Ponto',
    description:
      'Cada peça é tecida manualmente com fios nobres e acabamento minucioso, acompanhando o prazo combinado.',
  },
  {
    step: '04',
    icon: Send,
    title: 'Embalagem & Entrega com Afeto',
    description:
      'Sua encomenda é perfumada, embalada com carinho e entregue em Jarinu/região ou enviada com segurança para todo o Brasil.',
  },
];

const HowItWorks: React.FC = () => {
  return (
    <section id="como-funciona" className="py-16 sm:py-24 bg-white border-b border-stone-200/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-bold text-accent uppercase tracking-widest bg-accent/10 px-3 py-1 rounded-full">
            Passo a Passo
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">
            Como funciona a sua encomenda
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Sem complicações: um atendimento próximo, humano e dedicado para transformar a sua ideia em uma peça única.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="relative bg-[#fbf7f4] rounded-2xl p-6 sm:p-7 border border-stone-200/80 flex flex-col justify-between hover:shadow-soft transition-all duration-300 group hover:-translate-y-1"
              >
                {/* Step badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-white text-primary flex items-center justify-center shadow-2xs group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="font-serif text-2xl font-bold text-stone-300 group-hover:text-primary/40 transition-colors">
                    {item.step}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="font-serif text-lg font-bold text-stone-900 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Connecting arrow indicator for desktop (except last) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-10 text-stone-300">
                    →
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-14 p-6 sm:p-10 rounded-3xl bg-gradient-to-r from-sand via-[#f7ebd8] to-sand border border-sand-dark/40 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left shadow-xs">
          <div className="space-y-2">
            <h4 className="font-serif text-xl sm:text-2xl font-bold text-stone-900">
              Tem uma ideia ou foto de referência?
            </h4>
            <p className="text-stone-700 text-sm max-w-xl">
              Mande uma mensagem pelo WhatsApp. Conversamos sobre cores, fios e calculamos um orçamento personalizado para você!
            </p>
          </div>

          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold py-3.5 px-6 rounded-full shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5 text-sm"
          >
            <MessageCircle className="w-5 h-5 fill-white" />
            <span>Chamar no WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;
