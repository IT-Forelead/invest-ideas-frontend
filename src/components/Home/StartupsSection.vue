<script setup>
import { Vue3Marquee } from 'vue3-marquee'
import 'vue3-marquee/dist/style.css'
import CaretRightIcon from '../../assets/icons/CaretRightIcon.vue'
import RacketLaunchIcon from '../../assets/icons/RacketLaunchIcon.vue'
import UserIcon from '../../assets/icons/UserIcon.vue'
import { defineAsyncComponent, ref } from 'vue'

const frontendIconsList = ref([
    { name: 'AngularJsIcon', class: 'h-24 w-auto text-[#6e7681]' },
    { name: 'AnsibleIcon', class: 'h-12 w-auto text-[#6e7681]' },
    { name: 'ApacheAirFlowIcon', class: 'h-24 w-auto text-[#6e7681]' },
    { name: 'ApacheIcon', class: 'h-24 w-auto text-[#6e7681]' },
    { name: 'ArgoIcon', class: 'h-12 w-auto text-[#6e7681]' },
    { name: 'AstroIcon', class: 'h-24 w-auto text-[#6e7681]' },
    { name: 'AxiosIcon', class: 'h-24 w-auto text-[#6e7681]' },
    { name: 'BackboneJsIcon', class: 'h-12 w-auto text-[#6e7681]' },
    { name: 'BootstrapIcon', class: 'h-12 w-auto text-[#6e7681]' },
    { name: 'NestJsIcon', class: 'h-24 w-auto text-[#6e7681]' },
    { name: 'NodeJsIcon', class: 'h-24 w-auto text-[#6e7681]' },
    { name: 'NuxtJsIcon', class: 'h-24 w-auto text-[#6e7681]' },
    { name: 'CSS3Icon', class: 'h-12 w-auto text-[#6e7681]' },
    { name: 'HTML5Icon', class: 'h-12 w-auto text-[#6e7681]' },
    { name: 'JavaScriptIcon', class: 'h-12 w-auto text-[#6e7681]' },
    { name: 'JsonIcon', class: 'h-12 w-auto text-[#6e7681]' },
    { name: 'LessIcon', class: 'h-24 w-auto text-[#6e7681]' },
    { name: 'TypeScriptIcon', class: 'h-12 w-auto text-[#6e7681]' },
    { name: 'ViteJsIcon', class: 'h-12 w-auto text-[#6e7681]' },
    { name: 'VueJsIcon', class: 'h-12 w-auto text-[#6e7681]' }
])

