<script setup lang="ts">
import type { BlogArticle } from '~~/types/BlogArticle'

const { params, path } = useRoute()

const response: GetArticleBySlugQuery = await GqlGetArticleBySlug({
  slug: params.slug?.toString()
})
const article: BlogArticle = response.article
const metaTitle: string = article.title + ' | erwinweber.io'

useHead({
  title: metaTitle,
  meta: [
    { name: 'description', content: article.excerpt },
    { name: 'keywords', content: metaTitle },
    { property: 'og:title', content: metaTitle },
    { property: 'og:description', content: article.excerpt },
    { property: 'canonical', content: 'https://erwinweber.io/blog/' + path }
  ]
})

useSeoMeta({
  title: metaTitle,
  ogTitle: metaTitle,
  description: article.excerpt,
  ogDescription: article.excerpt
})
</script>

<template>
  <div class="max-w-4xl mx-auto px-6 py-32">
    <article class="prose prose-invert prose-lg">
      <div class="text-gray-400 block">Erwin Weber</div>

      <h1 class="text-4xl font-bold my-4">{{ article.title }}</h1>
      <time class="text-gray-400 block mb-8">
        <NuxtTime :datetime="article.postedAt" month="long" day="numeric" year="numeric" />
      </time>

      <div id="blog-content" class="whitespace-pre-wrap" v-html="article.content.html"></div>

      <div class="text-pink-500 my-8">
        <NuxtLink to="/contact"> Contact me today to get started. → </NuxtLink>
      </div>

      <div class="flex flex-wrap gap-3 mt-24">
        <div v-for="(tag, index) in article.tags" :key="index">
          <span class="px-3 py-1 bg-white/5 rounded-full text-sm">
            {{ tag.replace(/([A-Z])/g, ' $1').toLowerCase() }}
          </span>
        </div>
      </div>
    </article>
  </div>
</template>

<style>
#blog-content p,
#blog-content img {
  padding-bottom: 5px;
}
#blog-content h1,
#blog-content h2,
#blog-content h3 {
  font-size: larger;
  font-weight: bold;
  padding: 15px 0 15px 0;
}
</style>
