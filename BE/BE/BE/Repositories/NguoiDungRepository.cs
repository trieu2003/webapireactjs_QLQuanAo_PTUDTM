using BE.Data;
using BE.Models;
using Microsoft.EntityFrameworkCore;

namespace BE.Repositories
{
    public class NguoiDungRepository : INguoiDungRepository
    {
        private readonly ApplicationDbContext _context;

        public NguoiDungRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<NguoiDung>> GetAll()
        {
            return await _context.NguoiDung.ToListAsync();
        }

        public async Task<NguoiDung> GetById(int id)
        {
            return await _context.NguoiDung.FindAsync(id);
        }

        public async Task<NguoiDung> Create(NguoiDung nguoiDung)
        {
            _context.NguoiDung.Add(nguoiDung);
            await _context.SaveChangesAsync();
            return nguoiDung;
        }

        public async Task<bool> Update(NguoiDung nguoiDung)
        {
            _context.Entry(nguoiDung).State = EntityState.Modified;
            return await _context.SaveChangesAsync() > 0;
        }

        public async Task<bool> Delete(int id)
        {
            var user = await _context.NguoiDung.FindAsync(id);
            if (user == null) return false;

            _context.NguoiDung.Remove(user);
            return await _context.SaveChangesAsync() > 0;
        }
    }
}
