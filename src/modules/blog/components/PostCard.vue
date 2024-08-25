<template>
  <router-link
    :to="{ name: 'blog.post', params: { slug: post.slug } }"
    class="border-2 border-type-primary rounded-md px-5 hover:translate-x-0.5 hover:-translate-y-0.5 transition-all duration-150"
  >
    <div class="flex gap-1.5 items-center mt-3">
      <BookOpenIcon class="size-6 text-type-primary" />
      <h2 class="font-medium text-xl font-cardo">{{ post.title }}</h2>
    </div>
    <div class="flex gap-1.5 items-center">
      <ClockIcon class="size-5 text-type-primary" />
      <h3 class="text-sm text-type-primary">
        {{ convertToFriendlyDate(post.created_date) }}
      </h3>
    </div>
    <div v-html="post.snippet" class="my-2" />
  </router-link>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import { Post } from "../state";
import { BookOpenIcon, ClockIcon } from "@heroicons/vue/24/outline";
import { convertToFriendlyDate } from "@/helpers/convertToFriendlyDate";

defineProps<{ post: Post }>();
</script>
