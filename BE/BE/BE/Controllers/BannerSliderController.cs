using BE.Data;
using Microsoft.AspNetCore.Mvc;
using System.Linq;

namespace BE.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BannerSliderController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public BannerSliderController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet("slider")]
        public IActionResult GetBannerSlider()
        {
            try
            {
                // Lấy 5 sản phẩm với giá cao nhất hoặc tiêu chí nổi bật
                var bannerProducts = _context.SanPham
                    .OrderByDescending(sp => sp.GIA) // Sắp xếp theo giá giảm dần
                    .Take(5) // Lấy tối đa 5 sản phẩm
                    .Select(sp => new
                    {
                        sp.ID,
                        sp.TENSANPHAM,
                        sp.GIA,
                        sp.HINHANH,
                        sp.CHATLIEU,
                        LoaiSanPham = sp.LoaiSanPham.TENLOAI,
                        NhanHieu = sp.NhanHieu.TENNH,
                        KhuyenMai = sp.KhuyenMai != null ? sp.KhuyenMai.TENKM : "Không có khuyến mãi"
                    })
                    .ToList();

                return Ok(bannerProducts);
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { message = "Lỗi khi lấy dữ liệu banner", error = ex.Message });
            }
        }


    }

}
