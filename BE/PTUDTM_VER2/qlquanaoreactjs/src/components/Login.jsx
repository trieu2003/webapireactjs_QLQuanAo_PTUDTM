
// // // // // import React, { useState } from "react";
// // // // // import axios from "../api/axios";


// // // // // const Login = () => {
// // // // //   const [isLogin, setIsLogin] = useState(true); // Đổi qua lại giữa Đăng nhập/Đăng ký
// // // // //   const [username, setUsername] = useState("");
// // // // //   const [password, setPassword] = useState("");
// // // // //   const [email, setEmail] = useState(""); // Chỉ cần cho Đăng ký
// // // // //   const [message, setMessage] = useState("");

// // // // //   const handleSubmit = async (e) => {
// // // // //     e.preventDefault();
// // // // //     setMessage("Đang xử lý...");
// // // // //     try {
// // // // //       // Xử lý API
// // // // //       if (isLogin) {
// // // // //         // Gửi yêu cầu đăng nhập
// // // // //         console.log("Đăng nhập với", { username, password });
// // // // //       } else {
// // // // //         // Gửi yêu cầu đăng ký
// // // // //         console.log("Đăng ký với", { username, email, password });
// // // // //       }
// // // // //       setMessage("Thành công!");
      
      
// // // // //     } catch (error) {
// // // // //       setMessage("Thất bại! Vui lòng thử lại.");
// // // // //     }
// // // // //   };

// // // // //   return (
// // // // //     <div className="relative min-h-screen bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url('src/assets/images/background.jpg')" }}>
// // // // //       {/* Overlay mờ */}
// // // // //       <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
// // // // //       {/* Form Đăng nhập/Đăng ký */}
// // // // //       <div className="relative z-10 bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
// // // // //         <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
// // // // //           {isLogin ? "Đăng Nhập" : "Đăng Ký"}
// // // // //         </h2>
// // // // //         <form onSubmit={handleSubmit} className="space-y-4">
// // // // //           {/* Username */}
// // // // //           <div>
// // // // //             <label className="block text-gray-700 font-medium">Tên Đăng Nhập</label>
// // // // //             <input
// // // // //               type="text"
// // // // //               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 focus:border-blue-500"
// // // // //               value={username}
// // // // //               onChange={(e) => setUsername(e.target.value)}
// // // // //               placeholder="Nhập tên đăng nhập"
// // // // //               required
// // // // //             />
// // // // //           </div>

// // // // //           {/* Email (Chỉ hiện khi Đăng ký) */}
// // // // //           {!isLogin && (
// // // // //             <div>
// // // // //               <label className="block text-gray-700 font-medium">Email</label>
// // // // //               <input
// // // // //                 type="email"
// // // // //                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 focus:border-blue-500"
// // // // //                 value={email}
// // // // //                 onChange={(e) => setEmail(e.target.value)}
// // // // //                 placeholder="Nhập email"
// // // // //                 required
// // // // //               />
// // // // //             </div>
// // // // //           )}

// // // // //           {/* Password */}
// // // // //           <div>
// // // // //             <label className="block text-gray-700 font-medium">Mật Khẩu</label>
// // // // //             <input
// // // // //               type="password"
// // // // //               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 focus:border-blue-500"
// // // // //               value={password}
// // // // //               onChange={(e) => setPassword(e.target.value)}
// // // // //               placeholder="Nhập mật khẩu"
// // // // //               required
// // // // //             />
// // // // //           </div>

// // // // //           {/* Button Submit */}
// // // // //           <button
// // // // //             type="submit"
// // // // //             className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 focus:ring focus:ring-blue-300 transition duration-300"
// // // // //           >
// // // // //             {isLogin ? "Đăng Nhập" : "Đăng Ký"}
// // // // //           </button>
// // // // //         </form>

// // // // //         {/* Thông báo */}
// // // // //         {message && (
// // // // //           <p className="mt-4 text-center text-red-500 font-medium">{message}</p>
// // // // //         )}

