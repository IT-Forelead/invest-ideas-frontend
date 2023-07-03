<script setup>
import { reactive, ref } from 'vue';
import { supabase } from '../lib/supabaseClient'
import { Toaster, toast } from 'vue-sonner'
import SpinnersRingResizeIcon from '../components/Icons/SpinnersRingResizeIcon.vue'

const isLoading = ref(false)

const submitForm = reactive({
  email: '',
  password: '',
  confirmPassword: '',
  firstname: '',
  lastname: '',
})

const clearForm = () => {
  submitForm.firstname = ''
  submitForm.lastname = ''
  submitForm.email = ''
  submitForm.password = ''
  submitForm.confirmPassword = ''
}

const signUp = async () => {
  if (!submitForm.firstname) {
    toast.error('Please enter your firstname!')
  } else if (!submitForm?.lastname) {
    toast.error('Please enter your lastname!')
  } else if (!submitForm.email) {
    toast.error('Please enter your email!')
  } else if (!submitForm.password) {
    toast.error('Please enter your password!')
  } else if (!submitForm.confirmPassword) {
    toast.error('Please enter password again!')
  } else if (submitForm.password != submitForm.confirmPassword) {
    toast.error('The passwords do not match!')
  } else {
    isLoading.value = true
    await supabase.auth.signUp({
      email: submitForm.email,
      password: submitForm.password,
    }).then(async (res) => {
      toast.success(
        'You have successfully registered!',
        { description: 'An activation link has been sent to your email.' }
      )
      isLoading.value = false
      await supabase
        .from('profiles')
        .upsert({ id: res.data.user.id, firstname: submitForm.firstname, lastname: submitForm.lastname })
        .select()
      clearForm()
    }).catch((err) => {
      toast.error('Error while registering! Please try again.')
      isLoading.value = false
    })

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
        <h1 class="text-center text-2xl font-medium tracking-tight text-[#e6edf3]">
          Sign up for an account
        </h1>
        <p class="mt-3 text-center text-lg text-[#e6edf3]">
          Already registered?
          <router-link to="/login" class="text-blue-500">Sign in</router-link>
          to your account.
        </p>
      </div>
      <div
        class="-mx-4 mt-10 flex-auto items-center rounded-xl bg-[#161B22] z-[2] px-4 shadow-2xl shadow-gray-500/10 sm:mx-0 sm:flex-none sm:rounded-5xl sm:p-24">
        <div class="grid grid-cols-2 gap-6">
          <div>
            <label for="firstname" class="mb-2 block text-base font-semibold text-[#e6edf3]">
              First name
            </label>
            <input v-model="submitForm.firstname" type="text" id="firstname"
              class="border appearance-none text-sm rounded-lg block w-full p-3  bg-[#0D1117] border-[#30363D] placeholder-gray-400 text-white focus:outline-none  focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your first name">
          </div>
          <div>
            <label for="lastname" class="mb-2 block text-base font-semibold text-[#e6edf3]">
              Last name
            </label>
            <input v-model="submitForm.lastname" type="text" id="lastname"
              class="border appearance-none text-sm rounded-lg block w-full p-3  bg-[#0D1117] border-[#30363D] placeholder-gray-400 text-white focus:outline-none  focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your last name">
          </div>
          <div class="col-span-full">
            <label for="email" class="mb-2 block text-base font-semibold text-[#e6edf3]">
              Email address
            </label>
            <input v-model="submitForm.email" type="email" id="email"
              class="border appearance-none text-sm rounded-lg block w-full p-3  bg-[#0D1117] border-[#30363D] placeholder-gray-400 text-white focus:outline-none  focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your email">
          </div>
          <div class="col-span-full">
            <label for="password" class="mb-2 block text-base font-semibold text-[#e6edf3]">
              Password
            </label>
            <input v-model="submitForm.password" type="password" id="password"
              class="border appearance-none text-sm rounded-lg block w-full p-3  bg-[#0D1117] border-[#30363D] placeholder-gray-400 text-white focus:outline-none  focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your password">
          </div>
          <div class="col-span-full">
            <label for="confirmPassword" class="mb-2 block text-base font-semibold text-[#e6edf3]">
              Confirm password
            </label>
            <input v-model="submitForm.confirmPassword" type="password" id="confirmPassword"
              class="border appearance-none text-sm rounded-lg block w-full p-3  bg-[#0D1117] border-[#30363D] placeholder-gray-400 text-white focus:outline-none  focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your password">
          </div>
        </div>
        <button v-if="!isLoading" @click="signUp()"
          class="inline-flex items-start justify-center rounded-lg p-2.5 text-base font-semibold bg-blue-600 text-white hover:bg-blue-800 mt-8 w-full">
          Get started
        </button>
        <button v-else
          class="inline-flex items-center justify-center space-x-2 rounded-lg p-2.5 text-base font-semibold bg-blue-800 text-white mt-8 w-full cursor-default">
          <SpinnersRingResizeIcon class="w-6 h-6 text-white" />
          <span>Get started</span>
        </button>
      </div>
    </div>
  </main>
</template>