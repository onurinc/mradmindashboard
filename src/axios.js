import axios from "axios";

const token = localStorage.getItem("token");

const instance = axios.create({
  baseURL: "",
  // baseURL: "http://localhost:44318/api",
  headers: { Authorization: "Bearer " + token },
});

export default instance;
