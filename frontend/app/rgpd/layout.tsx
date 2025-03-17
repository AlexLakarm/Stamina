import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'RGPD - Politique de Confidentialité',
  description: 'Politique de confidentialité et RGPD de Stamina',
  openGraph: {
    type: 'website',
    url: 'https://staminadev.com/rgpd',
    title: 'RGPD - Politique de Confidentialité | Stamina',
    description: 'Politique de confidentialité et RGPD de Stamina',
  }
};

export default function RGPDLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 