// // // // //         {/* Nút đổi giữa Đăng nhập/Đăng ký */}
// // // // //         <div className="mt-6 text-center">
// // // // //           {isLogin ? (
// // // // //             <p>
// // // // //               Chưa có tài khoản?{" "}
// // // // //               <button
// // // // //                 type="button"
// // // // //                 className="text-blue-600 font-medium hover:underline"
// // // // //                 onClick={() => setIsLogin(false)}
// // // // //               >
// // // // //                 Đăng Ký
// // // // //               </button>
// // // // //             </p>
// // // // //           ) : (
// // // // //             <p>
// // // // //               Đã có tài khoản?{" "}
// // // // //               <button
// // // // //                 type="button"
// // // // //                 className="text-blue-600 font-medium hover:underline"
// // // // //                 onClick={() => setIsLogin(true)}
// // // // //               >
// // // // //                 Đăng Nhập
// // // // //               </button>
// // // // //             </p>
// // // // //           )}
// // // // //         </div>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default Login;

// // // // import React, { useState } from "react";
// // // // import axios from "../api/axios";
// // // // import { useNavigate } from "react-router-dom";

// // // // const Login = () => {
// // // //   const [username, setUsername] = useState("");
// // // //   const [password, setPassword] = useState("");
// // // //   const [message, setMessage] = useState("");
// // // //   const navigate = useNavigate();

// // // //   const handleLogin = async (e) => {
// // // //     e.preventDefault();
// // // //     setMessage("Đang xử lý...");

// // // //     try {
// // // //       const response = await axios.post("/user/login", {
// // // //         username,
// // // //         password,
// // // //       });

// // // //       // Lưu thông tin người dùng vào localStorage
// // // //       const { UserDetails, Role, RedirectUrl } = response.data;
     
// // // //       localStorage.setItem("userDetails", JSON.stringify(UserDetails));
// // // //       localStorage.setItem("userRole", Role);

// // // //       // Điều hướng đến trang tương ứng
// // // //       navigate(`../pages/${RedirectUrl}`);
// // // //       console.log(response.data);
// // // //     } catch (error) {
// // // //       setMessage(error.response?.data?.Message || "Đăng nhập thất bại.");
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div
// // // //       className="min-h-screen flex items-center justify-center bg-gray-100"
// // // //       style={{
// // // //         backgroundImage: "url('https://source.unsplash.com/1600x900/?fashion,clothing')",
// // // //         backgroundSize: "cover",
// // // //       }}
// // // //     >
// // // //       <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
// // // //         <h2 className="text-2xl font-bold mb-4 text-center">Đăng Nhập</h2>
// // // //         <form onSubmit={handleLogin} className="space-y-4">
// // // //           <div>
// // // //             <label className="block text-gray-700 font-medium">Tên Đăng Nhập</label>
// // // //             <input
// // // //               type="text"
// // // //               value={username}
// // // //               onChange={(e) => setUsername(e.target.value)}
// // // //               placeholder="Nhập tên đăng nhập"
// // // //               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
// // // //               required
// // // //             />
// // // //           </div>
// // // //           <div>
// // // //             <label className="block text-gray-700 font-medium">Mật Khẩu</label>
// // // //             <input
// // // //               type="password"
// // // //               value={password}
// // // //               onChange={(e) => setPassword(e.target.value)}
// // // //               placeholder="Nhập mật khẩu"
// // // //               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
// // // //               required
// // // //             />
// // // //           </div>
// // // //           <button
// // // //             type="submit"
// // // //             className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
// // // //           >
// // // //             Đăng Nhập
// // // //           </button>
// // // //         </form>
// // // //         {message && (
// // // //           <p className="mt-4 text-center text-red-500 font-medium">{message}</p>
// // // //         )}
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Login;

// // // import React, { useState } from "react";
// // // import axios from "../api/axios";
// // // import { useNavigate } from "react-router-dom";

