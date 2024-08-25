<template>
  <div
    class="border-type-primary border-2 px-4 rounded-lg w-56 flex flex-col items-center relative hover:scale-105 transition-all duration-100"
  >
    <div
      v-if="tag"
      class="absolute -top-3 rounded-lg py-0.5 px-0.5 bg-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
    >
      <div class="bg-white py-0.5 px-2 rounded-md font-semibold text-sm">
        {{ tag }}
      </div>
    </div>
    <h3 :class="tag ? 'mt-6' : 'mt-3'" class="text-xl font-semibold">
      {{ name }}
    </h3>
    <p class="text-center mt-2" :class="tag ? 'h-[208px]' : 'h-[220px]'">
      {{ description }}
    </p>
    <p class="text-2xl font-semibold">${{ price }} CAD</p>
    <c-button
      class="mt-3"
      link="https://www.canada.ca/en/financial-consumer-agency/services/credit-fraud.html"
      >Purchase</c-button
    >
    <p class="text-xs text-type-secondary mt-2 mb-4 text-center">
      {{ disclaimer }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import CButton from "@/components/c-button.vue";

defineProps<{
  name: string;
  description: string;
  price: number;
  disclaimer: string;
  tag: string;
}>();
</script>
