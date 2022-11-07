using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ApiAgenciaDeViagens.Models
{
    [Table("clientes")]
    public class Cliente
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public int Id { get; set; }

        [Column("cpf", TypeName = "VARCHAR(11)")]
        public string? Cpf { get; set; }

        [Column("origem", TypeName = "VARCHAR(30)")]
        public string? Origem { get; set; }

        [Column("dataIda", TypeName = "DATE")]
        public DateTime DataIda { get; set; }

        [Column("dataVolta", TypeName = "DATE")]
        public DateTime DataVolta { get; set; }
        //ManyToMany
        public ICollection<Escolha> Escolhas { get; set; }
    }
}
