using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BE.Models
{
    [Table("ThanhToan")] // Bảo đảm ánh xạ đúng với tên bảng trong cơ sở dữ liệu
    public class ThanhToan
    {
        [Key]
        public int ID { get; set; }
        [Required]
        public string MATHANHTOAN { get; set; } // Unique Key
        [Required]
        public string MAHD { get; set; }
        [Required]
        public string MAND { get; set; }
        public DateTime NgayThanhToan { get; set; }
        public int TongTien { get; set; }
        public int PhuongThucThanhToan { get; set; }

        // Navigation properties
        [ForeignKey("MAND")]
        public NguoiDung NguoiDung { get; set; }

        [ForeignKey("MAHD")]
        public HoaDon HoaDon { get; set; }
    }

}
