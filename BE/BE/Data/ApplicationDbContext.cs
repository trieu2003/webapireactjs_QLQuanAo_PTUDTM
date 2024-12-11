////using Microsoft.EntityFrameworkCore;
////using BE.Models;
////using System.Collections.Generic;
////using System.Reflection.Emit;

////namespace BE.Data
////{
////    public class ApplicationDbContext : DbContext
////    {
////        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }

////        public DbSet<NguoiDung> NguoiDung { get; set; }
////        public DbSet<SanPham> SanPham { get; set; }
////        public DbSet<HoaDon> HoaDon { get; set; }
////        public DbSet<TaiKhoanUser> TaiKhoanUsers { get; set; }
////        public DbSet<NguoiDung> NguoiDungs { get; set; }
////        public DbSet<ThongTinAdmin> ThongTinAdmins { get; set; }
////        public DbSet<NhomQuyen> NhomQuyens { get; set; }
////        public DbSet<LoaiSanPham> LoaiSanPham { get; set; }
////        public DbSet<NhanHieu> NhanHieu { get; set; }
////        public DbSet<KhuyenMai> KhuyenMai { get; set; }
////        public DbSet<MoTaSanPham> MoTaSanPham { get; set; } // Thêm DbSet mới
////        public DbSet<Size> Sizes { get; set; }
////        public DbSet<GioHang> GioHangs { get; set; }
////        public DbSet<DanhGia> DanhGias { get; set; }

////        protected override void OnModelCreating(ModelBuilder modelBuilder)
////        {
////            // Định nghĩa khóa chính
////            modelBuilder.Entity<NguoiDung>().ToTable("nguoidung").HasKey(nd => nd.ID);
////            modelBuilder.Entity<SanPham>().ToTable("sanpham").HasKey(sp => sp.ID);
////            modelBuilder.Entity<HoaDon>().ToTable("hoadon").HasKey(hd => hd.ID);
////            modelBuilder.Entity<TaiKhoanUser>().ToTable("taikhoanuser").HasKey(tkus => tkus.ID);
////            modelBuilder.Entity<NhomQuyen>().ToTable("nhomquyen").HasKey(nq => nq.ID);
////            modelBuilder.Entity<ThongTinAdmin>().ToTable("thongtinadmin").HasKey(ttam => ttam.ID);
////            modelBuilder.Entity<KhuyenMai>().ToTable("khuyenmai").HasKey(km => km.MAKM);
////            modelBuilder.Entity<NhanHieu>().ToTable("nhanhieu").HasKey(nh => nh.ID);
////            modelBuilder.Entity<LoaiSanPham>().ToTable("loaisanpham").HasKey(ls => ls.MALOAI);
////            modelBuilder.Entity<MoTaSanPham>().ToTable("motasanpham").HasKey(mts => mts.Id);
////            modelBuilder.Entity<Size>().ToTable("size").HasKey(s => s.ID);
////            modelBuilder.Entity<GioHang>().ToTable("giohang").HasKey(gh => gh.ID);
////            modelBuilder.Entity<ThanhToan>().ToTable("thanhtoan").HasKey(tt => tt.ID);

////            // Quan hệ SanPham - LoaiSanPham
////            modelBuilder.Entity<SanPham>()
////                .HasOne(sp => sp.LoaiSanPham)
////                .WithMany(ls => ls.SanPhams)
////                .HasForeignKey(sp => sp.MALOAI)
////                .HasPrincipalKey(ls => ls.MALOAI);

////            // Quan hệ SanPham - NhanHieu
////            modelBuilder.Entity<SanPham>()
////                .HasOne(sp => sp.NhanHieu)
////                .WithMany(nh => nh.SanPhams)
////                .HasForeignKey(sp => sp.MANH)
////                .HasPrincipalKey(nh => nh.MANH);

