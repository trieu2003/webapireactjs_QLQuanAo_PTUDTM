using Microsoft.AspNetCore.Mvc;

namespace BE.Controllers
{
    public class GioHangController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
