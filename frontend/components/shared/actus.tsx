"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { getLatestArticles } from "@/data/articles";
import { ExternalLink } from "lucide-react";

const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[20rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

const BentoGridItem = ({
  className,
  title,
  description,
  header,
  link,
}: {
  className?: string;
  title: string;
  description: string;
  header?: React.ReactNode;
  link: string;
}) => {
  return (
    <Link href={link}>
      <motion.div
        whileHover={{ scale: 1.01 }}
        className={cn(
          "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 bg-neutral-900 border border-neutral-800 justify-between flex flex-col space-y-4",
          className
        )}
      >
        {header}
        <div className="group-hover/bento:translate-x-2 transition duration-200">
          <div className="font-bold text-neutral-200 mb-2 mt-2">
            {title}
          </div>
          <div className="font-normal text-neutral-400 text-sm">
            {description}
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default function Actus() {
  const allArticles = getLatestArticles(6);
  const mobileArticles = getLatestArticles(3);
  
  return (
    <div className="relative py-16 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-14 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600">
          Nos derniers articles et analyses
        </h2>
        
        {/* Version desktop */}
        <div className="hidden md:block">
          <BentoGrid>
            {allArticles.map((article) => (
              <BentoGridItem
                key={article.id}
                title={article.title}
                description={article.description}
                link={`/actualites/${article.slug}`}
                header={
                  <div className="relative w-full h-40 rounded-lg overflow-hidden">
                    <Image
                      src={article.imageUrl}
                      alt={article.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                }
              />
            ))}
          </BentoGrid>
        </div>

        {/* Version mobile */}
        <div className="block md:hidden">
          <BentoGrid>
            {mobileArticles.map((article) => (
              <BentoGridItem
                key={article.id}
                title={article.title}
                description={article.description}
                link={`/actualites/${article.slug}`}
                header={
                  <div className="relative w-full h-40 rounded-lg overflow-hidden">
                    <Image
                      src={article.imageUrl}
                      alt={article.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                }
              />
            ))}
          </BentoGrid>
        </div>

        {/* Ajout du bouton "Tous nos articles" */}
        <div className="flex justify-center mt-12">
          <Link href="/actualites">
            <button className="px-8 py-4 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:opacity-90 transition-opacity text-lg flex items-center gap-2">
              Tous nos articles
              <ExternalLink className="h-5 w-5" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
} 