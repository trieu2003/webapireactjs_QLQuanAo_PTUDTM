using BE.Models;

namespace BE.Services
{
    public interface INguoiDungService
    {
        Task<IEnumerable<NguoiDung>> GetAll();
        Task<NguoiDung> GetById(int id);
        Task<NguoiDung> Create(NguoiDung nguoiDung);
        Task<bool> Update(int id, NguoiDung nguoiDung);
        Task<bool> Delete(int id);
    }
}
