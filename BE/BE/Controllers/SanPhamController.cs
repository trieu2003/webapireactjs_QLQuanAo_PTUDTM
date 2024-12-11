using Microsoft.AspNetCore.Mvc;
using BE.Data;
using BE.Models;
using System.Linq;

namespace BE.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class SanPhamController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public SanPhamController(ApplicationDbContext context)
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
                        //KhuyenMai = sp.KhuyenMai != null ? sp.KhuyenMai.TENKM : "Không có khuyến mãi"
                        KhuyenMai = sp.KhuyenMai != null ? sp.KhuyenMai.TENKM : "Không có khuyến mãi",
                        PhanTramGiam = sp.KhuyenMai != null ? sp.KhuyenMai.PHANTRAMGIAM : 0,
                         MoTa = _context.MoTaSanPham
                    .Where(mt => mt.MASP == sp.MASP)
                    .Select(mt => mt.MoTa)
                    .FirstOrDefault() // Lấy mô tả từ bảng MoTaSanPham
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
                        // KhuyenMai = sp.KhuyenMai != null ? sp.KhuyenMai.TENKM : "Không có khuyến mãi",
                        //PhanTramGiam = sp.KhuyenMai != null ? sp.KhuyenMai.PHANTRAMGIAM : 0,
                        MoTa = _context.MoTaSanPham
                    .Where(mt => mt.MASP == sp.MASP)
                    .Select(mt => mt.MoTa)
                    .FirstOrDefault() // Lấy mô tả từ bảng MoTaSanPham
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

        // Lấy danh sách sản phẩm theo loại
        [HttpGet("by-category/{categoryId}")]
        public IActionResult GetSanPhamByCategory(string categoryId)
        {
            try
            {
                var sanPhams = _context.SanPham
                    .Where(sp => sp.MALOAI == categoryId)
                    .Select(sp => new
                    {
                        sp.ID,
                        sp.MASP,
                        sp.TENSANPHAM,
                        sp.GIA,
                        sp.HINHANH
                    })
                    .ToList();

                if (!sanPhams.Any())
                {
                    return NotFound(new { message = "Không có sản phẩm nào trong loại này" });
                }

                return Ok(sanPhams);
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { message = "Lỗi khi lấy sản phẩm theo loại", error = ex.Message });
            }
        }

        // Lấy danh sách sản phẩm nổi bật (ví dụ: dựa trên khuyến mãi hoặc giá trị khác)
        [HttpGet("featured")]
        public IActionResult GetFeaturedSanPham()
        {
            try
            {
                var sanPhams = _context.SanPham
                    .Where(sp => sp.KhuyenMai != null) // Sản phẩm có khuyến mãi
                    .Select(sp => new
                    {
                        sp.ID,
                        sp.MASP,
                        sp.TENSANPHAM,
                        sp.GIA,
                        sp.HINHANH,
                        KhuyenMai = sp.KhuyenMai.TENKM
                    })
                    .ToList();

                return Ok(sanPhams);
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { message = "Lỗi khi lấy sản phẩm nổi bật", error = ex.Message });
            }
        }

        [HttpGet("search")]
        public IActionResult SearchSanPham([FromQuery] string keyword)
        {
            try
            {
                var sanPhams = _context.SanPham
                    .Where(sp => sp.TENSANPHAM.Contains(keyword))
                    .Select(sp => new
                    {
                        sp.ID,
                        sp.MASP,
                        sp.TENSANPHAM,
                        sp.GIA,
                        sp.HINHANH
                    })
                    .ToList();

                if (!sanPhams.Any())
                {
                    return NotFound(new { message = "Không tìm thấy sản phẩm nào với từ khóa này" });
                }

                return Ok(sanPhams);
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { message = "Lỗi khi tìm kiếm sản phẩm", error = ex.Message });
            }
        }
        [HttpGet("by-discount/{discountCode}")]
        public IActionResult GetSanPhamByDiscount(string discountCode)
        {
            try
            {
                var sanPhams = _context.SanPham
                    .Where(sp => sp.MAKM == discountCode)
                    .Select(sp => new
                    {
                        sp.ID,
                        sp.MASP,
                        sp.TENSANPHAM,
                        sp.GIA,
                        sp.HINHANH,
                        KhuyenMai = sp.KhuyenMai.TENKM
                    })
                    .ToList();

                if (!sanPhams.Any())
                {
                    return NotFound(new { message = "Không có sản phẩm nào thuộc mã khuyến mãi này" });
                }

                return Ok(sanPhams);
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { message = "Lỗi khi lấy sản phẩm theo khuyến mãi", error = ex.Message });
            }
        }
        [HttpGet("by-material/{material}")]
        public IActionResult GetSanPhamByMaterial(string material)
        {
            try
            {
                var sanPhams = _context.SanPham
                    .Where(sp => sp.CHATLIEU == material)
                    .Select(sp => new
                    {
                        sp.ID,
                        sp.MASP,
                        sp.TENSANPHAM,
                        sp.GIA,
                        sp.HINHANH
                    })
                    .ToList();

                if (!sanPhams.Any())
                {
                    return NotFound(new { message = "Không có sản phẩm nào với chất liệu này" });
                }

                return Ok(sanPhams);
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { message = "Lỗi khi lấy sản phẩm theo chất liệu", error = ex.Message });
            }
        }
        [HttpGet("filter")]
        public IActionResult FilterSanPham([FromQuery] double? minPrice, [FromQuery] double? maxPrice, [FromQuery] string category, [FromQuery] string material)
        {
            try
            {
                var query = _context.SanPham.AsQueryable();

                if (minPrice.HasValue)
                    query = query.Where(sp => sp.GIA >= minPrice.Value);

                if (maxPrice.HasValue)
                    query = query.Where(sp => sp.GIA <= maxPrice.Value);

                if (!string.IsNullOrEmpty(category))
                    query = query.Where(sp => sp.MALOAI == category);

                if (!string.IsNullOrEmpty(material))
                    query = query.Where(sp => sp.CHATLIEU == material);

                var sanPhams = query
                    .Select(sp => new
                    {
                        sp.ID,
                        sp.MASP,
                        sp.TENSANPHAM,
                        sp.GIA,
                        sp.HINHANH
                    })
                    .ToList();

                if (!sanPhams.Any())
                {
                    return NotFound(new { message = "Không có sản phẩm nào phù hợp với tiêu chí lọc" });
                }

                return Ok(sanPhams);
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { message = "Lỗi khi lọc sản phẩm", error = ex.Message });
            }
        }
        [HttpGet("by-price")]
        public IActionResult GetSanPhamByPrice([FromQuery] double? minPrice, [FromQuery] double? maxPrice)
        {
            try
            {
                // Truy vấn sản phẩm dựa trên giá
                var query = _context.SanPham.AsQueryable();

                if (minPrice.HasValue)
                {
                    query = query.Where(sp => sp.GIA >= minPrice.Value);
                }

                if (maxPrice.HasValue)
                {
                    query = query.Where(sp => sp.GIA <= maxPrice.Value);
                }

                var sanPhams = query
                    .Select(sp => new
                    {
                        sp.ID,
                        sp.MASP,
                        sp.TENSANPHAM,
                        sp.GIA,
                        sp.HINHANH
                    })
                    .ToList();

                if (!sanPhams.Any())
                {
                    return NotFound(new { message = "Không tìm thấy sản phẩm nào trong khoảng giá này" });
                }

                return Ok(sanPhams);
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { message = "Lỗi khi lấy sản phẩm theo giá", error = ex.Message });
            }
        }
        [HttpGet("with-discount")]
        public IActionResult GetSanPhamWithDiscount()
        {
            try
            {
                var sanPhams = _context.SanPham
                    .Where(sp => sp.MAKM != null) // Chỉ lấy sản phẩm có mã khuyến mãi
                    .Select(sp => new
                    {
                        sp.ID,
                        sp.MASP,
                        sp.TENSANPHAM,
                        sp.GIA,
                        sp.HINHANH,
                        KhuyenMai = sp.KhuyenMai != null ? sp.KhuyenMai.TENKM : "Không có khuyến mãi",
                        PhanTramGiam = sp.KhuyenMai != null ? sp.KhuyenMai.PHANTRAMGIAM : 0,
                        MoTa = _context.MoTaSanPham
                    .Where(mt => mt.MASP == sp.MASP)
                    .Select(mt => mt.MoTa)
                    .FirstOrDefault() // Lấy mô tả từ bảng MoTaSanPham
                    })
                    .ToList();

                if (!sanPhams.Any())
                {
                    return NotFound(new { message = "Không có sản phẩm nào có khuyến mãi" });
                }

                return Ok(sanPhams);
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { message = "Lỗi khi lấy danh sách sản phẩm khuyến mãi", error = ex.Message });
            }
        }

        [HttpGet]
        public IActionResult GetAllSanPhamAll(int pageIndex = 1, int pageSize = 10)
        {
            try
            {
                var sanPhams = _context.SanPham
                    .Skip((pageIndex - 1) * pageSize)  // Bỏ qua các sản phẩm đã được tải ở các trang trước
                    .Take(pageSize)  // Giới hạn số sản phẩm trả về theo pageSize
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
                        //KhuyenMai = sp.KhuyenMai != null ? sp.KhuyenMai.TENKM : "Không có khuyến mãi",
                        //PhanTramGiam = sp.KhuyenMai != null ? sp.KhuyenMai.PHANTRAMGIAM : 0,
                        MoTa = _context.MoTaSanPham
                            .Where(mt => mt.MASP == sp.MASP)
                            .Select(mt => mt.MoTa)
                            .FirstOrDefault() // Lấy mô tả từ bảng MoTaSanPham
                    })
                    .ToList();

                return Ok(sanPhams);
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { message = "Lỗi khi lấy danh sách sản phẩm", error = ex.Message });
            }
        }

    }
}
