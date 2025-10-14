<script setup lang="ts">
import type { BlogPost } from '~~/types/BlogPost'

interface BlogPostCardProps {
  post: BlogPost
}
const props = defineProps<BlogPostCardProps>()
</script>

<template>
  <div class="bg-white/5 rounded-lg p-6">
    <NuxtLink :to="`/blog/${props.post.slug}`">
      <h2 class="text-2xl font-bold mb-2 hover:text-pink-500">
        {{ props.post.title }}
      </h2>
    </NuxtLink>
    <time class="text-sm text-gray-400 mb-4 block">
      <NuxtTime :datetime="props.post.createdAt" month="long" day="numeric" year="numeric" />
    </time>
    <p class="text-gray-300">{{ props.post.excerpt }}</p>
    <NuxtLink
      :to="`/blog/${props.post.slug}`"
      class="text-pink-500 hover:text-pink-400 inline-block mt-4"
    >
      Read More →
    </NuxtLink>
  </div>
</template>

<style scoped></style>
