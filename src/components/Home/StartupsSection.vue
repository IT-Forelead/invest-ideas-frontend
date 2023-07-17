<script setup>
import { Vue3Marquee } from 'vue3-marquee'
import 'vue3-marquee/dist/style.css'
import CaretRightIcon from '../../assets/icons/CaretRightIcon.vue'
import MySqlIcon from '../../assets/icons/MySqlIcon.vue'
import AkkaIcon from '../../assets/icons/AkkaIcon.vue'
import AngularJsIcon from '../../assets/icons/AngularJsIcon.vue'
import AnsibleIcon from '../../assets/icons/AnsibleIcon.vue'
import ApacheAirFlowIcon from '../../assets/icons/ApacheAirFlowIcon.vue'
import ApacheIcon from '../../assets/icons/ApacheIcon.vue'
import ArgoIcon from '../../assets/icons/ArgoIcon.vue'
import AstroIcon from '../../assets/icons/AstroIcon.vue'
import AxiosIcon from '../../assets/icons/AxiosIcon.vue'
import BackboneJsIcon from '../../assets/icons/BackboneJsIcon.vue'
import BootstrapIcon from '../../assets/icons/BootstrapIcon.vue'
import MongoDbIcon from '../../assets/icons/MongoDbIcon.vue'
import NestJsIcon from '../../assets/icons/NestJsIcon.vue'
import NodeJsIcon from '../../assets/icons/NodeJsIcon.vue'
import NuxtJsIcon from '../../assets/icons/NuxtJsIcon.vue'
import SparkIcon from '../../assets/icons/SparkIcon.vue'
import RacketLaunchIcon from '../../assets/icons/RacketLaunchIcon.vue'
import UserIcon from '../../assets/icons/UserIcon.vue'
import ArduinoIcon from '../../assets/icons/ArduinoIcon.vue'
import CakePhpIcon from '../../assets/icons/CakePhpIcon.vue'
import CassandraIcon from '../../assets/icons/CassandraIcon.vue'
import CIcon from '../../assets/icons/CIcon.vue'
import CosmosDbIcon from '../../assets/icons/CosmosDbIcon.vue'
import CouchDbIcon from '../../assets/icons/CouchDbIcon.vue'
import CPlusPlusIcon from '../../assets/icons/CPlusPlusIcon.vue'
import CSharpIcon from '../../assets/icons/CSharpIcon.vue'
import CSS3Icon from '../../assets/icons/CSS3Icon.vue'
import DjangoIcon from '../../assets/icons/DjangoIcon.vue'
import DockerIcon from '../../assets/icons/DockerIcon.vue'
import DotNetIcon from '../../assets/icons/DotNetIcon.vue'
import ElasticsearchIcon from '../../assets/icons/ElasticsearchIcon.vue'
import FlutterIcon from '../../assets/icons/FlutterIcon.vue'
import GoIcon from '../../assets/icons/GoIcon.vue'
import HTML5Icon from '../../assets/icons/HTML5Icon.vue'
import JavaIcon from '../../assets/icons/JavaIcon.vue'
import JavaScriptIcon from '../../assets/icons/JavaScriptIcon.vue'
import JsonIcon from '../../assets/icons/JsonIcon.vue'
import KibanaIcon from '../../assets/icons/KibanaIcon.vue'
import KotlinIcon from '../../assets/icons/KotlinIcon.vue'
import LessIcon from '../../assets/icons/LessIcon.vue'
import LogstashIcon from '../../assets/icons/LogstashIcon.vue'
import PhpIcon from '../../assets/icons/PhpIcon.vue'
import PostgreSqlIcon from '../../assets/icons/PostgreSqlIcon.vue'
import PythonIcon from '../../assets/icons/PythonIcon.vue'
import RedisIcon from '../../assets/icons/RedisIcon.vue'
import RubyIcon from '../../assets/icons/RubyIcon.vue'
import ScalaIcon from '../../assets/icons/ScalaIcon.vue'
import TypeScriptIcon from '../../assets/icons/TypeScriptIcon.vue'
import ViteJsIcon from '../../assets/icons/ViteJsIcon.vue'
import VueJsIcon from '../../assets/icons/VueJsIcon.vue'

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
                                <AngularJsIcon class="h-24 w-auto text-[#6e7681]" />
                                <AnsibleIcon class="h-12 w-auto text-[#6e7681]" />
                                <ApacheAirFlowIcon class="h-24 w-auto text-[#6e7681]" />
                                <ApacheIcon class="h-24 w-auto text-[#6e7681]" />
                                <ArgoIcon class="h-12 w-auto text-[#6e7681]" />
                                <AstroIcon class="h-24 w-auto text-[#6e7681]" />
                                <AxiosIcon class="h-24 w-auto text-[#6e7681]" />
                                <BackboneJsIcon class="h-12 w-auto text-[#6e7681]" />
                                <BootstrapIcon class="h-12 w-auto text-[#6e7681]" />
                                <NestJsIcon class="h-24 w-auto text-[#6e7681]" />
                                <NodeJsIcon class="h-24 w-auto text-[#6e7681]" />
                                <NuxtJsIcon class="h-24 w-auto text-[#6e7681]" />
                                <CSS3Icon class="h-12 w-auto text-[#6e7681]" />
                                <HTML5Icon class="h-12 w-auto text-[#6e7681]" />
                                <JavaScriptIcon class="h-12 w-auto text-[#6e7681]" />
                                <JsonIcon class="h-12 w-auto text-[#6e7681]" />
                                <LessIcon class="h-24 w-auto text-[#6e7681]" />
                                <TypeScriptIcon class="h-12 w-auto text-[#6e7681]" />
                                <ViteJsIcon class="h-12 w-auto text-[#6e7681]" />
                                <VueJsIcon class="h-12 w-auto text-[#6e7681]" />
                            </div>
                        </Vue3Marquee>
                        <Vue3Marquee :pauseOnHover="true" :duration="100" :gradient="false" :direction="'reverse'"
                            class="overflow-hidden">
                            <div class="flex items-center ml-6 space-x-6">
                                <AngularJsIcon class="h-24 w-auto text-[#6e7681]" />
                                <AnsibleIcon class="h-12 w-auto text-[#6e7681]" />
                                <ApacheAirFlowIcon class="h-24 w-auto text-[#6e7681]" />
                                <ApacheIcon class="h-24 w-auto text-[#6e7681]" />
                                <ArgoIcon class="h-12 w-auto text-[#6e7681]" />
                                <AstroIcon class="h-24 w-auto text-[#6e7681]" />
                                <AxiosIcon class="h-24 w-auto text-[#6e7681]" />
                                <BackboneJsIcon class="h-12 w-auto text-[#6e7681]" />
                                <BootstrapIcon class="h-12 w-auto text-[#6e7681]" />
                                <NestJsIcon class="h-24 w-auto text-[#6e7681]" />
                                <NodeJsIcon class="h-24 w-auto text-[#6e7681]" />
                                <NuxtJsIcon class="h-24 w-auto text-[#6e7681]" />
                                <CSS3Icon class="h-12 w-auto text-[#6e7681]" />
                                <HTML5Icon class="h-12 w-auto text-[#6e7681]" />
                                <JavaScriptIcon class="h-12 w-auto text-[#6e7681]" />
                                <JsonIcon class="h-12 w-auto text-[#6e7681]" />
                                <LessIcon class="h-24 w-auto text-[#6e7681]" />
                                <TypeScriptIcon class="h-12 w-auto text-[#6e7681]" />
                                <ViteJsIcon class="h-12 w-auto text-[#6e7681]" />
                                <VueJsIcon class="h-12 w-auto text-[#6e7681]" />
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
                                <MySqlIcon class="h-20 w-auto text-[#6e7681]" />
                                <AkkaIcon class="h-24 w-auto text-[#6e7681]" />
                                <AnsibleIcon class="h-12 w-auto text-[#6e7681]" />
                                <MongoDbIcon class="h-12 w-auto text-[#6e7681]" />
                                <NodeJsIcon class="h-24 w-auto text-[#6e7681]" />
                                <SparkIcon class="h-20 w-auto text-[#6e7681]" />
                                <ArduinoIcon class="h-14 w-auto text-[#6e7681]" />
                                <CakePhpIcon class="h-24 w-auto text-[#6e7681]" />
                                <CassandraIcon class="h-16 w-auto text-[#6e7681]" />
                                <CIcon class="h-12 w-auto text-[#6e7681]" />
                                <CosmosDbIcon class="h-14 w-auto text-[#6e7681]" />
                                <CouchDbIcon class="h-24 w-auto text-[#6e7681]" />
                                <CPlusPlusIcon class="h-12 w-auto text-[#6e7681]" />
                                <CSharpIcon class="h-12 w-auto text-[#6e7681]" />
                                <DjangoIcon class="h-24 w-auto text-[#6e7681]" />
                                <DockerIcon class="h-14 w-auto text-[#6e7681]" />
                                <DotNetIcon class="h-14 w-auto text-[#6e7681]" />
                                <ElasticsearchIcon class="h-12 w-auto text-[#6e7681]" />
                                <FlutterIcon class="h-12 w-auto text-[#6e7681]" />
                                <GoIcon class="h-12 w-auto text-[#6e7681]" />
                                <JavaIcon class="h-16 w-auto text-[#6e7681]" />
                                <JsonIcon class="h-12 w-auto text-[#6e7681]" />
                                <KibanaIcon class="h-24 w-auto text-[#6e7681]" />
                                <KotlinIcon class="h-24 w-auto text-[#6e7681]" />
                                <LogstashIcon class="h-24 w-auto text-[#6e7681]" />
                                <PhpIcon class="h-16 w-auto text-[#6e7681]" />
                                <PostgreSqlIcon class="h-12 w-auto text-[#6e7681]" />
                                <PythonIcon class="h-12 w-auto text-[#6e7681]" />
                                <RedisIcon class="h-12 w-auto text-[#6e7681]" />
                                <RubyIcon class="h-12 w-auto text-[#6e7681]" />
                                <ScalaIcon class="h-24 w-auto text-[#6e7681]" />
                            </div>
                        </Vue3Marquee>
                        <Vue3Marquee :pauseOnHover="true" :duration="100" :gradient="false" :direction="'reverse'"
                            class="overflow-hidden">
                            <div class="flex items-center ml-6 space-x-6">
                                <MySqlIcon class="h-20 w-auto text-[#6e7681]" />
                                <AkkaIcon class="h-24 w-auto text-[#6e7681]" />
                                <AnsibleIcon class="h-12 w-auto text-[#6e7681]" />
                                <MongoDbIcon class="h-12 w-auto text-[#6e7681]" />
                                <NodeJsIcon class="h-24 w-auto text-[#6e7681]" />
                                <SparkIcon class="h-20 w-auto text-[#6e7681]" />
                                <ArduinoIcon class="h-14 w-auto text-[#6e7681]" />
                                <CakePhpIcon class="h-24 w-auto text-[#6e7681]" />
                                <CassandraIcon class="h-16 w-auto text-[#6e7681]" />
                                <CIcon class="h-12 w-auto text-[#6e7681]" />
                                <CosmosDbIcon class="h-14 w-auto text-[#6e7681]" />
                                <CouchDbIcon class="h-24 w-auto text-[#6e7681]" />
                                <CPlusPlusIcon class="h-12 w-auto text-[#6e7681]" />
                                <CSharpIcon class="h-12 w-auto text-[#6e7681]" />
                                <DjangoIcon class="h-24 w-auto text-[#6e7681]" />
                                <DockerIcon class="h-14 w-auto text-[#6e7681]" />
                                <DotNetIcon class="h-14 w-auto text-[#6e7681]" />
                                <ElasticsearchIcon class="h-12 w-auto text-[#6e7681]" />
                                <FlutterIcon class="h-12 w-auto text-[#6e7681]" />
                                <GoIcon class="h-12 w-auto text-[#6e7681]" />
                                <JavaIcon class="h-16 w-auto text-[#6e7681]" />
                                <JsonIcon class="h-12 w-auto text-[#6e7681]" />
                                <KibanaIcon class="h-24 w-auto text-[#6e7681]" />
                                <KotlinIcon class="h-24 w-auto text-[#6e7681]" />
                                <LogstashIcon class="h-24 w-auto text-[#6e7681]" />
                                <PhpIcon class="h-16 w-auto text-[#6e7681]" />
                                <PostgreSqlIcon class="h-12 w-auto text-[#6e7681]" />
                                <PythonIcon class="h-12 w-auto text-[#6e7681]" />
                                <RedisIcon class="h-12 w-auto text-[#6e7681]" />
                                <RubyIcon class="h-12 w-auto text-[#6e7681]" />
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