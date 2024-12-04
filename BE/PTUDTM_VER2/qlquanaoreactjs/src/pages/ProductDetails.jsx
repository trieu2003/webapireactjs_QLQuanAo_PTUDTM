// // // // // import React, { useState, useEffect } from "react";
// // // // // import { useParams } from "react-router-dom";
// // // // // import { api } from "../api/axios";

// // // // // const ProductDetails = () => {
// // // // //   const { id } = useParams();
// // // // //   const [product, setProduct] = useState(null);
// // // // //   const [loading, setLoading] = useState(true);
// // // // //   const [error, setError] = useState("");

// // // // //   useEffect(() => {
// // // // //     const fetchProductDetails = async () => {
// // // // //       try {
// // // // //         const response = await api.getSanPhamById(id);
// // // // //         setProduct(response.data); // Dữ liệu API
// // // // //         setLoading(false);
// // // // //       } catch (err) {
// // // // //         setError("Lỗi khi tải chi tiết sản phẩm");
// // // // //         setLoading(false);
// // // // //       }
// // // // //     };

// // // // //     fetchProductDetails();
// // // // //   }, [id]);

// // // // //   if (loading) return <p>Đang tải...</p>;
// // // // //   if (error) return <p className="text-red-500">{error}</p>;

// // // // //   // Đường dẫn hình ảnh từ thư mục public
// // // // //   const imageBasePath = "../src/assets/images/";

// // // // //   return (
// // // // //     <div className="container mx-auto py-8">
// // // // //       <h1 className="text-3xl font-bold mb-6">{product?.tensanpham || "Sản phẩm không tồn tại"}</h1>
// // // // //       {product?.hinhanh ? (
// // // // //         <img
// // // // //           src={`${imageBasePath}${product.hinhanh}`}
// // // // //           alt={product.tensanpham}
// // // // //           className="w-full h-64 object-cover mb-4 rounded-lg"
// // // // //         />
// // // // //       ) : (
// // // // //         <p>Hình ảnh không tồn tại</p>
// // // // //       )}
// // // // //       <p>Giá: {product?.gia ? product.gia.toLocaleString() + " VND" : "Đang cập nhật"}</p>
// // // // //       <p>Chất liệu: {product?.chatlieu || "Đang cập nhật"}</p>
// // // // //       <p>Khuyến mãi: {product?.khuyenMai || "Không có khuyến mãi"}</p>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default ProductDetails;
// // // // import React, { useState, useEffect } from "react";
// // // // import { useParams } from "react-router-dom";
// // // // import { api } from "../api/axios";
// // // // import Header from "../components/Header";
// // // // import Footer from "../components/Footer";

// // // // const ProductDetails = () => {
// // // //   const { id } = useParams();
// // // //   const [product, setProduct] = useState(null);
// // // //   const [loading, setLoading] = useState(true);
// // // //   const [error, setError] = useState("");

// // // //   useEffect(() => {
// // // //     const fetchProductDetails = async () => {
// // // //       try {
// // // //         const response = await api.getSanPhamById(id);
// // // //         setProduct(response.data); // Dữ liệu API
// // // //         setLoading(false);
// // // //       } catch (err) {
// // // //         setError("Lỗi khi tải chi tiết sản phẩm");
// // // //         setLoading(false);
// // // //       }
// // // //     };

// // // //     fetchProductDetails();
// // // //   }, [id]);

// // // //   if (loading) return <p>Đang tải...</p>;
// // // //   if (error) return <p className="text-red-500">{error}</p>;

// // // //   // Đường dẫn hình ảnh từ thư mục public
// // // //   const imageBasePath = "../src/assets/images/";

// // // //   return (
// // // //     <div className="flex flex-col min-h-screen"> 
// // // //    <Header />
// // // //     <div className="container mx-auto py-12 px-6">
      
// // // //       {/* Tiêu đề */}
// // // //       <h1 className="text-4xl font-extrabold mb-6 text-gray-800 text-center">
// // // //         {product?.tensanpham || "Sản phẩm không tồn tại"}
// // // //       </h1>

