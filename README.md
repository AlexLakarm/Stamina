# How To Blockchain 🚀

Une plateforme éducative interactive pour découvrir la blockchain et le Web3 de manière pratique et sécurisée.

## 🎯 Objectif

How To Blockchain a pour mission de démystifier la blockchain et de permettre à chacun de faire ses premiers pas dans le Web3 en toute sécurité. Notre approche "learning by doing" permet aux utilisateurs de :

- Créer leur premier wallet
- Obtenir des cryptomonnaies de test gratuitement
- Interagir avec une DApp (Application Décentralisée)
- Créer leurs premiers NFTs
- Le tout sur un réseau de test, sans risque financier

## 🛠 Technologies Utilisées

### Frontend
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Shadcn/ui
- RainbowKit (Gestion des wallets)
- Wagmi (Interactions blockchain)

### Backend / Smart Contracts
- Solidity
- Hardhat
- OpenZeppelin
- Ethers.js

### Réseau
- Ethereum Holesky (Réseau de test)

## 🚀 Démarrage

### Prérequis
- Node.js (v18+)
- npm ou yarn
- Git

### Installation

1. Clonez le repository :
```bash
git clone https://github.com/votre-username/howtoblockchain.git
cd howtoblockchain
```

2. Installez les dépendances du frontend :
```bash
cd frontend
npm install
```

3. Installez les dépendances du backend :
```bash
cd backend
npm install
```

4. Créez un fichier `.env` dans le dossier frontend avec les variables suivantes :
```env
NEXT_PUBLIC_ALCHEMY_API_KEY=votre_clé_api
NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID=votre_project_id
```

5. Lancez l'application en mode développement :
```bash
# Dans le dossier frontend
npm run dev
```

## 📚 Structure du Projet

```
howtoblockchain/
├── frontend/               # Application Next.js
│   ├── app/               # Pages et routes
│   ├── components/        # Composants réutilisables
│   └── public/           # Assets statiques
│
└── backend/               # Smart Contracts et tests
    ├── contracts/        # Smart Contracts Solidity
    ├── scripts/         # Scripts de déploiement
    └── test/            # Tests unitaires
```

## 🔒 Sécurité

- Utilisation exclusive du réseau de test Holesky
- Smart Contracts audités et basés sur OpenZeppelin
- Pas de manipulation de vrais fonds
- Tests unitaires complets

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :
1. Fork le projet
2. Créer une branche pour votre fonctionnalité
3. Commiter vos changements
4. Pousser vers la branche
5. Ouvrir une Pull Request

## 📝 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 🙋‍♂️ Support

Pour toute question ou suggestion, n'hésitez pas à :
- Ouvrir une issue
- Nous contacter via [coming soon]
- Contacter notre lead dev via X : @La_Kaarm