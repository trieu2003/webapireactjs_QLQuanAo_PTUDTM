using System.ComponentModel.DataAnnotations;

namespace BE.Models
{
    public class HoaDon
    {
        [Key]
        public int ID { get; set; } // ID tự động tăng
        [Required]
        public string MAHD { get; set; } // Mã hóa đơn, Unique Key
        [Required]
        public string MAND { get; set; } // Mã người dùng
        public int? SOLUONG { get; set; }
        public DateTime? NGAYDATHANG { get; set; }
        public int? TONGTIEN { get; set; }
        public int? TINHTRANG { get; set; }

        // Navigation properties
        public ICollection<ChiTietHoaDon> ChiTietHoaDons { get; set; }
    }


}
