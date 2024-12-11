using BE.Models;

namespace BE.Repositories
{
    public interface INguoiDungRepository
    {
        Task<IEnumerable<NguoiDung>> GetAll();
        Task<NguoiDung> GetById(int id);
        Task<NguoiDung> Create(NguoiDung nguoiDung);
        Task<bool> Update(NguoiDung nguoiDung);
        Task<bool> Delete(int id);
    }
}
