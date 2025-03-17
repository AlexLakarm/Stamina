import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mentions Légales',
  description: 'Mentions légales de Stamina',
  openGraph: {
    type: 'website',
    url: 'https://staminadev.com/mentions-legales',
    title: 'Mentions Légales | Stamina',
    description: 'Mentions légales de Stamina',
  }
};

export default function MentionsLegalesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 