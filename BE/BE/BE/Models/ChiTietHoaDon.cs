using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BE.Models
{
    
    public class ChiTietHoaDon
    {
        public int ID { get; set; } // Khóa chính

        [Key]
        [Required]
        [StringLength(10)]
        public string MACTHD { get; set; } // Mã chi tiết hóa đơn

        [Required]
        [StringLength(10)]
        public string MAHD { get; set; } // Mã hóa đơn (Foreign Key)

       
        [Required]
        [StringLength(10)]
        public string MASP { get; set; } // Mã sản phẩm (Foreign Key)

        [StringLength(50)]
        public string SIZE { get; set; } // Size sản phẩm

        public int? SOLUONG { get; set; } // Số lượng sản phẩm
        public int? THANHTIEN { get; set; } // Thành tiền
        public int? TINHTRANG { get; set; } // Tình trạng hóa đơn

        // Navigation properties
        [ForeignKey("MAHD")]
        public HoaDon HoaDon { get; set; }

        [ForeignKey("MASP")] // Chỉ định rõ ràng khóa ngoại
        public SanPham SanPham { get; set; }
      
        //public string SanPhamID { get; set; } // Không ánh xạ cột này vào cơ sở dữ liệu
    }



}
