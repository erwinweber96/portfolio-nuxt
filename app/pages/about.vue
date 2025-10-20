<script setup lang="ts">
import DocumentIcon from '~~/components/icons/DocumentIcon.vue'
import LaravelIcon from '~~/components/icons/LaravelIcon.vue'
import VueIcon from '~~/components/icons/VueIcon.vue'
import ReactIcon from '~~/components/icons/ReactIcon.vue'
import TailwindIcon from '~~/components/icons/TailwindIcon.vue'
import MysqlIcon from '~~/components/icons/MysqlIcon.vue'
import AwsIcon from '~~/components/icons/AwsIcon.vue'
import GolangIcon from '~~/components/icons/GolangIcon.vue'
import TypescriptIcon from '~~/components/icons/TypescriptIcon.vue'
import PhpIcon from '~~/components/icons/PhpIcon.vue'
import GraphqlIcon from '~~/components/icons/GraphqlIcon.vue'
import PostgresIcon from '~~/components/icons/PostgresIcon.vue'
import NodejsIcon from '~~/components/icons/NodejsIcon.vue'

//TODO: replace gradient with component

const { path } = useRoute()
const description: string =
  "I'm Erwin Weber, a multifaceted DIY enthusiast with a passion for music, technology, and creative solutions. With years of experience in the music industry and web development, I've dedicated myself to supporting artists and creatives with their technical needs."
const title: string = 'About | erwinweber.io'

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
</script>

<template>
  <div class="bg-black relative">
    <div class="max-w-7xl mx-auto px-6 py-32 relative z-10">
      <h1 class="text-4xl font-bold mb-8">About Me</h1>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div class="space-y-6">
          <p class="text-lg text-gray-300">
            {{ description }}
          </p>

          <p class="text-lg text-gray-300">
            I've pursued music for half of my life. Over a decade of hands-on, self-taught
            exploration, gaining a broad understanding of the industry's creative and technical
            demands. That's why I'm passionate about sharing what I've learned in ways that are
            affordable and practical, especially for independent creators who are figuring things
            out like I did.
          </p>

          <div class="h-1 w-32 bg-gradient-to-r from-red-500 to-pink-500 my-8"></div>

          <h2 class="text-2xl font-bold">Skills & Expertise</h2>
          <ul class="list-disc list-inside text-gray-300 space-y-2">
            <li>Web Development & Design</li>
            <li>Music Production</li>
            <li>Ecommerce Solutions</li>
            <li>Mixing & Mastering</li>
          </ul>
        </div>

        <div class="space-y-8">
          <div class="bg-white/5 p-6 rounded-lg">
            <h3 class="text-xl font-bold mb-4 inline-block">Experience</h3>
            <a
              class="float-right text-pink-500"
              href="https://drive.google.com/file/d/1J3kO5mG3_QijsY7RRIgrV6EoV5xszlUG/view?usp=sharing"
              target="_blank"
            >
              View CV
              <DocumentIcon></DocumentIcon>
            </a>
            <div class="space-y-4">
              <div>
                <h4 class="font-medium">Freelancing</h4>
                <p class="text-gray-400">2022 - Present</p>
              </div>
              <div>
                <h4 class="font-medium">PlentyONE</h4>
                <p class="text-gray-400">2023 - 2025</p>
              </div>
              <div>
                <h4 class="font-medium">Own3d.tv</h4>
                <p class="text-gray-400">2022 - 2022</p>
              </div>
              <div>
                <h4 class="font-medium">Plentymarkets</h4>
                <p class="text-gray-400">2019 - 2022</p>
              </div>
              <div>
                <h4 class="font-medium">Nokia</h4>
                <p class="text-gray-400">2016 - 2017</p>
              </div>
            </div>
          </div>

          <div class="bg-white/5 p-6 rounded-lg">
            <h3 class="text-xl font-bold mb-4">Education</h3>
            <div class="space-y-4">
              <div>
                <h4 class="font-medium">Informatics (2015 - 2018)</h4>
                <p class="text-gray-400">Polytechnic University of Timisoara</p>
              </div>
            </div>
          </div>

          <div class="bg-white/5 p-6 rounded-lg">
            <h3 class="text-xl font-bold mb-4">Tech Stack</h3>
            <div class="grid grid-cols-4 gap-4">
              <div class="flex flex-col items-center">
                <div class="w-12 h-12 flex items-center justify-center bg-white/10 rounded-lg mb-2">
                  <LaravelIcon></LaravelIcon>
                </div>
                <span class="text-xs text-gray-400">Laravel</span>
              </div>

              <div class="flex flex-col items-center">
                <div class="w-12 h-12 flex items-center justify-center bg-white/10 rounded-lg mb-2">
                  <VueIcon></VueIcon>
                </div>
                <span class="text-xs text-gray-400">Vue</span>
              </div>

              <div class="flex flex-col items-center">
                <div class="w-12 h-12 flex items-center justify-center bg-white/10 rounded-lg mb-2">
                  <ReactIcon></ReactIcon>
                </div>
                <span class="text-xs text-gray-400">React</span>
              </div>

              <div class="flex flex-col items-center">
                <div class="w-12 h-12 flex items-center justify-center bg-white/10 rounded-lg mb-2">
                  <TailwindIcon></TailwindIcon>
                </div>
                <span class="text-xs text-gray-400">Tailwind</span>
              </div>

              <div class="flex flex-col items-center">
                <div class="w-12 h-12 flex items-center justify-center bg-white/10 rounded-lg mb-2">
                  <MysqlIcon></MysqlIcon>
                </div>
                <span class="text-xs text-gray-400">MySQL</span>
              </div>

              <div class="flex flex-col items-center">
                <div class="w-12 h-12 flex items-center justify-center bg-white/10 rounded-lg mb-2">
                  <AwsIcon></AwsIcon>
                </div>
                <span class="text-xs text-gray-400">AWS</span>
              </div>

              <div class="flex flex-col items-center">
                <div class="w-12 h-12 flex items-center justify-center bg-white/10 rounded-lg mb-2">
                  <GolangIcon></GolangIcon>
                </div>
                <span class="text-xs text-gray-400">Golang</span>
              </div>

              <div class="flex flex-col items-center">
                <div class="w-12 h-12 flex items-center justify-center bg-white/10 rounded-lg mb-2">
                  <TypescriptIcon></TypescriptIcon>
                </div>
                <span class="text-xs text-gray-400">TypeScript</span>
              </div>

              <div class="flex flex-col items-center">
                <div class="w-12 h-12 flex items-center justify-center bg-white/10 rounded-lg mb-2">
                  <PhpIcon></PhpIcon>
                </div>
                <span class="text-xs text-gray-400">PHP</span>
              </div>

              <div class="flex flex-col items-center">
                <div class="w-12 h-12 flex items-center justify-center bg-white/10 rounded-lg mb-2">
                  <GraphqlIcon></GraphqlIcon>
                </div>
                <span class="text-xs text-gray-400">GraphQL</span>
              </div>

              <div class="flex flex-col items-center">
                <div class="w-12 h-12 flex items-center justify-center bg-white/10 rounded-lg mb-2">
                  <PostgresIcon></PostgresIcon>
                </div>
                <span class="text-xs text-gray-400">PostgreSQL</span>
              </div>

              <div class="flex flex-col items-center">
                <div class="w-12 h-12 flex items-center justify-center bg-white/10 rounded-lg mb-2">
                  <NodejsIcon></NodejsIcon>
                </div>
                <span class="text-xs text-gray-400">Node.js</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
