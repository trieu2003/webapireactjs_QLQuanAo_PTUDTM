USE [ql_quanao]
GO
/****** Object:  UserDefinedFunction [dbo].[TinhGiamGia]    Script Date: 12/2/2024 7:31:32 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
 CREATE FUNCTION [dbo].[TinhGiamGia]
(
    @MaSanPham VARCHAR(10)
)
RETURNS FLOAT
AS
BEGIN
    DECLARE @GiaGoc FLOAT;
    DECLARE @TyLeGiam FLOAT;
    DECLARE @GiaGiam FLOAT;
	DECLARE @MAKM varchar(10);

    -- Lấy giá gốc của sản phẩm
    SELECT @GiaGoc = GIA , @MAKM = MAKM
    FROM sanpham
    WHERE MASP = @MaSanPham;

    -- Lấy tỷ lệ giảm giá
    SELECT @TyLeGiam = PHANTRAMGIAM
    FROM khuyenmai
    WHERE MAKM = @MAKM;

    -- Nếu không có mã giảm giá, tỷ lệ giảm giá là 0
    IF (@TyLeGiam IS NULL)
        SET @TyLeGiam = 0;

    -- Tính giá sau khi giảm
    SET @GiaGiam = @GiaGoc - (@GiaGoc * @TyLeGiam / 100);

    RETURN @GiaGiam;
END;
GO
/****** Object:  Table [dbo].[chitiethoadon]    Script Date: 12/2/2024 7:31:32 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[chitiethoadon](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[MACTHD] [varchar](10) NOT NULL,
	[MAHD] [varchar](10) NULL,
	[MASP] [varchar](10) NULL,
	[SIZE] [varchar](50) NULL,
	[SOLUONG] [int] NULL,
	[THANHTIEN] [int] NULL,
	[TINHTRANG] [int] NULL,
	[RowVersion] [timestamp] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[danhgia]    Script Date: 12/2/2024 7:31:32 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[danhgia](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[MAND] [varchar](10) NULL,
	[MADANHGIA] [varchar](10) NOT NULL,
	[MACTHD] [varchar](10) NULL,
	[NOIDUNG] [nvarchar](500) NULL,
	[SOSAO] [int] NULL,
	[TINHTRANG] [int] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[diachi]    Script Date: 12/2/2024 7:31:32 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[diachi](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[MAND] [varchar](10) NOT NULL,
	[DIACHI] [nvarchar](50) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[giohang]    Script Date: 12/2/2024 7:31:32 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[giohang](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[MAGH] [varchar](10) NOT NULL,
	[MAND] [varchar](10) NULL,
	[MASP] [varchar](10) NULL,
	[SIZE] [varchar](5) NOT NULL,
	[SOLUONG] [int] NULL,
	[THANHTIEN] [int] NULL,
	
	[TINHTRANG] [bit] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[hinhanh]    Script Date: 12/2/2024 7:31:32 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[hinhanh](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[HINHANHSP] [varchar](100) NULL,
	[MASP] [varchar](10) NULL,
PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[hoadon]    Script Date: 12/2/2024 7:31:32 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[hoadon](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[MAHD] [varchar](10) NOT NULL,
	[MAND] [varchar](10) NULL,
	[SOLUONG] [int] NULL,
	[NGAYDATHANG] [date] NULL,
	[TONGTIEN] [int] NULL,
	[TINHTRANG] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[kho]    Script Date: 12/2/2024 7:31:32 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[kho](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[MAKHO] [varchar](10) NOT NULL,
	[TENKHO] [nvarchar](50) NULL,
PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[khuyenmai]    Script Date: 12/2/2024 7:31:32 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[khuyenmai](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[MAKM] [varchar](10) NOT NULL,
	[TENKM] [nvarchar](255) NOT NULL,
	[PHANTRAMGIAM] [int] NOT NULL,
	[NGAYBD] [date] NOT NULL,
	[NGAYKT] [date] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[loaisanpham]    Script Date: 12/2/2024 7:31:32 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[loaisanpham](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[MALOAI] [varchar](50) NOT NULL,
	[TENLOAI] [nvarchar](500) NULL,
PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[motasanpham]    Script Date: 12/2/2024 7:31:32 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[motasanpham](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[MOTA] [nvarchar](max) NULL,
	[MASP] [varchar](10) NULL,
PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[nguoidung]    Script Date: 12/2/2024 7:31:32 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[nguoidung](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[MAND] [varchar](10) NOT NULL,
	[TENND] [nvarchar](500) NOT NULL,
	[EMAIL] [varchar](500) NULL,
	[DIACHI] [nvarchar](500) NULL,
	[SODIENTHOAI] [varchar](500) NULL,
	[MAUSER] [varchar](10) NULL,
PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[nhanhieu]    Script Date: 12/2/2024 7:31:32 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[nhanhieu](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[MANH] [varchar](10) NOT NULL,
	[TENNH] [nvarchar](500) NULL,
	[QUOCGIA] [nvarchar](500) NULL,
PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[nhomquyen]    Script Date: 12/2/2024 7:31:32 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[nhomquyen](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[MAQUYEN] [varchar](10) NOT NULL,
	[TENQUYEN] [nvarchar](50) NULL,
PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[phanhoi]    Script Date: 12/2/2024 7:31:32 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[phanhoi](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[MADANHGIA] [varchar](10) NULL,
	[MAPHANHOI] [varchar](10) NOT NULL,
	[NOIDUNG] [nvarchar](500) NULL,
PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[sanpham]    Script Date: 12/2/2024 7:31:32 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[sanpham](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[MASP] [varchar](10) NOT NULL,
	[MALOAI] [varchar](50) NOT NULL,
	[TENSANPHAM] [nvarchar](max) NULL,
	[GIA] [float] NULL,
	[CHATLIEU] [varchar](500) NULL,
	[MANH] [varchar](10) NULL,
	[HINHANH] [varchar](100) NULL,
	[MAKM] [varchar](10) NULL,
	[GIAGIAM] [float] NULL,
PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[size]    Script Date: 12/2/2024 7:31:32 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[size](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[SIZESP] [varchar](10) NULL,
	[MASP] [varchar](10) NULL,
PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[taikhoanuser]    Script Date: 12/2/2024 7:31:32 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[taikhoanuser](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[MAUSER] [varchar](10) NOT NULL,
	[TENTK] [varchar](500) NOT NULL,
	[MATKHAU] [varchar](500) NULL,
	[MAQUYEN] [varchar](10) NULL,
PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[thanhtoan]    Script Date: 12/2/2024 7:31:32 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[thanhtoan](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[MATHANHTOAN] [varchar](10) NOT NULL,
	[MAHD] [varchar](10) NULL,
	[NGAYTHANHTOAN] [datetime] NULL,
	[TONGTIEN] [float] NULL,
	[PHUONGTHUCTHANHTOAN] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[thongtinadmin]    Script Date: 12/2/2024 7:31:32 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[thongtinadmin](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[TENNV] [nvarchar](500) NOT NULL,
	[EMAIL] [varchar](500) NULL,
	[DIACHI] [nvarchar](500) NULL,
	[SODIENTHOAI] [varchar](500) NULL,
	[MAUSER] [varchar](10) NULL,
PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tonkho]    Script Date: 12/2/2024 7:31:32 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tonkho](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[MAKHO] [varchar](10) NULL,
	[MASP] [varchar](10) NULL,
	[SOLUONG] [int] NULL,
	[NGAYNHAP] [date] NULL,
PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[chitiethoadon] ON 

INSERT [dbo].[chitiethoadon] ([ID], [MACTHD], [MAHD], [MASP], [SIZE], [SOLUONG], [THANHTIEN], [TINHTRANG]) VALUES (92, N'CTHD001', N'HD006', N'SP0001', N'29', 3, 1725120, NULL)
INSERT [dbo].[chitiethoadon] ([ID], [MACTHD], [MAHD], [MASP], [SIZE], [SOLUONG], [THANHTIEN], [TINHTRANG]) VALUES (93, N'CTHD002', N'HD007', N'SP0002', N'30', 1, 569050, 1)
INSERT [dbo].[chitiethoadon] ([ID], [MACTHD], [MAHD], [MASP], [SIZE], [SOLUONG], [THANHTIEN], [TINHTRANG]) VALUES (94, N'CTHD003', N'HD008', N'SP0001', N'32', 3, 1725120, 1)
INSERT [dbo].[chitiethoadon] ([ID], [MACTHD], [MAHD], [MASP], [SIZE], [SOLUONG], [THANHTIEN], [TINHTRANG]) VALUES (95, N'CTHD004', N'HD008', N'SP0001', N'29', 1, 575040, 1)
INSERT [dbo].[chitiethoadon] ([ID], [MACTHD], [MAHD], [MASP], [SIZE], [SOLUONG], [THANHTIEN], [TINHTRANG]) VALUES (96, N'CTHD005', N'HD009', N'SP0001', N'29', 1, 575040, 1)
INSERT [dbo].[chitiethoadon] ([ID], [MACTHD], [MAHD], [MASP], [SIZE], [SOLUONG], [THANHTIEN], [TINHTRANG]) VALUES (97, N'CTHD006', N'HD009', N'SP0002', N'29', 4, 2276200, 1)
INSERT [dbo].[chitiethoadon] ([ID], [MACTHD], [MAHD], [MASP], [SIZE], [SOLUONG], [THANHTIEN], [TINHTRANG]) VALUES (98, N'CTHD007', N'HD009', N'SP0004', N'29', 3, 1216950, 1)
INSERT [dbo].[chitiethoadon] ([ID], [MACTHD], [MAHD], [MASP], [SIZE], [SOLUONG], [THANHTIEN], [TINHTRANG]) VALUES (99, N'CTHD008', N'HD010', N'SP0002', N'29', 1, 569050, 1)
INSERT [dbo].[chitiethoadon] ([ID], [MACTHD], [MAHD], [MASP], [SIZE], [SOLUONG], [THANHTIEN], [TINHTRANG]) VALUES (100, N'CTHD009', N'HD010', N'SP0003', N'29', 3, 1229760, 1)
INSERT [dbo].[chitiethoadon] ([ID], [MACTHD], [MAHD], [MASP], [SIZE], [SOLUONG], [THANHTIEN], [TINHTRANG]) VALUES (101, N'CTHD010', N'HD011', N'SP0001', N'29', 1, 575040, 1)
INSERT [dbo].[chitiethoadon] ([ID], [MACTHD], [MAHD], [MASP], [SIZE], [SOLUONG], [THANHTIEN], [TINHTRANG]) VALUES (102, N'CTHD011', N'HD012', N'SP0001', N'29', 1, 575040, 1)
INSERT [dbo].[chitiethoadon] ([ID], [MACTHD], [MAHD], [MASP], [SIZE], [SOLUONG], [THANHTIEN], [TINHTRANG]) VALUES (103, N'CTHD012', N'HD013', N'SP0001', N'29', 3, 1725120, 1)
INSERT [dbo].[chitiethoadon] ([ID], [MACTHD], [MAHD], [MASP], [SIZE], [SOLUONG], [THANHTIEN], [TINHTRANG]) VALUES (104, N'CTHD013', N'HD013', N'SP0002', N'29', 1, 569050, 1)
INSERT [dbo].[chitiethoadon] ([ID], [MACTHD], [MAHD], [MASP], [SIZE], [SOLUONG], [THANHTIEN], [TINHTRANG]) VALUES (105, N'CTHD014', N'HD014', N'SP0001', N'29', 1, 575040, 1)
INSERT [dbo].[chitiethoadon] ([ID], [MACTHD], [MAHD], [MASP], [SIZE], [SOLUONG], [THANHTIEN], [TINHTRANG]) VALUES (106, N'CTHD015', N'HD015', N'SP0001', N'29', 1, 575040, 1)
INSERT [dbo].[chitiethoadon] ([ID], [MACTHD], [MAHD], [MASP], [SIZE], [SOLUONG], [THANHTIEN], [TINHTRANG]) VALUES (107, N'CTHD016', N'HD016', N'SP0001', N'29', 1, 575040, 1)
INSERT [dbo].[chitiethoadon] ([ID], [MACTHD], [MAHD], [MASP], [SIZE], [SOLUONG], [THANHTIEN], [TINHTRANG]) VALUES (108, N'CTHD017', N'HD017', N'SP0001', N'29', 1, 575040, 1)
INSERT [dbo].[chitiethoadon] ([ID], [MACTHD], [MAHD], [MASP], [SIZE], [SOLUONG], [THANHTIEN], [TINHTRANG]) VALUES (109, N'CTHD018', N'HD018', N'SP0001', N'29', 1, 575040, 1)
INSERT [dbo].[chitiethoadon] ([ID], [MACTHD], [MAHD], [MASP], [SIZE], [SOLUONG], [THANHTIEN], [TINHTRANG]) VALUES (110, N'CTHD019', N'HD019', N'SP0001', N'29', 1, 575040, 1)
INSERT [dbo].[chitiethoadon] ([ID], [MACTHD], [MAHD], [MASP], [SIZE], [SOLUONG], [THANHTIEN], [TINHTRANG]) VALUES (111, N'CTHD020', N'HD020', N'SP0001', N'29', 1, 575040, 1)
INSERT [dbo].[chitiethoadon] ([ID], [MACTHD], [MAHD], [MASP], [SIZE], [SOLUONG], [THANHTIEN], [TINHTRANG]) VALUES (112, N'CTHD021', N'HD021', N'SP0001', N'29', 1, 575040, 1)
INSERT [dbo].[chitiethoadon] ([ID], [MACTHD], [MAHD], [MASP], [SIZE], [SOLUONG], [THANHTIEN], [TINHTRANG]) VALUES (113, N'CTHD022', N'HD021', N'SP0004', N'29', 1, 405650, 1)
INSERT [dbo].[chitiethoadon] ([ID], [MACTHD], [MAHD], [MASP], [SIZE], [SOLUONG], [THANHTIEN], [TINHTRANG]) VALUES (114, N'CTHD023', N'HD022', N'SP0001', N'29', 1, 575040, 1)
INSERT [dbo].[chitiethoadon] ([ID], [MACTHD], [MAHD], [MASP], [SIZE], [SOLUONG], [THANHTIEN], [TINHTRANG]) VALUES (115, N'CTHD024', N'HD023', N'SP0001', N'29', 1, 575040, 1)
INSERT [dbo].[chitiethoadon] ([ID], [MACTHD], [MAHD], [MASP], [SIZE], [SOLUONG], [THANHTIEN], [TINHTRANG]) VALUES (116, N'CTHD025', N'HD024', N'SP0001', N'29', 1, 575040, 1)
INSERT [dbo].[chitiethoadon] ([ID], [MACTHD], [MAHD], [MASP], [SIZE], [SOLUONG], [THANHTIEN], [TINHTRANG]) VALUES (117, N'CTHD026', N'HD025', N'SP0002', N'29', 1, 569050, 1)
INSERT [dbo].[chitiethoadon] ([ID], [MACTHD], [MAHD], [MASP], [SIZE], [SOLUONG], [THANHTIEN], [TINHTRANG]) VALUES (118, N'CTHD027', N'HD026', N'SP0003', N'29', 1, 409920, 1)
INSERT [dbo].[chitiethoadon] ([ID], [MACTHD], [MAHD], [MASP], [SIZE], [SOLUONG], [THANHTIEN], [TINHTRANG]) VALUES (119, N'CTHD028', N'HD027', N'SP0002', N'29', 1, 569050, 1)
INSERT [dbo].[chitiethoadon] ([ID], [MACTHD], [MAHD], [MASP], [SIZE], [SOLUONG], [THANHTIEN], [TINHTRANG]) VALUES (120, N'CTHD029', N'HD028', N'SP0001', N'29', 1, 575040, 1)
INSERT [dbo].[chitiethoadon] ([ID], [MACTHD], [MAHD], [MASP], [SIZE], [SOLUONG], [THANHTIEN], [TINHTRANG]) VALUES (121, N'CTHD030', N'HD028', N'SP0002', N'29', 1, 569050, 1)
INSERT [dbo].[chitiethoadon] ([ID], [MACTHD], [MAHD], [MASP], [SIZE], [SOLUONG], [THANHTIEN], [TINHTRANG]) VALUES (122, N'CTHD031', N'HD029', N'SP0001', N'29', 1, 575040, 1)
INSERT [dbo].[chitiethoadon] ([ID], [MACTHD], [MAHD], [MASP], [SIZE], [SOLUONG], [THANHTIEN], [TINHTRANG]) VALUES (123, N'CTHD032', N'HD030', N'SP0001', N'29', 1, 575040, 1)
INSERT [dbo].[chitiethoadon] ([ID], [MACTHD], [MAHD], [MASP], [SIZE], [SOLUONG], [THANHTIEN], [TINHTRANG]) VALUES (124, N'CTHD033', N'HD031', N'SP0001', N'29', 1, 575040, 1)
INSERT [dbo].[chitiethoadon] ([ID], [MACTHD], [MAHD], [MASP], [SIZE], [SOLUONG], [THANHTIEN], [TINHTRANG]) VALUES (125, N'CTHD034', N'HD032', N'SP0001', N'29', 1, 575040, 1)
SET IDENTITY_INSERT [dbo].[chitiethoadon] OFF
GO
SET IDENTITY_INSERT [dbo].[diachi] ON 

INSERT [dbo].[diachi] ([ID], [MAND], [DIACHI]) VALUES (1, N'ND001', N'Bình Dương')
INSERT [dbo].[diachi] ([ID], [MAND], [DIACHI]) VALUES (2, N'ND001', N'TP.HCM')
SET IDENTITY_INSERT [dbo].[diachi] OFF
GO
SET IDENTITY_INSERT [dbo].[hinhanh] ON 

INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (1, N'ADORE1.jpg', N'SP0041')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (2, N'ADORE2.jpg', N'SP0041')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (3, N'ADORE3.jpg', N'SP0041')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (4, N'ADORE4.jpg', N'SP0041')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (5, N'ADORE5.jpg', N'SP0041')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (6, N'LUSTRE1.jpg', N'SP0042')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (7, N'LUSTRE2.jpg', N'SP0042')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (8, N'ADORE3.jpg', N'SP0042')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (9, N'ADORE4.jpg', N'SP0042')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (10, N'ADORE5.jpg', N'SP0042')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (11, N'ODPremium1.jpg', N'SP0042')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (12, N'ODPremium2.jpg', N'SP0043')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (13, N'ODPremium3.jpg', N'SP0043')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (14, N'ODPremium4.jpg', N'SP0043')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (15, N'ODPremium5.jpg', N'SP0043')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (16, N'SpandexPremium1.jpg', N'SP0044')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (17, N'SpandexPremium2.jpg', N'SP0044')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (18, N'SpandexPremium3.jpg', N'SP0044')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (19, N'SpandexPremium4.jpg', N'SP0044')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (20, N'SpandexPremium5.jpg', N'SP0044')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (21, N'Classic1.jpg', N'SP0045')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (22, N'Classic2.jpg', N'SP0045')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (23, N'Classic3.jpg', N'SP0045')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (24, N'Classic4.jpg', N'SP0045')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (25, N'Classic5.jpg', N'SP0045')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (26, N'SkinnyFit1.jpg', N'SP0046')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (27, N'SkinnyFit2.jpg', N'SP0046')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (28, N'SkinnyFit3.jpg', N'SP0046')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (29, N'SkinnyFit4.jpg', N'SP0046')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (30, N'SkinnyFit5.jpg', N'SP0046')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (31, N'Slimfit1.jpg', N'SP0047')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (32, N'Slimfit2.jpg', N'SP0047')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (33, N'Slimfit3.jpg', N'SP0047')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (34, N'Slimfit4.jpg', N'SP0047')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (35, N'Slimfit5.jpg', N'SP0047')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (36, N'Indigo1.jpg', N'SP0048')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (37, N'Indigo2.jpg', N'SP0048')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (38, N'Indigo3.jpg', N'SP0048')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (39, N'Indigo4.jpg', N'SP0048')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (40, N'Indigo5.jpg', N'SP0048')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (41, N'Wanderlust1.jpg', N'SP0033')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (42, N'Wanderlust2.jpg', N'SP0033')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (43, N'Wanderlust3.jpg', N'SP0033')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (44, N'Wanderlust4.jpg', N'SP0033')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (45, N'Wanderlust5.jpg', N'SP0033')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (46, N'RetroVibes1.jpg', N'SP0034')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (47, N'RetroVibes2.jpg', N'SP0034')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (48, N'RetroVibes3.jpg', N'SP0034')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (49, N'RetroVibes4.jpg', N'SP0034')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (50, N'RetroVibes5.jpg', N'SP0034')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (51, N'NatureEmbrace1.jpg', N'SP0035')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (52, N'NatureEmbrace2.jpg', N'SP0035')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (53, N'NatureEmbrace3.jpg', N'SP0035')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (54, N'NatureEmbrace4.jpg', N'SP0035')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (55, N'NatureEmbrace5.jpg', N'SP0035')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (56, N'FrostyPeaks1.jpg', N'SP0036')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (57, N'FrostyPeaks2.jpg', N'SP0036')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (58, N'FrostyPeaks3.jpg', N'SP0036')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (59, N'FrostyPeaks4.jpg', N'SP0036')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (60, N'FrostyPeaks5.jpg', N'SP0036')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (61, N'StormySky1.jpg', N'SP0037')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (62, N'StormySky2.jpg', N'SP0037')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (63, N'StormySky3.jpg', N'SP0037')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (64, N'StormySky4.jpg', N'SP0037')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (65, N'StormySky5.jpg', N'SP0037')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (66, N'DaysEye1.jpg', N'SP0038')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (67, N'DaysEye2.jpg', N'SP0038')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (68, N'DaysEye3.jpg', N'SP0038')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (69, N'DaysEye4.jpg', N'SP0038')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (70, N'DaysEye5.jpg', N'SP0038')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (71, N'Athena1.jpg', N'SP0039')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (72, N'Athena2.jpg', N'SP0039')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (73, N'Athena3.jpg', N'SP0039')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (74, N'Athena4.jpg', N'SP0039')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (75, N'Athena5.jpg', N'SP0039')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (76, N'Waffle1.jpg', N'SP0040')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (77, N'Waffle2.jpg', N'SP0040')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (78, N'Waffle3.jpg', N'SP0040')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (79, N'Waffle4.jpg', N'SP0040')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (80, N'Waffle5.jpg', N'SP0040')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (81, N'MidnightMarauder1.jpg', N'SP0025')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (82, N'MidnightMarauder2.jpg', N'SP0025')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (83, N'MidnightMarauder3.jpg', N'SP0025')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (84, N'MidnightMarauder4.jpg', N'SP0025')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (85, N'MidnightMarauder5.jpg', N'SP0025')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (86, N'SereneSkyr1.jpg', N'SP0026')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (87, N'SereneSkyr2.jpg', N'SP0026')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (88, N'SereneSkyr3.jpg', N'SP0026')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (89, N'SereneSkyr4.jpg', N'SP0026')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (90, N'SereneSkyr5.jpg', N'SP0026')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (91, N'SummitSpirit1.jpg', N'SP0027')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (92, N'SummitSpirit2.jpg', N'SP0027')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (93, N'SummitSpirit3.jpg', N'SP0027')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (94, N'SummitSpirit4.jpg', N'SP0027')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (95, N'SummitSpirit5.jpg', N'SP0027')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (96, N'UrbanChill1.jpg', N'SP0028')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (97, N'UrbanChill2.jpg', N'SP0028')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (98, N'UrbanChill3.jpg', N'SP0028')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (99, N'UrbanChill4.jpg', N'SP0028')
GO
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (100, N'UrbanChill5.jpg', N'SP0028')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (101, N'Cove1.jpg', N'SP0029')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (102, N'Cove2.jpg', N'SP0029')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (103, N'Cove3.jpg', N'SP0029')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (104, N'Cove4.jpg', N'SP0029')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (105, N'Cove5.jpg', N'SP0029')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (106, N'Speed1.jpg', N'SP0030')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (107, N'Speed2.jpg', N'SP0030')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (108, N'Speed3.jpg', N'SP0030')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (109, N'Speed4.jpg', N'SP0030')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (110, N'Speed5.jpg', N'SP0030')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (111, N'DoubleFace1.jpg', N'SP0031')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (112, N'DoubleFace2.jpg', N'SP0031')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (113, N'DoubleFace3.jpg', N'SP0031')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (114, N'DoubleFace4.jpg', N'SP0031')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (115, N'DoubleFace5.jpg', N'SP0031')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (116, N'FrenchTerry1.jpg', N'SP0032')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (117, N'FrenchTerry2.jpg', N'SP0031')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (118, N'FrenchTerry3.jpg', N'SP0031')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (119, N'FrenchTerry4.jpg', N'SP0031')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (120, N'FrenchTerry5.jpg', N'SP0031')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (121, N'NamPremium1.jpg', N'SP0017')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (122, N'NamPremium2.jpg', N'SP0017')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (123, N'NamPremium3.jpg', N'SP0017')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (124, N'NamPremium4.jpg', N'SP0017')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (125, N'NamPremium5.jpg', N'SP0017')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (126, N'Lua1.jpg', N'SP0018')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (127, N'Lua2.jpg', N'SP0018')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (128, N'Lua3.jpg', N'SP0018')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (129, N'Lua4.jpg', N'SP0018')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (130, N'Lua5.jpg', N'SP0018')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (131, N'CoTru1.jpg', N'SP0019')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (132, N'CoTru2.jpg', N'SP0019')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (133, N'CoTru3.jpg', N'SP0019')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (134, N'CoTru4.jpg', N'SP0019')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (135, N'CoTru5.jpg', N'SP0019')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (136, N'TayNgan1.jpg', N'SP0020')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (137, N'TayNgan2.jpg', N'SP0020')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (138, N'TayNgan3.jpg', N'SP0020')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (139, N'TayNgan4.jpg', N'SP0020')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (140, N'TayNgan5.jpg', N'SP0020')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (141, N'Caro1.jpg', N'SP0021')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (142, N'Caro2.jpg', N'SP0021')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (143, N'Caro3.jpg', N'SP0021')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (144, N'Caro4.jpg', N'SP0021')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (145, N'Caro5.jpg', N'SP0021')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (146, N'Modal1.jpg', N'SP0022')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (147, N'Modal2.jpg', N'SP0022')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (148, N'Modal3.jpg', N'SP0022')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (149, N'Modal4.jpg', N'SP0022')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (150, N'Modal5.jpg', N'SP0022')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (151, N'Twill1.jpg', N'SP0023')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (152, N'Twill2.jpg', N'SP0023')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (153, N'Twill3.jpg', N'SP0023')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (154, N'Twill4.jpg', N'SP0023')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (155, N'Twill5.jpg', N'SP0023')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (156, N'Cosmo1.jpg', N'SP0024')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (157, N'Cosmo2.jpg', N'SP0024')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (158, N'Cosmo3.jpg', N'SP0024')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (159, N'Cosmo4.jpg', N'SP0024')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (160, N'Cosmo5.jpg', N'SP0024')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (161, N'EasyBreeze1.jpg', N'SP0009')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (162, N'EasyBreeze2.jpg', N'SP0009')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (163, N'EasyBreeze3.jpg', N'SP0009')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (164, N'EasyBreeze4.jpg', N'SP0009')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (165, N'EasyBreeze5.jpg', N'SP0009')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (166, N'Graphic1.jpg', N'SP0010')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (167, N'Graphic2.jpg', N'SP0010')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (168, N'Graphic3.jpg', N'SP0010')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (169, N'Graphic4.jpg', N'SP0010')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (170, N'Graphic5.jpg', N'SP0010')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (171, N'Comfort1.jpg', N'SP0011')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (172, N'Comfort2.jpg', N'SP0011')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (173, N'Comfort3.jpg', N'SP0011')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (174, N'Comfort4.jpg', N'SP0011')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (175, N'Comfort5.jpg', N'SP0011')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (176, N'Oceanic1.jpg', N'SP0012')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (177, N'Oceanic2.jpg', N'SP0012')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (178, N'Oceanic3.jpg', N'SP0012')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (179, N'Oceanic4.jpg', N'SP0012')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (180, N'Oceanic5.jpg', N'SP0012')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (181, N'Odyssey1.jpg', N'SP0013')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (182, N'Odyssey2.jpg', N'SP0013')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (183, N'Odyssey3.jpg', N'SP0013')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (184, N'Odyssey4.jpg', N'SP0013')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (185, N'Odyssey5.jpg', N'SP0013')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (186, N'Compact1.jpg', N'SP0014')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (187, N'Compact2.jpg', N'SP0014')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (188, N'Compact3.jpg', N'SP0014')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (189, N'Compact4.jpg', N'SP0014')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (190, N'Compact5.jpg', N'SP0014')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (191, N'Originals1.jpg', N'SP0015')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (192, N'Originals2.jpg', N'SP0015')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (193, N'Originals3.jpg', N'SP0015')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (194, N'Originals4.jpg', N'SP0015')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (195, N'Originals5.jpg', N'SP0015')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (196, N'Bbuff1.jpg', N'SP0016')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (197, N'Bbuff2.jpg', N'SP0016')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (198, N'Bbuff3.jpg', N'SP0016')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (199, N'Bbuff4.jpg', N'SP0016')
GO
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (200, N'Bbuff5.jpg', N'SP0016')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (201, N'Rhythm1.jpg', N'SP0001')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (202, N'Rhythm2.jpg', N'SP0001')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (203, N'Rhythm3.jpg', N'SP0001')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (204, N'Rhythm4.jpg', N'SP0001')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (205, N'Rhythm5.jpg', N'SP0001')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (206, N'Swagger1.jpg', N'SP0002')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (207, N'Swagger2.jpg', N'SP0002')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (208, N'Swagger3.jpg', N'SP0002')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (209, N'Swagger4.jpg', N'SP0002')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (210, N'Swagger5.jpg', N'SP0002')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (211, N'Maverick1.jpg', N'SP0003')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (212, N'Maverick2.jpg', N'SP0003')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (213, N'Maverick3.jpg', N'SP0003')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (214, N'Maverick4.jpg', N'SP0003')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (215, N'Maverick5.jpg', N'SP0003')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (216, N'ShortBeginner1.jpg', N'SP0004')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (217, N'ShortBeginner2.jpg', N'SP0004')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (218, N'ShortBeginner3.jpg', N'SP0004')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (219, N'ShortBeginner4.jpg', N'SP0004')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (220, N'ShortBeginner5.jpg', N'SP0004')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (221, N'Cargo1.jpg', N'SP0005')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (222, N'Cargo2.jpg', N'SP0005')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (223, N'Cargo3.jpg', N'SP0005')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (224, N'Cargo4.jpg', N'SP0005')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (225, N'Cargo5.jpg', N'SP0005')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (226, N'Hexagon1.jpg', N'SP0006')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (227, N'Hexagon2.jpg', N'SP0006')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (228, N'Hexagon3.jpg', N'SP0006')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (229, N'Hexagon4.jpg', N'SP0006')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (230, N'Hexagon5.jpg', N'SP0006')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (231, N'Polyester1.jpg', N'SP0007')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (232, N'Polyester2.jpg', N'SP0007')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (233, N'Polyester3.jpg', N'SP0007')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (234, N'Polyester4.jpg', N'SP0007')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (235, N'Polyester5.jpg', N'SP0007')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (236, N'Parachute1.jpg', N'SP0008')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (237, N'Parachute2.jpg', N'SP0008')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (238, N'Parachute3.jpg', N'SP0008')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (239, N'Parachute4.jpg', N'SP0008')
INSERT [dbo].[hinhanh] ([ID], [HINHANHSP], [MASP]) VALUES (240, N'Parachute5.jpg', N'SP0008')
SET IDENTITY_INSERT [dbo].[hinhanh] OFF
GO
SET IDENTITY_INSERT [dbo].[hoadon] ON 

INSERT [dbo].[hoadon] ([ID], [MAHD], [MAND], [SOLUONG], [NGAYDATHANG], [TONGTIEN], [TINHTRANG]) VALUES (1, N'HD001', N'ND001', 23, CAST(N'2024-06-03' AS Date), 4309600, 1)
INSERT [dbo].[hoadon] ([ID], [MAHD], [MAND], [SOLUONG], [NGAYDATHANG], [TONGTIEN], [TINHTRANG]) VALUES (2, N'HD002', N'ND002', 4, CAST(N'2024-06-02' AS Date), 400055, 1)
INSERT [dbo].[hoadon] ([ID], [MAHD], [MAND], [SOLUONG], [NGAYDATHANG], [TONGTIEN], [TINHTRANG]) VALUES (3, N'HD003', N'ND003', 3, CAST(N'2024-04-12' AS Date), 215, 0)
INSERT [dbo].[hoadon] ([ID], [MAHD], [MAND], [SOLUONG], [NGAYDATHANG], [TONGTIEN], [TINHTRANG]) VALUES (4, N'HD004', N'ND004', 2, CAST(N'2024-04-13' AS Date), 100, 1)
INSERT [dbo].[hoadon] ([ID], [MAHD], [MAND], [SOLUONG], [NGAYDATHANG], [TONGTIEN], [TINHTRANG]) VALUES (5, N'HD005', N'ND005', 1, CAST(N'2024-04-14' AS Date), 40, 1)
INSERT [dbo].[hoadon] ([ID], [MAHD], [MAND], [SOLUONG], [NGAYDATHANG], [TONGTIEN], [TINHTRANG]) VALUES (59, N'HD006', N'ND002', 3, CAST(N'2024-12-02' AS Date), 1725120, 1)
INSERT [dbo].[hoadon] ([ID], [MAHD], [MAND], [SOLUONG], [NGAYDATHANG], [TONGTIEN], [TINHTRANG]) VALUES (60, N'HD007', N'ND002', 1, CAST(N'2024-12-02' AS Date), 569050, 1)
INSERT [dbo].[hoadon] ([ID], [MAHD], [MAND], [SOLUONG], [NGAYDATHANG], [TONGTIEN], [TINHTRANG]) VALUES (61, N'HD008', N'ND001', 4, CAST(N'2024-12-02' AS Date), 2300160, 1)
INSERT [dbo].[hoadon] ([ID], [MAHD], [MAND], [SOLUONG], [NGAYDATHANG], [TONGTIEN], [TINHTRANG]) VALUES (62, N'HD009', N'ND002', 8, CAST(N'2024-12-02' AS Date), 4068190, 1)
INSERT [dbo].[hoadon] ([ID], [MAHD], [MAND], [SOLUONG], [NGAYDATHANG], [TONGTIEN], [TINHTRANG]) VALUES (63, N'HD010', N'ND002', 4, CAST(N'2024-12-02' AS Date), 1798810, 1)
INSERT [dbo].[hoadon] ([ID], [MAHD], [MAND], [SOLUONG], [NGAYDATHANG], [TONGTIEN], [TINHTRANG]) VALUES (64, N'HD011', N'ND002', 1, NULL, 575040, NULL)
INSERT [dbo].[hoadon] ([ID], [MAHD], [MAND], [SOLUONG], [NGAYDATHANG], [TONGTIEN], [TINHTRANG]) VALUES (65, N'HD012', N'ND001', 1, NULL, 575040, NULL)
INSERT [dbo].[hoadon] ([ID], [MAHD], [MAND], [SOLUONG], [NGAYDATHANG], [TONGTIEN], [TINHTRANG]) VALUES (66, N'HD013', N'ND003', 4, CAST(N'2024-12-02' AS Date), 2294170, 1)
INSERT [dbo].[hoadon] ([ID], [MAHD], [MAND], [SOLUONG], [NGAYDATHANG], [TONGTIEN], [TINHTRANG]) VALUES (67, N'HD014', N'ND002', 1, CAST(N'2024-12-02' AS Date), 575040, 1)
INSERT [dbo].[hoadon] ([ID], [MAHD], [MAND], [SOLUONG], [NGAYDATHANG], [TONGTIEN], [TINHTRANG]) VALUES (68, N'HD015', N'ND001', 1, CAST(N'2024-12-02' AS Date), 575040, 1)
INSERT [dbo].[hoadon] ([ID], [MAHD], [MAND], [SOLUONG], [NGAYDATHANG], [TONGTIEN], [TINHTRANG]) VALUES (69, N'HD016', N'ND004', 1, CAST(N'2024-12-02' AS Date), 575040, 1)
INSERT [dbo].[hoadon] ([ID], [MAHD], [MAND], [SOLUONG], [NGAYDATHANG], [TONGTIEN], [TINHTRANG]) VALUES (70, N'HD017', N'ND002', 1, CAST(N'2024-12-02' AS Date), 575040, 1)
INSERT [dbo].[hoadon] ([ID], [MAHD], [MAND], [SOLUONG], [NGAYDATHANG], [TONGTIEN], [TINHTRANG]) VALUES (71, N'HD018', N'ND001', 1, CAST(N'2024-12-02' AS Date), 575040, 1)
INSERT [dbo].[hoadon] ([ID], [MAHD], [MAND], [SOLUONG], [NGAYDATHANG], [TONGTIEN], [TINHTRANG]) VALUES (72, N'HD019', N'ND003', 1, CAST(N'2024-12-02' AS Date), 575040, 1)
INSERT [dbo].[hoadon] ([ID], [MAHD], [MAND], [SOLUONG], [NGAYDATHANG], [TONGTIEN], [TINHTRANG]) VALUES (73, N'HD020', N'ND002', 1, CAST(N'2024-12-02' AS Date), 575040, 1)
INSERT [dbo].[hoadon] ([ID], [MAHD], [MAND], [SOLUONG], [NGAYDATHANG], [TONGTIEN], [TINHTRANG]) VALUES (74, N'HD021', N'ND001', 2, CAST(N'2024-12-02' AS Date), 980690, 1)
INSERT [dbo].[hoadon] ([ID], [MAHD], [MAND], [SOLUONG], [NGAYDATHANG], [TONGTIEN], [TINHTRANG]) VALUES (75, N'HD022', N'ND001', 1, CAST(N'2024-12-02' AS Date), 575040, 1)
INSERT [dbo].[hoadon] ([ID], [MAHD], [MAND], [SOLUONG], [NGAYDATHANG], [TONGTIEN], [TINHTRANG]) VALUES (76, N'HD023', N'ND002', 1, CAST(N'2024-12-02' AS Date), 575040, 1)
INSERT [dbo].[hoadon] ([ID], [MAHD], [MAND], [SOLUONG], [NGAYDATHANG], [TONGTIEN], [TINHTRANG]) VALUES (77, N'HD024', N'ND002', 1, CAST(N'2024-12-02' AS Date), 575040, 1)
INSERT [dbo].[hoadon] ([ID], [MAHD], [MAND], [SOLUONG], [NGAYDATHANG], [TONGTIEN], [TINHTRANG]) VALUES (78, N'HD025', N'ND003', 1, CAST(N'2024-12-02' AS Date), 569050, 1)
INSERT [dbo].[hoadon] ([ID], [MAHD], [MAND], [SOLUONG], [NGAYDATHANG], [TONGTIEN], [TINHTRANG]) VALUES (79, N'HD026', N'ND001', 1, CAST(N'2024-12-02' AS Date), 409920, 1)
INSERT [dbo].[hoadon] ([ID], [MAHD], [MAND], [SOLUONG], [NGAYDATHANG], [TONGTIEN], [TINHTRANG]) VALUES (80, N'HD027', N'ND003', 1, CAST(N'2024-12-02' AS Date), 569050, 1)
INSERT [dbo].[hoadon] ([ID], [MAHD], [MAND], [SOLUONG], [NGAYDATHANG], [TONGTIEN], [TINHTRANG]) VALUES (81, N'HD028', N'ND001', 2, CAST(N'2024-12-02' AS Date), 1144090, 1)
INSERT [dbo].[hoadon] ([ID], [MAHD], [MAND], [SOLUONG], [NGAYDATHANG], [TONGTIEN], [TINHTRANG]) VALUES (82, N'HD029', N'ND001', 1, CAST(N'2024-12-02' AS Date), 575040, 1)
INSERT [dbo].[hoadon] ([ID], [MAHD], [MAND], [SOLUONG], [NGAYDATHANG], [TONGTIEN], [TINHTRANG]) VALUES (83, N'HD030', N'ND001', 1, CAST(N'2024-12-02' AS Date), 575040, 1)
INSERT [dbo].[hoadon] ([ID], [MAHD], [MAND], [SOLUONG], [NGAYDATHANG], [TONGTIEN], [TINHTRANG]) VALUES (84, N'HD031', N'ND001', 1, CAST(N'2024-12-02' AS Date), 575040, 1)
INSERT [dbo].[hoadon] ([ID], [MAHD], [MAND], [SOLUONG], [NGAYDATHANG], [TONGTIEN], [TINHTRANG]) VALUES (85, N'HD032', N'ND002', 1, CAST(N'2024-12-02' AS Date), 575040, 1)
SET IDENTITY_INSERT [dbo].[hoadon] OFF
GO
SET IDENTITY_INSERT [dbo].[kho] ON 

INSERT [dbo].[kho] ([ID], [MAKHO], [TENKHO]) VALUES (7, N'KHO001', N'Kho A')
INSERT [dbo].[kho] ([ID], [MAKHO], [TENKHO]) VALUES (8, N'KHO002', N'Kho C')
INSERT [dbo].[kho] ([ID], [MAKHO], [TENKHO]) VALUES (1007, N'KHO003', N'Kho nhà xác')
SET IDENTITY_INSERT [dbo].[kho] OFF
GO
SET IDENTITY_INSERT [dbo].[khuyenmai] ON 

INSERT [dbo].[khuyenmai] ([ID], [MAKM], [TENKM], [PHANTRAMGIAM], [NGAYBD], [NGAYKT]) VALUES (4, N'KM001', N'Ngày tuyết rơi', 4, CAST(N'2024-11-23' AS Date), CAST(N'2024-11-28' AS Date))
INSERT [dbo].[khuyenmai] ([ID], [MAKM], [TENKM], [PHANTRAMGIAM], [NGAYBD], [NGAYKT]) VALUES (5, N'KM002', N'Thần Vương', 5, CAST(N'2024-11-23' AS Date), CAST(N'2024-11-23' AS Date))
SET IDENTITY_INSERT [dbo].[khuyenmai] OFF
GO
SET IDENTITY_INSERT [dbo].[loaisanpham] ON 

INSERT [dbo].[loaisanpham] ([ID], [MALOAI], [TENLOAI]) VALUES (1, N'L001', N'Quần')
INSERT [dbo].[loaisanpham] ([ID], [MALOAI], [TENLOAI]) VALUES (2, N'L002', N'Áo th')
INSERT [dbo].[loaisanpham] ([ID], [MALOAI], [TENLOAI]) VALUES (3, N'L003', N'Áo Sơ M')
INSERT [dbo].[loaisanpham] ([ID], [MALOAI], [TENLOAI]) VALUES (4, N'L004', N'Hoodie')
INSERT [dbo].[loaisanpham] ([ID], [MALOAI], [TENLOAI]) VALUES (5, N'L005', N'Quần Jean')
INSERT [dbo].[loaisanpham] ([ID], [MALOAI], [TENLOAI]) VALUES (6, N'L006', N'Sweater')
SET IDENTITY_INSERT [dbo].[loaisanpham] OFF
GO
SET IDENTITY_INSERT [dbo].[nguoidung] ON 

INSERT [dbo].[nguoidung] ([ID], [MAND], [TENND], [EMAIL], [DIACHI], [SODIENTHOAI], [MAUSER]) VALUES (1, N'ND001', N'Nguyễn Văn A', N'vanh180903@gmail.com', N'123 Đường ABC, Quận 1, TP. HCM', N'0987654321', N'TK001')
INSERT [dbo].[nguoidung] ([ID], [MAND], [TENND], [EMAIL], [DIACHI], [SODIENTHOAI], [MAUSER]) VALUES (2, N'ND002', N'Trần Thị BC', N'TranThiB@gmail.com', N'TPPHCM', N'0125463113', N'TK002')
INSERT [dbo].[nguoidung] ([ID], [MAND], [TENND], [EMAIL], [DIACHI], [SODIENTHOAI], [MAUSER]) VALUES (3, N'ND003', N'Lê Văn C', N'levanc@example.com', N'789 Đường KLM, Quận 3, TP. HCM', N'0987123456', N'TK003')
INSERT [dbo].[nguoidung] ([ID], [MAND], [TENND], [EMAIL], [DIACHI], [SODIENTHOAI], [MAUSER]) VALUES (4, N'ND004', N'Phạm Thị D', N'phamthid@example.com', N'101 Đường DEF, Quận 4, TP. HCM', N'0912345678', N'TK004')
INSERT [dbo].[nguoidung] ([ID], [MAND], [TENND], [EMAIL], [DIACHI], [SODIENTHOAI], [MAUSER]) VALUES (5, N'ND005', N'Hoàng Văn E', N'hoangvane@example.com', N'111 Đường GHI, Quận 5, TP. HCM', N'0876543210', N'TK005')
INSERT [dbo].[nguoidung] ([ID], [MAND], [TENND], [EMAIL], [DIACHI], [SODIENTHOAI], [MAUSER]) VALUES (16, N'ND009', N'abc', N'abc@gmail.com', NULL, N'0245698745', N'TK008')
SET IDENTITY_INSERT [dbo].[nguoidung] OFF
GO
SET IDENTITY_INSERT [dbo].[nhanhieu] ON 

INSERT [dbo].[nhanhieu] ([ID], [MANH], [TENNH], [QUOCGIA]) VALUES (1, N'NHA001', N'Yame', N'VietNam')
INSERT [dbo].[nhanhieu] ([ID], [MANH], [TENNH], [QUOCGIA]) VALUES (2, N'NHA002', N'Paradox', N'VietNam')
INSERT [dbo].[nhanhieu] ([ID], [MANH], [TENNH], [QUOCGIA]) VALUES (3, N'NHA003', N'TeeLab', N'VietNam')
INSERT [dbo].[nhanhieu] ([ID], [MANH], [TENNH], [QUOCGIA]) VALUES (4, N'NHA004', N'Dirty Coins', N'VietNam')
INSERT [dbo].[nhanhieu] ([ID], [MANH], [TENNH], [QUOCGIA]) VALUES (5, N'NHA005', N'Sadboizaintcry', N'VietNam')
INSERT [dbo].[nhanhieu] ([ID], [MANH], [TENNH], [QUOCGIA]) VALUES (6, N'NHA006', N'Gucci', N'Italy')
INSERT [dbo].[nhanhieu] ([ID], [MANH], [TENNH], [QUOCGIA]) VALUES (7, N'NHA007', N'Dior', N'France')
INSERT [dbo].[nhanhieu] ([ID], [MANH], [TENNH], [QUOCGIA]) VALUES (8, N'NHA008', N'Vạn kiếm quy tông', N'Việt Nam')
SET IDENTITY_INSERT [dbo].[nhanhieu] OFF
GO
SET IDENTITY_INSERT [dbo].[nhomquyen] ON 

INSERT [dbo].[nhomquyen] ([ID], [MAQUYEN], [TENQUYEN]) VALUES (1, N'MQ001', N'Nhân Viên')
INSERT [dbo].[nhomquyen] ([ID], [MAQUYEN], [TENQUYEN]) VALUES (5, N'MQ002', N'Admin')
INSERT [dbo].[nhomquyen] ([ID], [MAQUYEN], [TENQUYEN]) VALUES (6, N'MQ003', N'Khách Hàng')
SET IDENTITY_INSERT [dbo].[nhomquyen] OFF
GO
SET IDENTITY_INSERT [dbo].[sanpham] ON 

INSERT [dbo].[sanpham] ([ID], [MASP], [MALOAI], [TENSANPHAM], [GIA], [CHATLIEU], [MANH], [HINHANH], [MAKM], [GIAGIAM]) VALUES (1, N'SP0001', N'L001', N'Quần Rhythm', 599000, N'Thun', N'NHA002', N'Rhythm1.jpg', N'KM001', 575040)
INSERT [dbo].[sanpham] ([ID], [MASP], [MALOAI], [TENSANPHAM], [GIA], [CHATLIEU], [MANH], [HINHANH], [MAKM], [GIAGIAM]) VALUES (2, N'SP0002', N'L001', N'Quần Swagger', 599000, N'Thun', N'NHA002', N'Swagger1.jpg', N'KM002', 569050)
INSERT [dbo].[sanpham] ([ID], [MASP], [MALOAI], [TENSANPHAM], [GIA], [CHATLIEU], [MANH], [HINHANH], [MAKM], [GIAGIAM]) VALUES (3, N'SP0003', N'L001', N'Quần Maverick', 427000, N'Thun n? bông', N'NHA001', N'Maverick1.jpg', N'KM001', 409920)
INSERT [dbo].[sanpham] ([ID], [MASP], [MALOAI], [TENSANPHAM], [GIA], [CHATLIEU], [MANH], [HINHANH], [MAKM], [GIAGIAM]) VALUES (4, N'SP0004', N'L001', N'Quần Short Beginner', 427000, N'Thun', N'NHA001', N'ShortBeginner1.jpg', N'KM002', 405650)
INSERT [dbo].[sanpham] ([ID], [MASP], [MALOAI], [TENSANPHAM], [GIA], [CHATLIEU], [MANH], [HINHANH], [MAKM], [GIAGIAM]) VALUES (5, N'SP0005', N'L001', N'Quần Cargo', 699000, N'Thun', N'NHA002', N'Cargo1.jpg', N'KM002', 664050)
INSERT [dbo].[sanpham] ([ID], [MASP], [MALOAI], [TENSANPHAM], [GIA], [CHATLIEU], [MANH], [HINHANH], [MAKM], [GIAGIAM]) VALUES (6, N'SP0006', N'L001', N'Quần Hexagon', 499000, N'Thun', N'NHA002', N'Hexagon1.jpg', N'KM002', 474050)
INSERT [dbo].[sanpham] ([ID], [MASP], [MALOAI], [TENSANPHAM], [GIA], [CHATLIEU], [MANH], [HINHANH], [MAKM], [GIAGIAM]) VALUES (7, N'SP0007', N'L001', N'Quần Polyester', 399000, N'Thun', N'NHA002', N'Polyester1.jpg', N'KM002', 379050)
INSERT [dbo].[sanpham] ([ID], [MASP], [MALOAI], [TENSANPHAM], [GIA], [CHATLIEU], [MANH], [HINHANH], [MAKM], [GIAGIAM]) VALUES (8, N'SP0008', N'L001', N'Quần Parachute', 299000, N'Thun', N'NHA002', N'Parachute1.jpg', N'KM002', 284050)
INSERT [dbo].[sanpham] ([ID], [MASP], [MALOAI], [TENSANPHAM], [GIA], [CHATLIEU], [MANH], [HINHANH], [MAKM], [GIAGIAM]) VALUES (9, N'SP0009', N'L002', N'Áo Thun Easy Breeze', 150000, N'Cotton 2 chi?u', N'NHA003', N'EasyBreeze1.jpg', N'KM002', 142500)
INSERT [dbo].[sanpham] ([ID], [MASP], [MALOAI], [TENSANPHAM], [GIA], [CHATLIEU], [MANH], [HINHANH], [MAKM], [GIAGIAM]) VALUES (10, N'SP0010', N'L002', N'Áo Thun Graphic Nam', 200000, N'Cotton 2 chi?u', N'NHA002', N'Graphic1.jpg', NULL, NULL)
INSERT [dbo].[sanpham] ([ID], [MASP], [MALOAI], [TENSANPHAM], [GIA], [CHATLIEU], [MANH], [HINHANH], [MAKM], [GIAGIAM]) VALUES (11, N'SP0011', N'L002', N'Áo Thun Classic Comfort', 250000, N'Cotton 2 chi?u', N'NHA004', N'Comfort1.jpg', NULL, NULL)
INSERT [dbo].[sanpham] ([ID], [MASP], [MALOAI], [TENSANPHAM], [GIA], [CHATLIEU], [MANH], [HINHANH], [MAKM], [GIAGIAM]) VALUES (12, N'SP0012', N'L002', N'Áo Thun Oceanic', 180000, N'Cotton 2 chi?u', N'NHA005', N'Oceanic1.jpg', NULL, NULL)
INSERT [dbo].[sanpham] ([ID], [MASP], [MALOAI], [TENSANPHAM], [GIA], [CHATLIEU], [MANH], [HINHANH], [MAKM], [GIAGIAM]) VALUES (13, N'SP0013', N'L002', N'Áo Thun Odyssey', 120000, N'Cotton 2 chi?u', N'NHA006', N'Odyssey1.jpg', NULL, NULL)
INSERT [dbo].[sanpham] ([ID], [MASP], [MALOAI], [TENSANPHAM], [GIA], [CHATLIEU], [MANH], [HINHANH], [MAKM], [GIAGIAM]) VALUES (14, N'SP0014', N'L002', N'Áo Thun Compact', 120000, N'Cotton 2 chi?u', N'NHA006', N'Compact1.jpg', NULL, NULL)
INSERT [dbo].[sanpham] ([ID], [MASP], [MALOAI], [TENSANPHAM], [GIA], [CHATLIEU], [MANH], [HINHANH], [MAKM], [GIAGIAM]) VALUES (15, N'SP0015', N'L002', N'Áo Thun Originals', 120000, N'Cotton 2 chi?u', N'NHA006', N'Originals1.jpg', NULL, NULL)
INSERT [dbo].[sanpham] ([ID], [MASP], [MALOAI], [TENSANPHAM], [GIA], [CHATLIEU], [MANH], [HINHANH], [MAKM], [GIAGIAM]) VALUES (16, N'SP0016', N'L002', N'Áo Thun Bbuff', 120000, N'Cotton 2 chi?u', N'NHA006', N'Bbuff1.jpg', NULL, NULL)
INSERT [dbo].[sanpham] ([ID], [MASP], [MALOAI], [TENSANPHAM], [GIA], [CHATLIEU], [MANH], [HINHANH], [MAKM], [GIAGIAM]) VALUES (17, N'SP0017', N'L003', N'Áo So Mi Nam Premium', 350000, N'Cotton 100%', N'NHA005', N'NamPremium1.jpg', NULL, NULL)
INSERT [dbo].[sanpham] ([ID], [MASP], [MALOAI], [TENSANPHAM], [GIA], [CHATLIEU], [MANH], [HINHANH], [MAKM], [GIAGIAM]) VALUES (18, N'SP0018', N'L003', N'Áo So Mi L?a', 300000, N'Cotton 100%', N'NHA006', N'Lua1.jpg', NULL, NULL)
INSERT [dbo].[sanpham] ([ID], [MASP], [MALOAI], [TENSANPHAM], [GIA], [CHATLIEU], [MANH], [HINHANH], [MAKM], [GIAGIAM]) VALUES (19, N'SP0019', N'L003', N'Áo So Mi C? Tr?', 400000, N'Cotton 100%', N'NHA007', N'CoTru1.jpg', NULL, NULL)
INSERT [dbo].[sanpham] ([ID], [MASP], [MALOAI], [TENSANPHAM], [GIA], [CHATLIEU], [MANH], [HINHANH], [MAKM], [GIAGIAM]) VALUES (20, N'SP0020', N'L003', N'Áo So Mi Tay Ng?n', 350000, N'Cotton 100%', N'NHA001', N'TayNgan1.jpg', NULL, NULL)
INSERT [dbo].[sanpham] ([ID], [MASP], [MALOAI], [TENSANPHAM], [GIA], [CHATLIEU], [MANH], [HINHANH], [MAKM], [GIAGIAM]) VALUES (21, N'SP0021', N'L003', N'Áo So Mi Caro Nam', 380000, N'Cotton 100%', N'NHA002', N'Caro1.jpg', NULL, NULL)
INSERT [dbo].[sanpham] ([ID], [MASP], [MALOAI], [TENSANPHAM], [GIA], [CHATLIEU], [MANH], [HINHANH], [MAKM], [GIAGIAM]) VALUES (22, N'SP0022', N'L003', N'Áo So Mi Modal', 350000, N'Cotton 100%', N'NHA001', N'Modal1.jpg', NULL, NULL)
INSERT [dbo].[sanpham] ([ID], [MASP], [MALOAI], [TENSANPHAM], [GIA], [CHATLIEU], [MANH], [HINHANH], [MAKM], [GIAGIAM]) VALUES (23, N'SP0023', N'L003', N'Áo So Mi Twill', 350000, N'Cotton 100%', N'NHA001', N'Twill1.jpg', NULL, NULL)
INSERT [dbo].[sanpham] ([ID], [MASP], [MALOAI], [TENSANPHAM], [GIA], [CHATLIEU], [MANH], [HINHANH], [MAKM], [GIAGIAM]) VALUES (24, N'SP0024', N'L003', N'Áo So Mi Cosmo', 350000, N'Cotton 100%', N'NHA001', N'Cosmo1.jpg', NULL, NULL)
INSERT [dbo].[sanpham] ([ID], [MASP], [MALOAI], [TENSANPHAM], [GIA], [CHATLIEU], [MANH], [HINHANH], [MAKM], [GIAGIAM]) VALUES (25, N'SP0025', N'L004', N'Midnight Marauder Hoodie', 450000, N'N? bông', N'NHA001', N'MidnightMarauder1.jpg', NULL, NULL)
INSERT [dbo].[sanpham] ([ID], [MASP], [MALOAI], [TENSANPHAM], [GIA], [CHATLIEU], [MANH], [HINHANH], [MAKM], [GIAGIAM]) VALUES (26, N'SP0026', N'L004', N'Serene Sky Hoodie', 400000, N'N? bông', N'NHA002', N'SereneSky1.jpg', NULL, NULL)
INSERT [dbo].[sanpham] ([ID], [MASP], [MALOAI], [TENSANPHAM], [GIA], [CHATLIEU], [MANH], [HINHANH], [MAKM], [GIAGIAM]) VALUES (27, N'SP0027', N'L004', N'Summit Spirit Hoodie', 500000, N'N? bông', N'NHA003', N'SummitSpirit1.jpg', NULL, NULL)
INSERT [dbo].[sanpham] ([ID], [MASP], [MALOAI], [TENSANPHAM], [GIA], [CHATLIEU], [MANH], [HINHANH], [MAKM], [GIAGIAM]) VALUES (28, N'SP0028', N'L004', N'Urban Chill Hoodie', 350000, N'N? bông', N'NHA004', N'UrbanChill1.jpg', NULL, NULL)
INSERT [dbo].[sanpham] ([ID], [MASP], [MALOAI], [TENSANPHAM], [GIA], [CHATLIEU], [MANH], [HINHANH], [MAKM], [GIAGIAM]) VALUES (29, N'SP0029', N'L004', N'Cozy Cove Hoodie', 480000, N'N? bông', N'NHA005', N'Cove1.jpg', NULL, NULL)
INSERT [dbo].[sanpham] ([ID], [MASP], [MALOAI], [TENSANPHAM], [GIA], [CHATLIEU], [MANH], [HINHANH], [MAKM], [GIAGIAM]) VALUES (30, N'SP0030', N'L004', N'Speed Hoodie', 350000, N'N? bông', N'NHA004', N'Speed1.jpg', NULL, NULL)
INSERT [dbo].[sanpham] ([ID], [MASP], [MALOAI], [TENSANPHAM], [GIA], [CHATLIEU], [MANH], [HINHANH], [MAKM], [GIAGIAM]) VALUES (31, N'SP0031', N'L004', N'Double Face Hoodie', 350000, N'N? bông', N'NHA004', N'DoubleFace1.jpg', NULL, NULL)
INSERT [dbo].[sanpham] ([ID], [MASP], [MALOAI], [TENSANPHAM], [GIA], [CHATLIEU], [MANH], [HINHANH], [MAKM], [GIAGIAM]) VALUES (32, N'SP0032', N'L004', N'French Terry Hoodie', 350000, N'N? bông', N'NHA004', N'FrenchTerry1.jpg', NULL, NULL)
INSERT [dbo].[sanpham] ([ID], [MASP], [MALOAI], [TENSANPHAM], [GIA], [CHATLIEU], [MANH], [HINHANH], [MAKM], [GIAGIAM]) VALUES (33, N'SP0033', N'L005', N'Sweater Wanderlust', 550000, N'N? bông', N'NHA003', N'Wanderlust1.jpg', NULL, NULL)
INSERT [dbo].[sanpham] ([ID], [MASP], [MALOAI], [TENSANPHAM], [GIA], [CHATLIEU], [MANH], [HINHANH], [MAKM], [GIAGIAM]) VALUES (34, N'SP0034', N'L005', N'Sweater Retro Vibes', 500000, N'N? bông', N'NHA004', N'RetroVibes1.jpg', NULL, NULL)
INSERT [dbo].[sanpham] ([ID], [MASP], [MALOAI], [TENSANPHAM], [GIA], [CHATLIEU], [MANH], [HINHANH], [MAKM], [GIAGIAM]) VALUES (35, N'SP0035', N'L005', N'Sweater NatureEmbrace', 480000, N'N? bông', N'NHA005', N'NatureEmbrace1.jpg', NULL, NULL)
INSERT [dbo].[sanpham] ([ID], [MASP], [MALOAI], [TENSANPHAM], [GIA], [CHATLIEU], [MANH], [HINHANH], [MAKM], [GIAGIAM]) VALUES (36, N'SP0036', N'L005', N'Sweater Frosty Peaks', 600000, N'N? bông', N'NHA006', N'FrostyPeaks1.jpg', NULL, NULL)
INSERT [dbo].[sanpham] ([ID], [MASP], [MALOAI], [TENSANPHAM], [GIA], [CHATLIEU], [MANH], [HINHANH], [MAKM], [GIAGIAM]) VALUES (37, N'SP0037', N'L005', N'Sweater Stormy Sky', 550000, N'N? bông', N'NHA007', N'StormySky1.jpg', NULL, NULL)
INSERT [dbo].[sanpham] ([ID], [MASP], [MALOAI], [TENSANPHAM], [GIA], [CHATLIEU], [MANH], [HINHANH], [MAKM], [GIAGIAM]) VALUES (38, N'SP0038', N'L005', N'Sweater Days Eye', 600000, N'N? bông', N'NHA006', N'DaysEye1.jpg', NULL, NULL)
INSERT [dbo].[sanpham] ([ID], [MASP], [MALOAI], [TENSANPHAM], [GIA], [CHATLIEU], [MANH], [HINHANH], [MAKM], [GIAGIAM]) VALUES (39, N'SP0039', N'L005', N'Sweater Athena', 600000, N'N? bông', N'NHA006', N'Athena1.jpg', NULL, NULL)
INSERT [dbo].[sanpham] ([ID], [MASP], [MALOAI], [TENSANPHAM], [GIA], [CHATLIEU], [MANH], [HINHANH], [MAKM], [GIAGIAM]) VALUES (40, N'SP0040', N'L005', N'Sweater Waffle', 600000, N'N? bông', N'NHA006', N'Waffle1.jpg', NULL, NULL)
INSERT [dbo].[sanpham] ([ID], [MASP], [MALOAI], [TENSANPHAM], [GIA], [CHATLIEU], [MANH], [HINHANH], [MAKM], [GIAGIAM]) VALUES (41, N'SP0041', N'L006', N'Qu?n Jean ADORE', 599000, N'Jean', N'NHA002', N'ADORE1.jpg', NULL, NULL)
INSERT [dbo].[sanpham] ([ID], [MASP], [MALOAI], [TENSANPHAM], [GIA], [CHATLIEU], [MANH], [HINHANH], [MAKM], [GIAGIAM]) VALUES (42, N'SP0042', N'L006', N'Qu?n Jean LUSTRE', 599000, N'Jean', N'NHA002', N'LUSTRE1.jpg', NULL, NULL)
INSERT [dbo].[sanpham] ([ID], [MASP], [MALOAI], [TENSANPHAM], [GIA], [CHATLIEU], [MANH], [HINHANH], [MAKM], [GIAGIAM]) VALUES (43, N'SP0043', N'L006', N'Qu?n Jean ?ng Ð?ng Premium', 427000, N'Jean', N'NHA001', N'ODPremium1.jpg', NULL, NULL)
INSERT [dbo].[sanpham] ([ID], [MASP], [MALOAI], [TENSANPHAM], [GIA], [CHATLIEU], [MANH], [HINHANH], [MAKM], [GIAGIAM]) VALUES (44, N'SP0044', N'L006', N'Qu?n Jean Spandex Premium', 427000, N'Jean', N'NHA001', N'SpandexPremium1.jpg', NULL, NULL)
INSERT [dbo].[sanpham] ([ID], [MASP], [MALOAI], [TENSANPHAM], [GIA], [CHATLIEU], [MANH], [HINHANH], [MAKM], [GIAGIAM]) VALUES (45, N'SP0045', N'L006', N'Qu?n Jean Classic', 699000, N'Jean', N'NHA002', N'Classic1.jpg', NULL, NULL)
INSERT [dbo].[sanpham] ([ID], [MASP], [MALOAI], [TENSANPHAM], [GIA], [CHATLIEU], [MANH], [HINHANH], [MAKM], [GIAGIAM]) VALUES (46, N'SP0046', N'L006', N'Qu?n Jean Skinny Fit', 427000, N'Jean', N'NHA001', N'SkinnyFit1.jpg', NULL, NULL)
INSERT [dbo].[sanpham] ([ID], [MASP], [MALOAI], [TENSANPHAM], [GIA], [CHATLIEU], [MANH], [HINHANH], [MAKM], [GIAGIAM]) VALUES (47, N'SP0047', N'L006', N'Qu?n Jean Slim-fit', 427000, N'Jean', N'NHA001', N'Slimfit1.jpg', NULL, NULL)
INSERT [dbo].[sanpham] ([ID], [MASP], [MALOAI], [TENSANPHAM], [GIA], [CHATLIEU], [MANH], [HINHANH], [MAKM], [GIAGIAM]) VALUES (48, N'SP0048', N'L006', N'Qu?n Jean Indigo', 427000, N'Jean', N'NHA001', N'Indigo1.jpg', NULL, NULL)
INSERT [dbo].[sanpham] ([ID], [MASP], [MALOAI], [TENSANPHAM], [GIA], [CHATLIEU], [MANH], [HINHANH], [MAKM], [GIAGIAM]) VALUES (62, N'SP0049', N'L005', N'a', 3, N'a', N'NHA006', N'SP_45523b7f-e138-484c-bd44-b3d521abbd9c_Screenshot 2020-01-01 212725.png', N'KM001', 2.88)
SET IDENTITY_INSERT [dbo].[sanpham] OFF
GO
SET IDENTITY_INSERT [dbo].[size] ON 

INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (1, N'29', N'SP0001')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (2, N'30', N'SP0001')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (3, N'31', N'SP0001')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (4, N'32', N'SP0001')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (5, N'33', N'SP0001')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (6, N'29', N'SP0002')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (7, N'30', N'SP0002')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (8, N'31', N'SP0002')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (9, N'32', N'SP0002')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (10, N'33', N'SP0002')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (11, N'29', N'SP0003')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (12, N'30', N'SP0003')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (13, N'31', N'SP0003')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (14, N'32', N'SP0003')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (15, N'33', N'SP0003')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (16, N'29', N'SP0004')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (17, N'30', N'SP0004')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (18, N'31', N'SP0004')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (19, N'32', N'SP0004')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (20, N'33', N'SP0004')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (21, N'29', N'SP0005')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (22, N'30', N'SP0005')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (23, N'31', N'SP0005')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (24, N'32', N'SP0005')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (25, N'33', N'SP0005')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (26, N'29', N'SP0006')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (27, N'30', N'SP0006')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (28, N'31', N'SP0006')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (29, N'32', N'SP0006')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (30, N'33', N'SP0006')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (31, N'29', N'SP0007')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (32, N'30', N'SP0007')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (33, N'31', N'SP0007')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (34, N'32', N'SP0007')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (35, N'33', N'SP0007')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (36, N'29', N'SP0008')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (37, N'30', N'SP0008')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (38, N'31', N'SP0008')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (39, N'32', N'SP0008')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (40, N'33', N'SP0008')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (41, N'S', N'SP0009')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (42, N'M', N'SP0009')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (43, N'L', N'SP0009')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (44, N'XL', N'SP0009')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (45, N'XXL', N'SP0009')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (46, N'S', N'SP0010')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (47, N'M', N'SP0010')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (48, N'L', N'SP0010')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (49, N'XL', N'SP0010')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (50, N'XXL', N'SP0010')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (51, N'S', N'SP0011')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (52, N'M', N'SP0011')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (53, N'L', N'SP0011')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (54, N'XL', N'SP0011')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (55, N'XXL', N'SP0011')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (56, N'S', N'SP0012')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (57, N'M', N'SP0012')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (58, N'L', N'SP0012')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (59, N'XL', N'SP0012')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (60, N'XXL', N'SP0012')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (61, N'S', N'SP0013')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (62, N'M', N'SP0013')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (63, N'L', N'SP0013')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (64, N'XL', N'SP0013')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (65, N'XXL', N'SP0013')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (66, N'S', N'SP0014')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (67, N'M', N'SP0014')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (68, N'L', N'SP0014')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (69, N'XL', N'SP0014')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (70, N'XXL', N'SP0014')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (71, N'S', N'SP0015')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (72, N'M', N'SP0015')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (73, N'L', N'SP0015')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (74, N'XL', N'SP0015')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (75, N'XXL', N'SP0015')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (76, N'S', N'SP0016')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (77, N'M', N'SP0016')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (78, N'L', N'SP0016')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (79, N'XL', N'SP0016')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (80, N'XXL', N'SP0016')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (81, N'S', N'SP0018')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (82, N'M', N'SP0018')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (83, N'L', N'SP0018')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (84, N'XL', N'SP0018')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (85, N'S', N'SP0018')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (86, N'M', N'SP0018')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (87, N'L', N'SP0018')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (88, N'XL', N'SP0018')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (89, N'S', N'SP0019')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (90, N'M', N'SP0019')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (91, N'L', N'SP0019')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (92, N'XL', N'SP0019')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (93, N'S', N'SP0020')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (94, N'M', N'SP0020')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (95, N'L', N'SP0020')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (96, N'XL', N'SP0020')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (97, N'S', N'SP0021')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (98, N'M', N'SP0021')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (99, N'L', N'SP0021')
GO
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (100, N'XL', N'SP0021')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (101, N'S', N'SP0022')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (102, N'M', N'SP0022')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (103, N'L', N'SP0022')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (104, N'XL', N'SP0022')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (105, N'S', N'SP0023')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (106, N'M', N'SP0023')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (107, N'L', N'SP0023')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (108, N'XL', N'SP0023')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (109, N'S', N'SP0024')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (110, N'M', N'SP0024')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (111, N'L', N'SP0024')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (112, N'XL', N'SP0024')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (113, N'S', N'SP0025')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (114, N'M', N'SP0025')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (115, N'L', N'SP0025')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (116, N'XL', N'SP0025')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (117, N'S', N'SP0026')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (118, N'M', N'SP0026')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (119, N'L', N'SP0026')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (120, N'XL', N'SP0026')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (121, N'S', N'SP0027')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (122, N'M', N'SP0027')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (123, N'L', N'SP0027')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (124, N'XL', N'SP0027')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (125, N'S', N'SP0028')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (126, N'M', N'SP0028')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (127, N'L', N'SP0028')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (128, N'XL', N'SP0028')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (129, N'S', N'SP0029')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (130, N'M', N'SP0029')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (131, N'L', N'SP0029')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (132, N'XL', N'SP0029')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (133, N'S', N'SP0030')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (134, N'M', N'SP0030')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (135, N'L', N'SP0030')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (136, N'XL', N'SP0030')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (137, N'S', N'SP0031')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (138, N'M', N'SP0031')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (139, N'L', N'SP0031')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (140, N'XL', N'SP0031')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (141, N'S', N'SP0032')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (142, N'M', N'SP0032')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (143, N'L', N'SP0032')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (144, N'XL', N'SP0032')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (145, N'S', N'SP0033')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (146, N'M', N'SP0033')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (147, N'L', N'SP0033')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (148, N'XL', N'SP0033')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (149, N'S', N'SP0034')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (150, N'M', N'SP0034')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (151, N'L', N'SP0034')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (152, N'XL', N'SP0034')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (153, N'S', N'SP0035')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (154, N'M', N'SP0035')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (155, N'L', N'SP0035')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (156, N'XL', N'SP0035')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (157, N'S', N'SP0036')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (158, N'M', N'SP0036')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (159, N'L', N'SP0036')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (160, N'XL', N'SP0036')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (161, N'S', N'SP0037')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (162, N'M', N'SP0037')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (163, N'L', N'SP0037')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (164, N'XL', N'SP0037')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (165, N'S', N'SP0038')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (166, N'M', N'SP0038')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (167, N'L', N'SP0038')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (168, N'XL', N'SP0038')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (169, N'S', N'SP0039')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (170, N'M', N'SP0039')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (171, N'L', N'SP0039')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (172, N'XL', N'SP0039')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (173, N'S', N'SP0040')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (174, N'M', N'SP0040')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (175, N'L', N'SP0040')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (176, N'XL', N'SP0040')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (177, N'S', N'SP0041')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (178, N'M', N'SP0041')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (179, N'L', N'SP0041')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (180, N'XL', N'SP0041')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (181, N'S', N'SP0042')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (182, N'M', N'SP0042')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (183, N'L', N'SP0042')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (184, N'XL', N'SP0042')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (185, N'S', N'SP0043')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (186, N'M', N'SP0043')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (187, N'L', N'SP0043')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (188, N'XL', N'SP0043')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (189, N'S', N'SP0044')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (190, N'M', N'SP0044')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (191, N'L', N'SP0044')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (192, N'XL', N'SP0044')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (193, N'S', N'SP0045')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (194, N'M', N'SP0045')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (195, N'L', N'SP0045')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (196, N'XL', N'SP0045')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (197, N'S', N'SP0046')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (198, N'M', N'SP0046')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (199, N'L', N'SP0046')
GO
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (200, N'XL', N'SP0046')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (201, N'S', N'SP0047')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (202, N'M', N'SP0047')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (203, N'L', N'SP0047')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (204, N'XL', N'SP0047')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (205, N'S', N'SP0048')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (206, N'M', N'SP0048')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (207, N'L', N'SP0048')
INSERT [dbo].[size] ([ID], [SIZESP], [MASP]) VALUES (208, N'XL', N'SP0048')
SET IDENTITY_INSERT [dbo].[size] OFF
GO
SET IDENTITY_INSERT [dbo].[taikhoanuser] ON 

INSERT [dbo].[taikhoanuser] ([ID], [MAUSER], [TENTK], [MATKHAU], [MAQUYEN]) VALUES (1, N'TK001', N'nguyenvana', N'password123', N'MQ001')
INSERT [dbo].[taikhoanuser] ([ID], [MAUSER], [TENTK], [MATKHAU], [MAQUYEN]) VALUES (2, N'TK002', N'tranthib', N'$2a$11$181x/su5FlcnxcWnuA7Q6OG6PFrMAn8HBIYSD1k1HapNGQkJLXnZ2', N'MQ001')
INSERT [dbo].[taikhoanuser] ([ID], [MAUSER], [TENTK], [MATKHAU], [MAQUYEN]) VALUES (3, N'TK003', N'levanc', N'def456', N'MQ002')
INSERT [dbo].[taikhoanuser] ([ID], [MAUSER], [TENTK], [MATKHAU], [MAQUYEN]) VALUES (4, N'TK004', N'phamthid', N'$2a$11$Q9KWc.MkRr9fgI1IyJrhL.2pON4amEmKpXtasImw.oINc/QsJInpC', N'MQ002')
INSERT [dbo].[taikhoanuser] ([ID], [MAUSER], [TENTK], [MATKHAU], [MAQUYEN]) VALUES (5, N'TK005', N'hoangvane', N'qwerty', N'MQ001')
INSERT [dbo].[taikhoanuser] ([ID], [MAUSER], [TENTK], [MATKHAU], [MAQUYEN]) VALUES (6, N'TK006', N'hoankien2k3@gmail.com', N'123456', N'MQ003')
INSERT [dbo].[taikhoanuser] ([ID], [MAUSER], [TENTK], [MATKHAU], [MAQUYEN]) VALUES (11, N'TK007', N'hoan', N'$2a$11$VsePf57eaUUbEwGNsT711.x/p31KPJHdI/MvR7nVHHXbDwNf6Ggp6', N'MQ001')
INSERT [dbo].[taikhoanuser] ([ID], [MAUSER], [TENTK], [MATKHAU], [MAQUYEN]) VALUES (19, N'TK008', N'abc@gmail.com', N'0245698745', NULL)
SET IDENTITY_INSERT [dbo].[taikhoanuser] OFF
GO
SET IDENTITY_INSERT [dbo].[thanhtoan] ON 

INSERT [dbo].[thanhtoan] ([ID], [MATHANHTOAN], [MAHD], [NGAYTHANHTOAN], [TONGTIEN], [PHUONGTHUCTHANHTOAN]) VALUES (1, N'TT001', N'HD001', CAST(N'2024-04-10T08:00:00.000' AS DateTime), 110, 1)
INSERT [dbo].[thanhtoan] ([ID], [MATHANHTOAN], [MAHD], [NGAYTHANHTOAN], [TONGTIEN], [PHUONGTHUCTHANHTOAN]) VALUES (2, N'TT002', N'HD002', CAST(N'2024-04-11T09:00:00.000' AS DateTime), 55, 0)
INSERT [dbo].[thanhtoan] ([ID], [MATHANHTOAN], [MAHD], [NGAYTHANHTOAN], [TONGTIEN], [PHUONGTHUCTHANHTOAN]) VALUES (3, N'TT003', N'HD003', CAST(N'2024-04-12T10:00:00.000' AS DateTime), 215, 1)
INSERT [dbo].[thanhtoan] ([ID], [MATHANHTOAN], [MAHD], [NGAYTHANHTOAN], [TONGTIEN], [PHUONGTHUCTHANHTOAN]) VALUES (4, N'TT004', N'HD004', CAST(N'2024-04-13T11:00:00.000' AS DateTime), 100, 0)
INSERT [dbo].[thanhtoan] ([ID], [MATHANHTOAN], [MAHD], [NGAYTHANHTOAN], [TONGTIEN], [PHUONGTHUCTHANHTOAN]) VALUES (5, N'TT005', N'HD005', CAST(N'2024-04-14T12:00:00.000' AS DateTime), 40, 1)
INSERT [dbo].[thanhtoan] ([ID], [MATHANHTOAN], [MAHD], [NGAYTHANHTOAN], [TONGTIEN], [PHUONGTHUCTHANHTOAN]) VALUES (6, N'TT006', N'HD006', CAST(N'2024-12-02T14:00:22.863' AS DateTime), 1725120, 1)
INSERT [dbo].[thanhtoan] ([ID], [MATHANHTOAN], [MAHD], [NGAYTHANHTOAN], [TONGTIEN], [PHUONGTHUCTHANHTOAN]) VALUES (7, N'TT007', N'HD007', CAST(N'2024-12-02T14:02:47.887' AS DateTime), 569050, 0)
INSERT [dbo].[thanhtoan] ([ID], [MATHANHTOAN], [MAHD], [NGAYTHANHTOAN], [TONGTIEN], [PHUONGTHUCTHANHTOAN]) VALUES (8, N'TT008', N'HD008', CAST(N'2024-12-02T14:05:00.420' AS DateTime), 2300160, 0)
INSERT [dbo].[thanhtoan] ([ID], [MATHANHTOAN], [MAHD], [NGAYTHANHTOAN], [TONGTIEN], [PHUONGTHUCTHANHTOAN]) VALUES (9, N'TT009', N'HD009', CAST(N'2024-12-02T15:36:12.710' AS DateTime), 4068190, 0)
INSERT [dbo].[thanhtoan] ([ID], [MATHANHTOAN], [MAHD], [NGAYTHANHTOAN], [TONGTIEN], [PHUONGTHUCTHANHTOAN]) VALUES (10, N'TT010', N'HD010', CAST(N'2024-12-02T15:51:51.123' AS DateTime), 1798810, 0)
INSERT [dbo].[thanhtoan] ([ID], [MATHANHTOAN], [MAHD], [NGAYTHANHTOAN], [TONGTIEN], [PHUONGTHUCTHANHTOAN]) VALUES (11, N'TT011', N'HD013', CAST(N'2024-12-02T15:59:19.030' AS DateTime), 2294170, 0)
INSERT [dbo].[thanhtoan] ([ID], [MATHANHTOAN], [MAHD], [NGAYTHANHTOAN], [TONGTIEN], [PHUONGTHUCTHANHTOAN]) VALUES (12, N'TT012', N'HD014', CAST(N'2024-12-02T16:01:40.567' AS DateTime), 575040, 0)
INSERT [dbo].[thanhtoan] ([ID], [MATHANHTOAN], [MAHD], [NGAYTHANHTOAN], [TONGTIEN], [PHUONGTHUCTHANHTOAN]) VALUES (13, N'TT013', N'HD015', CAST(N'2024-12-02T16:02:31.753' AS DateTime), 575040, 0)
INSERT [dbo].[thanhtoan] ([ID], [MATHANHTOAN], [MAHD], [NGAYTHANHTOAN], [TONGTIEN], [PHUONGTHUCTHANHTOAN]) VALUES (14, N'TT014', N'HD016', CAST(N'2024-12-02T16:04:47.643' AS DateTime), 575040, 0)
INSERT [dbo].[thanhtoan] ([ID], [MATHANHTOAN], [MAHD], [NGAYTHANHTOAN], [TONGTIEN], [PHUONGTHUCTHANHTOAN]) VALUES (15, N'TT015', N'HD017', CAST(N'2024-12-02T16:14:58.940' AS DateTime), 575040, 0)
INSERT [dbo].[thanhtoan] ([ID], [MATHANHTOAN], [MAHD], [NGAYTHANHTOAN], [TONGTIEN], [PHUONGTHUCTHANHTOAN]) VALUES (16, N'TT016', N'HD018', CAST(N'2024-12-02T16:21:34.120' AS DateTime), 575040, 0)
INSERT [dbo].[thanhtoan] ([ID], [MATHANHTOAN], [MAHD], [NGAYTHANHTOAN], [TONGTIEN], [PHUONGTHUCTHANHTOAN]) VALUES (17, N'TT017', N'HD019', CAST(N'2024-12-02T16:38:10.503' AS DateTime), 575040, 0)
INSERT [dbo].[thanhtoan] ([ID], [MATHANHTOAN], [MAHD], [NGAYTHANHTOAN], [TONGTIEN], [PHUONGTHUCTHANHTOAN]) VALUES (18, N'TT018', N'HD020', CAST(N'2024-12-02T16:49:10.893' AS DateTime), 575040, 0)
INSERT [dbo].[thanhtoan] ([ID], [MATHANHTOAN], [MAHD], [NGAYTHANHTOAN], [TONGTIEN], [PHUONGTHUCTHANHTOAN]) VALUES (19, N'TT019', N'HD021', CAST(N'2024-12-02T17:01:21.583' AS DateTime), 980690, 0)
INSERT [dbo].[thanhtoan] ([ID], [MATHANHTOAN], [MAHD], [NGAYTHANHTOAN], [TONGTIEN], [PHUONGTHUCTHANHTOAN]) VALUES (20, N'TT020', N'HD022', CAST(N'2024-12-02T18:22:51.353' AS DateTime), 575040, 0)
INSERT [dbo].[thanhtoan] ([ID], [MATHANHTOAN], [MAHD], [NGAYTHANHTOAN], [TONGTIEN], [PHUONGTHUCTHANHTOAN]) VALUES (21, N'TT021', N'HD023', CAST(N'2024-12-02T18:33:08.397' AS DateTime), 575040, 0)
INSERT [dbo].[thanhtoan] ([ID], [MATHANHTOAN], [MAHD], [NGAYTHANHTOAN], [TONGTIEN], [PHUONGTHUCTHANHTOAN]) VALUES (22, N'TT022', N'HD024', CAST(N'2024-12-02T18:40:15.410' AS DateTime), 575040, 0)
INSERT [dbo].[thanhtoan] ([ID], [MATHANHTOAN], [MAHD], [NGAYTHANHTOAN], [TONGTIEN], [PHUONGTHUCTHANHTOAN]) VALUES (23, N'TT023', N'HD025', CAST(N'2024-12-02T18:44:44.450' AS DateTime), 569050, 0)
INSERT [dbo].[thanhtoan] ([ID], [MATHANHTOAN], [MAHD], [NGAYTHANHTOAN], [TONGTIEN], [PHUONGTHUCTHANHTOAN]) VALUES (24, N'TT024', N'HD026', CAST(N'2024-12-02T18:46:35.183' AS DateTime), 409920, 0)
INSERT [dbo].[thanhtoan] ([ID], [MATHANHTOAN], [MAHD], [NGAYTHANHTOAN], [TONGTIEN], [PHUONGTHUCTHANHTOAN]) VALUES (25, N'TT025', N'HD027', CAST(N'2024-12-02T18:51:16.180' AS DateTime), 569050, 0)
INSERT [dbo].[thanhtoan] ([ID], [MATHANHTOAN], [MAHD], [NGAYTHANHTOAN], [TONGTIEN], [PHUONGTHUCTHANHTOAN]) VALUES (26, N'TT026', N'HD028', CAST(N'2024-12-02T18:52:50.737' AS DateTime), 1144090, 0)
INSERT [dbo].[thanhtoan] ([ID], [MATHANHTOAN], [MAHD], [NGAYTHANHTOAN], [TONGTIEN], [PHUONGTHUCTHANHTOAN]) VALUES (27, N'TT027', N'HD029', CAST(N'2024-12-02T18:55:06.740' AS DateTime), 575040, 0)
INSERT [dbo].[thanhtoan] ([ID], [MATHANHTOAN], [MAHD], [NGAYTHANHTOAN], [TONGTIEN], [PHUONGTHUCTHANHTOAN]) VALUES (28, N'TT028', N'HD030', CAST(N'2024-12-02T18:56:56.753' AS DateTime), 575040, 0)
INSERT [dbo].[thanhtoan] ([ID], [MATHANHTOAN], [MAHD], [NGAYTHANHTOAN], [TONGTIEN], [PHUONGTHUCTHANHTOAN]) VALUES (29, N'TT029', N'HD031', CAST(N'2024-12-02T19:01:38.323' AS DateTime), 575040, 0)
INSERT [dbo].[thanhtoan] ([ID], [MATHANHTOAN], [MAHD], [NGAYTHANHTOAN], [TONGTIEN], [PHUONGTHUCTHANHTOAN]) VALUES (30, N'TT030', N'HD032', CAST(N'2024-12-02T19:09:40.147' AS DateTime), 575040, 0)
SET IDENTITY_INSERT [dbo].[thanhtoan] OFF
GO
SET IDENTITY_INSERT [dbo].[thongtinadmin] ON 

INSERT [dbo].[thongtinadmin] ([ID], [TENNV], [EMAIL], [DIACHI], [SODIENTHOAI], [MAUSER]) VALUES (1, N'Admin A', N'admina@example.com', N'123 Đường ABC, Quận 1, TP. HCM', N'0987654321', N'TK006')
SET IDENTITY_INSERT [dbo].[thongtinadmin] OFF
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [UQ__chitieth__F50CB4CA50565FA7]    Script Date: 12/2/2024 7:31:32 PM ******/
ALTER TABLE [dbo].[chitiethoadon] ADD UNIQUE NONCLUSTERED 
(
	[MACTHD] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [UQ__danhgia__8597D60B42597BFF]    Script Date: 12/2/2024 7:31:32 PM ******/
ALTER TABLE [dbo].[danhgia] ADD UNIQUE NONCLUSTERED 
(
	[MADANHGIA] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [UQ__giohang__603F38A275F29BEE]    Script Date: 12/2/2024 7:31:32 PM ******/
ALTER TABLE [dbo].[giohang] ADD UNIQUE NONCLUSTERED 
(
	[MAGH] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [UQ__hoadon__603F20CF7A4758BE]    Script Date: 12/2/2024 7:31:32 PM ******/
ALTER TABLE [dbo].[hoadon] ADD UNIQUE NONCLUSTERED 
(
	[MAHD] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [UQ__kho__7ABD7C77ED6595A4]    Script Date: 12/2/2024 7:31:32 PM ******/
ALTER TABLE [dbo].[kho] ADD UNIQUE NONCLUSTERED 
(
	[MAKHO] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [UQ__khuyenma__603F592A08717948]    Script Date: 12/2/2024 7:31:32 PM ******/
ALTER TABLE [dbo].[khuyenmai] ADD UNIQUE NONCLUSTERED 
(
	[MAKM] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [UQ__loaisanp__2F633F22B8C486D2]    Script Date: 12/2/2024 7:31:32 PM ******/
ALTER TABLE [dbo].[loaisanpham] ADD UNIQUE NONCLUSTERED 
(
	[MALOAI] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [UQ_loaisanpham_MALOAI]    Script Date: 12/2/2024 7:31:32 PM ******/
ALTER TABLE [dbo].[loaisanpham] ADD  CONSTRAINT [UQ_loaisanpham_MALOAI] UNIQUE NONCLUSTERED 
(
	[MALOAI] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [UQ__nguoidun__603F5107FA073A99]    Script Date: 12/2/2024 7:31:32 PM ******/
ALTER TABLE [dbo].[nguoidung] ADD UNIQUE NONCLUSTERED 
(
	[MAND] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [UQ__nhanhieu__603F510B24DD6B9B]    Script Date: 12/2/2024 7:31:32 PM ******/
ALTER TABLE [dbo].[nhanhieu] ADD UNIQUE NONCLUSTERED 
(
	[MANH] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [UQ__nhomquye__3B380E4F3C5F9EF6]    Script Date: 12/2/2024 7:31:32 PM ******/
ALTER TABLE [dbo].[nhomquyen] ADD UNIQUE NONCLUSTERED 
(
	[TENQUYEN] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [UQ__nhomquye__F2A840CE46F29F44]    Script Date: 12/2/2024 7:31:32 PM ******/
ALTER TABLE [dbo].[nhomquyen] ADD UNIQUE NONCLUSTERED 
(
	[MAQUYEN] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [UQ__phanhoi__A158D2817C233938]    Script Date: 12/2/2024 7:31:32 PM ******/
ALTER TABLE [dbo].[phanhoi] ADD UNIQUE NONCLUSTERED 
(
	[MAPHANHOI] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [UQ__sanpham__60228A33911D593D]    Script Date: 12/2/2024 7:31:32 PM ******/
ALTER TABLE [dbo].[sanpham] ADD UNIQUE NONCLUSTERED 
(
	[MASP] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [UN_TenTK]    Script Date: 12/2/2024 7:31:32 PM ******/
ALTER TABLE [dbo].[taikhoanuser] ADD  CONSTRAINT [UN_TenTK] UNIQUE NONCLUSTERED 
(
	[TENTK] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [UQ__taikhoan__F5BD363389C3BFD4]    Script Date: 12/2/2024 7:31:32 PM ******/
ALTER TABLE [dbo].[taikhoanuser] ADD UNIQUE NONCLUSTERED 
(
	[MAUSER] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [UQ__thanhtoa__E5D8225D68B2D5F1]    Script Date: 12/2/2024 7:31:32 PM ******/
ALTER TABLE [dbo].[thanhtoan] ADD UNIQUE NONCLUSTERED 
(
	[MATHANHTOAN] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
ALTER TABLE [dbo].[chitiethoadon] ADD  DEFAULT (NULL) FOR [MAHD]
GO
ALTER TABLE [dbo].[chitiethoadon] ADD  DEFAULT (NULL) FOR [MASP]
GO
ALTER TABLE [dbo].[chitiethoadon] ADD  DEFAULT (NULL) FOR [SOLUONG]
GO
ALTER TABLE [dbo].[chitiethoadon] ADD  DEFAULT (NULL) FOR [THANHTIEN]
GO
ALTER TABLE [dbo].[danhgia] ADD  DEFAULT (NULL) FOR [MAND]
GO
ALTER TABLE [dbo].[danhgia] ADD  DEFAULT (NULL) FOR [MACTHD]
GO
ALTER TABLE [dbo].[danhgia] ADD  DEFAULT (NULL) FOR [NOIDUNG]
GO
ALTER TABLE [dbo].[danhgia] ADD  DEFAULT (NULL) FOR [SOSAO]
GO
ALTER TABLE [dbo].[danhgia] ADD  DEFAULT ((0)) FOR [TINHTRANG]
GO
ALTER TABLE [dbo].[giohang] ADD  DEFAULT ((0)) FOR [TINHTRANG]
GO
ALTER TABLE [dbo].[size] ADD  DEFAULT (NULL) FOR [SIZESP]
GO
ALTER TABLE [dbo].[size] ADD  DEFAULT (NULL) FOR [MASP]
GO
ALTER TABLE [dbo].[chitiethoadon]  WITH CHECK ADD  CONSTRAINT [FK_chitiethoadon_HOADON] FOREIGN KEY([MAHD])
REFERENCES [dbo].[hoadon] ([MAHD])
GO
ALTER TABLE [dbo].[chitiethoadon] CHECK CONSTRAINT [FK_chitiethoadon_HOADON]
GO
ALTER TABLE [dbo].[chitiethoadon]  WITH CHECK ADD  CONSTRAINT [FK_chitiethoadon_SANPHAM] FOREIGN KEY([MASP])
REFERENCES [dbo].[sanpham] ([MASP])
GO
ALTER TABLE [dbo].[chitiethoadon] CHECK CONSTRAINT [FK_chitiethoadon_SANPHAM]
GO
ALTER TABLE [dbo].[danhgia]  WITH CHECK ADD  CONSTRAINT [FK_danhgia_CTHD] FOREIGN KEY([MACTHD])
REFERENCES [dbo].[chitiethoadon] ([MACTHD])
GO
ALTER TABLE [dbo].[danhgia] CHECK CONSTRAINT [FK_danhgia_CTHD]
GO
ALTER TABLE [dbo].[diachi]  WITH CHECK ADD  CONSTRAINT [FK_diachi_nguoidung] FOREIGN KEY([MAND])
REFERENCES [dbo].[nguoidung] ([MAND])
GO
ALTER TABLE [dbo].[diachi] CHECK CONSTRAINT [FK_diachi_nguoidung]
GO
ALTER TABLE [dbo].[giohang]  WITH CHECK ADD  CONSTRAINT [FK_giohang_nguoidung] FOREIGN KEY([MAND])
REFERENCES [dbo].[nguoidung] ([MAND])
GO
ALTER TABLE [dbo].[giohang] CHECK CONSTRAINT [FK_giohang_nguoidung]
GO
ALTER TABLE [dbo].[giohang]  WITH CHECK ADD  CONSTRAINT [FK_giohang_SANPHAM] FOREIGN KEY([MASP])
REFERENCES [dbo].[sanpham] ([MASP])
GO
ALTER TABLE [dbo].[giohang] CHECK CONSTRAINT [FK_giohang_SANPHAM]
GO
ALTER TABLE [dbo].[hinhanh]  WITH CHECK ADD  CONSTRAINT [FK_hinhanh_MASANPHAM] FOREIGN KEY([MASP])
REFERENCES [dbo].[sanpham] ([MASP])
GO
ALTER TABLE [dbo].[hinhanh] CHECK CONSTRAINT [FK_hinhanh_MASANPHAM]
GO
ALTER TABLE [dbo].[hoadon]  WITH CHECK ADD  CONSTRAINT [FK_hoadon_MAnguoidung] FOREIGN KEY([MAND])
REFERENCES [dbo].[nguoidung] ([MAND])
GO
ALTER TABLE [dbo].[hoadon] CHECK CONSTRAINT [FK_hoadon_MAnguoidung]
GO
ALTER TABLE [dbo].[motasanpham]  WITH CHECK ADD  CONSTRAINT [FK_motasanpham_sanpham] FOREIGN KEY([MASP])
REFERENCES [dbo].[sanpham] ([MASP])
GO
ALTER TABLE [dbo].[motasanpham] CHECK CONSTRAINT [FK_motasanpham_sanpham]
GO
ALTER TABLE [dbo].[nguoidung]  WITH CHECK ADD  CONSTRAINT [FK_nguoidung_TAIKHOANUSER] FOREIGN KEY([MAUSER])
REFERENCES [dbo].[taikhoanuser] ([MAUSER])
GO
ALTER TABLE [dbo].[nguoidung] CHECK CONSTRAINT [FK_nguoidung_TAIKHOANUSER]
GO
ALTER TABLE [dbo].[phanhoi]  WITH CHECK ADD  CONSTRAINT [FK_phanhoi_DANHGIA] FOREIGN KEY([MADANHGIA])
REFERENCES [dbo].[danhgia] ([MADANHGIA])
GO
ALTER TABLE [dbo].[phanhoi] CHECK CONSTRAINT [FK_phanhoi_DANHGIA]
GO
ALTER TABLE [dbo].[sanpham]  WITH CHECK ADD  CONSTRAINT [FK_sanpham_KHUYENMAI] FOREIGN KEY([MAKM])
REFERENCES [dbo].[khuyenmai] ([MAKM])
GO
ALTER TABLE [dbo].[sanpham] CHECK CONSTRAINT [FK_sanpham_KHUYENMAI]
GO
ALTER TABLE [dbo].[sanpham]  WITH CHECK ADD  CONSTRAINT [FK_sanpham_LOAISANPHAM] FOREIGN KEY([MALOAI])
REFERENCES [dbo].[loaisanpham] ([MALOAI])
GO
ALTER TABLE [dbo].[sanpham] CHECK CONSTRAINT [FK_sanpham_LOAISANPHAM]
GO
ALTER TABLE [dbo].[sanpham]  WITH CHECK ADD  CONSTRAINT [FK_sanpham_NHANHIEU] FOREIGN KEY([MANH])
REFERENCES [dbo].[nhanhieu] ([MANH])
GO
ALTER TABLE [dbo].[sanpham] CHECK CONSTRAINT [FK_sanpham_NHANHIEU]
GO
ALTER TABLE [dbo].[taikhoanuser]  WITH CHECK ADD  CONSTRAINT [FK_taikhoanuser_Quyen] FOREIGN KEY([MAQUYEN])
REFERENCES [dbo].[nhomquyen] ([MAQUYEN])
GO
ALTER TABLE [dbo].[taikhoanuser] CHECK CONSTRAINT [FK_taikhoanuser_Quyen]
GO
ALTER TABLE [dbo].[thanhtoan]  WITH CHECK ADD  CONSTRAINT [FK_thanhtoan_HOADON] FOREIGN KEY([MAHD])
REFERENCES [dbo].[hoadon] ([MAHD])
GO
ALTER TABLE [dbo].[thanhtoan] CHECK CONSTRAINT [FK_thanhtoan_HOADON]
GO
ALTER TABLE [dbo].[thongtinadmin]  WITH CHECK ADD  CONSTRAINT [FK_thongtinadmin_TAIKHOANUSER] FOREIGN KEY([MAUSER])
REFERENCES [dbo].[taikhoanuser] ([MAUSER])
GO
ALTER TABLE [dbo].[thongtinadmin] CHECK CONSTRAINT [FK_thongtinadmin_TAIKHOANUSER]
GO
ALTER TABLE [dbo].[tonkho]  WITH CHECK ADD  CONSTRAINT [fk_tonkho_kho] FOREIGN KEY([MAKHO])
REFERENCES [dbo].[kho] ([MAKHO])
GO
ALTER TABLE [dbo].[tonkho] CHECK CONSTRAINT [fk_tonkho_kho]
GO
ALTER TABLE [dbo].[tonkho]  WITH CHECK ADD  CONSTRAINT [fk_tonkho_sanpham] FOREIGN KEY([MASP])
REFERENCES [dbo].[sanpham] ([MASP])
GO
ALTER TABLE [dbo].[tonkho] CHECK CONSTRAINT [fk_tonkho_sanpham]
GO
SET IDENTITY_INSERT [dbo].[giohang] ON;

INSERT INTO [dbo].[giohang] ([ID], [MAGH], [MAND], [MASP], [SIZE], [SOLUONG], [THANHTIEN], [TINHTRANG]) 
VALUES 
(1, 'GH001', 'ND001', 'SP0001', '29', 2, 1150080, 1),
(2, 'GH002', 'ND002', 'SP0002', '30', 1, 569050, 1),
(3, 'GH003', 'ND003', 'SP0003', '31', 3, 1229760, 1),
(4, 'GH004', 'ND004', 'SP0004', '32', 1, 405650, 0),
(5, 'GH005', 'ND005', 'SP0005', '33', 2, 1328100, 1);

SET IDENTITY_INSERT [dbo].[giohang] OFF;

SET IDENTITY_INSERT [dbo].[danhgia] ON;

INSERT INTO [dbo].[danhgia] ([ID], [MAND], [MADANHGIA], [MACTHD], [NOIDUNG], [SOSAO], [TINHTRANG]) 
VALUES 
(1, 'ND001', 'DG001', 'CTHD001', N'Sản phẩm rất tốt!', 5, 1),
(2, 'ND002', 'DG002', 'CTHD002', N'Chất lượng ổn nhưng giao hàng chậm.', 3, 1),
(3, 'ND003', 'DG003', 'CTHD003', N'Tôi rất hài lòng với dịch vụ.', 5, 1),
(4, 'ND004', 'DG004', 'CTHD004', N'Không như mong đợi.', 2, 0),
(5, 'ND005', 'DG005', 'CTHD005', N'Giá cả hợp lý và chất lượng tốt.', 4, 1);

SET IDENTITY_INSERT [dbo].[danhgia] OFF;

SET IDENTITY_INSERT [dbo].[chitiethoadon] ON;

INSERT INTO [dbo].[chitiethoadon] ([ID], [MACTHD], [MAHD], [MASP], [SIZE], [SOLUONG], [THANHTIEN]) 
VALUES 
(1, 'CTHD0035', 'HD001', 'SP0001', '29', 2, 1150080),
(2, 'CTHD0036', 'HD002', 'SP0002', '30', 1, 569050),
(3, 'CTHD0037', 'HD003', 'SP0003', '31', 3, 1229760),
(4, 'CTHD0038', 'HD004', 'SP0004', '32', 1, 405650),
(5, 'CTHD0039', 'HD005', 'SP0005', '33', 2, 1328100);

SET IDENTITY_INSERT [dbo].[chitiethoadon] OFF;
