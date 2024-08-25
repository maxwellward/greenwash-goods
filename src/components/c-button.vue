<template>
  <router-link
    v-if="to"
    :to="{ name: to }"
    class="bg-type-primary px-2.5 py-2 text-sm rounded-md text-white"
  >
    <slot />
  </router-link>
  <a
    v-else-if="link"
    :href="link"
    target="_blank"
    class="bg-type-primary px-2.5 py-2 text-sm rounded-md text-white"
    ><slot
  /></a>
  <button
    v-else
    @click="emit('click')"
    class="bg-type-primary px-2.5 py-2 text-sm rounded-md text-white"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from "vue";

defineProps<{ to?: string; link?: string }>();

const emit = defineEmits<{
  click;
}>();
</script>
