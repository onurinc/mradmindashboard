import axios from "axios";

axios.interceptors.request.use(
  (config) => {
    const token = window.localStorage.getItem("token");
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const instance = axios.create({
  baseURL: "",
  // baseURL: "http://localhost:44318/api",
  headers: { Authorization: "Bearer " + token },
});

export default instance;
