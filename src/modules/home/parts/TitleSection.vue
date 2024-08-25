<template>
  <div class="items-center flex flex-col bg-background-secondary w-full">
    <div class="w-[80%] sm:w-[40%] flex flex-col items-center">
      <h1
        class="font-cardo text-3xl sm:text-4xl mt-[5%] text-center leading-10"
      >
        Creating Green Products for Green People
      </h1>
      <h2 class="mt-4 text-center">
        Where style meets sustainability. At Greenwash Goods, we offer
        thoughtfully crafted products and services designed to help you live
        (and look) greener. Because looking eco-friendly is better than being
        eco-friendly.
      </h2>
      <div class="mt-8 flex gap-2">
        <c-button to="about">About us</c-button>
        <c-button to="blog">Our blog</c-button>
      </div>
    </div>
    <img
      class="size-[80%] sm:size-[60%] md:size-[50%] lg:size-[40%] rounded-3xl mt-12 sm:mt-20 mb-12 sm:mb-32"
      src="https://i.imgur.com/DdsppaG.png"
      alt="A stylish and minimalistic website cover image for 'Greenwash Goods,' featuring vibrant green plants and sleek eco-friendly products."
    />
  </div>
</template>

<script setup lang="ts">
import CButton from "@/components/c-button.vue";
</script>
