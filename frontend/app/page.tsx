'use client';

import { useEffect } from 'react';
import HeaderMain from "@/components/shared/headermain";
import Intro from "@/components/shared/intro";
import Wallet from "@/components/shared/wallet";
import Crypto from "@/components/shared/crypto";
import NFT from "@/components/shared/nft";
import AvantInvest from "@/components/shared/avantinvest";

export default function Home() {
  useEffect(() => {
    // Restaure la position de défilement au chargement de la page
    const savedPosition = localStorage.getItem('scrollPosition');
    if (savedPosition) {
      window.scrollTo(0, parseInt(savedPosition));
      localStorage.removeItem('scrollPosition'); // Nettoie après utilisation
    }
  }, []);

  return (
    <main className="container mx-auto">
      <HeaderMain />
      <div className="space-y-2">
        <Intro />
        <Wallet />
        <Crypto />
        <NFT />
        <AvantInvest />
      </div>
    </main>
  );
}