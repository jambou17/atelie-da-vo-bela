import React, { useEffect, useState } from 'react';
import { X, MessageCircle, Ruler, Sparkles, Check, Info } from 'lucide-react';
import { Product } from '../types';
import { getWhatsAppLink } from '../config';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

const FALLBACK_IMAGE =
  'https://images.unsplash.com/photo-1648005539099-709d5be525fb?auto=format&fit=crop&w=800&q=80';

const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  const [modalImageSrc, setModalImageSrc] = useState<string>('');

  useEffect(() => {
    if (product) {
      setModalImageSrc(product.imageUrl);
    }
  }, [product]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (product) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [product, onClose]);

  if (!product) return null;

  const whatsappUrl = getWhatsAppLink(product.name);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-stone-900/60 backdrop-blur-xs animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-stone-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/90 text-stone-600 hover:text-stone-900 hover:bg-white shadow-md transition-colors"
          aria-label="Fechar detalhes"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Product Image Header (Fixed proportion h-72) */}
        <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-[#f5ede4]">
          <img
            src={modalImageSrc || product.imageUrl}
            alt={product.name}
            onError={() => setModalImageSrc(FALLBACK_IMAGE)}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-stone-950/20 to-transparent pointer-events-none" />
          
          <div className="absolute bottom-4 left-6 right-6 text-white pointer-events-none">
            <span className="inline-block bg-accent/90 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider mb-2">
              {product.category}
            </span>
            <h3 id="modal-title" className="font-serif text-2xl sm:text-3xl font-bold">
              {product.name}
            </h3>
          </div>
        </div>

        {/* Product Details Body */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Price status banner */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-2xl bg-sand/40 border border-sand-dark/30 gap-3">
            <div>
              <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider">
                Investimento
              </span>
              <p className="font-serif text-xl font-bold text-stone-900">
                {product.priceModel}
              </p>
              <p className="text-xs text-stone-600">
                Calculado conforme as medidas e opções de fios escolhidos.
              </p>
            </div>
            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-primary bg-primary/10 px-3 py-1.5 rounded-full self-start sm:self-auto">
              <Sparkles className="w-3.5 h-3.5" /> 100% Sob Medida
            </span>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-stone-500 uppercase tracking-wider">
              Sobre esta peça
            </h4>
            <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
              {product.detailedDescription || product.description}
            </p>
          </div>

          {/* Specs grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-[#fbf7f4] border border-stone-200">
              <div className="flex items-center gap-2 text-stone-800 font-semibold text-xs uppercase tracking-wide mb-1">
                <Ruler className="w-4 h-4 text-primary" />
                <span>Dimensões & Formato</span>
              </div>
              <p className="text-sm text-stone-700">{product.dimensions}</p>
            </div>

            <div className="p-4 rounded-xl bg-[#fbf7f4] border border-stone-200">
              <div className="flex items-center gap-2 text-stone-800 font-semibold text-xs uppercase tracking-wide mb-1">
                <Info className="w-4 h-4 text-accent" />
                <span>Material Empregado</span>
              </div>
              <p className="text-sm text-stone-700">{product.material}</p>
            </div>
          </div>

          {/* Care Tips */}
          {product.careTips && product.careTips.length > 0 && (
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-2">
              <h5 className="text-xs font-bold text-stone-600 uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-primary" /> Dicas de Cuidado & Conservação
              </h5>
              <ul className="grid grid-cols-1 gap-1.5 text-xs text-stone-600">
                {product.careTips.map((tip, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-accent shrink-0" />
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Action CTA */}
          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold py-3.5 px-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5 text-sm"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              <span>Solicitar Orçamento no WhatsApp</span>
            </a>
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-3.5 rounded-2xl border border-stone-300 text-stone-700 font-medium hover:bg-stone-100 transition-colors text-sm"
            >
              Voltar ao Catálogo
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProductModal;
