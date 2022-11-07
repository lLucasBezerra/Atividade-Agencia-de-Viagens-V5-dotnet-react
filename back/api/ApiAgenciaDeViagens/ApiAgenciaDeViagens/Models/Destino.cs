using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace ApiAgenciaDeViagens.Models
{
    public class Destino
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public int Id { get; set; }

        [Column("pais", TypeName = "VARCHAR(50)")]
        public string? Pais { get; set; }
        [Column("cidade", TypeName = "VARCHAR(50)")]
        public string? Cidade { get; set; }
        [Column("obraRelacionada", TypeName = "VARCHAR(100)")]
        public string? ObraR { get; set; }

        //OneToMany
        
        public Promocao? Promocao { get; set; }
        //ManyToMany
        public ICollection<Escolha> Escolhas { get; set; }

    }
}
