<template>
  <div v-if="!post">
    <CSpinner />
  </div>
  <div v-else class="w-[80%] sm:w-[50%] mb-8">
    <router-link
      :to="{ name: 'blog' }"
      class="text-type-primary flex items-center gap-1 mt-12"
    >
      <ArrowLongLeftIcon class="size-4" />
      <p>Back</p>
    </router-link>
    <h1
      class="font-cardo text-3xl sm:text-4xl mt-[5%] text-center leading-10 mb-8"
    >
      {{ post.title }}
    </h1>
    <span v-html="post.content" />
  </div>
</template>

<script setup lang="ts">
import { defineProps, onMounted, ref } from "vue";
import { useBlogStore } from "../store";
import { Post } from "@/modules/blog/store/state";
import CSpinner from "@/components/c-spinner.vue";
import { ArrowLongLeftIcon } from "@heroicons/vue/24/outline";

const props = defineProps<{ slug: string }>();

const blogStore = useBlogStore();

const post = ref<Post>();
onMounted(async () => {
  const postFromStore = await blogStore.getPostBySlug(props.slug);

  if (postFromStore) {
    post.value = postFromStore;
  } else {
    await blogStore.loadPostBySlug(props.slug);
    post.value = await blogStore.getPostBySlug(props.slug);
  }
});
</script>

<style>
h3 {
  margin-bottom: 5px;
  margin-top: 15px;
}
</style>
