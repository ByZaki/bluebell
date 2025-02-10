import axios from "axios";

const API_URL = "https://67c3a5993a006ed7.mokky.dev";

const $axios = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

$axios.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  return config;
});

export default $axios;
