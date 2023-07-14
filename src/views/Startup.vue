<script setup>
import moment from 'moment'
import { computed, onMounted, ref } from 'vue'
import { Toaster, toast } from 'vue-sonner'
import ArrowBendUpLeftIcon from '../assets/icons/ArrowBendUpLeftIcon.vue'
import TextAlignCenterIcon from '../assets/icons/TextAlignCenterIcon.vue'
import TextAlignLeftIcon from '../assets/icons/TextAlignLeftIcon.vue'
import TextAlignRightIcon from '../assets/icons/TextAlignRightIcon.vue'
import TextBIcon from '../assets/icons/TextBIcon.vue'
import TextItalicIcon from '../assets/icons/TextItalicIcon.vue'
import TextUnderlineIcon from '../assets/icons/TextUnderlineIcon.vue'
import ThumbsDownIcon from '../assets/icons/ThumbsDownIcon.vue'
import ThumbsUpIcon from '../assets/icons/ThumbsUpIcon.vue'
import UserIcon from '../assets/icons/UserIcon.vue'
import { supabase } from '../lib/supabaseClient'
import { useAuthStore } from '../store/auth.store'
import { useCommentStore } from '../store/comment.store'
import { useStartupStore } from '../store/startup.store'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const commentText = ref('')

const selectedStartup = computed(() => {
  return useStartupStore().selectedStartup
})

const comments = computed(() => {
  return useCommentStore().comments
})

const contributors = computed(() => {
  return useStartupStore().contributors
})

async function getStartupById() {
  await supabase
    .from('startups')
    .select(`
      *,
      categories ( * ),
      profiles ( * ),
      ideas ( * )
    `)
    .eq('id', route.params.id)
    .then(async (res) => {
      getComments(res.data[0]?.idea_id)
      useStartupStore().setSelectedStartup(res.data[0])
    })
}

async function getContributors() {
  await supabase
    .from('contributors')
    .select(`
      *,
      profiles ( * )
    `)
    .eq('startup_id', route.params.id)
    .then(async (res) => {
      useStartupStore().clearStore()
      useStartupStore().setContributors(res.data)
    })
}

async function getComments(ideaId) {
  await supabase
    .from('comments')
    .select(`
      *,
      profiles ( * )
    `)
    .eq('idea_id', ideaId)
    .order('created_at', { ascending: false })
    .then(async (res) => {
      useCommentStore().clearStore()
      useCommentStore().setComments(res.data)
    })
}

const addComment = async () => {
  if (!useAuthStore().user?.id) {
    toast.error('You must register to add an comment!')
  } else if (!selectedStartup.value?.idea_id) {
    toast.error('Idea does not exist!')
  } else if (!commentText.value) {
    toast.error('Please enter text!')
  } else {
    let { error } = await supabase
      .from('comments')
      .insert({
        user_id: useAuthStore().user?.id,
        idea_id: selectedStartup.value?.idea_id,
        text: commentText.value,
      })
    if (error) {
      toast.error('Error while adding comment! Please try again.')
    } else {
      toast.success('Comment added successfully!')
      let newCount = selectedStartup.value?.ideas?.comments_count + 1
      const { error } = await supabase
        .from('ideas')
        .update({ 'comments_count': newCount })
        .eq('id', selectedStartup.value?.idea_id)
      getComments(selectedStartup.value?.idea_id)
      commentText.value = ''
    }
  }
}

const startupStatusTranslate = (status) => {
  switch (status) {
    case 'ready_to_use':
      return 'Ready to use'
    case 'new':
      return 'New'
  }
}

const reply = async (firstname, lastname) => {
  commentText.value = firstname + ' ' + lastname + ', '
  router.push('#add-comment')
}