// // // //       {/* Nội dung chi tiết */}
// // // //       <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
// // // //         {/* Hình ảnh sản phẩm */}
// // // //         <div className="relative group">
// // // //           {product?.hinhanh ? (
// // // //             <img
// // // //               src={`${imageBasePath}${product.hinhanh}`}
// // // //               alt={product.tensanpham}
// // // //               className="w-full h-[400px] object-cover rounded-lg shadow-lg transform transition-transform duration-300 group-hover:scale-105"
// // // //             />
// // // //           ) : (
// // // //             <p className="text-gray-500 text-center">Hình ảnh không tồn tại</p>
// // // //           )}
// // // //           {product?.isHot && (
// // // //             <div className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 text-xs font-semibold uppercase rounded shadow-lg">
// // // //               Hot
// // // //             </div>
// // // //           )}
// // // //           {product?.discount && (
// // // //             <div className="absolute top-3 right-3 bg-green-500 text-white px-3 py-1 text-xs font-semibold uppercase rounded shadow-lg">
// // // //               -{product.discount}%
// // // //             </div>
// // // //           )}
// // // //         </div>

// // // //         {/* Thông tin sản phẩm */}
// // // //         <div className="flex flex-col justify-center">
// // // //           <h2 className="text-3xl font-bold text-gray-800 mb-4">Chi tiết sản phẩm</h2>
// // // //           <p className="text-lg text-gray-700 mb-2">
// // // //             <span className="font-semibold">Giá:</span>{" "}
// // // //             {product?.gia ? (
// // // //               <span className="text-red-500 font-bold text-xl">
// // // //                 {product.gia.toLocaleString()} VND
// // // //               </span>
// // // //             ) : (
// // // //               "Đang cập nhật"
// // // //             )}
// // // //           </p>
// // // //           <p className="text-lg text-gray-700 mb-2">
// // // //             <span className="font-semibold">Chất liệu:</span> {product?.chatlieu || "Đang cập nhật"}
// // // //           </p>
// // // //           <p className="text-lg text-gray-700 mb-2">
// // // //             <span className="font-semibold">Khuyến mãi:</span>{" "}
// // // //             {product?.khuyenMai || "Không có khuyến mãi"}
// // // //           </p>
// // // //           <p className="text-lg text-gray-700 mt-4 leading-relaxed">
// // // //             {product?.description ||
// // // //               "Mô tả sản phẩm đang được cập nhật. Hãy liên hệ với chúng tôi để biết thêm thông tin chi tiết."}
// // // //           </p>

// // // //           {/* Nút thêm vào giỏ hàng */}
// // // //           <div className="mt-6">
// // // //             <button className="w-full md:w-auto bg-blue-600 text-white text-lg font-semibold px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition duration-300">
// // // //               Thêm vào giỏ hàng
// // // //             </button>
// // // //           </div>
// // // //         </div>
// // // //       </div>

// // // //       {/* Phần sản phẩm tương tự */}
// // // //       <div className="mt-16">
// // // //         <h3 className="text-2xl font-bold text-gray-800 mb-6">Sản phẩm tương tự</h3>
// // // //         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
// // // //           {/* Danh sách sản phẩm tương tự (nếu có API hỗ trợ) */}
// // // //           {/* Hiển thị mockup sản phẩm tương tự */}
// // // //           <div className="bg-white border rounded-lg shadow p-4">
// // // //             <img
// // // //               src="https://via.placeholder.com/150"
// // // //               alt="Product"
// // // //               className="w-full h-40 object-cover rounded-lg"
// // // //             />
// // // //             <h4 className="text-lg font-semibold mt-4">Tên sản phẩm</h4>
// // // //             <p className="text-gray-500 mt-2">Giá: 500,000 VND</p>
// // // //           </div>
// // // //           {/* Lặp danh sách sản phẩm tương tự */}
// // // //         </div>
// // // //       </div>
    
// // // //     </div>
// // // //     <Footer></Footer>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default ProductDetails;

// // // import React, { useState, useEffect } from "react";
// // // import { useParams } from "react-router-dom";
// // // import { api } from "../api/axios";
// // // import Header from "../components/Header";
// // // import Footer from "../components/Footer";

// // // const ProductDetails = () => {
// // //   const { id } = useParams();
// // //   const [product, setProduct] = useState(null);
// // //   const [sizes, setSizes] = useState([]); // Lưu danh sách size
// // //   const [selectedSize, setSelectedSize] = useState(null); // Lưu size đã chọn
// // //   const [quantity, setQuantity] = useState(1); // Lưu số lượng sản phẩm
// // //   const [loading, setLoading] = useState(true);
// // //   const [error, setError] = useState("");


