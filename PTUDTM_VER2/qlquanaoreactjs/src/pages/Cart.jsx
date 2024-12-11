
// import React, { useEffect, useState } from "react";
// import { api } from "../api/axios";
// import Header from "../components/Header";
// import Footer from "../components/Footer";

// const Cart = () => {
//   const [cart, setCart] = useState([]); // Dữ liệu giỏ hàng
//   const [loading, setLoading] = useState(true); // Trạng thái tải
//   const [updatedCart, setUpdatedCart] = useState({}); // Lưu trạng thái sản phẩm cập nhật
//   const [sizeOptions, setSizeOptions] = useState({}); // Lưu danh sách size cho từng sản phẩm
//   const [isPaymentLoading, setIsPaymentLoading] = useState(false); // Trạng thái xử lý thanh toán
//   const [paymentMethod, setPaymentMethod] = useState("cash"); // Phương thức thanh toán mặc định
//   const imageBasePath = "/src/assets/images/"; // Đường dẫn ảnh sản phẩm

//   // Lấy dữ liệu giỏ hàng từ API
//   useEffect(() => {
//     const fetchCart = async () => {
//       try {
//         const userId = localStorage.getItem("mand");
//         const response = await api.getCartByUserId(userId);
//         setCart(response.data);

//         // Lấy danh sách size cho từng sản phẩm
//         response.data.forEach(async (item) => {
//           const sizesResponse = await api.getSizesByProduct(item.masp);
//           setSizeOptions((prev) => ({ ...prev, [item.masp]: sizesResponse.data }));
//         });

//         console.log("response.data", response.data);
//       } catch (error) {
//         console.error("Lỗi khi lấy giỏ hàng:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCart();
//   }, []);

//     // Xử lý xóa sản phẩm khỏi giỏ hàng
//   const handleDelete = async (id) => {
//     if (!window.confirm("Bạn có chắc chắn muốn xóa sản phẩm này khỏi giỏ hàng?")) return;

//     try {
//       const currentCartItem = cart.find((item) => item.magh === id);
//       await api.deleteCartItem(currentCartItem.id);
//       setCart((prevCart) => prevCart.filter((item) => item.magh !== id));
//       alert("Xóa sản phẩm thành công!");
//     } catch (error) {
//       console.error("Lỗi khi xóa sản phẩm:", error);
//       alert("Xóa sản phẩm thất bại!");
//     }
//   };

//   // Xử lý cập nhật sản phẩm trong giỏ hàng
//   const handleUpdate = async (id) => {
//     try {
//       const updatedItem = updatedCart[id] || {}; // Lấy dữ liệu cập nhật
//       const currentCartItem = cart.find((item) => item.magh === id);

//       if (!currentCartItem) {
//         alert("Không tìm thấy sản phẩm để cập nhật!");
//         return;
//       }

//       const payload = {
//         mand: localStorage.getItem("mand"),
//         masp: currentCartItem.masp,
//         size: updatedItem.size || currentCartItem.size,
//         soluong: updatedItem.soluong || currentCartItem.soluong,
//       };

//       console.log("Payload gửi đi:", payload);

//       await api.updateCartItem(currentCartItem.id, payload);

//       const refreshedCart = await api.getCartByUserId(localStorage.getItem("mand"));
//       setCart(refreshedCart.data);

//       alert("Cập nhật sản phẩm thành công!");
//     } catch (error) {
//       console.error("Lỗi khi cập nhật sản phẩm:", error);
//       alert("Cập nhật sản phẩm thất bại!");
//     }
//   };
  
//   // Xử lý thanh toán
//   const handlePayment = async () => {
//     if (!window.confirm("Bạn có chắc chắn muốn thanh toán giỏ hàng này?")) return;

//     setIsPaymentLoading(true);

//     try {
//       const userId = localStorage.getItem("mand");
//       const paymentDetails = {
//         mand: userId,
//         phuongThucThanhToan: paymentMethod === "cash" ? 1 : 2, // 1: Tiền mặt, 2: Thẻ tín dụng
//       };

//       console.log("Chi tiết thanh toán:", paymentDetails);

//       await api.makePayment(paymentDetails);

//       // Sau khi thanh toán thành công, làm mới lại giỏ hàng
//       setCart([]);
//       alert("Thanh toán thành công!");
//     } catch (error) {
//       console.error("Lỗi khi thanh toán:", error);
//       alert("Thanh toán thất bại!");
//     } finally {
//       setIsPaymentLoading(false);
//     }
//   };

//   if (loading) return <p>Đang tải giỏ hàng...</p>;

