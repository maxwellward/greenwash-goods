<template>
  <router-link
    v-if="to"
    v-slot="{ href, route, navigate, isActive, isExactActive }"
    :to="{ name: to }"
  >
    <slot v-bind="{ href, route, navigate, isActive, isExactActive }" />
  </router-link>
  <a v-else-if="link" :href="link" target="_blank">
    <slot />
  </a>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

defineProps<{ to?: string; link?: string }>();
</script>
