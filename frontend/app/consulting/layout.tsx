import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Consultant Blockchain, formation et séminaires',
  description: 'Services de consulting blockchain (web3 et crypto monnaies), formation et séminaires',
  openGraph: {
    type: 'website',
    url: 'https://staminadev.com/consulting',
    title: 'Consultant Blockchain, formation et séminaires',
    description: 'Services de consulting blockchain (web3 et crypto monnaies), formation et séminaires',
  }
};

export default function ConsultingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 