<script setup lang="ts">
import type { BlogArticle } from '~~/types/BlogArticle'

const { params } = useRoute()

const response: any = await GqlGetArticleBySlug({
  slug: params.slug.toString()
})
const article: BlogArticle = response.article
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
