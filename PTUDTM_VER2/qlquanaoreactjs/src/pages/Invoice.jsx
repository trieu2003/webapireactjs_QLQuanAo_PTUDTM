import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../api/axios";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Invoice = () => {
  const { mahd } = useParams();
  const [invoiceDetails, setInvoiceDetails] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchInvoiceDetails = async () => {
      try {
        // Gọi API lấy thông tin hóa đơn
        const response = await api.getHoaDonById(mahd);
        setInvoiceDetails(response.data); // Đặt dữ liệu vào state
      } catch (err) {
        console.error("Lỗi khi lấy hóa đơn:", err);
        setError("Không thể tải hóa đơn. Vui lòng thử lại sau.");
      }
    };

    fetchInvoiceDetails();
  }, [mahd]);

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  if (!invoiceDetails) {
    return <p>Đang tải...</p>;
  }

  return (
    <div>
      <div className="container mx-auto py-6 px-4">
        <Header />
      </div>
      <div className="container mx-auto py-6 px-4">
        <h1 className="text-2xl font-bold mb-6">Chi tiết hóa đơn</h1>
        <div>
          <p><strong>Mã hóa đơn:</strong> {invoiceDetails.mahd}</p>
          <p><strong>Mã người dùng:</strong> {invoiceDetails.mand}</p>
          <p><strong>Ngày đặt hàng:</strong> {new Date(invoiceDetails.ngaydathang).toLocaleDateString()}</p>
          <p><strong>Số lượng sản phẩm:</strong> {invoiceDetails.soluong}</p>
          <p><strong>Tổng tiền:</strong> {invoiceDetails.tongtien.toLocaleString()} VND</p>
          <p><strong>Tình trạng:</strong> {invoiceDetails.tinhtrang === 1 ? "Đã thanh toán" : "Chưa thanh toán"}</p>
        </div>
      </div>
      <div className="container mx-auto py-6 px-4">
        <Footer />
      </div>
    </div>
  );
};

export default Invoice;
