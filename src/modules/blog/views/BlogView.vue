<template>
  <div class="w-full flex flex-col items-center">
    <div class="w-[80%] sm:w-[40%] flex flex-col items-center">
      <h1
        class="font-cardo text-3xl sm:text-4xl mt-[5%] text-center leading-10"
      >
        Blog
      </h1>
      <h2 class="mt-4 text-center">
        Take a deeper dive into global sustainability practices and how we built
        the largest profit-focused sustainability company in Canada.
      </h2>
    </div>
    <!-- Blog Cards -->
    <div class="flex justify-center my-12">
      <div v-if="!hasLoadedAllPosts">
        <c-spinner class="mt-32" />
      </div>
      <div
        v-else-if="posts.length === 0"
        class="text-type-primary flex flex-col items-center mt-12 space-y-1.5"
      >
        <FaceFrownIcon class="size-6" />
        <p>No posts found</p>
      </div>
      <div
        v-else
        class="grid grid-cols-1 lg:grid-cols-3 gap-12 w-[70%] lg:w-[80%]"
      >
        <post-card v-for="post in posts" :key="post.id" :post="post" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from "vue";
import { useBlogStore } from "../store";
import PostCard from "@/modules/blog/components/PostCard.vue";
import CSpinner from "@/components/c-spinner.vue";
import { FaceFrownIcon } from "@heroicons/vue/24/outline";

const blogStore = useBlogStore();

onMounted(() => {
  blogStore.loadPosts();
});

const posts = computed(() => blogStore.getPosts());
const hasLoadedAllPosts = computed(() => blogStore.getHasLoadedAllPosts());
</script>
