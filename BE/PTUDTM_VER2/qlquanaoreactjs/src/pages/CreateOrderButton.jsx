import React from "react";
import { api } from "./api";

const CreateOrderButton = ({ userId, totalAmount }) => {
  const handleCreateOrder = async () => {
    try {
      await api.createHoaDon({
        MAND: userId,
        TONGTIEN: totalAmount,
        NGAYDATHANG: new Date().toISOString(),
      });
      alert("Hóa đơn được tạo thành công!");
    } catch (error) {
      console.error("Lỗi khi tạo hóa đơn:", error);
    }
  };

  return (
    <button onClick={handleCreateOrder}>
      Tạo hóa đơn
    </button>
  );
};

export default CreateOrderButton;
