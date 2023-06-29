<script setup>
</script>
<template>
    <section>
        <div class="relative overflow-hidden">
            <img class="absolute bottom-0 left-0 w-full h-full object-cover block pointer-events-none"
                src="/images/footer-galaxy.jpg" alt="" />
            <div class="container px-6 mx-auto relative z-[2]">
                <div class="flex flex-col items-center justify-center py-36">
                    <div class="text-5xl text-white font-extrabold mb-6 max-w-4xl text-center">
                        The place for anyone from anywhere to bring ideas to life
                    </div>
                    <div class="text-xl text-[#7D8590] text-center max-w-3xl mb-16">
                        Whether you have a startup idea or are looking for an ambitious startup to pitch to, 
                        InvestIdeas is your home. Join the largest developer platform in Uzbekistan to create 
                        innovations that empower humanity. Let's build your idea from here.
                    </div>
                    <div class="flex items-center justify-center space-x-8">
                        <router-link to="/sign-up">
                            <div class="flex items-center justify-center w-72 bg-white duration-500 whitespace-nowrap rounded-md select-none px-7 py-4 text-base font-bold text-[#0D1117] hover:shadow-2xl hover:shadow-white/10 cursor-pointer">
                                Sign up and join us
                            </div>
                        </router-link>
                        <router-link to="/add-idea">
                            <div class="flex items-center justify-center w-72 bg-transparent border-2 border-solid border-white/20 hover:border-white duration-500 whitespace-nowrap rounded-md select-none px-7 py-4 text-base font-bold text-white shadow cursor-pointer">
                                Add your idea now
                            </div>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>