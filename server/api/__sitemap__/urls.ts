import { defineSitemapEventHandler } from '#imports'
import type { SitemapUrlInput } from '#sitemap/types'
import type { BlogArticle } from '~~/types/BlogArticle'

export default defineSitemapEventHandler(async () => {
  const blogArticlesResponse: any = await GqlGetArticles()
  const blogArticles: BlogArticle[] = blogArticlesResponse.articles

  const sitemapLocs = blogArticles.map((article: BlogArticle) => {
    return {
      loc: `/blog/${article.slug}`,
      _sitemap: 'pages'
    }
  })

  return sitemapLocs satisfies SitemapUrlInput[]
})
