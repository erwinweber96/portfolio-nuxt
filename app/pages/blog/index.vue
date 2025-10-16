<script setup lang="ts">
import BlogArticleCard from '~~/components/BlogArticleCard.vue'
import type { BlogArticle } from '~~/types/BlogArticle'
const blogArticlesResponse: any = await GqlGetArticles() //TODO: i don't like this (any)
const blogArticles: BlogArticle[] = blogArticlesResponse.articles
</script>

<template>
  <div>
    <div class="pt-5">
      <div class="max-w-7xl mx-auto px-6 py-24 text-center">
        <h1 class="text-5xl font-bold mb-6">Blog</h1>
        <p class="text-xl text-gray-400 max-w-2xl mx-auto">
          Articles, tutorials and insights about music production, web development and more.
        </p>
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-6 py-16">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div v-for="(article, index) in blogArticles" :key="index">
          <BlogArticleCard :article="article" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
