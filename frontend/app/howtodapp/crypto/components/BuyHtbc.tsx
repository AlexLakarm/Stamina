"use client"

import { useState, useEffect } from 'react';
import { useAccount, useReadContract, useWriteContract, useWaitForTransactionReceipt } from 'wagmi';
import { parseEther, formatEther } from 'viem';
import { contractABI, contractAddress } from '@/app/config/contract';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2 } from "lucide-react";
import { useTransactionToast } from "@/hooks/use-transaction-toast";

export function BuyHtbc() {
    const [htbcAmount, setHtbcAmount] = useState<string>('');   
    const [ethAmount, setEthAmount] = useState<string>('');
    const { address } = useAccount();
    const { writeContract, data: hash, error } = useWriteContract();

      // Hook pour les toasts de transaction
  useTransactionToast(hash, error);

    // Lecture des données du contrat
    const { data: price } = useReadContract({
        address: contractAddress,
        abi: contractABI,
        functionName: 'getHtbcPrice',
    });

    const { data: currentSupply, refetch: refetchSupply } = useReadContract({
        address: contractAddress,
        abi: contractABI,
        functionName: 'getCurrentSupply',
    });

    const { data: maxSupply } = useReadContract({
        address: contractAddress,
        abi: contractABI,
        functionName: 'MAX_SUPPLY',
    });

    // Formatage des supplies à 2 décimales
    const formattedCurrentSupply = currentSupply ? 
        Number(formatEther(currentSupply)).toFixed(2) : 
        '0.00';
    const formattedMaxSupply = maxSupply ? 
        Number(formatEther(maxSupply)).toFixed(2) : 
        '0.00';

    // Attente de la transaction
    const { isLoading: isBuyLoading, isSuccess } = useWaitForTransactionReceipt({
        hash,
    });

    // Mise à jour du montant ETH quand l'utilisateur entre des HTBC
    useEffect(() => {
        if (htbcAmount && price) {
            const htbcValue = parseFloat(htbcAmount);
            const priceInEth = parseFloat(formatEther(price));
            setEthAmount((htbcValue * priceInEth).toFixed(18));
        } else {
            setEthAmount('');
        }
    }, [htbcAmount, price]);

    // Mise à jour après transaction réussie
    useEffect(() => {
        if (isSuccess) {
            refetchSupply();
            // Appel de la fonction de mise à jour du solde du parent
            window.dispatchEvent(new Event('htbcUpdated'));
        }
    }, [isSuccess, refetchSupply]);

    // Handler pour l'achat
    const handleBuy = async () => {
        if (!ethAmount) return;
        try {
            await writeContract({
                address: contractAddress,
                abi: contractABI,
                functionName: 'buyTokens',
                value: parseEther(ethAmount)
            });
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="flex flex-col gap-6 p-6 rounded-lg border">
            <div className="space-y-2">
                <h3 className="text-lg font-semibold">Acheter des HTBC</h3>
                <div className="text-sm text-muted-foreground space-y-1">
                    <p>Prix: {price ? `${formatEther(price)} ETH par HTBC` : 'Chargement...'}</p>
                    <p>Supply: {`${formattedCurrentSupply} / ${formattedMaxSupply} HTBC`}</p>
                </div>
            </div>

            <div className="space-y-4">
                <div className="space-y-2">
                    <label className="text-sm font-medium">Nombre de HTBC souhaité</label>
                    <Input
                        type="number"
                        placeholder="Ex: 10"
                        value={htbcAmount}
                        onChange={(e) => setHtbcAmount(e.target.value)}
                        min="0"
                        step="0.1"
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium">Montant ETH à envoyer</label>
                    <Input
                        type="text"
                        value={ethAmount}
                        readOnly
                        className="bg-muted"
                    />
                </div>

                <Button 
                    onClick={handleBuy}
                    disabled={!address || !ethAmount || isBuyLoading}
                    className="w-full"
                >
                    {isBuyLoading ? (
                        <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Transaction en cours...
                        </>
                    ) : (
                        'Acheter HTBC'
                    )}
                </Button>
            </div>
        </div>
    );
} 