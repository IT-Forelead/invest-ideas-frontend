<script setup>
import { defineAsyncComponent } from 'vue';

const Navbar = defineAsyncComponent(() =>
  import('../components/Navbar.vue')
)
const Footer = defineAsyncComponent(() =>
  import('../components/Footer.vue')
)
</script>
<template>
  <Navbar />
  <router-view v-slot="{ Component }">
    <component :is="Component" />
  </router-view>
  <Footer />
</template>
