import React, { useEffect, useState } from "react";
import { api } from "../api/axios"; // Giả sử bạn đã tạo API axios như trước

const HoaDon = ({ mahd }) => {
  const [hoaDonData, setHoaDonData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHoaDon = async () => {
      try {
        // Gọi API lấy thông tin hóa đơn
        const response = await api.get(`/HoaDon/get/${mahd}`);
        setHoaDonData(response.data);
      } catch (err) {
        setError("Lỗi khi tải hóa đơn.");
      } finally {
        setLoading(false);
      }
    };

    fetchHoaDon();
  }, [mahd]);

  if (loading) return <p>Đang tải hóa đơn...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
        Hóa Đơn: {hoaDonData.MAHD}
      </h2>
      <div className="space-y-4">
        <div className="flex justify-between">
          <span className="font-bold text-gray-700">Ngày Đặt Hàng:</span>
          <span className="text-gray-600">{hoaDonData.NGAYDATHANG}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-bold text-gray-700">Tổng Tiền:</span>
          <span className="text-gray-600">{hoaDonData.TONGTIEN} VND</span>
        </div>
        <div className="flex justify-between">
          <span className="font-bold text-gray-700">Tình Trạng:</span>
          <span className="text-gray-600">{hoaDonData.TINHTRANG === 1 ? "Đã Thanh Toán" : "Chưa Thanh Toán"}</span>
        </div>
        <h3 className="text-xl font-semibold mt-6 mb-4">Chi Tiết Sản Phẩm</h3>
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2">Sản Phẩm</th>
              <th className="px-4 py-2">Size</th>
              <th className="px-4 py-2">Số Lượng</th>
              <th className="px-4 py-2">Thành Tiền</th>
            </tr>
          </thead>
          <tbody>
            {hoaDonData.ChiTietHoaDons.map((ct) => (
              <tr key={ct.MACTHD}>
                <td className="px-4 py-2">{ct.SanPham.TENSP}</td>
                <td className="px-4 py-2">{ct.SIZE}</td>
                <td className="px-4 py-2">{ct.SOLUONG}</td>
                <td className="px-4 py-2">{ct.THANHTIEN} VND</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HoaDon;
