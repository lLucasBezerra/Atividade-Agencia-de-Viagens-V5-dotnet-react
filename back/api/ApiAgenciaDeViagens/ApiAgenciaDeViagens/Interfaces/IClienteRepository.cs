using ApiAgenciaDeViagens.Models;

namespace ApiAgenciaDeViagens.Interfaces
{
    public interface IClienteRepository
    {
        ICollection<Cliente> GetClientes();
        Cliente GetCliente(int id);
        Cliente GetCliente(string cpf);
        bool ClienteExist(int id);

        ICollection<Destino> GetDestinosByCliente(int id);
        ICollection<Voo> GetVoosByCliente(int id);


        bool CreateCliente(int destinoId, int vooId, Cliente cliente);
        bool UpdateCliente(int destinoId, int vooId, Cliente cliente);
        bool DeleteCliente(Cliente cliente);
        bool Save();
    }
}
