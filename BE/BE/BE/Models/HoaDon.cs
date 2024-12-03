using System.ComponentModel.DataAnnotations;

namespace BE.Models
{
    public class HoaDon
    {
        [Key]
        public int ID { get; set; }
        public string MAHD { get; set; }
        public string MAND { get; set; }
        public int? SOLUONG { get; set; }
        public DateTime? NGAYDATHANG { get; set; }
        public int? TONGTIEN { get; set; }
        public int? TINHTRANG { get; set; }
        // Navigation properties
        //public ThanhToan ThanhToan { get; set; }
        public ICollection<ChiTietHoaDon> ChiTietHoaDons { get; set; }

    }

}
