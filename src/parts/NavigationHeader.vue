<template>
  <div class="mx-auto justify-center flex py-12 bg-background-secondary">
    <div class="flex flex-col sm:flex-row items-center justify-between w-[70%]">
      <c-navlink
        class="text-type-primary text-xl font-semibold mb-2 sm:mb-0"
        to="home"
        >Greenwash Goods</c-navlink
      >
      <nav class="flex gap-3 text-type-primary font-medium">
        <c-navlink to="home">Home</c-navlink>
        •
        <c-navlink to="pricing">Pricing</c-navlink>
        •
        <c-navlink to="about">About</c-navlink>
        •
        <c-navlink to="blog">Blog</c-navlink>
      </nav>
    </div>
  </div>
</template>

<script setup lang="ts">
import CNavlink from "@/components/c-navlink.vue";
</script>
