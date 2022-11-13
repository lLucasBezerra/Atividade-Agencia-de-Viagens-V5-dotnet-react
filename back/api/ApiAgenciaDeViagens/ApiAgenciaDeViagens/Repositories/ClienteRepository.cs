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

        public bool CreateCliente(int destinoId, int vooId, Cliente cliente)
        {
            var clienteDestino = _context.Destinos.Where(d => d.Id == destinoId).FirstOrDefault();
            var clienteVoo = _context.Voos.Where(v => v.Id == vooId).FirstOrDefault();
            
            var escolhas = new Escolha()
            {
                Cliente = cliente,
                Destino = clienteDestino,
                Voo = clienteVoo
            };

            _context.Add(escolhas);
            _context.Add(cliente);
            
            return Save();
        }

        public bool Save()
        {
            var saved = _context.SaveChanges();
            return saved > 0 ? true : false;
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

        public bool UpdateCliente(int destinoId, int vooId, Cliente cliente)
        {
            _context.Update(cliente);
            return Save();
        }
    }
}
