namespace ApiAgenciaDeViagens.Models
{
    public class Escolha
    {
        public int ClienteId { get; set; }
        public int DestinoId { get; set; }
        public int vooId { get; set; }


        public Cliente Cliente { get; set; }
        public Destino Destino { get; set; }
        public Voo Voo { get; set; }
    }
}
