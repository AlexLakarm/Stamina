/* eslint-disable react/no-unescaped-entities */
'use client';

import HeaderMain from "@/components/shared/headermain";
import { Quicksand } from "next/font/google";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Inter } from "next/font/google";

const quicksand = Quicksand({ 
  subsets: ["latin"],
  weight: ['700']
});

const inter = Inter({ 
  subsets: ["latin"],
  weight: ['400']
});

export default function ConceptsPage() {
  return (
    <main className="container mx-auto">
      <HeaderMain />
      <div className="py-8 px-4">
        <div className="max-w-2xl mx-auto">
          <Link href="/">
            <Button variant="outline" className="mb-8 flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Retour
            </Button>
          </Link>

          <h1 className={`${quicksand.className} text-3xl md:text-4xl font-bold text-center mb-8`}>
            Concepts clés
          </h1>

          <p className={`${inter.className} text-lg text-muted-foreground leading-relaxed text-justify mb-8`}>
            La blockchain est un monde nouveau avec son propre vocabulaire et ses concepts uniques. 
            Sans nous perdre dans des détails trop techniques, voici les notions essentielles qu'il 
            vous faut comprendre pour faire vos premiers pas sereinement dans cet écosystème innovant.
          </p>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-xl font-semibold">
                La blockchain, c'est quoi ?
              </AccordionTrigger>
              <AccordionContent className="text-lg text-muted-foreground leading-relaxed">
                Il s'agit d'une technologie qui a gagné en popularité grâce au <span className="font-medium text-foreground">Bitcoin</span>, 
                la première cryptomonnaie créée en 2009. Bitcoin repose en effet sur une <span className="font-medium text-foreground">blockchain publique</span>.
                <br /><br />
                La blockchain est comme un <span className="font-medium text-foreground">livre de comptes numérique</span> partagé entre des milliers 
                d'ordinateurs à travers le monde. Chaque page de ce livre contient un groupe de transactions (un <span className="font-medium text-foreground">bloc</span>), 
                et une fois une page remplie, elle est attachée de manière permanente à la précédente, formant une <span className="font-medium text-foreground">chaîne de blocs</span>.
                <br /><br />
                Ce livre est <span className="font-medium text-foreground">public</span> et <span className="font-medium text-foreground">immuable</span>, 
                ce qui signifie que tout le monde peut le consulter, mais personne ne peut modifier une page une fois qu'elle est écrite. 
                Grâce à cette sécurité et transparence, Bitcoin, la première cryptomonnaie, a pu émerger comme une alternative aux systèmes financiers traditionnels.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-xl font-semibold">
                Quelles applications concrètes ?
              </AccordionTrigger>
              <AccordionContent className="text-lg text-muted-foreground leading-relaxed">
                La blockchain trouve de nombreuses applications au-delà des cryptomonnaies :
                <br /><br />
                • <span className="font-medium text-foreground">Finance décentralisée (DeFi)</span> : prêts, épargne et trading sans intermédiaires bancaires. 
                Exemples : Aave pour les prêts, Uniswap pour l'échange de tokens, Lido pour le staking
                <br /><br />
                • <span className="font-medium text-foreground">NFTs</span> : certificats numériques uniques pour l'art, la musique, les jeux. 
                Exemples : OpenSea pour l'achat/vente, Blur pour le trading, Sorare pour les cartes de sport
                <br /><br />
                • <span className="font-medium text-foreground">Supply Chain</span> : traçabilité des produits de leur origine à leur destination. 
                Exemples : VeChain pour le luxe, IBM Food Trust pour l'alimentaire
                <br /><br />
                • <span className="font-medium text-foreground">Vote électronique</span> : systèmes de vote transparents et inviolables. 
                Exemples : Snapshot pour la gouvernance DAO, Vocdoni pour les élections
                <br /><br />
                • <span className="font-medium text-foreground">Identité numérique</span> : gestion sécurisée des données personnelles. 
                Exemples : Civic pour la vérification d'identité, ENS pour les noms de domaine blockchain
                <br /><br />
                • <span className="font-medium text-foreground">Smart Contracts</span> : contrats auto-exécutables sans intermédiaires. 
                Exemples : Chainlink pour l'oracle, Gnosis Safe pour la gestion multi-signatures
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-xl font-semibold">
                Qu'est-ce que ça change ?
              </AccordionTrigger>
              <AccordionContent className="text-lg text-muted-foreground leading-relaxed">
                Prenons l'exemple de la <span className="font-medium text-foreground">Finance Décentralisée (DeFi)</span> qui illustre parfaitement les avantages de la blockchain :
                <br /><br />
                • <span className="font-medium text-foreground">Accessibilité universelle</span> : Contrairement à la finance traditionnelle, 
                la DeFi est accessible à tous, sans discrimination. Il suffit d'une connexion internet et d'un portefeuille numérique.
                <br /><br />
                • <span className="font-medium text-foreground">Égalité des opportunités</span> : En finance traditionnelle, les produits financiers 
                les plus sophistiqués sont souvent réservés aux clients fortunés. Dans la DeFi, les mêmes opportunités sont 
                disponibles pour tous, que vous investissiez 10€ ou 10 000€.
                <br /><br />
                • <span className="font-medium text-foreground">Désintermédiation</span> : La suppression des intermédiaires (banques, courtiers) 
                réduit les coûts et accélère les transactions. Un transfert international qui prend plusieurs jours et coûte cher 
                en frais bancaires peut être réalisé en quelques minutes pour une fraction du coût.
                <br /><br />
                • <span className="font-medium text-foreground">Transparence totale</span> : Toutes les transactions sont publiques et vérifiables 
                par n'importe qui, contrairement aux systèmes financiers traditionnels où les opérations se déroulent en coulisses. 
                C'est ce manque de transparence qui a conduit à la crise financière de 2008, accélérant la naissance du Bitcoin.
                <br /><br />
                La blockchain permet donc de révolutionner la finance, en la rendant plus accessible, équitable et efficace.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-xl font-semibold">
                Comment l'utiliser ?
              </AccordionTrigger>
              <AccordionContent className="text-lg text-muted-foreground leading-relaxed">
                Tout utilisateur peut interagir avec une blockchain publique en y inscrivant des transactions. 
                Pour cela, il suffit d'un <span className="font-medium text-foreground">wallet</span> (portefeuille numérique) comme Metamask ou Rabby.
                <br /><br />
                • <span className="font-medium text-foreground">Les Dapps (Applications Décentralisées)</span> : De nombreux sites web sont 
                basés sur la blockchain. Contrairement aux applications traditionnelles qui stockent leurs données sur des 
                serveurs privatifs (comme Amazon), les Dapps inscrivent leurs données critiques directement sur la blockchain, 
                les rendant ainsi sécurisées et immuables. Cette approche élimine le point de centralisation au niveau du 
                stockage des données.
                <br /><br />
                • <span className="font-medium text-foreground">Interaction via Wallet</span> : Pour utiliser une Dapp, vous connectez 
                simplement votre wallet au site web. Vous pourrez alors valider des transactions sur la blockchain.
                <br /><br />
                • <span className="font-medium text-foreground">Le Gas (frais de transaction)</span> : Chaque transaction nécessite des frais 
                appelés "gas", payés dans la cryptomonnaie native de la blockchain utilisée. Par exemple :
                <br />
                - <span className="font-medium text-foreground">Ethereum</span> : frais en ETH
                <br />
                - <span className="font-medium text-foreground">Solana</span> : frais en SOL
                <br /><br />
                Ces frais servent à rémunérer les validateurs qui maintiennent la sécurité du réseau.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-xl font-semibold">
                Quelles blockchains utiliser ?
              </AccordionTrigger>
              <AccordionContent className="text-lg text-muted-foreground leading-relaxed">
                Dans ce tutoriel, nous nous concentrerons sur deux blockchains principales :
                <br /><br />
                • <span className="font-medium text-foreground">Ethereum</span> : La blockchain historique qui a révolutionné 
                l'écosystème crypto en introduisant les smart contracts et la DeFi. Bien qu'étant la plus 
                mature et la plus sécurisée, elle présente un inconvénient majeur pour les débutants : des 
                frais de transaction (gas) très élevés qui peuvent atteindre plusieurs dizaines d'euros 
                pour une simple transaction.
                <br /><br />
                • <span className="font-medium text-foreground">Solana</span> : Une blockchain plus récente, conçue pour 
                être rapide et économique. Avec des frais de transaction infimes (moins de 0,01$) et une 
                vitesse d'exécution très rapide, elle est particulièrement adaptée aux débutants. Son 
                écosystème est en pleine expansion avec de nombreuses applications DeFi, NFT et Gaming.
                <br /><br />
                Il existe bien sûr de nombreuses autres blockchains notables :
                <br /><br />
                • <span className="font-medium text-foreground">Bitcoin</span> : La première et la plus connue, elle évolue 
                avec de nouvelles possibilités comme les Ordinals (NFTs sur Bitcoin) et le Lightning Network
                <br /><br />
                • <span className="font-medium">Alternatives populaires</span> :
                <br />
                - <span className="font-medium text-foreground">Polygon</span> : Solution de scaling Ethereum avec des frais réduits
                <br />
                - <span className="font-medium text-foreground">Avalanche</span> : Rapide et compatible avec les outils Ethereum
                <br />
                - <span className="font-medium text-foreground">Celestia</span> : Nouvelle génération de blockchain modulaire
                <br />
                - <span className="font-medium text-foreground">Sonic, Abstract</span>, et bien d'autres émergent régulièrement avec leurs innovations propres
                <br /><br />
                Le choix de la blockchain dépendra de vos besoins : <span className="font-medium text-foreground">Ethereum</span> pour la sécurité maximale, 
                <span className="font-medium text-foreground"> Solana</span> pour l'efficacité et les faibles coûts, ou d'autres pour des cas d'usage spécifiques.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </main>
  );
} 