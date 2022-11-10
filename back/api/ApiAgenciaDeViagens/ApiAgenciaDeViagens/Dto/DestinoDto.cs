

namespace ApiAgenciaDeViagens.Dto
{
    public class DestinoDto
    {
        public int Id { get; set; }
        
        public string? Pais { get; set; }
        
        public string? Cidade { get; set; }

        public string? ObraR { get; set; }
        public int? PromocaoId { get; set; }
    }
}
