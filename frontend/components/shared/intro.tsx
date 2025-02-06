/* eslint-disable react/no-unescaped-entities */
"use client"

import { FC } from 'react';
import { Quicksand, Inter } from "next/font/google";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const quicksand = Quicksand({ 
  subsets: ["latin"],
  weight: ['500', '700']
});

const inter = Inter({ 
  subsets: ["latin"],
  weight: ['400']
});

type IntroProps = Record<string, never>;

const Intro: FC<IntroProps> = () => {
    return (
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto px-8 md:px-12 pt-8 pb-2">
            <h2 className={`${quicksand.className} text-3xl md:text-4xl font-bold leading-tight mb-8`}>
                Votre guide <span className="text-foreground">step by step</span> pour découvrir la 
                <span className="text-foreground"> blockchain</span> et ses applications.
            </h2>
            
            <p className={`${inter.className} text-lg md:text-xl text-muted-foreground leading-tight text-justify tracking-tighter mb-8`}>
                De la création de votre premier <span className="font-medium text-foreground">portefeuille numérique</span> à 
                l'acquisition de vos premiers <span className="font-medium text-foreground">actifs numériques</span>, 
                nous vous accompagnons pas à pas dans votre découverte de l'univers blockchain. 
                Apprenez à naviguer dans cet <span className="font-medium text-foreground">écosystème</span> en toute confiance 
                avec nos guides détaillés et nos conseils d'experts.
            </p>

            <p className={`${inter.className} text-lg md:text-xl text-muted-foreground leading-tight text-justify tracking-tighter mb-4`}>
                Pour en savoir plus sur les <span className="font-medium text-foreground">concepts de base</span> de la blockchain, c'est ici :
            </p>

            <Link href="/concepts" className="mb-10">
                <Button variant="default" className="font-bold">
                    <span className={quicksand.className}>
                        Concepts
                    </span>
                </Button>
            </Link>

            <div className="w-24 h-[1px] bg-gray-300 mb-4"></div>
            <span className={`${quicksand.className} text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text mb-2`}>
                Les étapes clés
            </span>
            <ChevronDown 
                className="h-6 w-6 text-blue-500 animate-bounce mt-1 drop-shadow-[0_0_3px_rgba(255,255,255,0.5)] filter brightness-110" 
            />
        </div>
    );
};

export default Intro; 