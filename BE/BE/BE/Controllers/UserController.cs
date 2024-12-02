////using BE.Data;
////using Microsoft.AspNetCore.Mvc;

////namespace BE.Controllers
////{
////    [ApiController]
////    [Route("api/[controller]")]
////    public class UserController : ControllerBase
////    {
////        private readonly ApplicationDbContext _context;

////        public UserController(ApplicationDbContext context)
////        {
////            _context = context;
////        }


////        // Đăng nhập API
////        [HttpPost("login")]
////        public IActionResult Login([FromBody] LoginRequest request)
////        {
////            var user = _context.TaiKhoanUsers
////                .FirstOrDefault(u => u.TENTK == request.Username && u.MATKHAU == request.Password);

////            if (user == null) return Unauthorized("Tài khoản hoặc mật khẩu không chính xác");

////            var role = _context.NhomQuyens.FirstOrDefault(r => r.MAQUYEN == user.MAQUYEN);

////            if (role == null) return BadRequest("Quyền không hợp lệ");

////            string redirectUrl = role.TENQUYEN == "ADMIN" ? "AdminHome" : "NhanVienHome";
////            return Ok(new { Message = "Đăng nhập thành công", RedirectUrl = redirectUrl });
////        }

////        // Đổi mật khẩu API
////        [HttpPost("change-password")]
////        public IActionResult ChangePassword([FromBody] ChangePasswordRequest request)
////        {
////            var user = _context.TaiKhoanUsers.FirstOrDefault(u => u.MAUSER == request.MaUser);

////            if (user == null) return NotFound("Người dùng không tồn tại");

////            user.MATKHAU = request.NewPassword;
////            _context.SaveChanges();

////            return Ok("Đổi mật khẩu thành công");
////        }

////        // Lấy thông tin người dùng
////        [HttpGet("get-user-info/{maUser}")]
////        public IActionResult GetUserInfo(string maUser)
////        {
////            var user = _context.NguoiDungs.FirstOrDefault(u => u.MAUSER == maUser);
////            if (user != null) return Ok(user);

////            var admin = _context.ThongTinAdmins.FirstOrDefault(a => a.MAUSER == maUser);
////            if (admin != null) return Ok(admin);

////            return NotFound("Không tìm thấy thông tin người dùng");
////        }
////    }

////    // DTOs
////    public class LoginRequest
////    {
////        public string Username { get; set; }
////        public string Password { get; set; }
////    }

////    public class ChangePasswordRequest
////    {
////        public string MaUser { get; set; }
////        public string NewPassword { get; set; }
////    }
////}

//    using BE.Data;
//    using Microsoft.AspNetCore.Mvc;
//    using System.Linq;

//    namespace BE.Controllers
//    {
//        [ApiController]
//        [Route("api/[controller]")]
//        public class UserController : ControllerBase
//        {
//            private readonly ApplicationDbContext _context;

//            public UserController(ApplicationDbContext context)
//            {
//                _context = context;
//            }

//            // Đăng nhập API
//            [HttpPost("login")]
//            public IActionResult Login([FromBody] LoginRequest request)
//            {
//                // Kiểm tra tài khoản người dùng
//                var user = _context.TaiKhoanUsers
//                    .FirstOrDefault(u => u.TENTK == request.Username && u.MATKHAU == request.Password);

//                if (user == null) return Unauthorized(new { Message = "Tài khoản hoặc mật khẩu không chính xác" });

//                // Lấy thông tin quyền của người dùng
//                var role = _context.NhomQuyens.FirstOrDefault(r => r.MAQUYEN == user.MAQUYEN);
//                if (role == null) return BadRequest(new { Message = "Quyền không hợp lệ" });

//                // Lấy thông tin chi tiết của người dùng hoặc admin
//                var nguoiDung = _context.NguoiDungs.FirstOrDefault(nd => nd.MAUSER == user.MAUSER);
//                var admin = _context.ThongTinAdmins.FirstOrDefault(ad => ad.MAUSER == user.MAUSER);

//                var userInfo = nguoiDung != null ? nguoiDung : (object)admin;

//            // Xác định RedirectUrl
//            string redirectUrl = role.TENQUYEN == "Admin" ? "pages/AdminHome" : "pages/NhanVienHome";

//            return Ok(new
//                {
//                    Message = "Đăng nhập thành công",
//                    RedirectUrl = redirectUrl,
//                    Role = role.TENQUYEN,
//                    UserDetails = userInfo

