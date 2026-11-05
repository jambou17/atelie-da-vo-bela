import React, { useState, useMemo } from 'react';
import { Sparkles, Search, SlidersHorizontal, HelpCircle } from 'lucide-react';
import { products } from '../data/products';
import { ProductCategory, Product } from '../types';
import ProductCard from './ProductCard';
import ProductModal from './ProductModal';
import { getWhatsAppLink } from '../config';

const CATEGORIES: ProductCategory[] = [
  'Todas',
  'Jogo de Banheiro',
  'Jogo de Cozinha',
  'Passadeira',
  'Tapetes Avulsos',
  'Supla (Sousplat)',
];

const Catalog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>('Todas');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { Todas: products.length };
    products.forEach((p) => {
      counts[p.category] = (counts[p.category] || 0) + 1;
    });
    return counts;
  }, []);

  // Filtered products based on category and search query
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        selectedCategory === 'Todas' || product.category === selectedCategory;

      const matchesSearch =
        searchQuery.trim() === '' ||
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.dimensions.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="catalogo" className="py-16 sm:py-24 bg-[#fbf7f4] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Vitrine de Peças Exclusivas</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight">
            Catálogo Sob Medida
          </h2>

          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Navegue por nossas criações artesanais. Todas as peças são personalizáveis em cores, tamanhos e detalhes. Escolha o seu modelo favorito e solicite seu orçamento sem compromisso!
          </p>
        </div>

        {/* Filter Bar & Search */}
        <div className="space-y-6 mb-10">
          
          {/* Category Filter Pills */}
          <div className="flex items-center justify-start lg:justify-center overflow-x-auto pb-3 scrollbar-thin gap-2.5 px-1 -mx-4 sm:mx-0 px-4 sm:px-0">
            {CATEGORIES.map((category) => {
              const isActive = selectedCategory === category;
              const count = categoryCounts[category] || 0;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className={`shrink-0 inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 shadow-2xs ${
                    isActive
                      ? 'bg-primary text-white shadow-md shadow-primary/20 scale-102 font-semibold'
                      : 'bg-white text-stone-700 hover:bg-stone-100 hover:text-stone-900 border border-stone-200/80'
                  }`}
                >
                  <span>{category}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ${
                      isActive
                        ? 'bg-white/20 text-white'
                        : 'bg-stone-200/70 text-stone-600'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Input Bar */}
          <div className="max-w-md mx-auto relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-stone-400">
              <Search className="w-4 h-4" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar por jogo de banheiro, cozinha, passadeira, sousplat..."
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-stone-200/90 rounded-full text-sm text-stone-800 placeholder-stone-400 focus:outline-hidden focus:ring-2 focus:ring-primary/40 focus:border-primary shadow-2xs transition-all"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-xs text-stone-400 hover:text-stone-600"
              >
                Limpar
              </button>
            )}
          </div>
        </div>

        {/* Results Counter & Active Category Note */}
        <div className="flex items-center justify-between text-xs text-stone-500 mb-6 px-1">
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="w-3.5 h-3.5 text-primary" />
            <span>
              Exibindo <strong>{filteredProducts.length}</strong> {filteredProducts.length === 1 ? 'peça' : 'peças'} em <strong>{selectedCategory}</strong>
            </span>
          </div>

          <span className="hidden sm:inline-block italic">
            Todas as peças são feitas sob encomenda
          </span>
        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onOpenDetails={(p) => setSelectedProduct(p)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-3xl border border-dashed border-stone-300 p-8 max-w-lg mx-auto space-y-4">
            <div className="w-12 h-12 rounded-full bg-sand/50 text-stone-600 mx-auto flex items-center justify-center">
              <HelpCircle className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-serif text-lg font-bold text-stone-800">
              Nenhuma peça encontrada com essa busca
            </h3>
            <p className="text-xs text-stone-600">
              Não se preocupe! Nós produzimos qualquer modelo sob medida a partir de uma foto de referência.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory('Todas');
                  setSearchQuery('');
                }}
                className="text-xs font-semibold text-primary underline hover:text-primary-hover"
              >
                Limpar filtros de busca
              </button>
              <span className="hidden sm:inline text-stone-300">•</span>
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold bg-[#25D366] text-white px-4 py-2 rounded-full shadow-2xs"
              >
                Mandar foto de referência no WhatsApp
              </a>
            </div>
          </div>
        )}

      </div>

      {/* Product Detail Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </section>
  );
};

export default Catalog;