// // //   // Fetch thông tin sản phẩm
// // //   useEffect(() => {
// // //     const fetchProductDetails = async () => {
// // //       try {
// // //         const response = await api.getSanPhamById(id);
// // //         setProduct(response.data);
     
// // //         setLoading(false);
// // //       } catch (err) {
// // //         setError("Lỗi khi tải chi tiết sản phẩm");
// // //         setLoading(false);
// // //       }
// // //     };
   
// // //     fetchProductDetails();
// // //   }, [id]);

// // //   // Fetch danh sách size sản phẩm
// // //   useEffect(() => {
// // //     const fetchSizes = async () => {
// // //       try {
       
 
// // //         const response = await api.getSizesByProduct(masp); // ID của sản phẩm
// // //         console.log("Sizes fetched:", response.data); // Kiểm tra dữ liệu trả về từ API
// // //         setSizes(response.data);
// // //       } catch (err) {
// // //         console.error("Lỗi khi tải danh sách size:", err);
// // //       }
// // //     };
  
// // //     fetchSizes();
// // //   }, [id]);
  

// // //   // Xử lý thêm vào giỏ hàng
// // //   const handleAddToCart = async () => {
// // //     if (!selectedSize) {
// // //       alert("Vui lòng chọn size sản phẩm!");
// // //       return;
// // //     }

// // //     try {
// // //       const payload = {
// // //         mand: localStorage.getItem("mand"), // Lấy mã người dùng từ localStorage
// // //         masp: id, // Mã sản phẩm
// // //         size: selectedSize, // Size đã chọn
// // //         soluong: quantity, // Số lượng
// // //       };

// // //       await api.addToCart(payload);
// // //       alert("Thêm vào giỏ hàng thành công!");
// // //     } catch (err) {
// // //       console.error("Lỗi khi thêm vào giỏ hàng:", err);
// // //       alert("Thêm vào giỏ hàng thất bại!");
// // //     }
// // //   };

// // //   if (loading) return <p>Đang tải...</p>;
// // //   if (error) return <p className="text-red-500">{error}</p>;

// // //   // Đường dẫn hình ảnh từ thư mục public
// // //   const imageBasePath = "../src/assets/images/";

// // //   return (
// // //     <div className="flex flex-col min-h-screen">
// // //       <Header />
// // //       <div className="container mx-auto py-12 px-6">
// // //         <h1 className="text-4xl font-extrabold mb-6 text-gray-800 text-center">
// // //           {product?.tensanpham || "Sản phẩm không tồn tại"}
// // //         </h1>
// // //         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
// // //           {/* Hình ảnh sản phẩm */}
// // //           <div className="relative group">
// // //             {product?.hinhanh ? (
// // //               <img
// // //                 src={`${imageBasePath}${product.hinhanh}`}
// // //                 alt={product.tensanpham}
// // //                 className="w-full h-[400px] object-cover rounded-lg shadow-lg transform transition-transform duration-300 group-hover:scale-105"
// // //               />
// // //             ) : (
// // //               <p className="text-gray-500 text-center">Hình ảnh không tồn tại</p>
// // //             )}
// // //           </div>

// // //           {/* Thông tin sản phẩm */}
// // //           <div className="flex flex-col justify-center">
// // //             <h2 className="text-3xl font-bold text-gray-800 mb-4">Chi tiết sản phẩm</h2>
// // //             <p className="text-lg text-gray-700 mb-2">
// // //               <span className="font-semibold">Giá:</span>{" "}
// // //               {product?.gia ? (
// // //                 <span className="text-red-500 font-bold text-xl">
// // //                   {product.gia.toLocaleString()} VND
// // //                 </span>
// // //               ) : (
// // //                 "Đang cập nhật"
// // //               )}
// // //             </p>

// // //             <p className="text-lg text-gray-700 mb-4">
// // //               <span className="font-semibold">Chọn size:</span>
// // //             </p>
// // //             <div className="mb-4">
// // //   {sizes.length > 0 ? (
// // //     sizes.map((size) => (
// // //       <label key={size} className="inline-flex items-center mr-4">
// // //         <input
// // //           type="radio"
// // //           name="size"
// // //           value={size}
// // //           checked={selectedSize === size}
// // //           onChange={() => setSelectedSize(size)}
// // //           className="form-radio h-5 w-5 text-blue-600"
// // //         />
// // //         <span className="ml-2 text-gray-700">{size}</span>
// // //       </label>
// // //     ))
// // //   ) : (
// // //     <p className="text-gray-500">Không có size nào khả dụng cho sản phẩm này.</p>
// // //   )}
// // // </div>


