// // // // // // // // // import React, { useEffect, useState } from "react";
// // // // // // // // // import { api } from "../api/axios";

// // // // // // // // // const Cart = () => {
// // // // // // // // //   const [cart, setCart] = useState([]);
// // // // // // // // //   const [loading, setLoading] = useState(true);
// // // // // // // // //   const [updatedCart, setUpdatedCart] = useState({}); // Để theo dõi cập nhật sản phẩm
// // // // // // // // //   const imageBasePath = "src/assets/images/"; // Đường dẫn tới thư mục hình ảnh

// // // // // // // // //   useEffect(() => {
// // // // // // // // //     const fetchCart = async () => {
// // // // // // // // //       try {
// // // // // // // // //         const userId = localStorage.getItem("mand");
// // // // // // // // //         console.log("localStorage.getItem('mand')", userId);
// // // // // // // // //         const response = await api.getCartByUserId(userId);
// // // // // // // // //         setCart(response.data);
// // // // // // // // //       } catch (error) {
// // // // // // // // //         console.error("Lỗi khi lấy giỏ hàng:", error);
// // // // // // // // //       } finally {
// // // // // // // // //         setLoading(false);
// // // // // // // // //       }
// // // // // // // // //     };

// // // // // // // // //     fetchCart();
// // // // // // // // //   }, []);

// // // // // // // // //   const handleDelete = async (id) => {
// // // // // // // // //     try {
// // // // // // // // //       await api.deleteCartItem(id);
// // // // // // // // //       setCart(cart.filter((item) => item.magh !== id));
// // // // // // // // //       alert("Xóa sản phẩm khỏi giỏ hàng thành công!");
// // // // // // // // //     } catch (error) {
// // // // // // // // //       console.error("Lỗi khi xóa sản phẩm:", error);
// // // // // // // // //       alert("Xóa sản phẩm thất bại!");
// // // // // // // // //     }
// // // // // // // // //   };

// // // // // // // // //   const handleUpdate = async (id) => {
// // // // // // // // //     try {
// // // // // // // // //       const updatedItem = updatedCart[id];
// // // // // // // // //       if (!updatedItem || !updatedItem.soluong) {
// // // // // // // // //         alert("Vui lòng nhập số lượng hợp lệ để cập nhật!");
// // // // // // // // //         return;
// // // // // // // // //       }
// // // // // // // // //       // Retrieve updated item details from the state
// // // // // // // // //       await api.updateCartItem(id, {

// // // // // // // // //       // Validate the updated quantity
// // // // // // // // //         soluong: updatedItem.soluong,
// // // // // // // // //         size: updatedItem.size || "", // Nếu cần cập nhật size
// // // // // // // // //       });
// // // // // // // // //       alert("Cập nhật sản phẩm thành công!");

// // // // // // // // //       // Send API request to update the cart item
// // // // // // // // //       // Cập nhật lại giỏ hàng sau khi chỉnh sửa
// // // // // // // // //       setCart(
// // // // // // // // //         size: updatedItem.size || "", // Update size if necessary
// // // // // // // // //         cart.map((item) =>
// // // // // // // // //           item.magh === id

// // // // // // // // //       // Inform the user of the successful update
// // // // // // // // //             ? { ...item, soluong: updatedItem.soluong }

// // // // // // // // //       // Refresh the cart with the updated information
// // // // // // // // //             : item
// // // // // // // // //         )
// // // // // // // // //       );
// // // // // // // // //     } catch (error) {
// // // // // // // // //       console.error("Lỗi khi cập nhật sản phẩm:", error);
// // // // // // // // //       alert("Cập nhật sản phẩm thất bại!");
// // // // // // // // //     }
// // // // // // // // //   };

// // // // // // // // //       // Log and alert the user of any error encountered
// // // // // // // // //   if (loading) return <p>Đang tải giỏ hàng...</p>;

// // // // // // // // //   return (
// // // // // // // // //     <div className="container mx-auto py-6 px-4">
// // // // // // // // //       <h1 className="text-2xl font-bold mb-6">Quản lý giỏ hàng</h1>
// // // // // // // // //       {cart.length === 0 ? (
// // // // // // // // //         <p className="text-gray-500">Giỏ hàng trống</p>
// // // // // // // // //       ) : (
// // // // // // // // //         <table className="min-w-full bg-white border border-gray-200">
// // // // // // // // //           <thead>
// // // // // // // // //             <tr className="bg-gray-100 border-b">
// // // // // // // // //               <th className="text-left py-3 px-4">Tên sản phẩm</th>
// // // // // // // // //               <th className="text-center py-3 px-4">Hình ảnh</th>
// // // // // // // // //               <th className="text-center py-3 px-4">Size</th>
// // // // // // // // //               <th className="text-center py-3 px-4">Số lượng</th>
// // // // // // // // //               <th className="text-center py-3 px-4">Giá</th>
// // // // // // // // //               <th className="text-center py-3 px-4">Thành tiền</th>
// // // // // // // // //               <th className="text-center py-3 px-4">Trạng thái</th>
// // // // // // // // //               <th className="text-center py-3 px-4">Hành động</th>
// // // // // // // // //             </tr>
// // // // // // // // //           </thead>
// // // // // // // // //           <tbody>
// // // // // // // // //             {cart.map((item) => (
// // // // // // // // //               <tr key={item.magh} className="border-b hover:bg-gray-50">
// // // // // // // // //                 <td className="py-3 px-4">{item.sanPham.tensanpham}</td>
// // // // // // // // //                 <td className="py-3 px-4 text-center">
// // // // // // // // //                   <img
// // // // // // // // //                     src={`${imageBasePath}/${item.sanPham.hinhanh}`}
// // // // // // // // //                     alt={item.sanPham.tensanpham}
// // // // // // // // //                     className="w-16 h-16 object-cover rounded"
// // // // // // // // //                   />
// // // // // // // // //                 </td>
// // // // // // // // //                 <td className="py-3 px-4 text-center">
// // // // // // // // //                   <input
// // // // // // // // //                     type="text"
// // // // // // // // //                     defaultValue={item.size}
// // // // // // // // //                     className="w-12 border rounded p-1 text-center"
// // // // // // // // //                     onChange={(e) =>
// // // // // // // // //                       setUpdatedCart((prev) => ({
// // // // // // // // //                         ...prev,
// // // // // // // // //                         [item.magh]: {
// // // // // // // // //                           ...prev[item.magh],
// // // // // // // // //                           size: e.target.value,
// // // // // // // // //                         },
// // // // // // // // //                       }))
// // // // // // // // //                     }
// // // // // // // // //                   />
// // // // // // // // //                 </td>
// // // // // // // // //                 <td className="py-3 px-4 text-center">
// // // // // // // // //                   <input
// // // // // // // // //                     type="number"
// // // // // // // // //                     defaultValue={item.soluong}
// // // // // // // // //                     min="1"
// // // // // // // // //                     className="w-12 border rounded p-1 text-center"
// // // // // // // // //                     onChange={(e) =>
// // // // // // // // //                       setUpdatedCart((prev) => ({
// // // // // // // // //                         ...prev,
// // // // // // // // //                         [item.magh]: {
// // // // // // // // //                           ...prev[item.magh],
// // // // // // // // //                           soluong: e.target.value,
// // // // // // // // //                         },
// // // // // // // // //                       }))
// // // // // // // // //                     }
// // // // // // // // //                   />
// // // // // // // // //                 </td>
// // // // // // // // //                 <td className="py-3 px-4 text-center">
// // // // // // // // //                   {item.sanPham.gia.toLocaleString()} VND
// // // // // // // // //                 </td>
// // // // // // // // //                 <td className="py-3 px-4 text-center">
// // // // // // // // //                   {item.thanhtien.toLocaleString()} VND
// // // // // // // // //                 </td>
// // // // // // // // //                 <td
// // // // // // // // //                   className={`py-3 px-4 text-center ${
// // // // // // // // //                     item.tinhtrang ? "text-green-600" : "text-red-600"
// // // // // // // // //                   }`}
// // // // // // // // //                 >
// // // // // // // // //                   {item.tinhtrang ? "Chưa thanh toán" :"Đã thanh toán" }
// // // // // // // // //                 </td>
// // // // // // // // //                 <td className="py-3 px-4 text-center space-x-2">
// // // // // // // // //                   <button
// // // // // // // // //                     className="bg-blue-600 text-white px-2 py-1 rounded hover:bg-blue-700"
// // // // // // // // //                     onClick={() => handleUpdate(item.magh)}
// // // // // // // // //                   >
// // // // // // // // //                     Cập nhật
// // // // // // // // //                   </button>
// // // // // // // // //                   <button
// // // // // // // // //                     className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700"
// // // // // // // // //                     onClick={() => handleDelete(item.magh)}
// // // // // // // // //                   >
// // // // // // // // //                     Xóa
// // // // // // // // //                   </button>
// // // // // // // // //                 </td>
// // // // // // // // //               </tr>
// // // // // // // // //             ))}
// // // // // // // // //           </tbody>
// // // // // // // // //         </table>
// // // // // // // // //       )}
// // // // // // // // //     </div>
// // // // // // // // //   );
// // // // // // // // // };

