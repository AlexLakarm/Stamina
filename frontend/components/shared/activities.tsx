"use client";
import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import Link from "next/link";
import { cn } from "@/lib/utils";

const Card = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-white/5 backdrop-blur-sm border border-white/[0.15] group-hover:border-white/[0.25] relative z-20 transition-colors",
        className
      )}
    >
      {children}
    </div>
  );
};

export default function Activities() {
  return (
    <div className="relative min-h-[40rem] sm:min-h-[50rem] w-full rounded-md bg-neutral-950 flex flex-col items-center justify-center antialiased py-8 md:py-16 overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <BackgroundBeams className="w-full h-full bg-neutral-950">
          <></>
        </BackgroundBeams>
      </div>
      
      <div className="relative max-w-6xl mx-auto p-4 z-10">
        <h1 className="text-3xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold mb-8 md:mb-16">
          Nos Services
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-16 md:mb-32">
          {/* Carte Blockchain Development */}
          <Link href="/dev" className="h-full">
            <Card className="group cursor-pointer min-h-[320px]">
              <div className="p-8 flex flex-col h-full">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-neutral-200 mb-4">
                    Blockchain Development
                  </h2>
                  <p className="text-neutral-400 text-base md:text-lg">
                    Développement de solutions blockchain sur mesure, smart contracts, 
                    et applications décentralisées (dApps). Notre expertise technique 
                    vous accompagne dans votre transition vers Web3.
                  </p>
                </div>
                <div className="mt-auto pt-8">
                  <button className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:opacity-90 transition-opacity text-base md:text-lg">
                    En savoir plus
                  </button>
                </div>
              </div>
            </Card>
          </Link>

          {/* Carte Consulting */}
          <Link href="/consulting" className="h-full">
            <Card className="group cursor-pointer min-h-[320px]">
              <div className="p-8 flex flex-col h-full">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-neutral-200 mb-4">
                    Consulting
                  </h2>
                  <p className="text-neutral-400 text-base md:text-lg">
                    Conseil stratégique pour l&apos;intégration de la blockchain dans votre entreprise. 
                    Nous vous guidons dans la transformation digitale et l&apos;adoption des technologies 
                    blockchain.
                  </p>
                </div>
                <div className="mt-auto pt-8">
                  <button className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-green-500 to-teal-500 text-white hover:opacity-90 transition-opacity text-base md:text-lg">
                    Découvrir nos services
                  </button>
                </div>
              </div>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  );
}
