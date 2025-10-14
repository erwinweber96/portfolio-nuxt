<script setup lang="ts">
import { Youtube, Linkedin, Github, Facebook, Instagram } from 'lucide-vue-next'
</script>

<template>
  <div class="flex gap-2">
    <a
      href="https://www.facebook.com/erwinweber96/"
      target="_blank"
      class="p-2 bg-white/10 rounded-full hover:bg-white/20"
    >
      <Facebook :size="20" class="text-white" />
    </a>

    <a
      href="https://instagram.com/erwin_weber96"
      target="_blank"
      class="p-2 bg-white/10 rounded-full hover:bg-white/20"
    >
      <Instagram :size="20" class="text-white" />
    </a>

    <a
      href="https://www.youtube.com/@VaarclocOfficial"
      target="_blank"
      class="p-2 bg-white/10 rounded-full hover:bg-white/20"
    >
      <Youtube :size="20" class="text-white" />
    </a>

    <a
      href="https://www.linkedin.com/in/erwinweber96/"
      target="_blank"
      class="p-2 bg-white/10 rounded-full hover:bg-white/20"
    >
      <Linkedin :size="20" class="text-white" />
    </a>

    <a
      href="https://github.com/erwinweber96"
      target="_blank"
      class="p-2 bg-white/10 rounded-full hover:bg-white/20"
    >
      <Github :size="20" class="text-white" />
    </a>
  </div>
</template>

<style scoped></style>
