<script setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { supabase } from '../lib/supabaseClient'
import { Toaster, toast } from 'vue-sonner'
import SpinnersRingResizeIcon from '../components/Icons/SpinnersRingResizeIcon.vue'
import { useAuthStore } from '../store/auth.store'

const router = useRouter()
const isLoading = ref(false)

const submitForm = reactive({
  email: '',
  password: ''
})

const clearForm = () => {
  submitForm.email = ''
  submitForm.password = ''
}

const signIn = async () => {
  if (!submitForm.email) {
    toast.error('Please enter your email!')
  } else if (!submitForm?.password) {
    toast.error('Please enter your password!')
  } else {
    isLoading.value = true
    const { data, error } = await supabase.auth.signInWithPassword({
      email: submitForm.email,
      password: submitForm.password,
    })
    if (data.user) {
      localStorage.setItem('data', JSON.stringify(data))
      useAuthStore().setUser(JSON.parse(localStorage.getItem('data'))?.user)
      useAuthStore().setToken(JSON.parse(localStorage.getItem('data'))?.session)
      router.push('/')
      isLoading.value = false
      clearForm()
    }
    if (error) {
      toast.error('Email or password incorrect. Please try again!')
      isLoading.value = false
    }
  }
}
</script>
<template>
  <Toaster richColors closeButton :toastOptions="{
    style: {
      background: '#161B22',
      border: '1px solid #30363D',
      color: '#e6edf3'
    },
  }" />

  <main class="flex items-center h-screen overflow-hidden bg-[#0D1117]">
    <div class="mx-auto flex w-full max-w-2xl flex-col px-4 sm:px-6">
      <router-link to="/">
        <div class="flex items-center justify-center space-x-2">
          <img src="/images/logo.png" alt="logo" class="w-12" />
          <div class="font-bold leading-none text-2xl text-white whitespace-nowrap">
            Invest Ideas
          </div>
        </div>
      </router-link>
      <div class="relative mt-12 sm:mt-16 z-[1]">
        <svg viewBox="0 0 1090 1090" aria-hidden="true" fill="none" preserveAspectRatio="none" width="1090" height="1090"
          class="absolute -top-7 left-1/2 -z-10 h-[788px] -translate-x-1/2 stroke-gray-600/30 [mask-image:linear-gradient(to_bottom,white_20%,transparent_75%)] sm:-top-9 sm:h-auto">
          <circle cx="545" cy="545" r="544.5"></circle>
          <circle cx="545" cy="545" r="480.5"></circle>
          <circle cx="545" cy="545" r="416.5"></circle>
          <circle cx="545" cy="545" r="352.5"></circle>
        </svg>
        <h1 class="text-center text-2xl font-medium tracking-tight text-[#e6edf3]">Sign in to account</h1>
        <p class="mt-3 text-center text-lg text-[#e6edf3]">
          Don’t have an account?
          <router-link to="/sign-up" class="text-blue-500">Sign up</router-link>
          for a free trial.
        </p>
      </div>
      <div
        class="-mx-4 z-[2] mt-10 flex-auto bg-[#161B22] px-4 py-10 shadow-2xl shadow-gray-500/10 sm:mx-0 sm:flex-none sm:rounded-5xl sm:p-24 rounded-xl">
        <div class="space-y-6">
          <div>
            <label for="login" class="mb-2 block text-base font-semibold text-[#e6edf3]">
              Email address
            </label>
            <input v-model="submitForm.email" type="email" id="login"
              class="border appearance-none text-sm rounded-lg block w-full p-2.5  bg-[#0D1117] border-[#30363D] placeholder-gray-400 text-white focus:outline-none  focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your login">
          </div>
          <div>
            <label for="password" class="mb-2 block text-base font-semibold text-[#e6edf3]">
              Password
            </label>
            <input v-model="submitForm.password" type="password" id="password"
              class="border appearance-none text-sm rounded-lg block w-full p-2.5  bg-[#0D1117] border-[#30363D] placeholder-gray-400 text-white focus:outline-none  focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your password">
          </div>
        </div>
        <button v-if="!isLoading" @click="signIn()"
          class="inline-flex items-center justify-center rounded-lg p-2.5 text-base font-semibold bg-blue-600 text-white hover:bg-blue-800 mt-8 w-full cursor-pointer"
          type="submit">
          Sign in to account
        </button>
        <button v-else
          class="inline-flex items-center justify-center space-x-2 rounded-lg p-2.5 text-base font-semibold bg-blue-800 text-white mt-8 w-full cursor-default">
          <SpinnersRingResizeIcon class="w-6 h-6 text-white" />
          <span>Sign in to account</span>
        </button>
      </div>
    </div>
  </main>
</template>