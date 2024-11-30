// import React from "react";
// import Header from "../components/Header";
// import Footer from "../components/Footer";
// import BannerSlider from "../components/BannerSlider";

// const KhachHangHome = () => {
//   return (
//     <div className="min-h-screen bg-gray-100">
//       <Header />
//       <BannerSlider/>
//       <main className="relative">
//         {/* Banner Section */}
//         <div
//           className="bg-cover bg-center h-[500px] flex items-center justify-center"
//           style={{
//             backgroundImage:
//               "url('https://source.unsplash.com/1600x900/?fashion,clothing')",
//           }}
//         >
//           <div className="text-center text-white bg-black bg-opacity-50 px-6 py-8 rounded-lg">
//             <h1 className="text-4xl font-bold">VỀ OLD SAILOR</h1>
//             <p className="mt-4">
//               Old Sailor là thương hiệu thời trang nam được bày bán tại các cửa
//               hàng trên toàn quốc. Cam kết chất lượng và giá thành tốt nhất!
//             </p>
//           </div>
//         </div>

//         {/* About Section */}
//         <section className="container mx-auto py-12">
//           <h2 className="text-3xl font-bold text-center mb-6">
//             Chào mừng đến với Old Sailor
//           </h2>
//           <p className="text-center text-gray-700">
//             Chúng tôi tự tin là nơi mua sắm an toàn và uy tín, mang đến sự hài
//             lòng và trải nghiệm tốt nhất cho khách hàng.
//           </p>
//         </section>

//         {/* Call to Actions */}
//         <section className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 py-8">
//           <div className="bg-white p-6 rounded-lg shadow-lg text-center">
//             <h3 className="text-xl font-bold mb-4">Sản phẩm mới</h3>
//             <p className="text-gray-600 mb-4">
//               Xem ngay các sản phẩm mới nhất của chúng tôi!
//             </p>
//             <a
//               href="/new-arrivals"
//               className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
//             >
//               Xem ngay
//             </a>
//           </div>
//           <div className="bg-white p-6 rounded-lg shadow-lg text-center">
//             <h3 className="text-xl font-bold mb-4">Ưu đãi khủng</h3>
//             <p className="text-gray-600 mb-4">
//               Ưu đãi lên đến 50% cho các sản phẩm hot.
//             </p>
//             <a
//               href="/flash-sale"
//               className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
//             >
//               Tìm hiểu ngay
//             </a>
//           </div>
//           <div className="bg-white p-6 rounded-lg shadow-lg text-center">
//             <h3 className="text-xl font-bold mb-4">Liên hệ với chúng tôi</h3>
//             <p className="text-gray-600 mb-4">
//               Hỗ trợ khách hàng 24/7 qua hotline hoặc Zalo.
//             </p>
//             <a
//               href="/contact"
//               className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
//             >
//               Liên hệ
//             </a>
//           </div>
//         </section>
//       </main>
//       <Footer />
//     </div>
//   );
// };

// export default KhachHangHome;
import React, { useState, useEffect } from "react";
import { api } from "../api/axios";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BannerSlider from "../components/BannerSlider";
import ProductCard from "./ProductCard";

const KhachHangHome = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.getAllSanPham();
        setProducts(response.data);
        setLoading(false);
      } catch (err) {
        setError("Lỗi khi tải danh sách sản phẩm");
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <p>Đang tải...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <BannerSlider />
      <main className="container mx-auto py-8">
        <h2 className="text-3xl font-bold mb-6 text-center">Sản phẩm nổi bật</h2>
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
            <ProductCard key={product.ID} product={product} /> // Đảm bảo key là duy nhất
        ))}
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default KhachHangHome;