// // // const Login = () => {
// // //   const [username, setUsername] = useState("");
// // //   const [password, setPassword] = useState("");
// // //   const [message, setMessage] = useState("");
// // //   const navigate = useNavigate();

// // //   // const handleLogin = async (e) => {
// // //   //   e.preventDefault();
// // //   //   setMessage("Đang xử lý...");
  
// // //   //   try {
// // //   //     const response = await axios.post("/user/login", {
// // //   //       username,
// // //   //       password,
// // //   //     });
  
// // //   //     const { redirectUrl, role, userDetails } = response.data;
  
// // //   //     // Kiểm tra nếu redirectUrl hợp lệ
// // //   //     if (!redirectUrl) {
// // //   //       console.error("RedirectUrl không hợp lệ:", redirectUrl);
// // //   //       setMessage("Không thể điều hướng. Hãy kiểm tra lại API.");
// // //   //       return;
// // //   //     }
  
// // //   //     console.log("RedirectUrl:", redirectUrl);
// // //   //     console.log("API Response:", response.data);
  
// // //   //     // Lưu thông tin người dùng và role vào localStorage
// // //   //     localStorage.setItem("userDetails", JSON.stringify(userDetails));
// // //   //     localStorage.setItem("userRole", role);
  
// // //   //     // Điều hướng đến URL đúng
// // //   //     navigate(`/${redirectUrl}`);
// // //   //   } catch (error) {
// // //   //     setMessage(error.response?.data?.message || "Đăng nhập thất bại.");
// // //   //   }
// // //   // };
  
// // //   const handleLogin = async (e) => {
// // //     e.preventDefault();
// // //     setMessage("Đang xử lý...");
  
// // //     try {
// // //       const response = await axios.post("/user/login", {
// // //         username,
// // //         password,
// // //       });
  
// // //       const { redirectUrl, role, userDetails } = response.data;
  
// // //       // Kiểm tra redirectUrl có hợp lệ không
// // //       if (!redirectUrl) {
// // //         console.error("RedirectUrl không hợp lệ:", redirectUrl);
// // //         setMessage("Không thể điều hướng. Hãy kiểm tra lại API.");
// // //         return;
// // //       }
  
// // //       console.log("RedirectUrl:", redirectUrl);
// // //       console.log("API Response:", response.data);
  
// // //       // Lưu toàn bộ dữ liệu người dùng vào localStorage
// // //       localStorage.setItem("userData", JSON.stringify(response.data));
  
// // //       // Điều hướng đến URL đúng
// // //       navigate(`/${redirectUrl}`);
// // //     } catch (error) {
// // //       setMessage(error.response?.data?.message || "Đăng nhập thất bại.");
// // //     }
// // //   };
  

// // //   return (
// // //     <div
// // //       className="min-h-screen flex items-center justify-center bg-gray-100"
// // //       style={{
// // //         backgroundImage: "url('https://source.unsplash.com/1600x900/?fashion,clothing')",
// // //         backgroundSize: "cover",
// // //       }}
// // //     >
// // //       <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
// // //         <h2 className="text-2xl font-bold mb-4 text-center">Đăng Nhập</h2>
// // //         <form onSubmit={handleLogin} className="space-y-4">
// // //           <div>
// // //             <label className="block text-gray-700 font-medium">Tên Đăng Nhập</label>
// // //             <input
// // //               type="text"
// // //               value={username}
// // //               onChange={(e) => setUsername(e.target.value)}
// // //               placeholder="Nhập tên đăng nhập"
// // //               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
// // //               required
// // //             />
// // //           </div>
// // //           <div>
// // //             <label className="block text-gray-700 font-medium">Mật Khẩu</label>
// // //             <input
// // //               type="password"
// // //               value={password}
// // //               onChange={(e) => setPassword(e.target.value)}
// // //               placeholder="Nhập mật khẩu"
// // //               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
// // //               required
// // //             />
// // //           </div>
// // //           <button
// // //             type="submit"
// // //             className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
// // //           >
// // //             Đăng Nhập
// // //           </button>
// // //         </form>
// // //         {message && (
// // //           <p className="mt-4 text-center text-red-500 font-medium">{message}</p>
// // //         )}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Login;
// // import React, { useState } from "react";
// // import axios from "../api/axios";
// // import { useNavigate } from "react-router-dom";

