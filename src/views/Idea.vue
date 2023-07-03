<script setup>
import ThumbsUpIcon from '../components/Icons/ThumbsUpIcon.vue'
import CrownSimpleIcon from '../components/Icons/CrownSimpleIcon.vue'
import TextBIcon from '../components/Icons/TextBIcon.vue'
import TextItalicIcon from '../components/Icons/TextItalicIcon.vue'
import TextUnderlineIcon from '../components/Icons/TextUnderlineIcon.vue'
import TextAlignCenterIcon from '../components/Icons/TextAlignCenterIcon.vue'
import TextAlignLeftIcon from '../components/Icons/TextAlignLeftIcon.vue'
import TextAlignRightIcon from '../components/Icons/TextAlignRightIcon.vue'
import ArrowBendUpLeftIcon from '../components/Icons/ArrowBendUpLeftIcon.vue'
import ThumbsDownIcon from '../components/Icons/ThumbsDownIcon.vue'
import UserIcon from '../components/Icons/UserIcon.vue'
import { onMounted, computed } from 'vue'
import { supabase } from '../lib/supabaseClient'
import moment from 'moment'
import { useIdeaStore } from '../store/idea.store'

const selectedIdeaId = computed(() => {
  return useIdeaStore().selectedIdeaId
})

const selectedIdea = computed(() => {
  return useIdeaStore().selectedIdea
})

async function getIdeaById() {
  await supabase
    .from('ideas')
    .select(`
      *, 
      categories ( id, name ),
      profiles ( id, firstname, lastname )
    `)
    .eq('id', selectedIdeaId.value)
    .then(async (res) => {
      useIdeaStore().setSelectedIdea(res.data)
    })

}

