using BE.Data;
using BE.Models;
using Microsoft.AspNetCore.Mvc;

namespace BE.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AdminNguoiDungController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public AdminNguoiDungController(ApplicationDbContext context)
        {
            _context = context;
        }

        // Get All Người Dùng
        [HttpGet("all")]
        public IActionResult GetAllNguoiDung()
        {
            var nguoiDungs = _context.NguoiDung.ToList();
            return Ok(nguoiDungs);
        }

        // Get Người Dùng by ID
        [HttpGet("{id}")]
        public IActionResult GetNguoiDungById(int id)
        {
            var nguoiDung = _context.NguoiDung.FirstOrDefault(nd => nd.ID == id);
            if (nguoiDung == null)
                return NotFound(new { Message = "Người dùng không tồn tại" });

            return Ok(nguoiDung);
        }

        // Add Người Dùng
        [HttpPost("add")]
        public IActionResult AddNguoiDung([FromBody] NguoiDung nguoiDung)
        {
            _context.NguoiDung.Add(nguoiDung);
            _context.SaveChanges();
            return Ok(new { Message = "Thêm người dùng thành công", NguoiDung = nguoiDung });
        }

        // Update Người Dùng
        [HttpPut("update/{id}")]
        public IActionResult UpdateNguoiDung(int id, [FromBody] NguoiDung updatedNguoiDung)
        {
            var nguoiDung = _context.NguoiDung.FirstOrDefault(nd => nd.ID == id);
            if (nguoiDung == null)
                return NotFound(new { Message = "Người dùng không tồn tại" });

            nguoiDung.MAND = updatedNguoiDung.MAND;
            nguoiDung.TENND = updatedNguoiDung.TENND;
            nguoiDung.EMAIL = updatedNguoiDung.EMAIL;
            nguoiDung.DIACHI = updatedNguoiDung.DIACHI;
            nguoiDung.SODIENTHOAI = updatedNguoiDung.SODIENTHOAI;
            nguoiDung.MAUSER = updatedNguoiDung.MAUSER;

            _context.SaveChanges();
            return Ok(new { Message = "Cập nhật người dùng thành công", NguoiDung = nguoiDung });
        }

        // Delete Người Dùng
        [HttpDelete("delete/{id}")]
        public IActionResult DeleteNguoiDung(int id)
        {
            var nguoiDung = _context.NguoiDung.FirstOrDefault(nd => nd.ID == id);
            if (nguoiDung == null)
                return NotFound(new { Message = "Người dùng không tồn tại" });

            _context.NguoiDung.Remove(nguoiDung);
            _context.SaveChanges();
            return Ok(new { Message = "Xóa người dùng thành công" });
        }
    }

}
