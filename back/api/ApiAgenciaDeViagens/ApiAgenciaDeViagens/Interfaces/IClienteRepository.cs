using ApiAgenciaDeViagens.Models;

namespace ApiAgenciaDeViagens.Interfaces
{
    public interface IClienteRepository
    {
        ICollection<Cliente> GetClientes();
        Cliente GetCliente(int id);
        Cliente GetCliente(string cpf);

        ICollection<Destino> GetDestinosByCliente(int id);

    }
}
