<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';

const { t, locale } = useI18n()
const defaultLayout = 'login'
const { currentRoute } = useRouter()
const layout = computed(() => `${currentRoute.value.meta.layout || defaultLayout}-layout`)

</script>

<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<style scoped></style>
