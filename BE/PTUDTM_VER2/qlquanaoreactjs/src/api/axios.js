import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://localhost:7234/api", // URL của backend
  timeout: 5000,
});



export const api = {
  // API Banner Slider
  getBannerSlider: () => axiosInstance.get("/BannerSlider/slider"),

   // Sản phẩm API
   getAllSanPham: () => axiosInstance.get("/SanPham/all"),
   getSanPhamById: (id) => axiosInstance.get(`/SanPham/${id}`),
   getSanPhamByCategory: (categoryId) =>
     axiosInstance.get(`/SanPham/by-category/${categoryId}`),
   getFeaturedSanPham: () => axiosInstance.get("/SanPham/featured"),

};

export default axiosInstance;


