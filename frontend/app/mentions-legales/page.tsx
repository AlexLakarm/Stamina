"use client";

import HeaderMain from "@/components/shared/headermain";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function MentionsLegalesPage() {
  return (
    <div className="min-h-screen bg-neutral-950 py-8">
      <HeaderMain />
      <div className="max-w-4xl mx-auto px-4 pt-20">
        <Link href="/" className="hidden md:block absolute left-8 top-24">
          <Button variant="outline" className="flex items-center gap-2 bg-neutral-900 text-neutral-200 border-neutral-800 hover:bg-neutral-800">
            <ArrowLeft className="h-4 w-4" />
            Retour
          </Button>
        </Link>

        <h1 className="text-3xl font-bold text-white mb-8">Mentions Légales</h1>
        
        <div className="space-y-8 text-neutral-300">
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">1. Informations légales</h2>
            <p className="space-y-2">
              Le site staminadev.com est édité par :<br />
              STAMINA DEV<br />
              Société par actions simplifiée unipersonnelle (SASU)<br />
              Au capital social de 1 000 €<br />
              SIRET : 940 472 335 00014<br />
              RCS : 940 472 335 R.C.S. Quimper<br />
              Siège social : 3 CHEMIN DE KERLOUIC, 29710 PLONEIS<br />
              Directeur de la publication : Alexandre KERMAREC
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">2. Activité</h2>
            <p className="space-y-2">
              Code NAF : 62.02A - Conseil en systèmes et logiciels informatiques<br />
              Activité principale : Activité de conseil, audit, formation et prestations de services notamment dans le domaine de l&apos;informatique ; Développement, édition et vente de logiciels, sites web et d&apos;applications web et mobiles.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">3. Hébergement</h2>
            <p>
              Le site est hébergé par OVH SAS<br />
              2 rue Kellermann<br />
              59100 Roubaix<br />
              France<br />
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">4. Propriété intellectuelle</h2>
            <p>
              L&apos;ensemble du contenu de ce site (structure, textes, logos, images, etc.) est la propriété exclusive de STAMINA DEV. 
              Toute reproduction, représentation, modification, publication, transmission, ou exploitation totale ou partielle des contenus 
              à des fins autres que personnelles, est strictement interdite sans autorisation expresse écrite.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">5. Contact</h2>
            <p>
              Pour toute question concernant ces mentions légales, vous pouvez nous contacter via le formulaire de contact 
              disponible sur le site ou par courrier à l&apos;adresse du siège social.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
} 