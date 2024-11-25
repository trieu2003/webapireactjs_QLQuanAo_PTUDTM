using Microsoft.AspNetCore.Mvc;

namespace BE.Controllers
{
    public class SanPhamController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
