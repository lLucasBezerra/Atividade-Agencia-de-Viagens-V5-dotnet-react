using ApiAgenciaDeViagens.Data;
using ApiAgenciaDeViagens.Interfaces;
using ApiAgenciaDeViagens.Models;

namespace ApiAgenciaDeViagens.Repositories
{
    public class ClienteRepository : IClienteRepository
    {
        private readonly DataContext _context;

        public ClienteRepository(DataContext context)
        {
            _context = context;
        }
        public ICollection<Cliente> GetClientes()
        {
            return _context.Clientes.OrderBy(c => c.Id).ToList();
        }
        public Cliente GetCliente(int id)
        {
            return _context.Clientes.Where(c => c.Id == id).FirstOrDefault();
        }

        public Cliente GetCliente(string cpf)
        {
            return _context.Clientes.Where(c => c.Cpf == cpf).FirstOrDefault();
        }

        public bool ClienteExist(int id)
        {
            return _context.Clientes.Any(c => c.Id == id);
        }

        public ICollection<Destino> GetDestinosByCliente(int id)
        {
            return _context.Escolhas.Where(c => c.ClienteId == id).Select(d => d.Destino).ToList();
        }

        public ICollection<Voo> GetVoosByCliente(int id)
        {
            return _context.Escolhas.Where(c => c.ClienteId == id).Select(v => v.Voo).ToList();
        }
    }
}
