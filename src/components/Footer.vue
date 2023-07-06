<script setup>
import MapPinIcon from '../assets/icons/MapPinIcon.vue'
import EnvelopeIcon from '../assets/icons/EnvelopeIcon.vue'
import GitHubIcon from '../assets/icons/GitHubIcon.vue'
import LinkedinIcon from '../assets/icons/LinkedinIcon.vue'
import TelegramIcon from '../assets/icons/TelegramIcon.vue'
import InstagramIcon from '../assets/icons/InstagramIcon.vue'
import AppleIcon from '../assets/icons/AppleIcon.vue'
import GooglePlayIcon from '../assets/icons/GooglePlayIcon.vue'
import GlobeIcon from '../assets/icons/GlobeIcon.vue'
</script>

<template>
  <footer class="py-8 bg-[#0d1117]">
    <div class="container mx-auto">
      <div class="grid grid-cols-4 gap-3 pt-4 pb-14">
        <div class="space-y-8">
          <router-link to="/" class="cursor-pointer">
            <div class="flex items-center space-x-2">
              <img src="/images/logo.png" alt="logo" class="w-12" />
              <span
                class="hidden font-bold leading-none text-[#E6EDF3] md:block md:text-xl xl:text-2xl whitespace-nowrap">
                Invest Ideas
              </span>
            </div>
          </router-link>
          <!-- <h2 class="text-sm font-semibold text-[#E6EDF3]">Subscribe to our newsletter</h2>
          <p class="text-sm text-[#7d8590] mb-4">Let’s build your idea</p> -->
          <ul class="space-y-3">
            <li class="flex items-center text-[#7d8590]">
              <MapPinIcon class="w-6 h-6" />
              <div class="ml-3 text-base font-medium">Khorezm region, Urgench</div>
            </li>
            <li class="flex items-center text-[#7d8590]">
              <EnvelopeIcon class="w-6 h-6" />
              <div class="ml-3 text-base font-medium">info@it-forelead.uz</div>
            </li>
            <li class="flex items-center text-[#7d8590]">
              <GlobeIcon class="w-6 h-6" />
              <div class="ml-3 text-base font-medium">www.it-forelead.uz</div>
            </li>
          </ul>
              <ul class="flex items-center space-x-1">
                <li>
                  <a href="https://github.com/IT-Forelead" target="_blank" class="flex items-center justify-center text-[#E6EDF3] rounded-full w-8 h-8 cursor-pointer hover:bg-[#0167F3]">
                    <GitHubIcon class="w-6 h-6" />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/itforelead" target="_blank" class="flex items-center justify-center text-[#E6EDF3] rounded-full w-8 h-8 cursor-pointer hover:bg-[#0167F3]">
                    <InstagramIcon class="w-6 h-6" />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/company/it-forelead" target="_blank" class="flex items-center justify-center text-[#E6EDF3] rounded-full w-8 h-8 cursor-pointer hover:bg-[#0167F3]">
                    <LinkedinIcon class="w-6 h-6" />
                  </a>
                </li>
                <li>
                  <a href="https://t.me/itforelead" target="_blank" class="flex items-center justify-center text-[#E6EDF3] rounded-full w-8 h-8 cursor-pointer hover:bg-[#0167F3]">
                    <TelegramIcon class="w-6 h-6" />
                  </a>
                </li>
              </ul>
        </div>
        <div>
          <h3
            class="relative mb-8 pb-4 text-base font-semibold text-[#E6EDF3] before:w-10 before:bg-[#0167F3] before:left-0 before:absolute before:bottom-0 before:h-1">
            Our Mobile App
          </h3>
          <ul class="space-y-3">
            <li>
              <button
                class="inline-flex items-center space-x-3 px-8 py-4 rounded bg-[#161B22] text-[#E6EDF3] cursor-pointer transition-all duration-500 hover:bg-[#0167F3]">
                <AppleIcon class="w-8 h-8" />
                <div class="text-left">
                  <div class="text-sm">Download on the</div>
                  <div class="text-base font-medium">App Store</div>
                </div>
              </button>
            </li>
            <li>
              <button
                class="inline-flex items-center space-x-3 px-8 py-4 rounded bg-[#161B22] text-[#E6EDF3] cursor-pointer transition-all duration-500 hover:bg-[#0167F3]">
                <GooglePlayIcon class="w-8 h-8" />
                <div class="text-left">
                  <div class="text-sm">Download on the</div>
                  <div class="text-base font-medium">Google Play</div>
                </div>
              </button>
            </li>
          </ul>
        </div>
        <div>
          <h3
            class="relative mb-8 pb-4 text-base font-semibold text-[#E6EDF3] before:w-10 before:bg-[#0167F3] before:left-0 before:absolute before:bottom-0 before:h-1">
            Categories
          </h3>
          <ul class="space-y-3">
            <li>
              <router-link to="/ideas"
                class="text-[#7d8590] text-base font-medium cursor-pointer transition-all duration-500 hover:text-[#0167F3] hover:ml-1">
                Ideas
              </router-link>
            </li>
            <li>
              <router-link to="/"
                class="text-[#7d8590] text-base font-medium cursor-pointer transition-all duration-500 hover:text-[#0167F3] hover:ml-1">
                Startups
              </router-link>
            </li>
            <li>
              <router-link to="/"
                class="text-[#7d8590] text-base font-medium cursor-pointer transition-all duration-500 hover:text-[#0167F3] hover:ml-1">
                Projects
              </router-link>
            </li>
            <li>
              <router-link to="/about"
                class="text-[#7d8590] text-base font-medium cursor-pointer transition-all duration-500 hover:text-[#0167F3] hover:ml-1">
                About us
              </router-link>
            </li>
            <li>
              <router-link to="/contact-us"
                class="text-[#7d8590] text-base font-medium cursor-pointer transition-all duration-500 hover:text-[#0167F3] hover:ml-1">
                Contact us
              </router-link>
            </li>
          </ul>
        </div>
        <div>
          <h3
            class="relative mb-8 pb-4 text-base font-semibold text-[#E6EDF3] before:w-10 before:bg-[#0167F3] before:left-0 before:absolute before:bottom-0 before:h-1">
            Information
          </h3>
          <ul class="space-y-3">
            <li>
              <router-link to="/"
                class="text-[#7d8590] text-base font-medium cursor-pointer transition-all duration-500 hover:text-[#0167F3] hover:ml-1">
                Cooperation
              </router-link>
            </li>
            <li>
              <router-link to="/"
                class="text-[#7d8590] text-base font-medium cursor-pointer transition-all duration-500 hover:text-[#0167F3] hover:ml-1">
                Departments
              </router-link>
            </li>
            <li>
              <router-link to="/"
                class="text-[#7d8590] text-base font-medium cursor-pointer transition-all duration-500 hover:text-[#0167F3] hover:ml-1">
                Our partners
              </router-link>
            </li>
            <li>
              <router-link to="/"
                class="text-[#7d8590] text-base font-medium cursor-pointer transition-all duration-500 hover:text-[#0167F3] hover:ml-1">
                Our team
              </router-link>
            </li>
            <li>
              <router-link to="/"
                class="text-[#7d8590] text-base font-medium cursor-pointer transition-all duration-500 hover:text-[#0167F3] hover:ml-1">
                Sitemaps
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="container mx-auto">
      <div class="flex justify-center pt-6 border-t border-gray-800">
        <span class="text-sm text-[#7d8590]">
          &copy; 2023
          <a href="http://it-forelead.uz" class="cursor-pointer hover:text-[#0167F3]">
            IT-Forelead
          </a>
          Inc. All rights reserved.
        </span>
      </div>
    </div>
  </footer>

  <!-- <footer class="pt-4 bg-[#0d1117]">
    <div class="container px-6 py-8 mx-auto">
      <div class="grid  md:grid-cols-6 gap-8 mb-0 md:mb-8">
        <div class="col-span-2">
          <div class="text-3xl font-bold text-white mb-6">InvestIdeas</div>
          <h2 class="text-sm font-semibold text-[#E6EDF3]">Subscribe to our newsletter</h2>
          <p class="text-sm text-[#7d8590] mb-4">Get product updates, company news, and more.</p>
          <div
            class="inline-flex items-center justify-center bg-transparent border border-solid border-white/20 hover:border-white duration-500 whitespace-nowrap rounded-md select-none px-6 py-3 text-base font-bold text-white shadow cursor-pointer">
            Subscribe
          </div>
        </div>
        <div class="hidden md:block">
          <div class="my-3 text-base font-semibold text-[#7d8590]">Product</div>
          <ul class="space-y-2">
            <li>
              <a href="#"
                class="text-sm text-[#7d8590] transition duration-200 cursor-pointer hover:text-[#2f81f7]">Features</a>
            </li>
            <li>
              <a href="#"
                class="text-sm text-[#7d8590] transition duration-200 cursor-pointer hover:text-[#2f81f7]">Security</a>
            </li>
            <li>
              <a href="#"
                class="text-sm text-[#7d8590] transition duration-200 cursor-pointer hover:text-[#2f81f7]">Team</a>
            </li>
            <li>
              <a href="#"
                class="text-sm text-[#7d8590] transition duration-200 cursor-pointer hover:text-[#2f81f7]">Enterprise</a>
            </li>
            <li>
              <a href="#"
                class="text-sm text-[#7d8590] transition duration-200 cursor-pointer hover:text-[#2f81f7]">Customer
                stories</a>
            </li>
            <li>
              <a href="#" class="text-sm text-[#7d8590] transition duration-200 cursor-pointer hover:text-[#2f81f7]">The
                ReadME Project</a>
            </li>
            <li>
              <a href="#"
                class="text-sm text-[#7d8590] transition duration-200 cursor-pointer hover:text-[#2f81f7]">Pricing</a>
            </li>
            <li>
              <a href="#"
                class="text-sm text-[#7d8590] transition duration-200 cursor-pointer hover:text-[#2f81f7]">Resources</a>
            </li>
            <li>
              <a href="#"
                class="text-sm text-[#7d8590] transition duration-200 cursor-pointer hover:text-[#2f81f7]">Roadmap</a>
            </li>
            <li>
              <a href="#"
                class="text-sm text-[#7d8590] transition duration-200 cursor-pointer hover:text-[#2f81f7]">Compare
                GitHub</a>
            </li>
            <li>
              <a href="#"
                class="text-sm text-[#7d8590] transition duration-200 cursor-pointer hover:text-[#2f81f7]">Home</a>
            </li>
          </ul>
        </div>
        <div class="hidden md:block">
          <div class="my-3 text-base font-semibold text-[#7d8590]">Platform</div>
          <ul class="space-y-2">
            <li>
              <a href="#"
                class="text-sm text-[#7d8590] transition duration-200 cursor-pointer hover:text-[#2f81f7]">Developer
                API</a>
            </li>
            <li>
              <a href="#"
                class="text-sm text-[#7d8590] transition duration-200 cursor-pointer hover:text-[#2f81f7]">Partners</a>
            </li>
            <li>
              <a href="#"
                class="text-sm text-[#7d8590] transition duration-200 cursor-pointer hover:text-[#2f81f7]">Electron</a>
            </li>
            <li>
              <a href="#"
                class="text-sm text-[#7d8590] transition duration-200 cursor-pointer hover:text-[#2f81f7]">GitHub
                Desktop</a>
            </li>
          </ul>
        </div>
        <div class="hidden md:block">
          <div class="my-3 text-base font-semibold text-[#7d8590]">Support</div>
          <ul class="space-y-2">
            <li>
              <a href="#"
                class="text-sm text-[#7d8590] transition duration-200 cursor-pointer hover:text-[#2f81f7]">Docs</a>
            </li>
            <li>
              <a href="#"
                class="text-sm text-[#7d8590] transition duration-200 cursor-pointer hover:text-[#2f81f7]">Community
                Forum</a>
            </li>
            <li>
              <a href="#"
                class="text-sm text-[#7d8590] transition duration-200 cursor-pointer hover:text-[#2f81f7]">Professional
                Services</a>
            </li>
            <li>
              <a href="#"
                class="text-sm text-[#7d8590] transition duration-200 cursor-pointer hover:text-[#2f81f7]">Premium
                Support</a>
            </li>
            <li>
              <a href="#"
                class="text-sm text-[#7d8590] transition duration-200 cursor-pointer hover:text-[#2f81f7]">Skills</a>
            </li>
            <li>
              <a href="#"
                class="text-sm text-[#7d8590] transition duration-200 cursor-pointer hover:text-[#2f81f7]">Status</a>
            </li>
            <li>
              <a href="#"
                class="text-sm text-[#7d8590] transition duration-200 cursor-pointer hover:text-[#2f81f7]">Contact
                GitHub</a>
            </li>
          </ul>
        </div>
        <div class="hidden md:block">
          <div class="my-3 text-base font-semibold text-[#7d8590]">Company</div>
          <ul class="space-y-2">
            <li>
              <a href="#"
                class="text-sm text-[#7d8590] transition duration-200 cursor-pointer hover:text-[#2f81f7]">About</a>
            </li>
            <li>
              <a href="#"
                class="text-sm text-[#7d8590] transition duration-200 cursor-pointer hover:text-[#2f81f7]">Blog</a>
            </li>
            <li>
              <a href="#"
                class="text-sm text-[#7d8590] transition duration-200 cursor-pointer hover:text-[#2f81f7]">Careers</a>
            </li>
            <li>
              <a href="#"
                class="text-sm text-[#7d8590] transition duration-200 cursor-pointer hover:text-[#2f81f7]">Press</a>
            </li>
            <li>
              <a href="#"
                class="text-sm text-[#7d8590] transition duration-200 cursor-pointer hover:text-[#2f81f7]">Inclusion</a>
            </li>
            <li>
              <a href="#"
                class="text-sm text-[#7d8590] transition duration-200 cursor-pointer hover:text-[#2f81f7]">Social
                Impact</a>
            </li>
            <li>
              <a href="#"
                class="text-sm text-[#7d8590] transition duration-200 cursor-pointer hover:text-[#2f81f7]">Shop</a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="bg-[#161b22]">
      <div class="container px-6 mx-auto py-6">
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-2">
            <div class="text-sm text-[#7d8590]">&copy; 2023 IT-ForeLead Inc.</div>
            <div class="text-sm text-[#7d8590]">All rights reserved.</div>
          </div>

          <ul class="flex items-center space-x-3">
            <li class="text-[#6e7681]">
              <svg aria-label="github" height="19" viewBox="0 0 14 14" width="19">
                <path
                  d="M7 .175c-3.872 0-7 3.128-7 7 0 3.084 2.013 5.71 4.79 6.65.35.066.482-.153.482-.328v-1.181c-1.947.415-2.363-.941-2.363-.941-.328-.81-.787-1.028-.787-1.028-.634-.438.044-.416.044-.416.7.044 1.071.722 1.071.722.635 1.072 1.641.766 2.035.59.066-.459.24-.765.437-.94-1.553-.175-3.193-.787-3.193-3.456 0-.766.262-1.378.721-1.881-.065-.175-.306-.897.066-1.86 0 0 .59-.197 1.925.722a6.754 6.754 0 0 1 1.75-.24c.59 0 1.203.087 1.75.24 1.335-.897 1.925-.722 1.925-.722.372.963.131 1.685.066 1.86.46.48.722 1.115.722 1.88 0 2.691-1.641 3.282-3.194 3.457.24.219.481.634.481 1.29v1.926c0 .197.131.415.481.328C11.988 12.884 14 10.259 14 7.175c0-3.872-3.128-7-7-7z"
                  fill="currentColor" fill-rule="nonzero"></path>
              </svg>
            </li>
            <li class="text-[#6e7681]">
              <svg aria-label="twitter" fill="currentColor" height="16" viewBox="0 0 18 15">
                <path
                  d="M18 1.684l-1.687 1.684v.28c0 .307-.05.602-.123.886-.04 2.316-.777 5.387-3.816 7.81C6.404 17.115 0 12.907 0 12.907c5.063 0 5.063-1.684 5.063-1.684-1.126 0-3.376-2.243-3.376-2.243.563.56 1.689 0 1.689 0C.56 7.295.56 5.61.56 5.61c.563.561 1.689 0 1.689 0C-.563 3.368 1.124.561 1.124.561 1.687 3.368 9 4.49 9 4.49l.093-.046A6.637 6.637 0 0 1 9 3.368C9 1.353 10.636 0 12.656 0c1.112 0 2.094.506 2.765 1.286l.329-.163L17.437 0l-1.122 2.245L18 1.684z"
                  fill-rule="nonzero"></path>
              </svg>
            </li>
            <li class="text-[#6e7681]">
              <svg aria-label="github" height="19" viewBox="0 0 14 14" width="19">
                <path
                  d="M7 .175c-3.872 0-7 3.128-7 7 0 3.084 2.013 5.71 4.79 6.65.35.066.482-.153.482-.328v-1.181c-1.947.415-2.363-.941-2.363-.941-.328-.81-.787-1.028-.787-1.028-.634-.438.044-.416.044-.416.7.044 1.071.722 1.071.722.635 1.072 1.641.766 2.035.59.066-.459.24-.765.437-.94-1.553-.175-3.193-.787-3.193-3.456 0-.766.262-1.378.721-1.881-.065-.175-.306-.897.066-1.86 0 0 .59-.197 1.925.722a6.754 6.754 0 0 1 1.75-.24c.59 0 1.203.087 1.75.24 1.335-.897 1.925-.722 1.925-.722.372.963.131 1.685.066 1.86.46.48.722 1.115.722 1.88 0 2.691-1.641 3.282-3.194 3.457.24.219.481.634.481 1.29v1.926c0 .197.131.415.481.328C11.988 12.884 14 10.259 14 7.175c0-3.872-3.128-7-7-7z"
                  fill="currentColor" fill-rule="nonzero"></path>
              </svg>
            </li>
            <li class="text-[#6e7681]">
              <svg aria-label="twitter" fill="currentColor" height="16" viewBox="0 0 18 15">
                <path
                  d="M18 1.684l-1.687 1.684v.28c0 .307-.05.602-.123.886-.04 2.316-.777 5.387-3.816 7.81C6.404 17.115 0 12.907 0 12.907c5.063 0 5.063-1.684 5.063-1.684-1.126 0-3.376-2.243-3.376-2.243.563.56 1.689 0 1.689 0C.56 7.295.56 5.61.56 5.61c.563.561 1.689 0 1.689 0C-.563 3.368 1.124.561 1.124.561 1.687 3.368 9 4.49 9 4.49l.093-.046A6.637 6.637 0 0 1 9 3.368C9 1.353 10.636 0 12.656 0c1.112 0 2.094.506 2.765 1.286l.329-.163L17.437 0l-1.122 2.245L18 1.684z"
                  fill-rule="nonzero"></path>
              </svg>
            </li>
            <li class="text-[#6e7681]">
              <svg aria-label="github" height="19" viewBox="0 0 14 14" width="19">
                <path
                  d="M7 .175c-3.872 0-7 3.128-7 7 0 3.084 2.013 5.71 4.79 6.65.35.066.482-.153.482-.328v-1.181c-1.947.415-2.363-.941-2.363-.941-.328-.81-.787-1.028-.787-1.028-.634-.438.044-.416.044-.416.7.044 1.071.722 1.071.722.635 1.072 1.641.766 2.035.59.066-.459.24-.765.437-.94-1.553-.175-3.193-.787-3.193-3.456 0-.766.262-1.378.721-1.881-.065-.175-.306-.897.066-1.86 0 0 .59-.197 1.925.722a6.754 6.754 0 0 1 1.75-.24c.59 0 1.203.087 1.75.24 1.335-.897 1.925-.722 1.925-.722.372.963.131 1.685.066 1.86.46.48.722 1.115.722 1.88 0 2.691-1.641 3.282-3.194 3.457.24.219.481.634.481 1.29v1.926c0 .197.131.415.481.328C11.988 12.884 14 10.259 14 7.175c0-3.872-3.128-7-7-7z"
                  fill="currentColor" fill-rule="nonzero"></path>
              </svg>
            </li>
            <li class="text-[#6e7681]">
              <svg aria-label="twitter" fill="currentColor" height="16" viewBox="0 0 18 15">
                <path
                  d="M18 1.684l-1.687 1.684v.28c0 .307-.05.602-.123.886-.04 2.316-.777 5.387-3.816 7.81C6.404 17.115 0 12.907 0 12.907c5.063 0 5.063-1.684 5.063-1.684-1.126 0-3.376-2.243-3.376-2.243.563.56 1.689 0 1.689 0C.56 7.295.56 5.61.56 5.61c.563.561 1.689 0 1.689 0C-.563 3.368 1.124.561 1.124.561 1.687 3.368 9 4.49 9 4.49l.093-.046A6.637 6.637 0 0 1 9 3.368C9 1.353 10.636 0 12.656 0c1.112 0 2.094.506 2.765 1.286l.329-.163L17.437 0l-1.122 2.245L18 1.684z"
                  fill-rule="nonzero"></path>
              </svg>
            </li>
          </ul>
        </div>

      </div>

    </div>
  </footer> -->
</template>

<style scoped></style>