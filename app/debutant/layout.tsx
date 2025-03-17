import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Débuter en Blockchain - Guide pour débutants',
  description: 'Guide complet pour comprendre la blockchain et les cryptomonnaies',
  openGraph: {
    type: 'website',
    url: 'https://howtoblockchain.staminadev.com/debutant',
    title: 'Débuter en Blockchain - Guide pour débutants',
    description: 'Guide complet pour comprendre la blockchain et les cryptomonnaies',
  }
};

export default function DebutantLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 