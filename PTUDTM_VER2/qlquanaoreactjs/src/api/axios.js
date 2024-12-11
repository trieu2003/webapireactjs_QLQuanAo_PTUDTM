import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://localhost:7234/api", // URL của backend
  timeout: 5000,
});



export const api = {
  // API Banner Slider
  getBannerSlider: () => axiosInstance.get("/BannerSlider/slider"),

 // API lấy thông tin người dùng
 getUserInfo: () => {
  const mauser = localStorage.getItem("mauser");
  return axiosInstance.get(`/User/get-user-info/${mauser}`);
},
   // Sản phẩm API

   getAllSanPhamPhanTrang: (pageIndex, pageSize) => axiosInstance.get(`/SanPham?pageIndex=${pageIndex}&pageSize=${pageSize}`),
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
      // Size API
  // ----------------------
  getSizesByProduct: (masp) => axiosInstance.get(`/KhachHang/sanpham/sizes/${masp}`),

      // ----------------------
  // Giỏ hàng API
  // ----------------------
  getCartByUserId: (userId) => axiosInstance.get(`/KhachHang/giohang/${userId}`),
  addToCart: (cartItem) => axiosInstance.post("/KhachHang/giohang/them", cartItem),
  updateCartItem: (id, updatedItem) =>
    axiosInstance.put(`/KhachHang/giohang/capnhat/${id}`, updatedItem),
  deleteCartItem: (id) => axiosInstance.delete(`/KhachHang/giohang/xoa/${id}`),

  // ----------------------
  // Hóa đơn API
  // ----------------------
  createHoaDon: (hoaDon) => axiosInstance.post("/KhachHang/hoadon/tao", hoaDon),
  getHoaDonHistory: (userId) =>
    axiosInstance.get(`/KhachHang/hoadon/lichsu/${userId}`),

  // API lấy thông tin hóa đơn theo mã hóa đơn
getHoaDonById: (mahd) => axiosInstance.get(`/HoaDon/get/${mahd}`),

// API lấy chi tiết hóa đơn theo mã hóa đơn
getChiTietHoaDonById: (mahd) => axiosInstance.get(`/ChiTietHoaDon/get-by-mahd/${mahd}`),


  // ----------------------
  // Đánh giá API
  // ----------------------  // Đánh giá API
  addDanhGia: (danhGia) => axiosInstance.post("/KhachHang/danhgia/them", danhGia),
  getDanhGiaShop: () => axiosInstance.get("/KhachHang/danhgia/shop"),

  // ----------------------
  // Thanh toán API
  // ----------------------
  makePayment: (paymentDetails) =>
    axiosInstance.post("/KhachHang/thanhtoan", paymentDetails),
};



export default axiosInstance;


