import React, { useEffect, useState } from "react";

const UserInfo = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Lấy dữ liệu từ localStorage
    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    }
  }, []);

  if (!userData) {
    return <p>Không có dữ liệu người dùng</p>;
  }

  return (
    <div>
      <h2>Thông Tin Người Dùng</h2>
      <p>Tên: {userData.userDetails.tennd}</p>
      <p>Email: {userData.userDetails.email}</p>
      <p>Địa chỉ: {userData.userDetails.diachi}</p>
      <p>Số điện thoại: {userData.userDetails.sodienthoai}</p>
      <p>Vai trò: {userData.role}</p>
    </div>
  );
};

export default UserInfo;
