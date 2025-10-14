<template>
  <div class="min-h-screen bg-black text-white flex flex-col">
    <Navbar></Navbar>
    <div class="flex-grow">
      <NuxtPage></NuxtPage>
    </div>
    <Footer></Footer>
  </div>
</template>
<script setup lang="ts">
import Navbar from '~~/components/Navbar.vue'
import Footer from '~~/components/Footer.vue'
</script>
