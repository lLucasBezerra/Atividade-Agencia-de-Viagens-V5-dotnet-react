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

        public Destino GetDestino(int id)
        {
            return _context.Destinos.Where(d => d.Id == id).FirstOrDefault();
        }

        public ICollection<Destino> GetDestinos()
        {
            return _context.Destinos.ToList();
        }
    }
}
