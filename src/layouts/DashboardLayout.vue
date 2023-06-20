<script setup>
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
</script>
<template>
  <Navbar />
  <router-view v-slot="{ Component }">
    <component :is="Component" />
  </router-view>
  <Footer />
</template>
