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

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<NguoiDung>().ToTable("nguoidung").HasKey(nd => nd.ID);
            modelBuilder.Entity<SanPham>().ToTable("sanpham").HasKey(sp => sp.ID);
            modelBuilder.Entity<HoaDon>().ToTable("hoadon").HasKey(hd => hd.ID);
            modelBuilder.Entity<TaiKhoanUser>().ToTable("taikhoanuser").HasKey(tkus => tkus.ID);
            modelBuilder.Entity<NhomQuyen>().ToTable("nhomquyen").HasKey(nq => nq.ID);
            modelBuilder.Entity<ThongTinAdmin>().ToTable("thongtinadmin").HasKey(ttam => ttam.ID);
            base.OnModelCreating(modelBuilder);
        }
    }
}