//   return (
//     <div>
//       <div className="container mx-auto py-6 px-4">
//         <Header />
//       </div>
//       <div className="container mx-auto py-6 px-4">
//         <h1 className="text-2xl font-bold mb-6">Quản lý giỏ hàng</h1>
//         {cart.length === 0 ? (
//           <p>Giỏ hàng trống.</p>
//         ) : (
//           <>
//             <table className="table-auto w-full border-collapse border border-gray-200">
//               <thead>
//                 <tr className="bg-gray-100">
//                   <th className="border py-2 px-4">Sản phẩm</th>
//                   <th className="border py-2 px-4">Hình ảnh</th>
//                   <th className="border py-2 px-4">Size</th>
//                   <th className="border py-2 px-4">Số lượng</th>
//                   <th className="border py-2 px-4">Giá</th>
//                   <th className="border py-2 px-4">Thành tiền</th>
//                   <th className="border py-2 px-4">Hành động</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {cart.map((item) => (
//                   <tr key={item.magh}>
//                     <td className="border py-2 px-4">{item.sanPham.tensanpham}</td>
//                     <td className="border py-2 px-4 text-center">
//                       <img
//                         src={`${imageBasePath}${item.sanPham.hinhanh}`}
//                         alt={item.sanPham.tensanpham}
//                         className="w-16 h-16 object-cover rounded"
//                       />
//                     </td>
//                     <td className="border py-2 px-4">
//                       <select
//                         defaultValue={item.size}
//                         onChange={(e) =>
//                           setUpdatedCart((prev) => ({
//                             ...prev,
//                             [item.magh]: { ...prev[item.magh], size: e.target.value },
//                           }))
//                         }
//                         className="border p-1 text-center"
//                       >
//                         <option value={item.size} disabled hidden>
//                           {item.size}
//                         </option>
//                         {sizeOptions[item.masp]?.map((size) => (
//                           <option key={size} value={size}>
//                             {size}
//                           </option>
//                         ))}
//                       </select>
//                     </td>
//                     <td className="border py-2 px-4">
//                       <input
//                         type="number"
//                         defaultValue={item.soluong}
//                         min="1"
//                         className="w-12 border p-1 text-center"
//                         onChange={(e) =>
//                           setUpdatedCart((prev) => ({
//                             ...prev,
//                             [item.magh]: { ...prev[item.magh], soluong: e.target.value },
//                           }))
//                         }
//                       />
//                     </td>
//                     <td className="border py-2 px-4 text-right">
//                       {item.sanPham.gia.toLocaleString()} VND
//                     </td>
//                     <td className="border py-2 px-4 text-right">
//                       {(item.soluong * item.sanPham.gia).toLocaleString()} VND
//                     </td>
//                     <td className="border py-2 px-4 text-center space-x-2">
//                       <button
//                         className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
//                         onClick={() => handleUpdate(item.magh)}
//                       >
//                         Cập nhật
//                       </button>
//                       <button
//                         className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
//                         onClick={() => handleDelete(item.magh)}
//                       >
//                         Xóa
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//             <div className="mt-6">
//               <h2 className="text-lg font-bold mb-2">Chọn phương thức thanh toán:</h2>
//               <div className="flex items-center mb-4">
//                 <label className="mr-4">
//                   <input
//                     type="radio"
//                     name="paymentMethod"
//                     value="cash"
//                     checked={paymentMethod === "cash"}
//                     onChange={() => setPaymentMethod("cash")}
//                   />
//                   Tiền mặt
//                 </label>
//                 <label>
//                   <input
//                     type="radio"
//                     name="paymentMethod"
//                     value="creditCard"
//                     checked={paymentMethod === "creditCard"}
//                     onChange={() => setPaymentMethod("creditCard")}
//                   />
//                   Thẻ tín dụng
//                 </label>
//               </div>
//               <button
//                 className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
//                 onClick={handlePayment}
//                 disabled={isPaymentLoading}
//               >
//                 {isPaymentLoading ? "Đang xử lý thanh toán..." : "Thanh toán"}
//               </button>
//             </div>
//           </>
//         )}
//       </div>
//       <div className="container mx-auto py-6 px-4">
//         <Footer />
//       </div>
//     </div>
//   );
// };

// export default Cart;


