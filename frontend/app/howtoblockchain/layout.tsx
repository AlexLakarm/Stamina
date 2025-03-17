import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How To Blockchain',
  description: 'Guides et tutoriels blockchain par Stamina',
  openGraph: {
    type: 'website',
    url: 'https://staminadev.com/howtoblockchain',
    title: 'How To Blockchain | Stamina',
    description: 'Guides et tutoriels blockchain par Stamina',
  }
};

export default function HowToBlockchainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 