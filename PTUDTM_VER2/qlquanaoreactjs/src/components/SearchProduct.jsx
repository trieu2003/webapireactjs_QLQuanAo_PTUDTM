import React, { useState } from "react";
import { api } from "./api";

const SearchProduct = () => {
  const [keyword, setKeyword] = useState("");
  const [products, setProducts] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await api.searchSanPham(keyword);
      setProducts(response.data);
    } catch (error) {
      console.error("Lỗi khi tìm kiếm sản phẩm:", error);
    }
  };

  return (
    <div>
      <h1>Tìm kiếm sản phẩm</h1>
      <input
        type="text"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <button onClick={handleSearch}>Tìm kiếm</button>

      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.tensanpham} - {product.gia} VND
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchProduct;
