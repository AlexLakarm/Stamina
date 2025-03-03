import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CustomRainbowKitProvider from "@/components/shared/customRainbowKit";
import Footer from "@/components/shared/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import Script from 'next/script'

const inter = Inter({ subsets: ["latin"] });

const GTM_ID = 'GTM-T2Z3K44V';

export const metadata: Metadata = {
  title: "Stamina - Dev & Consulting",
  description: "Expert blockchain, Stamina vous accompagne dans vos projets Web3 avec des solutions sur mesure en développement et conseil.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning className="h-full">
      <head>
        {/* Google Tag Manager */}
        <Script
          id="gtm"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');`
          }}
        />
      </head>
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe 
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
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