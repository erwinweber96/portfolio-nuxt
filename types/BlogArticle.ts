export interface BlogArticle {
  title: string
  content?: BlogContent
  excerpt?: string
  postedAt: string
  slug: string
  tags?: string[]
}

interface BlogContent {
  html: string
}
