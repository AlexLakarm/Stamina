"use client";
import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Quicksand } from "next/font/google";
import Tilt from 'react-parallax-tilt';

const quicksand = Quicksand({ 
  subsets: ["latin"],
  weight: ['700']
});

const Card = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    setIsMobile(window.innerWidth <= 768);
    
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="relative h-full rounded-2xl">
      <Tilt
        className="h-full w-full"
        tiltMaxAngleX={5}
        tiltMaxAngleY={5}
        perspective={1000}
        transitionSpeed={1000}
        gyroscope={false}
        glareEnable={!isMobile}
        glareMaxOpacity={0.1}
        glareColor="#ffffff"
        glarePosition="all"
        glareBorderRadius="1rem"
        scale={1}
        style={{ 
          transformStyle: "preserve-3d",
          borderRadius: "1rem",
        }}
      >
        <div
          className={cn(
            "rounded-2xl h-full w-full p-4 overflow-hidden backdrop-blur-sm border relative transition-all duration-300",
            className
          )}
          style={{
            transform: "translateZ(20px)",
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
          }}
        >
          {children}
        </div>
      </Tilt>
    </div>
  );
};

export default function Activities() {
  return (
    <div className="relative min-h-[30rem] sm:min-h-[30rem] w-full rounded-md bg-neutral-950 flex flex-col items-center justify-center antialiased py-8 md:py-16 overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <BackgroundBeams className="w-full h-full bg-neutral-950">
          <></>
        </BackgroundBeams>
      </div>
      
      <div className="relative max-w-6xl mx-auto p-4 z-10">
        <h1 className={`${quicksand.className} text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-white via-neutral-200 to-white drop-shadow-[0_0_30px_rgba(255,255,255,0.2)] text-center font-bold mb-8 md:mb-16`}>
          Nos Services
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Carte Blockchain Development */}
          <Link href="/dev" className="h-full">
            <Card className="h-full bg-indigo-500/25 border-indigo-400/50 shadow-[0_0_30px_rgba(99,102,241,0.2)]">
              <div className="p-4 md:p-6 flex flex-col h-full">
                <div>
                  <h2 className="text-3xl md:text-3xl font-bold text-neutral-200 mb-4">
                    Développement Blockchain
                  </h2>
                  <p className="text-neutral-300 text-lg md:text-lg">
                    Développement de solutions blockchain sur mesure, smart contracts
                    et applications décentralisées. Notre expertise technique 
                    vous accompagne dans vos projets sur evm et bientôt sur Solana.
                  </p>
                </div>
                <div className="mt-auto pt-6">
                  <button className="w-full px-6 py-3 rounded-lg bg-indigo-500/25 hover:bg-indigo-500/35 text-white border border-indigo-600/50 hover:border-indigo-600/70 transition-all duration-300 text-lg shadow-[0_0_20px_rgba(102,102,255,0.4)]">
                    En savoir plus
                  </button>
                </div>
              </div>
            </Card>
          </Link>

          {/* Carte Consulting */}
          <Link href="/consulting" className="h-full">
            <Card className="h-full bg-purple-500/25 border-purple-400/50 shadow-[0_0_30px_rgba(168,85,247,0.2)]">
              <div className="p-4 md:p-6 flex flex-col h-full">
                <div>
                  <h2 className="text-3xl md:text-3xl font-bold text-neutral-200 mb-4">
                    Consulting &amp; Formation
                  </h2>
                  <p className="text-neutral-300 text-lg md:text-lg">
                    Formation pratique et conseil stratégique pour comprendre la blockchain. 
                    Workshops interactifs, accompagnement réglementaire et veille technologique 
                    adaptés à votre secteur d&apos;activité.
                  </p>
                </div>
                <div className="mt-auto pt-6">
                  <button className="w-full px-6 py-3 rounded-lg bg-purple-500/25 hover:bg-purple-500/35 text-white border border-purple-600/50 hover:border-purple-600/70 transition-all duration-300 text-lg shadow-[0_0_20px_rgba(147,51,234,0.4)]">
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
