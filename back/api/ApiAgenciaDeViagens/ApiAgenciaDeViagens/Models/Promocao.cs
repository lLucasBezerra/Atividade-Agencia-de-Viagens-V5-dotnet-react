using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ApiAgenciaDeViagens.Models
{
    public class Promocao
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public int Id { get; set; }

        [Column("nomePromocao", TypeName = "VARCHAR(25)")]
        public string? NomePromo { get; set; }
        [Column("desconto", TypeName = "TINYINT")]
        public int Desconto { get; set; }
        //ManyToOne
        public ICollection<Destino>? Destinos { get; set; }
    }
}
