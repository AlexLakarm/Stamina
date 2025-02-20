/* eslint-disable react/no-unescaped-entities */
'use client';

import HeaderMain from "@/components/shared/headermain";
import { Quicksand, Inter } from "next/font/google";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Mail, MessageSquare, Phone, MapPin } from "lucide-react";
import Link from "next/link";

const quicksand = Quicksand({ 
  subsets: ["latin"],
  weight: ['700']
});

const inter = Inter({ 
  subsets: ["latin"],
  weight: ['400']
});

export default function ContactPage() {
  return (
    <main className="bg-neutral-950 min-h-screen">
      <HeaderMain />
      <div className="container mx-auto py-12 px-4">
        <Link href="/" className="hidden md:block absolute left-8 top-24">
          <Button variant="outline" className="flex items-center gap-2 bg-neutral-900 text-neutral-200 border-neutral-800 hover:bg-neutral-800">
            <ArrowLeft className="h-4 w-4" />
            Retour
          </Button>
        </Link>

        <div className="max-w-3xl mx-auto">
          <h1 className={`${quicksand.className} text-4xl md:text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-white via-neutral-200 to-white drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]`}>
            Contactez-nous
          </h1>

          <div className={`${inter.className} space-y-8 text-lg text-neutral-400 leading-relaxed`}>
            <div className="bg-neutral-900/50 p-6 rounded-xl border border-neutral-800">
              <h2 className="text-2xl font-bold text-neutral-200 mb-4">Discutons de votre projet</h2>
              <p>
                Que vous ayez un projet concret ou simplement des questions sur la blockchain, 
                notre équipe est là pour vous accompagner dans votre démarche.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-neutral-900/30 p-6 rounded-lg border border-neutral-800">
                <h3 className="text-xl font-semibold text-neutral-200 mb-4 flex items-center gap-2">
                  <MessageSquare className="h-5 w-5" />
                  Chat en direct
                </h3>
                <p className="text-sm mb-4">
                  Discutez directement avec un membre de notre équipe pour une réponse rapide.
                </p>
                <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:opacity-90">
                  Démarrer le chat
                </Button>
              </div>

              <div className="bg-neutral-900/30 p-6 rounded-lg border border-neutral-800">
                <h3 className="text-xl font-semibold text-neutral-200 mb-4 flex items-center gap-2">
                  <Mail className="h-5 w-5" />
                  Email
                </h3>
                <p className="text-sm mb-4">
                  Envoyez-nous un email détaillé et nous vous répondrons sous 24h.
                </p>
                <Button className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:opacity-90">
                  contact@staminadev.com
                </Button>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-6 rounded-xl border border-blue-500/20">
              <h3 className="text-xl font-semibold text-neutral-200 mb-6">Informations de contact</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-blue-400" />
                  <span>+33 (0)1 23 45 67 89</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-blue-400" />
                  <span>Fouesnant, Bretagne, France</span>
                </div>
              </div>
            </div>

            <div className="bg-neutral-900/30 p-6 rounded-xl border border-neutral-800">
              <h3 className="text-xl font-semibold text-neutral-200 mb-4">Horaires</h3>
              <p className="text-sm">
                Notre équipe est disponible du lundi au vendredi, de 9h à 18h (UTC+1).
                <br />
                Nous nous efforçons de répondre à toutes les demandes dans les 24 heures ouvrées.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 