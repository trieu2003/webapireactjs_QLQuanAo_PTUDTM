using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BE.Models
{
    public class KhuyenMai
    {
        [Key]
        [MaxLength(10)]
        public string MAKM { get; set; } // Mã khuyến mãi (Primary Key)

        [MaxLength(255)]
        public string TENKM { get; set; } // Tên khuyến mãi

        [Required]
        public int PHANTRAMGIAM { get; set; } // Phần trăm giảm giá

        [Required]
        public DateTime NGAYBD { get; set; } // Ngày bắt đầu

        [Required]
        public DateTime NGAYKT { get; set; } // Ngày kết thúc

        // Navigation property
        public ICollection<SanPham> SanPhams { get; set; }
    }
}
