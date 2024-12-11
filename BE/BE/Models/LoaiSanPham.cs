using System.ComponentModel.DataAnnotations;

namespace BE.Models
{
    public class LoaiSanPham
    {
        [Key]
        [MaxLength(50)]
        public string MALOAI { get; set; } // Mã loại (Primary Key)

        [MaxLength(500)]
        public string TENLOAI { get; set; } // Tên loại

        // Navigation property
        public ICollection<SanPham> SanPhams { get; set; }
    }
}
