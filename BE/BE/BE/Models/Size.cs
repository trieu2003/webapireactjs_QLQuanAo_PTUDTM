using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BE.Models
{
    [Table("size")]
    public class Size
    {
        [Key]
        public int ID { get; set; } // Khóa chính

        [StringLength(10)]
        public string SIZESP { get; set; } // Size của sản phẩm

        [StringLength(10)]
        [ForeignKey("SanPham")] // Khóa ngoại trỏ tới bảng SanPham
        public string MASP { get; set; } // Mã sản phẩm (Foreign Key)

        // Navigation Property
        //[ForeignKey("MASP")]
        //public SanPham SanPham { get; set; } // Tham chiếu đến bảng SanPham
       
        public SanPham SanPham { get; set; } // Tham chiếu đến bảng SanPham
    }
}
