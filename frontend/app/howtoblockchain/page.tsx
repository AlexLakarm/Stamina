/* eslint-disable react/no-unescaped-entities */
"use client"

import { ArrowLeft, ExternalLink, GraduationCap, Book, Code, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Quicksand, Inter } from "next/font/google";
import HeaderMain from "@/components/shared/headermain";
import { GlowingEffect } from "@/components/ui/glowing-effect";

const quicksand = Quicksand({
    subsets: ["latin"],
    weight: ['700']
});

const inter = Inter({
    subsets: ["latin"],
    weight: ['400']
});

interface GridItemProps {
    area: string;
    icon: React.ReactNode;
    title: string;
    description: React.ReactNode;
}

const GridItem = ({ area, icon, title, description }: GridItemProps) => {
    return (
        <li className={`min-h-[14rem] list-none ${area}`}>
            <div className="relative h-full rounded-2.5xl border border-neutral-800 p-2 md:rounded-3xl md:p-3">
                <GlowingEffect
                    spread={40}
                    glow={true}
                    disabled={false}
                    proximity={64}
                    inactiveZone={0.01}
                />
                <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-0.75 p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D] md:p-6">
                    <div className="relative flex flex-1 flex-col gap-3">
                        <div className="w-fit rounded-lg border border-neutral-700 p-2">
                            {icon}
                        </div>
                        <div className="space-y-3">
                            <h3 className="pt-0.5 text-xl/[1.375rem] font-semibold font-sans -tracking-4 md:text-2xl/[1.875rem] text-balance text-white">
                                {title}
                            </h3>
                            <h2 className="font-sans text-sm/[1.125rem] md:text-base/[1.375rem] text-neutral-400">
                                {description}
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
};

export default function HowToBlockchainPage() {
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
                    <h1 className={`${quicksand.className} text-4xl md:text-5xl font-bold text-center mb-12`}>
                        <span className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600">
                            Focus sur : How To <span className="font-extrabold">Blockchain</span>
                        </span>
                    </h1>

                    <div className={`${inter.className} space-y-8 text-lg text-neutral-400 leading-relaxed`}>
                        <div className="bg-neutral-900/50 p-6 rounded-xl border border-neutral-800">
                            <h2 className="text-2xl font-bold text-neutral-200 mb-4">Notre Mission</h2>
                            <p>
                                How To Blockchain est une plateforme éducative interactive conçue pour vous
                                permettre de découvrir la blockchain et le Web3 de manière pratique et sécurisée.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <h3 className="text-xl font-semibold text-neutral-300">Fonctionnalités Principales</h3>
                            <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-2 lg:gap-4">
                                <GridItem
                                    area="md:[grid-area:1/1/2/7]"
                                    icon={<Book className="h-4 w-4 text-neutral-400" />}
                                    title="Les Fondamentaux"
                                    description="Découvrez les concepts clés de la blockchain : décentralisation, consensus, smart contracts et bien plus encore."
                                />
                                <GridItem
                                    area="md:[grid-area:1/7/2/13]"
                                    icon={<GraduationCap className="h-4 w-4 text-neutral-400" />}
                                    title="Créez votre Wallet"
                                    description="Apprenez à créer et sécuriser votre premier portefeuille crypto, votre clé d'entrée dans le Web3."
                                />
                                <GridItem
                                    area="md:[grid-area:2/1/3/7]"
                                    icon={<Code className="h-4 w-4 text-neutral-400" />}
                                    title="Votre première DApp"
                                    description="Explorez notre bac à sable numérique pour comprendre et utiliser concrètement la technologie blockchain."
                                />
                                <GridItem
                                    area="md:[grid-area:2/7/3/13]"
                                    icon={<Shield className="h-4 w-4 text-neutral-400" />}
                                    title="Cryptos & NFTs"
                                    description="Obtenez vos premières cryptomonnaies et NFTs de test pour expérimenter sans risque dans notre environnement sécurisé."
                                />
                            </ul>
                        </div>

                        <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-6 rounded-xl border border-blue-500/20">
                            <h3 className="text-xl font-semibold text-neutral-200 mb-4">Pourquoi How To Blockchain ?</h3>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-2">
                                    <span className="text-blue-400">•</span>
                                    Apprentissage pratique et interactif
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-blue-400">•</span>
                                    Environnement de test sécurisé
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-blue-400">•</span>
                                    Guides étape par étape
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-blue-400">•</span>
                                    Zéro risque financier
                                </li>
                            </ul>
                        </div>

                        <div className="flex justify-center pt-8">
                            <a
                                href="https://how-to-blockchain-6aov.vercel.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-6 text-lg hover:opacity-90 transition-opacity flex items-center gap-2">
                                    <span className={quicksand.className}>
                                        Accéder à la plateforme
                                    </span>
                                    <ExternalLink className="h-5 w-5" />
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
