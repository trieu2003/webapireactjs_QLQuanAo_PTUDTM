// // import React, { useState, useEffect } from "react";
// // import { api } from "../api/axios";

// // const BannerSlider = () => {
// //   const [slides, setSlides] = useState([]);
// //   const [currentSlide, setCurrentSlide] = useState(0);

// //   useEffect(() => {
// //     const fetchSlides = async () => {
// //       try {
// //         const response = await api.getBannerSlider();
// //         setSlides(response.data);
// //       } catch (error) {
// //         console.error("Lỗi khi lấy dữ liệu slider:", error);
// //       }
// //     };

// //     fetchSlides();
// //   }, []);

// //   useEffect(() => {
// //     const timer = setInterval(() => {
// //       setCurrentSlide((prev) => (prev + 1) % slides.length);
// //     }, 5000); // Chuyển slide sau mỗi 5 giây
// //     return () => clearInterval(timer);
// //   }, [slides]);

// //   if (!slides.length) return <p>Đang tải dữ liệu...</p>;
// //   const imageBasePath = "src/assets/images/"; // Đường dẫn tuyệt đối đến thư mục hình ảnh
// //   return (
// //     <div className="relative w-full h-[500px] overflow-hidden">
// //       {/* Slide Container */}
// //       <div
// //         className="flex transition-transform ease-in-out duration-700"
// //         style={{ transform: `translateX(-${currentSlide * 100}%)` }}
// //       >
// //         {slides.map((slide, index) => (
// //           <div
// //             key={slide.id}
// //             className="w-full flex-shrink-0 h-[500px] bg-cover bg-center"
// //             style={{
// //                 backgroundImage: `url(${imageBasePath}${slide.hinhanh})`,
// //             }}
// //           >
// //             <div className="bg-black bg-opacity-50 text-white w-full h-full flex flex-col justify-center items-start p-10">
// //               <h2 className="text-3xl font-bold">{slide.tensanpham}</h2>
// //               <p className="mt-2 text-xl">Giá: {slide.gia.toLocaleString()} VND</p>
// //               <p className="mt-2">{slide.chatlieu}</p>
// //               <p className="mt-2">
// //                 Khuyến mãi: {slide.khuyenMai || "Không có khuyến mãi"}
// //               </p>
// //               <button className="mt-4 bg-blue-500 px-6 py-2 text-lg rounded hover:bg-blue-700">
// //                 Xem chi tiết
// //               </button>
// //             </div>
// //           </div>
// //         ))}
// //       </div>

// //       {/* Navigation Dots */}
// //       <div className="absolute bottom-5 w-full flex justify-center">
// //         {slides.map((_, index) => (
// //           <button
// //             key={index}
// //             className={`w-4 h-4 mx-2 rounded-full ${
// //               currentSlide === index ? "bg-blue-500" : "bg-gray-300"
// //             }`}
// //             onClick={() => setCurrentSlide(index)}
// //           />
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default BannerSlider;
// import React, { useState, useEffect } from "react";
// import { api } from "../api/axios";

// const BannerSlider = () => {
//   const [slides, setSlides] = useState([]);
//   const [currentSlide, setCurrentSlide] = useState(0);

//   useEffect(() => {
//     const fetchSlides = async () => {
//       try {
//         const response = await api.getBannerSlider();
//         setSlides(response.data);
//       } catch (error) {
//         console.error("Lỗi khi lấy dữ liệu slider:", error);
//       }
//     };

//     fetchSlides();
//   }, []);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % slides.length);
//     }, 5000); // Chuyển slide sau mỗi 5 giây
//     return () => clearInterval(timer);
//   }, [slides]);

//   if (!slides.length) return <p>Đang tải dữ liệu...</p>;

//   const imageBasePath = "src/assets/images/"; // Đường dẫn tuyệt đối đến thư mục hình ảnh

