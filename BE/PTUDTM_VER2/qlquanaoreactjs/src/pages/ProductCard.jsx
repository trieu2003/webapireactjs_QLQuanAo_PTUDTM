// // // // import React from "react";
// // // // import { useNavigate } from "react-router-dom";

// // // // const ProductCard = ({ product }) => {
// // // //   const navigate = useNavigate();
// // // //   const imageBasePath = "src/assets/images/"; // Đường dẫn tuyệt đối đến thư mục hình ảnh
// // // //   console.log(product);
// // // //   return (
// // // //     <div className="border rounded-lg shadow p-4">
// // // //       <img
// // // //        src={`${imageBasePath}${product.hinhanh}`}
// // // //         // src={`/assets/images/${}`}
// // // //         alt={product.tensanpham}
// // // //         className="w-full h-48 object-cover mb-4 rounded"
// // // //       />
// // // //       <h3 className="text-lg font-semibold">{product.tensanpham}</h3>
// // // //       <p className="text-gray-500">
// // // //         Giá:{" "}
// // // //         {product.gia !== undefined
// // // //           ? product.gia.toLocaleString() + " VND"
// // // //           : "Đang cập nhật"}
// // // //       </p>
// // // //       <button
// // // //         onClick={() => navigate(`/product/${product.id}`)}
// // // //         className="bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-blue-700"
// // // //       >
// // // //         Xem chi tiết
// // // //       </button>
    
// // // //     </div>
// // // //   );
// // // // };

// // // // export default ProductCard;
// // // import React from "react";
// // // import { useNavigate } from "react-router-dom";
// // // import { TERipple } from "tw-elements-react";

// // // const ProductCard = ({ product }) => {
// // //   const navigate = useNavigate();
// // //   const imageBasePath = "src/assets/images/"; // Đường dẫn tới thư mục hình ảnh

// // //   return (
// // //     <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
// // //       <TERipple>
// // //         <div className="relative overflow-hidden bg-cover bg-no-repeat">
// // //           <img
// // //             className="rounded-t-lg w-full h-48 object-cover"
// // //             src={`${imageBasePath}${product.hinhanh}`}
// // //             alt={product.tensanpham}
// // //           />
// // //           <a
// // //             href="#!"
// // //             onClick={(e) => {
// // //               e.preventDefault();
// // //               navigate(`/product/${product.id}`);
// // //             }}
// // //           >
// // //             <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
// // //           </a>
// // //         </div>
// // //       </TERipple>
// // //       <div className="p-6">
// // //         <h3 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
// // //           {product.tensanpham}
// // //         </h3>
// // //         <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
// // //           Giá:{" "}
// // //           {product.gia !== undefined
// // //             ? product.gia.toLocaleString() + " VND"
// // //             : "Đang cập nhật"}
// // //         </p>
// // //         <TERipple>
// // //           <button
// // //             onClick={() => navigate(`/product/${product.id}`)}
// // //             className="inline-block w-full rounded bg-blue-600 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-blue-700 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] active:bg-blue-800 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
// // //           >
// // //             Xem chi tiết
// // //           </button>
// // //         </TERipple>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default ProductCard;
// // import React from "react";
// // import { useNavigate } from "react-router-dom";
// // import { TERipple } from "tw-elements-react";

// // const ProductCard = ({ product }) => {
// //   const navigate = useNavigate();
// //   const imageBasePath = "src/assets/images/"; // Đường dẫn tới thư mục hình ảnh

// //   return (
// //     <div className="group relative border rounded-lg overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300">
// //       {/* Image Section */}
// //       <div className="relative overflow-hidden">
// //         <img
// //           className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105"
// //           src={`${imageBasePath}${product.hinhanh}`}
// //           alt={product.tensanpham}
// //         />
// //         {/* Badge */}
// //         {product.isHot && (
// //           <div className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 text-xs font-bold rounded shadow">
// //             Hot
// //           </div>
// //         )}
// //         {product.discount && (
// //           <div className="absolute top-3 right-3 bg-green-500 text-white px-3 py-1 text-xs font-bold rounded shadow">
// //             -{product.discount}%
// //           </div>
// //         )}
// //         <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-25 transition duration-300"></div>
// //       </div>

// //       {/* Product Info Section */}
// //       <div className="p-4">
// //         <h3 className="text-lg font-semibold text-gray-800 truncate group-hover:text-blue-600 transition-colors duration-300">
// //           {product.tensanpham}
// //         </h3>
// //         <p className="mt-2 text-gray-600 text-sm line-clamp-2">
// //           {product.description || "Mô tả sản phẩm đang cập nhật..."}
// //         </p>
// //         <p className="mt-3 text-gray-900 text-lg font-bold">
// //           {product.discount ? (
// //             <>
// //               <span className="line-through text-gray-500 mr-2">
// //                 {product.gia.toLocaleString()} VND
// //               </span>
// //               <span>
// //                 {(
// //                   product.gia *
// //                   (1 - product.discount / 100)
// //                 ).toLocaleString()}{" "}
// //                 VND
// //               </span>
// //             </>
// //           ) : (
// //             `${product.gia.toLocaleString()} VND`
// //           )}
// //         </p>
// //       </div>

