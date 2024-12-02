using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BE.Models
{
    [Table("giohang")]
    public class GioHang
    {
        [Key]
        public int ID { get; set; } // Khóa chính

        [Required]
        [StringLength(10)]
        public string MAGH { get; set; } // Mã giỏ hàng

        [StringLength(10)]
        public string MAND { get; set; } // Mã người dùng (Foreign Key)

        [StringLength(10)]
        public string MASP { get; set; } // Mã sản phẩm (Foreign Key)

        [Required]
        [StringLength(5)]
        public string SIZE { get; set; } // Kích thước

        public int? SOLUONG { get; set; } // Số lượng

        public int? THANHTIEN { get; set; } // Thành tiền

        [Required]
        public bool TINHTRANG { get; set; } // Tình trạng (true/false)

        // Navigation Properties
        [ForeignKey("MAND")]
        public NguoiDung NguoiDung { get; set; } // Tham chiếu đến bảng NguoiDung

        [ForeignKey("MASP")]
        public SanPham SanPham { get; set; } // Tham chiếu đến bảng SanPham
    }
}
