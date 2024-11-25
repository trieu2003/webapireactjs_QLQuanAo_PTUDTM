
// // import React, { useState } from "react";
// // import axios from "../api/axios";


// // const Login = () => {
// //   const [isLogin, setIsLogin] = useState(true); // Đổi qua lại giữa Đăng nhập/Đăng ký
// //   const [username, setUsername] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [email, setEmail] = useState(""); // Chỉ cần cho Đăng ký
// //   const [message, setMessage] = useState("");

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setMessage("Đang xử lý...");
// //     try {
// //       // Xử lý API
// //       if (isLogin) {
// //         // Gửi yêu cầu đăng nhập
// //         console.log("Đăng nhập với", { username, password });
// //       } else {
// //         // Gửi yêu cầu đăng ký
// //         console.log("Đăng ký với", { username, email, password });
// //       }
// //       setMessage("Thành công!");
      
      
// //     } catch (error) {
// //       setMessage("Thất bại! Vui lòng thử lại.");
// //     }
// //   };

// //   return (
// //     <div className="relative min-h-screen bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url('src/assets/images/background.jpg')" }}>
// //       {/* Overlay mờ */}
// //       <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
// //       {/* Form Đăng nhập/Đăng ký */}
// //       <div className="relative z-10 bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
// //         <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
// //           {isLogin ? "Đăng Nhập" : "Đăng Ký"}
// //         </h2>
// //         <form onSubmit={handleSubmit} className="space-y-4">
// //           {/* Username */}
// //           <div>
// //             <label className="block text-gray-700 font-medium">Tên Đăng Nhập</label>
// //             <input
// //               type="text"
// //               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 focus:border-blue-500"
// //               value={username}
// //               onChange={(e) => setUsername(e.target.value)}
// //               placeholder="Nhập tên đăng nhập"
// //               required
// //             />
// //           </div>

// //           {/* Email (Chỉ hiện khi Đăng ký) */}
// //           {!isLogin && (
// //             <div>
// //               <label className="block text-gray-700 font-medium">Email</label>
// //               <input
// //                 type="email"
// //                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 focus:border-blue-500"
// //                 value={email}
// //                 onChange={(e) => setEmail(e.target.value)}
// //                 placeholder="Nhập email"
// //                 required
// //               />
// //             </div>
// //           )}

// //           {/* Password */}
// //           <div>
// //             <label className="block text-gray-700 font-medium">Mật Khẩu</label>
// //             <input
// //               type="password"
// //               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 focus:border-blue-500"
// //               value={password}
// //               onChange={(e) => setPassword(e.target.value)}
// //               placeholder="Nhập mật khẩu"
// //               required
// //             />
// //           </div>

// //           {/* Button Submit */}
// //           <button
// //             type="submit"
// //             className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 focus:ring focus:ring-blue-300 transition duration-300"
// //           >
// //             {isLogin ? "Đăng Nhập" : "Đăng Ký"}
// //           </button>
// //         </form>

// //         {/* Thông báo */}
// //         {message && (
// //           <p className="mt-4 text-center text-red-500 font-medium">{message}</p>
// //         )}

// //         {/* Nút đổi giữa Đăng nhập/Đăng ký */}
// //         <div className="mt-6 text-center">
// //           {isLogin ? (
// //             <p>
// //               Chưa có tài khoản?{" "}
// //               <button
// //                 type="button"
// //                 className="text-blue-600 font-medium hover:underline"
// //                 onClick={() => setIsLogin(false)}
// //               >
// //                 Đăng Ký
// //               </button>
// //             </p>
// //           ) : (
// //             <p>
// //               Đã có tài khoản?{" "}
// //               <button
// //                 type="button"
// //                 className="text-blue-600 font-medium hover:underline"
// //                 onClick={() => setIsLogin(true)}
// //               >
// //                 Đăng Nhập
// //               </button>
// //             </p>
// //           )}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Login;

// import React, { useState } from "react";
// import axios from "../api/axios";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [message, setMessage] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setMessage("Đang xử lý...");

//     try {
//       const response = await axios.post("/user/login", {
//         username,
//         password,
//       });

