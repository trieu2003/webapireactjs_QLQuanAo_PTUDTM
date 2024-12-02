using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BE.Models
{
    [Table("chitiethoadon")]
    public class ChiTietHoaDon
    {
        [Key]
        public int ID { get; set; } // Khóa chính

        [Required]
        [StringLength(10)]
        public string MACTHD { get; set; } // Mã chi tiết hóa đơn

        [StringLength(10)]
        public string MAHD { get; set; } // Mã hóa đơn (Foreign Key)

        [StringLength(10)]
        public string MASP { get; set; } // Mã sản phẩm (Foreign Key)

        [StringLength(50)]
        public string SIZE { get; set; } // Size sản phẩm

        public int? SOLUONG { get; set; } // Số lượng sản phẩm

        public int? THANHTIEN { get; set; } // Thành tiền

        public int? TINHTRANG { get; set; } // Tình trạng hóa đơn

        [Timestamp]
        public byte[] RowVersion { get; set; } // Dùng để kiểm soát đồng bộ (timestamp)

        // Navigation Properties
        [ForeignKey("MAHD")]
        public HoaDon HoaDon { get; set; } // Tham chiếu đến bảng HoaDon

        [ForeignKey("MASP")]
        public SanPham SanPham { get; set; } // Tham chiếu đến bảng SanPham
    }
}
