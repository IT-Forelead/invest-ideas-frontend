<script setup>
import { onMounted, reactive } from 'vue'
import { computed } from '@vue/reactivity'
import { Toaster, toast } from 'vue-sonner'
import CrownSimpleIcon from '../assets/icons/CrownSimpleIcon.vue'
import UploadIcon from '../assets/icons/UploadIcon.vue'
import { supabase } from '../lib/supabaseClient'
import { useAuthStore } from '../store/auth.store'
import { useCategoryStore } from '../store/category.store'

const categories = computed(() => {
  return useCategoryStore().categories
})

const submitForm = reactive({
  categoryId: '',
  title: '',
  text: ''
})

const clearForm = () => {
  submitForm.categoryId = ''
  submitForm.title = ''
  submitForm.text = ''
}

const addIdea = async () => {
  if (!useAuthStore().user?.id) {
    toast.error('You must register to add an idea!')
  } else if (!submitForm.title) {
    toast.error('Please enter title!')
  } else if (!submitForm.categoryId) {
    toast.error('Please select category!')
  } else if (submitForm.text.length < 300) {
    toast.error('Descraption is very short! Minimum 300 symbol.')
  } else {
    let { error } = await supabase
      .from('ideas')
      .insert({
        user_id: useAuthStore().user?.id,
        category_id: submitForm.categoryId,
        title: submitForm.title,
        text: submitForm.text,
      })
    if (error) {
      toast.error('Error while adding idea! Please try again.')
    } else {
      toast.success('Idea added successfully!')
      clearForm()
    }
  }
}

async function getCategories() {
  const { data } = await supabase
    .from('categories')
    .select()
  useCategoryStore().clearStore()
  useCategoryStore().setCategories(data)
}

onMounted(() => {
  getCategories()
})
</script>

<template>
  <Toaster richColors closeButton :toastOptions="{
    style: {
      background: '#161B22',
      border: '1px solid #30363D',
      color: '#e6edf3'
    },
  }" />

  <section class="bg-[#0D1117]">
    <div class="container px-6 mx-auto pt-24 pb-16">

      <h1 class="text-5xl font-semibold text-white mt-11 mb-6">
        Add idea
      </h1>
      <div class="text-xl font-normal max-w-4xl text-gray-500 mb-12">
        Describe your idea more fully and clearly, if the content of your idea is suitable, it will be activated by the
        administration
      </div>
      <div class="grid grid-cols-7 gap-8">

        <div class="col-span-5 space-y-6 bg-[#161B22] p-8 border border-solid border-[#30363D] rounded-xl box-shadow">
          <div class="max-w-3xl">
            <label class="block mb-2 text-xl font-medium text-[#e6edf3]">
              Title:
              <span class="text-red-500">*</span>
            </label>
            <input type="text" v-model="submitForm.title"
              class="border text-sm rounded-lg block w-full p-2.5  bg-[#0D1117] border-[#30363D] placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter idea's title">
          </div>

          <div class="max-w-3xl">
            <label class="block mb-2 text-xl font-medium text-[#e6edf3]">
              Category:
              <span class="text-red-500">*</span>
            </label>
            <select v-model="submitForm.categoryId"
              class="border text-sm rounded-lg block w-full p-2.5  bg-[#0D1117] border-[#30363D] placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500">
              <option value="" selected>Choose a category</option>
              <option v-for="(category, idx) in categories" :key="idx" :value="category?.id">
                {{ category?.name }}
              </option>
            </select>
          </div>

          <div class="max-w-3xl">
            <label class="block mb-2 text-xl font-medium text-[#e6edf3]">
              Text:
              <span class="text-red-500">*</span>
            </label>
            <QuillEditor v-model:content="submitForm.text" content-type="html" toolbar="full" placeholder="Write an article..." />
          </div>
          <div class="max-w-3xl">
            <label class="block mb-2 text-xl font-medium text-[#e6edf3]">
              Upload file:
            </label>
            <label for="dropzone-file"
              class="flex items-center justify-between w-full rounded-lg border-2 border-dashed border-[#30363D] bg-[#0D1117] py-4 px-8 cursor-pointer">
              <div class="flex items-center space-x-6">
                <UploadIcon class="p-2 bg-[#30363D]/50 rounded-lg h-10 w-10 text-blue-500" />
                <div>
                  <h2 class="text-xl font-medium text-[#e6edf3] tracking-wide">Upload a file</h2>
                  <p class="text-gray-500 tracking-wide">Upload or darg & drop your file DOC.</p>
                </div>
              </div>
              <div class="px-6 py-1 bg-[#30363D]/50 text-[#e6edf3] font-medium rounded-full">
                Browse
              </div>
              <input id="dropzone-file" type="file" class="hidden" />
            </label>
          </div>
          <div class="space-x-4 pt-4">
            <button @click="clearForm()"
              class="w-36 py-2 px-4 rounded-lg text-white text-base bg-gray-600 cursor-pointer hover:bg-gray-800">
              Reset
            </button>
            <button @click="addIdea()"
              class="w-36 py-2 px-4 rounded-lg text-white text-base bg-blue-600 cursor-pointer hover:bg-blue-800">
              Send
            </button>
          </div>
        </div>
        <div
          class="col-span-2 flex flex-col justify-center space-y-12 p-9 text-white  bg-[#161B22] bg-[url('/images/bg-linerbg.png')] bg-cover border border-solid border-[#30363D] rounded-xl box-shadow">
          <div class="space-y-2">
            <CrownSimpleIcon class="p-2 bg-[#30363D]/80 rounded-lg h-16 w-16 text-blue-500" />
            <h3 class="text-2xl font-semibold">Premium</h3>
            <h4 class="text-xl mb-28">
              If you want to implement your idea faster by financing, we offer you our Premium tariff.
            </h4>
          </div>
          <div class="inline-block w-56 px-6 py-2 bg-[#e6edf3] text-black font-medium rounded-full cursor-pointer">
            Get more information
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped></style>
