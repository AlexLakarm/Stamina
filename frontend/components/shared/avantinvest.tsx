/* eslint-disable react/no-unescaped-entities */
"use client"

import { FC } from 'react';
import { Quicksand, Inter } from "next/font/google";
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

type AvantInvestProps = Record<string, never>;

const AvantInvest: FC<AvantInvestProps> = () => {
    return (
        <>
            {/* Séparateur */}
            <div className="w-full h-[1px] bg-gray-200 my-8 max-w-2xl mx-auto"></div>

            <div className="flex flex-col items-center text-center max-w-2xl mx-auto px-8 md:px-12 space-y-8">
                {/* Titre */}
                <h2 className={`${quicksand.className} mt-8 text-2xl md:text-3xl font-bold`}>
                    Avant d'investir 
                </h2>
                
                {/* Explication */}
                <p className={`${inter.className} text-lg text-muted-foreground leading-tight text-justify tracking-tighter`}>
                    Ne partez pas tout de suite ! Le monde de la <span className="font-medium text-foreground">blockchain</span> et 
                    de la <span className="font-medium text-foreground">cryptomonnaie</span> est l'un des moins régulés du monde. <br /><br />
                    Vous entrez ainsi dans un monde où tout est possible mais aussi et surtout où tout est permis. <br /><br />
                    Vous pouvez donc <span className="font-medium text-foreground">tout perdre</span> à tout moment et certains individus 
                    ne travaillent qu'à ça. <br /><br />
                    Nous allons ainsi vous prodiguez quelques derniers <span className="font-medium text-foreground">conseils</span> avant 
                    de vous lancer dans l'aventure. Vous pourrez également <span className="font-medium text-foreground">tester vos connaissances</span> pour 
                    vous assurer que vous êtes prêt à vous lancer.
                </p>

                {/* Bouton */}
                <Link href="/notionsavancees">
                    <Button variant="default" className="font-bold mb-8">
                        <span className={quicksand.className}>
                            Notions avancées
                        </span>
                    </Button>
                </Link>
            </div>
        </>
    );
};

export default AvantInvest; 