//   return (
//     <div className="relative w-full h-[500px] overflow-hidden">
//       {/* Slide Container */}
//       <div
//         className="flex transition-transform ease-in-out duration-700"
//         style={{ transform: `translateX(-${currentSlide * 100}%)` }}
//       >
//         {slides.map((slide, index) => (
//           <div
//             key={slide.id}
//             className="w-full flex-shrink-0 h-[500px] bg-cover bg-center"
//             style={{
//               backgroundImage: `url(${imageBasePath}${slide.hinhanh})`,
//             }}
//           >
//             <div className="bg-black bg-opacity-50 text-white w-full h-full flex flex-col justify-center items-start p-10 relative">
//               <h2 className="text-7xl font-bold">{slide.tensanpham}</h2>
//               <p className="mt-2 text-xl">Giá: {slide.gia.toLocaleString()} VND</p>
//               <p className="mt-2">{slide.chatlieu}</p>
//               <p className="mt-2">
//                 Khuyến mãi: {slide.khuyenMai || "Không có khuyến mãi"}
//               </p>
//               <button className="mt-4 bg-black px-6 py-2 text-lg rounded hover:bg-gray-700 hover:text-white">
//                 Xem chi tiết
//               </button>

//               {/* Thumbnail in the corner */}
//               <div className="absolute bottom-5 right-5 bg-white p-6 rounded shadow-lg">
//                 <img
//                   src={`${imageBasePath}${slide.hinhanh}`}
//                   alt={`${slide.tensanpham} Thumbnail`}
//                   className="h-64 w-64 object-cover rounded"
//                 />
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Navigation Dots */}
//       {/* <div className="absolute bottom-5 w-full flex justify-center">
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             className={`w-4 h-4 mx-2 rounded-full ${
//               currentSlide === index ? "bg-blue-500" : "bg-gray-300"
//             }`}
//             onClick={() => setCurrentSlide(index)}
//           />
//         ))}
//       </div> */}
//     </div>
//   );
// };

// export default BannerSlider;
import React, { useState, useEffect } from "react";
import { api } from "../api/axios";

const BannerSlider = () => {
  const [slides, setSlides] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [offsetX, setOffsetX] = useState(0);

  useEffect(() => {
    const fetchSlides = async () => {
      try {
        const response = await api.getBannerSlider();
        setSlides(response.data);
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu slider:", error);
      }
    };

    fetchSlides();
  }, []);

  useEffect(() => {
    if (!isDragging) {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 3000); // Chuyển slide sau mỗi 5 giây
      return () => clearInterval(timer);
    }
  }, [isDragging, slides]);

  if (!slides.length) return <p>Đang tải dữ liệu...</p>;

  const imageBasePath = "src/assets/images/"; // Đường dẫn tuyệt đối đến thư mục hình ảnh

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    setOffsetX(e.clientX - startX);
  };

  const handleMouseUp = () => {
    if (isDragging) {
      if (offsetX > 50) {
        // Kéo sang phải
        setCurrentSlide((prev) => (prev > 0 ? prev - 1 : slides.length - 1));
      } else if (offsetX < -50) {
        // Kéo sang trái
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }
    }
    setIsDragging(false);
    setOffsetX(0);
  };

  return (
    <div
      className="relative w-full h-[500px] overflow-hidden"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp} // Dừng kéo nếu chuột rời khỏi banner
    >
      {/* Slide Container */}
      <div
        className="flex transition-transform ease-in-out duration-700"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className="w-full flex-shrink-0 h-[500px] bg-cover bg-center"
            style={{
              backgroundImage: `url(${imageBasePath}${slide.hinhanh})`,
            }}
          >
            <div className="bg-black bg-opacity-50 text-white w-full h-full flex flex-col justify-center items-start p-10 relative">
              <h2 className="text-7xl font-bold">{slide.tensanpham}</h2>
              <p className="mt-2 text-xl">Giá: {slide.gia.toLocaleString()} VND</p>
              <p className="mt-2">{slide.chatlieu}</p>
              <p className="mt-2">{slide.mota}</p>

              <p className="mt-2">
                Khuyến mãi: {slide.khuyenMai || "Không có khuyến mãi"}
              </p>
              <button className="mt-4 bg-black px-6 py-2 text-lg rounded hover:bg-gray-700 hover:text-white">
                Xem chi tiết
              </button>

              {/* Thumbnail in the corner */}
              <div className="absolute bottom-5 right-5 bg-white p-6 rounded shadow-lg">
                <img
                  src={`${imageBasePath}${slide.hinhanh}`}
                  alt={`${slide.tensanpham} Thumbnail`}
                  className="h-64 w-64 object-cover rounded"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BannerSlider;
