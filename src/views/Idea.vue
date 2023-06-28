<script setup>
import ThumbsUpIcon from '../components/Icons/ThumbsUpIcon.vue'
import CaretRightIcon from '../components/Icons/CaretRightIcon.vue'
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
      <div class="grid grid-cols-7 gap-8">
        <div class="col-span-2 space-y-8">
          <div class="p-6 space-y-6 bg-[#161B22] border border-[#30363D] rounded-xl">
            <h3 class="pb-2 text-xl font-semibold text-[#e6edf3] border-b border-[#30363D]">Information</h3>
            <ul class="space-y-1">
              <li class="flex items-center space-x-2">
                <sapn class="text-sm font-normal text-[#7d8590]">Creator:</sapn>
                <sapn class="text-lg font-normal text-[#e6edf3]">Jumaniyozov Surojiddin</sapn>
              </li>
              <li class="flex items-center space-x-2">
                <sapn class="text-sm font-normal text-[#7d8590]">Created at:</sapn>
                <sapn class="text-lg font-normal text-[#e6edf3]">28.07.2023 15:16</sapn>
              </li>
              <li class="flex items-center space-x-2">
                <sapn class="text-sm font-normal text-[#7d8590]">Category:</sapn>
                <sapn class="text-lg font-normal text-[#e6edf3]">Jamiyat uchun foydali staruplar</sapn>
              </li>
              <li class="flex items-center space-x-2">
                <sapn class="text-sm font-normal text-[#7d8590]">Comentaries:</sapn>
                <sapn class="text-lg font-normal text-[#e6edf3]">3 095</sapn>
              </li>
              <li class="flex items-center space-x-2">
                <sapn class="text-sm font-normal text-[#7d8590]">Views:</sapn>
                <sapn class="text-lg font-normal text-[#e6edf3]">5 731</sapn>
              </li>
              <li class="flex items-center space-x-2">
                <sapn class="text-sm font-normal text-[#7d8590]">Likes:</sapn>
                <sapn class="text-lg font-normal text-[#e6edf3]">2 184</sapn>
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

        </div>
        <div class="col-span-5 space-y-6">
          <div class="p-6 transition-all duration-500 bg-[#161B22] border border-[#30363D] rounded-xl space-y-4">
            <div class="text-3xl font-extrabold text-[#e6edf3]">Futbol maydonlarini avtomatlashtirish</div>
            <div class="text-xl text-[#e6edf3]">
              Hozirda xususiy mini futbol maydonlari avtomatlashtirilmagan. Shuning uchun gazon egalariga ham
              mijozlarga ham ko'plab noqulaykilar keltirmoqda. Agar mijozlar onlayn platformadan tanlangan
              hududida qancha futbol maydonlari borligini va ular qaysi vaqtlarda bo'sh yoki bandligini bila
              olishi, bo'sh maydonni onlayn band qilish imkoniyatlari bo'lsa ajoyib qulaylik yaratilgan bo'lardi.
              <br><br>
              Hozirda xususiy mini futbol maydonlari avtomatlashtirilmagan. Shuning uchun gazon egalariga ham
              mijozlarga ham ko'plab noqulaykilar keltirmoqda. Agar mijozlar onlayn platformadan tanlangan
              hududida qancha futbol maydonlari borligini va ular qaysi vaqtlarda bo'sh yoki bandligini bila
              olishi, bo'sh maydonni onlayn band qilish imkoniyatlari bo'lsa ajoyib qulaylik yaratilgan bo'lardi.
              <br><br>
              Hozirda xususiy mini futbol maydonlari avtomatlashtirilmagan. Shuning uchun gazon egalariga ham
              mijozlarga ham ko'plab noqulaykilar keltirmoqda. Agar mijozlar onlayn platformadan tanlangan
              hududida qancha futbol maydonlari borligini va ular qaysi vaqtlarda bo'sh yoki bandligini bila
              olishi, bo'sh maydonni onlayn band qilish imkoniyatlari bo'lsa ajoyib qulaylik yaratilgan bo'lardi.
            </div>
          </div>

          <!-- <div class="relative flex flex-1 items-stretch md:flex-col" role="presentation">
            <div class="">
              <div class="h-full flex ml-1 md:w-full md:m-auto md:mb-2 gap-0 md:gap-2 justify-center"><button
                  class="btn relative btn-neutral -z-0 border-0 md:border" as="button">
                  <div class="flex w-full gap-2 items-center justify-center"><svg stroke="currentColor" fill="none"
                      stroke-width="1.5" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"
                      class="h-3 w-3 flex-shrink-0" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <polyline points="1 4 1 10 7 10"></polyline>
                      <polyline points="23 20 23 14 17 14"></polyline>
                      <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"></path>
                    </svg>Regenerate response</div>
                </button></div>
            </div>
            <div
              class="flex flex-col w-full py-[10px] flex-grow md:py-4 md:pl-4 relative border border-black/10 bg-white dark:border-gray-900/50 dark:text-white dark:bg-gray-700 rounded-xl shadow-xs dark:shadow-xs">
              <textarea id="prompt-textarea" tabindex="0" data-id="f501983a-11de-40a7-a628-9587cc02c39b" rows="1"
                placeholder="Send a message"
                class="m-0 w-full resize-none border-0 bg-transparent p-0 pr-10 focus:ring-0 focus-visible:ring-0 dark:bg-transparent md:pr-12 pl-3 md:pl-0"
                style="max-height: 200px; height: 24px; overflow-y: hidden;"></textarea><button
                class="absolute p-1 rounded-md md:bottom-3 md:p-2 md:right-3 dark:hover:bg-gray-900 dark:disabled:hover:bg-transparent right-2 disabled:text-gray-400 enabled:bg-brand-purple text-white bottom-1.5 transition-colors disabled:opacity-40"
                style="" disabled=""><span class="" data-state="closed"><svg xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16" fill="none" class="h-4 w-4 m-1 md:m-0" stroke-width="2">
                    <path
                      d="M.5 1.163A1 1 0 0 1 1.97.28l12.868 6.837a1 1 0 0 1 0 1.766L1.969 15.72A1 1 0 0 1 .5 14.836V10.33a1 1 0 0 1 .816-.983L8.5 8 1.316 6.653A1 1 0 0 1 .5 5.67V1.163Z"
                      fill="currentColor"></path>
                  </svg></span></button>
            </div>
          </div> -->

        </div>
      </div>


    </div>
  </section>
</template>

<style scoped></style>
