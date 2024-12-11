
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { api } from "../api/axios";
import Header from "../components/Header";
import Footer from "../components/Footer";
import DanhGiaShop from "../components/DanhGiaShop";

const ProductDetails = () => {
  const { id } = useParams(); // `id` là ID sản phẩm
  const [product, setProduct] = useState(null); // Thông tin sản phẩm
  const [sizes, setSizes] = useState([]); // Danh sách size
  const [selectedSize, setSelectedSize] = useState(""); // Size đã chọn
  const [quantity, setQuantity] = useState(1); // Số lượng sản phẩm
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch thông tin sản phẩm
  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await api.getSanPhamById(id);
        setProduct(response.data);
        // Fetch danh sách size dựa trên `masp` (sau khi lấy từ sản phẩm)
        fetchSizes(response.data.masp); // Truyền `masp`
        setLoading(false);
      } catch (err) {
        setError("Lỗi khi tải chi tiết sản phẩm");
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [id]);

  // Fetch danh sách size sản phẩm
  const fetchSizes = async (masp) => {
    try {
      const response = await api.getSizesByProduct(masp); // Gọi API bằng `masp`
      console.log("Sizes fetched:", response.data);
      setSizes(response.data); // Cập nhật danh sách size
    } catch (err) {
      console.error("Lỗi khi tải danh sách size:", err);
    }
  };

  // Xử lý thêm vào giỏ hàng
  const handleAddToCart = async () => {
    if (!selectedSize) {
      alert("Vui lòng chọn size sản phẩm!");
      return;
    }

    try {
      const payload = {
        mand: localStorage.getItem("mand"), // Lấy mã người dùng từ localStorage
        masp: product.masp, // Mã sản phẩm (lấy từ sản phẩm đã fetch)
        size: selectedSize, // Size đã chọn
        soluong: quantity, // Số lượng
      };

      await api.addToCart(payload);
      alert("Thêm vào giỏ hàng thành công!");
    } catch (err) {
      console.error("Lỗi khi thêm vào giỏ hàng:", err);
      alert("Thêm vào giỏ hàng thất bại!");
    }
  };

  if (loading) return <p>Đang tải...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  // Đường dẫn hình ảnh từ thư mục public
  const imageBasePath = "../src/assets/images/";

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="container mx-auto py-12 px-6">
        <h1 className="text-4xl font-extrabold mb-6 text-gray-800 text-center">
          {product?.tensanpham || "Sản phẩm không tồn tại"}
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Hình ảnh sản phẩm */}
          <div className="relative group">
            {product?.hinhanh ? (
              <img
                src={`${imageBasePath}${product.hinhanh}`}
                alt={product.tensanpham}
                className="w-full h-[400px] object-cover rounded-lg shadow-lg transform transition-transform duration-300 group-hover:scale-105"
              />
            ) : (
              <p className="text-gray-500 text-center">Hình ảnh không tồn tại</p>
            )}
          </div>

          {/* Thông tin sản phẩm */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Chi tiết sản phẩm</h2>
            <p className="text-lg text-gray-700 mb-2">
              <span className="font-semibold">Giá:</span>{" "}
              {product?.gia ? (
                <span className="text-red-500 font-bold text-xl">
                  {product.gia.toLocaleString()} VND
                </span>
              ) : (
                "Đang cập nhật"
              )}
            </p>

            {/* Danh sách size */}
            <p className="text-lg text-gray-700 mb-4">
              <span className="font-semibold">Chọn size:</span>
            </p>
            <div className="mb-4">
              {sizes.length > 0 ? (
                sizes.map((size) => (
                  <label key={size} className="inline-flex items-center mr-4">
                    <input
                      type="radio"
                      name="size"
                      value={size}
                      checked={selectedSize === size}
                      onChange={() => setSelectedSize(size)}
                      className="form-radio h-5 w-5 text-blue-600"
                    />
                    <span className="ml-2 text-gray-700">{size}</span>
                  </label>
                ))
              ) : (
                <p className="text-gray-500">Không có size nào khả dụng cho sản phẩm này.</p>
              )}
            </div>

            {/* Số lượng sản phẩm */}
            <div className="flex items-center mb-6">
              <button
                onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                className="bg-gray-300 px-3 py-1 text-xl rounded-l hover:bg-gray-400"
              >
                -
              </button>
              <input
                type="text"
                value={quantity}
                readOnly
                className="w-12 text-center border-t border-b border-gray-300"
              />
              <button
                onClick={() => setQuantity((prev) => prev + 1)}
                className="bg-gray-300 px-3 py-1 text-xl rounded-r hover:bg-gray-400"
              >
                +
              </button>
            </div>

            {/* Nút thêm vào giỏ hàng */}
            <button
              onClick={handleAddToCart}
              className="w-full md:w-auto bg-blue-600 text-white text-lg font-semibold px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition duration-300"
            >
              Thêm vào giỏ hàng
            </button>
          </div>
        </div>
        <div className="mt-12">
         <DanhGiaShop />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetails;
