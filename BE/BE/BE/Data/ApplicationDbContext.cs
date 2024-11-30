using Microsoft.EntityFrameworkCore;
using BE.Models;
using System.Collections.Generic;
using System.Reflection.Emit;

namespace BE.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }

        public DbSet<NguoiDung> NguoiDung { get; set; }
        public DbSet<SanPham> SanPham { get; set; }
        public DbSet<HoaDon> HoaDon { get; set; }
        public DbSet<TaiKhoanUser> TaiKhoanUsers { get; set; }
        public DbSet<NguoiDung> NguoiDungs { get; set; }
        public DbSet<ThongTinAdmin> ThongTinAdmins { get; set; }
        public DbSet<NhomQuyen> NhomQuyens { get; set; }
        public DbSet<LoaiSanPham> LoaiSanPham { get; set; }
        public DbSet<NhanHieu> NhanHieu { get; set; }
        public DbSet<KhuyenMai> KhuyenMai { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<NguoiDung>().ToTable("nguoidung").HasKey(nd => nd.ID);
           //modelBuilder.Entity<SanPham>().ToTable("sanpham").HasKey(sp => sp.ID);
            modelBuilder.Entity<HoaDon>().ToTable("hoadon").HasKey(hd => hd.ID);
            modelBuilder.Entity<TaiKhoanUser>().ToTable("taikhoanuser").HasKey(tkus => tkus.ID);
            modelBuilder.Entity<NhomQuyen>().ToTable("nhomquyen").HasKey(nq => nq.ID);
            modelBuilder.Entity<ThongTinAdmin>().ToTable("thongtinadmin").HasKey(ttam => ttam.ID);

            // Quan hệ SanPham - LoaiSanPham
            modelBuilder.Entity<SanPham>()
                .HasOne(sp => sp.LoaiSanPham)
                .WithMany(ls => ls.SanPhams)
                .HasForeignKey(sp => sp.MALOAI)
                .HasPrincipalKey(ls => ls.MALOAI);

            // Quan hệ SanPham - NhanHieu
            modelBuilder.Entity<SanPham>()
                .HasOne(sp => sp.NhanHieu)
                .WithMany(nh => nh.SanPhams)
                .HasForeignKey(sp => sp.MANH)
                .HasPrincipalKey(nh => nh.MANH);

            // Quan hệ SanPham - KhuyenMai
            modelBuilder.Entity<SanPham>()
                .HasOne(sp => sp.KhuyenMai)
                .WithMany(km => km.SanPhams)
                .HasForeignKey(sp => sp.MAKM)
                .HasPrincipalKey(km => km.MAKM);

            base.OnModelCreating(modelBuilder);
          

        }
    }
}
