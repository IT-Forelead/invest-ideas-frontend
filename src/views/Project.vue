<script setup>
import { computed, onMounted, ref } from 'vue'
import { Toaster, toast } from 'vue-sonner'
import UserIcon from '../assets/icons/UserIcon.vue'
import { supabase } from '../lib/supabaseClient'
import { useProjectStore } from '../store/project.store'
import { useStartupStore } from '../store/startup.store'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const startupLanguages = ref([])

const selectedProject = computed(() => {
  return useProjectStore().selectedProject
})

const contributors = computed(() => {
  return useStartupStore().contributors
})

async function getProjectById() {
  await supabase
    .from('projects')
    .select(`
      *,
      project_categories ( * ),
      ideas ( * ),
      startups ( * )
    `)
    .eq('id', route.params.id)
    .then(async (res) => {
      useProjectStore().setSelectedProject(res.data[0])
      getContributors(res.data[0]?.startup_id)
      getStartupLanguages(res.data[0]?.startup_id)
    })
}

async function getContributors(startupId) {
  await supabase
    .from('contributors')
    .select(`
      *,
      profiles ( * )
    `)
    .eq('startup_id', startupId)
    .then(async (res) => {
      useStartupStore().clearStore()
      useStartupStore().setContributors(res.data)
    })
}

async function getStartupLanguages(startupId) {
  await supabase
    .from('startup_languages')
    .select(`*`)
    .eq('startup_id', startupId)
    .order('percent', { ascending: false })
    .then(async (res) => {
      startupLanguages.value = res?.data
    })
}

const selectIdea = (ideaId) => {
  router.push(`/idea/${ideaId}`)
}

const selectStartup = (startupId) => {
  router.push(`/startup/${startupId}`)
}

onMounted(() => {
  getProjectById()
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
    <div v-if="selectedProject?.id" class="container px-6 mx-auto pt-24 pb-16">
      <h1 class="text-5xl font-semibold text-white mt-6 mb-6">
        Project
      </h1>
      <div class="text-xl font-normal max-w-4xl text-gray-500 mb-12">
        Pomplete information about the project
      </div>
      <div class="grid grid-cols-7 gap-8">
        <div class="col-span-2 space-y-8">
          <div class="p-6 space-y-6 bg-[#161B22] border border-[#30363D] rounded-xl">
            <h3 class="pb-2 text-xl font-semibold text-[#e6edf3] border-b border-[#30363D]">Information</h3>
            <ul class="space-y-1">
              <li class="flex items-center space-x-2">
                <span class="text-sm font-normal text-[#7d8590]">Name:</span>
                <span class="text-lg font-normal text-[#e6edf3]">
                  {{ selectedProject?.name }}
                </span>
              </li>
              <li class="flex items-center space-x-2">
                <span class="text-sm font-normal text-[#7d8590]">Category:</span>
                <span class="text-lg font-normal text-[#e6edf3]">
                  {{ selectedProject?.project_categories?.name }}
                </span>
              </li>
              <li class="flex items-center space-x-2">
                <span class="text-sm font-normal text-[#7d8590]">Idea:</span>
                <span @click="selectIdea(selectedProject?.ideas?.id)" class="text-lg font-normal transition-all duration-500 text-[#e6edf3] hover:text-[#0167F3] cursor-pointer">
                  {{ selectedProject?.ideas?.title }}
                </span>
              </li>
              <li class="flex items-center space-x-2">
                <span class="text-sm font-normal text-[#7d8590]">Startup:</span>
                <span @click="selectStartup(selectedProject?.startups?.id)" class="text-lg font-normal transition-all duration-500 text-[#e6edf3] hover:text-[#0167F3] cursor-pointer">
                  {{ selectedProject?.startups?.name }}
                </span>
              </li>
              <li class="flex items-center space-x-2">
                <span class="text-sm font-normal text-[#7d8590]">Demo link:</span>
                <a :href="selectedProject?.github_link" target="_blank" class="text-lg font-normal transition-all duration-500 text-[#e6edf3] hover:text-[#0167F3] cursor-pointer">
                  {{ selectedProject?.demo_link.substring(7, 1000) }}
                </a>
              </li>
              <li class="flex items-center space-x-2">
                <span class="text-sm font-normal text-[#7d8590]">Currently in use:</span>
                <span class="text-lg font-normal text-[#e6edf3]">
                  {{ selectedProject?.currently_in_use }}
                </span>
              </li>
            </ul>
          </div>

          <div v-if="contributors.length > 0" class="p-6 space-y-6 bg-[#161B22] border border-[#30363D] rounded-xl">
            <h3 class="pb-2 text-xl font-semibold text-[#e6edf3] border-b border-[#30363D]">Contributors</h3>
            <div v-for="(contributor, idx) in contributors" :key="idx" class="flex items-center space-x-2">
              <div class="flex items-center justify-center bg-[#30363D]/80 w-8 h-8 rounded-full border border-[#30363D]">
                <UserIcon class="h-6 w-6 text-blue-500" />
              </div>
              <div class="text-lg font-normal text-[#e6edf3]">
                {{ contributor?.profiles?.firstname + ' ' + contributor?.profiles?.lastname }}
              </div>
            </div>
          </div>

          <div v-if="startupLanguages.length > 0" class="p-6 space-y-6 bg-[#161B22] border border-[#30363D] rounded-xl">
            <h3 class="pb-2 text-xl font-semibold text-[#e6edf3] border-b border-[#30363D]">Languages</h3>
            <div class="flex items-center h-2 rounded-lg w-full overflow-hidden divide-x divide-[#30363D]">
              <div v-for="(sl, idx) in startupLanguages" :key="idx" class="h-2.5" :class="`w-[${sl?.percent}%]`"
                :style="`background-color: ${sl?.color};`"></div>
            </div>
            <div class="flex flex-wrap items-center">
              <div v-for="(startupLang, idx) in startupLanguages" :key="idx" class="flex items-center space-x-1 mr-4">
                <div class="w-2.5 h-2.5 rounded-full mr-1" :style="`background-color: ${startupLang?.color};`"></div>
                <div class="text-white text-lg">{{ startupLang?.name }}</div>
                <div class="text-gray-600 text-md">{{ startupLang?.percent }}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-span-5 space-y-6">
          <div class="p-6 transition-all duration-500 bg-[#161B22] border border-[#30363D] rounded-xl space-y-4">
            <div class="text-3xl font-extrabold text-[#e6edf3]">
              {{ selectedProject?.title }}
            </div>
            <div class="text-xl text-[#e6edf3] ql-editor" v-html="selectedProject?.description"></div>
          </div>
          <img class="w-full rounded-md" :src="`/images/projects/${selectedProject?.image_url}`" alt="#">
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped></style>
