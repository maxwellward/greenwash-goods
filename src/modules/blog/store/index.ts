import { defineStore } from "pinia";
import { extractStore } from "@/helpers/extractStore";
import { useBlogActions } from "@/modules/blog/store/actions";
import { useBlogGetters } from "@/modules/blog/store/getters";
import { useBlogState } from "@/modules/blog/store/state";

export const useBlogStore = defineStore("blog", () => {
  return {
    ...extractStore(useBlogActions()),
    ...extractStore(useBlogGetters()),
    ...extractStore(useBlogState()),
  };
});