// // //             <div className="flex items-center mb-6">
// // //               <button
// // //                 onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
// // //                 className="bg-gray-300 px-3 py-1 text-xl rounded-l hover:bg-gray-400"
// // //               >
// // //                 -
// // //               </button>
// // //               <input
// // //                 type="text"
// // //                 value={quantity}
// // //                 readOnly
// // //                 className="w-12 text-center border-t border-b border-gray-300"
// // //               />
// // //               <button
// // //                 onClick={() => setQuantity((prev) => prev + 1)}
// // //                 className="bg-gray-300 px-3 py-1 text-xl rounded-r hover:bg-gray-400"
// // //               >
// // //                 +
// // //               </button>
// // //             </div>

// // //             <button
// // //               onClick={handleAddToCart}
// // //               className="w-full md:w-auto bg-blue-600 text-white text-lg font-semibold px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition duration-300"
// // //             >
// // //               Thêm vào giỏ hàng
// // //             </button>
// // //           </div>
// // //         </div>
// // //       </div>
// // //       <Footer />
// // //     </div>
// // //   );
// // // };

// // // export default ProductDetails;
// // import React, { useState, useEffect } from "react";
// // import { useParams } from "react-router-dom";
// // import { api } from "../api/axios";
// // import Header from "../components/Header";
// // import Footer from "../components/Footer";

// // const ProductDetails = () => {
// //   const { id } = useParams(); // `id` là mã sản phẩm (MASP)
// //   const [product, setProduct] = useState(null); // Thông tin sản phẩm
// //   const [sizes, setSizes] = useState([]); // Danh sách size
// //   const [selectedSize, setSelectedSize] = useState(""); // Size đã chọn
// //   const [quantity, setQuantity] = useState(1); // Số lượng sản phẩm
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState("");

// //   // Fetch thông tin sản phẩm
// //   useEffect(() => {
// //     const fetchProductDetails = async () => {
// //       try {
// //         const response = await api.getSanPhamById(id);
// //         setProduct(response.data);
// //         setLoading(false);
// //       } catch (err) {
// //         setError("Lỗi khi tải chi tiết sản phẩm");
// //         setLoading(false);
// //       }
// //     };

// //     fetchProductDetails();
// //   }, [id]);

// //   // Fetch danh sách size sản phẩm
// //   useEffect(() => {
// //     const fetchSizes = async () => {
// //       try {
// //         const response = await api.getSizesByProduct(id); // `id` là MASP
// //         console.log("Sizes fetched:", response.data);
// //         setSizes(response.data); // Cập nhật danh sách size
// //       } catch (err) {
// //         console.error("Lỗi khi tải danh sách size:", err);
// //       }
// //     };

// //     fetchSizes();
// //   }, [id]);

// //   // Xử lý thêm vào giỏ hàng
// //   const handleAddToCart = async () => {
// //     if (!selectedSize) {
// //       alert("Vui lòng chọn size sản phẩm!");
// //       return;
// //     }

// //     try {
// //       const payload = {
// //         mand: localStorage.getItem("mand"), // Lấy mã người dùng từ localStorage
// //         masp: id, // Mã sản phẩm
// //         size: selectedSize, // Size đã chọn
// //         soluong: quantity, // Số lượng
// //       };

// //       await api.addToCart(payload);
// //       alert("Thêm vào giỏ hàng thành công!");
// //     } catch (err) {
// //       console.error("Lỗi khi thêm vào giỏ hàng:", err);
// //       alert("Thêm vào giỏ hàng thất bại!");
// //     }
// //   };

// //   if (loading) return <p>Đang tải...</p>;
// //   if (error) return <p className="text-red-500">{error}</p>;

// //   // Đường dẫn hình ảnh từ thư mục public
// //   const imageBasePath = "../src/assets/images/";

