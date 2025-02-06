"use client"

import { ArrowLeft } from "lucide-react";
import { Drill } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Quicksand } from "next/font/google";
import { Inter } from "next/font/google";

const quicksand = Quicksand({ 
    subsets: ["latin"],
    weight: ['700']
  });
  
  const inter = Inter({ 
    subsets: ["latin"],
    weight: ['400']
  });

const NFTPage = () => {
    return (
        <div className="container mx-auto p-4">
            <div className="flex justify-between items-center mb-6">
                <Link href="/howtodapp">
                    <Button variant="outline" className="flex items-center gap-2 group">
                        <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                        Retour
                    </Button>
                </Link>
            </div>
            <h1 className={`${quicksand.className} text-3xl md:text-4xl font-bold text-center mb-8`}>
                Votre premier NFT
            </h1>
            <p className={`${inter.className} text-lg md:text-xl text-muted-foreground leading-tight text-justify tracking-tighter mb-8`}>
                <Drill /> Coming soon
            </p>
        </div>
    )
}

export default NFTPage;