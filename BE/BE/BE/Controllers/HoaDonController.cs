using Microsoft.AspNetCore.Mvc;

namespace BE.Controllers
{
    public class HoaDonController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
