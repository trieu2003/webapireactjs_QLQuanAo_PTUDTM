//using Microsoft.AspNetCore.Mvc;
//using BE.Data;
//using BE.Models;
//using Microsoft.EntityFrameworkCore;

//namespace BE.Controllers
//{
//    [Route("api/[controller]")]
//    [ApiController]
//    public class KhachHangController : ControllerBase
//    {
//        private readonly ApplicationDbContext _context;

//        public KhachHangController(ApplicationDbContext context)
//        {
//            _context = context;
//        }

//        // 1. Xem giỏ hàng
//        [HttpGet("giohang/{mand}")]
//        public IActionResult GetGioHang(string mand)
//        {
//            var gioHang = _context.GioHangs
//                .Where(gh => gh.MAND == mand)
//                .Include(gh => gh.TINHTRANG) // Load thông tin sản phẩm nếu cần
//                .ToList();

//            if (!gioHang.Any())
//                return NotFound(new { message = "Giỏ hàng trống hoặc không tồn tại." });

//            return Ok(new { data = gioHang });
//        }

//        //// 2. Thêm sản phẩm vào giỏ hàng
//        //[HttpPost("giohang/them")]
//        //public IActionResult AddToGioHang(GioHang gioHang)
//        //{
//        //    if (gioHang == null)
//        //        return BadRequest(new { message = "Dữ liệu không hợp lệ." });

//        //    // Kiểm tra sản phẩm có trong giỏ hàng chưa
//        //    var existingItem = _context.GioHangs.FirstOrDefault(gh => gh.MAND == gioHang.MAND && gh.MASP == gioHang.MASP);
//        //    if (existingItem != null)
//        //    {
//        //        existingItem.SOLUONG += gioHang.SOLUONG;
//        //        existingItem.THANHTIEN += gioHang.THANHTIEN;
//        //    }
//        //    else
//        //    {
//        //        _context.GioHangs.Add(gioHang);
//        //    }

//        //    _context.SaveChanges();
//        //    return Ok(new { message = "Thêm sản phẩm vào giỏ hàng thành công." });
//        //}

//        //// 3. Cập nhật giỏ hàng
//        //[HttpPut("giohang/capnhat/{id}")]
//        //public IActionResult UpdateGioHang(int id, GioHang updatedGioHang)
//        //{
//        //    var gioHang = _context.GioHangs.Find(id);
//        //    if (gioHang == null)
//        //        return NotFound(new { message = "Không tìm thấy sản phẩm trong giỏ hàng." });

//        //    gioHang.SOLUONG = updatedGioHang.SOLUONG;
//        //    gioHang.THANHTIEN = updatedGioHang.THANHTIEN;

//        //    _context.SaveChanges();
//        //    return Ok(new { message = "Cập nhật giỏ hàng thành công." });
//        //}

//        //// 4. Xóa sản phẩm khỏi giỏ hàng
//        //[HttpDelete("giohang/xoa/{id}")]
//        //public IActionResult RemoveFromGioHang(int id)
//        //{
//        //    var gioHang = _context.GioHangs.Find(id);
//        //    if (gioHang == null)
//        //        return NotFound(new { message = "Không tìm thấy sản phẩm trong giỏ hàng." });

//        //    _context.GioHangs.Remove(gioHang);
//        //    _context.SaveChanges();
//        //    return Ok(new { message = "Xóa sản phẩm khỏi giỏ hàng thành công." });
//        //}

//        //// 5. Tạo hóa đơn
//        //[HttpPost("hoadon/tao")]
//        //public IActionResult CreateHoaDon(HoaDon hoaDon)
//        //{
//        //    if (hoaDon == null || string.IsNullOrEmpty(hoaDon.MAND))
//        //        return BadRequest(new { message = "Dữ liệu hóa đơn không hợp lệ." });

//        //    hoaDon.NGAYDATHANG = DateTime.Now; // Set ngày đặt hàng hiện tại
//        //    _context.HoaDon.Add(hoaDon);

