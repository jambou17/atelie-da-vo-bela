import { Product } from '../types';

/**
 * ---------------------------------------------------------------------------
 * GUIA RÁPIDO PARA ADICIONAR NOVO PRODUTO AO CATÁLOGO:
 * ---------------------------------------------------------------------------
 * 1. Salve a foto na pasta: public/images/products/ (ex: meu-tapete.jpeg)
 * 2. Adicione um novo bloco no array 'products' abaixo seguindo o formato:
 * 
 *    {
 *      id: 'identificador-unico-sem-espacos',
 *      name: 'Nome do Seu Produto',
 *      category: 'Jogo de Banheiro' | 'Jogo de Cozinha' | 'Passadeira' | 'Tapetes Avulsos' | 'Supla (Sousplat)',
 *      description: 'Breve descrição visível no card do site.',
 *      detailedDescription: 'Descrição completa detalhada que aparece ao clicar.',
 *      dimensions: 'Ex: 120 cm x 50 cm (personalizável sob medida)',
 *      material: 'Ex: Barbante Ecológico nº 6 / Algodão Nobre',
 *      priceModel: 'Sob orçamento',
 *      tag: 'Destaque', // opcional: 'Mais Pedido', 'Lançamento', 'Exclusivo', 'Destaque'
 *      imageUrl: '/images/products/meu-tapete.jpeg',
 *      careTips: [
 *        'Lavar com sabão neutro',
 *        'Secar na horizontal à sombra',
 *      ],
 *    },
 * ---------------------------------------------------------------------------
 */