// //   return (
// //     <div className="flex flex-col min-h-screen">
// //       <Header />
// //       <div className="container mx-auto py-12 px-6">
// //         <h1 className="text-4xl font-extrabold mb-6 text-gray-800 text-center">
// //           {product?.tensanpham || "Sản phẩm không tồn tại"}
// //         </h1>
// //         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
// //           {/* Hình ảnh sản phẩm */}
// //           <div className="relative group">
// //             {product?.hinhanh ? (
// //               <img
// //                 src={`${imageBasePath}${product.hinhanh}`}
// //                 alt={product.tensanpham}
// //                 className="w-full h-[400px] object-cover rounded-lg shadow-lg transform transition-transform duration-300 group-hover:scale-105"
// //               />
// //             ) : (
// //               <p className="text-gray-500 text-center">Hình ảnh không tồn tại</p>
// //             )}
// //           </div>

// //           {/* Thông tin sản phẩm */}
// //           <div className="flex flex-col justify-center">
// //             <h2 className="text-3xl font-bold text-gray-800 mb-4">Chi tiết sản phẩm</h2>
// //             <p className="text-lg text-gray-700 mb-2">
// //               <span className="font-semibold">Giá:</span>{" "}
// //               {product?.gia ? (
// //                 <span className="text-red-500 font-bold text-xl">
// //                   {product.gia.toLocaleString()} VND
// //                 </span>
// //               ) : (
// //                 "Đang cập nhật"
// //               )}
// //             </p>

// //             {/* Danh sách size */}
// //             <p className="text-lg text-gray-700 mb-4">
// //               <span className="font-semibold">Chọn size:</span>
// //             </p>
// //             <div className="mb-4">
// //               {sizes.length > 0 ? (
// //                 sizes.map((size) => (
// //                   <label key={size} className="inline-flex items-center mr-4">
// //                     <input
// //                       type="radio"
// //                       name="size"
// //                       value={size}
// //                       checked={selectedSize === size}
// //                       onChange={() => setSelectedSize(size)}
// //                       className="form-radio h-5 w-5 text-blue-600"
// //                     />
// //                     <span className="ml-2 text-gray-700">{size}</span>
// //                   </label>
// //                 ))
// //               ) : (
// //                 <p className="text-gray-500">Không có size nào khả dụng cho sản phẩm này.</p>
// //               )}
// //             </div>

// //             {/* Số lượng sản phẩm */}
// //             <div className="flex items-center mb-6">
// //               <button
// //                 onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
// //                 className="bg-gray-300 px-3 py-1 text-xl rounded-l hover:bg-gray-400"
// //               >
// //                 -
// //               </button>
// //               <input
// //                 type="text"
// //                 value={quantity}
// //                 readOnly
// //                 className="w-12 text-center border-t border-b border-gray-300"
// //               />
// //               <button
// //                 onClick={() => setQuantity((prev) => prev + 1)}
// //                 className="bg-gray-300 px-3 py-1 text-xl rounded-r hover:bg-gray-400"
// //               >
// //                 +
// //               </button>
// //             </div>

// //             {/* Nút thêm vào giỏ hàng */}
// //             <button
// //               onClick={handleAddToCart}
// //               className="w-full md:w-auto bg-blue-600 text-white text-lg font-semibold px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition duration-300"
// //             >
// //               Thêm vào giỏ hàng
// //             </button>
// //           </div>
// //         </div>
// //       </div>
// //       <Footer />
// //     </div>
// //   );
// // };

// // export default ProductDetails;
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { api } from "../api/axios";
import Header from "../components/Header";
import Footer from "../components/Footer";
import DanhGiaShop from "../components/DanhGiaShop";

