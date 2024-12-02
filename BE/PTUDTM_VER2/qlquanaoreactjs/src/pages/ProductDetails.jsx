// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { api } from "../api/axios";

// const ProductDetails = () => {
//   const { id } = useParams();
//   const [product, setProduct] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchProductDetails = async () => {
//       try {
//         const response = await api.getSanPhamById(id);
//         setProduct(response.data); // Dữ liệu API
//         setLoading(false);
//       } catch (err) {
//         setError("Lỗi khi tải chi tiết sản phẩm");
//         setLoading(false);
//       }
//     };

//     fetchProductDetails();
//   }, [id]);

//   if (loading) return <p>Đang tải...</p>;
//   if (error) return <p className="text-red-500">{error}</p>;

//   // Đường dẫn hình ảnh từ thư mục public
//   const imageBasePath = "../src/assets/images/";

//   return (
//     <div className="container mx-auto py-8">
//       <h1 className="text-3xl font-bold mb-6">{product?.tensanpham || "Sản phẩm không tồn tại"}</h1>
//       {product?.hinhanh ? (
//         <img
//           src={`${imageBasePath}${product.hinhanh}`}
//           alt={product.tensanpham}
//           className="w-full h-64 object-cover mb-4 rounded-lg"
//         />
//       ) : (
//         <p>Hình ảnh không tồn tại</p>
//       )}
//       <p>Giá: {product?.gia ? product.gia.toLocaleString() + " VND" : "Đang cập nhật"}</p>
//       <p>Chất liệu: {product?.chatlieu || "Đang cập nhật"}</p>
//       <p>Khuyến mãi: {product?.khuyenMai || "Không có khuyến mãi"}</p>
//     </div>
//   );
// };

// export default ProductDetails;
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { api } from "../api/axios";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await api.getSanPhamById(id);
        setProduct(response.data); // Dữ liệu API
        setLoading(false);
      } catch (err) {
        setError("Lỗi khi tải chi tiết sản phẩm");
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [id]);

  if (loading) return <p>Đang tải...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  // Đường dẫn hình ảnh từ thư mục public
  const imageBasePath = "../src/assets/images/";

  return (
    <div className="flex flex-col min-h-screen"> 
   <Header />
    <div className="container mx-auto py-12 px-6">
      
      {/* Tiêu đề */}
      <h1 className="text-4xl font-extrabold mb-6 text-gray-800 text-center">
        {product?.tensanpham || "Sản phẩm không tồn tại"}
      </h1>

      {/* Nội dung chi tiết */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Hình ảnh sản phẩm */}
        <div className="relative group">
          {product?.hinhanh ? (
            <img
              src={`${imageBasePath}${product.hinhanh}`}
              alt={product.tensanpham}
              className="w-full h-[400px] object-cover rounded-lg shadow-lg transform transition-transform duration-300 group-hover:scale-105"
            />
          ) : (
            <p className="text-gray-500 text-center">Hình ảnh không tồn tại</p>
          )}
          {product?.isHot && (
            <div className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 text-xs font-semibold uppercase rounded shadow-lg">
              Hot
            </div>
          )}
          {product?.discount && (
            <div className="absolute top-3 right-3 bg-green-500 text-white px-3 py-1 text-xs font-semibold uppercase rounded shadow-lg">
              -{product.discount}%
            </div>
          )}
        </div>

        {/* Thông tin sản phẩm */}
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Chi tiết sản phẩm</h2>
          <p className="text-lg text-gray-700 mb-2">
            <span className="font-semibold">Giá:</span>{" "}
            {product?.gia ? (
              <span className="text-red-500 font-bold text-xl">
                {product.gia.toLocaleString()} VND
              </span>
            ) : (
              "Đang cập nhật"
            )}
          </p>
          <p className="text-lg text-gray-700 mb-2">
            <span className="font-semibold">Chất liệu:</span> {product?.chatlieu || "Đang cập nhật"}
          </p>
          <p className="text-lg text-gray-700 mb-2">
            <span className="font-semibold">Khuyến mãi:</span>{" "}
            {product?.khuyenMai || "Không có khuyến mãi"}
          </p>
          <p className="text-lg text-gray-700 mt-4 leading-relaxed">
            {product?.description ||
              "Mô tả sản phẩm đang được cập nhật. Hãy liên hệ với chúng tôi để biết thêm thông tin chi tiết."}
          </p>

          {/* Nút thêm vào giỏ hàng */}
          <div className="mt-6">
            <button className="w-full md:w-auto bg-blue-600 text-white text-lg font-semibold px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition duration-300">
              Thêm vào giỏ hàng
            </button>
          </div>
        </div>
      </div>

      {/* Phần sản phẩm tương tự */}
      <div className="mt-16">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Sản phẩm tương tự</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Danh sách sản phẩm tương tự (nếu có API hỗ trợ) */}
          {/* Hiển thị mockup sản phẩm tương tự */}
          <div className="bg-white border rounded-lg shadow p-4">
            <img
              src="https://via.placeholder.com/150"
              alt="Product"
              className="w-full h-40 object-cover rounded-lg"
            />
            <h4 className="text-lg font-semibold mt-4">Tên sản phẩm</h4>
            <p className="text-gray-500 mt-2">Giá: 500,000 VND</p>
          </div>
          {/* Lặp danh sách sản phẩm tương tự */}
        </div>
      </div>
    
    </div>
    <Footer></Footer>
    </div>
  );
};

export default ProductDetails;

