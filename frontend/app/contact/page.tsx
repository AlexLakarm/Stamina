/* eslint-disable react/no-unescaped-entities */
"use client";

import HeaderMain from "@/components/shared/headermain";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Quicksand } from "next/font/google";
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Image from "next/image";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { BottomGradient, LabelInputContainer } from "@/components/ui/form-utils";

const quicksand = Quicksand({ 
  subsets: ["latin"],
  weight: ['700']
});

/* Commenté temporairement
const contactOptions = [
  {
    title: "Consulting Blockchain",
    description: "Pour vos projets de conseil et d'accompagnement blockchain",
    email: "consulting@staminadev.com",
    icon: Briefcase,
  },
  {
    title: "Développement",
    description: "Pour vos projets de développement Web3",
    email: "dev@staminadev.com",
    icon: Code,
  },
  {
    title: "Contact Général",
    description: "Pour toute autre demande",
    email: "contact@staminadev.com",
    icon: MessageSquare,
  },
];
*/

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
  type: 'consulting' | 'dev' | 'general';
};

export default function ContactPage() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      console.log('Sending data:', data); // Debug log
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        console.error('API Error:', errorData); // Debug log
      }
      
      if (response.ok) {
        setSubmitStatus('success');
        reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Submit error:', error); // Debug log
      setSubmitStatus('error');
    }
    setIsSubmitting(false);
  };

  return (
    <main className="bg-neutral-950 min-h-screen">
      <HeaderMain />
      <div className="container mx-auto py-12 px-4">
        <Link href="/" className="hidden md:block absolute left-8 top-24 z-10">
          <Button variant="outline" className="flex items-center gap-2 bg-neutral-900 text-neutral-200 border-neutral-800 hover:bg-neutral-800">
            <ArrowLeft className="h-4 w-4" />
            Retour
          </Button>
        </Link>

        <h1 className={`${quicksand.className} text-4xl md:text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-white via-neutral-100 to-white drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]`}>
            Contactez-nous
          </h1>

        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-neutral-200 text-base md:text-lg lg:text-xl">
            Vous avez un projet blockchain ? Nous avons l'expertise ! 
            Que ce soit pour du conseil, du développement ou toute autre demande, 
            Stamina vous accompagne dans votre aventure Web3.
          </p>
        </div>

        <div className="max-w-md w-full mx-auto rounded-xl p-4 md:p-8 shadow-input bg-black/40 border border-indigo-800/50 transition-colors duration-300">
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <LabelInputContainer>
              <Label htmlFor="type">Type de contact</Label>
              <select 
                id="type"
                {...register("type", { required: "Veuillez sélectionner un type de contact" })}
                className="flex w-full rounded-md border-none bg-neutral-900 px-3 py-2 text-sm shadow-input text-white"
              >
                <option value="consulting">Consulting Blockchain</option>
                <option value="dev">Développement</option>
                <option value="general">Contact Général</option>
              </select>
              {errors.type && (
                <p className="text-sm text-red-500">{errors.type.message}</p>
              )}
            </LabelInputContainer>

            <LabelInputContainer>
              <Label htmlFor="name">Nom complet</Label>
              <Input 
                id="name" 
                placeholder="John Doe" 
                type="text"
                {...register("name", { required: "Le nom est requis" })}
              />
              {errors.name && (
                <p className="text-sm text-red-500">{errors.name.message}</p>
              )}
            </LabelInputContainer>

            <LabelInputContainer>
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email" 
                placeholder="john@example.com" 
                type="email"
                {...register("email", { 
                  required: "L'email est requis",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Adresse email invalide"
                  }
                })}
              />
              {errors.email && (
                <p className="text-sm text-red-500">{errors.email.message}</p>
              )}
            </LabelInputContainer>

            <LabelInputContainer>
              <Label htmlFor="subject">Sujet</Label>
              <Input 
                id="subject" 
                placeholder="Sujet de votre message" 
                type="text"
                {...register("subject", { required: "Le sujet est requis" })}
              />
              {errors.subject && (
                <p className="text-sm text-red-500">{errors.subject.message}</p>
              )}
            </LabelInputContainer>

            <LabelInputContainer>
              <Label htmlFor="message">Message</Label>
              <textarea
                id="message"
                rows={4}
                className="flex w-full rounded-md border-none bg-neutral-800 px-3 py-2 text-sm shadow-input placeholder:text-neutral-400 text-white"
                placeholder="Votre message..."
                {...register("message", { 
                  required: "Le message est requis",
                  minLength: {
                    value: 10,
                    message: "Le message doit contenir au moins 10 caractères"
                  }
                })}
              />
              {errors.message && (
                <p className="text-sm text-red-500">{errors.message.message}</p>
              )}
            </LabelInputContainer>

            <button
              className="relative group/btn w-full bg-gradient-to-br from-neutral-900 to-black text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff20_inset,0px_-1px_0px_0px_#ffffff20_inset] disabled:opacity-50"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Envoi en cours..." : "Envoyer →"}
              <BottomGradient />
            </button>

            {submitStatus === 'success' && (
              <div className="p-4 bg-green-900/50 text-green-300 rounded-md">
                Message envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="p-4 bg-red-900/50 text-red-300 rounded-md">
                Une erreur est survenue. Veuillez réessayer plus tard.
              </div>
            )}
          </form>
            </div>

        <div className="max-w-3xl mx-auto mt-24 px-4">
          <h2 className={`${quicksand.className} text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-white via-neutral-200 to-white`}>
            Derrière Stamina
          </h2>
          
          <div className="flex flex-col md:flex-row items-start gap-8 text-neutral-300">
            <div className="w-48 h-48 flex-shrink-0 md:sticky md:top-8">
              <Image
                src="/images/akermarec.jpeg"
                alt="Alexandre KERMAREC"
                width={192}
                height={192}
                className="rounded-full object-cover w-full h-full"
              />
            </div>

            <div className="space-y-4 flex-grow relative">
              <span className="absolute -left-8 -top-8 text-6xl text-blue-800 opacity-80">"</span>
              
              <p>
                Je m'appelle Alexandre KERMAREC et à 33 ans j'ai fondé Stamina avec pour objectif d'en faire la structure de référence en Bretagne dans le domaine de la blockchain et du web3.
              </p>
              
              <p>
                Je n'ai pas choisi ce nom au hasard. Stamina signifie endurance, persévérance. Ces notions font particulièrement écho en moi, issues de mon parcours sportif mais aussi essentielles dans toute aventure entrepreneuriale.
              </p>
              
              <p>
                Pour répondre à vos besoins je m'appuie sur un profil hybride. Après plusieurs années d'expérience au sein d'établissements bancaires, j'ai choisi de me spécialiser dans le développement web et les technologies blockchain. Une formation ciblée auprès d'un acteur de référence m'a permis de concrétiser cette transition.
              </p>
            
              <p>
                Je suis en effet certifié en développement blockchain par l'école Alyra et France Compétences.
                La maîtrise du développement d'une application décentralisée me permet de connaître en profondeur cet écosystème et les technologies qui le rendent aussi attractif.
              </p>
              
              <p>
                Mon parcours de formation continue en 2025 puisque j'ai récemment intégré un parcours de développeur Solana, toujours avec Alyra, qui me permettra d'appréhender les programmes Solana développés dans le langage Rust.
              </p>
              
              <p className="font-medium text-white">
                J'ai déjà hâte d'échanger avec vous sur vos projets web3.
              </p>

              <span className="absolute -right-8 -bottom-8 text-6xl text-blue-800 opacity-80">"</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 