<script setup>
import ThumbsUpIcon from '../assets/icons/ThumbsUpIcon.vue'
import ChatCircleIcon from '../assets/icons/ChatCircleIcon.vue'
import EyeIcon from '../assets/icons/EyeIcon.vue'
import CaretRightIcon from '../assets/icons/CaretRightIcon.vue'
import { supabase } from '../lib/supabaseClient'
import { onMounted } from 'vue'
import { computed } from '@vue/reactivity'
import moment from 'moment'
import { useIdeaStore } from '../store/idea.store'
import { useCategoryStore } from '../store/category.store'
import { useRouter } from 'vue-router'

const router = useRouter()

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
      profiles ( * )
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
      profiles ( * )
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

const selectIdea = (idea) => {
  router.push(`/idea/${idea.id}`)
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
          <div class="p-6 space-y-6 bg-[#161B22] border border-[#30363D] rounded-xl">
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
          <div v-for="(idea, idx) in ideas" :key="idx"
            class="p-4 transition-all duration-500 bg-[#161B22] border border-[#30363D] rounded-xl space-y-4">
            <div class="flex items-center justify-between">
              <div class="text-base text-[#7d8590]">{{ idea.categories.name }}</div>
              <div class="text-base text-[#7d8590]">{{ moment(idea.created_at).format('DD/MM/YYYY H:mm') }}</div>
            </div>
            <div @click="selectIdea(idea)" class="text-xl font-extrabold text-[#e6edf3] cursor-pointer">
              {{ idea.title }}
            </div>
            <div class="text-base text-[#e6edf3]">
              {{ idea.text.substring(0, 300) + '...' }}
            </div>
            <div class="flex items-center space-x-3">
              <div class="flex items-center space-x-1">
                <ThumbsUpIcon class="w-5 h-5 text-[#7d8590]" />
                <span class="text-sm text-[#7d8590]">{{ idea.likes_count }}</span>
              </div>
              <div class="flex items-center space-x-1">
                <ChatCircleIcon class="w-5 h-5 text-[#7d8590]" />
                <span class="text-sm text-[#7d8590]">{{ idea.comments_count }}</span>
              </div>
              <div class="flex items-center space-x-1">
                <EyeIcon class="w-5 h-5 text-[#7d8590]" />
                <span class="text-sm text-[#7d8590]">{{ idea.views_count }}</span>
              </div>
            </div>
          </div>
        </div>
        <div v-else class="col-span-5 flex items-center justify-center p-6 bg-[#161B22] border border-[#30363D] rounded-xl">
          <div class="text-base font-medium text-red-500">Ideas do not exist</div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped></style>
