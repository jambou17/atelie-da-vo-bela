# 🧶 Como Adicionar Novos Produtos e Fotos ao Catálogo

Este guia prático mostra como colocar novas peças e fotos no site do **Ateliê da Vó Bela** em poucos minutos.

---

## 📌 Passo 1: Salvar a foto no projeto

1. Pegue a foto da peça (pode ser `.jpeg`, `.jpg` ou `.png`).
2. Copie a foto para a pasta de imagens de produtos:
   ```
   public/images/products/
   ```
   > 💡 **Dica de nome de arquivo:** use nomes simples em minúsculo e sem espaços ou acentos, por exemplo: `jogo-banheiro-azul.jpeg` ou `passadeira-natal.jpeg`.

---

## 📌 Passo 2: Cadastrar o produto no catálogo

Abra o arquivo:
```
src/data/products.ts
```

Adicione um novo bloco no final da lista `products`, antes do `];`:

```typescript
  {
    id: 'jogo-banheiro-azul', // Identificador único (sem espaços ou acentos)
    name: 'Jogo de Banheiro Azul Céu', // Nome que aparece no site
    category: 'Jogo de Banheiro', // Escolha uma das 5 categorias abaixo
    description: 'Breve descrição de 1 a 2 linhas que aparece no card.',
    detailedDescription: 'Descrição completa detalhada que o cliente lê ao clicar.',
    dimensions: 'Tapete: 65x45cm | Tampa: ajustável', // Medidas
    material: 'Barbante 100% Algodão nº 6', // Fio / Barbante utilizado
    priceModel: 'Sob orçamento',
    tag: 'Novidade', // Opcional: 'Mais Pedido', 'Lançamento', 'Destaque', 'Exclusivo'
    imageUrl: '/images/products/jogo-banheiro-azul.jpeg', // Foto principal
    images: [ // Opcional: se tiver mais de uma foto para abrir galeria no modal!
      '/images/products/jogo-banheiro-azul.jpeg',
      '/images/products/jogo-banheiro-azul-detalhe.jpeg',
    ],
    careTips: [
      'Lavar à mão com sabão neutro',
      'Secar estendido à sombra na horizontal',
    ],
  },
```

---

## 🏷️ Categorias Permitidas

Você pode usar exatamente qualquer uma destas 5 categorias:
- `'Jogo de Banheiro'`
- `'Jogo de Cozinha'`
- `'Passadeira'`
- `'Tapetes Avulsos'`
- `'Supla (Sousplat)'`

---

## 🚀 Passo 3: Publicar no site (Vercel)

Após salvar o arquivo, basta rodar os comandos normais do Git no terminal da pasta do projeto:

```bash
git add .
git commit -m "feat: adicionar nova peça ao catálogo"
git push origin main
```

A **Vercel** detectará o envio e publicará a alteração no ar automaticamente em cerca de 1 a 2 minutos!
