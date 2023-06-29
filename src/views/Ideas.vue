<script setup>
import ThumbsUpIcon from '../components/Icons/ThumbsUpIcon.vue'
import CaretRightIcon from '../components/Icons/CaretRightIcon.vue'
import { supabase } from '../lib/supabaseClient'
import { onMounted, ref } from 'vue';

const ideas = ref([])
const categories = ref([])

async function getIdeas() {
  const { data } = await supabase
  .from('ideas')
  .select()
  ideas.value = data
}

async function getCategories() {
  const { data } = await supabase
  .from('categories')
  .select()
  categories.value = data
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
                <sapn class="text-lg font-normal text-[#e6edf3]">{{ category?.name }}</sapn>
              </li>
            </ul>
          </div>

        </div>
        <div class="col-span-5 space-y-6">
          <div v-for="i in 5" :key="i"
            class="p-4 transition-all duration-500 bg-[#161B22] border border-[#30363D] rounded-xl space-y-4">
            <div class="flex items-center justify-between">
              <div class="text-base text-[#7d8590]">Xususiy biznesni avtomatlashtirish</div>
              <div class="text-base text-[#7d8590]">26.07.2023</div>
            </div>
            <div class="text-xl font-extrabold text-[#e6edf3]">
              <router-link to="/idea">
                Futbol maydonlarini avtomatlashtirish
              </router-link>
            </div>
            <div class="text-base text-[#e6edf3]">
              Hozirda xususiy mini futbol maydonlari avtomatlashtirilmagan. Shuning uchun gazon egalariga ham
              mijozlarga ham ko'plab noqulaykilar keltirmoqda. Agar mijozlar onlayn platformadan tanlangan
              hududida qancha futbol maydonlari borligini va ular qaysi vaqtlarda bo'sh yoki bandligini bila
              olishi, bo'sh maydonni onlayn band qilish imkoniyatlari bo'lsa ajoyib qulaylik yaratilgan bo'lardi...
            </div>
            <div class="flex items-center space-x-2">
              <ThumbsUpIcon class="w-5 h-5 text-[#7d8590]" />
              <span class="text-sm text-[#7d8590]">5 371</span>
            </div>
          </div>
        </div>
      </div>


    </div>
  </section>
</template>

<style scoped></style>