const ProductDetails = () => {
  const { id } = useParams(); // `id` là ID sản phẩm
  const [product, setProduct] = useState(null); // Thông tin sản phẩm
  const [sizes, setSizes] = useState([]); // Danh sách size
  const [selectedSize, setSelectedSize] = useState(""); // Size đã chọn
  const [quantity, setQuantity] = useState(1); // Số lượng sản phẩm
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch thông tin sản phẩm
  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await api.getSanPhamById(id);
        setProduct(response.data);
        // Fetch danh sách size dựa trên `masp` (sau khi lấy từ sản phẩm)
        fetchSizes(response.data.masp); // Truyền `masp`
        setLoading(false);
      } catch (err) {
        setError("Lỗi khi tải chi tiết sản phẩm");
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [id]);

  // Fetch danh sách size sản phẩm
  const fetchSizes = async (masp) => {
    try {
      const response = await api.getSizesByProduct(masp); // Gọi API bằng `masp`
      console.log("Sizes fetched:", response.data);
      setSizes(response.data); // Cập nhật danh sách size
    } catch (err) {
      console.error("Lỗi khi tải danh sách size:", err);
    }
  };

  // Xử lý thêm vào giỏ hàng
  const handleAddToCart = async () => {
    if (!selectedSize) {
      alert("Vui lòng chọn size sản phẩm!");
      return;
    }

    try {
      const payload = {
        mand: localStorage.getItem("mand"), // Lấy mã người dùng từ localStorage
        masp: product.masp, // Mã sản phẩm (lấy từ sản phẩm đã fetch)
        size: selectedSize, // Size đã chọn
        soluong: quantity, // Số lượng
      };

      await api.addToCart(payload);
      alert("Thêm vào giỏ hàng thành công!");
    } catch (err) {
      console.error("Lỗi khi thêm vào giỏ hàng:", err);
      alert("Thêm vào giỏ hàng thất bại!");
    }
  };

  if (loading) return <p>Đang tải...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  // Đường dẫn hình ảnh từ thư mục public
  const imageBasePath = "../src/assets/images/";

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="container mx-auto py-12 px-6">
        <h1 className="text-4xl font-extrabold mb-6 text-gray-800 text-center">
          {product?.tensanpham || "Sản phẩm không tồn tại"}
        </h1>
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

            {/* Danh sách size */}
            <p className="text-lg text-gray-700 mb-4">
              <span className="font-semibold">Chọn size:</span>
            </p>
            <div className="mb-4">
              {sizes.length > 0 ? (
                sizes.map((size) => (
                  <label key={size} className="inline-flex items-center mr-4">
                    <input
                      type="radio"
                      name="size"
                      value={size}
                      checked={selectedSize === size}
                      onChange={() => setSelectedSize(size)}
                      className="form-radio h-5 w-5 text-blue-600"
                    />
                    <span className="ml-2 text-gray-700">{size}</span>
                  </label>
                ))
              ) : (
                <p className="text-gray-500">Không có size nào khả dụng cho sản phẩm này.</p>
              )}
            </div>

            {/* Số lượng sản phẩm */}
            <div className="flex items-center mb-6">
              <button
                onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                className="bg-gray-300 px-3 py-1 text-xl rounded-l hover:bg-gray-400"
              >
                -
              </button>
              <input
                type="text"
                value={quantity}
                readOnly
                className="w-12 text-center border-t border-b border-gray-300"
              />
              <button
                onClick={() => setQuantity((prev) => prev + 1)}
                className="bg-gray-300 px-3 py-1 text-xl rounded-r hover:bg-gray-400"
              >
                +
              </button>
            </div>

            {/* Nút thêm vào giỏ hàng */}
            <button
              onClick={handleAddToCart}
              className="w-full md:w-auto bg-blue-600 text-white text-lg font-semibold px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition duration-300"
            >
              Thêm vào giỏ hàng
            </button>
          </div>
        </div>
        <div className="mt-12">
         <DanhGiaShop />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetails;
// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { api } from "../api/axios";
// import Header from "../components/Header";
// import Footer from "../components/Footer";

// const ProductDetails = () => {
//   const { id } = useParams(); // `id` là mã sản phẩm (MASP)
//   const [product, setProduct] = useState(null); // Thông tin sản phẩm
//   const [reviews, setReviews] = useState([]); // Danh sách đánh giá
//   const [newReview, setNewReview] = useState(""); // Nội dung đánh giá mới
//   const [rating, setRating] = useState(0); // Số sao đánh giá
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   // Fetch thông tin sản phẩm
//   useEffect(() => {
//     const fetchProductDetails = async () => {
//       try {
//         const response = await api.getSanPhamById(id);
//         setProduct(response.data);
//         setLoading(false);
//       } catch (err) {
//         setError("Lỗi khi tải chi tiết sản phẩm");
//         setLoading(false);
//       }
//     };

//     fetchProductDetails();
//   }, [id]);

//   // Fetch đánh giá sản phẩm
//   useEffect(() => {
//     const fetchReviews = async () => {
//       try {
//         const response = await api.getDanhGiaByProductId(id);
//         setReviews(response.data);
//       } catch (err) {
//         console.error("Lỗi khi tải đánh giá sản phẩm:", err);
//       }
//     };

//     fetchReviews();
//   }, [id]);

//   // Xử lý thêm đánh giá mới
//   const handleAddReview = async () => {
//     if (!newReview || rating <= 0) {
//       alert("Vui lòng nhập nội dung đánh giá và chọn số sao!");
//       return;
//     }

