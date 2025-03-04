"use client";

import { Vortex } from "@/components/ui/vortex"
import Link from "next/link";
import { Mail, Linkedin } from "lucide-react";
import { Roboto } from "next/font/google";

const roboto = Roboto({ 
  subsets: ["latin"],
  weight: ['300', '700']
});

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`${roboto.className} bg-neutral-950 w-full border-t border-neutral-800`}>
      <div className="w-full mx-auto rounded-md h-[30rem] overflow-hidden">
        <Vortex
          backgroundColor="black"
          className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
          slowdownFactor={0}
          rangeSpeed={0}
          baseSpeed={0}
        >
          {/* Titre et tagline - masqués en mobile */}
          <div className="hidden md:block">
            <h2 className="text-2xl md:text-6xl font-bold text-center text-white">
              <span className="font-thin">Stamina</span>{" "}
              <span className="font-bold">Dev</span>
            </h2>
            <p className="text-white mb-10 text-sm md:text-2xl max-w-xl mt-6 text-center">
              Nous donnons vie à vos projets blockchain
            </p>
          </div>

          <div className="max-w-7xl mx-auto px-4">
            {/* Grille 2 colonnes en mobile, 3 en desktop */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-12">
              {/* Navigation et liens légaux */}
              <div className="col-span-1">
                <h4 className="text-neutral-200 font-bold mb-4">Navigation</h4>
                <ul className="space-y-2">
                  <li>
                    <Link href="/dev" className="text-neutral-400 hover:text-neutral-200 text-sm">
                      Développement Blockchain
                    </Link>
                  </li>
                  <li>
                    <Link href="/consulting" className="text-neutral-400 hover:text-neutral-200 text-sm">
                      Consulting
                    </Link>
                  </li>
                  <li>
                    <Link href="/actus" className="text-neutral-400 hover:text-neutral-200 text-sm">
                      Actualités
                    </Link>
                  </li>
                  {/* Liens légaux en mobile */}
                  <li className="block md:hidden pt-4">
                    <Link href="/mentions-legales" className="text-neutral-400 hover:text-neutral-200 text-sm">
                      Mentions légales
                    </Link>
                  </li>
                  <li className="block md:hidden">
                    <Link href="/rgpd" className="text-neutral-400 hover:text-neutral-200 text-sm">
                      RGPD
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Contact */}
              <div className="col-span-1">
                <h4 className="text-neutral-200 font-bold mb-4">Contact</h4>
                <Link 
                  href="/contact"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-neutral-900 text-neutral-200 hover:bg-neutral-800 transition-colors text-sm"
                >
                  <Mail className="h-4 w-4" />
                  Nous contacter
                </Link>
                <div className="mt-4 flex items-center gap-4">
                  <a href="https://www.linkedin.com/in/alexandre-kermarec-22b3a731" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-neutral-200">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </div>

              {/* Liens légaux - version desktop uniquement */}
              <div className="hidden md:block">
                <h4 className="text-neutral-200 font-bold mb-4">Informations légales</h4>
                <ul className="space-y-2">
                  <li>
                    <Link href="/mentions-legales" className="text-neutral-400 hover:text-neutral-200 text-sm">
                      Mentions légales
                    </Link>
                  </li>
                  <li>
                    <Link href="/rgpd" className="text-neutral-400 hover:text-neutral-200 text-sm">
                      RGPD
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-neutral-800 py-8 text-center">
              <p className="text-neutral-400 text-sm">
                © {currentYear} Stamina. Tous droits réservés.
              </p>
            </div>
          </div>
        </Vortex>
      </div>
    </footer>
  )
}