onMounted(() => {
  getIdeaById()
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
      <div v-for="(si, idx) in selectedIdea" :key="idx" class="grid grid-cols-7 gap-8">
        <div class="col-span-2 space-y-8">
          <div class="p-6 space-y-6 bg-[#161B22] border border-[#30363D] rounded-xl">
            <h3 class="pb-2 text-xl font-semibold text-[#e6edf3] border-b border-[#30363D]">Information</h3>
            <ul class="space-y-1">
              <li class="flex items-center space-x-2">
                <sapn class="text-sm font-normal text-[#7d8590]">Creator:</sapn>
                <sapn class="text-lg font-normal text-[#e6edf3]">
                  {{ si?.profiles?.firstname + ' ' + si?.profiles?.lastname }}
                </sapn>
              </li>
              <li class="flex items-center space-x-2">
                <sapn class="text-sm font-normal text-[#7d8590]">Created at:</sapn>
                <sapn class="text-lg font-normal text-[#e6edf3]">
                  {{ moment(si.created_at).format('DD/MM/YYYY H:mm') }}
                </sapn>
              </li>
              <li class="flex items-center space-x-2">
                <sapn class="text-sm font-normal text-[#7d8590]">Category:</sapn>
                <sapn class="text-lg font-normal text-[#e6edf3]">
                  {{ si?.categories?.name }}
                </sapn>
              </li>
              <li class="flex items-center space-x-2">
                <sapn class="text-sm font-normal text-[#7d8590]">Comentaries:</sapn>
                <sapn class="text-lg font-normal text-[#e6edf3]">
                  {{ si?.comments_count }}
                </sapn>
              </li>
              <li class="flex items-center space-x-2">
                <sapn class="text-sm font-normal text-[#7d8590]">Views:</sapn>
                <sapn class="text-lg font-normal text-[#e6edf3]">
                  {{ si?.views_count }}
                </sapn>
              </li>
              <li class="flex items-center space-x-2">
                <sapn class="text-sm font-normal text-[#7d8590]">Likes:</sapn>
                <sapn class="text-lg font-normal text-[#e6edf3]">
                  {{ si?.likes_count }}
                </sapn>
              </li>
            </ul>
          </div>

          <div class="flex items-center p-6 space-x-4 bg-[#161B22] border border-[#30363D] rounded-xl">
            <div class="text-lg font-normal text-[#e6edf3]">
              Vote for the idea if you think it is useful for the community
            </div>
            <div>
              <ThumbsUpIcon class="w-12 h-12 text-blue-500" />
            </div>
          </div>

          <div
            class="flex flex-col justify-center min-h-[600px] space-y-12 p-9 text-white  bg-[#161B22] bg-[url('/images/bg-linerbg.png')] bg-cover border border-solid border-[#30363D] rounded-xl box-shadow">
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
        <div class="col-span-5 space-y-6">
          <div class="p-6 transition-all duration-500 bg-[#161B22] border border-[#30363D] rounded-xl space-y-4">
            <div class="text-3xl font-extrabold text-[#e6edf3]">
              {{ si?.title }}
            </div>
            <div class="text-xl text-[#e6edf3]">
              {{ si?.text }}
            </div>
          </div>

          <div class="p-6 transition-all duration-500 bg-[#161B22] border border-[#30363D] rounded-xl space-y-4">
            <div class="text-2xl font-medium text-[#e6edf3]">Write a comment</div>
            <div class="bg-[#0D1117] max-w-3xl border border-[#30363D] overflow-hidden rounded-md">
              <div class="flex items-center w-full border-b border-[#30363D] text-xl text-gray-600">
                <button
                  class="flex items-center justify-center outline-none focus:outline-none w-10 h-10 hover:text-indigo-500 active:bg-gray-50">
                  <TextBIcon class="w-5 h-5 text-[#e6edf3]" />
                </button>
                <button
                  class="flex items-center justify-center outline-none focus:outline-none w-10 h-10 hover:text-indigo-500 active:bg-gray-50">
                  <TextItalicIcon class="w-5 h-5 text-[#e6edf3]" />
                </button>
                <button
                  class="flex items-center justify-center outline-none focus:outline-none w-10 h-10 hover:text-indigo-500 active:bg-gray-50">
                  <TextUnderlineIcon class="w-5 h-5 text-[#e6edf3]" />
                </button>
                <div class="w-5"></div>
                <button
                  class="flex items-center justify-center outline-none focus:outline-none w-10 h-10 hover:text-indigo-500 active:bg-gray-50">
                  <TextAlignLeftIcon class="w-5 h-5 text-[#e6edf3]" />
                </button>
                <button
                  class="flex items-center justify-center outline-none focus:outline-none w-10 h-10 hover:text-indigo-500 active:bg-gray-50">
                  <TextAlignCenterIcon class="w-5 h-5 text-[#e6edf3]" />
                </button>
                <button
                  class="flex items-center justify-center outline-none focus:outline-none w-10 h-10 hover:text-indigo-500 active:bg-gray-50">
                  <TextAlignRightIcon class="w-5 h-5 text-[#e6edf3]" />
                </button>
              </div>
              <textarea id="editor" rows="5"
                class="block p-4 w-full text-sm border-0 bg-[#0D1117] focus:ring-0 text-[#e6edf3] placeholder-gray-400"
                placeholder="Write an article..."></textarea>
            </div>
            <button class="w-36 py-1.5 px-4 rounded-lg text-white text-base bg-blue-600 cursor-pointer hover:bg-blue-800">
              Comment
            </button>
          </div>

          <div class="space-y-2">
            <div v-for="i in 5" class="flex items-start space-x-4">
              <UserIcon class="p-2 bg-[#30363D]/80 rounded-full h-14 w-14 text-blue-500 border border-[#30363D]" />
              <div class="w-full bg-[#161B22] rounded-md border border-[#30363D] p-4 space-y-2">
                <div class="flex items-center justify-between">
                  <div class="text-lg font-medium text-[#e6edf3]">Jumaniyozov Surojiddin</div>
                  <div class="text-base text-[#7d8590]">26.07.2023 17:31</div>
                </div>
                <div class="text-xl text-[#e6edf3]">
                  Ajoyib g'oya ekan. Oldindan bron qilingan vaqtda malum miqdorda pul to'lanadigan qilinsa juda ajoyib
                  bo'lardi nazarimda
                </div>
                <div class="flex items-center space-x-4 border-t border-dashed border-[#30363D] pt-2">
                  <div class="flex items-center space-x-2 text-[#7d8590] hover:text-blue-500 cursor-pointer">
                    <ArrowBendUpLeftIcon class="w-5 h-5" />
                    <span class="text-sm">Reply</span>
                  </div>
                  <div class="flex items-center space-x-2 text-[#7d8590] hover:text-blue-500 cursor-pointer">
                    <ThumbsUpIcon class="w-5 h-5" />
                    <span class="text-sm">Like</span>
                  </div>
                  <div class="flex items-center space-x-2 text-[#7d8590] hover:text-blue-500 cursor-pointer">
                    <ThumbsDownIcon class="w-5 h-5" />
                    <span class="text-sm">Dislike</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  </section>
</template>

<style scoped></style>