//                });
//            }

//            // Đổi mật khẩu API
//            [HttpPost("change-password")]
//            public IActionResult ChangePassword([FromBody] ChangePasswordRequest request)
//            {
//                var user = _context.TaiKhoanUsers.FirstOrDefault(u => u.MAUSER == request.MaUser);

//                if (user == null) return NotFound(new { Message = "Người dùng không tồn tại" });

//                user.MATKHAU = request.NewPassword;
//                _context.SaveChanges();

//                return Ok(new { Message = "Đổi mật khẩu thành công" });
//            }

//            // Lấy thông tin người dùng
//            [HttpGet("get-user-info/{maUser}")]
//            public IActionResult GetUserInfo(string maUser)
//            {
//                var user = _context.NguoiDungs.FirstOrDefault(u => u.MAUSER == maUser);
//                if (user != null) return Ok(user);

//                var admin = _context.ThongTinAdmins.FirstOrDefault(a => a.MAUSER == maUser);
//                if (admin != null) return Ok(admin);

//                return NotFound(new { Message = "Không tìm thấy thông tin người dùng" });
//            }

//            // Lấy danh sách người dùng theo vai trò
//            [HttpGet("get-users-by-role/{role}")]
//            public IActionResult GetUsersByRole(string role)
//            {
//                var roles = _context.NhomQuyens.FirstOrDefault(r => r.TENQUYEN == role);

//                if (roles == null) return NotFound(new { Message = "Vai trò không hợp lệ" });

//                var users = _context.TaiKhoanUsers
//                    .Where(u => u.MAQUYEN == roles.MAQUYEN)
//                    .Select(u => new
//                    {
//                        u.TENTK,
//                        u.MAUSER,
//                        Role = role,
//                        UserDetails = _context.NguoiDungs.FirstOrDefault(nd => nd.MAUSER == u.MAUSER)
//                            ?? (object)_context.ThongTinAdmins.FirstOrDefault(ad => ad.MAUSER == u.MAUSER)
//                    })
//                    .ToList();

//                return Ok(users);
//            }
//        }

//        // DTOs
//        public class LoginRequest
//        {
//            public string Username { get; set; }
//            public string Password { get; set; }
//        }

//        public class ChangePasswordRequest
//        {
//            public string MaUser { get; set; }
//            public string NewPassword { get; set; }
//        }
//    }
////using BE.Data;
////using Microsoft.AspNetCore.Mvc;

////namespace BE.Controllers
////{
////    [ApiController]
////    [Route("api/[controller]")]
////    public class UserController : ControllerBase
////    {
////        private readonly ApplicationDbContext _context;

////        public UserController(ApplicationDbContext context)
////        {
////            _context = context;
////        }


////        // Đăng nhập API
////        [HttpPost("login")]
////        public IActionResult Login([FromBody] LoginRequest request)
////        {
////            var user = _context.TaiKhoanUsers
////                .FirstOrDefault(u => u.TENTK == request.Username && u.MATKHAU == request.Password);

////            if (user == null) return Unauthorized("Tài khoản hoặc mật khẩu không chính xác");

////            var role = _context.NhomQuyens.FirstOrDefault(r => r.MAQUYEN == user.MAQUYEN);

////            if (role == null) return BadRequest("Quyền không hợp lệ");

////            string redirectUrl = role.TENQUYEN == "ADMIN" ? "AdminHome" : "NhanVienHome";
////            return Ok(new { Message = "Đăng nhập thành công", RedirectUrl = redirectUrl });
////        }

////        // Đổi mật khẩu API
////        [HttpPost("change-password")]
////        public IActionResult ChangePassword([FromBody] ChangePasswordRequest request)
////        {
////            var user = _context.TaiKhoanUsers.FirstOrDefault(u => u.MAUSER == request.MaUser);

////            if (user == null) return NotFound("Người dùng không tồn tại");

////            user.MATKHAU = request.NewPassword;
////            _context.SaveChanges();

////            return Ok("Đổi mật khẩu thành công");
////        }

////        // Lấy thông tin người dùng
////        [HttpGet("get-user-info/{maUser}")]
////        public IActionResult GetUserInfo(string maUser)
////        {
////            var user = _context.NguoiDungs.FirstOrDefault(u => u.MAUSER == maUser);
////            if (user != null) return Ok(user);

////            var admin = _context.ThongTinAdmins.FirstOrDefault(a => a.MAUSER == maUser);
////            if (admin != null) return Ok(admin);

