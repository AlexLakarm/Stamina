import HeaderMain from "@/components/shared/headermain";
import { Article } from "@/data/articles";
import ReactMarkdown from 'react-markdown';
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export function ArticleLayout({ article }: { article: Article }) {
  return (
    <div className="min-h-screen bg-neutral-950">
      <HeaderMain />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Link 
          href="/actualites"
          className="inline-flex items-center gap-2 text-neutral-400 hover:text-neutral-200 mb-6 group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          Retour aux articles
        </Link>

        <h1 className="text-4xl font-bold text-neutral-200 mb-4">{article.title}</h1>
        <div className="flex gap-4 text-sm text-neutral-400 mb-8">
          <span>{article.category}</span>
          <span>•</span>
          <span>{article.readTime}</span>
        </div>
        <div className="prose prose-invert prose-lg max-w-none">
          <ReactMarkdown
            components={{
              h1: ({ children }) => <h1 className="text-3xl font-bold mb-6 mt-8">{children}</h1>,
              h2: ({ children }) => <h2 className="text-2xl font-bold mb-4 mt-8">{children}</h2>,
              h3: ({ children }) => <h3 className="text-xl font-bold mb-3 mt-6">{children}</h3>,
              p: ({ children }) => <p className="mb-4 text-neutral-300 leading-relaxed">{children}</p>,
              ul: ({ children }) => <ul className="list-disc pl-6 mb-4 space-y-2">{children}</ul>,
              ol: ({ children }) => <ol className="list-decimal pl-6 mb-4 space-y-2">{children}</ol>,
              li: ({ children }) => <li className="text-neutral-300">{children}</li>,
              blockquote: ({ children }) => (
                <blockquote className="border-l-4 border-neutral-700 pl-4 italic my-4 text-neutral-400">
                  {children}
                </blockquote>
              ),
              a: ({ children, href }) => (
                <a href={href} className="text-blue-400 hover:text-blue-300 underline">
                  {children}
                </a>
              ),
            }}
          >
            {article.content}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
} 