////            // Quan hệ SanPham - KhuyenMai
////            modelBuilder.Entity<SanPham>()
////                .HasOne(sp => sp.KhuyenMai)
////                .WithMany(km => km.SanPhams)
////                .HasForeignKey(sp => sp.MAKM)
////                .HasPrincipalKey(km => km.MAKM);

////            // Quan hệ giữa BinhLuan - SanPham
////            modelBuilder.Entity<BinhLuan>()
////                .HasOne(bl => bl.SanPham)
////                .WithMany(sp => sp.BinhLuans)
////                .HasForeignKey(bl => bl.MASP)
////                .HasPrincipalKey(sp => sp.MASP);

////            // Quan hệ giữa GioHang - NguoiDung
////            modelBuilder.Entity<GioHang>()
////                .HasOne(gh => gh.NguoiDung)
////                .WithMany(nd => nd.GioHangs)
////                .HasForeignKey(gh => gh.MAND)
////                .HasPrincipalKey(nd => nd.MAND);

////            // Quan hệ giữa GioHang - SanPham
////            modelBuilder.Entity<GioHang>()
////                .HasOne(gh => gh.SanPham)
////                .WithMany(sp => sp.GioHangs)
////                .HasForeignKey(gh => gh.MASP)
////                .HasPrincipalKey(sp => sp.MASP);

////            // Quan hệ giữa ThanhToan - HoaDon
////            modelBuilder.Entity<ThanhToan>()
////                .HasOne(tt => tt.HoaDon)
////                .WithOne(hd => hd.ThanhToan)
////                .HasForeignKey<ThanhToan>(tt => tt.HoaDonID);

////            base.OnModelCreating(modelBuilder);


////        }
////    }
////}

//using Microsoft.EntityFrameworkCore;
//using BE.Models;

//namespace BE.Data
//{
//    public class ApplicationDbContext : DbContext
//    {
//        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }

//        // DbSet cho các bảng
//        public DbSet<NguoiDung> NguoiDung { get; set; }
//        public DbSet<SanPham> SanPham { get; set; }
//        public DbSet<HoaDon> HoaDon { get; set; }
//        public DbSet<TaiKhoanUser> TaiKhoanUsers { get; set; }
//        public DbSet<NhomQuyen> NhomQuyens { get; set; }
//        public DbSet<ThongTinAdmin> ThongTinAdmins { get; set; }
//        public DbSet<LoaiSanPham> LoaiSanPham { get; set; }
//        public DbSet<NhanHieu> NhanHieu { get; set; }
//        public DbSet<KhuyenMai> KhuyenMai { get; set; }
//        public DbSet<MoTaSanPham> MoTaSanPham { get; set; }
//        public DbSet<Size> Sizes { get; set; }
//        public DbSet<GioHang> GioHangs { get; set; }
//        public DbSet<DanhGia> DanhGias { get; set; }

//        public DbSet<ThanhToan> ThanhToans { get; set; }
//        public DbSet<ChiTietHoaDon> ChiTietHoaDons { get; set; }


//        protected override void OnModelCreating(ModelBuilder modelBuilder)
//        {
//            // Định nghĩa khóa chính
//            modelBuilder.Entity<NguoiDung>().ToTable("nguoidung").HasKey(nd => nd.ID);
//            modelBuilder.Entity<SanPham>().ToTable("sanpham").HasKey(sp => sp.ID);
//            modelBuilder.Entity<HoaDon>().ToTable("hoadon").HasKey(hd => hd.ID);
//            modelBuilder.Entity<TaiKhoanUser>().ToTable("taikhoanuser").HasKey(tkus => tkus.ID);
//            modelBuilder.Entity<NhomQuyen>().ToTable("nhomquyen").HasKey(nq => nq.ID);
//            modelBuilder.Entity<ThongTinAdmin>().ToTable("thongtinadmin").HasKey(ttam => ttam.ID);
//            modelBuilder.Entity<KhuyenMai>().ToTable("khuyenmai").HasKey(km => km.MAKM);
//            modelBuilder.Entity<NhanHieu>().ToTable("nhanhieu").HasKey(nh => nh.ID);
//            modelBuilder.Entity<LoaiSanPham>().ToTable("loaisanpham").HasKey(ls => ls.MALOAI);
//            modelBuilder.Entity<MoTaSanPham>().ToTable("motasanpham").HasKey(mts => mts.Id);
//            modelBuilder.Entity<Size>().ToTable("size").HasKey(s => s.ID);
//            modelBuilder.Entity<GioHang>().ToTable("giohang").HasKey(gh => gh.ID);
//            modelBuilder.Entity<DanhGia>().ToTable("danhgia").HasKey(dg => dg.ID);

