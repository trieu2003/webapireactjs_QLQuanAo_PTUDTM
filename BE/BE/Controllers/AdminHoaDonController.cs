using BE.Data;
using BE.Models;
using Microsoft.AspNetCore.Mvc;

namespace BE.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AdminHoaDonController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public AdminHoaDonController(ApplicationDbContext context)
        {
            _context = context;
        }

        // Get All Đơn Hàng
        [HttpGet("all")]
        public IActionResult GetAllHoaDon()
        {
            var hoaDons = _context.HoaDon.ToList();
            return Ok(hoaDons);
        }

        // Get Đơn Hàng by ID
        [HttpGet("{id}")]
        public IActionResult GetHoaDonById(int id)
        {
            var hoaDon = _context.HoaDon.FirstOrDefault(hd => hd.ID == id);
            if (hoaDon == null)
                return NotFound(new { Message = "Đơn hàng không tồn tại" });

            return Ok(hoaDon);
        }

        // Add Đơn Hàng
        [HttpPost("add")]
        public IActionResult AddHoaDon([FromBody] HoaDon hoaDon)
        {
            _context.HoaDon.Add(hoaDon);
            _context.SaveChanges();
            return Ok(new { Message = "Thêm đơn hàng thành công", HoaDon = hoaDon });
        }

        // Update Đơn Hàng
        [HttpPut("update/{id}")]
        public IActionResult UpdateHoaDon(int id, [FromBody] HoaDon updatedHoaDon)
        {
            var hoaDon = _context.HoaDon.FirstOrDefault(hd => hd.ID == id);
            if (hoaDon == null)
                return NotFound(new { Message = "Đơn hàng không tồn tại" });

            hoaDon.MAHD = updatedHoaDon.MAHD;
            hoaDon.MAND = updatedHoaDon.MAND;
            hoaDon.SOLUONG = updatedHoaDon.SOLUONG;
            hoaDon.NGAYDATHANG = updatedHoaDon.NGAYDATHANG;
            hoaDon.TONGTIEN = updatedHoaDon.TONGTIEN;
            hoaDon.TINHTRANG = updatedHoaDon.TINHTRANG;

            _context.SaveChanges();
            return Ok(new { Message = "Cập nhật đơn hàng thành công", HoaDon = hoaDon });
        }

        // Delete Đơn Hàng
        [HttpDelete("delete/{id}")]
        public IActionResult DeleteHoaDon(int id)
        {
            var hoaDon = _context.HoaDon.FirstOrDefault(hd => hd.ID == id);
            if (hoaDon == null)
                return NotFound(new { Message = "Đơn hàng không tồn tại" });

            _context.HoaDon.Remove(hoaDon);
            _context.SaveChanges();
            return Ok(new { Message = "Xóa đơn hàng thành công" });
        }
    }

}
