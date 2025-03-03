"use client";

import HeaderMain from "@/components/shared/headermain";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function RGPDPage() {
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

        <h1 className="text-3xl font-bold text-white mb-8">Protection des Données Personnelles</h1>
        
        <div className="space-y-8 text-neutral-300">
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">1. Responsable du traitement</h2>
            <p>
              STAMINA DEV, SASU au capital de 1 000 €, dont le siège social est situé au 3 CHEMIN DE KERLOUIC, 29710 PLONEIS, 
              est responsable du traitement des données collectées sur le site staminadev.com.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">2. Données collectées</h2>
            <p className="mb-4">Nous collectons et traitons les données suivantes :</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Données de contact (via le formulaire) : nom, prénom, email</li>
              <li>Données de connexion : adresse IP, données de navigation</li>
              <li>Cookies techniques essentiels au fonctionnement du site</li>
              <li>Cookies d&apos;analyse d&apos;audience (via Google Analytics)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">3. Finalités du traitement</h2>
            <p className="mb-4">Vos données sont collectées pour :</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Répondre à vos demandes de contact</li>
              <li>Améliorer votre expérience de navigation</li>
              <li>Analyser l&apos;utilisation du site</li>
              <li>Assurer la sécurité du site</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">4. Base légale</h2>
            <p className="mb-4">Le traitement de vos données est fondé sur :</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Votre consentement pour les cookies non essentiels</li>
              <li>Notre intérêt légitime pour l&apos;amélioration de nos services</li>
              <li>L&apos;exécution de mesures précontractuelles lors de vos demandes de contact</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">5. Destinataires des données</h2>
            <p>
              Vos données sont destinées à STAMINA DEV et à ses sous-traitants techniques (hébergeur, outils d&apos;analyse). 
              Nous ne vendons ni ne partageons vos données avec des tiers à des fins commerciales.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">6. Durée de conservation</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Données de formulaire : 3 ans à compter du dernier contact</li>
              <li>Cookies : 13 mois maximum</li>
              <li>Données d&apos;analyse : 14 mois maximum</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">7. Vos droits</h2>
            <p className="mb-4">
              Conformément au RGPD, vous disposez des droits suivants concernant vos données personnelles :
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Droit d&apos;accès</li>
              <li>Droit de rectification</li>
              <li>Droit à l&apos;effacement</li>
              <li>Droit à la limitation du traitement</li>
              <li>Droit à la portabilité</li>
              <li>Droit d&apos;opposition</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">8. Contact</h2>
            <p>
              Pour exercer vos droits ou pour toute question relative à la protection de vos données, 
              vous pouvez nous contacter via le formulaire de contact du site ou par courrier à l&apos;adresse du siège social.
              En cas de difficulté, vous pouvez également saisir la CNIL (www.cnil.fr).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">9. Mise à jour</h2>
            <p>
              La présente politique de protection des données peut être mise à jour pour tenir compte des évolutions 
              législatives et réglementaires ainsi que des améliorations que nous pourrions y apporter.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}