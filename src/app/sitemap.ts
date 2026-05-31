import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://kerodevs.com", lastModified: new Date() },
    { url: "https://kerodevs.com/about", lastModified: new Date() },
    { url: "https://kerodevs.com/services", lastModified: new Date() },
    { url: "https://kerodevs.com/contact", lastModified: new Date() },
  ]
}