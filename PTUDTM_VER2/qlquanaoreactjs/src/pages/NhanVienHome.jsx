import React from "react";
import UserInfo from "../components/UserInfo";``
import CustomerMenu from "../pages/CustomerMenu";
const NhanVienHome = () => {
  const userDetails = JSON.parse(localStorage.getItem("userDetails"));

  return (
    <div className="p-6">
      <CustomerMenu />
      <h1 className="text-3xl font-bold">Chào mừng đến Nhân Viên Home</h1>
      <p>Tên: {userDetails?.TENND}</p>
      <p>Email: {userDetails?.EMAIL}</p>
      <UserInfo />
    </div>
  );
};

export default NhanVienHome;