// //       {/* Action Section */}
// //       <TERipple rippleColor="light">
// //         <button
// //           onClick={() => navigate(`/product/${product.id}`)}
// //           className="absolute bottom-0 left-0 right-0 bg-blue-600 text-white py-2 text-sm font-semibold text-center transition-colors duration-300 hover:bg-blue-700"
// //         >
// //           Xem chi tiết
// //         </button>
// //       </TERipple>
// //     </div>
// //   );
// // };

// // export default ProductCard;
// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { TERipple } from "tw-elements-react";

// const ProductCard = ({ product }) => {
//   const navigate = useNavigate();
//   const imageBasePath = "src/assets/images/"; // Path to the image folder

//   return (
//     <div
//       onClick={() => navigate(`/product/${product.id}`)}
//       className="group relative border rounded-lg overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
//     >
//       {/* Image Section */}
//       <div className="relative overflow-hidden">
//         <img
//           className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105"
//           src={`${imageBasePath}${product.hinhanh}`}
//           alt={product.tensanpham}
//         />
//         {/* Badges */}
//         {product.isHot && (
//           <div className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 text-xs font-bold rounded shadow">
//             Hot
//           </div>
//         )}
//         {product.discount && (
//           <div className="absolute top-3 right-3 bg-green-500 text-white px-3 py-1 text-xs font-bold rounded shadow">
//             -{product.discount}%
//           </div>
//         )}
//         <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-25 transition duration-300"></div>
//       </div>

//       {/* Product Info Section */}
//       <div className="p-4">
//         <h3 className="text-lg font-semibold text-gray-800 truncate group-hover:text-blue-600 transition-colors duration-300">
//           {product.tensanpham}
//         </h3>
//         <p className="mt-2 text-gray-600 text-sm line-clamp-2">
//           {product.description || "Mô tả sản phẩm đang cập nhật..."}
//         </p>
//         <p className="mt-3 text-gray-900 text-lg font-bold">
//           {product.discount ? (
//             <>
//               <span className="line-through text-gray-500 mr-2">
//                 {product.gia.toLocaleString()} VND
//               </span>
//               <span>
//                 {(
//                   product.gia *
//                   (1 - product.discount / 100)
//                 ).toLocaleString()}{" "}
//                 VND
//               </span>
//             </>
//           ) : (
//             `${product.gia.toLocaleString()} VND`
//           )}
//         </p>
//       </div>

//       {/* Action Button */}
//       <div className="absolute bottom-0 left-0 right-0">
//         <TERipple rippleColor="light">
//           <button
//             onClick={(e) => {
//               e.stopPropagation();
//               navigate(`/product/${product.id}`);
//             }}
//             className="w-full bg-blue-600 text-white py-2  text-sm font-semibold text-center transition-colors duration-300 hover:bg-blue-700"
//           >
//             Xem chi tiết
//           </button>
//         </TERipple>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;
import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const imageBasePath = "src/assets/images/"; // Đường dẫn tới thư mục hình ảnh

  return (
    <div
      onClick={() => navigate(`/product/${product.id}`)}
      className="group relative flex flex-col bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow duration-300"
    >
      {/* Phần hình ảnh */}
      <div className="relative overflow-hidden">
        <img
          src={`${imageBasePath}${product.hinhanh}`}
          alt={product.tensanpham}
          className="h-60 w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {/* Huy hiệu "Hot" hoặc "Giảm giá" */}
        {product.isHot && (
          <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 text-xs font-semibold uppercase rounded">
            Hot
          </div>
        )}
        {product.discount && (
          <div className="absolute top-3 right-3 bg-green-500 text-white px-2 py-1 text-xs font-semibold uppercase rounded">
            -{product.discount}%
          </div>
        )}
      </div>

      {/* Phần thông tin */}
      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-lg font-semibold text-gray-800 truncate">
          {product.tensanpham}
        </h3>
        <p className="mt-2 text-gray-600 text-sm flex-1">
          {product.description || "Mô tả sản phẩm đang cập nhật..."}
        </p>
        <div className="mt-4">
          {product.discount ? (
            <p className="text-red-500 text-lg font-bold">
              {(
                product.gia *
                (1 - product.discount / 100)
              ).toLocaleString()}{" "}
              VND{" "}
              <span className="text-gray-500 line-through text-sm">
                {product.gia.toLocaleString()} VND
              </span>
            </p>
          ) : (
            <p className="text-gray-900 text-lg font-bold">
              {product.gia.toLocaleString()} VND
            </p>
          )}
        </div>
      </div>

      {/* Nút hành động */}
      <div className="p-4 bg-gray-100 hover:bg-gray-200 text-blue-600 text-center text-sm font-semibold transition duration-300">
        Xem chi tiết
      </div>
    </div>
  );
};

export default ProductCard;
