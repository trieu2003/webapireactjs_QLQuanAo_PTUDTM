// import React from "react";
// import { Link } from "react-router-dom";

// const Header = () => {
//   return (
//     <header className="bg-white shadow-md sticky top-0 z-50">
//       <div className="container mx-auto flex justify-between items-center p-4">
//         <h1 className="text-2xl font-bold text-gray-800">
//           <Link to="/KhachHangHome">OLD SAILOR</Link>
//         </h1>
//         <nav className="flex space-x-6">
//           <Link to="/KhachHangHome" className="text-gray-700 hover:text-blue-600">
//             TRANG CHỦ
//           </Link>
//           <Link to="/ProductList" className="text-gray-700 hover:text-blue-600">
//             TẤT CẢ SẢN PHẨM 
//           </Link>
//           <Link to="/DiscountedProducts" className="text-gray-700 hover:text-blue-600">
//             FLASH SALE UP TO 50%
//           </Link>
//           <Link to="/HomePage" className="text-gray-700 hover:text-blue-600">
//             GIỚI THIỆU
//           </Link>
         
//         </nav>
//         <div className="flex items-center space-x-4">
//           <input
//             type="text"
//             placeholder="Tìm kiếm"
//             className="px-3 py-2 border rounded-lg focus:outline-none"
//           />
//           <Link to="/Cart" className="text-gray-700 hover:text-blue-600">
//             🛒
//           </Link>
//           <Link to="/UserInfo" className="text-gray-700 hover:text-blue-600">
//             👤
//           </Link>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../api/axios"; // Import API


const Header = () => {
  const [searchTerm, setSearchTerm] = useState(""); // State lưu từ khóa tìm kiếm
  const [searchResults, setSearchResults] = useState([]); // State lưu kết quả tìm kiếm

  const handleSearch = async (e) => {
    setSearchTerm(e.target.value);
    if (e.target.value.trim()) {
      try {
        const response = await api.searchSanPham(e.target.value); // Gọi API tìm kiếm
        setSearchResults(response.data); // Lưu kết quả tìm kiếm vào state
      } catch (error) {
        console.error("Lỗi tìm kiếm:", error);
        setSearchResults([]); // Xử lý lỗi nếu có
      }
    } else {
      setSearchResults([]); // Xóa kết quả tìm kiếm khi ô input trống
    }
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold text-gray-800">
          <Link to="/KhachHangHome">OLD SAILOR</Link>
        </h1>
        <nav className="flex space-x-6">
          <Link to="/KhachHangHome" className="text-gray-700 hover:text-blue-600">
            TRANG CHỦ
          </Link>
          <Link to="/ProductList" className="text-gray-700 hover:text-blue-600">
            TẤT CẢ SẢN PHẨM
          </Link>
          <Link to="/DiscountedProducts" className="text-gray-700 hover:text-blue-600">
            FLASH SALE UP TO 50%
          </Link>
          <Link to="/HomePage" className="text-gray-700 hover:text-blue-600">
            GIỚI THIỆU
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Tìm kiếm"
            value={searchTerm}
            onChange={handleSearch} // Gắn sự kiện tìm kiếm
            className="px-3 py-2 border rounded-lg focus:outline-none"
          />
          {searchTerm && searchResults.length > 0 && (
            <div className="absolute mt-2 w-full bg-white border shadow-md rounded-lg">
              <ul>
                {searchResults.map((product) => (
                  <li key={product.id} className="p-2 hover:bg-gray-200">
                    <Link to={`/product/${product.id}`} className="block">
                      {product.tensanpham}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <Link to="/Cart" className="text-gray-700 hover:text-blue-600">
            🛒
          </Link>
          <Link to="/UserInfo" className="text-gray-700 hover:text-blue-600">
            👤
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
