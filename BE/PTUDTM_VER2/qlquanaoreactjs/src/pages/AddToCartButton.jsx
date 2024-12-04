import React from "react";
import { api } from "./api";

const AddToCartButton = ({ userId, productId, size, quantity }) => {
  const handleAddToCart = async () => {
    try {
      await api.addToCart({
        MAND: userId,
        MASP: productId,
        SIZE: size,
        SOLUONG: quantity,
      });
      alert("Thêm sản phẩm vào giỏ hàng thành công!");
    } catch (error) {
      console.error("Lỗi khi thêm vào giỏ hàng:", error);
    }
  };

  return (
    <button onClick={handleAddToCart}>
      Thêm vào giỏ hàng
    </button>
  );
};

export default AddToCartButton;
