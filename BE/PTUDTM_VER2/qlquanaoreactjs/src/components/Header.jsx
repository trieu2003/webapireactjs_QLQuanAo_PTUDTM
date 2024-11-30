import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold text-gray-800">
          <Link to="/">OLD SAILOR</Link>
        </h1>
        <nav className="flex space-x-6">
          <Link to="/" className="text-gray-700 hover:text-blue-600">
            TRANG CHỦ
          </Link>
          <Link to="/products" className="text-gray-700 hover:text-blue-600">
            SẢN PHẨM ĐA TÍNH NĂNG
          </Link>
          <Link to="/flash-sale" className="text-gray-700 hover:text-blue-600">
            FLASH SALE UP TO 50%
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-blue-600">
            GIỚI THIỆU
          </Link>
          <Link to="/new-arrivals" className="text-gray-700 hover:text-blue-600">
            SẢN PHẨM MỚI
          </Link>
          <Link to="/men" className="text-gray-700 hover:text-blue-600">
            NAM
          </Link>
          <Link to="/kids" className="text-gray-700 hover:text-blue-600">
            TRẺ EM
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Tìm kiếm"
            className="px-3 py-2 border rounded-lg focus:outline-none"
          />
          <Link to="/cart" className="text-gray-700 hover:text-blue-600">
            🛒
          </Link>
          <Link to="/profile" className="text-gray-700 hover:text-blue-600">
            👤
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
