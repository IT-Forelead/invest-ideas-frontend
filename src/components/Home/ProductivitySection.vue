<script setup>
import { Vue3Marquee } from 'vue3-marquee'
import 'vue3-marquee/dist/style.css'
import CodeSimpleIcon from '../../assets/icons/CodeSimpleIcon.vue'
import CaretRightIcon from '../../assets/icons/CaretRightIcon.vue'
import StarFillIcon from '../../assets/icons/StarFillIcon.vue'
import LightBulbIcon from '../../assets/icons/LightBulbIcon.vue'
</script>
<template>
    <section class="bg-[#0D1117]">
        <div class="container px-6 mx-auto">
            <div class="flex">
                <div class="w-1/12 flex flex-col items-center relative">
                    <div class="mx-auto my-8">
                        <div class="relative inline-block mb-10">
                            <LightBulbIcon class="w-6 h-6 text-white" />
                            <div class="absolute bg-[#7ee787] blur-lg left-0 top-0 h-full w-full"></div>
                        </div>
                        <div
                            class="w-[3px] h-64 bg-gradient-to-b from-[#56d364] via-[#2ea043] to-[#0D1117] rounded-md mx-auto">
                        </div>
                    </div>
                </div>
                <div class="w-11/12 pt-8 relative z-[1]">
                    <div class="text-2xl mb-6 font-medium text-white">Ideas</div>
                    <h3 class="text-5xl font-medium text-white w-2/3">
                        <span class="text-[#7ee787]">Add your own ideas or suggest others' ideas</span>
                        Share yourself with suggestions and ideas to find solutions to problems in your life or business.
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
                        style="background: linear-gradient(#0D1117, #2ea043, #2ea043, #0D1117);"></div>
                    <img alt="" class="left-[calc(50%_-_2px)] max-w-[9vw] h-[485px] w-[81px] md:block absolute bottom-4"
                        src="/images/git-branch-productivity.svg">
                </div>
                <div class="w-11/12 ml-2 md:ml-10 relative overflow-hidden">
                    <img class="absolute -top-44 -left-12 h-auto w-full pointer-events-none bg-cover overflow-clip"
                        src="/images/bg-stars.webp" alt="">
                    <div class="py-8 px-16 mb-2 max-w-5xl tracking-tight">
                        <h2 class="text-2xl mb-4 text-[#7D8590]">
                            <span class="text-white font-normal">Add your idea in seconds.</span>
                            Enter your problems that need to be automated in any direction, and together 
                            we will find a solution.
                        </h2>
                        <router-link to="/ideas">
                            <div class="inline-flex items-center space-x-2 font-semibold text-xl text-white py-1 cursor-pointer">
                                <span>View all ideas</span>
                                <CaretRightIcon class="w-5 h-5 text-white" />
                            </div>
                        </router-link>
                    </div>
                    <div class="px-16 pt-12 pb-20 w-1/2">
                        <div
                            class="text-xs font-semibold inline-block px-2 py-1 border border-double border-[#7EE787] text-[#7EE787] rounded-full">
                            Did you know?
                        </div>
                        <h3 class="text-6xl font-medium text-[#7EE787] mb-8 mt-4">10+ ideas</h3>
                        <p class="mb-4 text-xl font-medium max-w-lg text-white">Currently, more than 10 ideas are being discussed on our platform</p>
                    </div>
                </div>
            </div>
            <div class="space-y-6 py-4 rounded-xl overflow-hidden">
                <Vue3Marquee :pauseOnHover="true" :duration="100" :gradient="true" :gradientColor="[13, 17, 23]"
                    :direction="'normal'" class="overflow-hidden">
                    <div class="flex items-center ml-6 space-x-6">
                        <div v-for="i in 8" class="w-96 rounded-xl bg-[#161B22] text-gray-900 p-4">
                            <div class="flex text-[#7EE787]">
                                <StarFillIcon v-for="i in 5" class="h-4 w-4" />
                            </div>
                            <div class="text-white mt-3 text-lg font-semibold leading-6">
                                It really works.
                            </div>
                            <div class="text-[#7D8590] mt-3 text-base leading-7">
                                I downloaded Pocket today and turned $5000 into $25,000
                                in half an hour.
                            </div>
                            <div class="mt-3 text-sm text-gray-600">- CrazyInvestor</div>
                        </div>
                    </div>
                </Vue3Marquee>
                <Vue3Marquee :pauseOnHover="true" :duration="180" :gradient="true" :gradientColor="[13, 17, 23]"
                    :direction="'reverse'" class="overflow-hidden">
                    <div class="flex items-center ml-6 space-x-6">
                        <div v-for="i in 8" class="w-96 rounded-xl bg-[#161B22] text-gray-900 p-4">
                            <div class="flex text-[#7EE787]">
                                <StarFillIcon v-for="i in 5" class="h-4 w-4" />
                            </div>
                            <div class="text-white mt-3 text-lg font-semibold leading-6">
                                It really works.
                            </div>
                            <div class="text-[#7D8590] mt-3 text-base leading-7">
                                I downloaded Pocket today and turned $5000 into $25,000
                                in half an hour.
                            </div>
                            <div class="mt-3 text-sm text-gray-600">- CrazyInvestor</div>
                        </div>
                    </div>
                </Vue3Marquee>
                <Vue3Marquee :pauseOnHover="true" :duration="150" :gradient="true" :gradientColor="[13, 17, 23]"
                    :direction="'normal'" class="overflow-hidden">
                    <div class="flex items-center ml-6 space-x-6">
                        <div v-for="i in 8" class="w-96 rounded-xl bg-[#161B22] text-gray-900 p-4">
                            <div class="flex text-[#7EE787]">
                                <StarFillIcon v-for="i in 5" class="h-4 w-4" />
                            </div>
                            <div class="text-white mt-3 text-base font-semibold leading-6">
                                It really works.
                            </div>
                            <div class="text-[#7D8590] mt-3 text-sm leading-7">
                                I downloaded Pocket today and turned $5000 into $25,000
                                in half an hour.
                            </div>
                            <div class="mt-3 text-sm text-gray-600">- CrazyInvestor</div>
                        </div>
                    </div>
                </Vue3Marquee>
            </div>
            <div class="flex flex-col items-center w-1/12">
                <div
                    class="h-32 w-[3px] bg-gradient-to-b from-[#0D1117] via-[#EA6045] to-[#ffa28b] mt-4 md:mt-6 rounded-md">
                </div>
            </div>
        </div>
    </section>
</template>
<style>
.box-shadow {
    box-shadow: 0 0 0 1px rgba(0, 0, 0, .5), 0 70px 65px rgba(0, 0, 0, .18), 0 30px 30px rgba(0, 0, 0, .14), 0 15px 15px rgba(0, 0, 0, .12), 0 10px 8px rgba(0, 0, 0, .1), 0 4px 4px rgba(0, 0, 0, .08), 0 2px 2px rgba(0, 0, 0, .06) !important;
}
</style>