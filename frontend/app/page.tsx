'use client';

import { useEffect } from 'react';
import HeaderMain from "@/components/shared/headermain";
import Slogan from "@/components/shared/slogan";
import Activities from "@/components/shared/activities";
import Actus from "@/components/shared/actus";

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
    <main className="bg-neutral-950 min-h-screen">
      <div className="container mx-auto px-2 sm:px-4">
        <HeaderMain />
        <div className="space-y-2">
          <Slogan />
          <Activities />
          <Actus />
        </div>
      </div>
    </main>
  );
}