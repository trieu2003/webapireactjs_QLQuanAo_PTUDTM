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
using Microsoft.EntityFrameworkCore;

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

        //// 1. Xem giỏ hàng
        //[HttpGet("giohang/{mand}")]
        //public IActionResult GetGioHang(string mand)
        //{
        //    var gioHang = _context.GioHangs
        //        .Where(gh => gh.MAND == mand)
        //        .ToList();
        //    if (!gioHang.Any())
        //        return NotFound(new { message = "Giỏ hàng trống hoặc không tồn tại." });

        //    return Ok(gioHang);
        //}

        // 1. Xem giỏ hàng
        [HttpGet("giohang/{mand}")]
        public IActionResult GetGioHang(string mand)
        {
            var gioHang = _context.GioHangs
                .Where(gh => gh.MAND == mand)
                .Include(gh => gh.SanPham ) // Include thông tin sản phẩm liên quan
                .Select(gh => new
                {
                        gh.ID,
                    gh.MAGH,
                    gh.MAND,
                    gh.MASP,
                    gh.SIZE,
                    gh.SOLUONG,
                    gh.THANHTIEN,
                    gh.TINHTRANG,
                    SanPham = new
                    {
                        gh.SanPham.TENSANPHAM,
                        gh.SanPham.GIA,
                        gh.SanPham.HINHANH
                    }
                })
                .ToList();

            if (!gioHang.Any())
                return NotFound(new { message = "Giỏ hàng trống hoặc không tồn tại." });

            return Ok(gioHang);
        }

        //[HttpPost("giohang/them")]
        //public IActionResult AddToGioHang([FromBody] GioHangInputModel input)
        //{
        //    // Kiểm tra sản phẩm có tồn tại hay không
        //    var sanPham = _context.SanPham.FirstOrDefault(sp => sp.MASP == input.MASP);
        //    if (sanPham == null)
        //    {
        //        return NotFound(new { message = "Sản phẩm không tồn tại." });
        //    }

        //    // Tính thành tiền
        //    int thanhtien = (int)(sanPham.GIA * input.SOLUONG);

        //    // Tạo mã giỏ hàng tự động (có thể thay đổi theo quy tắc của bạn)
        //    string newMAGH = "GH" + Guid.NewGuid().ToString("N").Substring(0, 8).ToUpper();

        //    // Tạo đối tượng giỏ hàng mới
        //    var gioHang = new GioHang
        //    {
        //        MAGH = newMAGH, // Gán giá trị tự động
        //        MAND = input.MAND,
        //        MASP = input.MASP,
        //        SIZE = input.SIZE,
        //        SOLUONG = input.SOLUONG,
        //        THANHTIEN = thanhtien,
        //        TINHTRANG = true
        //    };

        //    // Thêm vào database
        //    _context.GioHangs.Add(gioHang);
        //    _context.SaveChanges();

        //    return Ok(new { message = "Thêm sản phẩm vào giỏ hàng thành công.", gioHang });
        //}

        [HttpPost("giohang/them")]
        public IActionResult AddToGioHang([FromBody] GioHangInputModel input)
        {
            // Kiểm tra sản phẩm có tồn tại
            var sanPham = _context.SanPham.FirstOrDefault(sp => sp.MASP == input.MASP);
            if (sanPham == null)
                return NotFound(new { message = "Sản phẩm không tồn tại." });

            // Kiểm tra size có hợp lệ không
            if (string.IsNullOrEmpty(input.SIZE))
                return BadRequest(new { message = "Vui lòng chọn size sản phẩm." });

            // Kiểm tra sản phẩm đã tồn tại trong giỏ hàng hay chưa
            var existingItem = _context.GioHangs.FirstOrDefault(
                gh => gh.MAND == input.MAND && gh.MASP == input.MASP && gh.SIZE == input.SIZE);

            if (existingItem != null)
            {
                // Nếu đã tồn tại, tăng số lượng và thành tiền
                existingItem.SOLUONG += input.SOLUONG;
                existingItem.THANHTIEN += (int)(sanPham.GIA * input.SOLUONG);
            }
            else
            {
                // Nếu chưa tồn tại, thêm sản phẩm mới
                string newMAGH = "GH" + Guid.NewGuid().ToString("N").Substring(0, 8).ToUpper();
                var gioHang = new GioHang
                {
                    MAGH = newMAGH,
                    MAND = input.MAND,
                    MASP = input.MASP,
                    SIZE = input.SIZE,
                    SOLUONG = input.SOLUONG,
                    THANHTIEN = (int)(sanPham.GIA * input.SOLUONG),
                    TINHTRANG = false
                };
                _context.GioHangs.Add(gioHang);
            }

            _context.SaveChanges();
            return Ok(new { message = "Thêm sản phẩm vào giỏ hàng thành công." });
        }
        [HttpPut("giohang/capnhat/{id}")]
        public IActionResult UpdateGioHang(int id, [FromBody] GioHangInputModel input)
        {
            var gioHang = _context.GioHangs.Find(id);
            if (gioHang == null)
                return NotFound(new { message = "Không tìm thấy sản phẩm trong giỏ hàng." });

            var sanPham = _context.SanPham.FirstOrDefault(sp => sp.MASP == gioHang.MASP);
            if (sanPham == null)
                return NotFound(new { message = "Sản phẩm không tồn tại." });

            // Cập nhật số lượng và thành tiền
            gioHang.SOLUONG = input.SOLUONG;
            gioHang.SIZE = input.SIZE;
            gioHang.THANHTIEN = (int)(sanPham.GIA * input.SOLUONG);
            gioHang.TINHTRANG = false;

            _context.SaveChanges();
            return Ok(new { message = "Cập nhật giỏ hàng thành công." });
        }


        // 3. Cập nhật sản phẩm trong giỏ hàng
        //[HttpPut("giohang/capnhat/{id}")]
        //public IActionResult UpdateGioHang(int id, [FromBody] GioHang updatedGioHang)
        //{
        //    var gioHang = _context.GioHangs.Find(id);
        //    if (gioHang == null)
        //        return NotFound(new { message = "Không tìm thấy sản phẩm trong giỏ hàng." });

        //    gioHang.SOLUONG = updatedGioHang.SOLUONG;
        //    gioHang.THANHTIEN = updatedGioHang.THANHTIEN;
        //    _context.SaveChanges();

        //    return Ok(new { message = "Cập nhật giỏ hàng thành công." });
        //}

        // 4. Xóa sản phẩm khỏi giỏ hàng
        //[HttpDelete("giohang/xoa/{id}")]
        //public IActionResult RemoveFromGioHang(int id)
        //{
        //    var gioHang = _context.GioHangs.Find(id);
        //    if (gioHang == null)
        //        return NotFound(new { message = "Không tìm thấy sản phẩm trong giỏ hàng." });

        //    _context.GioHangs.Remove(gioHang);
        //    _context.SaveChanges();

        //    return Ok(new { message = "Xóa sản phẩm khỏi giỏ hàng thành công." });
        //}
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


        [HttpGet("sanpham/sizes/{masp}")]
        public IActionResult GetSizesByProduct(string masp)
        {
            var sizes = _context.Sizes
                .Where(size => size.MASP == masp)
                .Select(size => size.SIZESP)
                .ToList();

            if (!sizes.Any())
                return NotFound(new { message = "Không tìm thấy size nào cho sản phẩm này." });

            return Ok(sizes);
        }


        //[HttpGet("sanpham/sizes/{id}")]
        //public IActionResult GetSizesByProduct(int id)
        //{
        //    // Nếu ID không phải là MASP, ánh xạ từ ID sang MASP
        //    var masp = _context.SanPham.FirstOrDefault(sp => sp.ID == id)?.MASP;
        //    if (masp == null)
        //        return NotFound(new { message = "Không tìm thấy sản phẩm này." });

        //    var sizes = _context.Sizes
        //        .Where(size => size.MASP == masp)
        //        .Select(size => size.SIZESP)
        //        .ToList();

        //    if (!sizes.Any())
        //        return NotFound(new { message = "Không tìm thấy size nào cho sản phẩm này." });

        //    return Ok(sizes);
        //}
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

        //// 7. Thêm đánh giá cho sản phẩm
        //[HttpPost("danhgia/them")]
        //public IActionResult AddDanhGia([FromBody] DanhGiaInputModel input)
        //{
        //    if (input == null || string.IsNullOrEmpty(input.MASP) || input.SOSAO == null)
        //        return BadRequest(new { message = "Vui lòng cung cấp đầy đủ thông tin (Mã sản phẩm, số sao, nội dung đánh giá)." });

        //    // Tạo đối tượng đánh giá
        //    var danhGia = new DanhGia
        //    {
        //        MAND = input.MAND,
        //        MASP = input.MASP,
        //        NOIDUNG = input.NOIDUNG,
        //        SOSAO = input.SOSAO,
        //        TINHTRANG = 1, // Tạm mặc định trạng thái là 1
        //        MADANHGIA = "DG" + Guid.NewGuid().ToString("N").Substring(0, 8).ToUpper()
        //    };

        //    _context.DanhGias.Add(danhGia);
        //    _context.SaveChanges();

        //    return Ok(new { message = "Thêm đánh giá thành công.", danhGia });
        //}




        [HttpPost("thanhtoan")]
        public IActionResult ThanhToan([FromBody] ThanhToanInputModel input)
        {
            // Kiểm tra đầu vào
            if (input == null || string.IsNullOrEmpty(input.MAND))
            {
                return BadRequest(new { message = "Dữ liệu thanh toán không hợp lệ." });
            }

            try
            {
                // Gọi stored procedure SP_XuLyGioHang
                var commandText = "EXEC SP_XuLyGioHang @MAND = {0}, @PhuongThucThanhToan = {1}, @NgayThanhToan = {2}";
                _context.Database.ExecuteSqlRaw(commandText, input.MAND, input.PhuongThucThanhToan, DateTime.Now);

                // Nếu không có lỗi, trả về kết quả thành công
                return Ok(new { message = "Thanh toán thành công và giỏ hàng đã được chuyển thành hóa đơn." });
            }
            catch (Exception ex)
            {
                // Nếu có lỗi, trả về mã lỗi và thông báo lỗi
                return StatusCode(500, new { message = "Đã xảy ra lỗi khi thực hiện thanh toán: " + ex.Message });
            }
        }



        // API 1: Lấy danh sách các đánh giá về cửa hàng
        [HttpGet("danhgia/shop")]
        public IActionResult GetDanhGiaShop()
        {
            var danhGias = _context.DanhGias
                .Where(dg => dg.TINHTRANG == 1) // Chỉ lấy các đánh giá hợp lệ
                .Select(dg => new
                {
                    dg.MAND,
                    dg.NOIDUNG,
                    dg.SOSAO,
                    dg.MACTHD // Thông tin này có thể cần để biết đơn hàng nào đã đánh giá
                })
                .ToList();

            if (!danhGias.Any())
            {
                return NotFound(new { message = "Chưa có đánh giá nào cho shop." });
            }

            return Ok(new { data = danhGias });
        }


        // API 2: Thêm đánh giá về cửa hàng (chỉ cho phép nếu đã mua sản phẩm và thanh toán)
        // 2. Thêm đánh giá cho sản phẩm
        // 2. Thêm đánh giá về shop (chỉ cho phép khi đã mua hàng)
        [HttpPost("danhgia/them")]
        public IActionResult AddDanhGia([FromBody] DanhGiaInputModel input)
        {
            // Kiểm tra đầu vào để đảm bảo thông tin đầy đủ
            if (input == null || string.IsNullOrEmpty(input.MAHD) || input.SOSAO == null)
            {
                return BadRequest(new { message = "Vui lòng cung cấp đầy đủ thông tin (Mã hóa đơn, số sao, nội dung đánh giá)." });
            }

            try
            {
                // Gọi stored procedure SP_ThemDanhGiaShop
                var commandText = "EXEC SP_ThemDanhGiaShop @MAND = {0}, @MAHD = {1}, @NOIDUNG = {2}, @SOSAO = {3}";
                _context.Database.ExecuteSqlRaw(commandText, input.MAND, input.MAHD, input.NOIDUNG, input.SOSAO);

                return Ok(new { message = "Thêm đánh giá cho shop thành công." });
            }
            catch (Exception ex)
            {
                // Xử lý lỗi, trả về thông báo lỗi nếu có vấn đề xảy ra trong quá trình thêm đánh giá
                return StatusCode(500, new { message = "Đã xảy ra lỗi khi thực hiện thêm đánh giá: " + ex.Message });
            }
        }

    }
}

public class ThanhToanInputModel
{
    public string MAND { get; set; } // Mã người dùng
    public int PhuongThucThanhToan { get; set; } // Phương thức thanh toán (0: Tiền mặt, 1: Thẻ,...)
}

public class GioHangInputModel
{
    public string MAND { get; set; } // Mã người dùng
    public string MASP { get; set; } // Mã sản phẩm
    public string SIZE { get; set; } // Kích thước
    public int SOLUONG { get; set; } // Số lượng
}
public class DanhGiaInputModel
{
    public string MAND { get; set; } // Mã người dùng
    public string MAHD { get; set; } // Mã hóa đơn (thay vì mã chi tiết hóa đơn)
    public string NOIDUNG { get; set; } // Nội dung đánh giá
    public int? SOSAO { get; set; } // Số sao đánh giá
}


