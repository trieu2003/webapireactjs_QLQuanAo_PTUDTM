import React from "react";
import { useNavigate } from "react-router-dom";

const AdminMenu = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("userData");
    navigate("/"); // Điều hướng về trang đăng nhập
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <header className="bg-blue-600 text-white py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Admin Panel</h1>
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded-lg"
          >
            Đăng Xuất
          </button>
        </div>
      </header>

      {/* Nội dung menu */}
      <main className="container mx-auto px-4 mt-6">
        <h2 className="text-xl font-bold mb-4">Quản lý</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white p-4 shadow-lg rounded-lg text-center">
            <h3 className="text-lg font-semibold">Quản lý Sản Phẩm</h3>
            <button
              onClick={() => navigate("/admin/products")}
              className="mt-2 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg"
            >
              Xem Chi Tiết
            </button>
          </div>
          <div className="bg-white p-4 shadow-lg rounded-lg text-center">
            <h3 className="text-lg font-semibold">Quản lý Đơn Hàng</h3>
            <button
              onClick={() => navigate("/admin/orders")}
              className="mt-2 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg"
            >
              Xem Chi Tiết
            </button>
          </div>
          <div className="bg-white p-4 shadow-lg rounded-lg text-center">
            <h3 className="text-lg font-semibold">Quản lý Người Dùng</h3>
            <button
              onClick={() => navigate("/admin/users")}
              className="mt-2 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg"
            >
              Xem Chi Tiết
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminMenu;
