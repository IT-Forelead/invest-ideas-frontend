<script setup>
import CodeSimpleIcon from '../Icons/CodeSimpleIcon.vue'
</script>
<template>
    <section class="bg-[#0D1117]">
        <div class="container px-6 mx-auto">
            <div class="flex">
                <div class="w-1/12 flex flex-col items-center relative">
                    <div class="mx-auto my-8">
                        <div class="relative inline-block mb-10">
                            <CodeSimpleIcon class="w-6 h-6 text-white" />
                            <div class="absolute bg-[#7ee787] blur-lg left-0 top-0 h-full w-full"></div>
                        </div>
                        <div
                            class="w-[3px] h-64 bg-gradient-to-b from-[#56d364] via-[#2ea043] to-[#0D1117] rounded-md mx-auto">
                        </div>
                    </div>
                </div>
                <div class="w-11/12 pt-8 relative z-[1]">
                    <div class="text-2xl mb-6 font-medium text-white">Productivity</div>
                    <h3 class="text-5xl font-medium text-white w-2/3">
                        <span class="text-[#7ee787]">Accelerate high-quality software development.</span>
                        Our AI-powered platform drives innovation with tools that boost developer velocity.
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
                            <span class="text-white font-normal">GitHub Codespaces</span>
                            offers a complete dev environment in seconds, so you can code,
                            build, test, and open pull requests from any repo anywhere.
                        </h2>
                        <div class="flex items-center space-x-2 font-semibold text-xl text-white py-1">
                            <span>Check out GitHub Codespaces</span>
                            <svg xmlns="http://www.w3.org/2000/svg" class="octicon arrow-symbol-mktg" width="16" height="16"
                                viewBox="0 0 16 16" fill="none">
                                <path fill="currentColor"
                                    d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z">
                                </path>
                                <path class="octicon-chevrow-stem" stroke="currentColor" d="M1.75 8H11" stroke-width="1.5"
                                    stroke-linecap="round"></path>
                            </svg>
                        </div>
                    </div>
                    <div class="px-16 pt-12 pb-20 w-1/2">
                        <div
                            class="text-xs font-semibold inline-block px-2 py-1 border border-double border-[#7EE787] text-[#7EE787] rounded-full">
                            Did you know?
                        </div>
                        <h3 class="text-6xl font-medium text-[#7EE787] mb-8 mt-4">22% increase</h3>
                        <p class="mb-4 text-xl font-medium max-w-2xl text-white">in developer productivity<br>after three
                            years with GitHub</p>
                    </div>
                </div>
            </div>
            <!-- content -->
            <div class="grid grid-cols-2 gap-8 mt-4">
                <div class="col-span-2 h-24 bg-[#161B22] border border-solid border-[#30363D] rounded-xl box-shadow"></div>
                <div class=" h-24 bg-[#161B22] border border-solid border-[#30363D] rounded-xl box-shadow"></div>
                <div class=" h-24 bg-[#161B22] border border-solid border-[#30363D] rounded-xl box-shadow"></div>
            </div>

            <div class="flex flex-col items-center w-1/12">
                <div class="h-32 w-[3px] bg-gradient-to-b from-[#0D1117] via-[#EA6045] to-[#ffa28b] mt-4 md:mt-6 rounded-md"></div>
            </div>
        </div>
    </section>
</template>
<style>
.box-shadow {
    box-shadow: 0 0 0 1px rgba(0, 0, 0, .5), 0 70px 65px rgba(0, 0, 0, .18), 0 30px 30px rgba(0, 0, 0, .14), 0 15px 15px rgba(0, 0, 0, .12), 0 10px 8px rgba(0, 0, 0, .1), 0 4px 4px rgba(0, 0, 0, .08), 0 2px 2px rgba(0, 0, 0, .06) !important;
}
</style>