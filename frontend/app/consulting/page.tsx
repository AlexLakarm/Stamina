/* eslint-disable react/no-unescaped-entities */
"use client"

import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Quicksand, Inter } from "next/font/google";
import HeaderMain from "@/components/shared/headermain";
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

const quicksand = Quicksand({ 
    subsets: ["latin"],
    weight: ['700']
});

const inter = Inter({ 
    subsets: ["latin"],
    weight: ['400']
});

const presentations = [
  {
    title: "Blockchain : Fondamentaux et défis",
    description: "Une introduction complète aux concepts de la blockchain et ses enjeux actuels.",
    sommaire: [
      "Introduction à la blockchain",
      "Mécanismes de consensus",
      "Smart contracts",
      "Défis techniques et scalabilité",
      "Cas d'usage entreprise"
    ]
  },
  {
    title: "La finance décentralisée",
    description: "Exploration des protocoles DeFi et de leur impact sur le secteur financier.",
    sommaire: [
      "Principes de la DeFi",
      "Protocoles de prêt",
      "Exchanges décentralisés",
      "Yield farming",
      "Gestion des risques"
    ]
  },
  {
    title: "La blockchain à l'ère de la régulation",
    description: "Analyse du cadre réglementaire et des perspectives d'évolution.",
    sommaire: [
      "Cadre réglementaire actuel",
      "MiCA et réglementation EU",
      "Conformité et KYC",
      "Fiscalité des cryptoactifs",
      "Perspectives futures"
    ]
  },
  {
    title: "Les NFT : la propriété sur la blockchain",
    description: "Comprendre les enjeux et opportunités des tokens non-fongibles.",
    sommaire: [
      "Principes et définitions",
      "Standards techniques (ERC-721, ERC-1155)",
      "Domaines d'applications",
      "Limites et controverses",
      "Perspectives d'avenir"
    ]
  }
];

