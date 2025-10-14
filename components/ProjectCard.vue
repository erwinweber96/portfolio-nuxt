<script setup lang="ts">
import type { Project } from '~~/types/Project'

interface ProjectCardProps {
  project: Project
}

const props = defineProps<ProjectCardProps>()
</script>

<template>
  <div
    class="bg-white/5 rounded-lg overflow-hidden transition-transform duration-200 hover:scale-[1.02]"
  >
    <img :src="props.project.image" :alt="props.project.title" class="w-full h-48 object-cover" />
    <div class="p-6">
      <h3 class="text-xl font-bold mb-2">{{ props.project.title }}</h3>
      <p class="text-gray-400 mb-4">{{ props.project.description }}</p>

      <a
        v-if="props.project.link !== '#'"
        :href="props.project.link"
        target="_blank"
        rel="noopener noreferrer"
        class="text-pink-500 hover:text-pink-400"
      >
        View Project →
      </a>
      <span v-else class="text-gray-600"> Inactive </span>
    </div>
  </div>
</template>

<style scoped></style>
