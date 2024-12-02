namespace BE.Models
{
    public class TaiKhoanUser
    {
        public int ID { get; set; }

        public string MAUSER { get; set; }
        public string TENTK { get; set; }
        public string MATKHAU { get; set; }
        public string MAQUYEN { get; set; }
        // Navigation properties
        public ICollection<DanhGia> DanhGias { get; set; }
    }
}
