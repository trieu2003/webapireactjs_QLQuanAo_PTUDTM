import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://localhost:7234/api", // URL của backend
  timeout: 5000,
});

export default axiosInstance;