// // // // // // // // // export default Cart;
// // // // // // // // import React, { useEffect, useState } from "react";
// // // // // // // // import { api } from "../api/axios";

// // // // // // // // const Cart = () => {
// // // // // // // //   const [cart, setCart] = useState([]);
// // // // // // // //   const [loading, setLoading] = useState(true);
// // // // // // // //   const [updatedCart, setUpdatedCart] = useState({});
// // // // // // // //   const imageBasePath = "src/assets/images/";

// // // // // // // //   useEffect(() => {
// // // // // // // //     const fetchCart = async () => {
// // // // // // // //       try {
// // // // // // // //         const userId = localStorage.getItem("mand");
// // // // // // // //         console.log("localStorage.getItem('mand')", userId);
// // // // // // // //         const response = await api.getCartByUserId(userId);
// // // // // // // //         setCart(response.data);
// // // // // // // //       } catch (error) {
// // // // // // // //         console.error("Lỗi khi lấy giỏ hàng:", error);
// // // // // // // //       } finally {
// // // // // // // //         setLoading(false);
// // // // // // // //       }
// // // // // // // //     };

// // // // // // // //     fetchCart();
// // // // // // // //   }, []);

// // // // // // // //   const handleDelete = async (id) => {
// // // // // // // //     if (!window.confirm("Bạn có chắc chắn muốn xóa sản phẩm này khỏi giỏ hàng?")) return;

// // // // // // // //     try {
// // // // // // // //       await api.deleteCartItem(id);
// // // // // // // //       setCart(cart.filter((item) => item.magh !== id));
// // // // // // // //       alert("Xóa sản phẩm khỏi giỏ hàng thành công!");
// // // // // // // //     } catch (error) {
// // // // // // // //       console.error("Lỗi khi xóa sản phẩm:", error);
// // // // // // // //       alert("Xóa sản phẩm thất bại!");
// // // // // // // //     }
// // // // // // // //   };

// // // // // // // //   const handleUpdate = async (id) => {
// // // // // // // //     try {
// // // // // // // //       const updatedItem = updatedCart[id];
// // // // // // // //       if (!updatedItem || !updatedItem.soluong || updatedItem.soluong <= 0) {
// // // // // // // //         alert("Vui lòng nhập số lượng hợp lệ để cập nhật!");
// // // // // // // //         return;
// // // // // // // //       }

// // // // // // // //       await api.updateCartItem(id, {
// // // // // // // //         soluong: parseInt(updatedItem.soluong, 10),
// // // // // // // //         size: updatedItem.size || "",
// // // // // // // //       });

// // // // // // // //       setCart((prevCart) =>
// // // // // // // //         prevCart.map((item) =>
// // // // // // // //           item.magh === id
// // // // // // // //             ? { ...item, soluong: parseInt(updatedItem.soluong, 10), size: updatedItem.size }
// // // // // // // //             : item
// // // // // // // //         )
// // // // // // // //       );

// // // // // // // //       alert("Cập nhật sản phẩm thành công!");
// // // // // // // //     } catch (error) {
// // // // // // // //       console.error("Lỗi khi cập nhật sản phẩm:", error);
// // // // // // // //       alert("Cập nhật sản phẩm thất bại!");
// // // // // // // //     }
// // // // // // // //   };

// // // // // // // //   if (loading) return <p>Đang tải giỏ hàng...</p>;

// // // // // // // //   return (
// // // // // // // //     <div className="container mx-auto py-6 px-4">
// // // // // // // //       <h1 className="text-2xl font-bold mb-6">Quản lý giỏ hàng</h1>
// // // // // // // //       {cart.length === 0 ? (
// // // // // // // //         <p className="text-gray-500 text-center">Giỏ hàng của bạn hiện đang trống</p>
// // // // // // // //       ) : (
// // // // // // // //         <table className="min-w-full bg-white border border-gray-200">
// // // // // // // //           <thead>
// // // // // // // //             <tr className="bg-gray-100 border-b">
// // // // // // // //               <th className="text-left py-3 px-4">Tên sản phẩm</th>
// // // // // // // //               <th className="text-center py-3 px-4">Hình ảnh</th>
// // // // // // // //               <th className="text-center py-3 px-4">Size</th>
// // // // // // // //               <th className="text-center py-3 px-4">Số lượng</th>
// // // // // // // //               <th className="text-center py-3 px-4">Giá</th>
// // // // // // // //               <th className="text-center py-3 px-4">Thành tiền</th>
// // // // // // // //               <th className="text-center py-3 px-4">Trạng thái</th>
// // // // // // // //               <th className="text-center py-3 px-4">Hành động</th>
// // // // // // // //             </tr>
// // // // // // // //           </thead>
// // // // // // // //           <tbody>
// // // // // // // //             {cart.map((item) => (
// // // // // // // //               <tr key={item.magh} className="border-b hover:bg-gray-50">
// // // // // // // //                 <td className="py-3 px-4">{item.sanPham.tensanpham}</td>
// // // // // // // //                 <td className="py-3 px-4 text-center">
// // // // // // // //                   <img
// // // // // // // //                     src={`${imageBasePath}/${item.sanPham.hinhanh}`}
// // // // // // // //                     alt={item.sanPham.tensanpham}
// // // // // // // //                     className="w-16 h-16 object-cover rounded"
// // // // // // // //                   />
// // // // // // // //                 </td>
// // // // // // // //                 <td className="py-3 px-4 text-center">
// // // // // // // //                   <input
// // // // // // // //                     type="text"
// // // // // // // //                     defaultValue={item.size}
// // // // // // // //                     className="w-12 border rounded p-1 text-center"
// // // // // // // //                     onChange={(e) =>
// // // // // // // //                       setUpdatedCart((prev) => ({
// // // // // // // //                         ...prev,
// // // // // // // //                         [item.magh]: { ...prev[item.magh], size: e.target.value },
// // // // // // // //                       }))
// // // // // // // //                     }
// // // // // // // //                   />
// // // // // // // //                 </td>
// // // // // // // //                 <td className="py-3 px-4 text-center">
// // // // // // // //                   <input
// // // // // // // //                     type="number"
// // // // // // // //                     defaultValue={item.soluong}
// // // // // // // //                     min="1"
// // // // // // // //                     className="w-12 border rounded p-1 text-center"
// // // // // // // //                     onChange={(e) =>
// // // // // // // //                       setUpdatedCart((prev) => ({
// // // // // // // //                         ...prev,
// // // // // // // //                         [item.magh]: { ...prev[item.magh], soluong: e.target.value },
// // // // // // // //                       }))
// // // // // // // //                     }
// // // // // // // //                   />
// // // // // // // //                 </td>
// // // // // // // //                 <td className="py-3 px-4 text-center">
// // // // // // // //                   {item.sanPham.gia.toLocaleString()} VND
// // // // // // // //                 </td>
// // // // // // // //                 <td className="py-3 px-4 text-center">
// // // // // // // //                   {(item.soluong * item.sanPham.gia).toLocaleString()} VND
// // // // // // // //                 </td>
// // // // // // // //                 <td
// // // // // // // //                   className={`py-3 px-4 text-center ${
// // // // // // // //                     item.tinhtrang ? "text-green-600" : "text-red-600"
// // // // // // // //                   }`}
// // // // // // // //                 >
// // // // // // // //                   {item.tinhtrang ? "Đã thanh toán" : "Chưa thanh toán"}
// // // // // // // //                 </td>
// // // // // // // //                 <td className="py-3 px-4 text-center space-x-2">
// // // // // // // //                   <button
// // // // // // // //                     className="bg-blue-600 text-white px-2 py-1 rounded hover:bg-blue-700"
// // // // // // // //                     onClick={() => handleUpdate(item.magh)}
// // // // // // // //                   >
// // // // // // // //                     Cập nhật
// // // // // // // //                   </button>
// // // // // // // //                   <button
// // // // // // // //                     className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700"
// // // // // // // //                     onClick={() => handleDelete(item.magh)}
// // // // // // // //                   >
// // // // // // // //                     Xóa
// // // // // // // //                   </button>
// // // // // // // //                 </td>
// // // // // // // //               </tr>
// // // // // // // //             ))}
// // // // // // // //           </tbody>
// // // // // // // //         </table>
// // // // // // // //       )}
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // export default Cart;
// // // // // // // import React, { useEffect, useState } from "react";
// // // // // // // import { api } from "../api/axios";

