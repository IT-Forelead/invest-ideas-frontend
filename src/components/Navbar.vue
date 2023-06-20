<script setup>
import $ from 'jquery';
import i18n from '../i18n.js'
import { useI18n } from 'vue-i18n'
import { onMounted, ref, watch } from 'vue'
import { useDropDownStore } from '../store/dropdown.store'
import { useDarkModeStore } from '../store/darkMode.store'
import { onClickOutside } from '@vueuse/core'
import { useDark, useToggle } from "@vueuse/core";
import LangTranslaterIcon from '../components/Icons/LangTranslaterIcon.vue'

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
  currentLang.value = localStorage.getItem('lang') || 'en'
  document.getElementsByTagName('title')[0].innerHTML = t('title')
  $(document).scroll(() => {
    if ($(document).scrollTop() > 0) {
      top.value = false;
    } else {
      top.value = true;
    }
  })
})

</script>
<template>
  <header class="relative top-0 z-50 p-4 flex items-center w-full bg-black/10">
    <div class="container flex flex-row items-center justify-center px-4 mx-auto">
      <div class="flex items-center justify-center space-x-2">
        <img src="/images/logo.png" alt="logo" class="w-12" />
        <span
          class="hidden font-bold leading-none text-gray-600 md:block md:text-xl xl:text-2xl dark:text-white whitespace-nowrap">
          Invest Ideas
        </span>
      </div>
      <nav class="flex items-center justify-center flex-auto w-full">
        <ul class="flex justify-center space-x-2 p-0 m-0">
          <li>
            <a href="/"
              class="block px-2 text-base text-white transition duration-200 bg-transparent cursor-pointer hover:text-gray-100">
              <span>Home</span>
            </a>
          </li>
          <li>
            <a href="/"
              class="block px-2 text-base text-white transition duration-200 bg-transparent cursor-pointer hover:text-gray-400">
              <span>Projects</span>
            </a>
          </li>
          <li>
            <a href="/"
              class="block px-2 text-base text-white transition duration-200 bg-transparent cursor-pointer hover:text-gray-400">
              <span>Ideas</span>
            </a>
          </li>
          <li>
            <a href="/"
              class="block px-2 text-base text-white transition duration-200 bg-transparent cursor-pointer hover:text-gray-400">
              <span>Services</span>
            </a>
          </li>
          <li>
            <a href="/"
              class="block px-2 text-base text-white transition duration-200 bg-transparent cursor-pointer hover:text-gray-400">
              <span>Contact us</span>
            </a>
          </li>
        </ul>
      </nav>

      <div class="flex items-center justify-center space-x-4">
        <div
          class="flex items-center text-sm justify-between w-36 px-3 mr-4 py-1 transition bg-transparent text-center text-gray-400 whitespace-nowrap border border-gray-400 border-solid rounded-md cursor-pointer hover:border-gray-400 hover:text-gray-400">
          <span>English</span>
          <LangTranslaterIcon class="w-6 h-6 text-gray-400" />
        </div>
        <div
          class="text-base text-white transition duration-500 bg-transparent cursor-pointer hover:text-gray-400 whitespace-nowrap">
          Sign in
        </div>
        <div
          class="px-3 py-1 transition bg-transparent text-center text-white whitespace-nowrap border border-white border-solid rounded-md cursor-pointer hover:border-gray-400 hover:text-gray-400">
          Sign up
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped></style>
