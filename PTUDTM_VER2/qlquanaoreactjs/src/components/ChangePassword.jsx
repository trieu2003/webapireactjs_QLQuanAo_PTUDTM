import React, { useState } from "react";
import axios from "../api/axios";

const ChangePassword = () => {
  const [maUser, setMaUser] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleChangePassword = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/user/change-password", {
        maUser,
        newPassword,
      });
      setMessage(response.data);
    } catch (error) {
      setMessage(error.response?.data || "Đổi mật khẩu thất bại");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4 text-center text-blue-600">Đổi Mật Khẩu</h2>
        <form onSubmit={handleChangePassword}>
          <div className="mb-4">
            <label className="block text-gray-700">Mã người dùng</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg"
              value={maUser}
              onChange={(e) => setMaUser(e.target.value)}
              placeholder="Nhập mã người dùng"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Mật khẩu mới</label>
            <input
              type="password"
              className="w-full px-4 py-2 border rounded-lg"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="Nhập mật khẩu mới"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
          >
            Đổi Mật Khẩu
          </button>
        </form>
        {message && <p className="mt-4 text-red-500 text-center">{message}</p>}
      </div>
    </div>
  );
};

export default ChangePassword;