// // // // // // // const Cart = () => {
// // // // // // //   const [cart, setCart] = useState([]);
// // // // // // //   const [loading, setLoading] = useState(true);
// // // // // // //   const [updatedCart, setUpdatedCart] = useState({}); // Lưu trạng thái sản phẩm cập nhật
// // // // // // //   const imageBasePath = "/src/assets/images/"; // Đường dẫn ảnh sản phẩm

// // // // // // //   useEffect(() => {
// // // // // // //     const fetchCart = async () => {
// // // // // // //       try {
// // // // // // //         const userId = localStorage.getItem("mand");
// // // // // // //         const response = await api.getCartByUserId(userId);
// // // // // // //         setCart(response.data);
// // // // // // //         console.log("response.data", response.data);
// // // // // // //       } catch (error) {
// // // // // // //         console.error("Lỗi khi lấy giỏ hàng:", error);
// // // // // // //       } finally {
// // // // // // //         setLoading(false);
// // // // // // //       }
// // // // // // //     };

// // // // // // //     fetchCart();
// // // // // // //   }, []);

// // // // // // //   const handleDelete = async (id) => {
// // // // // // //     if (!window.confirm("Bạn có chắc chắn muốn xóa sản phẩm này khỏi giỏ hàng?")) return;

// // // // // // //     try {
// // // // // // //       await api.deleteCartItem(id);
// // // // // // //       setCart(cart.filter((item) => item.magh !== id));
// // // // // // //       alert("Xóa sản phẩm thành công!");
// // // // // // //     } catch (error) {
// // // // // // //       console.error("Lỗi khi xóa sản phẩm:", error);
// // // // // // //       alert("Xóa sản phẩm thất bại!");
// // // // // // //     }
// // // // // // //   };

// // // // // // //   const handleUpdate = async (id) => {
// // // // // // //     try {
// // // // // // //       const updatedItem = updatedCart[id] || {}; // Lấy dữ liệu đã cập nhật
// // // // // // //       const currentCartItem = cart.find((item) => item.magh === id); // Lấy item hiện tại
  
// // // // // // //       if (!currentCartItem) {
// // // // // // //         alert("Không tìm thấy sản phẩm để cập nhật!");
// // // // // // //         return;
// // // // // // //       }
  
// // // // // // //       // Tạo payload hợp lệ
// // // // // // //       const payload = {
// // // // // // //         id: currentCartItem.id,
// // // // // // //         mand: localStorage.getItem("mand"), // Lấy mã người dùng từ localStorage
// // // // // // //         masp: currentCartItem.masp, // Lấy từ item hiện tại
// // // // // // //         size: updatedItem.size || currentCartItem.size, // Cập nhật size nếu có
// // // // // // //         soluong: updatedItem.soluong || currentCartItem.soluong, // Cập nhật số lượng nếu có
// // // // // // //       };
  
// // // // // // //       console.log("Payload gửi đi:", payload);
  
// // // // // // //       // Gửi API yêu cầu cập nhật
// // // // // // //       await api.updateCartItem(currentCartItem.id, payload);
  
// // // // // // //       // Cập nhật lại giỏ hàng trong UI
// // // // // // //       setCart((prevCart) =>
// // // // // // //         prevCart.map((item) =>
// // // // // // //           item.magh === id
// // // // // // //             ? { ...item, ...payload, thanhtien: payload.soluong * item.sanPham.gia }
// // // // // // //             : item
// // // // // // //         )
// // // // // // //       );
  
// // // // // // //       alert("Cập nhật sản phẩm thành công!");
// // // // // // //     } catch (error) {
// // // // // // //       console.error("Lỗi khi cập nhật sản phẩm:", error);
// // // // // // //       alert("Cập nhật sản phẩm thất bại!");
// // // // // // //     }
// // // // // // //   };
  
  

// // // // // // //   if (loading) return <p>Đang tải giỏ hàng...</p>;

// // // // // // //   return (
// // // // // // //     <div className="container mx-auto py-6 px-4">
// // // // // // //       <h1 className="text-2xl font-bold mb-6">Quản lý giỏ hàng</h1>
// // // // // // //       {cart.length === 0 ? (
// // // // // // //         <p>Giỏ hàng trống.</p>
// // // // // // //       ) : (
// // // // // // //         <table className="table-auto w-full border-collapse border border-gray-200">
// // // // // // //           <thead>
// // // // // // //             <tr className="bg-gray-100">
// // // // // // //               <th className="border py-2 px-4">Sản phẩm</th>
// // // // // // //               <th className="border py-2 px-4">Hình ảnh</th>
// // // // // // //               <th className="border py-2 px-4">Size</th>
// // // // // // //               <th className="border py-2 px-4">Số lượng</th>
// // // // // // //               <th className="border py-2 px-4">Giá</th>
// // // // // // //               <th className="border py-2 px-4">Thành tiền</th>
// // // // // // //               <th className="border py-2 px-4">Hành động</th>
// // // // // // //             </tr>
// // // // // // //           </thead>
// // // // // // //           <tbody>
// // // // // // //             {cart.map((item) => (
// // // // // // //               <tr key={item.magh}>
// // // // // // //                 <td className="border py-2 px-4">{item.sanPham.tensanpham}</td>
// // // // // // //                 <td className="border py-2 px-4 text-center">
// // // // // // //                   <img
// // // // // // //                     src={`${imageBasePath}${item.sanPham.hinhanh}`}
// // // // // // //                     alt={item.sanPham.tensanpham}
// // // // // // //                     className="w-16 h-16 object-cover rounded"
// // // // // // //                   />
// // // // // // //                 </td>
// // // // // // //                 <td className="border py-2 px-4">
// // // // // // //                   <input
// // // // // // //                     type="text"
// // // // // // //                     defaultValue={item.size}
// // // // // // //                     className="w-12 border p-1 text-center"
// // // // // // //                     onChange={(e) =>
// // // // // // //                       setUpdatedCart((prev) => ({
// // // // // // //                         ...prev,
// // // // // // //                         [item.magh]: { ...prev[item.magh], size: e.target.value },
// // // // // // //                       }))
// // // // // // //                     }
// // // // // // //                   />
// // // // // // //                 </td>
// // // // // // //                 <td className="border py-2 px-4">
// // // // // // //                   <input
// // // // // // //                     type="number"
// // // // // // //                     defaultValue={item.soluong}
// // // // // // //                     min="1"
// // // // // // //                     className="w-12 border p-1 text-center"
// // // // // // //                     onChange={(e) =>
// // // // // // //                       setUpdatedCart((prev) => ({
// // // // // // //                         ...prev,
// // // // // // //                         [item.magh]: { ...prev[item.magh], soluong: e.target.value },
// // // // // // //                       }))
// // // // // // //                     }
// // // // // // //                   />
// // // // // // //                 </td>
// // // // // // //                 <td className="border py-2 px-4 text-right">
// // // // // // //                   {item.sanPham.gia.toLocaleString()} VND
// // // // // // //                 </td>
// // // // // // //                 <td className="border py-2 px-4 text-right">
// // // // // // //                   {(item.soluong * item.sanPham.gia).toLocaleString()} VND
// // // // // // //                 </td>
// // // // // // //                 <td className="border py-2 px-4 text-center space-x-2">
// // // // // // //                   <button
// // // // // // //                     className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
// // // // // // //                     onClick={() => handleUpdate(item.magh)}
// // // // // // //                   >
// // // // // // //                     Cập nhật
// // // // // // //                   </button>
// // // // // // //                   <button
// // // // // // //                     className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
// // // // // // //                     onClick={() => handleDelete(item.magh)}
// // // // // // //                   >
// // // // // // //                     Xóa
// // // // // // //                   </button>
// // // // // // //                 </td>
// // // // // // //               </tr>
// // // // // // //             ))}
// // // // // // //           </tbody>
// // // // // // //         </table>
// // // // // // //       )}
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default Cart;
// // // // // // import React, { useEffect, useState } from "react";
// // // // // // import { api } from "../api/axios";
// // // // // // import Header from "../components/Header";
// // // // // // import Footer from "../components/Footer";

