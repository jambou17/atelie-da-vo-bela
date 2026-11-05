import { SpecificCategory } from './types';

export const BRAND_NAME = 'Ateliê da Vó Bela';
export const BRAND_TAGLINE = 'Peças artesanais feitas à mão com amor, carinho e fios nobres';
export const WHATSAPP_NUMBER = '5511972512116';
export const WHATSAPP_FORMATTED = '(11) 97251-2116';
export const WHATSAPP_BASE_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

export const LOCATION = 'Jarinu, SP';
export const LOCATION_DETAILS =
  'Atendemos Jarinu e região para retirada ou entrega expressa, e enviamos com todo carinho para todo o Brasil.';

export const INSTAGRAM_HANDLE = '@ateliedavobela';
export const INSTAGRAM_URL = 'https://instagram.com';

export const PRODUCT_CATEGORIES: SpecificCategory[] = [
  'Mesa Posta',
  'Decoração & Sala',
  'Cozinha & Banheiro',
];

/**
 * Generates an encoded WhatsApp direct link with a personalized greeting message
 */
export const getWhatsAppLink = (productName?: string): string => {
  const message = productName
    ? `Olá, Ateliê da Vó Bela! Vi a peça "${productName}" no site e gostaria de solicitar um orçamento sob medida. Poderia me passar mais detalhes de cores e prazos?`
    : `Olá, Ateliê da Vó Bela! Visitei o site e gostaria de solicitar um orçamento para uma encomenda personalizada em crochê.`;

  return `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(message)}`;
};
