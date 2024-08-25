import { defineStore } from "pinia";
import { Post, useBlogState } from "./state";

export const useBlogGetters = defineStore("blog.getters", () => {
  const state = useBlogState();

  const getPosts = (): Post[] => {
    return state.posts;
  };

  const getPostBySlug = (slug: string): Post | undefined => {
    return state.posts.find((post: Post) => post.slug === slug);
  };

  const getHasLoadedAllPosts = (): boolean => {
    return state.hasLoadedAllPosts;
  };

  return {
    getPosts,
    getPostBySlug,
    getHasLoadedAllPosts,
  };
});