// // // // // // const Cart = () => {
// // // // // //   const [cart, setCart] = useState([]); // Dữ liệu giỏ hàng
// // // // // //   const [loading, setLoading] = useState(true); // Trạng thái tải
// // // // // //   const [updatedCart, setUpdatedCart] = useState({}); // Lưu trạng thái sản phẩm cập nhật
// // // // // //   const imageBasePath = "/src/assets/images/"; // Đường dẫn ảnh sản phẩm

// // // // // //   // Lấy dữ liệu giỏ hàng từ API
// // // // // //   useEffect(() => {
// // // // // //     const fetchCart = async () => {
// // // // // //       try {
// // // // // //         const userId = localStorage.getItem("mand");
// // // // // //         const response = await api.getCartByUserId(userId);
// // // // // //         setCart(response.data);
// // // // // //         console.log("response.data", response.data);
// // // // // //       } catch (error) {
// // // // // //         console.error("Lỗi khi lấy giỏ hàng:", error);
// // // // // //       } finally {
// // // // // //         setLoading(false);
// // // // // //       }
// // // // // //     };

// // // // // //     fetchCart();
// // // // // //   }, []);

// // // // // //   // Xử lý xóa sản phẩm khỏi giỏ hàng
// // // // // //   const handleDelete = async (id) => {
// // // // // //     if (!window.confirm("Bạn có chắc chắn muốn xóa sản phẩm này khỏi giỏ hàng?")) return;

// // // // // //     try {
// // // // // //       const currentCartItem = cart.find((item) => item.magh === id);
// // // // // //       await api.deleteCartItem(currentCartItem.id);
// // // // // //       // Cập nhật lại giao diện sau khi xóa
// // // // // //       setCart((prevCart) => prevCart.filter((item) => item.magh !== id));
// // // // // //       alert("Xóa sản phẩm thành công!");
// // // // // //     } catch (error) {
// // // // // //       console.error("Lỗi khi xóa sản phẩm:", error);
// // // // // //       alert("Xóa sản phẩm thất bại!");
// // // // // //     }
// // // // // //   };

// // // // // //   // Xử lý cập nhật sản phẩm trong giỏ hàng
// // // // // //   const handleUpdate = async (id) => {
// // // // // //     try {
// // // // // //       const updatedItem = updatedCart[id] || {}; // Lấy dữ liệu cập nhật
// // // // // //       const currentCartItem = cart.find((item) => item.magh === id); // Lấy item hiện tại

// // // // // //       if (!currentCartItem) {
// // // // // //         alert("Không tìm thấy sản phẩm để cập nhật!");
// // // // // //         return;
// // // // // //       }

// // // // // //       // Tạo payload để gửi tới API
// // // // // //       const payload = {
// // // // // //         mand: localStorage.getItem("mand"),
// // // // // //         masp: currentCartItem.masp,
// // // // // //         size: updatedItem.size || currentCartItem.size,
// // // // // //         soluong: updatedItem.soluong || currentCartItem.soluong,
// // // // // //       };

// // // // // //       console.log("Payload gửi đi:", payload);

// // // // // //       // Gửi API yêu cầu cập nhật
// // // // // //       await api.updateCartItem(currentCartItem.id, payload);

// // // // // //       // Lấy lại dữ liệu giỏ hàng từ API sau khi cập nhật thành công
// // // // // //       const refreshedCart = await api.getCartByUserId(localStorage.getItem("mand"));
// // // // // //       setCart(refreshedCart.data);

// // // // // //       alert("Cập nhật sản phẩm thành công!");
// // // // // //     } catch (error) {
// // // // // //       console.error("Lỗi khi cập nhật sản phẩm:", error);
// // // // // //       alert("Cập nhật sản phẩm thất bại!");
// // // // // //     }
// // // // // //   };

// // // // // //   if (loading) return <p>Đang tải giỏ hàng...</p>;

// // // // // //   return (
// // // // // //     <div>  <div className="container mx-auto py-6 px-4"> 
// // // // // //              <Header />
// // // // // //              </div>
// // // // // //     <div className="container mx-auto py-6 px-4">
    
// // // // // //       <h1 className="text-2xl font-bold mb-6">Quản lý giỏ hàng</h1>
// // // // // //       {cart.length === 0 ? (
// // // // // //         <p>Giỏ hàng trống.</p>
// // // // // //       ) : (
// // // // // //         <table className="table-auto w-full border-collapse border border-gray-200">
// // // // // //           <thead>
// // // // // //             <tr className="bg-gray-100">
// // // // // //               <th className="border py-2 px-4">Sản phẩm</th>
// // // // // //               <th className="border py-2 px-4">Hình ảnh</th>
// // // // // //               <th className="border py-2 px-4">Size</th>
// // // // // //               <th className="border py-2 px-4">Số lượng</th>
// // // // // //               <th className="border py-2 px-4">Giá</th>
// // // // // //               <th className="border py-2 px-4">Thành tiền</th>
// // // // // //               <th className="border py-2 px-4">Hành động</th>
// // // // // //             </tr>
// // // // // //           </thead>
// // // // // //           <tbody>
// // // // // //             {cart.map((item) => (
// // // // // //               <tr key={item.magh}>
// // // // // //                 <td className="border py-2 px-4">{item.sanPham.tensanpham}</td>
// // // // // //                 <td className="border py-2 px-4 text-center">
// // // // // //                   <img
// // // // // //                     src={`${imageBasePath}${item.sanPham.hinhanh}`}
// // // // // //                     alt={item.sanPham.tensanpham}
// // // // // //                     className="w-16 h-16 object-cover rounded"
// // // // // //                   />
// // // // // //                 </td>
// // // // // //                 <td className="border py-2 px-4">
// // // // // //                   <input
// // // // // //                     type="text"
// // // // // //                     defaultValue={item.size}
// // // // // //                     className="w-12 border p-1 text-center"
// // // // // //                     onChange={(e) =>
// // // // // //                       setUpdatedCart((prev) => ({
// // // // // //                         ...prev,
// // // // // //                         [item.magh]: { ...prev[item.magh], size: e.target.value },
// // // // // //                       }))
// // // // // //                     }
// // // // // //                   />
// // // // // //                 </td>
// // // // // //                 <td className="border py-2 px-4">
// // // // // //                   <input
// // // // // //                     type="number"
// // // // // //                     defaultValue={item.soluong}
// // // // // //                     min="1"
// // // // // //                     className="w-12 border p-1 text-center"
// // // // // //                     onChange={(e) =>
// // // // // //                       setUpdatedCart((prev) => ({
// // // // // //                         ...prev,
// // // // // //                         [item.magh]: { ...prev[item.magh], soluong: e.target.value },
// // // // // //                       }))
// // // // // //                     }
// // // // // //                   />
// // // // // //                 </td>
// // // // // //                 <td className="border py-2 px-4 text-right">
// // // // // //                   {item.sanPham.gia.toLocaleString()} VND
// // // // // //                 </td>
// // // // // //                 <td className="border py-2 px-4 text-right">
// // // // // //                   {(item.soluong * item.sanPham.gia).toLocaleString()} VND
// // // // // //                 </td>
// // // // // //                 <td className="border py-2 px-4 text-center space-x-2">
// // // // // //                   <button
// // // // // //                     className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
// // // // // //                     onClick={() => handleUpdate(item.magh)}
// // // // // //                   >
// // // // // //                     Cập nhật
// // // // // //                   </button>
// // // // // //                   <button
// // // // // //                     className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
// // // // // //                     onClick={() => handleDelete(item.magh)}
// // // // // //                   >
// // // // // //                     Xóa
// // // // // //                   </button>
// // // // // //                 </td>
// // // // // //               </tr>
// // // // // //             ))}
// // // // // //           </tbody>
// // // // // //         </table>
// // // // // //       )}
    
