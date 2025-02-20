import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { articles } from "@/data/articles";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import {
  CustomPagination as Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/custom-pagination";
import HeaderMain from "@/components/shared/headermain";
import { Button } from "@/components/ui/button";
import { Quicksand } from "next/font/google";
import { CategoryFilters } from "@/components/actualites/category-filters";

const quicksand = Quicksand({ 
  subsets: ["latin"],
  weight: ['700']
});

const ARTICLES_PER_PAGE = 6;

interface PageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function ActualitesPage({
  searchParams,
}: PageProps) {
  const resolvedParams = await searchParams;
  const currentPage = Number(resolvedParams.page) || 1;

  // Trier les articles par date
  const sortedArticles = [...articles].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  // Filtrer les articles par catégorie
  const filteredArticles = resolvedParams.category && resolvedParams.category !== "Toutes catégories"
    ? sortedArticles.filter(article => article.category === resolvedParams.category)
    : sortedArticles;

  // Calculer le nombre total de pages après filtrage
  const totalPages = Math.ceil(filteredArticles.length / ARTICLES_PER_PAGE);

  // Pagination sur les articles filtrés
  const startIndex = (currentPage - 1) * ARTICLES_PER_PAGE;
  const paginatedArticles = filteredArticles.slice(
    startIndex,
    startIndex + ARTICLES_PER_PAGE
  );

  // Extraire les catégories uniques des articles
  const categories = ["Toutes catégories", ...new Set(articles.map(article => article.category))];

  return (
    <div className="min-h-screen bg-neutral-950 py-8">
      <HeaderMain />
      <div className="max-w-7xl mx-auto px-4">
        <Link href="/" className="hidden md:block absolute left-8 top-24">
          <Button variant="outline" className="flex items-center gap-2 bg-neutral-900 text-neutral-200 border-neutral-800 hover:bg-neutral-800">
            <ArrowLeft className="h-4 w-4" />
            Retour
          </Button>
        </Link>

        <h1 className={`${quicksand.className} text-4xl md:text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-white via-neutral-200 to-white drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]`}>
          Actualités &amp; Analyses
        </h1>

        <CategoryFilters 
          categories={categories} 
          currentCategory={resolvedParams.category as string} 
        />

        <BentoGrid>
          {paginatedArticles.map((article) => (
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
                  <div className="absolute top-2 right-2 bg-black/50 backdrop-blur-sm px-2 py-1 rounded text-xs text-white">
                    {article.readTime}
                  </div>
                </div>
              }
            />
          ))}
        </BentoGrid>

        {totalPages > 1 && (
          <div className="mt-12">
            <Pagination>
              <PaginationContent>
                {currentPage > 1 && (
                  <PaginationItem>
                    <PaginationPrevious 
                      href={`/actualites?page=${currentPage - 1}`} 
                    />
                  </PaginationItem>
                )}

                {[...Array(totalPages)].map((_, i) => {
                  const pageNumber = i + 1;
                  // Ne retourner que si nous avons un href valide
                  if (
                    pageNumber === 1 ||
                    pageNumber === totalPages ||
                    (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1)
                  ) {
                    return (
                      <PaginationItem key={pageNumber}>
                        <PaginationLink
                          href={`/actualites?page=${pageNumber}`}
                          isActive={pageNumber === currentPage}
                        >
                          {pageNumber}
                        </PaginationLink>
                      </PaginationItem>
                    );
                  }
                  // Ne pas retourner de PaginationLink pour les ellipsis
                  if (
                    pageNumber === currentPage - 2 ||
                    pageNumber === currentPage + 2
                  ) {
                    return (
                      <PaginationItem key={`ellipsis-${pageNumber}`}>
                        <PaginationEllipsis />
                      </PaginationItem>
                    );
                  }
                  return null;
                })}

                {currentPage < totalPages && (
                  <PaginationItem>
                    <PaginationNext 
                      href={`/actualites?page=${currentPage + 1}`} 
                    />
                  </PaginationItem>
                )}
              </PaginationContent>
            </Pagination>
          </div>
        )}
      </div>
    </div>
  );
}