////            return NotFound("Không tìm thấy thông tin người dùng");
////        }
////    }

////    // DTOs
////    public class LoginRequest
////    {
////        public string Username { get; set; }
////        public string Password { get; set; }
////    }

////    public class ChangePasswordRequest
////    {
////        public string MaUser { get; set; }
////        public string NewPassword { get; set; }
////    }
////}

//    using BE.Data;
//    using Microsoft.AspNetCore.Mvc;
//    using System.Linq;

//    namespace BE.Controllers
//    {
//        [ApiController]
//        [Route("api/[controller]")]
//        public class UserController : ControllerBase
//        {
//            private readonly ApplicationDbContext _context;

//            public UserController(ApplicationDbContext context)
//            {
//                _context = context;
//            }

//            // Đăng nhập API
//            [HttpPost("login")]
//            public IActionResult Login([FromBody] LoginRequest request)
//            {
//                // Kiểm tra tài khoản người dùng
//                var user = _context.TaiKhoanUsers
//                    .FirstOrDefault(u => u.TENTK == request.Username && u.MATKHAU == request.Password);

//                if (user == null) return Unauthorized(new { Message = "Tài khoản hoặc mật khẩu không chính xác" });

//                // Lấy thông tin quyền của người dùng
//                var role = _context.NhomQuyens.FirstOrDefault(r => r.MAQUYEN == user.MAQUYEN);
//                if (role == null) return BadRequest(new { Message = "Quyền không hợp lệ" });

//                // Lấy thông tin chi tiết của người dùng hoặc admin
//                var nguoiDung = _context.NguoiDungs.FirstOrDefault(nd => nd.MAUSER == user.MAUSER);
//                var admin = _context.ThongTinAdmins.FirstOrDefault(ad => ad.MAUSER == user.MAUSER);

//                var userInfo = nguoiDung != null ? nguoiDung : (object)admin;

//            // Xác định RedirectUrl
//            string redirectUrl = role.TENQUYEN == "Admin" ? "pages/AdminHome" : "pages/NhanVienHome";

//            return Ok(new
//                {
//                    Message = "Đăng nhập thành công",
//                    RedirectUrl = redirectUrl,
//                    Role = role.TENQUYEN,
//                    UserDetails = userInfo

//                });
//            }

//            // Đổi mật khẩu API
//            [HttpPost("change-password")]
//            public IActionResult ChangePassword([FromBody] ChangePasswordRequest request)
//            {
//                var user = _context.TaiKhoanUsers.FirstOrDefault(u => u.MAUSER == request.MaUser);

//                if (user == null) return NotFound(new { Message = "Người dùng không tồn tại" });

//                user.MATKHAU = request.NewPassword;
//                _context.SaveChanges();

//                return Ok(new { Message = "Đổi mật khẩu thành công" });
//            }

//            // Lấy thông tin người dùng
//            [HttpGet("get-user-info/{maUser}")]
//            public IActionResult GetUserInfo(string maUser)
//            {
//                var user = _context.NguoiDungs.FirstOrDefault(u => u.MAUSER == maUser);
//                if (user != null) return Ok(user);

//                var admin = _context.ThongTinAdmins.FirstOrDefault(a => a.MAUSER == maUser);
//                if (admin != null) return Ok(admin);

//                return NotFound(new { Message = "Không tìm thấy thông tin người dùng" });
//            }

//            // Lấy danh sách người dùng theo vai trò
//            [HttpGet("get-users-by-role/{role}")]
//            public IActionResult GetUsersByRole(string role)
//            {
//                var roles = _context.NhomQuyens.FirstOrDefault(r => r.TENQUYEN == role);

//                if (roles == null) return NotFound(new { Message = "Vai trò không hợp lệ" });

//                var users = _context.TaiKhoanUsers
//                    .Where(u => u.MAQUYEN == roles.MAQUYEN)
//                    .Select(u => new
//                    {
//                        u.TENTK,
//                        u.MAUSER,
//                        Role = role,
//                        UserDetails = _context.NguoiDungs.FirstOrDefault(nd => nd.MAUSER == u.MAUSER)
//                            ?? (object)_context.ThongTinAdmins.FirstOrDefault(ad => ad.MAUSER == u.MAUSER)
//                    })
//                    .ToList();

//                return Ok(users);
//            }
//        }

//        // DTOs
//        public class LoginRequest
//        {
//            public string Username { get; set; }
//            public string Password { get; set; }
//        }

