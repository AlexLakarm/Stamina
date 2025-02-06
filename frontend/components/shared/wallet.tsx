/* eslint-disable react/no-unescaped-entities */
"use client"

import { FC } from 'react';
import { Quicksand, Inter } from "next/font/google";
import { CornerRightDown, Rocket, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const quicksand = Quicksand({ 
  subsets: ["latin"],
  weight: ['500', '700']
});

const inter = Inter({ 
  subsets: ["latin"],
  weight: ['400']
});

type WalletProps = Record<string, never>;

const Wallet: FC<WalletProps> = () => {
    const router = useRouter();

    const handleNavigation = (path: string) => {
        // Sauvegarde la position actuelle
        localStorage.setItem('scrollPosition', window.scrollY.toString());
        router.push(path);
    };

    return (
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto px-8 md:px-12 -mt-4 space-y-8">
            {/* Titre */}
            <h2 className={`${quicksand.className} text-2xl md:text-3xl font-bold`}>
                Votre premier <span className="font-medium text-foreground">wallet</span>
            </h2>
            
            {/* Explication initiale */}
            <p className={`${inter.className} text-lg text-muted-foreground leading-tight text-justify tracking-tighter`}>
                Pour interragir avec la <span className="font-medium text-foreground">blockchain</span> vous aurez besoin d'un 
                <span className="font-medium text-foreground"> portefeuille numérique</span> permettant de stocker vos 
                <span className="font-medium text-foreground"> crypto actifs</span>.
            </p>

            {/* Nouvelle explication détaillée */}
            <p className={`${inter.className} text-lg text-muted-foreground leading-tight text-justify tracking-tighter`}>
                Un <span className="font-medium text-foreground">wallet</span>, ou portefeuille numérique, fonctionne comme une 
                <span className="font-medium text-foreground"> clé personnelle</span> pour accéder à la blockchain. 
                Imaginez-le comme un <span className="font-medium text-foreground">coffre-fort digital</span> : il ne stocke pas directement vos cryptomonnaies 
                (celles-ci existent sur la blockchain), mais il conserve les <span className="font-medium text-foreground">clés secrètes</span> qui prouvent que vous en êtes le propriétaire. 
                C'est un peu comme avoir une carte bancaire qui vous permet d'accéder à votre argent, 
                sauf qu'ici, vous avez le <span className="font-medium text-foreground">contrôle total</span> de vos actifs, sans intermédiaire.
            </p>

            <p className={`${inter.className} text-lg text-muted-foreground leading-tight text-justify tracking-tighter`}>
                Pour approfondir vos connaissances sur ce sujet et apprendre à utiliser votre wallet, c'est ici :
            </p>
            <Link href="/wallet" onClick={() => handleNavigation('/wallet')}>
                <Button variant="default" className="font-bold">
                    <span className={quicksand.className}>
                        Votre wallet
                    </span>
                </Button>
            </Link>

            {/* Recommandation Rabby Wallet */}
            <div className="flex flex-col items-center space-y-3">
                <p className={`${inter.className} text-lg text-muted-foreground`}>
                    Pour le début de votre aventure sur <span className="font-medium text-foreground">Ethereum</span> nous vous conseillons{' '}
                    <span className="font-bold bg-gradient-to-r from-blue-500 to-blue-900 text-transparent bg-clip-text">
                        Rabby Wallet
                    </span>
                </p>
                <CornerRightDown className="h-6 w-6 text-muted-foreground" />
                <Button 
                    variant="outline" 
                    className="flex items-center gap-2"
                    onClick={() => window.open('https://rabby.io/', '_blank')}
                >
                    Télécharger Rabby Wallet
                    <ExternalLink className="h-4 w-4" />
                </Button>
            </div>

            {/* Recommandation Solana : Phantom Wallet */}
            <div className="flex flex-col items-center space-y-3">
                <p className={`${inter.className} text-lg text-muted-foreground`}>
                    Si vous savez déjà que vous allez utiliser <span className="font-medium text-foreground">Solana</span> nous vous conseillons{' '}
                    <span className="font-bold bg-gradient-to-r from-violet-900 to-violet-500 text-transparent bg-clip-text">
                        Phantom
                    </span>
                </p>
                <CornerRightDown className="h-6 w-6 text-muted-foreground" />
                <Button 
                    variant="outline" 
                    className="flex items-center gap-2"
                    onClick={() => window.open('https://phantom.app/', '_blank')}
                >
                    Télécharger Phantom
                    <ExternalLink className="h-4 w-4" />
                </Button>
            </div>

            {/* Note importante */}
            <div className="space-y-4">
                <p className={`${inter.className} mb-8 text-lg text-muted-foreground leading-tight text-justify tracking-tighter`}>
                    Notez bien votre <span className="font-medium text-foreground">phrase secrète</span> <span className="underline underline-offset-4">sur papier</span> et 
                    revenez sur How To Blockchain pour continuer votre aventure <Rocket className="inline h-5 w-5 ml-1" />
                </p>
            </div>
        </div>
    );
};

export default Wallet; 