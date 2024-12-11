using Microsoft.AspNetCore.Mvc;
using BE.Data;
using BE.Models;
using Microsoft.EntityFrameworkCore;

namespace BE.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ChiTietHoaDonController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public ChiTietHoaDonController(ApplicationDbContext context)
        {
            _context = context;
        }

        // Lấy chi tiết hóa đơn theo mã hóa đơn
        [HttpGet("get-by-mahd/{mahd}")]
        public async Task<IActionResult> GetChiTietHoaDon(string mahd)
        {
            var chiTietHoaDons = await _context.ChiTietHoaDons
                .Include(ct => ct.SanPham) // Thông tin sản phẩm
                .Where(ct => ct.MAHD == mahd)
                .Select(ct => new
                {
                    ct.MACTHD,
                    ct.MASP,
                    ct.SIZE,
                    ct.SOLUONG,
                    ct.THANHTIEN,
                    ct.TINHTRANG,
                    SanPham = new
                    {
                        ct.SanPham.TENSANPHAM,
                        ct.SanPham.GIA
                    }
                })
                .ToListAsync();

            if (chiTietHoaDons == null || !chiTietHoaDons.Any())
                return NotFound(new { Message = "Không có chi tiết hóa đơn" });

            return Ok(chiTietHoaDons);
        }
    }
}
