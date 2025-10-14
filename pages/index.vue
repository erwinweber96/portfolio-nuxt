<script setup lang="ts">
import SocialLinks from '../components/SocialLinks.vue'
import ProjectCard from '../components/ProjectCard.vue'

type Project = {
  id: number
  name: string
}

const erwin: string = 'enter url'
const projects: Array<Project> = [
  {
    id: 1,
    name: 'test'
  }
]
const highlightedSkills: Array<string> = ['Web Development', 'Music Production', 'Ecommerce']
</script>

<template>
  <div class="bg-black relative">
    <main class="max-w-7xl mx-auto px-6 relative z-10">
      <section class="grid z-10 grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh] pt-32">
        <!--        <motion.div-->
        <!--            initial="opacity: 0, x: -20"-->
        <!--            animate="opacity: 1, x: 0"-->
        <!--            transition="duration: 0.5"-->
        <!--            class="relative z-10 my-auto"-->
        <!--        >-->
        <div
          :style="`'--image-url': url(${erwin})`"
          class="bg-[image:var(--image-url)] bg-cover py-32 max-sm:bg-none"
        >
          <h1 class="text-8xl max-sm:text-6xl font-bold mb-8">
            Erwin
            <br />
            Weber
          </h1>
          <SocialLinks />
        </div>
        <!--        </motion.div>-->

        <!--        <motion.div-->
        <!--            class="space-y-6 relative z-10 my-auto"-->
        <!--            initial="opacity: 0, x: 20"-->
        <!--            animate="opacity: 1, x: 0"-->
        <!--            transition="duration: 0.5, delay: 0.2"-->
        <!--        >-->
        <div class="h-1 w-32 bg-gradient-to-r from-red-500 to-pink-500" />
        <h2 class="text-4xl">Multifaceted DIY Enthusiast</h2>
        <p class="text-gray-400 text-lg">
          From custom tools to hands-on services, I support bands, labels, and creatives behind the
          scenes, so they can focus on their craft.
        </p>
        <div class="flex gap-4 pt-7">
          <NuxtLink
            to="/contact"
            class="px-8 py-3 bg-gradient-to-r from-red-500 to-pink-500 rounded-full font-medium hover:opacity-90"
          >
            Contact
          </NuxtLink>
          <NuxtLink
            to="/about"
            class="px-8 py-3 border border-gray-700 rounded-full font-medium hover:bg-white/5"
          >
            About
          </NuxtLink>
        </div>
        <!--        </motion.div>-->
      </section>

      <section class="py-24">
        <!--        <motion.div-->
        <!--            initial="opacity: 0, y: 20"-->
        <!--            while-in-view="opacity: 1, y: 0"-->
        <!--            transition="duration: 0.5"-->
        <!--            viewport="once: true"-->
        <!--        >-->
        <h2 class="text-3xl font-bold mb-12">Featured Projects</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div v-for="project in projects" :key="project.id">
            <ProjectCard :project="project" />
          </div>
        </div>
        <div class="text-center mt-12">
          <NuxtLink
            to="/projects"
            class="inline-block px-8 py-3 border border-gray-700 rounded-full font-medium hover:bg-white/5"
          >
            View All Projects
          </NuxtLink>
        </div>
        <!--        </motion.div>-->
      </section>

      <section class="py-24">
        <!--        <motion.div-->
        <!--            initial="opacity: 0, y: 20"-->
        <!--            while-in-view="opacity: 1, y: 0"-->
        <!--            transition="duration: 0.5"-->
        <!--            viewport="once: true"-->
        <!--        >-->
        <div class="relative overflow-hidden rounded-xl p-1">
          <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-pink-500" />
          <div class="flex flex-col md:flex-row bg-white/5 rounded-lg p-8">
            <div
              class="md:w-1/3 flex flex-col justify-center items-center text-center mb-8 md:mb-0"
            >
              <h2 class="text-3xl font-bold mb-4">About Me</h2>
              <div
                class="h-32 w-32 rounded-full bg-gradient-to-r from-gray-700 to-gray-500 p-[2px] mb-4"
              >
                <img
                  src="/erwin2.png"
                  alt="Erwin Weber"
                  class="h-full w-full rounded-full object-cover"
                />
              </div>
              <NuxtLink
                to="/about"
                class="px-8 py-3 mt-3 border border-gray-700 rounded-full font-medium hover:bg-white/5 inline-flex items-center"
              >
                <span>More</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="{2}"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </NuxtLink>
            </div>

            <div class="md:w-2/3 md:pl-8 md:border-l border-gray-800 my-auto">
              <p class="text-lg text-gray-300 mb-6">
                I've pursued music for half of my life. Over a decade of hands-on, self-taught
                exploration, gaining a broad understanding of the industry's creative and technical
                demands. That's why I'm passionate about sharing what I've learned in ways that are
                affordable and practical, especially for independent creators who are figuring
                things out like I did.
              </p>

              <div class="flex flex-wrap gap-3 mb-6">
                <div v-for="(skill, index) in highlightedSkills" :key="index">
                  <span class="px-3 py-1 bg-white/5 rounded-full text-sm">
                    {{ skill }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--        </motion.div>-->
      </section>
    </main>
  </div>
</template>

<style scoped></style>