//        public class ChangePasswordRequest
//        {
//            public string MaUser { get; set; }
//            public string NewPassword { get; set; }
//        }
//    }

using BE.Data;
using Microsoft.AspNetCore.Mvc;
using System.Linq;

namespace BE.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public UserController(ApplicationDbContext context)
        {
            _context = context;
        }

        // Đăng nhập API
        [HttpPost("login")]
        public IActionResult Login([FromBody] LoginRequest request)
        {
            // Kiểm tra tài khoản người dùng
            var user = _context.TaiKhoanUsers
                .FirstOrDefault(u => u.TENTK == request.Username && u.MATKHAU == request.Password);

            if (user == null)
                return Unauthorized(new { Message = "Tài khoản hoặc mật khẩu không chính xác" });

            // Lấy thông tin quyền của người dùng
            var role = _context.NhomQuyens.FirstOrDefault(r => r.MAQUYEN == user.MAQUYEN);
            if (role == null)
                return BadRequest(new { Message = "Quyền không hợp lệ" });

            // Lấy thông tin chi tiết của người dùng hoặc admin
            var nguoiDung = _context.NguoiDung.FirstOrDefault(nd => nd.MAUSER == user.MAUSER);
            var admin = _context.ThongTinAdmins.FirstOrDefault(ad => ad.MAUSER == user.MAUSER);

            var userInfo = nguoiDung != null ? nguoiDung : (object)admin;

            // Xác định RedirectUrl dựa trên quyền của người dùng
            string redirectUrl;
            switch (role.TENQUYEN.ToUpper())
            {
                case "ADMIN":
                    redirectUrl = "pages/AdminHome";
                    break;
                case "NHANVIEN":
                    redirectUrl = "pages/NhanVienHome";
                    break;
                case "KHÁCH HÀNG":
                case "KHACHHANG":
                    redirectUrl = "pages/KhachHangHome";
                    break;
                default:
                    return BadRequest(new { Message = "Quyền không được hỗ trợ" });
            }

            return Ok(new
            {
                Message = "Đăng nhập thành công",
                RedirectUrl = redirectUrl,
                Role = role.TENQUYEN,
                UserDetails = userInfo
            });
        }

        // Đổi mật khẩu API
        [HttpPost("change-password")]
        public IActionResult ChangePassword([FromBody] ChangePasswordRequest request)
        {
            var user = _context.TaiKhoanUsers.FirstOrDefault(u => u.MAUSER == request.MaUser);

            if (user == null)
                return NotFound(new { Message = "Người dùng không tồn tại" });

            user.MATKHAU = request.NewPassword;
            _context.SaveChanges();

            return Ok(new { Message = "Đổi mật khẩu thành công" });
        }

        // Lấy thông tin người dùng
        [HttpGet("get-user-info/{maUser}")]
        public IActionResult GetUserInfo(string maUser)
        {
            var user = _context.NguoiDung.FirstOrDefault(u => u.MAUSER == maUser);
            if (user != null)
                return Ok(user);

            var admin = _context.ThongTinAdmins.FirstOrDefault(a => a.MAUSER == maUser);
            if (admin != null)
                return Ok(admin);

            return NotFound(new { Message = "Không tìm thấy thông tin người dùng" });
        }

        // Lấy danh sách người dùng theo vai trò
        [HttpGet("get-users-by-role/{role}")]
        public IActionResult GetUsersByRole(string role)
        {
            var roles = _context.NhomQuyens.FirstOrDefault(r => r.TENQUYEN == role);

            if (roles == null)
                return NotFound(new { Message = "Vai trò không hợp lệ" });

            var users = _context.TaiKhoanUsers
                .Where(u => u.MAQUYEN == roles.MAQUYEN)
                .Select(u => new
                {
                    u.TENTK,
                    u.MAUSER,
                    Role = role,
                    UserDetails = _context.NguoiDung.FirstOrDefault(nd => nd.MAUSER == u.MAUSER)
                        ?? (object)_context.ThongTinAdmins.FirstOrDefault(ad => ad.MAUSER == u.MAUSER)
                })
                .ToList();

            return Ok(users);
        }
    }

    // DTOs
    public class LoginRequest
    {
        public string Username { get; set; }
        public string Password { get; set; }
    }

    public class ChangePasswordRequest
    {
        public string MaUser { get; set; }
        public string NewPassword { get; set; }
    }
}
