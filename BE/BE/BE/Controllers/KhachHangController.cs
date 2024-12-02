using Microsoft.AspNetCore.Mvc;
using BE.Data;
using BE.Models;

namespace BE.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class KhachHangController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public KhachHangController(ApplicationDbContext context)
        {
            _context = context;
        }

        // 1. Xem giỏ hàng
        [HttpGet("giohang/{mand}")]
        public IActionResult GetGioHang(string mand)
        {
            var gioHang = _context.GioHangs.Where(gh => gh.MAND == mand).ToList();
            if (gioHang == null || !gioHang.Any())
                return NotFound(new { message = "Giỏ hàng trống hoặc không tồn tại." });

            return Ok(gioHang);
        }

        // 2. Thêm sản phẩm vào giỏ hàng
        [HttpPost("giohang/them")]
        public IActionResult AddToGioHang(GioHang gioHang)
        {
            _context.GioHangs.Add(gioHang);
            _context.SaveChanges();
            return Ok(new { message = "Thêm sản phẩm vào giỏ hàng thành công." });
        }

        // 3. Cập nhật giỏ hàng
        [HttpPut("giohang/capnhat/{id}")]
        public IActionResult UpdateGioHang(int id, GioHang updatedGioHang)
        {
            var gioHang = _context.GioHangs.Find(id);
            if (gioHang == null)
                return NotFound(new { message = "Không tìm thấy sản phẩm trong giỏ hàng." });

            gioHang.SOLUONG = updatedGioHang.SOLUONG;
            gioHang.THANHTIEN = updatedGioHang.THANHTIEN;
            _context.SaveChanges();

            return Ok(new { message = "Cập nhật giỏ hàng thành công." });
        }

        // 4. Xóa sản phẩm khỏi giỏ hàng
        [HttpDelete("giohang/xoa/{id}")]
        public IActionResult RemoveFromGioHang(int id)
        {
            var gioHang = _context.GioHangs.Find(id);
            if (gioHang == null)
                return NotFound(new { message = "Không tìm thấy sản phẩm trong giỏ hàng." });

            _context.GioHangs.Remove(gioHang);
            _context.SaveChanges();

            return Ok(new { message = "Xóa sản phẩm khỏi giỏ hàng thành công." });
        }

        // 5. Tạo hóa đơn
        [HttpPost("hoadon/tao")]
        public IActionResult CreateHoaDon(HoaDon hoaDon)
        {
            _context.HoaDon.Add(hoaDon);
            _context.SaveChanges();
            return Ok(new { message = "Tạo hóa đơn thành công.", hoaDon });
        }

        // 6. Xem lịch sử hóa đơn
        [HttpGet("hoadon/lichsu/{mand}")]
        public IActionResult GetHoaDonHistory(string mand)
        {
            var hoaDons = _context.HoaDon.Where(hd => hd.MAND == mand).ToList();
            if (!hoaDons.Any())
                return NotFound(new { message = "Không tìm thấy hóa đơn nào." });

            return Ok(hoaDons);
        }

        // 7. Thêm đánh giá sản phẩm
        [HttpPost("danhgia/them")]
        public IActionResult AddDanhGia(DanhGia danhGia)
        {
            _context.DanhGias.Add(danhGia);
            _context.SaveChanges();
            return Ok(new { message = "Thêm đánh giá thành công." });
        }

        // 8. Xem đánh giá của sản phẩm
        [HttpGet("danhgia/sanpham/{masp}")]
        public IActionResult GetDanhGiaBySanPham(string masp)
        {
            var danhGias = _context.DanhGias.Where(dg => dg.MASP == masp).ToList();
            if (!danhGias.Any())
                return NotFound(new { message = "Sản phẩm này chưa có đánh giá nào." });

            return Ok(danhGias);
        }

        // 9. Thanh toán
        [HttpPost("thanhtoan")]
        public IActionResult ThanhToan(ThanhToan thanhToan)
        {
            _context.ThanhToans.Add(thanhToan);
            _context.SaveChanges();
            return Ok(new { message = "Thanh toán thành công.", thanhToan });
        }
    }
}
