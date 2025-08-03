<template>
  <div class="flex flex-col">
    <img :src="image" class="h-[50%] object-cover rounded-3xl" />
    <div class="mt-12">
      <h3
        class="text-type-primary font-semibold text-2xl text-center sm:text-left"
      >
        "{{ title }}"
      </h3>
      <p class="italic mt-2 sm:ml-10">"{{ quote }}"</p>
      <p class="italic text-sm ml-4 sm:ml-10 mt-2">- {{ author }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

defineProps<{
  title: string;
  quote: string;
  image: string;
  author: string;
  flipped?: boolean;
}>();
</script>
