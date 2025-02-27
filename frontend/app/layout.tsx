import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CustomRainbowKitProvider from "@/components/shared/customRainbowKit";
import Footer from "@/components/shared/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import Script from 'next/script'

const inter = Inter({ subsets: ["latin"] });

const GA_MEASUREMENT_ID = 'G-SYRS9R9QRG';
const GTM_ID = 'GTM-T2Z3K44V';

export const metadata: Metadata = {
  title: "Stamina - Dev & Consulting",
  description: "Stamina est une entreprise de développement et de conseil en blockchain. Nous vous accompagnons dans la transition vers le Web3.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning className="h-full">
      <head>
        <Script
          id="Cookiebot"
          src="https://consent.cookiebot.com/uc.js"
          data-cbid="55657b3e-2d5a-4e19-83b4-53eed0cbd743"
          data-blockingmode="auto"
          strategy="beforeInteractive"
          async={true}
        />
        
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="cookie-dependent-scripts" strategy="afterInteractive">
          {`
            window.addEventListener('CookiebotOnAccept', function (e) {
              if (Cookiebot.consent.statistics) {
                // Google Analytics
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_MEASUREMENT_ID}');

                // Google Tag Manager
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','${GTM_ID}');
              }
            });
          `}
        </Script>
      </head>
      <body className={`${inter.className} min-h-screen flex flex-col`}>
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
          defaultTheme="system"
          enableSystem
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
      </body>
    </html>
  );
}