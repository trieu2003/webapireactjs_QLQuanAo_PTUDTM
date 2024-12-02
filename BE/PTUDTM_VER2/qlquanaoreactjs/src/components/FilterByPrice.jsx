import React, { useState } from "react";
import { api } from "./api";

const FilterByPrice = () => {
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [products, setProducts] = useState([]);

  const handleFilter = async () => {
    try {
      const response = await api.getSanPhamByPrice(minPrice, maxPrice);
      setProducts(response.data);
    } catch (error) {
      console.error("Lỗi khi lọc sản phẩm theo giá:", error);
    }
  };

  return (
    <div>
      <h1>Lọc sản phẩm theo giá</h1>
      <div>
        <label>Giá từ:</label>
        <input
          type="number"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
        />
        <label>Giá đến:</label>
        <input
          type="number"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
        <button onClick={handleFilter}>Lọc</button>
      </div>

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

export default FilterByPrice;