//            modelBuilder.Entity<ThanhToan>().ToTable("thanhtoan").HasKey(tt => tt.ID);
//            modelBuilder.Entity<ChiTietHoaDon>().ToTable("chitiethoadon").HasKey(cthd => cthd.ID);


//            // Định nghĩa quan hệ

//            // SanPham - LoaiSanPham
//            modelBuilder.Entity<SanPham>()
//                .HasOne(sp => sp.LoaiSanPham)
//                .WithMany(ls => ls.SanPhams)
//                .HasForeignKey(sp => sp.MALOAI)
//                .HasPrincipalKey(ls => ls.MALOAI);

//            // SanPham - NhanHieu
//            modelBuilder.Entity<SanPham>()
//                .HasOne(sp => sp.NhanHieu)
//                .WithMany(nh => nh.SanPhams)
//                .HasForeignKey(sp => sp.MANH)
//                .HasPrincipalKey(nh => nh.MANH);

//            // SanPham - KhuyenMai
//            modelBuilder.Entity<SanPham>()
//                .HasOne(sp => sp.KhuyenMai)
//                .WithMany(km => km.SanPhams)
//                .HasForeignKey(sp => sp.MAKM)
//                .HasPrincipalKey(km => km.MAKM);


//            // GioHang - NguoiDung
//            modelBuilder.Entity<GioHang>()
//                .HasOne(gh => gh.NguoiDung)
//                .WithMany(nd => nd.GioHangs)
//                .HasForeignKey(gh => gh.MAND)
//                .HasPrincipalKey(nd => nd.MAND);

//            // GioHang - SanPham
//            modelBuilder.Entity<GioHang>()
//                .HasOne(gh => gh.SanPham)
//                .WithMany(sp => sp.GioHangs)
//                .HasForeignKey(gh => gh.MASP)
//                .HasPrincipalKey(sp => sp.MASP);

//            // DanhGia - SanPham
//            modelBuilder.Entity<DanhGia>()
//                .HasOne(dg => dg.SanPham)
//                .WithMany(sp => sp.DanhGias)
//                .HasForeignKey(dg => dg.MASP)
//                .HasPrincipalKey(sp => sp.MASP);

//            // DanhGia - NguoiDung
//            modelBuilder.Entity<DanhGia>()
//                .HasOne(dg => dg.TaiKhoanUser)
//                .WithMany(nd => nd.DanhGias)
//                .HasForeignKey(dg => dg.MAUSER)
//                .HasPrincipalKey(nd => nd.MAUSER);

//            // ThanhToan - HoaDon
//            modelBuilder.Entity<ThanhToan>()
//                .HasOne(tt => tt.HoaDon)
//                .WithOne(hd => hd.ThanhToan)
//                .HasForeignKey<ThanhToan>(tt => tt.HoaDonID);

//            // ChiTietHoaDon - HoaDon
//            modelBuilder.Entity<ChiTietHoaDon>()
//                .HasOne(cthd => cthd.HoaDon)
//                .WithMany(hd => hd.ChiTietHoaDons)
//                .HasForeignKey(cthd => cthd.HoaDonID);