import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Thêm hook useNavigate
import { api } from "../api/axios";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Cart = () => {
  const [cart, setCart] = useState([]); // Dữ liệu giỏ hàng
  const [loading, setLoading] = useState(true); // Trạng thái tải
  const [updatedCart, setUpdatedCart] = useState({}); // Lưu trạng thái sản phẩm cập nhật
  const [sizeOptions, setSizeOptions] = useState({}); // Lưu danh sách size cho từng sản phẩm
  const [isPaymentLoading, setIsPaymentLoading] = useState(false); // Trạng thái xử lý thanh toán
  const [paymentMethod, setPaymentMethod] = useState("cash"); // Phương thức thanh toán mặc định
  const imageBasePath = "/src/assets/images/"; // Đường dẫn ảnh sản phẩm
  const navigate = useNavigate(); // Hook điều hướng từ React Router

  // Lấy dữ liệu giỏ hàng từ API
  useEffect(() => {
    const fetchCart = async () => {
      try {
        const userId = localStorage.getItem("mand");
        const response = await api.getCartByUserId(userId);
        setCart(response.data);

        // Lấy danh sách size cho từng sản phẩm
        response.data.forEach(async (item) => {
          const sizesResponse = await api.getSizesByProduct(item.masp);
          setSizeOptions((prev) => ({ ...prev, [item.masp]: sizesResponse.data }));
        });

        console.log("response.data", response.data);
      } catch (error) {
        console.error("Lỗi khi lấy giỏ hàng:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCart();
  }, []);

  // Xử lý xóa sản phẩm khỏi giỏ hàng
  const handleDelete = async (id) => {
    if (!window.confirm("Bạn có chắc chắn muốn xóa sản phẩm này khỏi giỏ hàng?")) return;

    try {
      const currentCartItem = cart.find((item) => item.magh === id);
      await api.deleteCartItem(currentCartItem.id);
      setCart((prevCart) => prevCart.filter((item) => item.magh !== id));
      alert("Xóa sản phẩm thành công!");
    } catch (error) {
      console.error("Lỗi khi xóa sản phẩm:", error);
      alert("Xóa sản phẩm thất bại!");
    }
  };

  // Xử lý cập nhật sản phẩm trong giỏ hàng
  const handleUpdate = async (id) => {
    try {
      const updatedItem = updatedCart[id] || {}; // Lấy dữ liệu cập nhật
      const currentCartItem = cart.find((item) => item.magh === id);

      if (!currentCartItem) {
        alert("Không tìm thấy sản phẩm để cập nhật!");
        return;
      }

      const payload = {
        mand: localStorage.getItem("mand"),
        masp: currentCartItem.masp,
        size: updatedItem.size || currentCartItem.size,
        soluong: updatedItem.soluong || currentCartItem.soluong,
      };

      console.log("Payload gửi đi:", payload);

      await api.updateCartItem(currentCartItem.id, payload);

      const refreshedCart = await api.getCartByUserId(localStorage.getItem("mand"));
      setCart(refreshedCart.data);

      alert("Cập nhật sản phẩm thành công!");
    } catch (error) {
      console.error("Lỗi khi cập nhật sản phẩm:", error);
      alert("Cập nhật sản phẩm thất bại!");
    }
  };

  // Xử lý thanh toán
const handlePayment = async () => {
  if (!window.confirm("Bạn có chắc chắn muốn thanh toán giỏ hàng này?")) return;

  setIsPaymentLoading(true);

  try {
    const userId = localStorage.getItem("mand");
    const paymentDetails = {
      mand: userId,
      phuongThucThanhToan: paymentMethod === "cash" ? 1 : 2, // 1: Tiền mặt, 2: Thẻ tín dụng
    };

    console.log("Chi tiết thanh toán:", paymentDetails);

    const paymentResponse = await api.makePayment(paymentDetails);

    // Sau khi thanh toán thành công, điều hướng đến trang hóa đơn
    const mahd = paymentResponse.data.mahd; // Mã hóa đơn trả về từ API
    setCart([]); // Giỏ hàng sẽ được làm trống sau thanh toán
    alert("Thanh toán thành công!");

    // Điều hướng sang trang hóa đơn
    navigate(`/invoice/${mahd}`);
  } catch (error) {
    console.error("Lỗi khi thanh toán:", error);
    alert("Thanh toán thất bại!");
  } finally {
    setIsPaymentLoading(false);
  }
};


  // // Xử lý thanh toán
  // const handlePayment = async () => {
  //   if (!window.confirm("Bạn có chắc chắn muốn thanh toán giỏ hàng này?")) return;

  //   setIsPaymentLoading(true);

  //   try {
  //     const userId = localStorage.getItem("mand");
  //     const paymentDetails = {
  //       mand: userId,
  //       phuongThucThanhToan: paymentMethod === "cash" ? 1 : 2, // 1: Tiền mặt, 2: Thẻ tín dụng
  //     };

  //     console.log("Chi tiết thanh toán:", paymentDetails);

  //     const paymentResponse = await api.makePayment(paymentDetails);

  //     // Sau khi thanh toán thành công, điều hướng đến trang hóa đơn
  //     const mahd = paymentResponse.data.mahd; // Mã hóa đơn trả về từ API
  //     setCart([]); // Giỏ hàng sẽ được làm trống sau thanh toán
  //     alert("Thanh toán thành công!");

  //     // Điều hướng sang trang hóa đơn
  //     navigate(`/invoice/${mahd}`);
  //   } catch (error) {
  //     console.error("Lỗi khi thanh toán:", error);
  //     alert("Thanh toán thất bại!");
  //   } finally {
  //     setIsPaymentLoading(false);
  //   }
  // };

  if (loading) return <p>Đang tải giỏ hàng...</p>;

  return (
    <div>
      <div className="container mx-auto py-6 px-4">
        <Header />
      </div>
      <div className="container mx-auto py-6 px-4">
        <h1 className="text-2xl font-bold mb-6">Quản lý giỏ hàng</h1>
        {cart.length === 0 ? (
          <p>Giỏ hàng trống.</p>
        ) : (
          <>
            <table className="table-auto w-full border-collapse border border-gray-200">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border py-2 px-4">Sản phẩm</th>
                  <th className="border py-2 px-4">Hình ảnh</th>
                  <th className="border py-2 px-4">Size</th>
                  <th className="border py-2 px-4">Số lượng</th>
                  <th className="border py-2 px-4">Giá</th>
                  <th className="border py-2 px-4">Thành tiền</th>
                  <th className="border py-2 px-4">Hành động</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <tr key={item.magh}>
                    <td className="border py-2 px-4">{item.sanPham.tensanpham}</td>
                    <td className="border py-2 px-4 text-center">
                      <img
                        src={`${imageBasePath}${item.sanPham.hinhanh}`}
                        alt={item.sanPham.tensanpham}
                        className="w-16 h-16 object-cover rounded"
                      />
                    </td>
                    <td className="border py-2 px-4">
                      <select
                        defaultValue={item.size}
                        onChange={(e) =>
                          setUpdatedCart((prev) => ({
                            ...prev,
                            [item.magh]: { ...prev[item.magh], size: e.target.value },
                          }))
                        }
                        className="border p-1 text-center"
                      >
                        <option value={item.size} disabled hidden>
                          {item.size}
                        </option>
                        {sizeOptions[item.masp]?.map((size) => (
                          <option key={size} value={size}>
                            {size}
                          </option>
                        ))}
                      </select>
                    </td>
                    <td className="border py-2 px-4">
                      <input
                        type="number"
                        defaultValue={item.soluong}
                        min="1"
                        className="w-12 border p-1 text-center"
                        onChange={(e) =>
                          setUpdatedCart((prev) => ({
                            ...prev,
                            [item.magh]: { ...prev[item.magh], soluong: e.target.value },
                          }))
                        }
                      />
                    </td>
                    <td className="border py-2 px-4 text-right">
                      {item.sanPham.gia.toLocaleString()} VND
                    </td>
                    <td className="border py-2 px-4 text-right">
                      {(item.soluong * item.sanPham.gia).toLocaleString()} VND
                    </td>
                    <td className="border py-2 px-4 text-center space-x-2">
                      <button
                        className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
                        onClick={() => handleUpdate(item.magh)}
                      >
                        Cập nhật
                      </button>
                      <button
                        className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                        onClick={() => handleDelete(item.magh)}
                      >
                        Xóa
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="mt-6">
              <h2 className="text-lg font-bold mb-2">Chọn phương thức thanh toán:</h2>
              <div className="flex items-center mb-4">
                <label className="mr-4">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="cash"
                    checked={paymentMethod === "cash"}
                    onChange={() => setPaymentMethod("cash")}
                  />
                  Tiền mặt
                </label>
                <label>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="creditCard"
                    checked={paymentMethod === "creditCard"}
                    onChange={() => setPaymentMethod("creditCard")}
                  />
                  Thẻ tín dụng
                </label>
              </div>
              <button
                className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
                onClick={handlePayment}
                disabled={isPaymentLoading}
              >
                {isPaymentLoading ? "Đang xử lý thanh toán..." : "Thanh toán"}
              </button>
            </div>
          </>
        )}
      </div>
      <div className="container mx-auto py-6 px-4">
        <Footer />
      </div>
    </div>
  );
};

export default Cart;
