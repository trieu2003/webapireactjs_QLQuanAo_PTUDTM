
import React, { useState } from "react";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";
import { TEInput, TERipple } from "tw-elements-react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setMessage("Đang xử lý...");

    try {
      const response = await axios.post("/user/login", { username, password });
      const { redirectUrl, role, userDetails } = response.data;

      console.log(response.data);
      if (!redirectUrl) {
        setMessage("Không thể điều hướng. Hãy kiểm tra lại API.");
        return;
      }
      localStorage.setItem("mauser", userDetails.mauser);
      localStorage.setItem("mand", userDetails.mand);
      localStorage.setItem("userDetails", JSON.stringify(userDetails));
      localStorage.setItem("userRole", role);

      console.log("mand:", userDetails.mand);
      if (role === "Khách Hàng") navigate("/KhachHangHome");
      else if (role === "Admin") navigate("/AdminHome");
      else if (role === "Nhân Viên") navigate("/NhanVienHome");
      else setMessage("Vai trò không hợp lệ. Liên hệ quản trị viên.");
    } catch (error) {
      setMessage(error.response?.data?.message || "Đăng nhập thất bại.");
    }
  };

  return (
    <section className="h-screen flex items-center justify-center bg-neutral-200 dark:bg-neutral-800">
      <div className="container max-w-4xl mx-auto shadow-lg rounded-lg overflow-hidden">
        <div className="lg:flex">
          {/* Cột trái */}
          <div className="lg:w-1/2 px-8 py-12 bg-white dark:bg-neutral-700">
            <div className="text-center mb-8">
              <img
                className="mx-auto w-20 mb-4"
                src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                alt="logo"
              />
              <h1 className="text-2xl font-semibold">
                Chào mừng đến hệ thống của chúng tôi!
              </h1>
            </div>
            <form onSubmit={handleLogin}>
              <p className="mb-6">Vui lòng đăng nhập</p>

              <TEInput
                type="text"
                label="Tên Đăng Nhập"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="mb-4"
              />

              <TEInput
                type="password"
                label="Mật Khẩu"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mb-6"
              />

              <TERipple className="w-full">
                <button
                  type="submit"
                  className="w-full py-2 text-white text-sm font-semibold rounded-lg shadow-md transition-all duration-200"
                  style={{
                    background:
                      "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
                  }}
                >
                  ĐĂNG NHẬP
                </button>
              </TERipple>

              <div className="flex justify-between mt-4">
                <a href="/ChangePassword" className="text-blue-600 text-sm">
                  Quên mật khẩu?
                </a>
                <a href="#!" className="text-blue-600 text-sm">
                  Đăng ký
                </a>
              </div>
            </form>
            {message && (
              <p className="mt-4 text-center text-red-500">{message}</p>
            )}
          </div>

          {/* Cột phải */}
          <div
            className="lg:w-1/2 hidden lg:flex items-center justify-center bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white"
          >
            <div className="text-center px-8">
              <h2 className="text-2xl font-bold mb-4">
                We are more than just a company
              </h2>
              <p className="text-sm">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
