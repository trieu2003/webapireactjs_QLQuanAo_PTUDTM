using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BE.Models
{
    public class SanPham
    {
        [Key] 
        public int ID { get; set; }

        [Required]
        [MaxLength(10)]
        public string MASP { get; set; }

        [Required]
        [MaxLength(50)]
        public string MALOAI { get; set; } // Foreign Key

        [Required]
        [MaxLength(500)]
        public string TENSANPHAM { get; set; }

        public double GIA { get; set; }

        [MaxLength(500)]
        public string CHATLIEU { get; set; }

        [MaxLength(10)]
        public string MANH { get; set; }

        [MaxLength(100)]
        public string HINHANH { get; set; }

        [MaxLength(10)]
        public string MAKM { get; set; } // Foreign Key

        // Navigation properties
        public LoaiSanPham LoaiSanPham { get; set; }
        public NhanHieu NhanHieu { get; set; }
        public KhuyenMai KhuyenMai { get; set; }
        public ICollection<GioHang> GioHangs { get; set; }
        // Navigation Property
        public ICollection<DanhGia> DanhGias { get; set; }
        public ICollection<ChiTietHoaDon> ChiTietHoaDons { get; set; }
        public ICollection<Size> Sizes { get; set; } // Danh sách size liên quan
    
    //public ICollection<GioHang> GioHangs { get; set; }



}
}
