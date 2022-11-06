namespace ApiAgenciaDeViagens.Models
{
    public class Destino
    {
        public int Id { get; set; }
        public string? Pais { get; set; }
        public string? Cidade { get; set; }
        public string? ObraR { get; set; }

        //OneToMany
        public Promocao? Promocao { get; set; }
        //ManyToMany
        public ICollection<Escolha> Escolhas { get; set; }

    }
}
