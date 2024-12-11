import React, { useState, useEffect } from "react";
import { api } from "../api/axios"; // Import API đã tạo ở trên
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ProductList = () => {
  const [products, setProducts] = useState([]);  // Danh sách sản phẩm
  const [loading, setLoading] = useState(true);   // Trạng thái loading
  const [error, setError] = useState(null);       // Trạng thái lỗi
  const [categoryId, setCategoryId] = useState(null); // Trạng thái lọc theo danh mục
  const [discountCode, setDiscountCode] = useState(null); // Trạng thái lọc theo khuyến mãi
  const [searchKeyword, setSearchKeyword] = useState(""); // Từ khóa tìm kiếm
  const navigate = useNavigate();  // Hook điều hướng
  const imageBasePath = "src/assets/images/"; // Đường dẫn tới thư mục hình ảnh
  const trangdau=1;
  const trangcuoi=100;

  // Sử dụng useEffect để gọi API khi component được render lần đầu hoặc khi các giá trị lọc thay đổi
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        let response;
        if (categoryId) {
          response = await api.getSanPhamByCategory(categoryId);  // Lọc theo danh mục
        } else if (discountCode) {
          response = await api.getSanPhamByDiscount(discountCode); // Lọc theo khuyến mãi
        } else if (searchKeyword) {
          response = await api.searchSanPham(searchKeyword);  // Tìm kiếm theo từ khóa
        } else {
          response = await api.getAllSanPhamPhanTrang(trangdau,trangcuoi);  // Lấy tất cả sản phẩm
        }

        setProducts(response.data);  // Lưu dữ liệu sản phẩm vào state
      } catch (err) {
        setError("Có lỗi xảy ra khi lấy danh sách sản phẩm");
      } finally {
        setLoading(false);  // Kết thúc loading
      }
    };

    fetchProducts();  // Gọi hàm fetchProducts khi component được mount hoặc khi có thay đổi trong các filter
  }, [categoryId, discountCode, searchKeyword]);  // Chạy lại khi các filter thay đổi

  // Hiển thị khi đang tải dữ liệu
  if (loading) {
    return <div>Đang tải...</div>;
  }

  // Hiển thị khi có lỗi
  if (error) {
    return <div>{error}</div>;
  }

  // Điều hướng tới trang chi tiết sản phẩm khi nhấn vào sản phẩm
  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="product-list">
        <Header />
      <h2 className="text-2xl font-semibold text-center my-4">Danh Sách Sản Phẩm</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product.id}  // Dùng product.ID làm khóa chính
            className="product-card bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            onClick={() => handleProductClick(product.id)}  // Thêm sự kiện click
          >
            <img
              src={`${imageBasePath}${product.hinhanh}`}  // Sử dụng ảnh placeholder nếu không có ảnh
              alt={product.tensanpham}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{product.tensanpham}</h3>
              <p className="text-gray-600">{product.moTa || "Không có mô tả"}</p>
              <span className="text-lg font-bold text-indigo-600">{product.gia} VND</span>
              <div className="text-sm text-gray-500 mt-2">
                <p>Loại: {product.loaiSanPham}</p>
                <p>Thương Hiệu: {product.nhanHieu}</p>
                <p>Khuyến Mãi: {product.khuyenMai} - {product.phanTramGiam}%</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default ProductList;
