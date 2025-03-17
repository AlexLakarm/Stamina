import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Actualités & Analyses',
  description: 'Actualités et analyses blockchain par Stamina',
  openGraph: {
    type: 'website',
    url: 'https://staminadev.com/actualites',
    title: 'Actualités & Analyses | Stamina',
    description: 'Actualités et analyses blockchain par Stamina',
  }
};

export default function ActualitesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 