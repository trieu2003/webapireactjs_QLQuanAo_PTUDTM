using BE.Services;
using BE.Models;
using Microsoft.AspNetCore.Mvc;

namespace BE.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class NguoiDungController : ControllerBase
    {
        private readonly INguoiDungService _nguoiDungService;

        public NguoiDungController(INguoiDungService nguoiDungService)
        {
            _nguoiDungService = nguoiDungService;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var users = await _nguoiDungService.GetAll();
            return Ok(users);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            var user = await _nguoiDungService.GetById(id);
            if (user == null) return NotFound();
            return Ok(user);
        }

        [HttpPost]
        public async Task<IActionResult> Create([FromBody] NguoiDung nguoiDung)
        {
            var newUser = await _nguoiDungService.Create(nguoiDung);
            return CreatedAtAction(nameof(GetById), new { id = newUser.ID }, newUser);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, [FromBody] NguoiDung nguoiDung)
        {
            var result = await _nguoiDungService.Update(id, nguoiDung);
            if (!result) return NotFound();
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var result = await _nguoiDungService.Delete(id);
            if (!result) return NotFound();
            return NoContent();
        }
    }
}
