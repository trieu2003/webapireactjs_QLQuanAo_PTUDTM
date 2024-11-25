using BE.Data;
using BE.Models;
using Microsoft.AspNetCore.Mvc;

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

        // Get All Sản Phẩm
        [HttpGet("all")]
        public IActionResult GetAllSanPham()
        {
            var sanPhams = _context.SanPham.ToList();
            return Ok(sanPhams);
        }

        // Get Sản Phẩm by ID
        [HttpGet("{id}")]
        public IActionResult GetSanPhamById(int id)
        {
            var sanPham = _context.SanPham.FirstOrDefault(sp => sp.ID == id);
            if (sanPham == null)
                return NotFound(new { Message = "Sản phẩm không tồn tại" });

            return Ok(sanPham);
        }

        // Add Sản Phẩm
        [HttpPost("add")]
        public IActionResult AddSanPham([FromBody] SanPham sanPham)
        {
            _context.SanPham.Add(sanPham);
            _context.SaveChanges();
            return Ok(new { Message = "Thêm sản phẩm thành công", SanPham = sanPham });
        }

        // Update Sản Phẩm
        [HttpPut("update/{id}")]
        public IActionResult UpdateSanPham(int id, [FromBody] SanPham updatedSanPham)
        {
            var sanPham = _context.SanPham.FirstOrDefault(sp => sp.ID == id);
            if (sanPham == null)
                return NotFound(new { Message = "Sản phẩm không tồn tại" });

            sanPham.MASP = updatedSanPham.MASP;
            sanPham.MALOAI = updatedSanPham.MALOAI;
            sanPham.TENSANPHAM = updatedSanPham.TENSANPHAM;
            sanPham.GIA = updatedSanPham.GIA;
            sanPham.CHATLIEU = updatedSanPham.CHATLIEU;
            sanPham.MANH = updatedSanPham.MANH;
            sanPham.HINHANH = updatedSanPham.HINHANH;
            sanPham.MAKM = updatedSanPham.MAKM;

            _context.SaveChanges();
            return Ok(new { Message = "Cập nhật sản phẩm thành công", SanPham = sanPham });
        }

        // Delete Sản Phẩm
        [HttpDelete("delete/{id}")]
        public IActionResult DeleteSanPham(int id)
        {
            var sanPham = _context.SanPham.FirstOrDefault(sp => sp.ID == id);
            if (sanPham == null)
                return NotFound(new { Message = "Sản phẩm không tồn tại" });

            _context.SanPham.Remove(sanPham);
            _context.SaveChanges();
            return Ok(new { Message = "Xóa sản phẩm thành công" });
        }
    }

}
