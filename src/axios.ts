import axios from "axios";

export const wordpressApi = axios.create({
  baseURL: process.env.VUE_APP_WP_API_BASE_URL,
});
