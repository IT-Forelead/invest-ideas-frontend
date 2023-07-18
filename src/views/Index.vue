<script setup>
import { defineAsyncComponent } from 'vue'

const HeaderSection = defineAsyncComponent(() =>
  import('../components/Home/HeaderSection.vue')
)
const IdeasSection = defineAsyncComponent(() =>
  import('../components/Home/IdeasSection.vue')
)
const StartupsSection = defineAsyncComponent(() =>
  import('../components/Home/StartupsSection.vue')
)
const DeploymentSection = defineAsyncComponent(() =>
  import('../components/Home/DeploymentSection.vue')
)
const FooterSection = defineAsyncComponent(() =>
  import('../components/Home/FooterSection.vue')
)
</script>

<template>
  <HeaderSection />
  <IdeasSection />
  <StartupsSection />
  <DeploymentSection />
  <FooterSection />
</template>

<style scoped></style>
