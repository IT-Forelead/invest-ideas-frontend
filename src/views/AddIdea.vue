<script setup>
</script>

<template>
  <section class="bg-[#0D1117]">
    <div class="container px-6 mx-auto pt-24 pb-16">

      <h1 class="text-5xl font-semibold text-white mt-11 mb-6">
        Add idea
      </h1>
      <div class="text-xl font-normal max-w-4xl text-gray-500 mb-12">
        Describe your idea more fully and clearly, if the content of your idea is suitable, it will be activated by the
        administration
      </div>

      <div class="bg-[#161B22] p-8 border border-solid border-[#30363D] rounded-xl box-shadow">
        <div class="mb-6 w-1/2">
          <label class="block mb-2 text-xl font-medium text-[#e6edf3]">Title: <span class="text-red-500">*</span></label>
          <input type="text"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@flowbite.com">
        </div>
        <div class="mb-6 w-1/2">
          <label class="block mb-2 text-xl font-medium text-[#e6edf3]">Category: <span
              class="text-red-500">*</span></label>
          <input type="text"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@flowbite.com">
        </div>
        <div class="mb-6 w-1/2">
          <label class="block mb-2 text-xl font-medium text-[#e6edf3]">
            Text:
            <span class="text-red-500">*</span>
          </label>
          <textarea id="editor" rows="8"
            class="block px-0 w-full text-sm text-gray-800 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
            placeholder="Write an article..." required></textarea>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped></style>
