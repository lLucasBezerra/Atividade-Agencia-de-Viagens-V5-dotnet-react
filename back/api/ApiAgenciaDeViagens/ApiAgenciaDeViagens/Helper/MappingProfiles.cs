using ApiAgenciaDeViagens.dto;
using ApiAgenciaDeViagens.Dto;
using ApiAgenciaDeViagens.Models;
using AutoMapper;

namespace ApiAgenciaDeViagens.Helper
{
    public class MappingProfiles : Profile
    {
        //para não retorna dados indesejáveis no json
        public MappingProfiles()
        {
            CreateMap<Cliente, ClienteDto>();
            CreateMap<ClienteDto, Cliente>();

            CreateMap<Destino, DestinoDto>();
            CreateMap<DestinoDto, Destino>();

            CreateMap<Voo, VooDto>();
            CreateMap<VooDto, Voo>();
            
            CreateMap<Promocao, PromocaoDto>();
            CreateMap<PromocaoDto, Promocao>();
        }
    }
}