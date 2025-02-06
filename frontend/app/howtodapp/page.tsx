/* eslint-disable react/no-unescaped-entities */
'use client';

import { useAccount } from 'wagmi';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BadgeCent } from 'lucide-react';
import { Flower2 } from 'lucide-react';
import Link from "next/link";
import Image from "next/image";
import { Quicksand } from "next/font/google";
import backgroundImage from "@/public/images/background.jpg";

const quicksand = Quicksand({ 
  subsets: ["latin"],
  weight: ['700']
});

export default function Home() {
  const { address, isConnected } = useAccount();

  return (
    <main className="container mx-auto p-4">
      <Card className="max-w-md mx-auto mt-8 relative overflow-hidden min-h-[500px]">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={backgroundImage}
            alt="Vault background"
            fill
            priority
            className="object-cover object-center brightness-[0.9]"
            sizes="(max-width: 768px) 100vw, 400px"
            quality={100}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-black/50 to-black/90" />
        </div>

        <CardHeader className="relative z-10">
          <CardTitle className={`${quicksand.className} text-white text-3xl font-bold drop-shadow-lg tracking-wide text-center`}>
            Bienvenue sur votre première application décentralisée.
          </CardTitle>
        </CardHeader>
        <CardContent className="relative z-10 mt-auto">
          {isConnected ? (
            <div>
              <p className="text-sm text-gray-200 mb-8 drop-shadow text-center">
                Vous êtes connectés avec l'adresse suivante : {address?.slice(0, 6)}...{address?.slice(-4)}
              </p>
              <Link href="/howtodapp/crypto" className="block">
                <Button 
                  className="w-full flex items-center justify-center gap-2 group bg-black/40 hover:bg-black/60 text-white border-white/20 backdrop-blur-sm transition-all duration-300"
                >
                  <BadgeCent className="h-4 w-4 transition-transform duration-300 group-hover:scale-125" />
                  Vos premières cryptomonnaies
                </Button>
              </Link>
              <Link href="/howtodapp/nft" className="block">
                <Button 
                  className="w-full mt-4 flex items-center justify-center gap-2 group bg-black/40 hover:bg-black/60 text-white border-white/20 backdrop-blur-sm transition-all duration-300"
                >
                  <Flower2 className="h-4 w-4 transition-transform duration-300 group-hover:scale-125" />
                  Votre premier NFT
                </Button>
              </Link>
            </div>
          ) : (
            <p className="text-sm text-gray-200 drop-shadow text-center">
              Veuillez connecter votre Wallet pour accéder à la Dapp (&quot;Connect wallet&quot;)
            </p>
          )}
        </CardContent>
      </Card>
    </main>
  );
}