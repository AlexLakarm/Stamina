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

type NFTProps = Record<string, never>;

const NFT: FC<NFTProps> = () => {
    return (
        <>
            {/* Séparateur */}
            <div className="w-full h-[1px] bg-gray-200 my-8 max-w-2xl mx-auto"></div>

            <div className="flex flex-col items-center text-center max-w-2xl mx-auto px-8 md:px-12 space-y-8">
                {/* Titre */}
                <h2 className={`${quicksand.className} mt-8 text-2xl md:text-3xl font-bold`}>
                    "Mintez" vos premiers <span className="font-medium text-foreground">NFTs</span>
                </h2>
                
                {/* Explication */}
                <p className={`${inter.className} text-lg text-muted-foreground leading-tight text-justify tracking-tighter`}>
                    Notre <span className="font-medium text-foreground">application décentralisée</span> "bac à sable" va plus loin 
                    puisque nous allons également vous permettre de <span className="font-medium text-foreground">"minter"</span> (ou générer) 
                    votre premier NFT <br /><br />
                    Vous recevrez ainsi dans votre <span className="font-medium text-foreground">wallet</span> un NFT unique et personnalisé.
                </p>

                {/* Bouton */}
                <Link href="/freenft">
                    <Button variant="default" className="font-bold mb-8">
                        <span className={quicksand.className}>
                            Votre premier NFT
                        </span>
                    </Button>
                </Link>
            </div>
        </>
    );
};

export default NFT; 