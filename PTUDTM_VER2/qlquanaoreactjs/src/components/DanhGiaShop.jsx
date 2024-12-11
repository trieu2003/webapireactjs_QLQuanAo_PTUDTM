
import React, { useState, useEffect } from 'react';
import { api } from '../api/axios';

const DanhGiaShop = () => {
  const [danhGias, setDanhGias] = useState([]);
  const [newReview, setNewReview] = useState({ sosao: 5, noidung: '' });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Lấy danh sách đánh giá
  useEffect(() => {
    const fetchDanhGia = async () => {
      try {
        setLoading(true);
        const response = await api.getDanhGiaShop();
        setDanhGias(response.data.data);
        setLoading(false);
      } catch (err) {
        console.error('Lỗi khi lấy đánh giá:', err);
        setError('Không thể tải đánh giá của cửa hàng.');
        setLoading(false);
      }
    };

    fetchDanhGia();
  }, []);

  // Xử lý thêm đánh giá mới
  const handleAddReview = async () => {
    try {
      const mand = localStorage.getItem('mand'); // Giả sử bạn lưu MAND trong localStorage
      const mahd = localStorage.getItem('mahd'); // Lấy MAHD từ localStorage (phải đảm bảo đã thanh toán)
      
      if (!mand || !mahd) {
        setError('Bạn cần đăng nhập và thanh toán hóa đơn trước khi thêm đánh giá.');
        return;
      }

      if (!newReview.noidung.trim()) {
        setError('Vui lòng nhập nội dung đánh giá.');
        return;
      }

      if (newReview.sosao < 1 || newReview.sosao > 5) {
        setError('Số sao phải nằm trong khoảng từ 1 đến 5.');
        return;
      }

      setError('');

      const payload = {
        MAND: mand,
        MAHD: mahd,
        NOIDUNG: newReview.noidung,
        SOSAO: newReview.sosao,
      };

      await api.addDanhGia(payload);
      alert('Thêm đánh giá thành công!');
      
      // Cập nhật danh sách đánh giá sau khi thêm
      const response = await api.getDanhGiaShop();
      setDanhGias(response.data.data);
      setNewReview({ sosao: 5, noidung: '' });
    } catch (err) {
      console.error('Lỗi khi thêm đánh giá:', err);
      setError('Không thể thêm đánh giá. Hãy thử lại sau.');
    }
  };

  return (
    <div className="container mx-auto py-6 px-4">
      <h1 className="text-2xl font-bold mb-6">Đánh Giá Cửa Hàng</h1>
      
      {loading ? (
        <p>Đang tải đánh giá...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : danhGias.length === 0 ? (
        <p>Chưa có đánh giá nào cho cửa hàng.</p>
      ) : (
        <div>
          {danhGias.map((danhGia, index) => (
            <div key={index} className="border p-4 mb-4">
              <p><strong>Mã người dùng:</strong> {danhGia.mand}</p>
              <p><strong>Số sao:</strong> {danhGia.sosao} / 5</p>
              <p><strong>Nội dung:</strong> {danhGia.noidung}</p>
            </div>
          ))}
        </div>
      )}

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Thêm Đánh Giá Mới</h2>
        <div className="mb-4">
          <label className="block mb-2 font-semibold">Số Sao (1-5):</label>
          <input
            type="number"
            min="1"
            max="5"
            value={newReview.sosao}
            onChange={(e) => setNewReview({ ...newReview, sosao: parseInt(e.target.value) })}
            className="border p-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-semibold">Nội Dung Đánh Giá:</label>
          <textarea
            value={newReview.noidung}
            onChange={(e) => setNewReview({ ...newReview, noidung: e.target.value })}
            className="border p-2 w-full"
          ></textarea>
        </div>
        <button
          onClick={handleAddReview}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Thêm Đánh Giá
        </button>
      </div>
    </div>
  );
};

export default DanhGiaShop;
