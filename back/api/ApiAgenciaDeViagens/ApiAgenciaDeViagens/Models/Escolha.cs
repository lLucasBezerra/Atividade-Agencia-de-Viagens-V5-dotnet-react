namespace ApiAgenciaDeViagens.Models
{
    public class Escolha
    {
        public Cliente ClienteId { get; set; }
        public Destino DestinoId { get; set; }
        public Voo vooId { get; set; }


        public Cliente Cliente { get; set; }
        public Destino Destino { get; set; }
        public Voo Voo { get; set; }
    }
}
