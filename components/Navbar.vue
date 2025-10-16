<script setup lang="ts">
type Link = {
  href: string
  label: string
}

//TODO: make mobile navbar
const route = useRoute()

//TODO: make NavbarLink component
//TODO: find a better solution than substring match
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
</script>

<template>
  <nav class="fixed top-0 left-0 right-0 bg-black/50 backdrop-blur-lg z-50">
    <div class="max-w-7xl mx-auto px-6">
      <div class="flex items-center justify-between h-24">
        <NuxtLink to="/" class="text-xl font-bold">
          <img src="/logo.svg" class="w-8" alt="erwinweber.io" />
        </NuxtLink>

        <div class="hidden md:flex items-center gap-1">
          <NuxtLink
            v-for="(link, index) in links"
            :key="index"
            :to="link.href"
            :class="route.path.includes(link.href) ? currentPageLinkClass : nonCurrentPageLinkClass"
          >
            {{ link.label }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped></style>
