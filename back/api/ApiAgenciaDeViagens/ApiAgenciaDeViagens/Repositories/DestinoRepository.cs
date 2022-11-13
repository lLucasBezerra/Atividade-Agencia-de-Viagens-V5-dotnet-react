using ApiAgenciaDeViagens.Data;
using ApiAgenciaDeViagens.Interfaces;
using ApiAgenciaDeViagens.Models;

namespace ApiAgenciaDeViagens.Repositories
{
    public class DestinoRepository : IDestinoRepository
    {
        private DataContext _context;
        public DestinoRepository(DataContext context)
        {
            _context = context;
        }

        public bool CreateDestino(Destino destino)
        {
           _context.Add(destino);
           return Save();
        }
        
        public bool Save()
        {
            var saved = _context.SaveChanges();
            return saved > 0 ? true : false;
        }

        public Destino GetDestino(int id)
        {
            return _context.Destinos.Where(d => d.Id == id).FirstOrDefault();
        }

        public ICollection<Destino> GetDestinos()
        {
            return _context.Destinos.ToList();
        }
         public bool DestinoExist(int id)
        {
            return _context.Destinos.Any(p => p.Id == id);
        }

        public bool UpdateDestino(Destino destino)
        {
            _context.Update(destino);
            return Save();
        }
        public bool DeleteDestino(Destino destino)
        {
            _context.Remove(destino);
            return Save();
        }
    }
}
