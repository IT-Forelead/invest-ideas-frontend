import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import './vue-quill.css'
import 'flowbite'
import router from './router'
import DashboardLayout from './layouts/DashboardLayout.vue'
import InfiniteLoading from 'v3-infinite-loading'
import 'v3-infinite-loading/lib/style.css'
import App from './App.vue'
import VueTheMask from 'vue-the-mask'
import Vue3Marquee from 'vue3-marquee'
import money from 'v-money3'
import i18n from './i18n.js'
import { MotionPlugin } from '@vueuse/motion'
import VueApexCharts from 'vue3-apexcharts'
import VueCookies from 'vue-cookies'
import { QuillEditor } from '@vueup/vue-quill'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(router)
app.use(money)
app.use(i18n)
app.use(VueTheMask)
app.use(MotionPlugin)
app.use(VueApexCharts)
app.use(Vue3Marquee)
app.use(VueCookies)
app.component('dashboard-layout', DashboardLayout)
app.component('infinite-loading', InfiniteLoading)
app.component('QuillEditor', QuillEditor)
app.mount('#app')