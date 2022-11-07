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
        }
    }
}
