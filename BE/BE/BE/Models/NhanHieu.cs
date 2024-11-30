using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BE.Models
{
    public class NhanHieu
    {
        [Key]
        public int ID { get; set; }

        [Required]
        [MaxLength(10)]
        public string MANH { get; set; }

        [MaxLength(500)]
        public string TENNH { get; set; }

        [MaxLength(500)]
        public string QUOCGIA { get; set; }

        // Navigation property
        public ICollection<SanPham> SanPhams { get; set; }
    }
}