//       // Lưu thông tin người dùng vào localStorage
//       const { UserDetails, Role, RedirectUrl } = response.data;
     
//       localStorage.setItem("userDetails", JSON.stringify(UserDetails));
//       localStorage.setItem("userRole", Role);

//       // Điều hướng đến trang tương ứng
//       navigate(`../pages/${RedirectUrl}`);
//       console.log(response.data);
//     } catch (error) {
//       setMessage(error.response?.data?.Message || "Đăng nhập thất bại.");
//     }
//   };

//   return (
//     <div
//       className="min-h-screen flex items-center justify-center bg-gray-100"
//       style={{
//         backgroundImage: "url('https://source.unsplash.com/1600x900/?fashion,clothing')",
//         backgroundSize: "cover",
//       }}
//     >
//       <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
//         <h2 className="text-2xl font-bold mb-4 text-center">Đăng Nhập</h2>
//         <form onSubmit={handleLogin} className="space-y-4">
//           <div>
//             <label className="block text-gray-700 font-medium">Tên Đăng Nhập</label>
//             <input
//               type="text"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               placeholder="Nhập tên đăng nhập"
//               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//               required
//             />
//           </div>
//           <div>
//             <label className="block text-gray-700 font-medium">Mật Khẩu</label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               placeholder="Nhập mật khẩu"
//               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//               required
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
//           >
//             Đăng Nhập
//           </button>
//         </form>
//         {message && (
//           <p className="mt-4 text-center text-red-500 font-medium">{message}</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Login;

import React, { useState } from "react";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  // const handleLogin = async (e) => {
  //   e.preventDefault();
  //   setMessage("Đang xử lý...");
  
  //   try {
  //     const response = await axios.post("/user/login", {
  //       username,
  //       password,
  //     });
  
  //     const { redirectUrl, role, userDetails } = response.data;
  
  //     // Kiểm tra nếu redirectUrl hợp lệ
  //     if (!redirectUrl) {
  //       console.error("RedirectUrl không hợp lệ:", redirectUrl);
  //       setMessage("Không thể điều hướng. Hãy kiểm tra lại API.");
  //       return;
  //     }
  
  //     console.log("RedirectUrl:", redirectUrl);
  //     console.log("API Response:", response.data);
  
  //     // Lưu thông tin người dùng và role vào localStorage
  //     localStorage.setItem("userDetails", JSON.stringify(userDetails));
  //     localStorage.setItem("userRole", role);
  
  //     // Điều hướng đến URL đúng
  //     navigate(`/${redirectUrl}`);
  //   } catch (error) {
  //     setMessage(error.response?.data?.message || "Đăng nhập thất bại.");
  //   }
  // };
  
  const handleLogin = async (e) => {
    e.preventDefault();
    setMessage("Đang xử lý...");
  
    try {
      const response = await axios.post("/user/login", {
        username,
        password,
      });
  
      const { redirectUrl, role, userDetails } = response.data;
  
      // Kiểm tra redirectUrl có hợp lệ không
      if (!redirectUrl) {
        console.error("RedirectUrl không hợp lệ:", redirectUrl);
        setMessage("Không thể điều hướng. Hãy kiểm tra lại API.");
        return;
      }
  
      console.log("RedirectUrl:", redirectUrl);
      console.log("API Response:", response.data);
  
      // Lưu toàn bộ dữ liệu người dùng vào localStorage
      localStorage.setItem("userData", JSON.stringify(response.data));
  
      // Điều hướng đến URL đúng
      navigate(`/${redirectUrl}`);
    } catch (error) {
      setMessage(error.response?.data?.message || "Đăng nhập thất bại.");
    }
  };
  

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-gray-100"
      style={{
        backgroundImage: "url('https://source.unsplash.com/1600x900/?fashion,clothing')",
        backgroundSize: "cover",
      }}
    >
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-4 text-center">Đăng Nhập</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium">Tên Đăng Nhập</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Nhập tên đăng nhập"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Mật Khẩu</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Nhập mật khẩu"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
          >
            Đăng Nhập
          </button>
        </form>
        {message && (
          <p className="mt-4 text-center text-red-500 font-medium">{message}</p>
        )}
      </div>
    </div>
  );
};

export default Login;
