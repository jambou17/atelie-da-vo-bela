export type ProductCategory =
  | 'Todas'
  | 'Jogo de Banheiro'
  | 'Jogo de Cozinha'
  | 'Passadeira'
  | 'Tapetes Avulsos'
  | 'Supla (Sousplat)';

export type SpecificCategory = Exclude<ProductCategory, 'Todas'>;

export interface Product {
  id: string;
  name: string;
  category: SpecificCategory;
  description: string;
  detailedDescription?: string;
  dimensions: string;
  material: string;
  priceModel: string; // Ex: "Sob orçamento"
  imageUrl: string;
  tag?: string; // Ex: 'Mais Pedido', 'Lançamento', 'Exclusivo'
  careTips?: string[];
}
