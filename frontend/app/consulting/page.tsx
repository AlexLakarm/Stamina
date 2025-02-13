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
                    <h1 className={`${quicksand.className} text-4xl md:text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600`}>
                        Services de Consulting Blockchain
                    </h1>

                    <div className={`${inter.className} space-y-8 text-lg text-neutral-400 leading-relaxed`}>
                        <div className="bg-neutral-900/50 p-6 rounded-xl border border-neutral-800">
                            <h2 className="text-2xl font-bold text-neutral-200 mb-4">Notre Approche</h2>
                            <p>
                                Nous accompagnons les entreprises dans leur transition vers la blockchain 
                                avec une approche personnalisée et pragmatique. Notre expertise vous guide 
                                à chaque étape de votre transformation numérique.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <h3 className="text-xl font-semibold text-neutral-300">Nos Services de Consulting</h3>
                            <div className="grid gap-6 md:grid-cols-2">
                                <div className="bg-neutral-900/30 p-5 rounded-lg border border-neutral-800">
                                    <h4 className="text-neutral-200 font-medium mb-2">Stratégie Blockchain</h4>
                                    <p className="text-sm text-neutral-400">
                                        Évaluation des cas d'usage, analyse de faisabilité, et élaboration 
                                        de feuilles de route stratégiques pour l'adoption de la blockchain.
                                    </p>
                                </div>
                                
                                <div className="bg-neutral-900/30 p-5 rounded-lg border border-neutral-800">
                                    <h4 className="text-neutral-200 font-medium mb-2">Formation & Workshops</h4>
                                    <p className="text-sm text-neutral-400">
                                        Sessions de formation sur mesure pour vos équipes, de l'introduction 
                                        à la blockchain aux aspects techniques avancés.
                                    </p>
                                </div>

                                <div className="bg-neutral-900/30 p-5 rounded-lg border border-neutral-800">
                                    <h4 className="text-neutral-200 font-medium mb-2">Audit & Sécurité</h4>
                                    <p className="text-sm text-neutral-400">
                                        Évaluation de la sécurité de vos smart contracts et infrastructures 
                                        blockchain, recommandations et bonnes pratiques.
                                    </p>
                                </div>

                                <div className="bg-neutral-900/30 p-5 rounded-lg border border-neutral-800">
                                    <h4 className="text-neutral-200 font-medium mb-2">Accompagnement Projet</h4>
                                    <p className="text-sm text-neutral-400">
                                        Support dans la gestion et le déploiement de vos projets blockchain, 
                                        de la conception à la mise en production.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-6 rounded-xl border border-blue-500/20">
                            <h3 className="text-xl font-semibold text-neutral-200 mb-4">Pourquoi Nous Choisir ?</h3>
                            <ul className="space-y-3 text-neutral-400">
                                <li className="flex items-center gap-2">
                                    <span className="text-blue-400">•</span>
                                    Expertise technique approfondie en blockchain
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-blue-400">•</span>
                                    Approche sur mesure adaptée à vos besoins
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-blue-400">•</span>
                                    Accompagnement de bout en bout
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-blue-400">•</span>
                                    Veille technologique continue
                                </li>
                            </ul>
                        </div>

                        <div className="space-y-6">
                            <h3 className="text-xl font-semibold text-neutral-300">
                                Nos présentations
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

                        <div className="flex justify-center pt-8">
                            <Link href="/contact">
                                <Button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-6 text-lg hover:opacity-90 transition-opacity">
                                    <span className={quicksand.className}>
                                        Discuter de votre projet
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