// // const Login = () => {
// //   const [username, setUsername] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [message, setMessage] = useState("");
// //   const navigate = useNavigate();

// //   const handleLogin = async (e) => {
// //     e.preventDefault();
// //     setMessage("Đang xử lý...");
  
// //     try {
// //       const response = await axios.post("/user/login", {
// //         username,
// //         password,
// //       });
  
// //       const { redirectUrl, role, userDetails } = response.data;
  
// //       // Kiểm tra redirectUrl có hợp lệ không
// //       if (!redirectUrl) {
// //         console.error("RedirectUrl không hợp lệ:", redirectUrl);
// //         setMessage("Không thể điều hướng. Hãy kiểm tra lại API.");
// //         return;
// //       }
  
// //       console.log("RedirectUrl:", redirectUrl);
// //       console.log("API Response:", response.data);
  
// //       // Lưu toàn bộ dữ liệu người dùng vào localStorage
// //       localStorage.setItem("userDetails", JSON.stringify(userDetails));
// //       localStorage.setItem("userRole", role);
  
// //       // Điều hướng đến trang phù hợp
// //       if (role === "Khách Hàng") {
// //         navigate("/KhachHangHome");
// //       } else if (role === "Admin") {
// //         navigate("/AdminHome");
// //       } else if (role === "Nhân Viên") {
// //         navigate("/NhanVienHome");
// //       } else {
// //         setMessage("Vai trò không hợp lệ. Liên hệ quản trị viên.");
// //       }
// //     } catch (error) {
// //       setMessage(error.response?.data?.message || "Đăng nhập thất bại.");
// //     }
// //   };

// //   return (
// //     <div
// //       className="min-h-screen flex items-center justify-center bg-gray-100"
// //       style={{
// //         backgroundImage: "url('https://source.unsplash.com/1600x900/?fashion,clothing')",
// //         backgroundSize: "cover",
// //       }}
// //     >
// //       <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
// //         <h2 className="text-2xl font-bold mb-4 text-center">Đăng Nhập</h2>
// //         <form onSubmit={handleLogin} className="space-y-4">
// //           <div>
// //             <label className="block text-gray-700 font-medium">Tên Đăng Nhập</label>
// //             <input
// //               type="text"
// //               value={username}
// //               onChange={(e) => setUsername(e.target.value)}
// //               placeholder="Nhập tên đăng nhập"
// //               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
// //               required
// //             />
// //           </div>
// //           <div>
// //             <label className="block text-gray-700 font-medium">Mật Khẩu</label>
// //             <input
// //               type="password"
// //               value={password}
// //               onChange={(e) => setPassword(e.target.value)}
// //               placeholder="Nhập mật khẩu"
// //               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
// //               required
// //             />
// //           </div>
// //           <button
// //             type="submit"
// //             className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
// //           >
// //             Đăng Nhập
// //           </button>
// //         </form>
// //         {message && (
// //           <p className="mt-4 text-center text-red-500 font-medium">{message}</p>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Login;
// import React, { useState } from "react";
// import axios from "../api/axios";
// import { useNavigate } from "react-router-dom";
// import { TEInput, TERipple } from "tw-elements-react";

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

//       const { redirectUrl, role, userDetails } = response.data;

//       if (!redirectUrl) {
//         console.error("RedirectUrl không hợp lệ:", redirectUrl);
//         setMessage("Không thể điều hướng. Hãy kiểm tra lại API.");
//         return;
//       }

