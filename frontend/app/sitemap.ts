import { MetadataRoute } from 'next'
import { articles } from '@/data/articles'

type ChangeFreq = 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';

export const dynamic = 'force-static';
export const revalidate = 86400;

export default function sitemap(): MetadataRoute.Sitemap {
  const articleUrls = articles.map((article) => ({
    url: `https://staminadev.com/actualites/${article.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as ChangeFreq,
    priority: 0.8,
  }))

  return [
    {
      url: 'https://staminadev.com',
      lastModified: new Date(),
      changeFrequency: 'daily' as ChangeFreq,
      priority: 1.0,
    },
    {
      url: 'https://staminadev.com/dev',
      lastModified: new Date(),
      changeFrequency: 'weekly' as ChangeFreq,
      priority: 0.9,
    },
    {
      url: 'https://staminadev.com/consulting',
      lastModified: new Date(),
      changeFrequency: 'weekly' as ChangeFreq,
      priority: 0.9,
    },
    {
      url: 'https://staminadev.com/actualites',
      lastModified: new Date(),
      changeFrequency: 'daily' as ChangeFreq,
      priority: 0.9,
    },
    {
      url: 'https://staminadev.com/contact',
      lastModified: new Date(),
      changeFrequency: 'monthly' as ChangeFreq,
      priority: 0.7,
    },
    {
      url: 'https://staminadev.com/howtoblockchain',
      lastModified: new Date(),
      changeFrequency: 'weekly' as ChangeFreq,
      priority: 0.8,
    },
    {
      url: 'https://staminadev.com/mentions-legales',
      lastModified: new Date(),
      changeFrequency: 'yearly' as ChangeFreq,
      priority: 0.3,
    },
    {
      url: 'https://staminadev.com/rgpd',
      lastModified: new Date(),
      changeFrequency: 'yearly' as ChangeFreq,
      priority: 0.3,
    },
    ...articleUrls,
  ]
} 