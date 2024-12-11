import React, { useEffect, useState } from "react";
import { api } from "../api/axios";  // Đảm bảo bạn import đúng API
import Header from "./Header";
import Footer from "./Footer";

const UserInfo = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Lấy maUser từ localStorage
        const mauser = localStorage.getItem("mauser");

        if (!mauser) {
          setError("Không tìm thấy mã người dùng.");
          return;
        }

        // Gọi API để lấy thông tin người dùng
        const response = await api.getUserInfo();

        // Lưu dữ liệu người dùng vào state
        setUserData(response.data);
      } catch (err) {
        setError("Lỗi khi lấy dữ liệu người dùng.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  if (loading) {
    return <p className="text-center text-xl text-blue-500">Đang tải dữ liệu...</p>;
  }

  if (error) {
    return <p className="text-center text-xl text-red-500">{error}</p>;
  }

  if (!userData) {
    return <p className="text-center text-xl text-yellow-500">Không có dữ liệu người dùng</p>;
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <Header />
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Thông Tin Người Dùng</h2>
        <div className="space-y-4">
          <div className="flex justify-between">
            <span className="font-bold text-gray-700">Tên:</span>
            <span className="text-gray-600">{userData.tennd}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-bold text-gray-700">Email:</span>
            <span className="text-gray-600">{userData.email}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-bold text-gray-700">Địa chỉ:</span>
            <span className="text-gray-600">{userData.diachi}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-bold text-gray-700">Số điện thoại:</span>
            <span className="text-gray-600">{userData.sodienthoai}</span>
          </div>
          {/* <div className="flex justify-between">
            <span className="font-bold text-gray-700">Vai trò:</span>
            <span className="text-gray-600">{userData.role}</span>
          </div> */}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UserInfo;
