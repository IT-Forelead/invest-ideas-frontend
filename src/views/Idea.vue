<script setup>
import moment from 'moment'
import { computed, onMounted, ref } from 'vue'
import { Toaster, toast } from 'vue-sonner'
import ArrowBendUpLeftIcon from '../assets/icons/ArrowBendUpLeftIcon.vue'
import CrownSimpleIcon from '../assets/icons/CrownSimpleIcon.vue'
import TextAlignCenterIcon from '../assets/icons/TextAlignCenterIcon.vue'
import TextAlignLeftIcon from '../assets/icons/TextAlignLeftIcon.vue'
import TextAlignRightIcon from '../assets/icons/TextAlignRightIcon.vue'
import TextBIcon from '../assets/icons/TextBIcon.vue'
import TextItalicIcon from '../assets/icons/TextItalicIcon.vue'
import TextUnderlineIcon from '../assets/icons/TextUnderlineIcon.vue'
import ThumbsDownIcon from '../assets/icons/ThumbsDownIcon.vue'
import ThumbsDownFillIcon from '../assets/icons/ThumbsDownFillIcon.vue'
import ThumbsUpIcon from '../assets/icons/ThumbsUpIcon.vue'
import ThumbsUpFillIcon from '../assets/icons/ThumbsUpFillIcon.vue'
import UserIcon from '../assets/icons/UserIcon.vue'
import { supabase } from '../lib/supabaseClient'
import { useAuthStore } from '../store/auth.store'
import { useIdeaStore } from '../store/idea.store'
import { useCommentStore } from '../store/comment.store'
import { useRouter, useRoute } from 'vue-router'

const contentHTML = ref('<h1>This is html header</h1>')

const router = useRouter()
const route = useRoute()

const commentText = ref('')

const selectedIdea = computed(() => {
  return useIdeaStore().selectedIdea
})

const comments = computed(() => {
  return useCommentStore().comments
})

async function getIdeaById() {
  await supabase
    .from('ideas')
    .select(`
      *, 
      categories ( * ),
      profiles ( * ),
      idea_votes ( * )
    `)
    .eq('id', route.params.id)
    .then(async (res) => {
      useIdeaStore().setSelectedIdea(res.data[0])
      let newCount = selectedIdea.value.views_count + 1
      const { error } = await supabase
        .from('ideas')
        .update({ 'views_count': newCount })
        .eq('id', route.params.id)
    })
}

async function getComments() {
  await supabase
    .from('comments')
    .select(`
      *,
      profiles ( id, firstname, lastname )
    `)
    .eq('idea_id', route.params.id)
    .order('created_at', { ascending: false })
    .then(async (res) => {
      useCommentStore().clearStore()
      useCommentStore().setComments(res.data)
    })
}

const addComment = async () => {
  if (!useAuthStore().user?.id) {
    toast.error('You must register to add an comment!')
  } else if (!route.params.id) {
    toast.error('Idea does not exist!')
  } else if (!commentText.value) {
    toast.error('Please enter text!')
  } else {
    let { error } = await supabase
      .from('comments')
      .insert({
        user_id: useAuthStore().user?.id,
        idea_id: route.params.id,
        text: commentText.value,
      })
    if (error) {
      toast.error('Error while adding comment! Please try again.')
    } else {
      toast.success('Comment added successfully!')
      let newCount = selectedIdea.value.comments_count + 1
      const { error } = await supabase
        .from('ideas')
        .update({ 'comments_count': newCount })
        .eq('id', route.params.id)
      if (!error) {
        getIdeaById()
      }
      getComments()
      commentText.value = ''
    }
  }
}

const reply = async (firstname, lastname) => {
  commentText.value = firstname + ' ' + lastname + ', '
  router.push('#add-comment')
}

const addVote = async (type) => {
  if (!useAuthStore().user?.id) {
    toast.error('You must be registered to vote!')
  } else if (!route.params.id) {
    toast.error('Idea does not exist!')
  } else if (selectedIdea.value?.idea_votes.find(el => el.user_id === useAuthStore().user?.id)) {
    toast.error('You voted for this idea!')
  } else {
    let { error } = await supabase
      .from('idea_votes')
      .insert({
        idea_id: route.params.id,
        user_id: useAuthStore().user?.id,
        type: type
      })
    if (error) {
      toast.error('Error occurred while voting! Please try again.')
    } else {
      toast.success('You have successfully voted!')
      getIdeaById()
      if (type == 'like') {
        let newCount = selectedIdea.value.likes_count + 1
        const { error } = await supabase
          .from('ideas')
          .update({ 'likes_count': newCount })
          .eq('id', route.params.id)
      } else {
        let newCount = selectedIdea.value.dislikes_count + 1
        const { error } = await supabase
          .from('ideas')
          .update({ 'dislikes_count': newCount })
          .eq('id', route.params.id)
      }
    }
  }
}

