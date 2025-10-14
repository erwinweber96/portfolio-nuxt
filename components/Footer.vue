<script setup lang="ts">
import SocialLinks from '~~/components/SocialLinks.vue'
const currentYear: number = new Date().getFullYear()
</script>

<template>
  <footer class="bg-white/5 mt-24">
    <div class="max-w-7xl mx-auto px-6 py-12">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        <div class="space-y-4">
          <h3 class="text-xl font-bold">Erwin Weber</h3>
          <p class="text-gray-400">Supporting bands, labels, and creatives behind the scenes.</p>
          <SocialLinks />
        </div>

        <div class="space-y-4">
          <h4 class="font-bold">Services</h4>
          <ul class="space-y-2 text-gray-400">
            <li><NuxtLink to="/contact" class="hover:text-white">Web Development</NuxtLink></li>
            <li><NuxtLink to="/contact" class="hover:text-white">Mixing & Mastering</NuxtLink></li>
            <li><NuxtLink to="/contact" class="hover:text-white">Ecommerce Solutions</NuxtLink></li>
            <li>
              <NuxtLink to="/contact" class="hover:text-white">Electronic Press Kit (EPK)</NuxtLink>
            </li>
          </ul>
        </div>

        <div class="space-y-4">
          <h4 class="font-bold">Quick Links</h4>
          <ul class="space-y-2 text-gray-400">
            <li><NuxtLink to="/about" class="hover:text-white">About</NuxtLink></li>
            <li><NuxtLink to="/projects" class="hover:text-white">Projects</NuxtLink></li>
            <li><NuxtLink to="/blog" class="hover:text-white">Blog</NuxtLink></li>
            <li><NuxtLink to="/contact" class="hover:text-white">Contact</NuxtLink></li>
          </ul>
        </div>

        <div class="space-y-4">
          <h4 class="font-bold">Contact</h4>
          <ul class="space-y-2 text-gray-400">
            <li>erwinweber96 [at] live.com</li>
          </ul>
        </div>
      </div>

      <div
        class="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
      >
        <p class="text-gray-400">© {{ currentYear }} Erwin Weber. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<style scoped></style>
