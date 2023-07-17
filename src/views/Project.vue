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
      <div class="grid grid-cols-7 gap-8">
        <div class="col-span-2 space-y-8">
          <div class="p-6 space-y-6 bg-[#161B22] border border-[#30363D] rounded-xl">
            <h3 class="pb-2 text-xl font-semibold text-[#e6edf3] border-b border-[#30363D]">Information</h3>
            <ul class="space-y-1">
              <li class="flex items-center space-x-2">
                <span class="text-sm font-normal text-[#7d8590]">Name:</span>
                <span class="text-lg font-normal text-[#e6edf3]">
                  Digital med
                </span>
              </li>
              <li class="flex items-center space-x-2">
                <span class="text-sm font-normal text-[#7d8590]">Category:</span>
                <span class="text-lg font-normal text-[#e6edf3]">
                  CRM tizimlar
                </span>
              </li>
              <li class="flex items-center space-x-2">
                <span class="text-sm font-normal text-[#7d8590]">Demo link:</span>
                <span class="text-lg font-normal text-[#e6edf3]">
                  http://digital-med.uz
                </span>
              </li>
              <li class="flex items-center space-x-2">
                <span class="text-sm font-normal text-[#7d8590]">Number of ready to run:</span>
                <span class="text-lg font-normal text-[#e6edf3]">
                  4
                </span>
              </li>
              <li class="flex items-center space-x-2">
                <span class="text-sm font-normal text-[#7d8590]">Idea:</span>
                <span class="text-lg font-normal text-[#e6edf3]">
                  Xususiy klinika ichki boshqaruvini aftomatlashtirish
                </span>
              </li>
              <li class="flex items-center space-x-2">
                <span class="text-sm font-normal text-[#7d8590]">Startup:</span>
                <span class="text-lg font-normal text-[#e6edf3]">
                  Digital med
                </span>
              </li>
            </ul>
          </div>

          <div class="p-6 space-y-6 bg-[#161B22] border border-[#30363D] rounded-xl">
            <h3 class="pb-2 text-xl font-semibold text-[#e6edf3] border-b border-[#30363D]">Contributors</h3>
            <div class="flex items-center space-x-2">
              <div class="flex items-center justify-center bg-[#30363D]/80 w-8 h-8 rounded-full border border-[#30363D]">
                <UserIcon class="h-6 w-6 text-blue-500" />
              </div>
              <div class="text-lg font-normal text-[#e6edf3]">
                Jumaniyozov Surojiddin
              </div>
            </div>
          </div>

          <div class="p-6 space-y-6 bg-[#161B22] border border-[#30363D] rounded-xl">
            <h3 class="pb-2 text-xl font-semibold text-[#e6edf3] border-b border-[#30363D]">Languages {{ langp }}</h3>
            <div class="flex items-center h-2 rounded-lg w-full overflow-hidden divide-x divide-[#30363D]">
              <div class="h-2.5" :class="`w-12`"></div>
            </div>
            <div class="flex flex-wrap items-center">
              <div class="flex items-center space-x-1 mr-4">
                <div class="w-2.5 h-2.5 rounded-full mr-1 bg-red-500"></div>
                <div class="text-white text-lg">Scala</div>
                <div class="text-gray-600 text-md">100%</div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-span-5 space-y-6">
          <div class="p-6 transition-all duration-500 bg-[#161B22] border border-[#30363D] rounded-xl space-y-4">
            <div class="text-3xl font-extrabold text-[#e6edf3]">
              Xususiy shifoxonalarni aftomatlashrirish platformasi
            </div>
            <div class="text-xl text-[#e6edf3]">
              DIGITAL-MED SYSTEM:
- tizimga login parol orqali kirish
- foydalanuvchini qo'shganda parolini sms orqali yuvorish
- parolni qayta tiklash (telefon raqamga parolni o'zgartiruvchi link sms shaklida yuvboriladi va shu link orqali yangi parol o'rnatish mumkun)
- tashrifga pul to'langanda shifokor ulishi mavjud bo'lsa avtomatik shifokor ulishini qo'shish
- tashrifga pul to'langanda operatsiya xizmatlarini avtomatik operatsiyalarga qo'shish

HOME PAGE:
- bir haftalik tashriflar statistikasi
- bir haftalik operatsiyalar statistikasi
- bir oylik operatsiya turlari statistikasi
- bir oylik kirim chiqimlar grafiki statistikalari

USERS PAGE:
- foydalanuvchilar hisoboti
- foydalanuvchi qo'shish
- foydalanuvchini o'chirish

PATIENTS PAGE:
- bemorlar hisoboti
- bemorlarni filtrlash
- bemorni qo'shish
- bemorga tashrif qo'shish
- bemorni o'chirish

SERVICE TYPES PAGE:
- xizmat turlari hisoboti
- xizmat turini qo'shish
- xizmat turini o'chirish

SERVICES PAGE:
- xizmatlar hisoboti
- xizmatni qo'shish
- xizmatni taxrirlash
- xizmatni o'chirish

PATIENT VISITS PAGE:
- tashriflar hisoboti
- tashrif qo'shish
- bemorni qo'shish
- to'lov statusini yangilash
- chek chop etish
- tashrif namunasini chop etish

OPERATION PAGE:
- operatsiyalar hisoboti
- operatsiyalarni filtrlash

- operatsiya xizmatlari hisoboti
- operatsiya xizmatini qo'shish
- operatsiya xizmatini o'chirish

EXPENSES PAGE:
- operatsiya xarajatlari hisoboti
- operatsiya xarajatlarini filtrlash
- operatsiya xarajatini qo'shish

- operatsiyalardagi shifokor ulushlari hisoboti
- operatsiyalardagi shifokor ulushlarini filterlash

- tibbiy ko'rik xarajatlari hisoboti
- tibbiy ko'rik xarajatlarini filterlash

- shifokor ko'riklari hisoboti
- shifokor ko'riklarini filtrlash

- shifokor ulishlari hisoboti
- shifokor ulishini qo'shish
- shifokor ulishini o'chirish

ADD VISIT PAGE:
- tashriflar ro'yhati
- tashrif qo'shish
- bemorni qo'shish

MESSAGES PAGE:
- sms xabarlar xisoboti
- sms xabarlarni filterlash

Last edited: 02-03-2023  14:44
            </div>
          </div>

          <img class="w-full rounded-md" src="/images/projects/digital-med.png" alt="#">
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped></style>
