<script setup>
import moment from 'moment'
import ThumbsUpIcon from '../../assets/icons/ThumbsUpIcon.vue'
import ThumbsUpFillIcon from '../../assets/icons/ThumbsUpFillIcon.vue'
import ChatCircleIcon from '../../assets/icons/ChatCircleIcon.vue'
import EyeIcon from '../../assets/icons/EyeIcon.vue'
import { useAuthStore } from '../../store/auth.store'
import { computed } from 'vue'

const { idea } = defineProps({
    idea: Object
})

const isLiked = computed(() => {
  return idea?.idea_likes.find(el => el.user_id === useAuthStore().user?.id)
})



</script>
<template>
    <div @click="selectIdea(idea)"
        class="p-4 transition-all duration-500 bg-[#161B22] border border-[#30363D] rounded-xl space-y-4 cursor-pointer">
        <div class="flex items-center justify-between">
            <div class="text-base text-[#7d8590]">{{ idea.categories.name }}</div>
            <div class="text-base text-[#7d8590]">{{ moment(idea.created_at).format('DD/MM/YYYY H:mm') }}</div>
        </div>
        <div class="text-xl font-extrabold text-[#e6edf3]">
            {{ idea.title }}
        </div>
        <div class="text-base text-[#e6edf3]">
            {{ idea.text.substring(0, 300) + '...' }}
        </div>
        <div class="flex items-center space-x-3">
            <div v-if="useAuthStore().user?.id && isLiked" class="flex items-center space-x-1">
                <ThumbsUpFillIcon class="w-5 h-5 text-[#7d8590]" />
                <span class="text-sm text-[#7d8590]">{{ idea.likes_count }}</span>
            </div>
            <div v-else class="flex items-center space-x-1">
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
</template>