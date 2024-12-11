using BE.Models;
using BE.Repositories;

namespace BE.Services
{
    public class NguoiDungService : INguoiDungService
    {
        private readonly INguoiDungRepository _repository;

        public NguoiDungService(INguoiDungRepository repository)
        {
            _repository = repository;
        }

        public async Task<IEnumerable<NguoiDung>> GetAll()
        {
            return await _repository.GetAll();
        }

        public async Task<NguoiDung> GetById(int id)
        {
            return await _repository.GetById(id);
        }

        public async Task<NguoiDung> Create(NguoiDung nguoiDung)
        {
            return await _repository.Create(nguoiDung);
        }

        public async Task<bool> Update(int id, NguoiDung nguoiDung)
        {
            nguoiDung.ID = id;
            return await _repository.Update(nguoiDung);
        }

        public async Task<bool> Delete(int id)
        {
            return await _repository.Delete(id);
        }
    }
}
