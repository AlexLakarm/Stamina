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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";


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
      {
        section: "1. Introduction à la blockchain",
        points: [
          "A. Histoire et origines du Bitcoin",
          "B. Principes fondamentaux",
          "C. La blockchain ou Des blockchains ?"
        ]
      },
      {
        section: "2. Mécanismes de consensus",
        points: [
          "A. Proof of Work vs Proof of Stake",
          "B. Sécurité et décentralisation",
          "C. Évolutivité et scalabilité"
        ]
      },
      {
        section: "3. Smart contracts et applications",
        points: [
          "A. Fonctionnement des smart contracts",
          "B. Plateformes (Ethereum, Solana...)",
          "C. Cas d'usage entreprise"
        ]
      }
    ]
  },
  {
    title: "La finance décentralisée",
    description: "Exploration des protocoles DeFi et de leur impact sur le secteur financier.",
    sommaire: [
      {
        section: "1. Fondamentaux de la DeFi",
        points: [
          "A. Architecture et composabilité",
          "B. Tokens et standards",
          "C. Liquidité et AMMs"
        ]
      },
      {
        section: "2. Protocoles et applications",
        points: [
          "A. Prêts et emprunts",
          "B. Exchanges décentralisés",
          "C. Yield farming et staking"
        ]
      },
      {
        section: "3. Gestion des risques",
        points: [
          "A. Risques techniques",
          "B. Risques financiers",
          "C. Bonnes pratiques"
        ]
      }
    ]
  },
  {
    title: "La blockchain à l'ère de la régulation",
    description: "Analyse du cadre réglementaire et des perspectives d'évolution.",
    sommaire: [
      {
        section: "1. Cadre réglementaire actuel",
        points: [
          "A. État des lieux global",
          "B. Acteurs régulés vs non-régulés",
          "C. Juridictions clés"
        ]
      },
      {
        section: "2. Réglementation européenne",
        points: [
          "A. MiCA et ses implications",
          "B. Conformité et KYC",
          "C. Fiscalité des cryptoactifs"
        ]
      },
      {
        section: "3. Perspectives d'évolution",
        points: [
          "A. Tendances réglementaires",
          "B. Impact sur l'industrie",
          "C. Adaptation des acteurs"
        ]
      }
    ]
  },
  {
    title: "Les NFT : la propriété sur la blockchain",
    description: "Comprendre les enjeux et opportunités des tokens non-fongibles.",
    sommaire: [
      {
        section: "1. Principes fondamentaux",
        points: [
          "A. Définition et concepts clés",
          "B. Standards techniques (ERC-721, ERC-1155)",
          "C. Infrastructure et marketplaces"
        ]
      },
      {
        section: "2. Applications et cas d'usage",
        points: [
          "A. Art et collectibles",
          "B. Gaming et metaverse",
          "C. Tokenisation d'actifs réels"
        ]
      },
      {
        section: "3. Enjeux et perspectives",
        points: [
          "A. Défis techniques",
          "B. Questions juridiques",
          "C. Évolutions futures"
        ]
      }
    ]
  },
  {
    title: "Onboarding et Profils d'Investisseurs",
    description: "Mieux comprendre le parcours et les besoins des investisseurs crypto.",
    sommaire: [
      {
        section: "1. Pourquoi s'intéresser à la crypto ?",
        points: [
          "A. Adoption massive des cryptos malgré la volatilité",
          "B. Impact sur la gestion patrimoniale et l'allocation d'actifs",
          "C. Comprendre la psychologie et les parcours d'investissement"
        ]
      },
      {
        section: "2. Une ou plusieurs blockchains ?",
        points: [
          "A. Définition et principes fondamentaux (distribué, immutable et transparent)",
          "B. Les notions de décentralisation et de consensus",
          "C. Différence entre blockchain publique et privée (Hyperledger, Quorum)"
        ]
      },
      {
        section: "3. Onboarding : Comment Acheter ?",
        points: [
          "A. Les principales plateformes utilisées par les particuliers",
          "B. Le processus typique d'onboarding en France",
          "C. Quels obstacles freinent encore l'investissement crypto "
        ]
      },
      {
        section: "4. Profils d'investisseurs",
        points: [
          "A. Profil 1 : Le père de famille",
          "B. Profil 2 : Le féru de tech",
          "C. Profil 3 : Le Degen (Crypto-native, risque extrême)"
        ]
      }
    ]
  }
];

