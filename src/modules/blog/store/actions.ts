import { wordpressApi } from "@/axios";
import { defineStore } from "pinia";
import { Post, useBlogState } from "./state";

export const useBlogActions = defineStore("blog.actions", () => {
  const state = useBlogState();

  const loadPosts = async () => {
    try {
      const { data } = await wordpressApi.get("posts");

      state.posts = data.map((post) => {
        return {
          id: post.id,
          slug: post.slug,
          title: post.title.rendered,
          content: post.content.rendered,
          created_date: new Date(post.date),
          modified_date: new Date(post.modified),
          status: post.status,
          snippet: post.excerpt.rendered,
        };
      });

      state.hasLoadedAllPosts = true;
    } catch (error) {
      console.log(error);
    }
  };

  const loadPostBySlug = async (slug: string) => {
    try {
      const { data } = await wordpressApi.get(`posts/?slug=${slug}`);
      const rawPost = data[0];

      const postToSave: Post = {
        id: rawPost.id,
        slug: rawPost.slug,
        title: rawPost.title.rendered,
        content: rawPost.content.rendered,
        created_date: new Date(rawPost.date),
        modified_date: new Date(rawPost.modified),
        status: rawPost.status,
        snippet: rawPost.excerpt.rendered,
      };

      const existingIndex = state.posts.findIndex(
        (post) => post.id === postToSave.id
      );

      if (existingIndex > -1) {
        console.log("post exists");

        state.posts[existingIndex] = postToSave;
      } else {
        console.log("post doesnt exist");
        console.log(postToSave);

        state.posts.push(postToSave);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return {
    loadPosts,
    loadPostBySlug,
  };
});
