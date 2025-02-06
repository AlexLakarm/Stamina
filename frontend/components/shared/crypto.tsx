/* eslint-disable react/no-unescaped-entities */
"use client"

import { FC } from 'react';
import { Quicksand, Inter } from "next/font/google";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from 'next/navigation';

const quicksand = Quicksand({ 
  subsets: ["latin"],
  weight: ['500', '700']
});

const inter = Inter({ 
  subsets: ["latin"],
  weight: ['400']
});

const Crypto: FC = () => {
    const router = useRouter();

    const handleNavigation = (path: string) => {
        localStorage.setItem('scrollPosition', window.scrollY.toString());
        router.push(path);
    };

    return (
        <>
            {/* Séparateur */}
            <div className="w-full h-[1px] bg-gray-200 my-8 max-w-2xl mx-auto"></div>

            <div className="flex flex-col items-center text-center max-w-2xl mx-auto px-8 md:px-12 space-y-8">
                {/* Titre */}
                <h2 className={`${quicksand.className} mt-8 text-2xl md:text-3xl font-bold`}>
                    Obtenez vos premières <span className="font-medium text-foreground">cryptos</span>
                </h2>
                
                {/* Explication */}
                <p className={`${inter.className} text-lg text-muted-foreground leading-tight text-justify tracking-tighter`}>
                    Pour vous permettre de découvrir votre wallet fraîchement créé à l'usage, 
                    nous allons vous permettre d'interagir avec un <span className="font-medium text-foreground">réseau de test</span>. <br /><br />
                    Obtenez de l'<span className="font-medium text-foreground">ETH de test</span> pour payer les <span className="font-medium text-foreground">frais (gas)</span>, 
                    achetez, vendez le tout sans risques... 
                    Nous avons prévu pour vous un <span className="font-medium text-foreground">bac à sable numérique</span> en créant une 
                    <span className="font-medium text-foreground"> application décentralisée (Dapp)</span> qui vous permettra de vous initier à la blockchain :
                </p>

                {/* Bouton */}
                <Link href="/freecrypto" onClick={() => handleNavigation('/freecrypto')}>
                    <Button variant="default" className="font-bold mb-8">
                        <span className={quicksand.className}>
                            Vos premières cryptos
                        </span>
                    </Button>
                </Link>
            </div>
        </>
    );
};

export default Crypto; 