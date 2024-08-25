import { defineStore } from "pinia";

export const useBlogState = defineStore({
  id: "blog.state",
  state: () => ({
    posts: [] as Post[],
    hasLoadedAllPosts: false,
  }),
});

export type Post = {
  id: string;
  slug: string;
  created_date: Date;
  modified_date: Date;
  status: PostStatus;
  title: string;
  content: string;
  snippet: string;
};

export enum PostStatus {
  PUBLISHED = "publish",
  SCHEDULED = "future",
  DRAFT = "draft",
  PENDING = "pending",
  PRIVATE = "private",
}