//        //    // Thêm chi tiết hóa đơn từ giỏ hàng
//        //    var gioHang = _context.GioHangs.Where(gh => gh.MAND == hoaDon.MAND).ToList();
//        //    if (gioHang.Any())
//        //    {
//        //        foreach (var item in gioHang)
//        //        {
//        //            _context.ChiTietHoaDons.Add(new ChiTietHoaDon
//        //            {
//        //                MAHD = hoaDon.MAHD,
//        //                MASP = item.MASP,
//        //                SOLUONG = item.SOLUONG,
//        //                THANHTIEN = item.THANHTIEN
//        //            });
//        //        }
//        //        _context.GioHangs.RemoveRange(gioHang); // Xóa giỏ hàng sau khi tạo hóa đơn
//        //    }

//        //    _context.SaveChanges();
//        //    return Ok(new { message = "Tạo hóa đơn thành công.", data = hoaDon });
//        //}

//        ////// 6. Xem lịch sử hóa đơn
//        ////[HttpGet("hoadon/lichsu/{mand}")]
//        ////public IActionResult GetHoaDonHistory(string mand)
//        ////{
//        ////    var hoaDons = _context.HoaDon
//        ////        .Where(hd => hd.MAND == mand)
//        ////        .Include(hd => hd.ChiTietHoaDons)
//        ////        .ThenInclude(ct => ct.SanPham)
//        ////        .ToList();

//        ////    if (!hoaDons.Any())
//        ////        return NotFound(new { message = "Không tìm thấy hóa đơn nào." });

//        ////    return Ok(new { data = hoaDons });
//        ////}

//        //// 7. Thêm đánh giá sản phẩm
//        //[HttpPost("danhgia/them")]
//        //public IActionResult AddDanhGia(DanhGia danhGia)
//        //{
//        //    if (danhGia == null || string.IsNullOrEmpty(danhGia.MASP))
//        //        return BadRequest(new { message = "Dữ liệu đánh giá không hợp lệ." });

//        //    _context.DanhGias.Add(danhGia);
//        //    _context.SaveChanges();
//        //    return Ok(new { message = "Thêm đánh giá thành công." });
//        //}

//        //// 8. Xem đánh giá của sản phẩm
//        //[HttpGet("danhgia/sanpham/{masp}")]
//        //public IActionResult GetDanhGiaBySanPham(string masp)
//        //{
//        //    var danhGias = _context.DanhGias.Where(dg => dg.MASP == masp).ToList();
//        //    if (!danhGias.Any())
//        //        return NotFound(new { message = "Sản phẩm này chưa có đánh giá nào." });

//        //    return Ok(new { data = danhGias });
//        //}

//        //// 9. Thanh toán
//        //[HttpPost("thanhtoan")]
//        //public IActionResult ThanhToan(ThanhToan thanhToan)
//        //{
//        //    if (thanhToan == null || string.IsNullOrEmpty(thanhToan.MAHD))
//        //        return BadRequest(new { message = "Dữ liệu thanh toán không hợp lệ." });

//        //    thanhToan.NgayThanhToan = DateTime.Now; // Set ngày thanh toán hiện tại
//        //    _context.ThanhToans.Add(thanhToan);

//        //    // Cập nhật trạng thái hóa đơn
//        //    var hoaDon = _context.HoaDon.FirstOrDefault(hd => hd.MAHD == thanhToan.MAHD);
//        //    if (hoaDon != null)
//        //        hoaDon.TINHTRANG = 1; // Đã thanh toán

