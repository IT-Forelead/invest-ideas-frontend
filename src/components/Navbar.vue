<script setup>
import $ from 'jquery';
import i18n from '../i18n.js'
import { useI18n } from 'vue-i18n'
import { onMounted, ref, watch } from 'vue'
import { supabase } from '../lib/supabaseClient'
import { useDropDownStore } from '../store/dropdown.store'
import { useDarkModeStore } from '../store/darkMode.store'
import { onClickOutside, useDark, useToggle } from '@vueuse/core'
import SettingSixIcon from '../components/Icons/SettingSixIcon.vue'
import UserCircleIcon from '../components/Icons/UserCircleIcon.vue'
import SignOutIcon from '../components/Icons/SignOutIcon.vue'
import { useAuthStore } from '../store/auth.store'
import { useRouter } from 'vue-router'

const { t } = useI18n()
const router = useRouter()

const top = ref(true)
const languageDropDown = ref(null)
const darkModeDropDown = ref(null)
const ProfileDropDown = ref(null)

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

onClickOutside(ProfileDropDown, () => {
  if (useDropDownStore().isOpenProfileDropDown) {
    useDropDownStore().toggleProfile()
  }
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

const signOut = async () => {
  const { error } = await supabase.auth.signOut()
  if (error) {
    toast.error('Email or password incorrect. Please try again!')
    isLoading.value = false
  } else {
    localStorage.clear()
    useAuthStore().setToken('')
    useAuthStore().setUser({})
    router.push('/')
    if (useDropDownStore().isOpenProfileDropDown) {
      useDropDownStore().toggleProfile()
    }
  }
}
</script>
<template>
  <header
    class="fixed top-0 z-50 px-2 py-4 flex items-center w-full transition-all bg-transparent border-0 border-transparent"
    :class="{
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
              <a href="#"
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
              <a href="#"
                class="block px-2 text-base leading-none text-white transition duration-200 bg-transparent border-0 rounded-full cursor-pointer hover:text-gray-400">
                <span>Projects</span>
              </a>
            </li>
            <li>
              <a href="#"
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
      <div v-if="useAuthStore().user?.id" class="relative w-60" ref="ProfileDropDown">
        <div @click="useDropDownStore().toggleProfile()"
          class="flex items-center select-none justify-between text-[#e6edf3] hover:text-gray-400 relative cursor-pointer space-x-2">
          <UserCircleIcon class="w-7 h-7" />
          <div class="text-base text-left font-medium whitespace-nowrap">
            {{ useAuthStore().user?.email }}
          </div>
        </div>
        <ul v-if="useDropDownStore().isOpenProfileDropDown"
          class="absolute w-full bg-[#0D1117] text-[#e6edf3] shadow rounded-md z-20 top-14 right-0 divide-y divide-[#161b22] border border-[#161b22]">
          <li class="flex items-center hover:bg-[#161B22] cursor-pointer p-2 space-x-2 rounded-t-md">
            <SettingSixIcon class="w-5 h-5" />
            <span>Settings</span>
          </li>
          <li @click="signOut()" class="flex items-center hover:bg-[#161b22] cursor-pointer p-2 space-x-2 rounded-b-md">
            <SignOutIcon class="w-5 h-5z" />
            <span>Sign out</span>
          </li>
        </ul>
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
