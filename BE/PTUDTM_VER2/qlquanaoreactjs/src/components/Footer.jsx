import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-8">
      <div className="container mx-auto text-center">
        <p>
          &copy; {new Date().getFullYear()} OLD SAILOR. Tất cả các quyền được bảo
          lưu.
        </p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="https://facebook.com" className="hover:underline">
            Facebook
          </a>
          <a href="https://zalo.me" className="hover:underline">
            Zalo
          </a>
          <a href="tel:+123456789" className="hover:underline">
            Hotline
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