export default function ConsultingPage() {
    return (
        <div className="min-h-screen bg-neutral-950">
            <HeaderMain />
            <div className="max-w-[1920px] mx-auto px-4 pt-20">
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
                            <p>
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
                                    <h4 className="text-neutral-200 font-medium mb-2 text-xl md:text-lg">Conseil Stratégique</h4>
                                    <p className="text-neutral-400 text-lg md:text-base">
                                        Accompagnement des organisations dans leur approche de l'écosystème crypto, 
                                        avec une expertise particulière pour le secteur financier.
                                    </p>
                                </div>
                                
                                <div className="bg-neutral-900/30 p-5 rounded-lg border border-neutral-800">
                                    <h4 className="text-neutral-200 font-medium mb-2 text-xl md:text-lg">Formation & Workshops</h4>
                                    <p className="text-neutral-400 text-lg md:text-base">
                                        Sessions pratiques et séminaires adaptés à votre contexte : découverte, 
                                        manipulation des outils et cas d'usage sectoriels.
                                    </p>
                                </div>

                                <div className="bg-neutral-900/30 p-5 rounded-lg border border-neutral-800">
                                    <h4 className="text-neutral-200 font-medium mb-2 text-xl md:text-lg">Veille & Analyse</h4>
                                    <p className="text-neutral-400 text-lg md:text-base">
                                        Décryptage des innovations blockchain et de leurs impacts potentiels 
                                        sur votre activité et votre secteur.
                                    </p>
                                </div>

                                <div className="bg-neutral-900/30 p-5 rounded-lg border border-neutral-800">
                                    <h4 className="text-neutral-200 font-medium mb-2 text-xl md:text-lg">Support Réglementaire</h4>
                                    <p className="text-neutral-400 text-lg md:text-base">
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

                            {/* Version Desktop */}
                            <div className="hidden md:block">
                                <Carousel className="w-full max-w-5xl mx-auto">
                                    <CarouselContent>
                                        {presentations.map((pres, index) => (
                                            <CarouselItem key={index} className="basis-1/2 pl-4">
                                                <Card className="bg-neutral-900/30 border-neutral-600 h-[500px]">
                                                    <CardContent className="flex flex-col h-full p-4 pt-6">
                                                        <div className="mb-4">
                                                            <h3 className="text-xl font-bold text-neutral-200 mb-2">{pres.title}</h3>
                                                            <p className="text-sm text-neutral-400">{pres.description}</p>
                                                        </div>
                                                        <Accordion type="single" collapsible className="w-full">
                                                            {pres.sommaire.map((section, idx) => (
                                                                <AccordionItem 
                                                                    key={idx} 
                                                                    value={`section-${idx}`} 
                                                                    className="border-neutral-800 px-2"
                                                                >
                                                                    <AccordionTrigger 
                                                                        className="text-[15px] font-medium text-neutral-200 hover:text-neutral-100 hover:no-underline"
                                                                    >
                                                                        {section.section}
                                                                    </AccordionTrigger>
                                                                    <AccordionContent className="pt-2">
                                                                        <ul className="space-y-2 pl-4">
                                                                            {section.points.map((point, pidx) => (
                                                                                <li key={pidx} className="flex items-start gap-2">
                                                                                    <span className="text-blue-400 text-base mt-1">•</span>
                                                                                    <span className="text-[14px] text-neutral-300">{point}</span>
                                                                                </li>
                                                                            ))}
                                                                        </ul>
                                                                    </AccordionContent>
                                                                </AccordionItem>
                                                            ))}
                                                        </Accordion>
                                                    </CardContent>
                                                </Card>
                                            </CarouselItem>
                                        ))}
                                    </CarouselContent>
                                    <CarouselPrevious className="bg-neutral-900 border-neutral-800 text-neutral-400 hover:bg-neutral-800" />
                                    <CarouselNext className="bg-neutral-900 border-neutral-800 text-neutral-400 hover:bg-neutral-800" />
                                </Carousel>
                            </div>

                            {/* Version Mobile */}
                            <div className="block md:hidden">
                                <Carousel className="w-full mx-auto">
                                    <CarouselContent>
                                        {presentations.map((pres, index) => (
                                            <CarouselItem key={index}>
                                                <Card className="bg-neutral-900/30 border-neutral-800 h-[500px]">
                                                    <CardContent className="flex flex-col h-full p-4 pt-6">
                                                        <div className="mb-4">
                                                            <h3 className="text-xl font-bold text-neutral-200 mb-2">{pres.title}</h3>
                                                            <p className="text-sm text-neutral-400">{pres.description}</p>
                                                        </div>
                                                        <Accordion type="single" collapsible className="w-full">
                                                            {pres.sommaire.map((section, idx) => (
                                                                <AccordionItem 
                                                                    key={idx} 
                                                                    value={`section-${idx}`} 
                                                                    className="border-neutral-800 px-2"
                                                                >
                                                                    <AccordionTrigger 
                                                                        className="text-[15px] font-medium text-neutral-200 hover:text-neutral-100 hover:no-underline"
                                                                    >
                                                                        {section.section}
                                                                    </AccordionTrigger>
                                                                    <AccordionContent className="pt-2">
                                                                        <ul className="space-y-2 pl-4">
                                                                            {section.points.map((point, pidx) => (
                                                                                <li key={pidx} className="flex items-start gap-2">
                                                                                    <span className="text-blue-400 text-base mt-1">•</span>
                                                                                    <span className="text-[14px] text-neutral-300">{point}</span>
                                                                                </li>
                                                                            ))}
                                                                        </ul>
                                                                    </AccordionContent>
                                                                </AccordionItem>
                                                            ))}
                                                        </Accordion>
                                                    </CardContent>
                                                </Card>
                                            </CarouselItem>
                                        ))}
                                    </CarouselContent>
                                    <div className="flex justify-center gap-4 mt-4">
                                        <CarouselPrevious className="static bg-neutral-900 border-neutral-800 text-neutral-400 hover:bg-neutral-800 translate-y-0" />
                                        <CarouselNext className="static bg-neutral-900 border-neutral-800 text-neutral-400 hover:bg-neutral-800 translate-y-0" />
                                    </div>
                                </Carousel>
                            </div>
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
                                <Button className="bg-gradient-to-r mb-12 from-blue-500 to-purple-500 text-white px-8 py-6 text-lg hover:opacity-90 transition-opacity">
                                    <span className={quicksand.className}>
                                        Échanger sur vos besoins
                                    </span>
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
