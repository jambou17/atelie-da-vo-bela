import React, { useEffect, useState } from 'react';
import { X, MessageCircle, Ruler, Sparkles, Check, Info, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';
import { Product } from '../types';
import { getWhatsAppLink } from '../config';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

const FALLBACK_IMAGE =
  'https://images.unsplash.com/photo-1648005539099-709d5be525fb?auto=format&fit=crop&w=800&q=80';

const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  const allImages =
    product && product.images && product.images.length > 0
      ? product.images
      : product
      ? [product.imageUrl]
      : [];

  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);
  const [hasErrorMap, setHasErrorMap] = useState<Record<number, boolean>>({});

  useEffect(() => {
    setActiveImageIndex(0);
    setHasErrorMap({});
  }, [product]);

  const handlePrev = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (allImages.length <= 1) return;
    setActiveImageIndex((prev) => (prev === 0 ? allImages.length - 1 : prev - 1));
  };

  const handleNext = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (allImages.length <= 1) return;
    setActiveImageIndex((prev) => (prev === allImages.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && allImages.length > 1) {
        setActiveImageIndex((prev) => (prev === 0 ? allImages.length - 1 : prev - 1));
      }
      if (e.key === 'ArrowRight' && allImages.length > 1) {
        setActiveImageIndex((prev) => (prev === allImages.length - 1 ? 0 : prev + 1));
      }
    };
    if (product) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [product, onClose, allImages.length]);

  if (!product) return null;

  const whatsappUrl = getWhatsAppLink(product.name);
  const currentImageSrc = hasErrorMap[activeImageIndex]
    ? FALLBACK_IMAGE
    : allImages[activeImageIndex] || product.imageUrl;

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
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/90 text-stone-600 hover:text-stone-900 hover:bg-white shadow-md transition-colors cursor-pointer"
          aria-label="Fechar detalhes"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Product Image Header (Fixed proportion h-72 sm:h-80) */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-[#f5ede4]">
          <img
            src={currentImageSrc}
            alt={`${product.name} - foto ${activeImageIndex + 1}`}
            onError={() => setHasErrorMap((prev) => ({ ...prev, [activeImageIndex]: true }))}
            className="w-full h-full object-cover object-center transition-all duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/75 via-stone-950/20 to-transparent pointer-events-none" />

          {/* Image Counter Badge if multiple images */}
          {allImages.length > 1 && (
            <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-black/55 text-white text-xs font-semibold backdrop-blur-xs flex items-center gap-1.5 shadow-sm">
              <ImageIcon className="w-3.5 h-3.5 text-sand" />
              <span>
                {activeImageIndex + 1} de {allImages.length} fotos
              </span>
            </div>
          )}

          {/* Navigation Arrows if multiple images */}
          {allImages.length > 1 && (
            <>
              <button
                type="button"
                onClick={handlePrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-10 p-2.5 rounded-full bg-black/45 hover:bg-black/75 text-white backdrop-blur-xs transition-all shadow-md cursor-pointer hover:scale-105"
                aria-label="Foto anterior"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                type="button"
                onClick={handleNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-10 p-2.5 rounded-full bg-black/45 hover:bg-black/75 text-white backdrop-blur-xs transition-all shadow-md cursor-pointer hover:scale-105"
                aria-label="Próxima foto"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}

          <div className="absolute bottom-4 left-6 right-6 text-white pointer-events-none">
            <span className="inline-block bg-accent/90 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider mb-2">
              {product.category}
            </span>
            <h3 id="modal-title" className="font-serif text-2xl sm:text-3xl font-bold">
              {product.name}
            </h3>
          </div>
        </div>

        {/* Thumbnail Navigation Strip if multiple images */}
        {allImages.length > 1 && (
          <div className="px-6 py-3 bg-[#fbf7f4] border-b border-stone-200/80 flex items-center gap-3 overflow-x-auto">
            <span className="text-[11px] font-bold text-stone-500 uppercase tracking-wider shrink-0">
              Galeria da peça:
            </span>
            <div className="flex items-center gap-2">
              {allImages.map((img, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveImageIndex(idx)}
                  className={`relative w-16 h-16 rounded-xl overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                    activeImageIndex === idx
                      ? 'border-primary shadow-sm scale-105 ring-2 ring-primary/40'
                      : 'border-stone-300/80 opacity-70 hover:opacity-100 hover:border-stone-400'
                  }`}
                  aria-label={`Ver foto ${idx + 1}`}
                >
                  <img
                    src={img}
                    alt={`${product.name} miniatura ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                  {activeImageIndex === idx && (
                    <div className="absolute inset-0 bg-primary/10 pointer-events-none" />
                  )}
                </button>
              ))}
            </div>
          </div>
        )}

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
              className="px-6 py-3.5 rounded-2xl border border-stone-300 text-stone-700 font-medium hover:bg-stone-100 transition-colors text-sm cursor-pointer"
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
