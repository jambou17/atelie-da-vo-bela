import React from 'react';
import { Heart, Sparkles, Feather, CheckCircle2 } from 'lucide-react';
import { BRAND_NAME } from '../config';

const About: React.FC = () => {
  return (
    <section id="sobre" className="py-16 sm:py-24 bg-white border-y border-stone-200/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Image & Craft composition */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative mx-auto max-w-md">
              <div className="relative rounded-2xl overflow-hidden shadow-soft border-4 border-[#fbf7f4]">
                <img
                  src="/images/about/vo-bela-trabalhando.jpeg"
                  alt="Vó Bela tecendo com amor e dedicação ao ar livre"
                  className="w-full h-80 sm:h-96 object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/50 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-xs p-4 rounded-xl shadow-xs border border-stone-100 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <Heart className="w-5 h-5 fill-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-stone-500 uppercase tracking-wide">Trabalho Afetivo</p>
                    <p className="font-serif text-sm font-bold text-stone-800">Mais de anos de tradição em cada laçada</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text content */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/15 text-accent-dark text-xs sm:text-sm font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Conheça Nossa História</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight">
              A alma e a tradição por trás do{' '}
              <span className="text-primary italic">{BRAND_NAME}</span>
            </h2>

            <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
              O <strong>{BRAND_NAME}</strong> nasceu da paixão em transformar fios e novelos em memórias afetivas. Não se trata apenas de produzir peças de crochê, mas de colocar amor, tempo e carinho em cada detalhe que vai compor a mesa da sua família ou decorar o cantinho mais especial do seu lar.
            </p>

            <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
              Cada encomenda é tratada de forma única: nós conversamos com você, compreendemos o seu estilo, auxiliamos na escolha das cores perfeitas e tecemos cada laçada sob medida com matéria-prima de excelência.
            </p>

            {/* Feature points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 text-left">
              <div className="p-4 rounded-xl bg-[#fbf7f4] border border-stone-200/80 space-y-1">
                <div className="flex items-center gap-2 text-stone-900 font-semibold text-sm">
                  <Feather className="w-4 h-4 text-primary" />
                  <span>Pontos Firmes & Macios</span>
                </div>
                <p className="text-xs text-stone-600">
                  Acabamento delicado que une durabilidade para o uso diário e leveza visual.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#fbf7f4] border border-stone-200/80 space-y-1">
                <div className="flex items-center gap-2 text-stone-900 font-semibold text-sm">
                  <CheckCircle2 className="w-4 h-4 text-accent" />
                  <span>Cores Personalizáveis</span>
                </div>
                <p className="text-xs text-stone-600">
                  Mais de dezenas de tons de barbantes e fios para combinar exatamente com sua decoração.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
