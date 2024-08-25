<template>
  <div class="flex flex-col min-h-screen">
    <NavigationHeader class="w-full" />
    <main class="flex-grow flex flex-col items-center">
      <router-view class="flex-grow" />
    </main>
    <NavigationFooter />
  </div>
</template>

<script setup lang="ts">
import NavigationHeader from "@/parts/NavigationHeader.vue";
import NavigationFooter from "@/parts/NavigationFooter.vue";
</script>