const backendIconsList = ref([
    { name: 'MySqlIcon', class: 'h-20 w-auto text-[#6e7681]' },
    { name: 'AkkaIcon', class: 'h-24 w-auto text-[#6e7681]' },
    { name: 'AnsibleIcon', class: 'h-12 w-auto text-[#6e7681]' },
    { name: 'MongoDbIcon', class: 'h-12 w-auto text-[#6e7681]' },
    { name: 'NodeJsIcon', class: 'h-24 w-auto text-[#6e7681]' },
    { name: 'SparkIcon', class: 'h-20 w-auto text-[#6e7681]' },
    { name: 'ArduinoIcon', class: 'h-14 w-auto text-[#6e7681]' },
    { name: 'CakePhpIcon', class: 'h-24 w-auto text-[#6e7681]' },
    { name: 'CassandraIcon', class: 'h-16 w-auto text-[#6e7681]' },
    { name: 'CIcon', class: 'h-12 w-auto text-[#6e7681]' },
    { name: 'CosmosDbIcon', class: 'h-14 w-auto text-[#6e7681]' },
    { name: 'CouchDbIcon', class: 'h-24 w-auto text-[#6e7681]' },
    { name: 'CPlusPlusIcon', class: 'h-12 w-auto text-[#6e7681]' },
    { name: 'CSharpIcon', class: 'h-12 w-auto text-[#6e7681]' },
    { name: 'DjangoIcon', class: 'h-24 w-auto text-[#6e7681]' },
    { name: 'DockerIcon', class: 'h-14 w-auto text-[#6e7681]' },
    { name: 'DotNetIcon', class: 'h-14 w-auto text-[#6e7681]' },
    { name: 'ElasticsearchIcon', class: 'h-12 w-auto text-[#6e7681]' },
    { name: 'FlutterIcon', class: 'h-12 w-auto text-[#6e7681]' },
    { name: 'GoIcon', class: 'h-12 w-auto text-[#6e7681]' },
    { name: 'JavaIcon', class: 'h-16 w-auto text-[#6e7681]' },
    { name: 'JsonIcon', class: 'h-12 w-auto text-[#6e7681]' },
    { name: 'KibanaIcon', class: 'h-24 w-auto text-[#6e7681]' },
    { name: 'KotlinIcon', class: 'h-24 w-auto text-[#6e7681]' },
    { name: 'LogstashIcon', class: 'h-24 w-auto text-[#6e7681]' },
    { name: 'PhpIcon', class: 'h-16 w-auto text-[#6e7681]' },
    { name: 'PostgreSqlIcon', class: 'h-12 w-auto text-[#6e7681]' },
    { name: 'PythonIcon', class: 'h-12 w-auto text-[#6e7681]' },
    { name: 'RedisIcon', class: 'h-12 w-auto text-[#6e7681]' },
    { name: 'RubyIcon', class: 'h-12 w-auto text-[#6e7681]' },
    { name: 'ScalaIcon', class: 'h-24 w-auto text-[#6e7681]' }
])
</script>
<template>
    <section class="bg-[#0D1117]">
        <div class="container px-6 mx-auto">
            <div class="flex">
                <div class="w-1/12 flex flex-col items-center relative">
                    <div class="mx-auto my-8">
                        <div class="relative inline-block mb-10">
                            <RacketLaunchIcon class="w-6 h-6 text-white" />
                            <div class="absolute bg-[#FFA28B] blur-lg left-0 top-0 h-full w-full"></div>
                        </div>
                        <div class="w-[3px] h-72 rounded-md mx-auto"
                            style="background: linear-gradient(#ffd6cc, #ec6547, #ec6547, #0D1117);"></div>
                    </div>
                </div>
                <div class="w-11/12 pt-8 relative z-[1]">
                    <div class="text-2xl mb-6 font-medium text-white">Startups</div>
                    <h3 class="text-5xl font-medium text-white max-w-5xl tracking-tight">
                        <span class="text-[#FFA28B]">Choose any idea and turn it into a startup.</span>
                        Choose the one you like from the ideas and turn it into a startup using the programming
                        language and technologies you know.
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
                        style="background: linear-gradient(#0D1117, #ea6045, #ea6045, #0D1117);"></div>
                    <img class="left-[calc(50%_-_2px)] max-w-[9vw] h-[485px] w-[81px] md:block absolute bottom-4"
                        src="/images/git-branch-collaboration.svg" alt="">
                </div>
                <div class="w-11/12 ml-2 md:ml-10 relative z-[1] overflow-hidden">
                    <img class="absolute -top-96 right-0 h-auto w-full pointer-events-none bg-cover overflow-clip rotate-180 translate-x-80"
                        src="/images/bg-stars.webp" alt="" />
                    <div class="py-8 px-16 mb-2 max-w-5xl tracking-tight">
                        <h2 class="text-2xl mb-4 text-[#7D8590]">
                            <span class="text-white font-normal">Invest Ideas Team</span>
                            creates public Repositories on the Github platform for startups based on supply and demand. You
                            can develop startups in these repositories.
                        </h2>
                        <router-link to="/startups">
                            <div class="flex items-center space-x-2 font-semibold text-xl text-white py-1 cursor-pointer">
                                <span>View all startups</span>
                                <CaretRightIcon class="w-5 h-5 text-white" />
                            </div>
                        </router-link>
                    </div>
                    <div class="px-16 pt-12 pb-20 w-1/2">
                        <div
                            class="text-xs font-semibold inline-block px-2 py-1 border border-double border-[#FFA28B] text-[#FFA28B] rounded-full">
                            Did you know?
                        </div>
                        <h3 class="text-6xl font-medium text-[#FFA28B] mb-8 mt-4">10+ startups</h3>
                        <p class="mb-4 text-xl font-medium max-w-2xl text-white">
                            Currently, more than 10 startups are being worked on
                        </p>
                    </div>
                </div>
            </div>
            <!-- content -->
            <div class="grid grid-cols-2 gap-8 mt-4">
                <div
                    class="col-span-2 flex h-96 bg-[#161B22] group border border-solid border-[#30363D] rounded-xl box-shadow">
                    <div class="w-1/3 p-16 space-y-12 max-w-5xl tracking-tight">
                        <h2 class="text-2xl mb-4 text-[#7D8590]">
                            <span class="text-white font-normal">Active Users</span>
                            is who are actively contributing to projects that are currently being worked on.
                        </h2>
                        <div class="flex items-center space-x-2 font-semibold text-xl text-white py-1 cursor-pointer">
                            <span>View all active users </span>
                            <CaretRightIcon class="w-5 h-5 text-white" />
                        </div>
                    </div>
                    <div class="w-2/3 py-10 px-16 flex items-end justify-end space-x-6">
                        <div class="w-52 h-64 bg-[#161B22] border border-solid border-[#30363D] rounded-lg">
                            <div class="flex items-center justify-center w-full h-36 rounded-t-md bg-slate-900">
                                <UserIcon class="w-20 h-20 text-[#FFA28B]" />
                            </div>
                            <div class=" text-center p-3 space-y-2">
                                <div class="text-base font-semibold text-white">Shomurodov Og'abek</div>
                                <div class="text-sm text-[#7D8590]">Scala Developer</div>
                            </div>
                        </div>
                        <div class="w-56 h-72 bg-[#161B22] border border-solid border-[#30363D] rounded-lg">
                            <div class="flex items-center justify-center w-full h-40 rounded-t-md bg-slate-900">
                                <UserIcon class="w-24 h-24 text-[#FFA28B]" />
                            </div>
                            <div class=" text-center p-3 space-y-2">
                                <div class="text-base font-semibold text-white">Jumaniyozov Surojiddin</div>
                                <div class="text-sm text-[#7D8590]">Scala Developer</div>
                            </div>
                        </div>
                        <div class="w-52 h-64 bg-[#161B22] border border-solid border-[#30363D] rounded-lg">
                            <div class="flex items-center justify-center w-full h-36 rounded-t-md bg-slate-900">
                                <UserIcon class="w-20 h-20 text-[#FFA28B]" />
                            </div>
                            <div class=" text-center p-3 space-y-2">
                                <div class="text-base font-semibold text-white">Raxmatov Maftunbek</div>
                                <div class="text-sm text-[#7D8590]">Scala Developer</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    class="flex flex-col justify-center space-y-4 h-96 bg-[#161B22] border border-solid border-[#30363D] rounded-xl box-shadow">
                    <div class="flex justify-center">
                        <div class="py-8 rounded-lg w-3/6 space-y-4">
                            <div class="text-3xl text-center font-bold text-[#FFA28B]">Frontend</div>
                            <div class="text-base text-center text-white">Technologies that are widely used in the frontend
                                part of projects</div>
                        </div>
                    </div>
                    <div>
                        <Vue3Marquee :pauseOnHover="true" :duration="100" :gradient="false" :direction="'normal'"
                            class="overflow-hidden">
                            <div class="flex items-center ml-6 space-x-6">
                                <component v-for="(icon, idx) in frontendIconsList" :key="idx"
                                    :is="defineAsyncComponent(() => import(`../../assets/icons/${icon?.name}.vue`))"
                                    :class="icon?.class">
                                </component>
                            </div>
                        </Vue3Marquee>
                        <Vue3Marquee :pauseOnHover="true" :duration="100" :gradient="false" :direction="'reverse'"
                            class="overflow-hidden">
                            <div class="flex items-center ml-6 space-x-6">
                                <component v-for="(icon, idx) in frontendIconsList" :key="idx"
                                    :is="defineAsyncComponent(() => import(`../../assets/icons/${icon?.name}.vue`))"
                                    :class="icon?.class">
                                </component>
                            </div>
                        </Vue3Marquee>
                    </div>
                </div>
                <div
                    class="flex flex-col justify-center space-y-4 h-96 bg-[#161B22] border border-solid border-[#30363D] rounded-xl box-shadow">
                    <div class="flex justify-center">
                        <div class="py-8 rounded-lg w-3/6 space-y-4">
                            <div class="text-3xl text-center font-bold text-[#FFA28B]">Backend</div>
                            <div class="text-base text-center text-white">Technologies that are widely used in the backend
                                part of projects</div>
                        </div>
                    </div>
                    <div>
                        <Vue3Marquee :pauseOnHover="true" :duration="100" :gradient="false" :direction="'normal'"
                            class="overflow-hidden">
                            <div class="flex items-center ml-6 space-x-6">
                                <component v-for="(icon, idx) in backendIconsList" :key="idx"
                                    :is="defineAsyncComponent(() => import(`../../assets/icons/${icon?.name}.vue`))"
                                    :class="icon?.class">
                                </component>
                            </div>
                        </Vue3Marquee>
                        <Vue3Marquee :pauseOnHover="true" :duration="100" :gradient="false" :direction="'reverse'"
                            class="overflow-hidden">
                            <div class="flex items-center ml-6 space-x-6">
                                <component v-for="(icon, idx) in backendIconsList" :key="idx"
                                    :is="defineAsyncComponent(() => import(`../../assets/icons/${icon?.name}.vue`))"
                                    :class="icon?.class">
                                </component>
                            </div>
                        </Vue3Marquee>
                    </div>
                </div>
            </div>
            <div class="flex flex-col items-center w-1/12">
                <div
                    class="h-32 w-[3px] bg-gradient-to-b from-[#0D1117] via-[#797ef9] to-[#abb4ff] mt-4 md:mt-6 rounded-md">
                </div>
            </div>
        </div>
    </section>
</template>
<style scoped>
.box-shadow {
    box-shadow: 0 0 0 1px rgba(0, 0, 0, .5), 0 70px 65px rgba(0, 0, 0, .18), 0 30px 30px rgba(0, 0, 0, .14), 0 15px 15px rgba(0, 0, 0, .12), 0 10px 8px rgba(0, 0, 0, .1), 0 4px 4px rgba(0, 0, 0, .08), 0 2px 2px rgba(0, 0, 0, .06) !important;
}
</style>