import React, { useState, useEffect } from "react";
import { api } from "../api/axios";

const ProductSizes = ({ productId }) => {
  const [sizes, setSizes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchSizes = async () => {
      try {
        const response = await api.getSizesByProduct(productId);
        setSizes(response.data); // Lưu danh sách size
      } catch (err) {
        setError("Không tìm thấy size nào cho sản phẩm này.");
      } finally {
        setLoading(false);
      }
    };

    fetchSizes();
  }, [productId]);

  if (loading) return <p>Đang tải danh sách size...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div>
      <h3 className="text-lg font-bold">Danh sách size</h3>
      <ul>
        {sizes.map((size, index) => (
          <li key={index} className="py-1 px-2 border-b">
            {size}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductSizes;
