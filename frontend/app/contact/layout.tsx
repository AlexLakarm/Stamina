import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contactez Stamina pour vos besoins en développement web3 (blockchain, crypto monnaies, smart contracts, DApps)',
  openGraph: {
    type: 'website',
    url: 'https://staminadev.com/contact',
    title: 'Contact | Stamina',
    description: 'Contactez Stamina pour vos projets blockchain',
  }
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 