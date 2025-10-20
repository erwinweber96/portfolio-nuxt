<script setup lang="ts">
import { Menu, X } from 'lucide-vue-next'

interface Link {
  href: string
  label: string
}

const route = useRoute()
const mobileMenuOpen = ref(false)

const linkBaseClass: string = 'px-4 py-2 rounded-lg text-sm font-medium transition-colors relative'
const currentPageLinkClass: string = `${linkBaseClass} text-pink-500`
const nonCurrentPageLinkClass: string = `${linkBaseClass} text-gray-300 hover:text-white hover:bg-white/10`

const links: Array<Link> = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/services', label: 'Services' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' }
]

const isCurrentPage = (path: string): boolean => {
  if (path === '/' && route.path === '/') {
    return true
  }

  return path !== '/' && route.path === path
}

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}
</script>

<template>
  <nav class="fixed top-0 left-0 right-0 bg-black/50 backdrop-blur-lg z-50">
    <div class="max-w-7xl mx-auto px-6">
      <div class="flex items-center justify-between h-24">
        <NuxtLink to="/" class="text-xl font-bold">
          <img src="/logo.svg" class="w-8" alt="erwinweber.io" />
        </NuxtLink>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center gap-1">
          <NuxtLink
            v-for="(link, index) in links"
            :key="index"
            :to="link.href"
            :class="isCurrentPage(link.href) ? currentPageLinkClass : nonCurrentPageLinkClass"
          >
            {{ link.label }}
          </NuxtLink>
        </div>

        <!-- Mobile Menu Button -->
        <button
          class="md:hidden p-2 rounded-lg text-gray-300 hover:bg-white/10"
          @click="toggleMobileMenu"
          aria-label="Toggle menu"
        >
          <Menu v-if="!mobileMenuOpen" class="w-6 h-6" />
          <X v-else class="w-6 h-6" />
        </button>
      </div>
    </div>

    <!-- Mobile Navigation -->
    <div v-if="mobileMenuOpen" class="md:hidden bg-black/90 backdrop-blur-lg absolute w-full">
      <div class="px-6 py-4 space-y-2">
        <NuxtLink
          v-for="(link, index) in links"
          :key="index"
          :to="link.href"
          :class="isCurrentPage(link.href) ? currentPageLinkClass : nonCurrentPageLinkClass"
          class="block py-3"
          @click="closeMobileMenu"
        >
          {{ link.label }}
        </NuxtLink>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
}
.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
