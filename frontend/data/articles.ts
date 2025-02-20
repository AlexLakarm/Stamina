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
  keywords?: string[]; // Keywords for SEO
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
    keywords: ["Aave", "DeFi", "prêt crypto", "emprunt décentralisé", "liquidité blockchain", "smart contracts"],
    readTime: "8 min",
    content: `# Aave : Le Protocole de Prêt Décentralisé

## Introduction

Aave est un **protocole de finance décentralisée (DeFi)** permettant aux utilisateurs d'emprunter et de prêter des cryptomonnaies sans intermédiaire. Lancé en 2020 sur Ethereum, Aave repose sur des **smart contracts** qui automatisent et sécurisent les transactions.

Grâce à ce système, les utilisateurs peuvent **déposer des actifs pour générer des intérêts** ou **emprunter des fonds en utilisant des collatéraux** sans passer par une institution financière traditionnelle.

## Les Fondamentaux du Protocole Aave

### Les Pools de Liquidité

Aave fonctionne grâce à des **pools de liquidité** où les prêteurs déposent leurs cryptos. Ces fonds sont ensuite accessibles aux emprunteurs, qui doivent déposer une garantie (collatéral) pour obtenir un prêt.

- Les dépôts génèrent des intérêts pour les prêteurs.
- Les emprunteurs paient un taux d'intérêt pour accéder aux fonds.
- La liquidité est assurée par un système d'incitations dynamiques.

### Les Taux d'Intérêt Dynamiques

Aave utilise un **système de taux d'intérêt algorithmiques** qui s'adapte en fonction de l'offre et de la demande sur chaque actif.

- **Taux stable** : plus prévisible, idéal pour des stratégies long terme.
- **Taux variable** : ajuste automatiquement les intérêts selon les conditions du marché.

## Focus sur la Décentralisation

Aave est entièrement **décentralisé** et géré par une **organisation autonome décentralisée (DAO)**. Les détenteurs du jeton **AAVE** participent aux décisions du protocole, garantissant une gouvernance communautaire.

Contrairement aux systèmes bancaires traditionnels où une **entité centrale contrôle les prêts**, Aave fonctionne sur la blockchain Ethereum avec une **transparence totale et une résistance à la censure**.

Avantages :

- **Aucune autorité centrale** : n'importe qui peut emprunter ou prêter sans validation KYC.
- **Sécurité renforcée** : audit constant des smart contracts.
- **Accès global** : utilisation possible depuis n'importe où sans restriction bancaire.

## La Notion de Prêt Flash (Flash Loans)

Aave introduit une innovation majeure : les **prêts flash**. Ces prêts permettent d'emprunter sans collatéral à condition que le montant soit remboursé **dans la même transaction**.

Cas d'usage :
- **Arbitrage** : exploiter les différences de prix entre plateformes.
- **Refinancement de dette** : restructurer un prêt sans coût initial.
- **Exécution automatisée de stratégies DeFi**.

## AAVE : Le Jeton de Gouvernance

Le jeton **AAVE** joue un rôle clé dans l'écosystème :
- **Participation à la gouvernance** : votes sur les propositions d'évolution du protocole.
- **Staking et sécurité** : dépôt des tokens dans un pool pour assurer la stabilité du réseau.
- **Réduction des frais** : certains frais sont réduits pour les détenteurs de AAVE.

## Conclusion

Aave révolutionne le prêt et l'emprunt en supprimant les intermédiaires et en permettant une gestion **transparente et automatisée** des liquidités. Avec son modèle décentralisé et ses innovations comme les **prêts flash**, Aave est un acteur majeur de la DeFi.`
  },
  {
    id: "2",
    title: "Bitcoin : La Révolution Monétaire",
    description: "Comprendre les fondamentaux de Bitcoin et son impact sur le système financier mondial.",
    imageUrl: "/images/bitcoin.jpg",
    slug: "bitcoin-basics",
    date: "2024-03-10",
    category: "Fondamentaux",
    keywords: ["Bitcoin", "cryptomonnaie", "blockchain", "monnaie numérique", "décentralisation", "minage Bitcoin"],
    readTime: "7 min",
    content: `# Bitcoin : La Révolution Monétaire

## Introduction

Bitcoin, créé en 2009 par un individu ou un groupe sous le pseudonyme **Satoshi Nakamoto**, représente la première monnaie numérique décentralisée. Reposant sur la technologie **blockchain**, il permet des transactions sécurisées sans intermédiaire.

Contrairement aux monnaies traditionnelles contrôlées par des banques centrales, **Bitcoin fonctionne sur un réseau pair-à-pair (P2P)**, offrant ainsi une alternative aux systèmes financiers classiques.

## Les Fondamentaux du Bitcoin

### La Blockchain Bitcoin

La **blockchain Bitcoin** est un registre distribué qui enregistre de manière immuable l'historique des transactions. Chaque transaction est regroupée dans un **bloc**, qui est validé par un processus cryptographique avant d'être ajouté à la chaîne existante.

### Le Minage et la Preuve de Travail

Le minage est le mécanisme qui sécurise le réseau Bitcoin et garantit son bon fonctionnement. Les mineurs utilisent de la puissance de calcul pour résoudre des **problèmes mathématiques complexes** (preuve de travail ou *Proof of Work*). En retour, ils sont récompensés en **bitcoins nouvellement émis** et par les frais de transaction.

Tous les **210 000 blocs** (environ tous les 4 ans), la récompense des mineurs est divisée par deux, un phénomène appelé **halving**, qui réduit l'émission de nouveaux bitcoins et contribue à leur rareté.

## Focus sur la Décentralisation

Bitcoin repose sur un **réseau décentralisé**, où la blockchain est partagée et synchronisée sur des milliers d'ordinateurs, appelés **nœuds**, répartis partout dans le monde. Ces machines peuvent être des serveurs dédiés, des ordinateurs personnels ou même des appareils plus spécialisés comme les Raspberry Pi.

Contrairement à un système centralisé stocké sur un **serveur privé comme ceux d'Amazon ou de Google**, cette approche présente plusieurs avantages majeurs :

- **Résilience** : Aucune entité unique ne peut éteindre ou censurer le réseau.
- **Sécurité** : Les données ne sont pas vulnérables à une seule attaque ciblée.
- **Transparence** : Tout le monde peut vérifier l'historique des transactions en temps réel.

Cette structure fait de Bitcoin un système **fiable et résistant aux manipulations externes**.

## Bitcoin : L'Or Numérique

Bitcoin est souvent comparé à l'**or numérique**, et ce pour plusieurs raisons :

- **Rareté** : Le nombre total de bitcoins est plafonné à **21 millions**, ce qui le rend rare et précieux, tout comme l'or.
- **Stockage de valeur** : Bitcoin est considéré comme une réserve de valeur à long terme, permettant de protéger son patrimoine contre l'inflation.
- **Portabilité** : Contrairement à l'or physique, Bitcoin peut être transféré facilement et rapidement, n'importe où dans le monde.
- **Divisibilité** : Chaque bitcoin est divisible en **100 millions de satoshis**, ce qui le rend accessible même pour de petites transactions.

Ces caractéristiques font de Bitcoin une alternative moderne aux **métaux précieux**, utilisée comme une valeur refuge face aux incertitudes économiques.

## Impact sur le Système Financier

### 1. Désintermédiation bancaire
Bitcoin permet des transactions **sans intermédiaire**, réduisant ainsi la dépendance aux banques traditionnelles et limitant les frais de transaction.

### 2. Souveraineté financière
Chaque individu peut posséder et stocker ses bitcoins sans dépendre d'une autorité centrale. **La possession des clés privées garantit un contrôle total sur les fonds.**

### 3. Résistance à la censure
Bitcoin est conçu pour être **résistant à la censure** : aucune entité ne peut empêcher une transaction légitime d'être confirmée sur le réseau.

## Conclusion

Bitcoin redéfinit notre conception de la monnaie et des systèmes financiers en offrant une alternative **décentralisée, sécurisée et accessible**. Son adoption croissante laisse entrevoir un futur où chacun peut gérer sa propre richesse sans dépendre d'un tiers de confiance.`
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
    category: "Sécurité",
    readTime: "12 min",
    content: `# Terra LUNA & UST : Anatomie d'un Crash

## Introduction

Le monde des cryptomonnaies a été marqué par de nombreux événements, mais peu ont eu l'impact du crash de Terra Luna. Ce projet ambitieux, qui visait à révolutionner les paiements décentralisés, a connu une ascension fulgurante avant de s'effondrer brutalement en mai 2022. Cet article retrace l'histoire de Terra Luna, en mettant en lumière sa création, les mécanismes sous-jacents de son stablecoin UST, le rôle du protocole Anchor, et les événements qui ont conduit à son effondrement.

## 1. La Création de Terra Luna

### 1.1 Origines et Fondateurs

Terra Luna a été fondé en janvier 2018 par deux entrepreneurs sud-coréens : **Do Kwon** et **Daniel Shin**. Do Kwon, diplômé de l'Université de Stanford en informatique, avait précédemment travaillé chez Apple et Microsoft avant de lancer sa propre startup, Anyfi, spécialisée dans les solutions de communication décentralisées. De son côté, Daniel Shin est le fondateur de Ticket Monster (TMON), une plateforme majeure de commerce électronique en Corée du Sud, et de Fast Track Asia, un incubateur de startups. Ensemble, ils ont créé **Terraform Labs**, la société derrière la blockchain Terra.

### 1.2 La Blockchain Terra et le Token LUNA

La **blockchain Terra** a été conçue pour faciliter les paiements décentralisés en émettant des **stablecoins** indexés sur différentes monnaies fiduciaires. Le token natif de cette blockchain, le **LUNA**, joue un rôle central dans la stabilité de ces stablecoins et dans la gouvernance du réseau. Les détenteurs de LUNA peuvent participer aux décisions du réseau et sont récompensés pour leur engagement.

## 2. Le Mécanisme de l'UST et le Protocole Anchor

### 2.1 Comprendre l'UST

L'**UST (TerraUSD)** était un stablecoin algorithmique conçu pour maintenir une parité 1:1 avec le dollar américain, sans être adossé à des réserves fiduciaires. Ce mécanisme reposait sur une relation étroite avec le token **LUNA**, qui jouait un rôle d'absorbeur de volatilité.

La stabilité de l'UST était maintenue grâce à un arbitrage économique ouvert à tous les utilisateurs :

- Lorsque l'UST était **supérieur à 1$**, les utilisateurs pouvaient brûler **1$ de LUNA** pour émettre **1 UST**, qu'ils revendaient ensuite sur le marché, réalisant ainsi un profit tout en augmentant l'offre d'UST, ce qui devait faire baisser son prix.
- Lorsque l'UST était **inférieur à 1$**, les utilisateurs étaient incités à brûler **1 UST** pour récupérer **1$ en LUNA**, ce qui réduisait l'offre d'UST et devait mécaniquement faire remonter son prix vers 1$.

Ce système fonctionnait grâce aux acteurs du marché cherchant à tirer profit de ces écarts, censés ramener l'UST vers sa parité de 1$. Cependant, cette stabilité dépendait entièrement de la confiance des utilisateurs et de la liquidité du token **LUNA**.

### 2.2 Le Protocole Anchor et son Rendement de 20%

Le **protocole Anchor** était une plateforme d'épargne et de prêt sur la blockchain Terra qui offrait un rendement annuel de 20% aux déposants d'UST. Ce taux attractif a rapidement attiré de nombreux investisseurs. Anchor générait ces rendements en prêtant les UST déposés à des emprunteurs qui fournissaient des garanties sous forme d'actifs de preuve d'enjeu, tels que le bLUNA (Bonded LUNA) ou le bETH (Bonded Ethereum). Les intérêts payés par les emprunteurs, combinés aux récompenses de staking des garanties, alimentaient les rendements des déposants. Cependant, ce modèle dépendait d'un équilibre entre les dépôts et les emprunts. En janvier 2022, Anchor gérait plus de 5 milliards de dollars en dépôts, tandis que les emprunts s'élevaient à environ 1,28 milliard de dollars, créant un déséquilibre préoccupant.

## 3. Le Crash de Terra Luna

### 3.1 Chronologie des Événements

En mai 2022, l'écosystème Terra a été confronté à une série d'événements déstabilisants :

- **7 mai 2022** : Des transactions massives sur le pool UST de Curve Finance ont entraîné une diminution significative de la liquidité, provoquant une légère déviation de l'UST par rapport au dollar.

- **8-9 mai 2022** : Face à la perte de parité de l'UST, de nombreux investisseurs ont retiré leurs fonds du protocole Anchor, amplifiant la pression sur l'UST et le LUNA.

- **10 mai 2022** : Malgré les tentatives de la Luna Foundation Guard (LFG) d'utiliser ses réserves de bitcoins pour stabiliser l'UST, le stablecoin a continué de chuter, atteignant 0,67 dollar.

- **11 mai 2022** : L'UST a plongé à 0,23 dollar, entraînant une hyperinflation du LUNA en raison du mécanisme de stabilisation, ce qui a conduit à une perte de confiance massive des investisseurs.

### 3.2 Le Cercle Vicieux du Depeg de l'UST

Le mécanisme de stabilisation de l'UST impliquait la conversion d'UST en LUNA lorsque l'UST perdait sa parité avec le dollar. Cependant, lors de la chute de l'UST, ce mécanisme a conduit à une création excessive de LUNA, provoquant une hyperinflation et une dévaluation rapide du token. Cette spirale inflationniste a exacerbé la perte de confiance des investisseurs, accélérant davantage la chute de l'écosystème Terra.

### Conclusion

Le crash de Terra Luna restera l'un des événements les plus marquants de l'histoire des cryptomonnaies. Ce projet, qui promettait un stablecoin algorithmique innovant, s'est effondré en quelques jours sous l'effet d'un engrenage destructeur entre l'UST et LUNA. L'absence de réserves solides, la dépendance excessive au rendement d'Anchor et la panique des investisseurs ont mis en lumière les failles d'un système basé uniquement sur la confiance du marché.

Cet effondrement a eu des répercussions bien au-delà de l'écosystème Terra, accélérant la chute d'autres protocoles et accentuant la défiance envers les stablecoins algorithmiques. Il est survenu dans un contexte plus large de **bear market en 2022**, marqué par l'effondrement de plusieurs acteurs majeurs du secteur, la chute des prix du Bitcoin et de l'Ethereum, ainsi qu'un durcissement réglementaire.

Ce crash soulève des questions essentielles sur la viabilité des stablecoins décentralisés et la nécessité d'une meilleure gestion des risques dans l'écosystème crypto. Alors que les régulateurs scrutent de plus en plus les stablecoins, le secteur devra évoluer pour regagner la confiance des utilisateurs et proposer des alternatives plus robustes aux monnaies traditionnelles.`
  },
  {
    id: '7',
    title: 'Le Rug Pull de $LIBRA : l\'escroquerie de trop ?',
    description: 'Découvrez comment le rug pull du token $LIBRA a causé la perte de plus de 100 millions de dollars aux utilisateurs et apprenez à identifier ces arnaques.',
    imageUrl: '/images/rugpull.jpg',
    date: '2024-03-18',
    category: 'Sécurité',
    readTime: '6 min',
    slug: 'libra-rugpull',
    content: `# Le Rug Pull de $LIBRA : l'escroquerie de trop ?

## Qu'est-ce qu'un Rug Pull en crypto ?

Un rug pull est une arnaque courante dans l'écosystème des cryptomonnaies. Le terme signifie littéralement "tirer le tapis sous les pieds", illustrant l'idée qu'un investisseur se fait soudainement retirer tout le capital. Il s'agit d'un type de fraude où les développeurs d'un projet lèvent des fonds via la vente d'un token, puis retirent subitement toute la liquidité (nous y reviendrons), laissant les investisseurs avec un actif de nulle valeur.

Les rug pulls surviennent généralement sur des nouveaux projets (DEX) où il est facile de créer un jeton et d'inciter les investisseurs à acheter en promettant des rendements faramineux, un projet innovant ou des promesses de gains rapides. Malheureusement, une fois que suffisamment d'argent a été accumulé, les créateurs disparaissent avec les fonds.

## Le scandale du token $LIBRA en Argentine

Mi-février 2024 l'Argentine a été secouée par l'affaire du token $LIBRA, lancé officiellement pour "financer le développement de l'Argentine". Cette initiative a été rapidement soutenue par le président Javier Milei en personne via le réseau social X mais nous savons désormais que son équipe a été aidée par "Kelsier Ventures", société basée aux Etats-Unis.  Ce projet, présenté comme une initiative légitime, s'est avéré être une arnaque massive ayant entraîné la perte de plus de 100 millions de dollars pour les investisseurs.

Lancé sur la blockchain Solana via le protocole Meteora, $LIBRA a rapidement gagné en popularité grâce à une forte médiatisation. Seulement 1,5 heure après son lancement, la capitalisation s'élevait déjà à 1,5 milliards de dollars, attirant des milliers d'investisseurs. La capitalisation de $LIBRA a atteint un pic de 4,5 milliards de dollars avec des volumes très conséquents.

Cependant quelques heures seulement après le lancement, plusieurs portefeuilles associés aux créateurs du token ont retiré la liquidité, provoquant la chute du cours de plus de 90%. La liquidité représente les fonds mis à disposition sur les plateformes d'échange décentralisées pour permettre l'achat et la vente du token. Un retrait aussi brutal a provoqué immédiatement un crash et représente une escroquerie : le rug pull. Des analyses ont ensuite prouvé que plus de 90% des tokens appartenaient à des « insiders » (ayant obtenu des informations privilégiées leur permettant d'acheter des token en premier) voire à des portefeuilles associés directement aux créateurs du projet (dont Kelsier Ventures). Ces token n'étant pas bloqués (ou « locked) c'est leur vente massive qui a permis ce crash.
Kelsier Ventures aurait généré plus de 110M de dollars de profits en $USDC et $SOL grâce à ce lancement (via la vente des tokens et les frais obtenus via Meteora grâce à la Liquidity Pool).

Peu de temps après ces événements le président argentin a supprimé son post de soutien au projet sur X et s'est ensuite repenti affirmant qu'il n'avait pas de liens avec les créateurs du token $LIBRA. Suite à ce post la capitalisation de marché (ou « market cap ») du token ne s'élevait déjà plus qu'à 300M de dollars.

## Influenceurs, insiders et infrastructures de lancement

Il est désormais clair que de nombreux influenceurs (ou KOL pour Key Opinion Leader) étaient informés en avance du lancement de $LIBRA, certains ayant même été payés pour en faire la promotion et apparaissant de ce fait en tant que « partenaires » sur le site de Kelsier Ventures. La liste de ces KOLs s'éclaircit de jour en jour et provoque de nombreux remous sur le réseau social X.

Autre rebondissement invraisemblable dans cette affaire : le fondateur de Kelsier Ventures, Hayden Davis, s'est livré  sur le sujet du lancement dans une interview menée par « Cofeezilla ». Il a ainsi admis des faits pourtant répréhensibles aux Etats-Unis (il réside à Los Angeles) :
-	En plus de l'allocation initiale massive dédiée à son équipe, ils ont acquis des tokens (ou « snipé ») dès le lancement lorsque le prix était au plus bas.
-	Il a admis avoir payé des influenceurs et leur avoir donné des informations privilégiées
-	Il a admis plusieurs autres faits d'insider trading 

Au niveau des protocoles utilisés la polémique enfle également. En effet des membres de l'équipe Meteora ont également été accusées d'avoir obtenu des informations sur le token avant son lancement. Ces faits ne sont pas niés par l'équipe de Jupiter mais ils affirment qu'aucun fait d'insider trading n'a eu lieu. 

Ce lancement catastrophique a eu des impacts sur l'écosystème $Sol, dégradant une réputation qui était déjà controversée. Nous y reviendrons dans un article dédié.

## Comment identifier un rug pull avant d'investir ?

Pour éviter de tomber dans ce type d'arnaque, voici quelques points de vigilance à prendre en compte avant d'investir dans un nouveau token :

1. Vérifier la distribution des tokens
2. Analyser la liquidité et son verrouillage
3. Examiner l'équipe et son historique
4. Étudier le whitepaper et la documentation technique
5. Se méfier des promesses de gains rapides
6. Vérifier la présence d'audits de sécurité`
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