<script setup>
import { useRouter } from 'vue-router'
import { computed, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { useAuthStore } from './store/auth.store.js'

const { t, locale } = useI18n()
const defaultLayout = 'login'
const { currentRoute } = useRouter()
const layout = computed(() => `${currentRoute.value.meta.layout || defaultLayout}-layout`)

onMounted(() => {
  useAuthStore().setUser(JSON.parse(localStorage.getItem('data'))?.user)
  useAuthStore().setToken(JSON.parse(localStorage.getItem('data'))?.session)
})
</script>

<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<style scoped></style>
