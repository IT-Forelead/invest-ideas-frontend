<script setup>
import moment from 'moment'
import ThumbsUpIcon from '../../assets/icons/ThumbsUpIcon.vue'
import ThumbsUpFillIcon from '../../assets/icons/ThumbsUpFillIcon.vue'
import ThumbsDownIcon from '../../assets/icons/ThumbsDownIcon.vue'
import ThumbsDownFillIcon from '../../assets/icons/ThumbsDownFillIcon.vue'
import ChatCircleIcon from '../../assets/icons/ChatCircleIcon.vue'
import EyeIcon from '../../assets/icons/EyeIcon.vue'
import { useAuthStore } from '../../store/auth.store'
import { useRouter } from 'vue-router'
import { computed } from 'vue'

const router = useRouter()
const { idea } = defineProps({
    idea: Object
})

const isLiked = computed(() => {
    return idea?.idea_votes?.find(el => el.user_id === useAuthStore()?.user?.id)?.type == 'like'
})

const isDisliked = computed(() => {
    return idea?.idea_votes?.find(el => el.user_id === useAuthStore()?.user?.id)?.type == 'dislike'
})

const selectIdea = (ideaId) => {
    router.push(`/idea/${ideaId}`)
}
</script>
<template>
    <div @click="selectIdea(idea?.id)"
        class="p-4 transition-all duration-500 bg-[#161B22] border border-[#30363D] rounded-xl space-y-4 cursor-pointer">
        <div class="flex items-center justify-between">
            <div class="text-base text-[#7d8590]">{{ idea.categories.name }}</div>
            <div class="text-base text-[#7d8590]">{{ moment(idea.created_at).format('DD/MM/YYYY H:mm') }}</div>
        </div>
        <div class="text-xl font-extrabold text-[#e6edf3]">
            {{ idea.title }}
        </div>
        <div class="text-base text-[#e6edf3] ql-editor" v-html="idea?.text.substring(0, 300) + '...'"></div>
        <div class="flex items-center space-x-3">
            <div class="flex items-center space-x-1">
                <ThumbsUpFillIcon v-if="useAuthStore().user?.id && isLiked" class="w-5 h-5 text-[#7d8590]" />
                <ThumbsUpIcon v-else class="w-5 h-5 text-[#7d8590]" />
                <span class="text-sm text-[#7d8590]">{{ idea.likes_count }}</span>
            </div>
            <div class="flex items-center space-x-1">
                <ThumbsDownFillIcon v-if="useAuthStore().user?.id && isDisliked" class="w-5 h-5 text-[#7d8590]" />
                <ThumbsDownIcon v-else class="w-5 h-5 text-[#7d8590]" />
                <span class="text-sm text-[#7d8590]">{{ idea.dislikes_count }}</span>
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