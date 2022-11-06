namespace ApiAgenciaDeViagens.Models
{
    public class Promocao
    {
        public int Id { get; set; }
        public string? NomePromo { get; set; }
        public int Desconto { get; set; }
        //ManyToOne
        public ICollection<Destino>? Destinos { get; set; }
    }
}
