using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BE.Models
{
    [Table("danhgia")]
    public class DanhGia
    {
        [Key]
        public int ID { get; set; }

        [StringLength(10)]
        public string MAND { get; set; } // Mã người dùng (Foreign Key)

        [Required]
        [StringLength(10)]
        public string MADANHGIA { get; set; } // Mã đánh giá

        [StringLength(10)]
        public string MACTHD { get; set; } // Mã chi tiết hóa đơn (Foreign Key)

        [StringLength(500)]
        public string NOIDUNG { get; set; } // Nội dung đánh giá

        public int? SOSAO { get; set; } // Số sao đánh giá

        [Required]
        public int TINHTRANG { get; set; } // Tình trạng (bắt buộc)
        public string MASP { get; set; } // Foreign Key

       
        //[ForeignKey("MAND")]
        //public NguoiDung NguoiDung { get; set; } // Tham chiếu đến bảng NguoiDung

        //[ForeignKey("MACTHD")]
        //public ChiTietHoaDon ChiTietHoaDon { get; set; } // Tham chiếu đến bảng ChiTietHoaDon

        //[ForeignKey("MASP")]
        //public SanPham SanPham { get; set; } // Tham chiếu đến bảng SanPham
 
    }
}
