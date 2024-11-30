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
       
    }
}
