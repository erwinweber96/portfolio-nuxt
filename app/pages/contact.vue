<script setup lang="ts">
import MailIcon from '~~/components/icons/MailIcon.vue'
import SocialLinks from '~~/components/SocialLinks.vue'
import FreelancerIcon from '~~/components/icons/FreelancerIcon.vue'
import UpworkIcon from '~~/components/icons/UpworkIcon.vue'
import FiverrIcon from '~~/components/icons/FiverrIcon.vue'
</script>

<template>
  <div class="max-w-7xl mx-auto px-6 py-32">
    <div class="space-y-16">
      <div class="text-center space-y-4">
        <h1
          class="text-5xl font-bold bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent"
        >
          Contact Form
        </h1>
        <p class="text-xl text-gray-400 max-w-2xl mx-auto">Let's get in touch.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="p-6 rounded-xl cursor-pointer transition-all bg-white/5">
          <div class="flex items-center gap-4 mb-4">
            <div class="p-3 bg-pink-500/20 rounded-lg">
              <MailIcon class="w-6"></MailIcon>
            </div>
            <div>
              <h3 class="text-xl font-bold">Email</h3>
              <p class="text-sm text-gray-400">For detailed inquiries and project discussions</p>
            </div>
          </div>
          <div class="text-lg font-medium text-pink-500">erwinweber96 [at] live.com</div>
        </div>

        <div class="p-6 rounded-xl cursor-pointer transition-all bg-white/5">
          <h2 class="text-2xl font-bold mb-6">Connect on Social</h2>
          <SocialLinks />
        </div>

        <div class="p-6 rounded-xl cursor-pointer transition-all bg-white/5 col-span-2">
          <div class="flex items-center gap-4 mb-4">
            <div class="p-3 bg-pink-500/20 rounded-lg">
              <MailIcon class="w-6"></MailIcon>
            </div>
            <div>
              <h3 class="text-xl font-bold">Freelancing</h3>
              <p class="text-sm text-gray-400">
                Feel free to contact me on the platforms I'm currently freelancing on.
              </p>
            </div>
          </div>
          <div class="text-lg font-medium text-pink-500">
            <div class="flex gap-2">
              <a
                href="https://www.freelancer.com/u/erwinweber"
                target="_blank"
                class="p-2 bg-white/10 rounded-full hover:bg-white/20 text-white"
              >
                <FreelancerIcon class="w-5 mx-auto my-auto"></FreelancerIcon>
              </a>
              <a
                href="https://www.upwork.com/freelancers/~01f03722cdd1e3b892"
                target="_blank"
                class="p-2 bg-white/10 rounded-full hover:bg-white/20 text-white"
              >
                <UpworkIcon class="w-5 mx-auto my-auto"></UpworkIcon>
              </a>
              <a
                href="https://www.fiverr.com/erwinweber"
                target="_blank"
                class="p-2 bg-white/10 rounded-full hover:bg-white/20 text-white"
              >
                <FiverrIcon class="w-5 mx-auto my-auto"></FiverrIcon>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="max-w-2xl mx-auto">
        <form class="space-y-6" method="post" action="https://api.web3forms.com/submit">
          <input type="hidden" name="access_key" value="3e51c2ce-b93d-426c-b720-58003d1aa30d" />
          <input type="hidden" name="context" value="erwinweber" />
          <div class="grid grid-cols-2 gap-6">
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Your Name"
              class="bg-white/5 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Your Email"
              class="bg-white/5 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>
          <textarea
            name="message"
            id="message"
            placeholder="Your Message"
            rows="{4}"
            class="w-full bg-white/5 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <button
            type="submit"
            class="w-full bg-pink-500 text-white py-3 rounded-lg font-medium hover:bg-pink-600 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
