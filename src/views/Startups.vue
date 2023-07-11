<script setup>
import { computed } from '@vue/reactivity'
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import CaretRightIcon from '../assets/icons/CaretRightIcon.vue'
import { supabase } from '../lib/supabaseClient'
import { useCategoryStore } from '../store/category.store'

const router = useRouter()

const categories = computed(() => {
  return useCategoryStore().categories
})

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
  <section class="bg-[#0D1117]">
    <div class="container px-6 mx-auto pt-24 pb-16">
      <h1 class="text-5xl font-semibold text-white mt-6 mb-6">
        Startups
      </h1>
      <div class="text-xl font-normal max-w-4xl text-gray-500 mb-12">
        Startups currently being worked on
      </div>
      <div class="grid grid-cols-7 gap-8">
        <div class="col-span-2">
          <div class="p-6 space-y-6 bg-[#161B22] border border-[#30363D] rounded-xl">
            <h3 class="pb-2 text-xl font-semibold text-[#e6edf3] border-b border-[#30363D]">Categories</h3>
            <ul class="space-y-2">
              <li v-for="(category, idx) in categories" :key="idx" class="flex items-center space-x-1">
                <CaretRightIcon class="w-6 h-6 text-[#7d8590]" />
                <span class="text-lg font-normal text-[#e6edf3]">{{ category?.name }}</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-span-5 grid grid-cols-2 gap-4">
          <div class="p-4 transition-all duration-500 bg-[#161B22] border border-[#30363D] rounded-xl space-y-4">
            <div class="flex items-center justify-between">
              <div class="text-base text-[#7d8590]">Xususiy biznesni avtomatlashtirish</div>
              <div class="text-base text-[#7d8590]">30/06/2023 17:57</div>
            </div>
            <div class="text-xl font-extrabold text-[#e6edf3] cursor-pointer">
              Workout
            </div>
            <div class="text-base text-[#e6edf3]">
              Trenerovkaxonalarni ichki boshqaruvini aftomatlashtirish startapi
            </div>
            <div class="inline-block py-1 px-3 rounded-full bg-green-500 text-xs text-white">Ready to use</div>
          </div>
          <div class="p-4 transition-all duration-500 bg-[#161B22] border border-[#30363D] rounded-xl space-y-4">
            <div class="flex items-center justify-between">
              <div class="text-base text-[#7d8590]">Xususiy biznesni avtomatlashtirish</div>
              <div class="text-base text-[#7d8590]">30/06/2023 17:57</div>
            </div>
            <div class="text-xl font-extrabold text-[#e6edf3] cursor-pointer">
              Digital med
            </div>
            <div class="text-base text-[#e6edf3]">
              Xususiy shifoxonalarni ichki boshqaruvini aftomatlashtirish startapi
            </div>
            <div class="inline-block py-1 px-3 rounded-full bg-green-500 text-xs text-white">Ready to use</div>
          </div>
          <div class="p-4 transition-all duration-500 bg-[#161B22] border border-[#30363D] rounded-xl space-y-4">
            <div class="flex items-center justify-between">
              <div class="text-base text-[#7d8590]">Xususiy biznesni avtomatlashtirish</div>
              <div class="text-base text-[#7d8590]">30/06/2023 17:57</div>
            </div>
            <div class="text-xl font-extrabold text-[#e6edf3] cursor-pointer">
              Workout
            </div>
            <div class="text-base text-[#e6edf3]">
              Trenerovkaxonalarni ichki boshqaruvini aftomatlashtirish startapi
            </div>
            <div class="inline-block py-1 px-3 rounded-full bg-green-500 text-xs text-white">Ready to use</div>
          </div>
          <div class="p-4 transition-all duration-500 bg-[#161B22] border border-[#30363D] rounded-xl space-y-4">
            <div class="flex items-center justify-between">
              <div class="text-base text-[#7d8590]">Xususiy biznesni avtomatlashtirish</div>
              <div class="text-base text-[#7d8590]">30/06/2023 17:57</div>
            </div>
            <div class="text-xl font-extrabold text-[#e6edf3] cursor-pointer">
              Digital med
            </div>
            <div class="text-base text-[#e6edf3]">
              Xususiy shifoxonalarni ichki boshqaruvini aftomatlashtirish startapi
            </div>
            <div class="inline-block py-1 px-3 rounded-full bg-green-500 text-xs text-white">Ready to use</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped></style>
