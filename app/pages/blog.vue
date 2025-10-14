<script setup lang="ts">
import BlogPostCard from '~~/components/BlogPostCard.vue'
import type { BlogPost } from '~~/types/BlogPost'

const posts: BlogPost[] = [
  {
    id: '1',
    title: 'What is an Electronic Press Kit?',
    content: '...',
    excerpt:
      'An Electronic Press Kit (EPK) is a professional digital portfolio that introduces your band or music project to ...',
    createdAt: '2025-09-22T12:00:00Z',
    slug: 'what-is-an-electronic-press-kit'
  }
]
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
        <div v-for="post in posts" :key="post.id">
          <BlogPostCard :post="post" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
