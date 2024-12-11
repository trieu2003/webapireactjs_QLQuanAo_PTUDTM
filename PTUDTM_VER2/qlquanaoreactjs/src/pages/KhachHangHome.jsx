
import React, { useState, useEffect } from "react";
import { api } from "../api/axios";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BannerSlider from "../components/BannerSlider";
import ProductCard from "./ProductCard";
import DiscountedProducts from "../components/DiscountedProducts";
import ChatWidget from '../components/ChatWidget';




const KhachHangHome = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [keyword, setKeyword] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  useEffect(() => {
    fetchProducts(); // Tải tất cả sản phẩm khi trang được tải
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await api.getAllSanPham();
      setProducts(response.data);
      setLoading(false);
    } catch (err) {
      setError("Lỗi khi tải danh sách sản phẩm");
      setLoading(false);
    }
  };

  const handleSearch = async () => {
    try {
      setLoading(true);
      const response = await api.searchSanPham(keyword);
      setProducts(response.data);
      setLoading(false);
    } catch (err) {
      setError("Lỗi khi tìm kiếm sản phẩm");
      setLoading(false);
    }
  };

  const handleFilterByPrice = async () => {
    try {
      setLoading(true);
      const response = await api.getSanPhamByPrice(minPrice, maxPrice);
      setProducts(response.data);
      setLoading(false);
    } catch (err) {
      setError("Lỗi khi lọc sản phẩm theo giá");
      setLoading(false);
    }
  };

  if (loading) return <p>Đang tải...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
    
         <BannerSlider />
      {/* <ProductList /> */}
      <main className="container mx-auto py-8">
        <h2 className="text-3xl font-bold mb-6 text-center">Sản phẩm nổi bật</h2>
    
        <ChatWidget />
        
        {/* Thanh tìm kiếm và lọc */}
        <div className="mb-8 flex flex-col sm:flex-row items-center gap-4 justify-center">
          {/* Tìm kiếm */}
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Tìm kiếm sản phẩm..."
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              className="px-4 py-2 border rounded-md"
            />
            <button
              onClick={handleSearch}
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Tìm kiếm
            </button>
          </div>

          {/* Lọc theo giá */}
          <div className="flex items-center gap-2">
            <input
              type="number"
              placeholder="Giá thấp nhất"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
              className="px-4 py-2 border rounded-md"
            />
            <input
              type="number"
              placeholder="Giá cao nhất"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              className="px-4 py-2 border rounded-md"
            />
            <button
              onClick={handleFilterByPrice}
              className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
            >
              Lọc
            </button>
          </div>
        </div>

        {/* Hiển thị danh sách sản phẩm */}
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {/* {products.map((product) => (
            <ProductCard key={product.ID} product={product} />
          ))} */}
           {products.map((product) => (
          <ProductCard
            key={product.ID}
            product={product}
            discount={product.PhanTramGiam} // Truyền thêm phần trăm giảm giá
          />
        ))}
        </section>
        {/* <DiscountedProducts /> */}
      </main>
      <Footer />
    </div>
  );
};

export default KhachHangHome;
