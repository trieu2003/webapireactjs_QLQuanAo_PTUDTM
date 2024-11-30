import React from "react";

import UserInfo from "../components/UserInfo";
import AdminMenu from "../pages/AdminMenu";
const AdminHome = () => {
  const userDetails = JSON.parse(localStorage.getItem("userDetails"));

  return (
    <div className="p-6">
        <AdminMenu/>
      <h1 className="text-3xl font-bold">Chào mừng đến Admin Home</h1>
      <p>Tên: {userDetails?.TENNV}</p>
      <p>Email: {userDetails?.EMAIL}</p>
      <UserInfo />
      
    </div>
  );
};

export default AdminHome;
