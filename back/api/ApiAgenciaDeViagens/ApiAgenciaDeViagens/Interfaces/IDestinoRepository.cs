using ApiAgenciaDeViagens.Models;

namespace ApiAgenciaDeViagens.Interfaces
{
    public interface IDestinoRepository
    {
        ICollection<Destino> GetDestinos();
        Destino GetDestino(int id);
        bool CreateDestino(Destino destino);
        bool Save();
    }
}
