/* eslint-disable react/no-unescaped-entities */
'use client';

import HeaderMain from "@/components/shared/headermain";
import { Quicksand, Inter } from "next/font/google";
import { Button } from "@/components/ui/button";
import { ExternalLink, ArrowLeft } from "lucide-react";
import Link from "next/link";

const quicksand = Quicksand({ 
  subsets: ["latin"],
  weight: ['700']
});

const inter = Inter({ 
  subsets: ["latin"],
  weight: ['400']
});

export default function WalletPage() {
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
            Utiliser un wallet pour naviguer dans le web3
          </h1>

          {/* Nouvelle section : Qu'est-ce qu'un wallet */}
          <section className="mb-12">
            <h2 className={`${quicksand.className} text-2xl font-bold mb-4`}>
              Qu'est-ce qu'un wallet ?
            </h2>
            <div className={`${inter.className} text-lg text-muted-foreground space-y-4`}>
              <p>
                Un wallet (portefeuille numérique) est votre <span className="font-medium text-foreground">passeport pour le web3</span>. 
                Il joue un rôle central dans votre expérience blockchain en servant à la fois de :
              </p>
              <ul className="list-disc pl-6 space-y-4">
                <li>
                  <span className="font-medium text-foreground">Gestionnaire d'identité</span> : Il vous permet de vous connecter 
                  de manière sécurisée aux applications décentralisées (Dapps), comme vous le feriez avec un compte Google 
                  pour les applications traditionnelles.
                </li>
                <li>
                  <span className="font-medium text-foreground">Coffre-fort numérique</span> : Il sécurise vos actifs numériques 
                  (cryptomonnaies, NFTs) grâce à un système de cryptographie avancée.
                </li>
                <li>
                  <span className="font-medium text-foreground">Interface de transaction</span> : Il vous permet d'envoyer, 
                  recevoir et gérer vos actifs numériques en toute sécurité.
                </li>
                <li>
                  <span className="font-medium text-foreground">Centre de contrôle</span> : Il vous donne un aperçu de tous 
                  vos actifs et vous permet de valider ou rejeter les transactions proposées par les Dapps.
                </li>
              </ul>
              <p>
                En résumé, votre wallet est l'outil essentiel qui vous permet d'interagir avec la blockchain et 
                l'écosystème web3 de manière sécurisée et autonome, sans dépendre d'intermédiaires traditionnels 
                comme les banques.
              </p>
            </div>
          </section>

          {/* Choix du wallet */}
          <section className="mb-12">
            <h2 className={`${quicksand.className} text-2xl font-bold mb-4`}>
              Choisir son wallet
            </h2>
            <p className={`${inter.className} text-lg text-muted-foreground mb-6`}>
              Pour débuter, nous vous recommandons d'installer l'un de ces wallets selon la blockchain que vous souhaitez utiliser :
            </p>
            <div className="space-y-6">
              <div className="flex flex-col items-start gap-2">
                <p className={`${inter.className} text-lg`}>
                  Pour Ethereum : <span className="font-bold bg-gradient-to-r from-blue-500 to-blue-900 text-transparent bg-clip-text">Rabby Wallet</span>
                </p>
                <Button 
                  variant="outline" 
                  className="flex items-center gap-2"
                  onClick={() => window.open('https://rabby.io/', '_blank')}
                >
                  Télécharger Rabby Wallet
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex flex-col items-start gap-2">
                <p className={`${inter.className} text-lg`}>
                  Pour Solana : <span className="font-bold bg-gradient-to-r from-violet-900 to-violet-500 text-transparent bg-clip-text">Phantom</span>
                </p>
                <Button 
                  variant="outline" 
                  className="flex items-center gap-2"
                  onClick={() => window.open('https://phantom.app/', '_blank')}
                >
                  Télécharger Phantom
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </section>

          {/* Installation et Configuration */}
          <section className="mb-12">
            <h2 className={`${quicksand.className} text-2xl font-bold mb-4`}>
              Installation et Configuration
            </h2>
            <div className={`${inter.className} text-lg text-muted-foreground space-y-4`}>
              <p>
                Le wallet s'installe comme une extension de navigateur (nous recommandons Chrome). 
                Une fois installée, l'icône apparaîtra en haut à droite de votre fenêtre de navigation.
              </p>
              <p>
                Lors de la première utilisation, votre wallet générera :
              </p>
              <ul className="list-disc pl-6 space-y-4">
                <li>
                  <span className="font-medium text-foreground">Une phrase secrète</span> : Composée de 12 ou 24 mots, 
                  c'est votre "clé maîtresse". Elle permet de récupérer votre wallet sur n'importe quel appareil. 
                  Ne la partagez JAMAIS et conservez-la précieusement sur papier.
                </li>
                <li>
                  <span className="font-medium text-foreground">Une clé privée</span> : C'est votre signature numérique, 
                  elle permet de valider les transactions. Elle doit rester strictement confidentielle.
                </li>
                <li>
                  <span className="font-medium text-foreground">Une clé publique</span> : C'est votre "adresse" sur la blockchain, 
                  que vous pouvez partager pour recevoir des crypto-actifs.
                </li>
              </ul>
              <p>
                Pour approfondir ces notions techniques, consultez{' '}
                <Link 
                  href="https://cryptoast.fr/portefeuille-phrase-secrete-et-generation-dadresses/"
                  target="_blank"
                  className="text-blue-500 hover:underline"
                >
                  cet article détaillé
                </Link>.
              </p>
            </div>
          </section>

          {/* Utilisation avec une Dapp */}
          <section>
            <h2 className={`${quicksand.className} text-2xl font-bold mb-4`}>
              Utilisation avec une Dapp
            </h2>
            <div className={`${inter.className} text-lg text-muted-foreground space-y-4`}>
              <p>
                Lorsque vous utilisez une application décentralisée (Dapp), voici comment cela fonctionne :
              </p>
              <ol className="list-decimal pl-6 space-y-4">
                <li>
                  La Dapp vous demandera de connecter votre wallet via un bouton "Connect Wallet"
                </li>
                <li>
                  Votre wallet s'ouvrira dans une fenêtre pop-up
                </li>
                <li>
                  Pour chaque action importante (transaction, signature), le wallet affichera une pop-up 
                  vous demandant de confirmer l'opération
                </li>
                <li>
                  Vérifiez toujours les détails de la transaction (montant, destinataire, frais) avant 
                  de la valider
                </li>
              </ol>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
} 