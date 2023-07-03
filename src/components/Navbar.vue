<script setup>
import $ from 'jquery';
import i18n from '../i18n.js'
import { useI18n } from 'vue-i18n'
import { computed, onMounted, ref, watch } from 'vue'
import { useDropDownStore } from '../store/dropdown.store'
import { useDarkModeStore } from '../store/darkMode.store'
import { onClickOutside } from '@vueuse/core'
import { useDark, useToggle } from "@vueuse/core";
import LangTranslaterIcon from '../components/Icons/LangTranslaterIcon.vue'
import { useAuthStore } from '../store/auth.store';

const { t } = useI18n()

const top = ref(true)
const languageDropDown = ref(null)
const darkModeDropDown = ref(null)

const isDark = useDark();
const toggleDark = useToggle(isDark);

onClickOutside(languageDropDown, () => {
  useDropDownStore().closeLanguageDropDown()
})

onClickOutside(darkModeDropDown, () => {
  useDropDownStore().closeDarkModeDropDown()
})

const currentLang = ref('')

const translateLanguage = (lang) => {
  if (lang === 'en') {
    return 'English'
  } else if (lang === 'ru') {
    return 'Русский'
  } else if (lang === 'uz') {
    return "O'zbek"
  }
}

const changeLang = (lang) => {
  currentLang.value = lang
  localStorage.setItem('lang', lang)
  i18n.global.locale.value = lang
  document.getElementsByTagName('title')[0].innerHTML = t('title')
  useDropDownStore().closeLanguageDropDown()
}

// Dark & Light mode
watch(() => isDark.value, (val) => {
  useDarkModeStore().setCurrentMode(val);
})

onMounted(() => {
  $(document).scroll(() => {
    if ($(document).scrollTop() > 0) {
      top.value = false;
    } else {
      top.value = true;
    }
  })
})

const isLogin = computed(() => useAuthStore().user)

</script>
<template>

<header class="fixed top-0 z-50 px-2 py-4 flex items-center w-full transition-all bg-transparent border-0 border-transparent" :class="{
    'bg-white/70 dark:bg-black/70 backdrop-blur-sm shadow-sm border-b border-solid border-[#eaeaea] dark:border-[#333]': !top,
  }">
    <div class="container flex flex-row items-center justify-center px-4 mx-auto">
      <div class="flex items-center justify-between flex-1 mr-auto">
        <div class="flex items-center justify-center space-x-2">
          <img src="/images/logo.png" alt="logo" class="w-12" />
          <span
            class="hidden font-bold leading-none text-gray-600 md:block md:text-xl xl:text-2xl dark:text-white whitespace-nowrap">
            Invest Ideas
          </span>
        </div>
        <div></div>
      </div>
      <div class="flex items-center justify-center flex-auto w-full">
        <nav class="flex items-center justify-center w-full">
          <ul class="flex justify-center space-x-2 p-0 m-0">
            <li>
              <a href="/"
                class="block px-2 text-base leading-none text-white transition duration-200 bg-transparent border-0 rounded-full cursor-pointer hover:text-gray-400">
                <span>Home</span>
              </a>
            </li>
            <li>
              <a href="/"
                class="block px-2 text-base leading-none text-white transition duration-200 bg-transparent border-0 rounded-full cursor-pointer hover:text-gray-400">
                <span>Services</span>
              </a>
            </li>
            <li>
              <a href="/ideas"
                class="block px-2 text-base leading-none text-white transition duration-200 bg-transparent border-0 rounded-full cursor-pointer hover:text-gray-400">
                <span>Ideas</span>
              </a>
            </li>
            <li>
              <a href="/#"
                class="block px-2 text-base leading-none text-white transition duration-200 bg-transparent border-0 rounded-full cursor-pointer hover:text-gray-400">
                <span>Projects</span>
              </a>
            </li>
            <li>
              <a href="/#services"
                class="block px-2 text-base leading-none text-white transition duration-200 bg-transparent border-0 rounded-full cursor-pointer hover:text-gray-400">
                <span>About</span>
              </a>
            </li>
            <li>
              <a href="#"
                class="block px-2 text-base leading-none text-white transition duration-200 bg-transparent border-0 rounded-full cursor-pointer hover:text-gray-400">
                <span>Contact us</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div v-if="isLogin" class="flex items-center justify-center flex-1 space-x-5">
          <div
            class="text-base text-white transition duration-500 bg-transparent cursor-pointer hover:text-gray-400 whitespace-nowrap">
            {{ isLogin?.email }}
          </div>
      </div>
      <div v-else class="flex items-center justify-center flex-1 space-x-5">
        <router-link to="/login">
          <div
            class="text-base text-white transition duration-500 bg-transparent cursor-pointer hover:text-gray-400 whitespace-nowrap">
            Sign in
          </div>
        </router-link>
        <router-link to="/sign-up">
          <div
            class="px-3 py-1 transition bg-transparent text-center text-white whitespace-nowrap border border-white border-solid rounded-md cursor-pointer hover:border-gray-400 hover:text-gray-400">
            Sign up
          </div>
        </router-link>
      </div>
    </div>
  </header>
</template>

<style scoped></style>
