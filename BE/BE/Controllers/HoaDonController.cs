using Microsoft.AspNetCore.Mvc;
using BE.Data;
using BE.Models;
using Microsoft.EntityFrameworkCore;

namespace BE.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class HoaDonController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public HoaDonController(ApplicationDbContext context)
        {
            _context = context;
        }

        // Lấy thông tin hóa đơn theo mã hóa đơn
        [HttpGet("get/{mahd}")]
        public async Task<IActionResult> GetHoaDon(string mahd)
        {
            var hoaDon = await _context.HoaDon
                .FirstOrDefaultAsync(h => h.MAHD == mahd);

            if (hoaDon == null)
                return NotFound(new { Message = "Hóa đơn không tồn tại" });

            return Ok(new
            {
                hoaDon.ID,
                hoaDon.MAHD,
                hoaDon.MAND,
                hoaDon.SOLUONG,
                hoaDon.NGAYDATHANG,
                hoaDon.TONGTIEN,
                hoaDon.TINHTRANG,
               
            });
        }

        //// Tạo mới hóa đơn
        //[HttpPost("create")]
        //public async Task<IActionResult> CreateHoaDon([FromBody] HoaDon hoaDon)
        //{
        //    if (hoaDon == null)
        //        return BadRequest(new { Message = "Dữ liệu không hợp lệ" });

        //    _context.HoaDon.Add(hoaDon);
        //    await _context.SaveChangesAsync();

        //    return Ok(new { Message = "Tạo hóa đơn thành công", HoaDon = hoaDon });
        //}
    }
}
