<script setup>
import { computed } from '@vue/reactivity'
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import CaretRightIcon from '../assets/icons/CaretRightIcon.vue'
import { supabase } from '../lib/supabaseClient'
import { useCategoryStore } from '../store/category.store'
import { useStartupStore } from '../store/startup.store'
import moment from 'moment'

const router = useRouter()

const categories = computed(() => {
  return useCategoryStore().categories
})

const startups = computed(() => {
  return useStartupStore().startups
})

async function getCategories() {
  const { data } = await supabase
    .from('categories')
    .select()
  useCategoryStore().clearStore()
  useCategoryStore().setCategories(data)
}

async function getStartups() {
  await supabase
    .from('startups')
    .select(`
      *,
      categories ( * ),
      profiles ( * ),
      ideas ( * )
    `).then(async (res) => {
      useStartupStore().clearStore()
      useStartupStore().setStartups(res.data)
    })
}

async function getStartupsByCategoryId(categoryId) {
  await supabase
    .from('startups')
    .select(`
      *,
      categories ( * ),
      profiles ( * ),
      ideas ( * )
    `)
    .eq('category_id', categoryId)
    .then(async (res) => {
      useStartupStore().clearStore()
      useStartupStore().setStartups(res.data)
    })
}

const startupStatusTranslate = (status) => {
  switch (status) {
    case 'ready_to_use':
      return 'Ready to use'
    case 'new':
      return 'New'
  }
}

const selectStartup = (startup) => {
  router.push(`/startup/${startup.id}`)
}

onMounted(() => {
  getCategories()
  getStartups()
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
          <div class="p-6 space-y-6 bg-[#161B22] border border-[#30363D] rounded-xl sticky top-24">
            <h3 class="pb-2 text-xl font-semibold text-[#e6edf3] border-b border-[#30363D]">Categories</h3>
            <ul class="space-y-2">
              <li v-for="(category, idx) in categories" :key="idx" class="flex items-center space-x-1">
                <CaretRightIcon class="w-6 h-6 text-[#7d8590]" />
                <span @click="getStartupsByCategoryId(category?.id)" class="text-lg font-normal transition-all duration-500 text-[#e6edf3] hover:text-[#0167F3] cursor-pointer">
                  {{ category?.name }}
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div v-if="startups.length > 0" class="col-span-5 grid grid-cols-2 gap-4">
          <div @click="selectStartup(startup)" v-for="(startup, idx) in startups" :key="idx" class="p-4 transition-all duration-500 bg-[#161B22] border border-[#30363D] rounded-xl space-y-4 cursor-pointer">
            <div class="flex items-center justify-between">
              <div class="text-base text-[#7d8590]">{{ startup?.categories.name }}</div>
              <div class="text-base text-[#7d8590]">{{ moment(startup?.created_at).format('DD/MM/YYYY H:mm') }}</div>
            </div>
            <div class="text-xl font-extrabold text-[#e6edf3]">
              {{ startup?.name }}
            </div>
            <div class="text-base text-[#e6edf3]">
              {{ startup?.description }}
            </div>
            <div class="inline-block py-1 px-3 rounded-full bg-green-500 text-xs text-white">
              {{ startupStatusTranslate(startup?.status) }}
            </div>
          </div>
        </div>
        <div v-else class="col-span-5 flex items-center justify-center p-6 bg-[#161B22] border border-[#30363D] rounded-xl">
          <div class="text-base font-medium text-red-500">Startups do not exist</div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped></style>
