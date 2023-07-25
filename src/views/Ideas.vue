<script setup>
import { computed } from '@vue/reactivity'
import { onMounted, ref } from 'vue'
import IdeaItem from '../components/Items/IdeaItem.vue'
import { supabase } from '../lib/supabaseClient'
import { useCategoryStore } from '../store/category.store'
import { useIdeaStore } from '../store/idea.store'

const selectedCatIds = ref([])

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
      idea_votes ( * )
    `)
    .then(async (res) => {
      useIdeaStore().clearStore()
      useIdeaStore().setIdeas(res.data)
    })
}

async function getIdeasByFilter() {
  await supabase
    .from('ideas')
    .select(`
      *,
      categories ( * ),
      profiles ( * ),
      idea_votes ( * )
    `)
    .in('category_id', selectedCatIds.value)
    .then(async (res) => {
      useIdeaStore().clearStore()
      useIdeaStore().setIdeas(res.data)
    })
}

async function clearFrom() {
  selectedCatIds.value = []
  getIdeas()
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

const getCheckboxVal = (id) => {
  if (selectedCatIds.value.includes(id)) {
    selectedCatIds.value = selectedCatIds.value.filter(a => a !== id)
  } else {
    selectedCatIds.value.push(id)
  }
}
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
            <h3 class="pb-2 text-xl font-semibold text-[#e6edf3] border-b border-[#30363D]">Filters</h3>
            <ul class="space-y-2">
              <li v-for="(category, idx) in categories" :key="idx">
                <div @click="getCheckboxVal(category.id)" class="flex items-center space-x-3">
                  <input :id="`idea-${idx}`" :checked="selectedCatIds.includes(category?.id)" type="checkbox" class="w-5 h-5 text-indigo-600 rounded focus:ring-0">
                  <span
                    class="text-lg font-normal transition-all duration-500 text-[#e6edf3] hover:text-[#0167F3] cursor-pointer">
                    {{ category?.name }}
                  </span>
                </div>
              </li>
            </ul>
            <div class="space-x-4 pt-4">
              <button @click="clearFrom()"
                class="w-36 py-2 px-4 rounded-lg text-white text-base bg-gray-600 cursor-pointer hover:bg-gray-800">
                Reset filter
              </button>
              <button @click="getIdeasByFilter()"
                class="w-36 py-2 px-4 rounded-lg text-white text-base bg-blue-600 cursor-pointer hover:bg-blue-800">
                Apply filter
              </button>
            </div>
          </div>
        </div>
        <div v-if="ideas.length > 0" class="col-span-5 space-y-6">
          <IdeaItem v-for="(idea, idx) in ideas" :key="idx" :idea="idea" />
        </div>
        <div v-else
          class="col-span-5 flex items-center justify-center p-6 bg-[#161B22] border border-[#30363D] rounded-xl">
          <div class="text-base font-medium text-red-500">Ideas do not exist</div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped></style>
