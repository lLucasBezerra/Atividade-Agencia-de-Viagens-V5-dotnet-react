using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace ApiAgenciaDeViagens.Models
{
    public class Voo
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public int Id { get; set; }
        [Column("companhiaAerea", TypeName = "VARCHAR(30)")]
        public string? CompanhiaA { get; set; }
        [Column("preco", TypeName = "DECIMAL(10,2)")]
        public double Preco { get; set; }
        //ManyToMany
        public ICollection<Escolha> Escolhas { get; set; }

    }
}
