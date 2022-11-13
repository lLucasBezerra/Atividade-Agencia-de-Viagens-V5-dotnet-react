using ApiAgenciaDeViagens.Interfaces;
using ApiAgenciaDeViagens.Models;
using ApiAgenciaDeViagens.Data;

namespace ApiAgenciaDeViagens.Interfaces
{
    public class PromocaoRepository : IPromocaoRepository
    {
        
        private DataContext _context;
        public PromocaoRepository(DataContext context)
        {
            _context = context;
        }
        public bool CreatePromocao(Promocao promocao)
        {
            _context.Add(promocao);
            return Save();
        }
        public bool Save()
        {
            var saved = _context.SaveChanges();
            return saved > 0 ? true : false;
        }
        public ICollection<Destino> GetDestinosByPromocao(int id)
        {
            return _context.Destinos.Where(d => d.PromocaoId == id).ToList();
        }

        public Promocao GetPromocao(int id)
        {
            return _context.Promocoes.Where(c => c.Id == id).FirstOrDefault();
        }

        public ICollection<Promocao> GetPromocoes()
        {
            return _context.Promocoes.ToList();
        }
        public bool PromocaoExist(int id)
        {
            return _context.Promocoes.Any(p => p.Id == id);
        }

        public bool UpdatePromocao(Promocao promocao)
        {
            _context.Update(promocao);
            return Save();
        }
    }
}