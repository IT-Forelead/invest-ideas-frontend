<script setup>
import CaretRightIcon from '../assets/icons/CaretRightIcon.vue'
import IdeaItem from '../components/Items/IdeaItem.vue'
import { supabase } from '../lib/supabaseClient'
import { onMounted } from 'vue'
import { computed } from '@vue/reactivity'
import { useIdeaStore } from '../store/idea.store'
import { useCategoryStore } from '../store/category.store'

const ideas = computed(() => {
  return useIdeaStore().ideas
})

const categories = computed(() => {
  return useCategoryStore().categories
})

async function getIdeas() {
  await supabase
    .from('ideas')
    .select(`
      *,
      categories ( * ),
      profiles ( * ),
      idea_likes ( * )
    `).then(async (res) => {
      useIdeaStore().clearStore()
      useIdeaStore().setIdeas(res.data)
    })
}

async function getIdeasByCategoryId(categoryId) {
  await supabase
    .from('ideas')
    .select(`
      *,
      categories ( * ),
      profiles ( * ),
      idea_likes ( * )
    `)
    .eq('category_id', categoryId)
    .then(async (res) => {
      useIdeaStore().clearStore()
      useIdeaStore().setIdeas(res.data)
    })
}

async function getCategories() {
  const { data } = await supabase
    .from('categories')
    .select()
  useCategoryStore().clearStore()
  useCategoryStore().setCategories(data)
}

onMounted(() => {
  getIdeas()
  getCategories()
})
</script>
<template>
  <section class="bg-[#0D1117]">
    <div class="container px-6 mx-auto pt-24 pb-16">
      <h1 class="text-5xl font-semibold text-white mt-6 mb-6">
        Ideas in discussion
      </h1>
      <div class="text-xl font-normal max-w-4xl text-gray-500 mb-12">
        Ideas currently being discussed and voted on
      </div>
      <div class="grid grid-cols-7 gap-8">
        <div class="col-span-2">
          <div class="p-6 space-y-6 bg-[#161B22] border border-[#30363D] rounded-xl sticky top-24">
            <h3 class="pb-2 text-xl font-semibold text-[#e6edf3] border-b border-[#30363D]">Categories</h3>
            <ul class="space-y-2">
              <li v-for="(category, idx) in categories" :key="idx" class="flex items-center space-x-1">
                <CaretRightIcon class="w-6 h-6 text-[#7d8590]" />
                <span @click="getIdeasByCategoryId(category?.id)" class="text-lg font-normal transition-all duration-500 text-[#e6edf3] hover:text-[#0167F3] cursor-pointer">
                  {{ category?.name }}
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div v-if="ideas.length > 0" class="col-span-5 space-y-6">
          <IdeaItem v-for="(idea, idx) in ideas" :key="idx" :idea="idea" />
        </div>
        <div v-else class="col-span-5 flex items-center justify-center p-6 bg-[#161B22] border border-[#30363D] rounded-xl">
          <div class="text-base font-medium text-red-500">Ideas do not exist</div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped></style>