// // // // // //     </div>
// // // // // //       <div className="container mx-auto py-6 px-4"> 
// // // // // //              <Footer />
// // // // // //              </div>
// // // // // //              </div>
// // // // // //   );
// // // // // // };

// // // // // // export default Cart;
// // // // // import React, { useEffect, useState } from "react";
// // // // // import { api } from "../api/axios";
// // // // // import Header from "../components/Header";
// // // // // import Footer from "../components/Footer";

// // // // // const Cart = () => {
// // // // //   const [cart, setCart] = useState([]); // Dữ liệu giỏ hàng
// // // // //   const [loading, setLoading] = useState(true); // Trạng thái tải
// // // // //   const [updatedCart, setUpdatedCart] = useState({}); // Lưu trạng thái sản phẩm cập nhật
// // // // //   const [sizeOptions, setSizeOptions] = useState({}); // Lưu danh sách size cho từng sản phẩm
// // // // //   const imageBasePath = "/src/assets/images/"; // Đường dẫn ảnh sản phẩm

// // // // //   // Lấy dữ liệu giỏ hàng từ API
// // // // //   useEffect(() => {
// // // // //     const fetchCart = async () => {
// // // // //       try {
// // // // //         const userId = localStorage.getItem("mand");
// // // // //         const response = await api.getCartByUserId(userId);
// // // // //         setCart(response.data);

// // // // //         // Lấy danh sách size cho từng sản phẩm
// // // // //         response.data.forEach(async (item) => {
// // // // //           const sizesResponse = await api.getSizesByProduct(item.masp);
// // // // //           setSizeOptions((prev) => ({ ...prev, [item.masp]: sizesResponse.data }));
// // // // //         });

// // // // //         console.log("response.data", response.data);
// // // // //       } catch (error) {
// // // // //         console.error("Lỗi khi lấy giỏ hàng:", error);
// // // // //       } finally {
// // // // //         setLoading(false);
// // // // //       }
// // // // //     };

// // // // //     fetchCart();
// // // // //   }, []);

// // // // //   // Xử lý xóa sản phẩm khỏi giỏ hàng
// // // // //   const handleDelete = async (id) => {
// // // // //     if (!window.confirm("Bạn có chắc chắn muốn xóa sản phẩm này khỏi giỏ hàng?")) return;

// // // // //     try {
// // // // //       const currentCartItem = cart.find((item) => item.magh === id);
// // // // //       await api.deleteCartItem(currentCartItem.id);
// // // // //       setCart((prevCart) => prevCart.filter((item) => item.magh !== id));
// // // // //       alert("Xóa sản phẩm thành công!");
// // // // //     } catch (error) {
// // // // //       console.error("Lỗi khi xóa sản phẩm:", error);
// // // // //       alert("Xóa sản phẩm thất bại!");
// // // // //     }
// // // // //   };

// // // // //   // Xử lý cập nhật sản phẩm trong giỏ hàng
// // // // //   const handleUpdate = async (id) => {
// // // // //     try {
// // // // //       const updatedItem = updatedCart[id] || {}; // Lấy dữ liệu cập nhật
// // // // //       const currentCartItem = cart.find((item) => item.magh === id);

// // // // //       if (!currentCartItem) {
// // // // //         alert("Không tìm thấy sản phẩm để cập nhật!");
// // // // //         return;
// // // // //       }

// // // // //       const payload = {
// // // // //         mand: localStorage.getItem("mand"),
// // // // //         masp: currentCartItem.masp,
// // // // //         size: updatedItem.size || currentCartItem.size,
// // // // //         soluong: updatedItem.soluong || currentCartItem.soluong,
// // // // //       };

// // // // //       console.log("Payload gửi đi:", payload);

// // // // //       await api.updateCartItem(currentCartItem.id, payload);

// // // // //       const refreshedCart = await api.getCartByUserId(localStorage.getItem("mand"));
// // // // //       setCart(refreshedCart.data);

// // // // //       alert("Cập nhật sản phẩm thành công!");
// // // // //     } catch (error) {
// // // // //       console.error("Lỗi khi cập nhật sản phẩm:", error);
// // // // //       alert("Cập nhật sản phẩm thất bại!");
// // // // //     }
// // // // //   };

// // // // //   if (loading) return <p>Đang tải giỏ hàng...</p>;

// // // // //   return (
// // // // //     <div>
// // // // //       <div className="container mx-auto py-6 px-4">
// // // // //         <Header />
// // // // //       </div>
// // // // //       <div className="container mx-auto py-6 px-4">
// // // // //         <h1 className="text-2xl font-bold mb-6">Quản lý giỏ hàng</h1>
// // // // //         {cart.length === 0 ? (
// // // // //           <p>Giỏ hàng trống.</p>
// // // // //         ) : (
// // // // //           <table className="table-auto w-full border-collapse border border-gray-200">
// // // // //             <thead>
// // // // //               <tr className="bg-gray-100">
// // // // //                 <th className="border py-2 px-4">Sản phẩm</th>
// // // // //                 <th className="border py-2 px-4">Hình ảnh</th>
// // // // //                 <th className="border py-2 px-4">Size</th>
// // // // //                 <th className="border py-2 px-4">Số lượng</th>
// // // // //                 <th className="border py-2 px-4">Giá</th>
// // // // //                 <th className="border py-2 px-4">Thành tiền</th>
// // // // //                 <th className="border py-2 px-4">Hành động</th>
// // // // //               </tr>
// // // // //             </thead>
// // // // //             <tbody>
// // // // //               {cart.map((item) => (
// // // // //                 <tr key={item.magh}>
// // // // //                   <td className="border py-2 px-4">{item.sanPham.tensanpham}</td>
// // // // //                   <td className="border py-2 px-4 text-center">
// // // // //                     <img
// // // // //                       src={`${imageBasePath}${item.sanPham.hinhanh}`}
// // // // //                       alt={item.sanPham.tensanpham}
// // // // //                       className="w-16 h-16 object-cover rounded"
// // // // //                     />
// // // // //                   </td>
// // // // //                   <td className="border py-2 px-4">
// // // // //                     <select
// // // // //                       defaultValue={item.size}
// // // // //                       onChange={(e) =>
// // // // //                         setUpdatedCart((prev) => ({
// // // // //                           ...prev,
// // // // //                           [item.magh]: { ...prev[item.magh], size: e.target.value },
// // // // //                         }))
// // // // //                       }
// // // // //                       className="border p-1 text-center"
// // // // //                     >
// // // // //                       {sizeOptions[item.masp]?.map((size) => (
// // // // //                         <option key={size} value={size}>
// // // // //                           {size}
// // // // //                         </option>
// // // // //                       ))}
// // // // //                     </select>
// // // // //                   </td>
// // // // //                   <td className="border py-2 px-4">
// // // // //                     <input
// // // // //                       type="number"
// // // // //                       defaultValue={item.soluong}
// // // // //                       min="1"
// // // // //                       className="w-12 border p-1 text-center"
// // // // //                       onChange={(e) =>
// // // // //                         setUpdatedCart((prev) => ({
// // // // //                           ...prev,
// // // // //                           [item.magh]: { ...prev[item.magh], soluong: e.target.value },
// // // // //                         }))
// // // // //                       }
// // // // //                     />
// // // // //                   </td>
// // // // //                   <td className="border py-2 px-4 text-right">
// // // // //                     {item.sanPham.gia.toLocaleString()} VND
// // // // //                   </td>
// // // // //                   <td className="border py-2 px-4 text-right">
// // // // //                     {(item.soluong * item.sanPham.gia).toLocaleString()} VND
// // // // //                   </td>
// // // // //                   <td className="border py-2 px-4 text-center space-x-2">
// // // // //                     <button
// // // // //                       className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
// // // // //                       onClick={() => handleUpdate(item.magh)}
// // // // //                     >
// // // // //                       Cập nhật
// // // // //                     </button>
// // // // //                     <button
// // // // //                       className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
// // // // //                       onClick={() => handleDelete(item.magh)}
// // // // //                     >
// // // // //                       Xóa
// // // // //                     </button>
// // // // //                   </td>
// // // // //                 </tr>
// // // // //               ))}
// // // // //             </tbody>
// // // // //           </table>
// // // // //         )}
// // // // //       </div>
// // // // //       <div className="container mx-auto py-6 px-4">
// // // // //         <Footer />
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default Cart;
// // // // import React, { useEffect, useState } from "react";
// // // // import { api } from "../api/axios";
// // // // import Header from "../components/Header";
// // // // import Footer from "../components/Footer";