//     try {
//       const payload = {
//         masp: id,
//         noidung: newReview,
//         sosao: rating,
//         mand: localStorage.getItem("mand"), // Mã người dùng
//       };

//       await api.addDanhGia(payload);

//       // Làm mới danh sách đánh giá sau khi thêm thành công
//       const refreshedReviews = await api.getDanhGiaByProductId(id);
//       setReviews(refreshedReviews.data);

//       setNewReview("");
//       setRating(0);
//       alert("Thêm đánh giá thành công!");
//     } catch (err) {
//       console.error("Lỗi khi thêm đánh giá:", err);
//       alert("Thêm đánh giá thất bại!");
//     }
//   };

//   if (loading) return <p>Đang tải...</p>;
//   if (error) return <p className="text-red-500">{error}</p>;

//   // Đường dẫn hình ảnh từ thư mục public
//   const imageBasePath = "../src/assets/images/";

//   return (
//     <div className="flex flex-col min-h-screen">
//       <Header />
//       <div className="container mx-auto py-12 px-6">
//         <h1 className="text-4xl font-extrabold mb-6 text-gray-800 text-center">
//           {product?.tensanpham || "Sản phẩm không tồn tại"}
//         </h1>
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//           {/* Hình ảnh sản phẩm */}
//           <div className="relative group">
//             {product?.hinhanh ? (
//               <img
//                 src={`${imageBasePath}${product.hinhanh}`}
//                 alt={product.tensanpham}
//                 className="w-full h-[400px] object-cover rounded-lg shadow-lg transform transition-transform duration-300 group-hover:scale-105"
//               />
//             ) : (
//               <p className="text-gray-500 text-center">Hình ảnh không tồn tại</p>
//             )}
//           </div>

//           {/* Thông tin sản phẩm */}
//           <div className="flex flex-col justify-center">
//             <h2 className="text-3xl font-bold text-gray-800 mb-4">Chi tiết sản phẩm</h2>
//             <p className="text-lg text-gray-700 mb-2">
//               <span className="font-semibold">Giá:</span>{" "}
//               {product?.gia ? (
//                 <span className="text-red-500 font-bold text-xl">
//                   {product.gia.toLocaleString()} VND
//                 </span>
//               ) : (
//                 "Đang cập nhật"
//               )}
//             </p>
//           </div>
//         </div>

//         {/* Đánh giá sản phẩm */}
//         <div className="mt-12">
//           <h2 className="text-2xl font-bold text-gray-800 mb-4">Đánh giá sản phẩm</h2>
//           {reviews.length > 0 ? (
//             reviews.map((review) => (
//               <div
//                 key={review.id}
//                 className="border-b border-gray-200 py-4"
//               >
//                 <p className="text-lg font-semibold">
//                   {review.mand || "Khách hàng"}:
//                 </p>
//                 <p className="text-sm text-gray-600">"{review.noidung}"</p>
//                 <p className="text-sm text-yellow-500">
//                   {`⭐`.repeat(review.sosao)}
//                 </p>
//               </div>
//             ))
//           ) : (
//             <p className="text-gray-500">Chưa có đánh giá nào cho sản phẩm này.</p>
//           )}

//           Form thêm đánh giá
//           <div className="mt-6">
//             <h3 className="text-lg font-semibold mb-2">Viết đánh giá của bạn:</h3>
//             <textarea
//               value={newReview}
//               onChange={(e) => setNewReview(e.target.value)}
//               className="w-full border border-gray-300 rounded-lg p-2 mb-4"
//               rows="4"
//               placeholder="Nhập đánh giá của bạn tại đây..."
//             ></textarea>
//             <div className="flex items-center mb-4">
//               <label className="mr-2">Số sao:</label>
//               <select
//                 value={rating}
//                 onChange={(e) => setRating(Number(e.target.value))}
//                 className="border border-gray-300 rounded-lg p-2"
//               >
//                 <option value="0">Chọn số sao</option>
//                 {[1, 2, 3, 4, 5].map((star) => (
//                   <option key={star} value={star}>
//                     {star}
//                   </option>
//                 ))}
//               </select>
//             </div>
//             <button
//               onClick={handleAddReview}
//               className="bg-blue-600 text-white text-lg font-semibold px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition duration-300"
//             >
//               Gửi đánh giá
//             </button>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default ProductDetails;
