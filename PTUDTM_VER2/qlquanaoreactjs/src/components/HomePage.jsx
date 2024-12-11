// src/HomePage.js
import React from 'react';
import Header from './Header';
import Footer from './Footer';

const HomePage = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      {/* Header */}
      {/* <header className="bg-indigo-600 text-white py-6">
        <div className="container mx-auto flex justify-between items-center px-6">
          <h1 className="text-3xl font-bold">Fashion Hub</h1>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#" className="hover:text-indigo-200">Trang Chủ</a></li>
              <li><a href="#about" className="hover:text-indigo-200">Giới Thiệu</a></li>
              <li><a href="#products" className="hover:text-indigo-200">Sản Phẩm</a></li>
              <li><a href="#contact" className="hover:text-indigo-200">Liên Hệ</a></li>
            </ul>
          </nav>
        </div>
      </header> */}
      <Header />

      {/* About Section */}
      <section id="about" className="bg-white py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-semibold text-indigo-600 mb-6">Giới Thiệu Về Shop</h2>
          <p className="text-lg text-gray-700 mb-8">
            Chào mừng bạn đến với Fashion Hub! Chúng tôi chuyên cung cấp những bộ quần áo thời trang, phong cách hiện đại và chất lượng cao.
            Tại đây, bạn sẽ tìm thấy những bộ sưu tập phù hợp với phong cách cá nhân của mình.
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="bg-gray-100 py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-semibold text-indigo-600 mb-6">Bộ Sưu Tập Mới</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img src="https://via.placeholder.com/300x300" alt="Product 1" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold">Áo Thun Nam</h3>
                <p className="text-gray-600">Áo thun cotton mềm mại, thoáng mát.</p>
                <span className="text-xl font-bold text-indigo-600">500.000 VND</span>
              </div>
            </div>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img src="https://via.placeholder.com/300x300" alt="Product 2" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold">Quần Jean Nam</h3>
                <p className="text-gray-600">Quần jean thời trang, vừa vặn, dễ phối đồ.</p>
                <span className="text-xl font-bold text-indigo-600">700.000 VND</span>
              </div>
            </div>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img src="https://via.placeholder.com/300x300" alt="Product 3" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold">Váy Nữ</h3>
                <p className="text-gray-600">Váy nữ thanh lịch, phù hợp cho mọi dịp.</p>
                <span className="text-xl font-bold text-indigo-600">900.000 VND</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-indigo-600 text-white py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-semibold mb-6">Liên Hệ</h2>
          <p className="text-lg mb-8">
            Nếu bạn có bất kỳ câu hỏi nào, đừng ngần ngại liên hệ với chúng tôi. Chúng tôi luôn sẵn sàng hỗ trợ bạn!
          </p>
          <button className="bg-white text-indigo-600 py-2 px-6 rounded-lg hover:bg-indigo-200 transition">
            Gửi Thông Tin
          </button>
        </div>
      </section>

      {/* Footer */}
      {/* <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Fashion Hub. Tất cả quyền được bảo vệ.</p>
        </div>
      </footer> */}
      <Footer />
    </div>
  );
}

export default HomePage;
