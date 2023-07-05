<script setup>
import RacketLaunchIcon from '../../assets/icons/RacketLaunchIcon.vue'
import CaretRightIcon from '../../assets/icons/CaretRightIcon.vue'
import LightBulbIcon from '../../assets/icons/LightBulbIcon.vue'

</script>
<template>
  <section id="header" class="relative bg-[#0d1117] overflow-hidden">
    <img class="absolute top-0 left-0 pointer-events-none object-cover" 
      src="/images/footer-galaxy.jpg" alt="#" />

    <!-- stars version -->
    <!-- <img class="absolute -top-1/4 right-0 rotate-90 pointer-events-none object-cover"
      src="/images/bg-stars.webp" alt="#" /> -->

    <div class="relative container px-6 pt-16 mx-auto">
      <!-- <img src="/images/hero-drone.webp" class="absolute top-32 right-0 pointer-events-none w-80 h-52" alt="#" /> -->

      <div class="flex">
        <div class="w-1/12 flex flex-col pointer-events-none relative">
          <!-- <img class="relative max-w-none w-[437px] h-[643px]" style="left: calc(50% - 14px);"
            src="/images/lines-hero.svg" alt="#"> -->
          <div style="background: linear-gradient(#A371F7, #6639BA, #6639BA, #D2A8FF);"
            class="w-[3px] h-full rounded-md mx-auto"></div>
          <div class="mx-auto my-4">
            <div class="relative inline-block">
              <RacketLaunchIcon class="w-6 h-6 text-white" />
              <div class="absolute bg-[#DD7DF7] blur-lg left-0 top-0 h-full w-full"></div>
            </div>
          </div>
          <div style="background: linear-gradient(#d2a8ff, #a371f7 10%, #196c2e 70%, #2ea043 80%, #56d364);"
            class="w-[3px] h-full rounded-md mx-auto"></div>
        </div>
        <div class="w-11/12 pt-16">
          <router-link to="/about">
            <div
              class="inline-flex items-center py-3 px-5 space-x-4 bg-black/30 border border-solid cursor-pointer border-gray-50 rounded-full mt-8">
              <LightBulbIcon class="w-11 h-11 bg-white p-2 rounded-full" />
              <div>
                <div class="font-semibold text-white">
                  Introducing Invest Ideas
                </div>
                <div class="text-gray-400 text-base">
                  Learn more about our platform
                </div>
              </div>
              <CaretRightIcon class="w-5 h-5 text-white" />
            </div>
          </router-link>

          <h1 class="relative z-[1] text-7xl font-semibold text-white mt-11 mb-6">
            Let’s build your idea
          </h1>
          <div class="relative z-[1] text-4xl font-normal w-2/3 text-gray-500 mb-12">
            Add your ideas to solve the problems and shortcomings in our society and in your life.
            Share with us if you have any solutions to problems or bugs. We will bring it to life.
          </div>

          <div class="relative z-[1] flex items-center w-2/3 space-x-4">
            <div class="flex w-2/3">
              <input type="text" class=" rounded-l-md bg-white text-base font-semibold outline-0 h-12 w-3/5" placeholder="Enter title of idea" />
              <button
                class="flex items-center justify-center w-2/5 bg-[#6e40c9] whitespace-nowrap rounded-r-md select-none border-0 px-5 h-12 text-base font-bold text-white">
                Search for ideas
              </button>
            </div>
            <div class="w-[1px] bg-gray-700 h-12"></div>
            <router-link to="/add-idea" class="w-1/3 flex items-center justify-center border-2 border-solid border-[#6e40c9] hover:border-white duration-500 whitespace-nowrap rounded-md select-none px-5 h-12 text-base font-bold text-white">
              Add your idea now
            </router-link>
          </div>
          <div class="relative z-[1] my-32">
            <p class="block text-base text-gray-500">The leading organizations of Uzbekistan are supporting us ↘︎</p>
            <div class="flex flex-wrap md:flex-justify-between items-center space-x-12 w-full lg:w-11/12 my-8">
              <img class="h-14 w-auto" src="/images/partners/president-tech-award.svg" alt="#" />
              <img class="h-14 w-auto" src="/images/partners/it-park.svg" alt="#" />
              <img class="h-16 w-auto" src="/images/partners/ministry-of-digital-technologies.svg" alt="#">
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped></style>