//       console.log("RedirectUrl:", redirectUrl);
//       console.log("API Response:", response.data);

//       // Lưu thông tin người dùng vào localStorage
//       localStorage.setItem("userDetails", JSON.stringify(userDetails));
//       localStorage.setItem("userRole", role);

//       // Điều hướng đến trang phù hợp
//       if (role === "Khách Hàng") {
//         navigate("/KhachHangHome");
//       } else if (role === "Admin") {
//         navigate("/AdminHome");
//       } else if (role === "Nhân Viên") {
//         navigate("/NhanVienHome");
//       } else {
//         setMessage("Vai trò không hợp lệ. Liên hệ quản trị viên.");
//       }
//     } catch (error) {
//       setMessage(error.response?.data?.message || "Đăng nhập thất bại.");
//     }
//   };

//   return (
//     <section className="h-full bg-neutral-200 dark:bg-neutral-700">
//       <div className="container h-full p-10">
//         <div className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
//           <div className="w-full">
//             <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
//               <div className="g-0 lg:flex lg:flex-wrap">
//                 {/* <!-- Left column --> */}
//                 <div className="px-4 md:px-0 lg:w-6/12">
//                   <div className="md:mx-6 md:p-12">
//                     <div className="text-center">
//                       <img
//                         className="mx-auto w-48"
//                         src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
//                         alt="logo"
//                       />
//                       <h4 className="mb-12 mt-1 pb-1 text-xl font-semibold">
//                         Chào mừng đến hệ thống của chúng tôi!
//                       </h4>
//                     </div>

//                     <form onSubmit={handleLogin}>
//                       <p className="mb-4">Vui lòng đăng nhập</p>

//                       {/* Username Input */}
//                       <TEInput
//                         type="text"
//                         label="Tên Đăng Nhập"
//                         className="mb-4"
//                         value={username}
//                         onChange={(e) => setUsername(e.target.value)}
//                         required
//                       ></TEInput>

//                       {/* Password Input */}
//                       <TEInput
//                         type="password"
//                         label="Mật Khẩu"
//                         className="mb-4"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         required
//                       ></TEInput>

//                       {/* Submit Button */}
//                       <div className="mb-12 pb-1 pt-1 text-center">
//                         <TERipple rippleColor="light" className="w-full">
//                           <button
//                             type="submit"
//                             className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
//                             style={{
//                               background:
//                                 "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
//                             }}
//                           >
//                             Đăng Nhập
//                           </button>
//                         </TERipple>
//                         <a href="#!">Quên mật khẩu?</a>
//                       </div>

//                       {/* Register Button */}
//                       <div className="flex items-center justify-between pb-6">
//                         <p className="mb-0 mr-2">Chưa có tài khoản?</p>
//                         <TERipple rippleColor="light">
//                           <button
//                             type="button"
//                             className="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
//                           >
//                             Đăng Ký
//                           </button>
//                         </TERipple>
//                       </div>
//                     </form>
//                     {message && (
//                       <p className="mt-4 text-center text-red-500 font-medium">
//                         {message}
//                       </p>
//                     )}
//                   </div>
//                 </div>

//                 {/* <!-- Right column --> */}
//                 <div
//                   className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none"
//                   style={{
//                     background:
//                       "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
//                   }}
//                 >
//                   <div className="px-4 py-6 text-white md:mx-6 md:p-12">
//                     <h4 className="mb-6 text-xl font-semibold">
//                       We are more than just a company
//                     </h4>
//                     <p className="text-sm">
//                       Lorem ipsum dolor sit amet, consectetur adipisicing elit,
//                       sed do eiusmod tempor incididunt ut labore et dolore magna
//                       aliqua. Ut enim ad minim veniam, quis nostrud exercitation
//                       ullamco laboris nisi ut aliquip ex ea commodo consequat.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Login;
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
                <a href="#!" className="text-blue-600 text-sm">
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
