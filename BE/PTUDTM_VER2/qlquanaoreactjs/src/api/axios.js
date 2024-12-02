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
     // API lấy sản phẩm có khuyến mãi
  getSanPhamWithDiscount: () => axiosInstance.get("/SanPham/with-discount"),

    // Tìm kiếm sản phẩm theo từ khóa
  searchSanPham: (keyword) =>
    axiosInstance.get("/SanPham/search", {
      params: { keyword },
    }),

  // Lọc sản phẩm theo khuyến mãi
  getSanPhamByDiscount: (discountCode) =>
    axiosInstance.get(`/SanPham/by-discount/${discountCode}`),

  // Lọc sản phẩm theo chất liệu
  getSanPhamByMaterial: (material) =>
    axiosInstance.get(`/SanPham/by-material/${material}`),


    // Lọc sản phẩm theo giá
    getSanPhamByPrice: (minPrice, maxPrice) =>
      axiosInstance.get("/SanPham/by-price", {
        params: { minPrice, maxPrice },
      }),
  // Lọc sản phẩm theo nhiều tiêu chí
  filterSanPham: (filters) =>
    axiosInstance.get("/SanPham/filter", {
      params: filters,
    }),
};



export default axiosInstance;


