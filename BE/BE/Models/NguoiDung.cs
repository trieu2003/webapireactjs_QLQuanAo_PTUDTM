using System.ComponentModel.DataAnnotations;

namespace BE.Models
{
    public class NguoiDung
    {
     
        public int ID { get; set; }
        
        public string MAND { get; set; }
        public string TENND { get; set; }
        public string EMAIL { get; set; }
        public string DIACHI { get; set; }
        public string SODIENTHOAI { get; set; }
        public string MAUSER { get; set; }

        // Navigation properties
        public ICollection<GioHang> GioHangs { get; set; }
        public ICollection<DanhGia> DanhGias { get; set; }
    
}
}
