"use client"

import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Quicksand } from "next/font/google";
import { BuyHtbc } from './components/BuyHtbc';
import { useAccount, useReadContract } from 'wagmi';
import { contractABI, contractAddress } from '@/app/config/contract';
import { formatEther } from 'viem';
import { useEffect } from 'react';

const quicksand = Quicksand({ 
    subsets: ["latin"],
    weight: ['700']
});

const CryptoPage = () => {
    const { address } = useAccount();

    const { data: balance, refetch: refetchBalance } = useReadContract({
        address: contractAddress as `0x${string}`,
        abi: contractABI,
        functionName: 'getUserHtbcBalance',
        args: [address ?? '0x0']
    });

    const formattedBalance = balance ? 
        Number(formatEther(balance)).toFixed(2) : 
        '0.00';

    useEffect(() => {
        const handleHtbcUpdated = () => {
            refetchBalance();
        };

        window.addEventListener('htbcUpdated', handleHtbcUpdated);
        return () => window.removeEventListener('htbcUpdated', handleHtbcUpdated);
    }, [refetchBalance]);

    return (
        <div className="container mx-auto p-4">
            <div className="flex gap-4 items-center mb-6">
                <Link href="/howtodapp">
                    <Button variant="outline" className="flex items-center gap-2 group">
                        <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                        Retour
                    </Button>
                </Link>
                <Link href="/freecrypto">
                    <Button variant="default" className="flex items-center gap-2">
                        Obtenir des ETH de test
                    </Button>
                </Link>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
                <h1 className={`${quicksand.className} text-3xl md:text-4xl font-bold text-center`}>
                    Vos premières cryptomonnaies
                </h1>
                
                <div className="flex flex-col items-end">
                    <p className="text-sm text-muted-foreground mb-1">
                        Contract HTBC: {contractAddress}
                    </p>
                    <div className="text-right">
                        <p className="text-sm font-medium">Votre solde actuel de HTBC:</p>
                        <p className="text-xl font-bold">
                            <span className="text-emerald-500 dark:text-emerald-400">
                                {formattedBalance}
                            </span>
                            {' '}HTBC
                        </p>
                    </div>
                </div>
            </div>
            <BuyHtbc />
        </div>
    );
};

export default CryptoPage;