onMounted(() => {
  getIdeaById()
  getComments()
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
        Ideas in discussion
      </h1>
      <div class="text-xl font-normal max-w-4xl text-gray-500 mb-12">
        Ideas currently being discussed and voted on
      </div>
      <div v-if="selectedIdea?.id" class="grid grid-cols-7 gap-8">
        <div class="col-span-2 space-y-8">
          <div class="p-6 space-y-6 bg-[#161B22] border border-[#30363D] rounded-xl">
            <h3 class="pb-2 text-xl font-semibold text-[#e6edf3] border-b border-[#30363D]">Information</h3>
            <ul class="space-y-1">
              <li class="flex items-center space-x-2">
                <span class="text-sm font-normal text-[#7d8590]">Creator:</span>
                <span class="text-lg font-normal text-[#e6edf3]">
                  {{ selectedIdea?.profiles?.firstname + ' ' + selectedIdea?.profiles?.lastname }}
                </span>
              </li>
              <li class="flex items-center space-x-2">
                <span class="text-sm font-normal text-[#7d8590]">Created at:</span>
                <span class="text-lg font-normal text-[#e6edf3]">
                  {{ moment(selectedIdea?.created_at).format('DD/MM/YYYY H:mm') }}
                </span>
              </li>
              <li class="flex items-center space-x-2">
                <span class="text-sm font-normal text-[#7d8590]">Category:</span>
                <span class="text-lg font-normal text-[#e6edf3]">
                  {{ selectedIdea?.categories?.name }}
                </span>
              </li>
              <li class="flex items-center space-x-2">
                <span class="text-sm font-normal text-[#7d8590]">Comentaries:</span>
                <span class="text-lg font-normal text-[#e6edf3]">
                  {{ selectedIdea?.comments_count }}
                </span>
              </li>
              <li class="flex items-center space-x-2">
                <span class="text-sm font-normal text-[#7d8590]">Views:</span>
                <span class="text-lg font-normal text-[#e6edf3]">
                  {{ selectedIdea?.views_count }}
                </span>
              </li>
              <li class="flex items-center space-x-2">
                <span class="text-sm font-normal text-[#7d8590]">Likes:</span>
                <span class="text-lg font-normal text-[#e6edf3]">
                  {{ selectedIdea?.likes_count }}
                </span>
              </li>
              <li class="flex items-center space-x-2">
                <span class="text-sm font-normal text-[#7d8590]">Dislikes:</span>
                <span class="text-lg font-normal text-[#e6edf3]">
                  {{ selectedIdea?.dislikes_count }}
                </span>
              </li>
            </ul>
          </div>

          <div v-if="selectedIdea?.idea_votes.find(el => el.user_id === useAuthStore().user?.id)" class="flex items-center justify-between p-6 space-x-4 bg-[#161B22] border border-[#30363D] rounded-xl">
            <div class="text-lg font-normal text-[#e6edf3]">
              Your vote for an idea
            </div>
            <div v-if="selectedIdea?.idea_votes.find(el => el.user_id === useAuthStore().user?.id)?.type == 'like'">
              <ThumbsUpFillIcon class="w-12 h-12 text-blue-500 mx-4" />
            </div>
            <div v-if="selectedIdea?.idea_votes.find(el => el.user_id === useAuthStore().user?.id)?.type == 'dislike'">
              <ThumbsDownFillIcon class="w-12 h-12 text-red-500 mx-4" />
            </div>
          </div>
          <div v-else class="flex items-center p-6 space-x-4 bg-[#161B22] border border-[#30363D] rounded-xl">
            <div class="text-lg font-normal text-[#e6edf3]">
              Vote for the idea. Your rate is important to us.
            </div>
            <div class="flex items-center space-x-4">
              <ThumbsUpIcon @click="addVote('like')" class="w-12 h-12 text-blue-500 cursor-pointer" />
              <ThumbsDownIcon @click="addVote('dislike')" class="w-12 h-12 text-red-500 cursor-pointer" />
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
              {{ selectedIdea?.title }}
            </div>
            <div class="text-xl text-[#e6edf3] ql-editor" v-html="selectedIdea?.text"></div>
          </div>
          <!-- add comentary -->
          <div v-if="useAuthStore().user?.id" id="#add-comment"
            class="p-6 transition-all duration-500 bg-[#161B22] border border-[#30363D] rounded-xl space-y-4">
            <div class="text-2xl font-medium text-[#e6edf3]">Write a comment</div>
            <div>
              <QuillEditor v-model:content="commentText" content-type="html" toolbar="essential" placeholder="Write an article..." />
            </div>
            <button @click="addComment()"
              class="w-36 py-1.5 px-4 rounded-lg text-white text-base bg-blue-600 cursor-pointer hover:bg-blue-800">
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
                <div class="text-xl text-[#e6edf3] ql-editor" v-html="comment?.text"></div>
                <div v-if="useAuthStore().user?.id"
                  class="flex items-center space-x-4 border-t border-dashed border-[#30363D] pt-2">
                  <div v-if="useAuthStore().user?.id != comment?.profiles?.id"
                    @click="reply(comment?.profiles?.firstname, comment?.profiles?.lastname)"
                    class="flex items-center space-x-2 text-[#7d8590] hover:text-blue-500 cursor-pointer">
                    <ArrowBendUpLeftIcon class="w-5 h-5" />
                    <span class="text-sm">Reply</span>
                  </div>
                  <div v-if="useAuthStore().user?.id == comment?.profiles?.id"
                    class="flex items-center space-x-2 text-[#7d8590]">
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
                  <div v-if="useAuthStore().user?.id == comment?.profiles?.id"
                    class="flex items-center space-x-2 text-[#7d8590]">
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
        <div class="text-base font-medium text-red-500">Such an idea does not exist in the database!</div>
      </div>
    </div>
  </section>
</template>
<style scoped></style>