//            // ChiTietHoaDon - SanPham
//            modelBuilder.Entity<ChiTietHoaDon>()
//                .HasOne(cthd => cthd.SanPham)
//                .WithMany(sp => sp.ChiTietHoaDons)
//                .HasForeignKey(cthd => cthd.MASP)
//                .HasPrincipalKey(sp => sp.MASP);

//            base.OnModelCreating(modelBuilder);
//        }
//    }
//}

using Microsoft.EntityFrameworkCore;
using BE.Models;

namespace BE.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }

        // DbSet cho các bảng
        public DbSet<NguoiDung> NguoiDung { get; set; }
        public DbSet<SanPham> SanPham { get; set; }
        public DbSet<HoaDon> HoaDon { get; set; }
        public DbSet<TaiKhoanUser> TaiKhoanUsers { get; set; }
        public DbSet<NhomQuyen> NhomQuyens { get; set; }
        public DbSet<ThongTinAdmin> ThongTinAdmins { get; set; }
        public DbSet<LoaiSanPham> LoaiSanPham { get; set; }
        public DbSet<NhanHieu> NhanHieu { get; set; }
        public DbSet<KhuyenMai> KhuyenMai { get; set; }
        public DbSet<MoTaSanPham> MoTaSanPham { get; set; }
        public DbSet<Size> Sizes { get; set; }
        public DbSet<GioHang> GioHangs { get; set; }
        public DbSet<DanhGia> DanhGias { get; set; }
        public DbSet<ThanhToan> ThanhToans { get; set; }
        public DbSet<ChiTietHoaDon> ChiTietHoaDons { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Định nghĩa khóa chính
            modelBuilder.Entity<NguoiDung>().ToTable("nguoidung").HasKey(nd => nd.ID);
            modelBuilder.Entity<SanPham>().ToTable("sanpham").HasKey(sp => sp.ID);
            modelBuilder.Entity<HoaDon>().ToTable("hoadon").HasKey(hd => hd.ID);
            modelBuilder.Entity<TaiKhoanUser>().ToTable("taikhoanuser").HasKey(tkus => tkus.ID);
            modelBuilder.Entity<NhomQuyen>().ToTable("nhomquyen").HasKey(nq => nq.ID);
            modelBuilder.Entity<ThongTinAdmin>().ToTable("thongtinadmin").HasKey(ttam => ttam.ID);
            modelBuilder.Entity<KhuyenMai>().ToTable("khuyenmai").HasKey(km => km.MAKM);
            modelBuilder.Entity<NhanHieu>().ToTable("nhanhieu").HasKey(nh => nh.ID);
            modelBuilder.Entity<LoaiSanPham>().ToTable("loaisanpham").HasKey(ls => ls.MALOAI);
            modelBuilder.Entity<MoTaSanPham>().ToTable("motasanpham").HasKey(mts => mts.Id);
            modelBuilder.Entity<Size>().ToTable("size").HasKey(s => s.ID);
            modelBuilder.Entity<GioHang>().ToTable("giohang").HasKey(gh => gh.ID);
            modelBuilder.Entity<DanhGia>().ToTable("danhgia").HasKey(dg => dg.ID);
            modelBuilder.Entity<ThanhToan>().ToTable("thanhtoan").HasKey(tt => tt.ID);
            modelBuilder.Entity<ChiTietHoaDon>().ToTable("chitiethoadon").HasKey(cthd => cthd.ID);

            // Định nghĩa quan hệ

            // SanPham - LoaiSanPham
            modelBuilder.Entity<SanPham>()
                .HasOne(sp => sp.LoaiSanPham)
                .WithMany(ls => ls.SanPhams)
                .HasForeignKey(sp => sp.MALOAI)
                .HasPrincipalKey(ls => ls.MALOAI);

            // SanPham - NhanHieu
            modelBuilder.Entity<SanPham>()
                .HasOne(sp => sp.NhanHieu)
                .WithMany(nh => nh.SanPhams)
                .HasForeignKey(sp => sp.MANH)
                .HasPrincipalKey(nh => nh.MANH);

            // SanPham - KhuyenMai
            modelBuilder.Entity<SanPham>()
                .HasOne(sp => sp.KhuyenMai)
                .WithMany(km => km.SanPhams)
                .HasForeignKey(sp => sp.MAKM)
                .HasPrincipalKey(km => km.MAKM);

           
            modelBuilder.Entity<GioHang>()
    .HasOne(gh => gh.NguoiDung)
    .WithMany(nd => nd.GioHangs)
    .HasForeignKey(gh => gh.MAND)
    .HasPrincipalKey(nd => nd.MAND);

            modelBuilder.Entity<GioHang>()
                .HasOne(gh => gh.SanPham)
                .WithMany(sp => sp.GioHangs)
                .HasForeignKey(gh => gh.MASP)
                .HasPrincipalKey(sp => sp.MASP);



            // Cấu hình quan hệ giữa Size và SanPham
            modelBuilder.Entity<Size>()
                .HasOne(size => size.SanPham)
                .WithMany(sp => sp.Sizes)
                .HasForeignKey(size => size.MASP)
                .HasPrincipalKey(sp => sp.MASP);
            // Khóa chính của bảng SanPham là MASP
            // Cấu hình cho HoaDon
            modelBuilder.Entity<HoaDon>()
     .HasKey(hd => hd.ID); // ID là khóa chính

            modelBuilder.Entity<HoaDon>()
                .HasIndex(hd => hd.MAHD) // MAHD là Unique Key
                .IsUnique();

            modelBuilder.Entity<HoaDon>()
                .HasMany(hd => hd.ChiTietHoaDons)
                .WithOne(cthd => cthd.HoaDon)
                .HasForeignKey(cthd => cthd.MAHD)
                .HasPrincipalKey(hd => hd.MAHD);

            modelBuilder.Entity<ChiTietHoaDon>()
    .HasOne(cthd => cthd.HoaDon)
    .WithMany(hd => hd.ChiTietHoaDons)
    .HasForeignKey(cthd => cthd.MAHD)
    .HasPrincipalKey(hd => hd.MAHD);

            //modelBuilder.Entity<ChiTietHoaDon>()
            //    .HasOne(cthd => cthd.SanPham)
            //    .WithMany()
            //    .HasForeignKey(cthd => cthd.MASP)
            //    .HasPrincipalKey(sp => sp.MASP);
            // Bảng SanPham: Thiết lập chỉ mục duy nhất cho MASP
            modelBuilder.Entity<SanPham>()
     .HasIndex(sp => sp.MASP)
     .IsUnique(); // Đảm bảo MASP là duy nhất trong bảng SanPham


            // Cấu hình ánh xạ `ChiTietHoaDon` và `SanPham`
            modelBuilder.Entity<ChiTietHoaDon>()
      .HasOne(cthd => cthd.SanPham) // Liên kết với SanPham
      .WithMany() // Không cần liên kết ngược từ SanPham
      .HasForeignKey(cthd => cthd.MASP) // Dùng MASP làm khóa ngoại
      .HasPrincipalKey(sp => sp.MASP); // MASP là cột duy nhất trong SanPham

            //modelBuilder.Entity<ChiTietHoaDon>().Ignore(cthd => cthd.MASP);
    







            modelBuilder.Entity<ThanhToan>()
                .HasOne(tt => tt.HoaDon)
                .WithMany()
                .HasForeignKey(tt => tt.MAHD)
                .HasPrincipalKey(hd => hd.MAHD);

            modelBuilder.Entity<ThanhToan>()
                .HasOne(tt => tt.NguoiDung)
                .WithMany()
                .HasForeignKey(tt => tt.MAND)
                .HasPrincipalKey(nd => nd.MAND);

            modelBuilder.Entity<ThanhToan>()
                .HasIndex(tt => tt.MATHANHTOAN) // MATHANHTOAN là Unique Key
                .IsUnique();

            base.OnModelCreating(modelBuilder);
        }
    }
}


