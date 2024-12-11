
import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const imageBasePath = "src/assets/images/"; // Đường dẫn tới thư mục hình ảnh


  // Tính giá sau khi giảm
  const discountedPrice = product.phanTramGiam
    ? product.gia * (1 - product.phanTramGiam / 100)
    : product.gia;
    console.log(product);
  return (
    <div
      onClick={() => navigate(`/product/${product.id}`)}
      className="group relative flex flex-col bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow duration-300"
    >
      {/* Phần hình ảnh */}
      <div className="relative overflow-hidden">
        <img
          src={`${imageBasePath}${product.hinhanh}`}
          alt={product.tensanpham}
          className="h-60 w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
       
        {/* Huy hiệu "Hot" hoặc "Giảm giá" */}
        {product.phanTramGiam > 0 && (
          <div className="absolute top-3 right-3 bg-red-600 transform duration-500 bg-red-600 shadow-[0_0_10px_10px_rgba(255,0,0,0.2)] text-white border-2 border-transparent py-1 px-4 rounded-full transition-all duration-500 transform hover:border-red-500 hover:shadow-[0_0_15px_15px_rgba(255,0,0,0.5)] text-white px-2 py-1 text-lg font-semibold uppercase rounded">
            -{product.phanTramGiam}%
          </div>
        )}
      </div>

      {/* Phần thông tin */}
      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-lg font-semibold text-gray-800 truncate">Tên sản phẩm:  {product.tensanpham}
           
        </h3>
        <h3 className="text-lg font-semibold text-gray-800 truncate"> Chất liệu:    {product.chatlieu}
        
        </h3>
        <h3 className="text-lg font-semibold text-gray-800 truncate">Nhãn hiệu:    {product.nhanHieu}
          
        </h3>
        {/* <h3 className="text-lg font-semibold text-gray-800 truncate">
          {product.moTa}
        </h3> */}
        <div className="mt-4">
          {product.phanTramGiam ? (
            <p className="text-red-500 text-lg font-bold">
              {discountedPrice.toLocaleString()} VND{" "}
              <span className="text-gray-500 line-through text-sm">
                {product.gia.toLocaleString()} VND
              </span>
            </p>
          ) : (
            <p className="text-gray-900 text-lg font-bold">
              {product.gia.toLocaleString()} VND
            </p>
          )}
        </div>
        <p className="mt-2 text-gray-600 text-sm text-black font-semibold hover:text-rose-700">
          {product.khuyenMai || "Không có khuyến mãi"}
        </p>
      </div>

      {/* Nút hành động */}
      <div className="p-4 bg-gray-100 hover:bg-gray-200 text-blue-600 text-center hover:text-black hover:text-scale-110 text-sm font-semibold transition duration-300 bg-red-600 shadow-[0_0_5px_5px_rgba(255,0,0,0.2)] text-white border-2 border-transparent  transition-all duration-500 transform hover:border-red-500 hover:shadow-[0_0_10px_10px_rgba(255,0,0,0.5)]">
        Xem chi tiết
      </div>
    </div>
  );
};

export default ProductCard;
