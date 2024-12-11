import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import ChangePassword from "./components/ChangePassword";


import AdminHome from "./pages/AdminHome"; // Trang dành cho Admin
import NhanVienHome from "./pages/NhanVienHome"; // Trang dành cho Nhân viên
import AdminMenu from "./pages/AdminMenu";
import CustomerMenu from "./pages/CustomerMenu";
import KhachHangHome from "./pages/KhachHangHome";
import ProductDetails from "./pages/ProductDetails";
import Profile from "./components/profile";
import Cart from "./pages/Cart";
import HomePage from "./components/HomePage";
import ProductList from "./pages/ProductList";
import DiscountedProducts from "./components/DiscountedProducts";
import UserInfo from "./components/UserInfo";
import Invoice from "./pages/Invoice"; // Tạo một component Invoiceimport Invoice from "./pages/Invoice"; // Tạo một component Invoice




const App = () => {
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<Login />} /> {/* Trang login */}
       {/* Trang dành cho Admin */}
       <Route path="/pages/AdminHome" element={<AdminHome />} />
       <Route path="/KhachHangHome" element={<KhachHangHome />} />
       <Route path="/product/:id" element={<ProductDetails />} />
       < Route path="/profile" element={<Profile />} />
       <Route path="/Cart" element={<Cart />} />
       <Route path="/HomePage" element={<HomePage />} />
       <Route path="/ProductList" element={<ProductList />} />
       <Route path="/DiscountedProducts" element={<DiscountedProducts />} />
       <Route path="UserInfo" element={<UserInfo />} />
       <Route path="/invoice/:mahd" element={<Invoice />} />
{/* Trang dành cho Nhân viên */}
      <Route path="/pages/NhanVienHome" element={<NhanVienHome />} />
        <Route path="/ChangePassword" element={<ChangePassword />} /> {/* Trang đổi mật khất */}
      
      </Routes>
     
    </Router>
  );
};

export default App;