// // // // const Cart = () => {
// // // //   const [cart, setCart] = useState([]); // Dữ liệu giỏ hàng
// // // //   const [loading, setLoading] = useState(true); // Trạng thái tải
// // // //   const [updatedCart, setUpdatedCart] = useState({}); // Lưu trạng thái sản phẩm cập nhật
// // // //   const [sizeOptions, setSizeOptions] = useState({}); // Lưu danh sách size cho từng sản phẩm
// // // //   const imageBasePath = "/src/assets/images/"; // Đường dẫn ảnh sản phẩm

// // // //   // Lấy dữ liệu giỏ hàng từ API
// // // //   useEffect(() => {
// // // //     const fetchCart = async () => {
// // // //       try {
// // // //         const userId = localStorage.getItem("mand");
// // // //         const response = await api.getCartByUserId(userId);
// // // //         setCart(response.data);

// // // //         // Lấy danh sách size cho từng sản phẩm
// // // //         response.data.forEach(async (item) => {
// // // //           const sizesResponse = await api.getSizesByProduct(item.masp);
// // // //           setSizeOptions((prev) => ({ ...prev, [item.masp]: sizesResponse.data }));
// // // //         });

// // // //         console.log("response.data", response.data);
// // // //       } catch (error) {
// // // //         console.error("Lỗi khi lấy giỏ hàng:", error);
// // // //       } finally {
// // // //         setLoading(false);
// // // //       }
// // // //     };

// // // //     fetchCart();
// // // //   }, []);

// // // //   // Xử lý xóa sản phẩm khỏi giỏ hàng
// // // //   const handleDelete = async (id) => {
// // // //     if (!window.confirm("Bạn có chắc chắn muốn xóa sản phẩm này khỏi giỏ hàng?")) return;

// // // //     try {
// // // //       const currentCartItem = cart.find((item) => item.magh === id);
// // // //       await api.deleteCartItem(currentCartItem.id);
// // // //       setCart((prevCart) => prevCart.filter((item) => item.magh !== id));
// // // //       alert("Xóa sản phẩm thành công!");
// // // //     } catch (error) {
// // // //       console.error("Lỗi khi xóa sản phẩm:", error);
// // // //       alert("Xóa sản phẩm thất bại!");
// // // //     }
// // // //   };

// // // //   // Xử lý cập nhật sản phẩm trong giỏ hàng
// // // //   const handleUpdate = async (id) => {
// // // //     try {
// // // //       const updatedItem = updatedCart[id] || {}; // Lấy dữ liệu cập nhật
// // // //       const currentCartItem = cart.find((item) => item.magh === id);

// // // //       if (!currentCartItem) {
// // // //         alert("Không tìm thấy sản phẩm để cập nhật!");
// // // //         return;
// // // //       }

// // // //       const payload = {
// // // //         mand: localStorage.getItem("mand"),
// // // //         masp: currentCartItem.masp,
// // // //         size: updatedItem.size || currentCartItem.size,
// // // //         soluong: updatedItem.soluong || currentCartItem.soluong,
// // // //       };

// // // //       console.log("Payload gửi đi:", payload);

// // // //       await api.updateCartItem(currentCartItem.id, payload);

// // // //       const refreshedCart = await api.getCartByUserId(localStorage.getItem("mand"));
// // // //       setCart(refreshedCart.data);

// // // //       alert("Cập nhật sản phẩm thành công!");
// // // //     } catch (error) {
// // // //       console.error("Lỗi khi cập nhật sản phẩm:", error);
// // // //       alert("Cập nhật sản phẩm thất bại!");
// // // //     }
// // // //   };

// // // //   if (loading) return <p>Đang tải giỏ hàng...</p>;

// // // //   return (
// // // //     <div>
// // // //       <div className="container mx-auto py-6 px-4">
// // // //         <Header />
// // // //       </div>
// // // //       <div className="container mx-auto py-6 px-4">
// // // //         <h1 className="text-2xl font-bold mb-6">Quản lý giỏ hàng</h1>
// // // //         {cart.length === 0 ? (
// // // //           <p>Giỏ hàng trống.</p>
// // // //         ) : (
// // // //           <table className="table-auto w-full border-collapse border border-gray-200">
// // // //             <thead>
// // // //               <tr className="bg-gray-100">
// // // //                 <th className="border py-2 px-4">Sản phẩm</th>
// // // //                 <th className="border py-2 px-4">Hình ảnh</th>
// // // //                 <th className="border py-2 px-4">Size</th>
// // // //                 <th className="border py-2 px-4">Số lượng</th>
// // // //                 <th className="border py-2 px-4">Giá</th>
// // // //                 <th className="border py-2 px-4">Thành tiền</th>
// // // //                 <th className="border py-2 px-4">Hành động</th>
// // // //               </tr>
// // // //             </thead>
// // // //             <tbody>
// // // //               {cart.map((item) => (
// // // //                 <tr key={item.magh}>
// // // //                   <td className="border py-2 px-4">{item.sanPham.tensanpham}</td>
// // // //                   <td className="border py-2 px-4 text-center">
// // // //                     <img
// // // //                       src={`${imageBasePath}${item.sanPham.hinhanh}`}
// // // //                       alt={item.sanPham.tensanpham}
// // // //                       className="w-16 h-16 object-cover rounded"
// // // //                     />
// // // //                   </td>
// // // //                   <td className="border py-2 px-4">
// // // //                     <select
// // // //                       defaultValue={item.size} // Hiển thị size ban đầu
// // // //                       onChange={(e) =>
// // // //                         setUpdatedCart((prev) => ({
// // // //                           ...prev,
// // // //                           [item.magh]: { ...prev[item.magh], size: e.target.value },
// // // //                         }))
// // // //                       }
// // // //                       className="border p-1 text-center"
// // // //                     >
// // // //                       <option value={item.size} disabled hidden>
// // // //                         {item.size}
// // // //                       </option>
// // // //                       {sizeOptions[item.masp]?.map((size) => (
// // // //                         <option key={size} value={size}>
// // // //                           {size}
// // // //                         </option>
// // // //                       ))}
// // // //                     </select>
// // // //                   </td>
// // // //                   <td className="border py-2 px-4">
// // // //                     <input
// // // //                       type="number"
// // // //                       defaultValue={item.soluong}
// // // //                       min="1"
// // // //                       className="w-12 border p-1 text-center"
// // // //                       onChange={(e) =>
// // // //                         setUpdatedCart((prev) => ({
// // // //                           ...prev,
// // // //                           [item.magh]: { ...prev[item.magh], soluong: e.target.value },
// // // //                         }))
// // // //                       }
// // // //                     />
// // // //                   </td>
// // // //                   <td className="border py-2 px-4 text-right">
// // // //                     {item.sanPham.gia.toLocaleString()} VND
// // // //                   </td>
// // // //                   <td className="border py-2 px-4 text-right">
// // // //                     {(item.soluong * item.sanPham.gia).toLocaleString()} VND
// // // //                   </td>
// // // //                   <td className="border py-2 px-4 text-center space-x-2">
// // // //                     <button
// // // //                       className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
// // // //                       onClick={() => handleUpdate(item.magh)}
// // // //                     >
// // // //                       Cập nhật
// // // //                     </button>
// // // //                     <button
// // // //                       className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
// // // //                       onClick={() => handleDelete(item.magh)}
// // // //                     >
// // // //                       Xóa
// // // //                     </button>
// // // //                   </td>
// // // //                 </tr>
// // // //               ))}
// // // //             </tbody>
// // // //           </table>
// // // //         )}
// // // //       </div>
// // // //       <div className="container mx-auto py-6 px-4">
// // // //         <Footer />
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Cart;
// // // import React, { useEffect, useState } from "react";
// // // import { api } from "../api/axios";
// // // import Header from "../components/Header";
// // // import Footer from "../components/Footer";

