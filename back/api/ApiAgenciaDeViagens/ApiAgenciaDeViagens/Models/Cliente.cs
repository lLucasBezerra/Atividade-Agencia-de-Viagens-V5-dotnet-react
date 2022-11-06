namespace ApiAgenciaDeViagens.Models
{
    public class Cliente
    {
        public int Id { get; set; }
        public string? Cpf { get; set; }
        public string? Origem { get; set; }
        public DateTime DataIda { get; set; }
        public DateTime DataVolta { get; set; }
        //ManyToMany
        public ICollection<Escolha> Escolhas { get; set; }
    }
}
