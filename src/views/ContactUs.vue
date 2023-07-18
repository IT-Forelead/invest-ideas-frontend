<script setup>
import { reactive } from 'vue'
import { Toaster, toast } from 'vue-sonner'

const submitForm = reactive({
    email: '',
    title: '',
    message: ''
})

const clearForm = () => {
    submitForm.email = ''
    submitForm.title = ''
    submitForm.message = ''
}

const sendEmail = async () => {
    if (!submitForm.email) {
        toast.error('Please enter your email!')
    } else if (!submitForm.title) {
        toast.error('Please enter title!')
    } else if (submitForm.title.length < 20) {
        toast.error('The title is too short')
    } else if (!submitForm.message) {
        toast.error('Please enter message!')
    } else if (submitForm.message.length < 50) {
        toast.error('The message is too short')
    } else {
        toast.success('Your message has been sent successfully!')
        clearForm()
    }
}

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
                Contact us
            </h1>
            <div class="text-xl font-normal max-w-4xl text-gray-500 mb-12">
                If you have any suggestions, please contact us. We will definitely contact you.
            </div>
            <div class="grid grid-cols-2 gap-8">
                <div class="p-6 space-y-4 bg-[#161B22] border border-[#30363D] rounded-xl">
                    <div>
                        <label for="email" class="block mb-2 text-xl font-medium text-[#e6edf3]">
                            Your email:
                            <span class="text-red-500">*</span>
                        </label>
                        <input v-model="submitForm.email" type="text" id="email"
                            class="border text-sm rounded-lg block w-full p-2.5  bg-[#0D1117] border-[#30363D] placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter your email">
                    </div>
                    <div>
                        <label for="title" class="block mb-2 text-xl font-medium text-[#e6edf3]">
                            Title:
                            <span class="text-red-500">*</span>
                        </label>
                        <input v-model="submitForm.title" type="text" id="title"
                            class="border text-sm rounded-lg block w-full p-2.5  bg-[#0D1117] border-[#30363D] placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter idea's title">
                    </div>
                    <div>
                        <label for="message" class="block mb-2 text-xl font-medium text-[#e6edf3]">
                            Message:
                            <span class="text-red-500">*</span>
                        </label>
                        <textarea v-model="submitForm.message" id="message" rows="5"
                            class="border text-sm rounded-lg block w-full p-2.5  bg-[#0D1117] border-[#30363D] placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Write an article..."></textarea>
                    </div>
                    <div class="flex justify-end pt-2">
                        <button @click="sendEmail()"
                            class="w-48 py-2 px-4 rounded-lg text-white text-base bg-blue-600 cursor-pointer hover:bg-blue-800">
                            Send
                        </button>
                    </div>
                </div>
                <div class="flex">
                    <iframe class="w-full h-auto border border-[#30363D] rounded-xl"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13933.896015266984!2d60.627229448994456!3d41.55529292447378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41dfc92f0b4d4f3d%3A0x139a4f0fa120ea37!2sIT-Forelead!5e0!3m2!1suz!2s!4v1689662209529!5m2!1suz!2s"
                        allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    </section>
</template>
<style scoped></style>
