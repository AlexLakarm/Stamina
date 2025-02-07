/* eslint-disable react/no-unescaped-entities */
'use client';

import HeaderMain from "@/components/shared/headermain";
import { Quicksand, Inter } from "next/font/google";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowLeft } from "lucide-react";

const quicksand = Quicksand({ 
  subsets: ["latin"],
  weight: ['700']
});

const inter = Inter({ 
  subsets: ["latin"],
  weight: ['400']
});

export default function NotionsAvanceesPage() {
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
            Quelques dernières notions
          </h1>

          <p className={`${inter.className} text-lg text-muted-foreground leading-relaxed text-justify mb-8`}>
            Vous savez désormais comment fonctionne un wallet et vous vous apprêtez à vous lancer dans le grand bain du web3. 
            Avant cela quelques notions plus avancées sont indispensables à connaître.
            Une fois que vous aurez parcouru cette page, testez vos connaissances !
          </p>

          <div className="text-center mb-12">
            <Link href="/notionsavancees/quiz">
              <Button className="font-bold text-lg px-8">
                <span className={quicksand.className}>Quiz</span>
              </Button>
            </Link>
          </div>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-xl font-semibold">
                Qu'est-ce que la marketcap ?
              </AccordionTrigger>
              <AccordionContent className="text-lg text-muted-foreground leading-relaxed">
                La capitalisation boursière (marketcap) est la valeur totale d'une cryptomonnaie. 
                Elle se calcule en multipliant le prix actuel par le nombre total de tokens en circulation.
                <br /><br />
                C'est un indicateur important qui permet de comparer la taille relative des différentes cryptomonnaies 
                et d'évaluer leur potentiel de croissance.
                <br /><br />
                Pour analyser cette notion capitale (et bien d'autres) vous pouvez utiliser des outils reconnus comme CoinGecko ou CoinMarketCap qui classent les cryptomonnaies en fonction de leur marketcap.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-xl font-semibold">
                Qu'est-ce qu'un stable coin ?
              </AccordionTrigger>
              <AccordionContent className="text-lg text-muted-foreground leading-relaxed">
                Un stablecoin est une cryptomonnaie dont la valeur est indexée sur celle d'un actif stable, 
                généralement le dollar américain (1 USDT = 1 USD).
                <br /><br />
                Les stablecoins servent de "refuge" pendant les périodes de volatilité et facilitent les échanges 
                entre différentes cryptomonnaies. Ils sont également très utilisés dans la DeFi pour les prêts et l'épargne.
                <br /><br />
                Les principaux stablecoins sont (selon leur marketcap en Janvier 2024) :
                <ul className="list-disc list-inside">
                  <li>USDT : Tether</li>
                  <li>USDC : Circle</li>
                  <li>USDS : ex DAI</li>
                  <li>USDE : Ethena</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-xl font-semibold">
                Un CEX ou un DEX ?
              </AccordionTrigger>
              <AccordionContent className="text-lg text-muted-foreground leading-relaxed">
                • <span className="font-medium">CEX (Centralized Exchange)</span> : Une plateforme d'échange centralisée 
                comme Binance ou Coinbase. Plus facile à utiliser pour les débutants, mais nécessite de faire confiance 
                à un intermédiaire qui garde vos fonds.
                <br /><br />
                • <span className="font-medium">DEX (Decentralized Exchange)</span> : Une plateforme d'échange décentralisée 
                comme Uniswap. Permet d'échanger directement depuis votre wallet, sans intermédiaire, mais peut être plus 
                complexe à utiliser.
                <br /><br />
                Chaque type d'échange a ses avantages et ses inconvénients. Les CEX sont plus adaptés aux débutants, 
                tandis que les DEX offrent plus de contrôle et de privacy.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </main>
  );
} 