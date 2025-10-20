// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  site: {
    url: 'https://erwinweber.io',
    name: 'Erwin Weber'
  },
  sitemap: {
    sources: ['/api/__sitemap__/urls']
  },
  app: {
    head: {
      title: 'Erwin Weber',
      meta: [
        { charset: 'UTF-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        {
          name: 'title',
          content: 'Erwin Weber'
        },
        {
          name: 'description',
          content:
            'From custom tools to hands-on services, I support bands, labels, and creatives behind the scenes, so they can focus on their craft. Web Development & Design, Music Production, Ecommerce Solutions, Mixing & Mastering.'
        },

        // Open Graph
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://erwinweber.io/' },
        { property: 'og:title', content: 'Erwin Weber' },
        {
          property: 'og:description',
          content:
            'From custom tools to hands-on services, I support bands, labels, and creatives behind the scenes, so they can focus on their craft. Web Development & Design, Music Production, Ecommerce Solutions, Mixing & Mastering.'
        },
        { property: 'og:image', content: 'https://erwinweber.io/erwin.jpg' },

        // Twitter
        { property: 'twitter:card', content: 'summary_large_image' },
        { property: 'twitter:url', content: 'https://erwinweber.io/' },
        { property: 'twitter:title', content: 'Erwin Weber' },
        {
          property: 'twitter:description',
          content:
            'From custom tools to hands-on services, I support bands, labels, and creatives behind the scenes, so they can focus on their craft. Web Development & Design, Music Production, Ecommerce Solutions, Mixing & Mastering.'
        },
        { property: 'twitter:image', content: 'https://erwinweber.io/erwin.jpg' }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Finlandica:wght@400;500;600;700&display=swap'
        }
      ],
      script: [
        {
          defer: true,
          'data-domain': 'erwinweber.io',
          src: 'https://plausible.io/js/script.js'
        }
      ]
    }
  },
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint',
    '@nuxtjs/tailwindcss',
    '@vueuse/motion/nuxt',
    [
      '@nuxtjs/google-fonts',
      {
        families: {
          Finlandica: [400, 500, 600, 700]
        }
      }
    ],
    'nuxt-graphql-client',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots'
  ]
})
