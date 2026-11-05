import { Product } from '../types';

export const products: Product[] = [
  // 1. Sousplat Rendado (Mesa Posta)
  {
    id: 'sousplat-rendado',
    name: 'Sousplat Rendado',
    category: 'Mesa Posta',
    description:
      'Sousplat em crochê feito à mão com fio 100% algodão. Dá um toque de elegância e carinho para a mesa posta.',
    detailedDescription:
      'Sousplat em crochê feito à mão com fio 100% algodão nobre. Dá um toque de elegância, acolhimento e carinho para a sua mesa posta, protegendo o móvel e valorizando cada refeição em família ou recepção de amigos.',
    dimensions: '38 cm de diâmetro (tamanho padrão para pratos rasos)',
    material: 'Fio 100% Algodão Premium',
    priceModel: 'Sob orçamento',
    tag: 'Mais Pedido',
    imageUrl:
      'https://images.unsplash.com/photo-1615529162924-f8605388461d?auto=format&fit=crop&w=600&q=80',
    careTips: [
      'Lavar à mão com sabão neutro',
      'Não torcer, apenas pressionar suavemente para retirar a água',
      'Secar na horizontal à sombra',
    ],
  },

  // 2. Passadeira de Crochê (Decoração & Sala)
  {
    id: 'passadeira-de-croche',
    name: 'Passadeira de Crochê',
    category: 'Decoração & Sala',
    description:
      'Passadeira longa e encorpada, ideal para corredores, salas ou beiradas de cama. Conforto e beleza para o lar.',
    detailedDescription:
      'Passadeira longa, densa e encorpada, tecida ponto a ponto com barbante de alta durabilidade. Proporciona aconchego térmico, excelente estabilidade no chão e beleza artesanal para corredores, salas ou ao lado da cama.',
    dimensions: '150 cm x 50 cm (personalizável sob medida)',
    material: 'Barbante Ecológico de Alta Resistência',
    priceModel: 'Sob orçamento',
    tag: 'Destaque',
    imageUrl:
      'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=600&q=80',
    careTips: [
      'Lavar à mão ou na máquina em ciclo suave dentro de saquinho',
      'Não utilizar alvejante clorado',
      'Secar estendida à sombra',
    ],
  },

  // 3. Tapete Oval Clássico (Decoração & Sala)
  {
    id: 'tapete-oval-classico',
    name: 'Tapete Oval Clássico',
    category: 'Decoração & Sala',
    description:
      'Tapete de crochê feito com barbante de alta qualidade. Sob medida e com escolha de cores personalizada.',
    detailedDescription:
      'Tapete clássico com desenho oval harmonioso, pontos alinhados e acabamento de bico trabalhado. Uma peça atemporal que valoriza salas de estar, quartos e lavabos, com paleta de cores 100% personalizável.',
    dimensions: '110 cm x 70 cm (tamanho personalizável)',
    material: 'Barbante Especial Macio nº 8',
    priceModel: 'Sob orçamento',
    tag: 'Clássico',
    imageUrl:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80',
    careTips: [
      'Lavar com água fria e sabão neutro',
      'Secar na horizontal no varal ou chão',
    ],
  },

  // 4. Jogo de Cozinha em Crochê (Cozinha & Banheiro)
  {
    id: 'jogo-de-cozinha-em-croche',
    name: 'Jogo de Cozinha em Crochê',
    category: 'Cozinha & Banheiro',
    description:
      'Conjunto charmoso para deixar a cozinha aconchegante e cheia de estilo. Feito sob encomenda.',
    detailedDescription:
      'Conjunto completo para transformar o cantinho mais afetivo da casa. Inclui passadeira para pia e tapetes complementares para geladeira e fogão, aliando aconchego, higiene e praticidade.',
    dimensions: 'Passadeira: 140x50cm | Tapetes menores: 70x50cm',
    material: 'Barbante Macio de Alta Qualidade',
    priceModel: 'Sob orçamento',
    tag: 'Novidade',
    imageUrl:
      'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=600&q=80',
    careTips: [
      'Lavar com sabão neutro ou de coco',
      'Secar à sombra em superfície plana',
    ],
  },

  // 5. Jogo de Banheiro Harmonia (Cozinha & Banheiro)
  {
    id: 'jogo-de-banheiro-harmonia',
    name: 'Jogo de Banheiro Harmonia',
    category: 'Cozinha & Banheiro',
    description:
      'Jogo completo em crochê para o banheiro (tapete de pia, tampa de vaso e encaixe). Delicado e durável.',
    detailedDescription:
      'Jogo completo de 3 peças sob medida: tapete da pia, tampa do vaso com amarração ajustável e tapete para a base do vaso. Pontos fofinhos que proporcionam conforto térmico e elegância ao seu banheiro ou lavabo.',
    dimensions: 'Tapete Pia: 65x48cm | Tampa: ajustável | Encaixe: 50x45cm',
    material: 'Barbante Conforto nº 6 com Detalhes em Relevo',
    priceModel: 'Sob orçamento',
    tag: 'Completo',
    imageUrl:
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80',
    careTips: [
      'Lavar delicadamente sem cloro',
      'Secar bem estendido à sombra',
    ],
  },

  // 6. Caminho de Mesa Artesanal (Mesa Posta)
  {
    id: 'caminho-de-mesa-artesanal',
    name: 'Caminho de Mesa Artesanal',
    category: 'Mesa Posta',
    description:
      'Trilho ou caminho de mesa trabalhado com pontos delicados. Perfeito para realçar a sala de jantar.',
    detailedDescription:
      'Trilho de mesa elaborado com pontos vazados e rendados elegantes. Perfeito para realçar a mesa da sala de jantar ou balcão, com caimento impecável e opções de acabamento com tassel.',
    dimensions: '140 cm x 45 cm (personalizável no comprimento)',
    material: 'Fio 100% Algodão com Toque Macio',
    priceModel: 'Sob orçamento',
    tag: 'Elegância',
    imageUrl:
      'https://images.unsplash.com/photo-1577805947697-89e18249d767?auto=format&fit=crop&w=600&q=80',
    careTips: [
      'Lavar à mão com carinho',
      'Secar na horizontal',
      'Passar a ferro morno',
    ],
  },
];

// Alias export for backwards compatibility
export const PRODUCTS = products;
