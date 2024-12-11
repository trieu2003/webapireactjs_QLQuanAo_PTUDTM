import React, { useState, useEffect } from "react";
import Bestsellers from "./components/Bestsellers";
import { api } from "./api/axios";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.getAllSanPham();
        setProducts(response.data);
      } catch (error) {
        console.error("Lỗi khi lấy danh sách sản phẩm:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <Bestsellers products={products} />
    </div>
  );
};

export default Home;
