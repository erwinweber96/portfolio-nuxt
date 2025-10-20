<script setup lang="ts">
import type { Project } from '~~/types/Project'
import ProjectCard from '~~/components/ProjectCard.vue'

const { path } = useRoute()
const description: string =
  'Explore my portfolio of creative works spanning web development, music production, and design projects.'
const title: string = 'Projects | erwinweber.io'

useHead({
  title: title,
  meta: [
    { name: 'description', content: description },
    { name: 'keywords', content: title },
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'canonical', content: 'https://erwinweber.io/' + path }
  ]
})

//TODO: replace with store or something similar
//TODO: cdn or some image module
const projects: Project[] = [
  {
    title: 'Neuronoir',
    description:
      'Indie record label with dark and heavy music made in Romania. Home of Pâenil Era, Sylvanshine, Vaarcloc and more.',
    image: 'meta-neuro2.png',
    link: 'https://neuronoir.art',
    category: 'web'
  },
  {
    title: 'Merchnode',
    description:
      'Merchnode handles everything from ecommerce setup to order fulfillment, so you can focus on making music while we manage the production and logistics.',
    image: 'meta-merchnode.png',
    link: 'https://merchnode.io',
    category: 'web'
  },
  {
    title: 'Pâenil Era',
    description:
      'Representing an anagram of the romanian words ‘Pâlnie Rea’, Pâenil Era is a post-black metal project from Timisoara, Romania, which started in 2012 initially under the name Signatura Rerum.',
    image: 'paenil.jpg',
    link: 'https://linktr.ee/paenil.era',
    category: 'music'
  },
  {
    title: 'Poster Maker',
    description: 'Create a poster in seconds for your show or tour!',
    image: 'postermaker.png',
    link: 'https://postermaker.erwinweber.io',
    category: 'web'
  },
  {
    title: 'Vaarcloc',
    description:
      'VAARCLOC is a post metal solo project initiated by myself in 2011. Released 2 EPs and numerous singles in the past, varying from calmer post rock pieces to more extreme compositions.',
    image: 'vaarcloc.jpg',
    link: 'https://linktr.ee/vaarcloc',
    category: 'music'
  },
  {
    title: 'Soulshedder - Hereditas Naturae',
    description:
      'Soulshedder is a bulgarian post-black metal solo project. My job was to arrange the drum parts and to mix and master the full-length album entitled "Hereditas Naturae".',
    image: 'soulshedder.jpg',
    link: 'https://soulshedder.bandcamp.com/album/hereditas-naturae',
    category: 'audio'
  },
  {
    title: 'Hilde - Sous les pavés, la crasse',
    description:
      'Hilde is a french black metal solo project. My job was to arrange the drum parts based on a pre-production version, setup guitar processing for guitars and bass, and mix and master the project.',
    image: 'hilde.jpg',
    link: 'https://hildefr.bandcamp.com/track/sous-les-pav-s-la-crasse',
    category: 'audio'
  },
  {
    title: 'Atlantic - Black Sands',
    description:
      'Atlantic is an irish atmospheric black metal project. My job was to arrange the drum parts, setup additional processing for layering heavy guitars and bass, and mix and master the album.',
    image: 'atlantic.jpg',
    link: 'https://atlantic-music.bandcamp.com/album/black-sands',
    category: 'audio'
  },
  {
    title: 'Geardown.gg',
    description:
      'Geardown.gg (formerly esac.gg) was an esports platform for Trackmania, that centralized information about the competitive scene and hosted tournament organization features.',
    image: 'geardown.png',
    link: '#',
    category: 'web'
  }
]

enum ProjectCategoryType {
  All = 'all',
  Web = 'web',
  Music = 'music',
  Audio = 'audio'
}

const category: Ref<ProjectCategoryType> = ref<ProjectCategoryType>(ProjectCategoryType.All)
const filteredProjects: Ref<Project[]> = ref(projects)

const filterCategory = (filteredCategory: ProjectCategoryType) => {
  category.value = filteredCategory
  filteredProjects.value =
    category.value === 'all'
      ? projects
      : projects.filter((project) => project.category === category.value)
}

const getCategoryClass = (buttonCategory: ProjectCategoryType) => {
  return `px-4 py-2 rounded-full ${category.value === buttonCategory ? 'bg-pink-500' : 'bg-white/5 hover:bg-white/10'}`
}
</script>

<template>
  <div>
    <div class="pt-5">
      <div class="max-w-7xl mx-auto px-6 py-24 text-center">
        <h1 class="text-5xl font-bold mb-6">My Projects</h1>
        <p class="text-xl text-gray-400 max-w-2xl mx-auto">
          {{ description }}
        </p>
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-6 py-16">
      <div class="flex gap-4 mb-8">
        <button
          v-for="(type, index) in Object.values(ProjectCategoryType)"
          :key="index"
          :class="getCategoryClass(type)"
          @click="filterCategory(type)"
        >
          {{ type.charAt(0).toUpperCase() + type.slice(1) }}
        </button>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProjectCard
          v-for="(filteredProject, index) in filteredProjects"
          :key="index"
          :project="filteredProject"
        />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