export const products: Product[] = [
  // ==========================================
  // JOGO DE BANHEIRO
  // ==========================================
  {
    id: 'jogo-de-banheiro-harmonia-rose-4-pecas',
    name: 'Jogo de Banheiro Harmonia Rosé (4 Peças)',
    category: 'Jogo de Banheiro',
    description:
      'Conjunto completo e aconchegante para banheiro em tons rosé e areia com contorno colorido artesanal.',
    detailedDescription:
      'Jogo completo de 4 peças confeccionado com barbante macio de alta durabilidade. Inclui tapete retangular para a pia, tapete oval complementar, encaixe para o pé do vaso e tampa de vaso ajustável. Combinação perfeita de beleza, conforto térmico e carinho para o seu banheiro ou lavabo.',
    dimensions: 'Tapete pia: 68x48cm | Encaixe vaso: 52x46cm | Tampa: ajustável',
    material: 'Barbante Especial 100% Algodão nº 6',
    priceModel: 'Sob orçamento',
    tag: 'Mais Pedido',
    imageUrl: '/images/products/jogo-banheiro-rose-completo.jpeg',
    images: [
      '/images/products/jogo-banheiro-rose-completo.jpeg',
      '/images/products/jogo-banheiro-rose-detalhe.jpeg',
    ],
    careTips: [
      'Lavar delicadamente com sabão neutro',
      'Não torcer vigorosamente, pressionar com toalha',
      'Secar estendido à sombra em superfície plana',
    ],
  },
  {
    id: 'jogo-de-banheiro-artesanal-3-pecas',
    name: 'Jogo de Banheiro Artesanal (3 Peças)',
    category: 'Jogo de Banheiro',
    description:
      'Conjunto de 3 peças com tampa telada, encaixe anatômico e tapete reto com bico trabalhado.',
    detailedDescription:
      'Conjunto essencial para banheiro feito à mão com pontos fechados e bico rendado multicolorido. A tampa possui rede ajustável que se adapta com facilidade a qualquer modelo de louça sanitária. Peça higiênica, lavável e de excelente fixação no chão.',
    dimensions: 'Tapete reto: 65x45cm | Encaixe vaso: 50x45cm | Tampa c/ rede',
    material: 'Barbante Conforto nº 6 com Detalhes Multicoloridos',
    priceModel: 'Sob orçamento',
    tag: 'Destaque',
    imageUrl: '/images/products/jogo-banheiro-rose-detalhe.jpeg',
    careTips: [
      'Lavar à mão ou na máquina em ciclo delicado',
      'Não utilizar alvejante com cloro',
      'Secar na horizontal à sombra',
    ],
  },

  // ==========================================
  // JOGO DE COZINHA
  // ==========================================
  {
    id: 'jogo-de-cozinha-tradicional-3-pecas',
    name: 'Jogo de Cozinha Tradicional (3 Peças)',
    category: 'Jogo de Cozinha',
    description:
      'Kit completo com passadeira longa para pia e dois tapetes avulsos em marrom, vermelho e cru.',
    detailedDescription:
      'O clássico que traz calor e afetividade para o coração da casa! Composto por 1 passadeira comprida para a bancada da pia e 2 tapetes menores para o fogão e geladeira. Trama encorpada que retém respingos, protege o piso e decora com elegância atemporal.',
    dimensions: '1 Passadeira: 140x50cm | 2 Tapetes menores: 70x50cm',
    material: 'Barbante Ecológico de Alta Resistência nº 8',
    priceModel: 'Sob orçamento',
    tag: 'Completo',
    imageUrl: '/images/products/jogo-cozinha-tradicional.jpeg',
    images: [
      '/images/products/jogo-cozinha-tradicional.jpeg',
      '/images/products/jogo-cozinha-angulo2.jpeg',
    ],
    careTips: [
      'Lavar com sabão de coco ou neutro',
      'Secar bem estendido à sombra no chão ou varal',
      'Passar as mãos para alinhar o desenho após a secagem',
    ],
  },

  // ==========================================
  // PASSADEIRA
  // ==========================================
  {
    id: 'passadeira-oval-rose-areia',
    name: 'Passadeira Oval Rosé e Areia',
    category: 'Passadeira',
    description:
      'Passadeira longa com desenho oval clássico, acabamento rendado e harmonia em tons suaves.',
    detailedDescription:
      'Passadeira sofisticada tecida ponto a ponto no formato oval com centro alongado e bicos delicados. Ideal para beirada de cama, corredores amplos ou hall de entrada. O toque de aconchego perfeito com paleta de cores neutra e acolhedora.',
    dimensions: '140 cm x 52 cm (comprimento personalizável sob encomenda)',
    material: 'Fio Macio Algodão Premium nº 6',
    priceModel: 'Sob orçamento',
    tag: 'Elegância',
    imageUrl: '/images/products/passadeira-oval-rose.jpeg',
    careTips: [
      'Lavar com água fria e sabão neutro',
      'Evitar pendurar pelas pontas para não deformar',
      'Secar na horizontal',
    ],
  },
  {
    id: 'passadeira-listrada-laranja-franjas',
    name: 'Passadeira Listrada com Franjas',
    category: 'Passadeira',
    description:
      'Peça rústica e vibrante com listras em laranja e cru e charmosas franjas trançadas à mão.',
    detailedDescription:
      'Passadeira encorpada de alta durabilidade com faixas contrastantes em laranja vivo e cru natural. As franjas trançadas nas extremidades conferem um visual rústico e acolhedor, perfeito para áreas de convivência, quartos e salas de jantar.',
    dimensions: '150 cm x 50 cm (mais franjas de 8 cm)',
    material: 'Barbante Rústico de Alta Durabilidade nº 8',
    priceModel: 'Sob orçamento',
    tag: 'Novidade',
    imageUrl: '/images/products/passadeira-listrada-laranja.jpeg',
    careTips: [
      'Lavar suavemente para preservar as franjas',
      'Penteie suavemente as franjas ainda úmidas',
      'Secar à sombra esticada',
    ],
  },

  // ==========================================
  // TAPETES AVULSOS
  // ==========================================
  {
    id: 'tapete-granny-squares-retalhos-coloridos',
    name: 'Tapete Granny Squares Retalhos Coloridos',
    category: 'Tapetes Avulsos',
    description:
      'Puro charme vintage: tapete confeccionado com blocos geométricos granny square multicoloridos.',
    detailedDescription:
      'Uma verdadeira obra de arte afetiva! Cada quadradinho é tecido individualmente com composições de cores únicas e em seguida costurado artesanalmente com união impecável em preto/grafite. Uma peça exclusiva que traz alegria, personalidade e conforto para qualquer ambiente.',
    dimensions: '110 cm x 70 cm (tamanho único artesanal)',
    material: 'Barbantes Variados 100% Reciclados e Nobres',
    priceModel: 'Sob orçamento',
    tag: 'Exclusivo',
    imageUrl: '/images/products/tapete-granny-squares.jpeg',
    images: [
      '/images/products/tapete-granny-squares.jpeg',
      '/images/products/tapete-granny-squares-detalhe.jpeg',
    ],
    careTips: [
      'Lavar em ciclo suave com sabão neutro',
      'Secar plano sem exposição direta ao sol forte',
    ],
  },
  {
    id: 'tapete-oval-moderno-grafite',
    name: 'Tapete Oval Moderno Cinza e Grafite',
    category: 'Tapetes Avulsos',
    description:
      'Tapete oval minimalista e contemporâneo com miolo cinza mescla e borda preta imponente.',
    detailedDescription:
      'Modelo versátil que se adapta a decorações modernas ou industriais. Com centro cinza e moldura escura em ponto trabalhado com relevo, oferece excelente aderência ao chão e textura agradável aos pés.',
    dimensions: '85 cm x 55 cm (personalizável sob medida)',
    material: 'Barbante Espesso Conforto nº 8',
    priceModel: 'Sob orçamento',
    tag: 'Moderno',
    imageUrl: '/images/products/tapete-oval-grafite.jpeg',
    careTips: [
      'Lavar com água e sabão líquido neutro',
      'Não usar escovas rígidas',
      'Secar estendido',
    ],
  },

  // ==========================================
  // SUPLA (SOUSPLAT)
  // ==========================================
  {
    id: 'sousplat-nobre-borda-dourada',
    name: 'Sousplat Nobre com Borda Dourada',
    category: 'Supla (Sousplat)',
    description:
      'Sousplat delicado em crochê branco com acabamento em bico dourado nobre.',
    detailedDescription:
      'Peça refinada para vestir a mesa posta com requinte e aconchego. Tecido com fio 100% algodão alvejado e finalizado com um brilhante arremate em fio metálico dourado. Ideal como apoio de pratos finos, centros de mesa ou base para arranjos florais.',
    dimensions: '36 cm de diâmetro (sob medida para pratos rasos)',
    material: 'Fio 100% Algodão com Fio Metálico Ouro',
    priceModel: 'Sob orçamento',
    tag: 'Mais Pedido',
    imageUrl: '/images/products/supla-borda-dourada.jpeg',
    careTips: [
      'Lavar à mão com carinho e sabão suave',
      'Não alvejar e não esfregar a borda metálica',
      'Passar pelo avesso com ferro morno e proteção',
    ],
  },
  {
    id: 'jogo-de-sousplat-natalino-especial',
    name: 'Jogo de Sousplat Natalino Especial',
    category: 'Supla (Sousplat)',
    description:
      'Conjunto festivo em tons vermelho e verde musgo com brilho para ceias e momentos inesquecíveis.',
    detailedDescription:
      'Conjunto com 4 sousplats artesanais confeccionados especialmente para a época natalina e recepções especiais. O fio nobre com partículas de brilho reluz à luz das velas, proporcionando uma atmosfera mágica e acolhedora para reunir a família ao redor da mesa.',
    dimensions: '4 peças de 38 cm de diâmetro cada',
    material: 'Fio Premium com Brilho e Acabamento Ondulado',
    priceModel: 'Sob orçamento',
    tag: 'Edição Especial',
    imageUrl: '/images/products/supla-natalino.jpeg',
    careTips: [
      'Lavar à mão com água fria',
      'Não centrifugar',
      'Secar sobre superfície plana à sombra',
    ],
  },
];

// Alias export para retrocompatibilidade
export const PRODUCTS = products;
