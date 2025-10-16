<script setup lang="ts">
import type { BlogArticle } from '~~/types/BlogArticle'

interface BlogArticleCardProps {
  article: BlogArticle
}
const props = defineProps<BlogArticleCardProps>()
</script>

<template>
  <div class="bg-white/5 rounded-lg p-6">
    <NuxtLink :to="`/blog/${props.article.slug}`">
      <h2 class="text-2xl font-bold mb-2 hover:text-pink-500">
        {{ props.article.title }}
      </h2>
    </NuxtLink>
    <time class="text-sm text-gray-400 mb-4 block">
      <NuxtTime :datetime="props.article.postedAt" month="long" day="numeric" year="numeric" />
    </time>
    <p class="text-gray-300">{{ props.article.excerpt }}</p>
    <NuxtLink
      :to="`/blog/${props.article.slug}`"
      class="text-pink-500 hover:text-pink-400 inline-block mt-4"
    >
      Read More →
    </NuxtLink>
  </div>
</template>

<style scoped></style>