// // // const Cart = () => {
// // //   const [cart, setCart] = useState([]); // Dữ liệu giỏ hàng
// // //   const [loading, setLoading] = useState(true); // Trạng thái tải
// // //   const [updatedCart, setUpdatedCart] = useState({}); // Lưu trạng thái sản phẩm cập nhật
// // //   const [sizeOptions, setSizeOptions] = useState({}); // Lưu danh sách size cho từng sản phẩm
// // //   const [isPaymentLoading, setIsPaymentLoading] = useState(false); // Trạng thái xử lý thanh toán
// // //   const [paymentMethod, setPaymentMethod] = useState("cash"); // Phương thức thanh toán mặc định
// // //   const imageBasePath = "/src/assets/images/"; // Đường dẫn ảnh sản phẩm

// // //   // Lấy dữ liệu giỏ hàng từ API
// // //   useEffect(() => {
// // //     const fetchCart = async () => {
// // //       try {
// // //         const userId = localStorage.getItem("mand");
// // //         const response = await api.getCartByUserId(userId);
// // //         setCart(response.data);
       

// // //         // Lấy danh sách size cho từng sản phẩm
// // //         response.data.forEach(async (item) => {
// // //           const sizesResponse = await api.getSizesByProduct(item.masp);
// // //           setSizeOptions((prev) => ({ ...prev, [item.masp]: sizesResponse.data }));
// // //         });

// // //         console.log("response.data", response.data);
// // //       } catch (error) {
// // //         console.error("Lỗi khi lấy giỏ hàng:", error);
// // //       } finally {
// // //         setLoading(false);
// // //       }
// // //     };

// // //     fetchCart();
// // //   }, []);

// // //   // Xử lý thanh toán
// // //   const handlePayment = async () => {
// // //     if (!window.confirm("Bạn có chắc chắn muốn thanh toán giỏ hàng này?")) return;

// // //     setIsPaymentLoading(true);

// // //     try {
// // //       const userId = localStorage.getItem("mand");
// // //       const paymentDetails = {
// // //         mand: userId,
// // //         phuongThucThanhToan: paymentMethod === "cash" ? 1 : 2, // 1: Tiền mặt, 2: Thẻ tín dụng
// // //       };

// // //       console.log("Chi tiết thanh toán:", paymentDetails);

// // //       await api.makePayment(paymentDetails);

      
// // //       // Sau khi thanh toán thành công, làm mới lại giỏ hàng
// // //       setCart([]);
// // //       alert("Thanh toán thành công!");
// // //     } catch (error) {
// // //       console.error("Lỗi khi thanh toán:", error);
// // //       alert("Thanh toán thất bại!");
// // //     } finally {
// // //       setIsPaymentLoading(false);
// // //     }
// // //   };

// // //   if (loading) return <p>Đang tải giỏ hàng...</p>;

// // //   return (
// // //     <div>
// // //       <div className="container mx-auto py-6 px-4">
// // //         <Header />
// // //       </div>
// // //       <div className="container mx-auto py-6 px-4">
// // //         <h1 className="text-2xl font-bold mb-6">Quản lý giỏ hàng</h1>
// // //         {cart.length === 0 ? (
// // //           <p>Giỏ hàng trống.</p>
// // //         ) : (
// // //           <>
// // //             <table className="table-auto w-full border-collapse border border-gray-200">
// // //               <thead>
// // //                 <tr className="bg-gray-100">
// // //                   <th className="border py-2 px-4">Sản phẩm</th>
// // //                   <th className="border py-2 px-4">Hình ảnh</th>
// // //                   <th className="border py-2 px-4">Size</th>
// // //                   <th className="border py-2 px-4">Số lượng</th>
// // //                   <th className="border py-2 px-4">Giá</th>
// // //                   <th className="border py-2 px-4">Thành tiền</th>
// // //                   <th className="border py-2 px-4">Hành động</th>
// // //                 </tr>
// // //               </thead>
// // //               <tbody>
// // //                 {cart.map((item) => (
// // //                   <tr key={item.magh}>
// // //                     <td className="border py-2 px-4">{item.sanPham.tensanpham}</td>
// // //                     <td className="border py-2 px-4 text-center">
// // //                       <img
// // //                         src={`${imageBasePath}${item.sanPham.hinhanh}`}
// // //                         alt={item.sanPham.tensanpham}
// // //                         className="w-16 h-16 object-cover rounded"
// // //                       />
// // //                     </td>
// // //                     <td className="border py-2 px-4">
// // //                       <select
// // //                         defaultValue={item.size}
// // //                         onChange={(e) =>
// // //                           setUpdatedCart((prev) => ({
// // //                             ...prev,
// // //                             [item.magh]: { ...prev[item.magh], size: e.target.value },
// // //                           }))
// // //                         }
// // //                         className="border p-1 text-center"
// // //                       >
// // //                         <option value={item.size} disabled hidden>
// // //                           {item.size}
// // //                         </option>
// // //                         {sizeOptions[item.masp]?.map((size) => (
// // //                           <option key={size} value={size}>
// // //                             {size}
// // //                           </option>
// // //                         ))}
// // //                       </select>
// // //                     </td>
// // //                     <td className="border py-2 px-4">
// // //                       <input
// // //                         type="number"
// // //                         defaultValue={item.soluong}
// // //                         min="1"
// // //                         className="w-12 border p-1 text-center"
// // //                         onChange={(e) =>
// // //                           setUpdatedCart((prev) => ({
// // //                             ...prev,
// // //                             [item.magh]: { ...prev[item.magh], soluong: e.target.value },
// // //                           }))
// // //                         }
// // //                       />
// // //                     </td>
// // //                     <td className="border py-2 px-4 text-right">
// // //                       {item.sanPham.gia.toLocaleString()} VND
// // //                     </td>
// // //                     <td className="border py-2 px-4 text-right">
// // //                       {(item.soluong * item.sanPham.gia).toLocaleString()} VND
// // //                     </td>
// // //                     <td className="border py-2 px-4 text-center space-x-2">
// // //                       <button
// // //                         className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
// // //                         onClick={() => handleUpdate(item.magh)}
// // //                       >
// // //                         Cập nhật
// // //                       </button>
// // //                       <button
// // //                         className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
// // //                         onClick={() => handleDelete(item.magh)}
// // //                       >
// // //                         Xóa
// // //                       </button>
// // //                     </td>
// // //                   </tr>
// // //                 ))}
// // //               </tbody>
// // //             </table>
// // //             <div className="mt-6">
// // //               <h2 className="text-lg font-bold mb-2">Chọn phương thức thanh toán:</h2>
// // //               <div className="flex items-center mb-4">
// // //                 <label className="mr-4">
// // //                   <input
// // //                     type="radio"
// // //                     name="paymentMethod"
// // //                     value="cash"
// // //                     checked={paymentMethod === "cash"}
// // //                     onChange={() => setPaymentMethod("cash")}
// // //                   />
// // //                   Tiền mặt
// // //                 </label>
// // //                 <label>
// // //                   <input
// // //                     type="radio"
// // //                     name="paymentMethod"
// // //                     value="creditCard"
// // //                     checked={paymentMethod === "creditCard"}
// // //                     onChange={() => setPaymentMethod("creditCard")}
// // //                   />
// // //                   Thẻ tín dụng
// // //                 </label>
// // //               </div>
// // //               <button
// // //                 className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
// // //                 onClick={handlePayment}
// // //                 disabled={isPaymentLoading}
// // //               >
// // //                 {isPaymentLoading ? "Đang xử lý thanh toán..." : "Thanh toán"}
// // //               </button>
// // //             </div>
// // //           </>
// // //         )}
// // //       </div>
// // //       <div className="container mx-auto py-6 px-4">
// // //         <Footer />
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Cart;
// // import React, { useEffect, useState } from "react";
// // import { api } from "../api/axios";
// // import Header from "../components/Header";
// // import Footer from "../components/Footer";