export default function ConsultingPage() {
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
                        Consulting & Formation
                    </h1>

                    <div className={`${inter.className} space-y-8 text-lg text-neutral-400 leading-relaxed`}>
                        <div className="bg-neutral-900/50 p-6 rounded-xl border border-blue-500/40 shadow-[0_0_15px_rgba(59,130,246,0.15)]">
                            <h2 className="text-2xl font-bold text-neutral-200 mb-4">Notre Expertise</h2>
                            <p className="text-justify">
                                Nous accompagnons les entreprises et les professionnels dans leur compréhension 
                                de l'écosystème blockchain et crypto. Spécialisés dans le secteur financier, 
                                nous intervenons également auprès d'organisations de tous secteurs pour des missions 
                                de formation et de conseil stratégique.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <h3 className="text-xl font-semibold text-neutral-300">Nos Services</h3>
                            <div className="grid gap-6 md:grid-cols-2">
                                <div className="bg-neutral-900/30 p-5 rounded-lg border border-neutral-800">
                                    <h4 className="text-neutral-200 font-medium mb-2">Conseil Stratégique</h4>
                                    <p className="text-sm text-neutral-400">
                                        Accompagnement des organisations dans leur approche de l'écosystème crypto, 
                                        avec une expertise particulière pour le secteur financier.
                                    </p>
                                </div>
                                
                                <div className="bg-neutral-900/30 p-5 rounded-lg border border-neutral-800">
                                    <h4 className="text-neutral-200 font-medium mb-2">Formation & Workshops</h4>
                                    <p className="text-sm text-neutral-400">
                                        Sessions pratiques et séminaires adaptés à votre contexte : découverte, 
                                        manipulation des outils et cas d'usage sectoriels.
                                    </p>
                                </div>

                                <div className="bg-neutral-900/30 p-5 rounded-lg border border-neutral-800">
                                    <h4 className="text-neutral-200 font-medium mb-2">Veille & Analyse</h4>
                                    <p className="text-sm text-neutral-400">
                                        Décryptage des innovations blockchain et de leurs impacts potentiels 
                                        sur votre activité et votre secteur.
                                    </p>
                                </div>

                                <div className="bg-neutral-900/30 p-5 rounded-lg border border-neutral-800">
                                    <h4 className="text-neutral-200 font-medium mb-2">Support Réglementaire</h4>
                                    <p className="text-sm text-neutral-400">
                                        Accompagnement dans la compréhension du cadre réglementaire crypto 
                                        et de ses implications pour votre activité.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-6 rounded-xl border border-blue-500/20">
                            <h3 className="text-xl font-semibold text-neutral-200 mb-4">Notre Approche</h3>
                            <ul className="space-y-3 text-neutral-400">
                                <li className="flex items-center gap-2">
                                    <span className="text-blue-400">•</span>
                                    Adaptation à votre contexte
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-blue-400">•</span>
                                    Formation pratique et interactive
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-blue-400">•</span>
                                    Expertise technique et sectorielle
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-blue-400">•</span>
                                    Accompagnement personnalisé
                                </li>
                            </ul>
                        </div>

                        <div className="space-y-6">
                            <h3 className="text-xl font-semibold text-neutral-300">
                                Exemples de présentations :
                            </h3>

                            <Carousel className="w-full max-w-5xl mx-auto">
                                <CarouselContent>
                                    {presentations.map((pres, index) => (
                                        <CarouselItem key={index} className="basis-1/2 pl-4">
                                            <Card className="bg-neutral-900/30 border-neutral-800 h-[400px]">
                                                <CardContent className="flex flex-col h-full p-8">
                                                    <div className="mb-6">
                                                        <h3 className="text-2xl font-bold text-neutral-200 mb-3">{pres.title}</h3>
                                                        <p className="text-base text-neutral-400">{pres.description}</p>
                                                    </div>
                                                    <ul className="text-left text-sm text-neutral-500 space-y-3 mt-auto">
                                                        {pres.sommaire.map((item, idx) => (
                                                            <li key={idx} className="flex items-start gap-2">
                                                                <span className="text-blue-400 text-[0.8rem] mt-1">•</span>
                                                                <span>{item}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </CardContent>
                                            </Card>
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>
                                <CarouselPrevious className="bg-neutral-900 border-neutral-800 text-neutral-400 hover:bg-neutral-800" />
                                <CarouselNext className="bg-neutral-900 border-neutral-800 text-neutral-400 hover:bg-neutral-800" />
                            </Carousel>
                        </div>

                        {/* Nouvelle section Focus Workshops */}
                        <div className="mt-16 space-y-6">
                            <h3 className="text-xl font-semibold text-neutral-300">
                                Focus sur : les <span className="font-bold text-2xl">Workshops</span>
                            </h3>
                            
                            <div className="bg-neutral-900/30 p-8 rounded-xl border border-neutral-800">
                                <p className="text-neutral-400 mb-6">
                                    Contrairement aux formations théoriques traditionnelles, nous proposons une approche 
                                    unique : la blockchain par la pratique. Vos équipes manipulent directement sur un 
                                    réseau de test, permettant une compréhension concrète sans aucun risque financier.
                                </p>

                                <div className="grid gap-4 md:grid-cols-2 mt-8">
                                    <div className="space-y-4">
                                        <h4 className="text-lg font-medium text-neutral-200">Manipulation Concrète</h4>
                                        <ul className="space-y-3">
                                            <li className="flex items-start gap-3">
                                                <span className="text-blue-400 text-lg mt-0.5">•</span>
                                                <span className="text-neutral-400">Création et utilisation d'un wallet Web3 (MetaMask)</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <span className="text-blue-400 text-lg mt-0.5">•</span>
                                                <span className="text-neutral-400">Achat et transfert de cryptomonnaies sur réseau de test</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="space-y-4">
                                        <h4 className="text-lg font-medium text-neutral-200">Exploration Pratique</h4>
                                        <ul className="space-y-3">
                                            <li className="flex items-start gap-3">
                                                <span className="text-blue-400 text-lg mt-0.5">•</span>
                                                <span className="text-neutral-400">Création (mint) et gestion de NFTs</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <span className="text-blue-400 text-lg mt-0.5">•</span>
                                                <span className="text-neutral-400">Utilisation de protocoles DeFi (échange, prêt, yield)</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="mt-8 p-4 bg-blue-500/10 rounded-lg border border-blue-500/20">
                                    <p className="text-neutral-300 italic">
                                        "Une approche hands-on unique qui permet enfin de démystifier la blockchain 
                                        par la pratique, au-delà des concepts théoriques habituels."
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-center pt-8">
                            <Link href="/contact">
                                <Button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-6 text-lg hover:opacity-90 transition-opacity">
                                    <span className={quicksand.className}>
                                        Échanger sur vos besoins
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
