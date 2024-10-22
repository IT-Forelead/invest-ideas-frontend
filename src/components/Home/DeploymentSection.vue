<script setup>
import { computed } from '@vue/reactivity'
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { supabase } from '../../lib/supabaseClient'
import { Vue3Marquee } from 'vue3-marquee'
import 'vue3-marquee/dist/style.css'
import { useProjectStore } from '../../store/project.store'
import CaretRightIcon from '../../assets/icons/CaretRightIcon.vue'
import ArrowSquareOutIcon from '../../assets/icons/ArrowSquareOutIcon.vue'
import TerminalWindowIcon from '../../assets/icons/TerminalWindowIcon.vue'

const router = useRouter()

const projects = computed(() => {
    return useProjectStore().projects
})

async function getProjects() {
    await supabase
        .from('projects')
        .select(`*`)
        .then(async (res) => {
            useProjectStore().clearStore()
            useProjectStore().setProjects(res.data)
        })
}

const selectProject = (projectId) => {
    router.push(`/project/${projectId}`)
}

onMounted(() => {
    getProjects()
})
</script>
<template>
    <section class="bg-[#0D1117]">
        <div class="container px-6 mx-auto">
            <div class="flex">
                <div class="w-1/12 flex flex-col items-center relative">
                    <div class="mx-auto my-8">
                        <div class="relative inline-block mb-10">
                            <TerminalWindowIcon class="w-6 h-6 text-white" />
                            <div class="absolute bg-[#939AFF] blur-lg left-0 top-0 h-full w-full"></div>
                        </div>
                        <div
                            class="w-[3px] h-72 bg-gradient-to-b from-[#abb4ff] via-[#797ef9] to-[#0D1117] rounded-md mx-auto">
                        </div>
                    </div>
                </div>
                <div class="w-11/12 pt-8 relative z-[1]">
                    <div class="text-2xl mb-6 font-medium text-white">Deployment</div>
                    <h3 class="text-5xl font-medium text-white max-w-5xl tracking-tight">
                        <span class="text-[#939AFF]">Deploy and security are on us.</span>
                        We will deploy the startup that is considered ready for use.
                        We deploy daily changes at a certain time every day.
                    </h3>
                </div>
            </div>
            <!-- content -->
            <div class="h-24 bg-[#161B22] border border-solid border-[#30363D] rounded-xl box-shadow"></div>
        </div>

        <div class="container px-6 py-8 mx-auto">
            <div class="flex">
                <div class="w-1/12 flex flex-col items-center relative">
                    <div class="w-[3px] h-full relative"
                        style="background: linear-gradient(#0D1117, #797ef9, #797ef9, #0D1117);"></div>
                    <img class="left-[calc(50%_-_2px)] max-w-[9vw] h-[485px] w-[81px] md:block absolute bottom-4"
                        src="/images/git-branch-security.svg" alt="">
                </div>
                <div class="w-11/12 ml-2 md:ml-10 relative z-[1] overflow-hidden">
                    <img class="absolute -top-72 right-0 h-auto w-full pointer-events-none bg-cover overflow-clip rotate-90 translate-x-80"
                        src="/images/bg-stars.webp" alt="" />
                    <div class="py-8 px-16 mb-2 max-w-5xl tracking-tight">
                        <h2 class="text-2xl mb-4 text-[#7D8590]">
                            <span class="text-white font-normal">Invest Ideas Team</span>
                            provides partially ready-to-use startups as a demo, regardless of what programming language or
                            technology they are written in.
                        </h2>
                        <router-link to="/projects">
                            <div class="flex items-center space-x-2 font-semibold text-xl text-white py-1 cursor-pointer">
                                <span>View all products</span>
                                <CaretRightIcon class="w-5 h-5 text-white" />
                            </div>
                        </router-link>
                    </div>
                    <div class="px-16 pt-12 pb-20 w-1/2">
                        <div
                            class="text-xs font-semibold inline-block px-2 py-1 border border-double border-[#939AFF] text-[#939AFF] rounded-full">
                            Did you know?
                        </div>
                        <h3 class="text-6xl font-medium text-[#939AFF] mb-8 mt-4">
                            3 projects
                        </h3>
                        <p class="mb-4 text-xl font-medium max-w-2xl text-white">
                            Currently, we have 3 projects ready for use
                        </p>
                    </div>
                </div>
            </div>
            <div class="space-y-6 py-4 rounded-xl overflow-hidden">
                <Vue3Marquee :pauseOnHover="true" :duration="100" :gradient="true" :gradientColor="[13, 17, 23]"
                    :direction="'normal'" class="overflow-hidden">
                    <div class="flex items-center ml-6 space-x-6">
                        <div @click="selectProject(project?.id)" v-for="(project, idx) in projects" :key="idx"
                            class="w-96 h-52 bg-[#161B22] border relative group border-solid border-[#30363D] rounded-lg shadow-[0_5px_10px_rgba(0,0,0,0.12)] cursor-pointer">
                            <div
                                class="absolute flex items-center justify-center inset-0 bg-black/20 border border-solid border-[#939AFF] rounded-lg duration-300 opacity-0 group-hover:opacity-100">
                                <div
                                    class="absolute inline-flex items-center space-x-2 top-1/2 left-1/2 bg-[#939AFF] p-2 px-8 rounded-3xl -translate-x-1/2 -translate-y-1/2">
                                    <span class="text-black font-semibold text-lg">Preview</span>
                                    <ArrowSquareOutIcon class="w-5 h-5" />
                                </div>
                            </div>
                            <img :src="`/images/projects/${project?.image_url}`" class="w-full h-40 bg-cover rounded-t-md"
                                alt="#" />
                            <div class="flex items-center p-3 text-base text-white">{{ project?.name }}</div>
                        </div>
                    </div>
                </Vue3Marquee>
                <Vue3Marquee :pauseOnHover="true" :duration="180" :gradient="true" :gradientColor="[13, 17, 23]"
                    :direction="'reverse'" class="overflow-hidden">
                    <div class="flex items-center ml-6 space-x-6">
                        <div @click="selectProject(project?.id)" v-for="(project, idx) in projects" :key="idx"
                            class="w-96 h-52 bg-[#161B22] border relative group border-solid border-[#30363D] rounded-lg shadow-[0_5px_10px_rgba(0,0,0,0.12)] cursor-pointer">
                            <div
                                class="absolute flex items-center justify-center inset-0 bg-black/20 border border-solid border-[#939AFF] rounded-lg duration-300 opacity-0 group-hover:opacity-100">
                                <div
                                    class="absolute inline-flex items-center space-x-2 top-1/2 left-1/2 bg-[#939AFF] p-2 px-8 rounded-3xl -translate-x-1/2 -translate-y-1/2">
                                    <span class="text-black font-semibold text-lg">Preview</span>
                                    <ArrowSquareOutIcon class="w-5 h-5" />
                                </div>
                            </div>
                            <img :src="`/images/projects/${project?.image_url}`" class="w-full h-40 bg-cover rounded-t-md"
                                alt="#" />
                            <div class="flex items-center p-3 text-base text-white">{{ project?.name }}</div>
                        </div>
                    </div>
                </Vue3Marquee>
                <Vue3Marquee :pauseOnHover="true" :duration="150" :gradient="true" :gradientColor="[13, 17, 23]"
                    :direction="'normal'" class="overflow-hidden">
                    <div class="flex items-center ml-6 space-x-6">
                        <div @click="selectProject(project?.id)" v-for="(project, idx) in projects" :key="idx"
                            class="w-96 h-52 bg-[#161B22] border relative group border-solid border-[#30363D] rounded-lg shadow-[0_5px_10px_rgba(0,0,0,0.12)] cursor-pointer">
                            <div
                                class="absolute flex items-center justify-center inset-0 bg-black/20 border border-solid border-[#939AFF] rounded-lg duration-300 opacity-0 group-hover:opacity-100">
                                <div
                                    class="absolute inline-flex items-center space-x-2 top-1/2 left-1/2 bg-[#939AFF] p-2 px-8 rounded-3xl -translate-x-1/2 -translate-y-1/2">
                                    <span class="text-black font-semibold text-lg">Preview</span>
                                    <ArrowSquareOutIcon class="w-5 h-5" />
                                </div>
                            </div>
                            <img :src="`/images/projects/${project?.image_url}`" class="w-full h-40 bg-cover rounded-t-md"
                                alt="#" />
                            <div class="flex items-center p-3 text-base text-white">{{ project?.name }}</div>
                        </div>
                    </div>
                </Vue3Marquee>
            </div>
        </div>
    </section>
</template>
<style scoped>
.box-shadow {
    box-shadow: 0 0 0 1px rgba(0, 0, 0, .5), 0 70px 65px rgba(0, 0, 0, .18), 0 30px 30px rgba(0, 0, 0, .14), 0 15px 15px rgba(0, 0, 0, .12), 0 10px 8px rgba(0, 0, 0, .1), 0 4px 4px rgba(0, 0, 0, .08), 0 2px 2px rgba(0, 0, 0, .06) !important;
}</style>