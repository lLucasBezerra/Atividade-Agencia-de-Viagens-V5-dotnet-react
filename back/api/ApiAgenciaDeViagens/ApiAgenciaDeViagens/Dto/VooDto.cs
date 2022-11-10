using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.ComponentModel.DataAnnotations.Schema;

namespace ApiAgenciaDeViagens.dto
{
    public class VooDto
    {
        public int Id { get; set; }
        
        public string? CompanhiaA { get; set; }
    
        public double Preco { get; set; }
    }
}
