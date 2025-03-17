import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CustomRainbowKitProvider from "@/components/shared/customRainbowKit";
import Footer from "@/components/shared/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import Script from 'next/script';
import { GTM_ID } from '@/utils/gtm';
import { PageViewTracker } from '@/components/analytics/page-view-tracker';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://staminadev.com'),
  title: {
    default: "Stamina Dev | Consultant Blockchain, Développeur Web3  & Formation",
    template: '%s | Stamina'
  },
  description: "Expert blockchain, Stamina vous accompagne dans vos projets Web3 avec des solutions sur mesure en développement et conseil.",
  openGraph: {
    type: 'website',
    url: 'https://staminadev.com',
    title: 'Stamina Dev | Consultant Blockchain, Développeur Web3  & Formation',
    description: 'Expert blockchain, Stamina vous accompagne dans vos projets Web3',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning className="h-full dark">
      <head>
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              window.dataLayer.push({
                'gtm.start': new Date().getTime(),
                event: 'gtm.js'
              });
            `
          }}
        />
        <Script
          id="gtm-load"
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`}
        />
      </head>
      <body className={`${inter.className} min-h-screen flex flex-col dark`}>
        <noscript>
          <iframe 
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <CustomRainbowKitProvider>
            <div className="flex flex-col min-h-screen">
              <div className="flex-grow">
                {children}
              </div>
              <Footer />
            </div>
          </CustomRainbowKitProvider>
        </ThemeProvider>
        <Toaster />
        <PageViewTracker />
      </body>
    </html>
  );
}