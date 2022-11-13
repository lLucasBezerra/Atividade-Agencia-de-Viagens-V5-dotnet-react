using ApiAgenciaDeViagens.Data;
using ApiAgenciaDeViagens.Interfaces;
using ApiAgenciaDeViagens.Models;
using AutoMapper;

namespace ApiAgenciaDeViagens.Repositories
{
    public class VooRepository : IVooRepository
    {
        private readonly DataContext _context;
        private readonly IMapper _mapper;

        public VooRepository(DataContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public bool CreateVoo(Voo voo)
        {
            _context.Add(voo);
            return Save();
        }

        public bool Save()
        {
            var saved = _context.SaveChanges();
            return saved > 0 ? true : false;
        }

        public Voo GetVoo(int id)
        {
            return _context.Voos.Where(v => v.Id == id).FirstOrDefault();
        }
        public bool VooExists(int id)
        {
            return _context.Voos.Any(v => v.Id == id);
        }

        public ICollection<Voo> GetVoos()
        {
            return _context.Voos.ToList();
        }

        public bool UpdateVoo(Voo voo)
        {
            _context.Update(voo);
            return Save();
        }
        public bool DeleteVoo(Voo voo)
        {
            _context.Remove(voo);
            return Save();
        }
    }
}
