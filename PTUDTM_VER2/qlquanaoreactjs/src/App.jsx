import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import ChangePassword from "./components/ChangePassword";
import UserInfo from "./components/UserInfo";

import AdminHome from "./pages/AdminHome"; // Trang dành cho Admin
import NhanVienHome from "./pages/NhanVienHome"; // Trang dành cho Nhân viên
import AdminMenu from "./pages/AdminMenu";
import CustomerMenu from "./pages/CustomerMenu";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} /> {/* Trang login */}
       {/* Trang dành cho Admin */}
       <Route path="/pages/AdminHome" element={<AdminHome />} />

{/* Trang dành cho Nhân viên */}
<Route path="/pages/NhanVienHome" element={<NhanVienHome />} />
        <Route path="/ChangePassword" element={<ChangePassword />} /> {/* Trang đổi mật khất */}
        <Route path="/UserInfo" element={<UserInfo />} /> {/* Trang thống tin người dùng */}
      </Routes>
    </Router>
  );
};

export default App;

