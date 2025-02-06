/* eslint-disable react/no-unescaped-entities */
"use client"

import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Quicksand, Inter } from "next/font/google";
import HeaderMain from "@/components/shared/headermain";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const quicksand = Quicksand({ 
    subsets: ["latin"],
    weight: ['700']
});

const inter = Inter({ 
    subsets: ["latin"],
    weight: ['400']
});

export default function FreeCryptoPage() {
    const router = useRouter();

    const handleNavigation = (path: string) => {
        // Sauvegarde la position actuelle
        localStorage.setItem('scrollPosition', window.scrollY.toString());
        router.push(path);
    };

    useEffect(() => {
        // Restaure la position de défilement au chargement de la page
        const savedPosition = localStorage.getItem('scrollPosition');
        if (savedPosition) {
            window.scrollTo(0, parseInt(savedPosition));
            localStorage.removeItem('scrollPosition');
        }
    }, []);

    return (
        <main className="container mx-auto">
            <HeaderMain />
            <div className="py-8 px-4">
                <div className="max-w-2xl mx-auto">
                    <Link href="/" onClick={() => handleNavigation('/')}>
                        <Button variant="outline" className="mb-8 flex items-center gap-2">
                            <ArrowLeft className="h-4 w-4" />
                            Retour
                        </Button>
                    </Link>

                    <h1 className={`${quicksand.className} text-3xl md:text-4xl font-bold text-center mb-8`}>
                        Vos premières cryptos gratuites
                    </h1>

                    <div className={`${inter.className} space-y-6 text-lg text-muted-foreground leading-relaxed`}>
                        <p>
                            Nous allons vous permettre d'acheter une cryptomonnaie que nous avons créée spécialement pour vous : 
                            le <span className="font-medium text-foreground">HTBC (How To Blockchain Crypto)</span> sur le réseau de test 
                            Ethereum Holesky.
                        </p>

                        <div className="bg-muted p-4 rounded-lg">
                            <p className="font-medium text-foreground mb-2">Important :</p>
                            <p>
                                Aucun "vrai" argent ne sera dépensé car nous utilisons un réseau de test. 
                                En revanche, vous aurez besoin d'ETH de test que vous pouvez obtenir gratuitement.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <p className="font-medium text-foreground">Pour obtenir vos ETH de test :</p>
                            <ol className="list-decimal pl-6 space-y-4">
                                <li>
                                    Récupérez l'adresse de votre wallet Rabby (visible en haut de l'extension avec une 
                                    icône "copier", format : 0x...)
                                </li>
                                <li>
                                    Rendez-vous sur le{' '}
                                    <a 
                                        href="https://cloud.google.com/application/web3/faucet/ethereum/holesky"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-500 hover:underline"
                                    >
                                        faucet Holesky
                                    </a>
                                    {' '}pour obtenir des ETH de test
                                </li>
                                <li>
                                    Pour vérifier la réception :
                                    <ul className="list-disc pl-6 mt-2 space-y-2">
                                        <li>Ouvrez l'extension Rabby</li>
                                        <li>Cliquez sur "custom network"</li>
                                        <li>Recherchez et sélectionnez "holesky"</li>
                                        <li>Retournez à l'accueil de l'extension</li>
                                        <li>Sous "0$", cliquez sur "no assets" puis "custom network"</li>
                                        <li>Vous devriez voir une ligne "ETH" affichant "1"</li>
                                    </ul>
                                </li>
                            </ol>
                        </div>

                        <p className="text-sm italic">
                            Note : Un tutoriel plus détaillé avec captures d'écran sera bientôt disponible.
                        </p>

                        <div className="bg-green-500/10 p-4 rounded-lg">
                            <p className="text-green-600 dark:text-green-400">
                                Une fois toutes ces étapes franchies, vous êtes fin prêt pour acheter vos premières cryptos !
                            </p>
                        </div>

                        <div className="flex justify-center pt-4">
                            <Link href="/howtodapp" onClick={() => handleNavigation('/howtodapp')}>
                                <Button className="font-bold">
                                    <span className={quicksand.className}>
                                        Commencer l'aventure
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
