using BE.Data;
using BE.Models;
using Microsoft.AspNetCore.Mvc;
using System.Linq;

namespace BE.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AdminSanPhamController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public AdminSanPhamController(ApplicationDbContext context)
        {
            _context = context;
        }

        // Lấy danh sách tất cả sản phẩm
        [HttpGet("all")]
        public IActionResult GetAllSanPham()
        {
            try
            {
                var sanPhams = _context.SanPham
                    .Select(sp => new
                    {
                        sp.ID,
                        sp.MASP,
                        sp.TENSANPHAM,
                        sp.GIA,
                        sp.CHATLIEU,
                        sp.HINHANH,
                        LoaiSanPham = sp.LoaiSanPham.TENLOAI,
                        NhanHieu = sp.NhanHieu.TENNH,
                        KhuyenMai = sp.KhuyenMai != null ? sp.KhuyenMai.TENKM : "Không có khuyến mãi"
                    })
                    .ToList();

                return Ok(sanPhams);
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { message = "Lỗi khi lấy danh sách sản phẩm", error = ex.Message });
            }
        }

        // Lấy thông tin chi tiết sản phẩm
        [HttpGet("{id}")]
        public IActionResult GetSanPhamById(int id)
        {
            try
            {
                var sanPham = _context.SanPham
                    .Where(sp => sp.ID == id)
                    .Select(sp => new
                    {
                        sp.ID,
                        sp.MASP,
                        sp.TENSANPHAM,
                        sp.GIA,
                        sp.CHATLIEU,
                        sp.HINHANH,
                        LoaiSanPham = sp.LoaiSanPham.TENLOAI,
                        NhanHieu = sp.NhanHieu.TENNH,
                        KhuyenMai = sp.KhuyenMai != null ? sp.KhuyenMai.TENKM : "Không có khuyến mãi"
                    })
                    .FirstOrDefault();

                if (sanPham == null)
                {
                    return NotFound(new { message = "Không tìm thấy sản phẩm" });
                }

                return Ok(sanPham);
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { message = "Lỗi khi lấy thông tin sản phẩm", error = ex.Message });
            }
        }
        [HttpPost("add")]
        public IActionResult AddSanPham([FromBody] SanPham request)
        {
            try
            {
                // Kiểm tra dữ liệu đầu vào
                if (string.IsNullOrEmpty(request.MASP) || string.IsNullOrEmpty(request.TENSANPHAM))
                {
                    return BadRequest(new { message = "Mã sản phẩm và tên sản phẩm không được để trống" });
                }

                // Kiểm tra khóa ngoại
                if (!_context.LoaiSanPham.Any(lsp => lsp.MALOAI == request.MALOAI))
                {
                    return BadRequest(new { message = "Mã loại sản phẩm không tồn tại" });
                }

                if (!_context.NhanHieu.Any(nh => nh.MANH == request.MANH))
                {
                    return BadRequest(new { message = "Mã nhãn hiệu không tồn tại" });
                }

                if (!string.IsNullOrEmpty(request.MAKM) && !_context.KhuyenMai.Any(km => km.MAKM == request.MAKM))
                {
                    return BadRequest(new { message = "Mã khuyến mãi không tồn tại" });
                }

                // Thêm sản phẩm vào cơ sở dữ liệu
                _context.SanPham.Add(request);
                _context.SaveChanges();

                return Ok(new { message = "Thêm sản phẩm thành công" });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { message = "Lỗi khi thêm sản phẩm", error = ex.Message });
            }
        }
        [HttpPut("update/{id}")]
        public IActionResult UpdateSanPham(int id, [FromBody] SanPham request)
        {
            try
            {
                var sanPham = _context.SanPham.FirstOrDefault(sp => sp.ID == id);

                if (sanPham == null)
                {
                    return NotFound(new { message = "Không tìm thấy sản phẩm để cập nhật" });
                }

                // Kiểm tra dữ liệu
                if (!_context.LoaiSanPham.Any(lsp => lsp.MALOAI == request.MALOAI))
                {
                    return BadRequest(new { message = "Mã loại sản phẩm không tồn tại" });
                }

                if (!_context.NhanHieu.Any(nh => nh.MANH == request.MANH))
                {
                    return BadRequest(new { message = "Mã nhãn hiệu không tồn tại" });
                }

                if (!string.IsNullOrEmpty(request.MAKM) && !_context.KhuyenMai.Any(km => km.MAKM == request.MAKM))
                {
                    return BadRequest(new { message = "Mã khuyến mãi không tồn tại" });
                }

                // Cập nhật sản phẩm
                sanPham.MASP = request.MASP;
                sanPham.TENSANPHAM = request.TENSANPHAM;
                sanPham.GIA = request.GIA;
                sanPham.CHATLIEU = request.CHATLIEU;
                sanPham.MALOAI = request.MALOAI;
                sanPham.MANH = request.MANH;
                sanPham.MAKM = request.MAKM;
                sanPham.HINHANH = request.HINHANH;

                _context.SaveChanges();

                return Ok(new { message = "Cập nhật sản phẩm thành công" });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { message = "Lỗi khi cập nhật sản phẩm", error = ex.Message });
            }
        }
        [HttpDelete("delete/{id}")]
        public IActionResult DeleteSanPham(int id)
        {
            try
            {
                var sanPham = _context.SanPham.FirstOrDefault(sp => sp.ID == id);

                if (sanPham == null)
                {
                    return NotFound(new { message = "Không tìm thấy sản phẩm để xóa" });
                }

                // Xóa sản phẩm
                _context.SanPham.Remove(sanPham);
                _context.SaveChanges();

                return Ok(new { message = "Xóa sản phẩm thành công" });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { message = "Lỗi khi xóa sản phẩm", error = ex.Message });
            }
        }
        //[HttpGet("all")]
        //public IActionResult GetAllSanPham1()
        //{
        //    try
        //    {
        //        var sanPhams = _context.SanPham
        //            .Select(sp => new
        //            {
        //                sp.ID,
        //                sp.MASP,
        //                sp.TENSANPHAM,
        //                sp.GIA,
        //                sp.CHATLIEU,
        //                sp.HINHANH,
        //                LoaiSanPham = sp.LoaiSanPham != null ? sp.LoaiSanPham.TENLOAI : "Không có loại",
        //                NhanHieu = sp.NhanHieu != null ? sp.NhanHieu.TENNH : "Không có nhãn hiệu",
        //                KhuyenMai = sp.KhuyenMai != null ? sp.KhuyenMai.TENKM : "Không có khuyến mãi"
        //            })
        //            .ToList();

        //        return Ok(sanPhams);
        //    }
        //    catch (Exception ex)
        //    {
        //        return StatusCode(500, new { message = "Lỗi khi lấy danh sách sản phẩm", error = ex.Message });
        //    }
        //}


        //// Thêm mới sản phẩm
        //[HttpPost("add")]
        //public IActionResult AddSanPham([FromBody] SanPham request)
        //{
        //    try
        //    {
        //        if (string.IsNullOrEmpty(request.MASP) || string.IsNullOrEmpty(request.TENSANPHAM))
        //        {
        //            return BadRequest(new { message = "Mã sản phẩm và tên sản phẩm không được để trống" });
        //        }

        //        _context.SanPham.Add(request);
        //        _context.SaveChanges();

        //        return Ok(new { message = "Thêm sản phẩm thành công", data = request });
        //    }
        //    catch (Exception ex)
        //    {
        //        return StatusCode(500, new { message = "Lỗi khi thêm sản phẩm", error = ex.Message });
        //    }
        //}

        //// Sửa thông tin sản phẩm
        //[HttpPut("update/{id}")]
        //public IActionResult UpdateSanPham(int id, [FromBody] SanPham request)
        //{
        //    try
        //    {
        //        var sanPham = _context.SanPham.FirstOrDefault(sp => sp.ID == id);

        //        if (sanPham == null)
        //        {
        //            return NotFound(new { message = "Không tìm thấy sản phẩm để cập nhật" });
        //        }

        //        sanPham.MASP = request.MASP;
        //        sanPham.TENSANPHAM = request.TENSANPHAM;
        //        sanPham.GIA = request.GIA;
        //        sanPham.CHATLIEU = request.CHATLIEU;
        //        sanPham.HINHANH = request.HINHANH;
        //        sanPham.MALOAI = request.MALOAI;
        //        sanPham.MANH = request.MANH;
        //        sanPham.MAKM = request.MAKM;

        //        _context.SaveChanges();

        //        return Ok(new { message = "Cập nhật sản phẩm thành công", data = sanPham });
        //    }
        //    catch (Exception ex)
        //    {
        //        return StatusCode(500, new { message = "Lỗi khi cập nhật sản phẩm", error = ex.Message });
        //    }
        //}

        //// Xóa sản phẩm
        //[HttpDelete("delete/{id}")]
        //public IActionResult DeleteSanPham(int id)
        //{
        //    try
        //    {
        //        var sanPham = _context.SanPham.FirstOrDefault(sp => sp.ID == id);

        //        if (sanPham == null)
        //        {
        //            return NotFound(new { message = "Không tìm thấy sản phẩm để xóa" });
        //        }

        //        _context.SanPham.Remove(sanPham);
        //        _context.SaveChanges();

        //        return Ok(new { message = "Xóa sản phẩm thành công" });
        //    }
        //    catch (Exception ex)
        //    {
        //        return StatusCode(500, new { message = "Lỗi khi xóa sản phẩm", error = ex.Message });
        //    }
        //}
    }
}
