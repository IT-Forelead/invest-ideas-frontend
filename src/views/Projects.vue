<script setup>
import CaretRightIcon from '../assets/icons/CaretRightIcon.vue'
import ArrowSquareOutIcon from '../assets/icons/ArrowSquareOutIcon.vue'

</script>
<template>
  <section class="bg-[#0D1117]">
    <div class="container px-6 mx-auto pt-24 pb-16">
      <h1 class="text-5xl font-semibold text-white mt-6 mb-6">
        Projects
      </h1>
      <div class="text-xl font-normal max-w-4xl text-gray-500 mb-12">
        Ready-to-use projects now
      </div>
      <div class="grid grid-cols-7 gap-8">
        <div class="col-span-2">
          <div class="p-6 space-y-6 bg-[#161B22] border border-[#30363D] rounded-xl">
            <h3 class="pb-2 text-xl font-semibold text-[#e6edf3] border-b border-[#30363D]">Categories</h3>
            <ul class="space-y-2">
              <li class="flex items-center space-x-1">
                <CaretRightIcon class="w-6 h-6 text-[#7d8590]" />
                <span class="text-lg font-normal text-[#e6edf3] cursor-pointer">CRM tizimlar</span>
              </li>
              <li class="flex items-center space-x-1">
                <CaretRightIcon class="w-6 h-6 text-[#7d8590]" />
                <span class="text-lg font-normal text-[#e6edf3] cursor-pointer">LMS tizimlar</span>
              </li>
              <li class="flex items-center space-x-1">
                <CaretRightIcon class="w-6 h-6 text-[#7d8590]" />
                <span class="text-lg font-normal text-[#e6edf3] cursor-pointer">B2B tizimlar</span>
              </li>
              <li class="flex items-center space-x-1">
                <CaretRightIcon class="w-6 h-6 text-[#7d8590]" />
                <span class="text-lg font-normal text-[#e6edf3] cursor-pointer">Mobil ilovalar</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-span-5 grid grid-cols-3 gap-8">
          <div class="w-full h-52 bg-[#161B22] border relative group border-solid border-[#30363D] rounded-lg shadow-[0_5px_10px_rgba(0,0,0,0.12)] cursor-pointer">
            <div
              class="absolute flex items-center justify-center inset-0 bg-black/20 border border-solid border-[#939AFF] rounded-lg duration-300 opacity-0 group-hover:opacity-100">
              <div
                class="absolute inline-flex items-center space-x-2 top-1/2 left-1/2 bg-[#939AFF] p-2 px-8 rounded-3xl -translate-x-1/2 -translate-y-1/2">
                <span class="text-black font-semibold text-lg">Preview</span>
                <ArrowSquareOutIcon class="w-5 h-5" />
              </div>
            </div>
            <img src="/images/projects/invest-ideas.png" class="w-full h-40 bg-cover rounded-t-md" alt="#" />
            <div class="flex items-center p-3 text-base text-white">Digital med</div>
          </div>
          <div class="w-full h-52 bg-[#161B22] border relative group border-solid border-[#30363D] rounded-lg shadow-[0_5px_10px_rgba(0,0,0,0.12)] cursor-pointer">
            <div
              class="absolute flex items-center justify-center inset-0 bg-black/20 border border-solid border-[#939AFF] rounded-lg duration-300 opacity-0 group-hover:opacity-100">
              <div
                class="absolute inline-flex items-center space-x-2 top-1/2 left-1/2 bg-[#939AFF] p-2 px-8 rounded-3xl -translate-x-1/2 -translate-y-1/2">
                <span class="text-black font-semibold text-lg">Preview</span>
                <ArrowSquareOutIcon class="w-5 h-5" />
              </div>
            </div>
            <img src="/images/projects/digital-med.png" class="w-full h-40 bg-cover rounded-t-md" alt="#" />
            <div class="flex items-center p-3 text-base text-white">Digital med</div>
          </div>
          <div class="w-full h-52 bg-[#161B22] border relative group border-solid border-[#30363D] rounded-lg shadow-[0_5px_10px_rgba(0,0,0,0.12)] cursor-pointer">
            <div
              class="absolute flex items-center justify-center inset-0 bg-black/20 border border-solid border-[#939AFF] rounded-lg duration-300 opacity-0 group-hover:opacity-100">
              <div
                class="absolute inline-flex items-center space-x-2 top-1/2 left-1/2 bg-[#939AFF] p-2 px-8 rounded-3xl -translate-x-1/2 -translate-y-1/2">
                <span class="text-black font-semibold text-lg">Preview</span>
                <ArrowSquareOutIcon class="w-5 h-5" />
              </div>
            </div>
            <img src="/images/projects/workout-v2.png" class="w-full h-40 bg-cover rounded-t-md" alt="#" />
            <div class="flex items-center p-3 text-base text-white">Workout v2</div>
          </div>
          <div class="w-full h-52 bg-[#161B22] border relative group border-solid border-[#30363D] rounded-lg shadow-[0_5px_10px_rgba(0,0,0,0.12)] cursor-pointer">
            <div
              class="absolute flex items-center justify-center inset-0 bg-black/20 border border-solid border-[#939AFF] rounded-lg duration-300 opacity-0 group-hover:opacity-100">
              <div
                class="absolute inline-flex items-center space-x-2 top-1/2 left-1/2 bg-[#939AFF] p-2 px-8 rounded-3xl -translate-x-1/2 -translate-y-1/2">
                <span class="text-black font-semibold text-lg">Preview</span>
                <ArrowSquareOutIcon class="w-5 h-5" />
              </div>
            </div>
            <img src="/images/projects/workout-v1.png" class="w-full h-40 bg-cover rounded-t-md" alt="#" />
            <div class="flex items-center p-3 text-base text-white">Workout</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped></style>
