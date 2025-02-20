/* eslint-disable react/no-unescaped-entities */
'use client';

import HeaderMain from "@/components/shared/headermain";
import { Quicksand, Inter } from "next/font/google";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const quicksand = Quicksand({ 
  subsets: ["latin"],
  weight: ['700']
});

const inter = Inter({ 
  subsets: ["latin"],
  weight: ['400']
});

export default function DevPage() {
  return (
    <main className="bg-neutral-950 min-h-screen">
      <HeaderMain />
      <div className="container mx-auto py-12 px-4">
        <Link href="/" className="hidden md:block absolute left-8 top-24">
          <Button variant="outline" className="flex items-center gap-2 bg-neutral-900 text-neutral-200 border-neutral-800 hover:bg-neutral-800">
            <ArrowLeft className="h-4 w-4" />
            Retour
          </Button>
        </Link>

        <div className="max-w-3xl mx-auto">
          <h1 className={`${quicksand.className} text-4xl md:text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-white via-neutral-200 to-white drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]`}>
            Développement Blockchain
          </h1>

          <div className={`${inter.className} space-y-8 text-lg text-neutral-400 leading-relaxed`}>
            <div className="bg-neutral-900/50 p-6 rounded-xl border border-blue-500/40 shadow-[0_0_15px_rgba(59,130,246,0.15)]">
              <h2 className="text-2xl font-bold text-neutral-200 mb-4">Notre Expertise</h2>
              <p>
                Nous développons des solutions blockchain innovantes sur les réseaux EVM (Ethereum Virtual Machine) 
                et bientôt sur Solana. Notre équipe maîtrise les dernières technologies pour créer des applications 
                décentralisées performantes et sécurisées.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-neutral-300">Nos Services de Développement</h3>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="bg-neutral-900/30 p-5 rounded-lg border border-neutral-800">
                  <h4 className="text-neutral-200 font-medium mb-2 text-lg md:text-base">Smart Contracts EVM</h4>
                  <p className="text-neutral-400 text-base md:text-sm">
                    Développement de contrats intelligents en Solidity pour Ethereum et réseaux compatibles. 
                    Tests approfondis et audit de sécurité inclus.
                  </p>
                </div>
                
                <div className="bg-neutral-900/30 p-5 rounded-lg border border-neutral-800">
                  <h4 className="text-neutral-200 font-medium mb-2 text-lg md:text-base">DApps & Frontend</h4>
                  <p className="text-neutral-400 text-base md:text-sm">
                    Applications web3 modernes avec React/Next.js. Intégration wallet, 
                    interactions blockchain et expérience utilisateur optimisée.
                  </p>
                </div>

                <div className="bg-neutral-900/30 p-5 rounded-lg border border-neutral-800">
                  <h4 className="text-neutral-200 font-medium mb-2 text-lg md:text-base">Tokens & NFTs</h4>
                  <p className="text-neutral-400 text-base md:text-sm">
                    Création de tokens ERC-20/ERC-721/ERC-1155 personnalisés. 
                    Smart contracts, marketplace et outils de gestion sur mesure.
                  </p>
                </div>

                <div className="bg-neutral-900/30 p-5 rounded-lg border border-neutral-800">
                  <h4 className="text-neutral-200 font-medium mb-2 text-lg md:text-base">DeFi & DAO</h4>
                  <p className="text-neutral-400 text-base md:text-sm">
                    Développement de protocoles DeFi et systèmes de gouvernance DAO. 
                    Staking, farming, voting et treasury management.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 p-6 rounded-xl border border-purple-500/20">
              <h3 className="text-xl font-semibold text-neutral-200 mb-4">Technologies Maîtrisées</h3>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="text-neutral-200 font-medium mb-2">Blockchain</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Ethereum & réseaux EVM</li>
                    <li>• Solidity & Hardhat</li>
                    <li>• Web3.js & Ethers.js</li>
                    <li>• Prochainement : Solana & Rust</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-neutral-200 font-medium mb-2">Frontend & Backend</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• React & Next.js</li>
                    <li>• TypeScript</li>
                    <li>• Node.js</li>
                    <li>• The Graph & IPFS</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-neutral-900/30 p-6 rounded-xl border border-neutral-800">
              <h3 className="text-xl font-semibold text-neutral-200 mb-4">Notre Processus</h3>
              <ol className="space-y-4 text-sm">
                <li className="flex gap-3">
                  <span className="text-blue-400 font-bold">1.</span>
                  <span>Analyse approfondie des besoins et spécifications techniques</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-400 font-bold">2.</span>
                  <span>Développement itératif avec tests continus</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-400 font-bold">3.</span>
                  <span>Audit de sécurité et optimisation</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-400 font-bold">4.</span>
                  <span>Déploiement et maintenance</span>
                </li>
              </ol>
            </div>

            <div className="flex justify-center pt-8">
              <Link href="/contact">
                <Button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-6 text-lg hover:opacity-90 transition-opacity">
                  <span className={quicksand.className}>
                    Démarrer votre projet
                  </span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 