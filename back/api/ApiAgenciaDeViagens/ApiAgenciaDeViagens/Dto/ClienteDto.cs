

namespace ApiAgenciaDeViagens.Dto
{
    public class ClienteDto
    {
        public int Id { get; set; }

        
        public string? Cpf { get; set; }

        
        public string? Origem { get; set; }

        
        public DateTime DataIda { get; set; }

        
        public DateTime DataVolta { get; set; }
    }
}
