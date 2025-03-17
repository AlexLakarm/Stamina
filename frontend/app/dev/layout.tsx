import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Développement Blockchain',
  description: 'Services de développement blockchain et crypto monnaies, smart contracts et DApps par Stamina',
  openGraph: {
    type: 'website',
    url: 'https://staminadev.com/dev',
    title: 'Développement Blockchain | Ethereum & EVM (Solidity), Solana',
    description: 'Services de développement blockchain et crypto monnaies, smart contracts et DApps par Stamina',
  }
};

export default function DevLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 