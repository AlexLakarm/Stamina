export interface Article {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  slug: string; // Pour l'URL
  date: string; // Pour trier les articles par date
  category: string; // Pour filtrer par catégorie si besoin
  readTime?: string; // Temps de lecture estimé (optionnel)
  content: string; // Ajout du contenu
}

export const articles: Article[] = [
  {
    id: "1",
    title: "Aave : Le Protocole de Prêt DeFi",
    description: "Découvrez comment Aave révolutionne le prêt décentralisé avec ses pools de liquidité et ses taux d'intérêt dynamiques.",
    imageUrl: "/images/aave.jpg",
    slug: "aave-protocol",
    date: "2024-03-15",
    category: "DeFi",
    readTime: "5 min",
    content: `
# Introduction

Aave est l'un des protocoles de prêt les plus importants de l'écosystème DeFi...

## Comment fonctionne Aave ?

Le protocole utilise des "pools de liquidité" où les utilisateurs peuvent...

## Les avantages d'Aave

1. Taux d'intérêt dynamiques
2. Multiples types d'actifs
3. Sécurité renforcée`
  },
  {
    id: "2",
    title: "Bitcoin : La Révolution Monétaire",
    description: "Comprendre les fondamentaux de Bitcoin et son impact sur le système financier mondial.",
    imageUrl: "/images/bitcoin.jpg",
    slug: "bitcoin-basics",
    date: "2024-03-10",
    category: "Crypto",
    readTime: "7 min",
    content: `
# Introduction

Bitcoin, créé en 2009 par Satoshi Nakamoto, représente la première application réussie de la technologie blockchain...

## Les Fondamentaux du Bitcoin

La blockchain Bitcoin est un registre distribué qui enregistre toutes les transactions...

## Impact sur le Système Financier

1. Désintermédiation bancaire
2. Souveraineté financière
3. Résistance à la censure`
  },
  {
    id: "3",
    title: "OpenSea : Le Marché NFT",
    description: "Guide complet sur OpenSea, la plus grande marketplace de NFTs et son fonctionnement.",
    imageUrl: "/images/opensea.jpg",
    slug: "opensea-guide",
    date: "2024-03-05",
    category: "NFT",
    readTime: "6 min",
    content: `
# Introduction

OpenSea est devenu la plus grande marketplace de NFTs au monde...

## Fonctionnalités Principales

1. Achat et vente simplifiés
2. Support multi-blockchain
3. Outils de création intégrés`
  },
  {
    id: "4",
    title: "Solana : La Blockchain Ultra-Rapide",
    description: "Plongez dans l'écosystème Solana, ses avantages en termes de rapidité et de coûts, ainsi que ses défis techniques.",
    imageUrl: "/images/solana.jpg",
    slug: "solana-ecosystem",
    date: "2024-02-28",
    category: "Blockchain",
    readTime: "8 min",
    content: `
# Introduction

Solana se distingue par sa capacité à traiter des milliers de transactions par seconde...

## Architecture Technique

### Proof of History
L'innovation majeure de Solana est sa preuve d'histoire, permettant une synchronisation précise...

### Le Consensus Tower BFT
Le mécanisme de consensus de Solana combine plusieurs innovations...

## L'Écosystème Solana
1. DeFi florissante
2. NFTs et Gaming
3. Infrastructure robuste
`
  },
  {
    id: "5",
    title: "FTX : Les Leçons d'une Chute",
    description: "Analyse des événements qui ont conduit à l'effondrement de FTX et les enseignements pour l'industrie crypto.",
    imageUrl: "/images/ftx.jpg",
    slug: "ftx-collapse",
    date: "2024-02-20",
    category: "Analyse",
    readTime: "10 min",
    content: `
# La Chute de FTX

## Les Signes Avant-Coureurs
Les premiers indices d'une situation problématique sont apparus...

## L'Effondrement
La succession rapide d'événements qui ont précipité la chute...

## Leçons à Retenir
1. Importance de la transparence
2. Dangers de la centralisation excessive
3. Nécessité d'une régulation adaptée

## Impact sur l'Industrie
Les changements fondamentaux dans l'approche de la gestion des échanges...
`
  },
  {
    id: "6",
    title: "Terra LUNA & UST : Anatomie d'un Crash",
    description: "Retour sur la débâcle de Terra LUNA et UST : comprendre les risques des stablecoins algorithmiques.",
    imageUrl: "/images/terra.jpg",
    slug: "terra-luna-crash",
    date: "2024-02-15",
    category: "Analyse",
    readTime: "12 min",
    content: `
# Terra LUNA & UST : La Débâcle

## Le Mécanisme Terra-LUNA
### Le Système de Mint-and-Burn
L'algorithme qui maintenait la parité de l'UST...

### Les Failles du Système
Les vulnérabilités fondamentales du design...

## Impact sur le Marché
1. Effet domino sur l'écosystème DeFi
2. Perte de confiance dans les stablecoins algorithmiques
3. Réformes réglementaires

## Leçons pour l'Avenir
Les enseignements cruciaux pour le développement des stablecoins...
`
  }
];

// Utilitaires pour manipuler les articles
export const getLatestArticles = (count: number = 3) => {
  return articles
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count);
};

export const getArticlesByCategory = (category: string) => {
  return articles.filter(article => article.category === category);
}; 