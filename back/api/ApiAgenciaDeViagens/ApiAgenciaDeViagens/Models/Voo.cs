namespace ApiAgenciaDeViagens.Models
{
    public class Voo
    {
        public int Id { get; set; }
        public string? CompanhiaA { get; set; }
        public double Preco { get; set; }
        //ManyToMany
        public ICollection<Escolha> Escolhas { get; set; }

    }
}