onMounted(() => {
  getStartupById()
  getContributors()
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
    <div class="container px-6 mx-auto pt-24 pb-16">
      <h1 class="text-5xl font-semibold text-white mt-6 mb-6">
        {{ selectedStartup?.name }}
      </h1>
      <div class="text-xl font-normal max-w-4xl text-gray-500 mb-12">
        {{ selectedStartup?.description }}
      </div>
      <div v-if="selectedStartup?.id" class="grid grid-cols-7 gap-8">
        <div class="col-span-2 space-y-8">
          <div class="p-6 space-y-6 bg-[#161B22] border border-[#30363D] rounded-xl">
            <h3 class="pb-2 text-xl font-semibold text-[#e6edf3] border-b border-[#30363D]">Information</h3>
            <ul class="space-y-1">
              <li class="flex items-center space-x-2">
                <span class="text-sm font-normal text-[#7d8590]">Name:</span>
                <span class="text-lg font-normal text-[#e6edf3]">
                  {{ selectedStartup?.name }}
                </span>
              </li>
              <li class="flex items-center space-x-2">
                <span class="text-sm font-normal text-[#7d8590]">Status:</span>
                <span class="text-lg font-normal text-[#e6edf3]">
                  {{ startupStatusTranslate(selectedStartup?.status) }}
                </span>
              </li>
              <li class="flex items-center space-x-2">
                <span class="text-sm font-normal text-[#7d8590]">Category:</span>
                <span class="text-lg font-normal text-[#e6edf3]">
                  {{ selectedStartup?.categories?.name }}
                </span>
              </li>
              <li class="flex items-center space-x-2">
                <span class="text-sm font-normal text-[#7d8590]">Github:</span>
                <a :href="selectedStartup?.github_link" target="_blank" class="text-lg font-normal text-[#e6edf3] hover:text-[#0167F3]">
                  {{ selectedStartup?.github_link.substring(19, 1000) }}
                </a>
              </li>
              <li class="flex items-center space-x-2">
                <span class="text-sm font-normal text-[#7d8590]">Contributors count:</span>
                <span class="text-lg font-normal text-[#e6edf3]">
                  {{ selectedStartup?.contributors_count }}
                </span>
              </li>
              <li class="flex items-center space-x-2">
                <span class="text-sm font-normal text-[#7d8590]">Number of ready to run:</span>
                <span class="text-lg font-normal text-[#e6edf3]">
                  {{ selectedStartup?.who_ready_to_launch }}
                </span>
              </li>
              <li class="flex items-center space-x-2">
                <span class="text-sm font-normal text-[#7d8590]">Created at:</span>
                <span class="text-lg font-normal text-[#e6edf3]">
                  {{ moment(selectedStartup?.created_at).format('DD/MM/YYYY H:mm') }}
                </span>
              </li>
              <li class="flex items-center space-x-2">
                <span class="text-sm font-normal text-[#7d8590]">Creator:</span>
                <span class="text-lg font-normal text-[#e6edf3]">
                  {{ selectedStartup?.profiles?.firstname + ' ' + selectedStartup?.profiles?.lastname }}
                </span>
              </li>
            </ul>
          </div>

          <!-- <div class="p-6 space-y-6 bg-[#161B22] border border-[#30363D] rounded-xl">
            <h3 class="pb-2 text-xl font-semibold text-[#e6edf3] border-b border-[#30363D]">Contributors</h3>
            <div class="flex flex-wrap items-center">
              <img src="https://avatars.githubusercontent.com/u/25469673?s=64&v=4"
                class="w-10 h-10 rounded-full mr-1 mb-2" alt="#">
              <img src="https://avatars.githubusercontent.com/u/57610011?s=64&v=4"
                class="w-10 h-10 rounded-full mr-1 mb-2" alt="#">
              <img src="https://avatars.githubusercontent.com/u/71312807?s=64&v=4"
                class="w-10 h-10 rounded-full mr-1 mb-2" alt="#">
              <img src="https://avatars.githubusercontent.com/u/86780757?s=64&v=4"
                class="w-10 h-10 rounded-full mr-1 mb-2" alt="#">
              <img src="https://avatars.githubusercontent.com/u/122019364?s=64&v=4"
                class="w-10 h-10 rounded-full mr-1 mb-2" alt="#">
              <img src="https://avatars.githubusercontent.com/u/37735368?s=64&v=4"
                class="w-10 h-10 rounded-full mr-1 mb-2" alt="#">
            </div>
          </div> -->

          <div v-if="contributors.length > 0" class="p-6 space-y-6 bg-[#161B22] border border-[#30363D] rounded-xl">
            <h3 class="pb-2 text-xl font-semibold text-[#e6edf3] border-b border-[#30363D]">Contributors</h3>
            <div v-for="(contributor, idx) in contributors" :key="idx" class="flex items-center space-x-2">
              <img src="https://api.dicebear.com/6.x/identicon/svg?seed=Chester" class="w-8 h-8 rounded-full" alt="#">
              <div class="text-lg font-normal text-[#e6edf3]">
                {{ contributor?.profiles?.firstname + ' ' + contributor?.profiles?.lastname }}
              </div>
            </div>
          </div>

          <div class="p-6 space-y-6 bg-[#161B22] border border-[#30363D] rounded-xl">
            <h3 class="pb-2 text-xl font-semibold text-[#e6edf3] border-b border-[#30363D]">Languages</h3>
            <div class="flex items-center h-2 rounded-lg w-full overflow-hidden divide-x divide-[#30363D]">
              <div class="bg-red-500 h-full w-[20%]"></div>
              <div class="bg-yellow-500 h-full w-[45%]"></div>
              <div class="bg-blue-500 h-full w-[35%]"></div>
              <div class="bg-orange-500 h-full w-[3%]"></div>
              <div class="bg-blue-500 h-full w-[1%]"></div>
            </div>
            <div class="flex flex-wrap items-center">
              <div class="flex items-center space-x-1 mr-4">
                <div class="w-2 h-2 bg-red-500 mr-1"></div>
                <div class="text-white text-lg">Vue</div>
                <div class="text-gray-600 text-md">20%</div>
              </div>
              <div class="flex items-center space-x-1 mr-4">
                <div class="w-2 h-2 bg-red-500 mr-1"></div>
                <div class="text-white text-lg">JavaScript</div>
                <div class="text-gray-600 text-md">20%</div>
              </div>
              <div class="flex items-center space-x-1 mr-4">
                <div class="w-2 h-2 bg-red-500 mr-1"></div>
                <div class="text-white text-lg">Java</div>
                <div class="text-gray-600 text-md">20%</div>
              </div>
              <div class="flex items-center space-x-1 mr-4">
                <div class="w-2 h-2 bg-red-500 mr-1"></div>
                <div class="text-white text-lg">Shell</div>
                <div class="text-gray-600 text-md">3%</div>
              </div>
              <div class="flex items-center space-x-1 mr-4">
                <div class="w-2 h-2 bg-red-500 mr-1"></div>
                <div class="text-white text-lg">Other</div>
                <div class="text-gray-600 text-md">1%</div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-span-5 space-y-6">
          <div class="p-6 transition-all duration-500 bg-[#161B22] border border-[#30363D] rounded-xl space-y-4">
            <div class="text-3xl font-extrabold text-[#e6edf3]">
              {{ selectedStartup?.ideas?.title }}
            </div>
            <div class="text-xl text-[#e6edf3]">
              {{ selectedStartup?.ideas?.text }}
            </div>
          </div>
          <!-- add comentary -->
          <div v-if="useAuthStore().user?.id" id="#add-comment"
            class="p-6 transition-all duration-500 bg-[#161B22] border border-[#30363D] rounded-xl space-y-4">
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
              <textarea v-model="commentText" id="editor" rows="5"
                class="block p-4 w-full text-sm border-0 bg-[#0D1117] focus:ring-0 text-[#e6edf3] placeholder-gray-400"
                placeholder="Write an article..."></textarea>
            </div>
            <button @click="addComment()" class="w-36 py-1.5 px-4 rounded-lg text-white text-base bg-blue-600 cursor-pointer hover:bg-blue-800">
              Comment
            </button>
          </div>
          <div v-else class="flex items-center justify-center p-6 bg-[#161B22] border border-[#30363D] rounded-xl">
            <div class="text-lg font-medium text-red-500">Only site members can comment. Please register as well.</div>
          </div>
          <!-- comentaries -->
          <div v-if="comments.length > 0" class="space-y-2">
            <div v-for="(comment, idx) in comments" :key="idx" class="flex items-start space-x-4">
              <UserIcon class="p-2 bg-[#30363D]/80 rounded-full h-14 w-14 text-blue-500 border border-[#30363D]" />
              <div class="w-full bg-[#161B22] rounded-md border border-[#30363D] p-4 space-y-2">
                <div class="flex items-center justify-between">
                  <div class="text-lg font-medium text-[#e6edf3]">
                    {{ comment?.profiles?.firstname + ' ' + comment?.profiles?.lastname }}
                  </div>
                  <div class="text-base text-[#7d8590]">
                    {{ moment(comment?.created_at).format('DD/MM/YYYY H:mm') }}
                  </div>
                </div>
                <div class="text-xl text-[#e6edf3]">
                  {{ comment?.text }}
                </div>
                <div v-if="useAuthStore().user?.id"
                  class="flex items-center space-x-4 border-t border-dashed border-[#30363D] pt-2">
                  <div v-if="useAuthStore().user?.id != comment?.profiles?.id" @click="reply(comment?.profiles?.firstname, comment?.profiles?.lastname)" class="flex items-center space-x-2 text-[#7d8590] hover:text-blue-500 cursor-pointer">
                    <ArrowBendUpLeftIcon class="w-5 h-5" />
                    <span class="text-sm">Reply</span>
                  </div>
                  <div v-if="useAuthStore().user?.id == comment?.profiles?.id" class="flex items-center space-x-2 text-[#7d8590]">
                    <ThumbsUpIcon class="w-5 h-5" />
                    <span class="text-sm">
                      {{ comment?.likes }}
                    </span>
                  </div>
                  <div v-else class="flex items-center space-x-2 text-[#7d8590] hover:text-blue-500 cursor-pointer">
                    <ThumbsUpIcon class="w-5 h-5" />
                    <span class="text-sm">
                      {{ comment?.likes }}
                    </span>
                  </div>
                  <div v-if="useAuthStore().user?.id == comment?.profiles?.id" class="flex items-center space-x-2 text-[#7d8590]">
                    <ThumbsDownIcon class="w-5 h-5" />
                    <span class="text-sm">
                      {{ comment?.dislikes }}
                    </span>
                  </div>
                  <div v-else class="flex items-center space-x-2 text-[#7d8590] hover:text-blue-500 cursor-pointer">
                    <ThumbsDownIcon class="w-5 h-5" />
                    <span class="text-sm">
                      {{ comment?.dislikes }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-else class="flex items-center justify-center p-6 bg-[#161B22] border border-[#30363D] rounded-xl">
            <div class="text-base font-medium text-[#e6edf3]">There are no comments on the idea. You be the first :)</div>
          </div>
        </div>
      </div>
      <div v-else class="flex items-center justify-center p-6 bg-[#161B22] border border-[#30363D] rounded-xl">
        <div class="text-base font-medium text-red-500">Not available in startup database!</div>
      </div>
    </div>
  </section>
</template>
<style scoped></style>
