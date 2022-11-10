using ApiAgenciaDeViagens.Models;

namespace ApiAgenciaDeViagens.Interfaces
{
    public interface IVooRepository
    {
        ICollection<Voo> GetVoos();
        Voo GetVoo(int id);
        bool VooExists(int id);
    }
}
