using System.ComponentModel.DataAnnotations;

namespace BE.Models
{
    public class ThanhToan
    {
        [Key]
        public int ID { get; set; }
        public string MAHD { get; set; } // Mã hóa đơn
        public string MAND { get; set; } // Mã người dùng
        public DateTime NgayThanhToan { get; set; }
        public int TongTien { get; set; }

        // Navigation property
        public HoaDon HoaDon { get; set; }
        public NguoiDung NguoiDung { get; set; }
    }
}
