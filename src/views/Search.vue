<script setup>
import { computed } from '@vue/reactivity'
import { onMounted, ref } from 'vue'
import IdeaItem from '../components/Items/IdeaItem.vue'
import { supabase } from '../lib/supabaseClient'
import { useIdeaStore } from '../store/idea.store'

const search = ref('')

const searchTitle = computed(() => {
  return useIdeaStore().searchingTitle
})

const ideas = computed(() => {
  return useIdeaStore().ideas
})

async function getIdeas() {
  if (searchTitle.value) {
    await supabase
      .from('ideas')
      .select(`
        *,
        categories ( * ),
        profiles ( * ),
        idea_votes ( * )
      `)
      .ilike('title', '%' + searchTitle.value + '%')
      .then(async (res) => {
        useIdeaStore().clearStore()
        useIdeaStore().setIdeas(res.data)
      })
  }
}

async function searching() {
  await supabase
    .from('ideas')
    .select(`
      *,
      categories ( * ),
      profiles ( * ),
      idea_votes ( * )
    `)
    .ilike('title', '%' + search.value + '%')
    .then(async (res) => {
      useIdeaStore().clearStore()
      useIdeaStore().setIdeas(res.data)
    })
}

onMounted(() => {
  getIdeas()
  search.value = searchTitle.value
})
</script>
<template>
  <section class="bg-[#0D1117]">
    <div class="container px-6 mx-auto pt-24 pb-16">
      <h1 class="flex justify-center text-5xl font-semibold text-white mt-6 mb-6">
        Search
      </h1>
      <div class="flex justify-center pb-16">
        <input v-model="search" type="text"
          class="rounded-l-md bg-[#0D1117] border text-white border-[#30363D] text-base font-semibold outline-0 h-12 w-2/5 placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Enter title of idea" />
        <button @click="searching()"
          class="flex items-center justify-center w-44 bg-blue-600 whitespace-nowrap rounded-r-md select-none border-0 px-5 h-12 text-base font-bold text-white hover:bg-blue-700">
          Search
        </button>
      </div>
      <div v-if="ideas.length > 0" class="space-y-6">
        <h1 class="text-4xl font-semibold text-white mt-6 mb-6">
          Search result:
        </h1>
        <IdeaItem v-for="(idea, idx) in ideas" :key="idx" :idea="idea" />
      </div>
      <div v-else class="flex items-center justify-center ">
        <div class="text-base font-medium text-red-500">No search results found!</div>
      </div>
    </div>
  </section>
</template>
<style scoped></style>
