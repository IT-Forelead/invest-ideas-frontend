<script setup>
import { computed } from '@vue/reactivity'
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { supabase } from '../lib/supabaseClient'
import { useCategoryStore } from '../store/category.store'
import { useProjectStore } from '../store/project.store'
import CaretRightIcon from '../assets/icons/CaretRightIcon.vue'
import ArrowSquareOutIcon from '../assets/icons/ArrowSquareOutIcon.vue'

const router = useRouter()

const categories = computed(() => {
  return useCategoryStore().projectCategories
})

const projects = computed(() => {
  return useProjectStore().projects
})

async function getCategories() {
  const { data } = await supabase
    .from('project_categories')
    .select()
  useCategoryStore().clearStore()
  useCategoryStore().setProjectCategories(data)
}

async function getProjects() {
  await supabase
    .from('projects')
    .select(`*`)
    .then(async (res) => {
      useProjectStore().clearStore()
      useProjectStore().setProjects(res.data)
    })
}

async function getProjectsByCategoryId(categoryId) {
  await supabase
    .from('projects')
    .select(`*`)
    .eq('category_id', categoryId)
    .then(async (res) => {
      useProjectStore().clearStore()
      useProjectStore().setProjects(res.data)
    })
}

const selectProject = (project) => {
  router.push(`/project/${project.id}`)
}

onMounted(() => {
  getCategories()
  getProjects()
})

</script>
<template>
  <section class="bg-[#0D1117]">
    <div class="container px-6 mx-auto pt-24 pb-16">
      <h1 class="text-5xl font-semibold text-white mt-6 mb-6">
        Projects
      </h1>
      <div class="text-xl font-normal max-w-4xl text-gray-500 mb-12">
        Ready-to-use projects now
      </div>
      <div class="grid grid-cols-7 gap-8">
        <div class="col-span-2">
          <div class="p-6 space-y-6 bg-[#161B22] border border-[#30363D] rounded-xl">
            <h3 class="pb-2 text-xl font-semibold text-[#e6edf3] border-b border-[#30363D]">Categories</h3>
            <ul class="space-y-2">
              <li v-for="(category, idx) in categories" :key="idx" class="flex items-center space-x-1">
                <CaretRightIcon class="w-6 h-6 text-[#7d8590]" />
                <span @click="getProjectsByCategoryId(category?.id)" class="text-lg font-normal transition-all duration-500 text-[#e6edf3] hover:text-[#0167F3] cursor-pointer">
                  {{ category?.name }}
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div v-if="projects.length > 0" class="col-span-5 grid grid-cols-3 gap-8">
          <div @click="selectProject(project)" v-for="(project, idx) in projects" :key="idx"
            class="w-full h-52 bg-[#161B22] border relative group border-solid border-[#30363D] transition-all duration-500 rounded-lg shadow-[0_5px_10px_rgba(0,0,0,0.12)] cursor-pointer">
            <div
              class="absolute flex items-center justify-center inset-0 bg-black/20 border border-solid border-[#939AFF] rounded-lg duration-300 opacity-0 group-hover:opacity-100">
              <div
                class="absolute inline-flex items-center space-x-2 top-1/2 left-1/2 bg-[#939AFF] p-2 px-8 rounded-3xl -translate-x-1/2 -translate-y-1/2">
                <span class="text-black font-semibold text-lg">Preview</span>
                <ArrowSquareOutIcon class="w-5 h-5" />
              </div>
            </div>
            <img :src="`/images/projects/${project?.image_url}`" class="w-full h-40 bg-cover rounded-t-md" alt="#" />
            <div class="flex items-center p-3 text-base text-white">{{ project?.name }}</div>
          </div>
        </div>
        <div v-else class="col-span-5 flex items-center justify-center p-6 bg-[#161B22] border border-[#30363D] rounded-xl">
          <div class="text-base font-medium text-red-500">Projects do not exist</div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped></style>
