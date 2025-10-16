<script setup lang="ts">
import ServiceCard from '~~/components/ServiceCard.vue'
import type { Service } from '~~/types/Service'
const services: Service[] = [
  {
    title: 'Black Metal Mixing & Mastering',
    image:
      'https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/299351555/original/0ec3ceaf80b3f37794f7a1aa1ea66b62fd96975d.png',
    link: 'https://www.fiverr.com/erwinweber/mix-and-master-your-black-metal-song'
  },
  {
    title: 'Post Rock/Metal Mixing & Mastering',
    image:
      'https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/361294252/original/69906be0ba7cf79e024ecf6d1b715ccd96a338f3.png',
    link: 'https://www.fiverr.com/erwinweber/mix-and-master-your-post-rock-metal-song'
  },
  {
    title: 'MIDI Drum Editing & Processing',
    image:
      'https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/283635339/original/8645d65c68c4df4cc320fd531a7bec5f2b86d196.png',
    link: 'https://www.fiverr.com/erwinweber/write-drums-for-your-metal-or-rock-band'
  },
  {
    title: 'EPK Design & Development',
    image:
      'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/430456115/original/6540333ac46656b5fa74e9a2992d9df367cee103/create-a-web-epk-press-media-kit-for-your-band-or-artist.png',
    link: 'https://www.fiverr.com/erwinweber/create-a-web-epk-press-media-kit-for-your-band-or-artist'
  },
  {
    title: 'PHP / Laravel Backend Development',
    image:
      'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/434123607/original/d290985f9770258114486507dea9877acc606c39/do-backend-development-for-your-laravel-php-project.png',
    link: 'https://www.fiverr.com/erwinweber/do-backend-development-for-your-laravel-php-project'
  },
  {
    title: 'Vue / Nuxt Frontend Development',
    image:
      'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/434121168/original/d518c5e7d64a64810ae4ea28158714ffb2875c44/do-front-end-development-for-your-nuxt-vue-tailwind-app.png',
    link: 'https://www.fiverr.com/erwinweber/do-front-end-development-for-your-nuxt-vue-tailwind-app'
  }
]
</script>

<template>
  <div>
    <div class="pt-5">
      <div class="max-w-7xl mx-auto px-6 py-24 text-center">
        <h1 class="text-5xl font-bold mb-6">Services</h1>
        <p class="text-xl text-gray-400 max-w-2xl mx-auto">
          Here are some of the services I'm currently offering to creatives and businesses.
        </p>
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-6 py-16">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ServiceCard v-for="(service, index) in services" :key="index" :service="service" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
