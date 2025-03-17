import { MetadataRoute } from 'next'

type ChangeFreq = 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://howtoblockchain.staminadev.com',
      lastModified: new Date(),
      changeFrequency: 'daily' as ChangeFreq,
      priority: 1.0,
    },
    {
      url: 'https://howtoblockchain.staminadev.com/debutant',
      lastModified: new Date(),
      changeFrequency: 'weekly' as ChangeFreq,
      priority: 0.9,
    },
    // Ajouter toutes vos autres pages
  ]
} 