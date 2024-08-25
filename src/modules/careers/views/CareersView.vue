<template>
  <div class="items-center flex flex-col bg-background-secondary w-full">
    <div class="w-[80%] sm:w-[40%] flex flex-col items-center">
      <h1
        class="font-cardo text-3xl sm:text-4xl mt-[5%] text-center leading-10"
      >
        Work For Us
      </h1>
      <h2 class="mt-4 text-center">
        Are you passionate about creating compelling images and clever marketing
        without getting bogged down by the details? At Greenwash Goods, we blend
        creativity with strategy to craft the perfect illusion. Join our team
        and be part of a unique journey where style meets innovation. If you’re
        ready to excel in the art of making things look impressive (when they're
        not), we’d love to have you on board!
      </h2>
    </div>
    <img
      class="size-[80%] sm:size-[60%] md:size-[50%] lg:size-[35%] rounded-3xl mt-12 sm:mt-20 mb-12 sm:mb-32"
      src="https://i.imgur.com/a99b5QM.png"
    />
    <div class="bg-white w-full flex justify-center py-8 sm:py-24">
      <JobListings />
    </div>
  </div>
</template>

<script setup lang="ts">
import JobListings from "@/modules/careers/parts/JobListings.vue";
</script>