//        //    _context.SaveChanges();
//        //    return Ok(new { message = "Thanh toán thành công.", data = thanhToan });
//        //}
//    }
//}
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
            var gioHang = _context.GioHangs
                .Where(gh => gh.MAND == mand)
                .ToList();
            if (!gioHang.Any())
                return NotFound(new { message = "Giỏ hàng trống hoặc không tồn tại." });

            return Ok(gioHang);
        }
        [HttpPost("giohang/them")]
        public IActionResult AddToGioHang([FromBody] GioHangInputModel input)
        {
            // Kiểm tra sản phẩm có tồn tại hay không
            var sanPham = _context.SanPham.FirstOrDefault(sp => sp.MASP == input.MASP);
            if (sanPham == null)
            {
                return NotFound(new { message = "Sản phẩm không tồn tại." });
            }

            // Tính thành tiền
            int thanhtien = (int)(sanPham.GIA * input.SOLUONG);

            // Tạo mã giỏ hàng tự động (có thể thay đổi theo quy tắc của bạn)
            string newMAGH = "GH" + Guid.NewGuid().ToString("N").Substring(0, 8).ToUpper();

            // Tạo đối tượng giỏ hàng mới
            var gioHang = new GioHang
            {
                MAGH = newMAGH, // Gán giá trị tự động
                MAND = input.MAND,
                MASP = input.MASP,
                SIZE = input.SIZE,
                SOLUONG = input.SOLUONG,
                THANHTIEN = thanhtien,
                TINHTRANG = true
            };

            // Thêm vào database
            _context.GioHangs.Add(gioHang);
            _context.SaveChanges();

            return Ok(new { message = "Thêm sản phẩm vào giỏ hàng thành công.", gioHang });
        }



        // 3. Cập nhật sản phẩm trong giỏ hàng
        [HttpPut("giohang/capnhat/{id}")]
        public IActionResult UpdateGioHang(int id, [FromBody] GioHang updatedGioHang)
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
            if (hoaDon == null)
                return BadRequest(new { message = "Dữ liệu không hợp lệ." });

            _context.HoaDon.Add(hoaDon);
            _context.SaveChanges();

            return Ok(new { message = "Tạo hóa đơn thành công.", hoaDon });
        }

        // 6. Xem lịch sử hóa đơn
        [HttpGet("hoadon/lichsu/{mand}")]
        public IActionResult GetHoaDonHistory(string mand)
        {
            var hoaDons = _context.HoaDon
                .Where(hd => hd.MAND == mand)
                .ToList();

            if (!hoaDons.Any())
                return NotFound(new { message = "Không tìm thấy hóa đơn nào." });

            return Ok(hoaDons);
        }

        // 7. Thêm đánh giá cho sản phẩm
        [HttpPost("danhgia/them")]
        public IActionResult AddDanhGia(DanhGia danhGia)
        {
            if (danhGia == null)
                return BadRequest(new { message = "Dữ liệu không hợp lệ." });

            _context.DanhGias.Add(danhGia);
            _context.SaveChanges();

            return Ok(new { message = "Thêm đánh giá thành công.", danhGia });
        }

        // 8. Xem đánh giá của sản phẩm
        [HttpGet("danhgia/sanpham/{masp}")]
        public IActionResult GetDanhGiaBySanPham(string masp)
        {
            var danhGias = _context.DanhGias
                .Where(dg => dg.MASP == masp)
                .ToList();

            if (!danhGias.Any())
                return NotFound(new { message = "Sản phẩm này chưa có đánh giá nào." });

            return Ok(danhGias);
        }

        // 9. Thanh toán
        [HttpPost("thanhtoan")]
        public IActionResult ThanhToan(ThanhToan thanhToan)
        {
            if (thanhToan == null)
                return BadRequest(new { message = "Dữ liệu không hợp lệ." });

            _context.ThanhToans.Add(thanhToan);
            _context.SaveChanges();

            return Ok(new { message = "Thanh toán thành công.", thanhToan });
        }
    }
}


public class GioHangInputModel
{
    public string MAND { get; set; } // Mã người dùng
    public string MASP { get; set; } // Mã sản phẩm
    public string SIZE { get; set; } // Kích thước
    public int SOLUONG { get; set; } // Số lượng
}
