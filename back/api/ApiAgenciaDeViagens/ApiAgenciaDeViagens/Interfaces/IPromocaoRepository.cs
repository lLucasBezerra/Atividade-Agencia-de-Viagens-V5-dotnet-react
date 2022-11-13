using ApiAgenciaDeViagens.Models;

namespace ApiAgenciaDeViagens.Interfaces
{
    public interface IPromocaoRepository
    {
        ICollection<Promocao> GetPromocoes();
        Promocao GetPromocao(int id);
        ICollection<Destino> GetDestinosByPromocao(int id);
        bool PromocaoExist(int id);
        bool CreatePromocao(Promocao promocao);
        bool UpdatePromocao(Promocao promocao);
        bool Save();
    }
}