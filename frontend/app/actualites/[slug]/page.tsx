import { articles } from "@/data/articles";
import { ArticleLayout } from "@/components/article-layout";
import { notFound } from "next/navigation";
import { Metadata, ResolvingMetadata } from 'next';

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

// Fonction simple pour récupérer un article
async function getArticle(slug: string) {
  const article = articles.find(article => article.slug === slug);
  if (!article) notFound();
  return article;
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const resolvedParams = await params;
  const article = await getArticle(resolvedParams.slug);
  const previousMetadata = await parent;
  
  return {
    title: article.title,
    description: article.description,
    keywords: article.keywords,
    openGraph: {
      ...previousMetadata.openGraph,
      type: 'article',
      url: `https://staminadev.com/actualites/${article.slug}`,
      title: article.title,
      description: article.description,
      images: [
        `/images/${article.imageUrl}`,
        ...(previousMetadata.openGraph?.images || [])
      ],
    }
  };
}

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export default async function Page({ params }: Props) {
  const resolvedParams = await params;
  const article = await getArticle(resolvedParams.slug);
  return <ArticleLayout article={article} />;
} 