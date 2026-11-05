import React, { useState } from 'react';
import { MessageCircle, Eye, Ruler, Sparkles } from 'lucide-react';
import { Product } from '../types';
import { getWhatsAppLink } from '../config';

interface ProductCardProps {
  product: Product;
  onOpenDetails: (product: Product) => void;
}

const FALLBACK_IMAGE =
  'https://images.unsplash.com/photo-1648005539099-709d5be525fb?auto=format&fit=crop&w=800&q=80';

const ProductCard: React.FC<ProductCardProps> = ({ product, onOpenDetails }) => {
  const [imageSrc, setImageSrc] = useState(product.imageUrl);
  const [hasError, setHasError] = useState(false);
  const whatsappUrl = getWhatsAppLink(product.name);

  const handleImageError = () => {
    if (!hasError) {
      setHasError(true);
      setImageSrc(FALLBACK_IMAGE);
    }
  };

  return (
    <div className="group bg-white rounded-2xl shadow-soft hover:shadow-hover border border-stone-200/80 overflow-hidden flex flex-col h-full transition-all duration-300 hover:-translate-y-1">
      {/* Fixed-height container with rounded top */}
      <div className="relative h-56 w-full overflow-hidden bg-[#f5ede4] shrink-0 rounded-t-2xl">
        <img
          src={imageSrc}
          alt={product.name}
          onError={handleImageError}
          className="w-full h-56 object-cover object-center rounded-t-2xl group-hover:scale-105 transition-transform duration-500 ease-out"
          loading="lazy"
        />

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

        {/* Badges positioned cleanly in top-left */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10 pointer-events-none max-w-[85%]">
          <span className="bg-[#fbf7f4]/95 backdrop-blur-xs text-stone-800 text-[11px] font-semibold px-2.5 py-1 rounded-full border border-stone-200/80 shadow-2xs">
            {product.category}
          </span>
          {product.tag && (
            <span className="bg-primary text-white text-[11px] font-semibold px-2.5 py-1 rounded-full shadow-2xs flex items-center gap-1">
              <Sparkles className="w-2.5 h-2.5 shrink-0" />
              <span>{product.tag}</span>
            </span>
          )}
        </div>

        {/* Hover quick view action */}
        <button
          type="button"
          onClick={() => onOpenDetails(product)}
          className="absolute inset-0 m-auto w-fit h-fit px-4 py-2 bg-white/95 backdrop-blur-xs text-stone-900 text-xs font-semibold rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white flex items-center gap-1.5 z-20 cursor-pointer"
          aria-label={`Ver especificações de ${product.name}`}
        >
          <Eye className="w-3.5 h-3.5 text-primary shrink-0" />
          <span>Ver Especificações</span>
        </button>
      </div>

      {/* Card Content: flex-1 flex flex-col justify-between p-6 gap-4 */}
      <div className="p-6 flex-1 flex flex-col justify-between gap-4">
        {/* Info Area */}
        <div className="space-y-2.5 flex-1">
          <h3 className="font-serif text-xl font-bold text-stone-900 group-hover:text-primary transition-colors leading-snug">
            {product.name}
          </h3>

          <p className="text-stone-600 text-xs sm:text-sm line-clamp-2 leading-relaxed">
            {product.description}
          </p>

          <div className="pt-1 flex items-center gap-1.5 text-xs text-stone-500">
            <Ruler className="w-3.5 h-3.5 text-primary shrink-0" />
            <span className="truncate">{product.dimensions}</span>
          </div>
        </div>

        {/* Bottom Section: Pinned to bottom with mt-auto */}
        <div className="mt-auto pt-4 border-t border-stone-100 space-y-3 shrink-0">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-stone-500 uppercase tracking-wide">
              Preço
            </span>
            <span className="text-xs sm:text-sm font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">
              {product.priceModel}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2.5">
            <button
              type="button"
              onClick={() => onOpenDetails(product)}
              className="w-full inline-flex items-center justify-center gap-1.5 bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-semibold py-2.5 px-2 rounded-xl transition-colors cursor-pointer"
            >
              <Eye className="w-3.5 h-3.5 text-stone-600 shrink-0" />
              <span className="truncate">Detalhes</span>
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-1.5 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-semibold py-2.5 px-2 rounded-xl shadow-2xs hover:shadow-xs transition-all duration-200 hover:-translate-y-0.5"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-white shrink-0" />
              <span className="truncate">Orçamento</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
