import { articles } from "@/data/articles";
import { ArticleLayout } from "@/components/article-layout";
import { notFound } from "next/navigation";

// Fonction simple pour récupérer un article
async function getArticle(params: Promise<{ slug: string }> | { slug: string }) {
  const resolvedParams = await params;
  const article = articles.find(article => article.slug === resolvedParams.slug);
  if (!article) notFound();
  return article;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const article = await getArticle(params);
  
  return {
    title: article.title,
    description: article.description,
  };
}

export async function generateStaticParams() {
    // Utiliser le même tableau d'articles que celui utilisé dans l'application
    return articles.map((article) => ({
        slug: article.slug,
    }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const article = await getArticle(params);
  return <ArticleLayout article={article} />;
} 