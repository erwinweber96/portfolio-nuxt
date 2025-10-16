<script setup lang="ts">
import type { Service } from '~~/types/Service'

interface ServiceCardProps {
  service: Service
}

const props = defineProps<ServiceCardProps>()
</script>

<template>
  <div
    class="bg-white/5 rounded-lg overflow-hidden transition-transform duration-200 hover:scale-[1.02]"
  >
    <img :src="props.service.image" :alt="props.service.title" class="w-full h-45 object-cover" />
    <div class="p-6">
      <h3 class="text-xl font-bold mb-2">{{ props.service.title }}</h3>

      <a
        :href="props.service.link"
        target="_blank"
        rel="noopener noreferrer"
        class="text-pink-500 hover:text-pink-400"
      >
        View Service →
      </a>
    </div>
  </div>
</template>

<style scoped></style>
