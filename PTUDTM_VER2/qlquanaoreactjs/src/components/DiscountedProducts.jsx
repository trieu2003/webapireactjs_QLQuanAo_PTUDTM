import React, { useState, useEffect } from "react";
import { api } from "../api/axios";
import ProductCard from "../pages/ProductCard";
import Header from "../components/Header";
import Footer from "../components/Footer";

const DiscountedProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchDiscountedProducts = async () => {
      try {
        const response = await api.getSanPhamWithDiscount();
        setProducts(response.data);
        setLoading(false);
      } catch (err) {
        setError("Lỗi khi tải danh sách sản phẩm khuyến mãi");
        setLoading(false);
      }
    };

    fetchDiscountedProducts();
  }, []);

  if (loading) return <p>Đang tải...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div>
      <Header />
      <h2 className="text-3xl font-bold mb-6 text-center">Sản phẩm khuyến mãi</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.ID}
            product={product}
            discount={product.PhanTramGiam} // Truyền thêm phần trăm giảm giá
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default DiscountedProducts;