// // const Cart = () => {
// //   const [cart, setCart] = useState([]); // Dữ liệu giỏ hàng
// //   const [loading, setLoading] = useState(true); // Trạng thái tải
// //   const [updatedCart, setUpdatedCart] = useState({}); // Lưu trạng thái sản phẩm cập nhật
// //   const [sizeOptions, setSizeOptions] = useState({}); // Lưu danh sách size cho từng sản phẩm
// //   const [isPaymentLoading, setIsPaymentLoading] = useState(false); // Trạng thái xử lý thanh toán
// //   const [paymentMethod, setPaymentMethod] = useState("cash"); // Phương thức thanh toán mặc định
// //   const imageBasePath = "/src/assets/images/"; // Đường dẫn ảnh sản phẩm

// //   // Lấy dữ liệu giỏ hàng từ API
// //   const fetchCart = async () => {
// //     try {
// //       const userId = localStorage.getItem("mand");
// //       if (!userId) {
// //         alert("Vui lòng đăng nhập để xem giỏ hàng của bạn");
// //         return;
// //       }

// //       setLoading(true);
// //       const response = await api.getCartByUserId(userId);
// //       setCart(response.data);

// //       // Lấy danh sách size cho từng sản phẩm
// //       response.data.forEach(async (item) => {
// //         const sizesResponse = await api.getSizesByProduct(item.masp);
// //         setSizeOptions((prev) => ({ ...prev, [item.masp]: sizesResponse.data }));
// //       });

// //       console.log("response.data", response.data);
// //     } catch (error) {
// //       console.error("Lỗi khi lấy giỏ hàng:", error);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   useEffect(() => {
// //     fetchCart();
// //   }, []);

// //   // Xử lý thanh toán
// //   const handlePayment = async () => {
// //     if (!window.confirm("Bạn có chắc chắn muốn thanh toán giỏ hàng này?")) return;

// //     setIsPaymentLoading(true);

// //     try {
// //       const userId = localStorage.getItem("mand");
// //       const paymentDetails = {
// //         mand: userId,
// //         phuongThucThanhToan: paymentMethod === "cash" ? 1 : 2, // 1: Tiền mặt, 2: Thẻ tín dụng
// //       };

// //       console.log("Chi tiết thanh toán:", paymentDetails);

// //       const response = await api.makePayment(paymentDetails);

// //       if (response.data && response.data.mahd) {
// //         localStorage.setItem("mahd", response.data.mahd);
// //         alert("Thanh toán thành công! Mã hóa đơn của bạn là: " + response.data.mahd);
// //       }

// //       // Làm mới giỏ hàng sau khi thanh toán thành công
// //       await fetchCart();
// //     } catch (error) {
// //       console.error("Lỗi khi thanh toán:", error);
// //       alert("Thanh toán thất bại!");
// //     } finally {
// //       setIsPaymentLoading(false);
// //     }
// //   };

// //   if (loading) return <p>Đang tải giỏ hàng...</p>;

// //   return (
// //     <div>
// //       <div className="container mx-auto py-6 px-4">
// //         <Header />
// //       </div>
// //       <div className="container mx-auto py-6 px-4">
// //         <h1 className="text-2xl font-bold mb-6">Quản lý giỏ hàng</h1>
// //         {cart.length === 0 ? (
// //           <p>Giỏ hàng trống.</p>
// //         ) : (
// //           <>
// //             <table className="table-auto w-full border-collapse border border-gray-200">
// //               <thead>
// //                 <tr className="bg-gray-100">
// //                   <th className="border py-2 px-4">Sản phẩm</th>
// //                   <th className="border py-2 px-4">Hình ảnh</th>
// //                   <th className="border py-2 px-4">Size</th>
// //                   <th className="border py-2 px-4">Số lượng</th>
// //                   <th className="border py-2 px-4">Giá</th>
// //                   <th className="border py-2 px-4">Thành tiền</th>
// //                   <th className="border py-2 px-4">Hành động</th>
// //                 </tr>
// //               </thead>
// //               <tbody>
// //                 {cart.map((item) => (
// //                   <tr key={item.magh}>
// //                     <td className="border py-2 px-4">{item.sanPham.tensanpham}</td>
// //                     <td className="border py-2 px-4 text-center">
// //                       <img
// //                         src={`${imageBasePath}${item.sanPham.hinhanh}`}
// //                         alt={item.sanPham.tensanpham}
// //                         className="w-16 h-16 object-cover rounded"
// //                       />
// //                     </td>
// //                     <td className="border py-2 px-4">
// //                       <select
// //                         defaultValue={item.size}
// //                         onChange={(e) =>
// //                           setUpdatedCart((prev) => ({
// //                             ...prev,
// //                             [item.magh]: { ...prev[item.magh], size: e.target.value },
// //                           }))
// //                         }
// //                         className="border p-1 text-center"
// //                       >
// //                         <option value={item.size} disabled hidden>
// //                           {item.size}
// //                         </option>
// //                         {sizeOptions[item.masp]?.map((size) => (
// //                           <option key={size} value={size}>
// //                             {size}
// //                           </option>
// //                         ))}
// //                       </select>
// //                     </td>
// //                     <td className="border py-2 px-4">
// //                       <input
// //                         type="number"
// //                         defaultValue={item.soluong}
// //                         min="1"
// //                         className="w-12 border p-1 text-center"
// //                         onChange={(e) =>
// //                           setUpdatedCart((prev) => ({
// //                             ...prev,
// //                             [item.magh]: { ...prev[item.magh], soluong: e.target.value },
// //                           }))
// //                         }
// //                       />
// //                     </td>
// //                     <td className="border py-2 px-4 text-right">
// //                       {item.sanPham.gia.toLocaleString()} VND
// //                     </td>
// //                     <td className="border py-2 px-4 text-right">
// //                       {(item.soluong * item.sanPham.gia).toLocaleString()} VND
// //                     </td>
// //                     <td className="border py-2 px-4 text-center space-x-2">
// //                       <button
// //                         className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
// //                         onClick={() => handleUpdate(item.magh)}
// //                       >
// //                         Cập nhật
// //                       </button>
// //                       <button
// //                         className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
// //                         onClick={() => handleDelete(item.magh)}
// //                       >
// //                         Xóa
// //                       </button>
// //                     </td>
// //                   </tr>
// //                 ))}
// //               </tbody>
// //             </table>
// //             <div className="mt-6">
// //               <h2 className="text-lg font-bold mb-2">Chọn phương thức thanh toán:</h2>
// //               <div className="flex items-center mb-4">
// //                 <label className="mr-4">
// //                   <input
// //                     type="radio"
// //                     name="paymentMethod"
// //                     value="cash"
// //                     checked={paymentMethod === "cash"}
// //                     onChange={() => setPaymentMethod("cash")}
// //                   />
// //                   Tiền mặt
// //                 </label>
// //                 <label>
// //                   <input
// //                     type="radio"
// //                     name="paymentMethod"
// //                     value="creditCard"
// //                     checked={paymentMethod === "creditCard"}
// //                     onChange={() => setPaymentMethod("creditCard")}
// //                   />
// //                   Thẻ tín dụng
// //                 </label>
// //               </div>
// //               <button
// //                 className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
// //                 onClick={handlePayment}
// //                 disabled={isPaymentLoading}
// //               >
// //                 {isPaymentLoading ? "Đang xử lý thanh toán..." : "Thanh toán"}
// //               </button>
// //             </div>
// //           </>
// //         )}
// //       </div>
// //       <div className="container mx-auto py-6 px-4">
// //         <Footer />
// //       </div>
// //     </div>
// //   );
// // };

// // export default Cart;
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

      await api.makePayment(paymentDetails);

      // Sau khi thanh toán thành công, làm mới lại giỏ hàng
      setCart([]);
      alert("Thanh toán thành công!");
    } catch (error) {
      console.error("Lỗi khi thanh toán:", error);
      alert("Thanh toán thất bại!");
    } finally {
      setIsPaymentLoading(false);
    }
  };

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
