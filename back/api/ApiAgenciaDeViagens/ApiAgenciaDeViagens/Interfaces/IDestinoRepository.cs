using ApiAgenciaDeViagens.Models;

namespace ApiAgenciaDeViagens.Interfaces
{
    public interface IDestinoRepository
    {
        ICollection<Destino> GetDestinos();
        Destino GetDestino(int id);
        bool DestinoExist(int id);
        bool CreateDestino(Destino destino);
        bool UpdateDestino(Destino destino);
        bool DeleteDestino(Destino destino);
        bool Save();
    }
}
