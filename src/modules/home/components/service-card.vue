<template>
  <div>
    <span class="text-5xl text-type-secondary">*</span>
    <h2 class="font-medium text-lg mb-1.5">{{ title }}</h2>
    <p>{{ description }}</p>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

defineProps<{ title: string; description: string }>();
</script>
