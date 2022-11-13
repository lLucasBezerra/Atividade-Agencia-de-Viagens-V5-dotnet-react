using ApiAgenciaDeViagens.Models;
using Microsoft.EntityFrameworkCore;

namespace ApiAgenciaDeViagens.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {

        }

        public DbSet<Cliente> Clientes { get; set; }
        public DbSet<Destino> Destinos { get; set; }
        public DbSet<Voo> Voos { get; set; }
        public DbSet<Promocao> Promocoes { get; set; }
        public DbSet<Escolha> Escolhas { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            //definido pk
            modelBuilder.Entity<Escolha>()
                .HasKey(e => new { e.ClienteId, e.DestinoId, e.vooId });

            //fazendo as relações
            modelBuilder.Entity<Escolha>()
                .HasOne(c => c.Cliente)
                .WithMany(e => e.Escolhas)
                .HasForeignKey(c => c.ClienteId);

            modelBuilder.Entity<Escolha>()
                .HasOne(d => d.Destino)
                .WithMany(e => e.Escolhas)
                .HasForeignKey(d => d.DestinoId);

            modelBuilder.Entity<Escolha>()
                .HasOne(v => v.Voo)
                .WithMany(e => e.Escolhas)
                .HasForeignKey(v => v.vooId);
                

            // Seeding
            modelBuilder.Entity<Promocao>().HasData(
                new Promocao
                {
                    Id = 1,
                    NomePromo = "Promo Inaugural",
                    Desconto = 20
                },
                new Promocao
                {
                    Id = 2,
                    NomePromo = "Novo Destino",
                    Desconto = 35
                },
                new Promocao
                {
                    Id = 3,
                    NomePromo = "Black Friday",
                    Desconto = 40
                }

            );
            modelBuilder.Entity<Destino>().HasData(
                new Destino
                {
                    Id = 1,
                    Pais = "Itália",
                    Cidade = "Cinque-Terre",
                    ObraR = "Luca",
                    PromocaoId = null
                },
                new Destino
                {
                    Id = 2,
                    Pais = "Itália",
                    Cidade = "París",
                    ObraR = "Ratatoulle",
                    PromocaoId = null
                },
                new Destino
                {
                    Id = 3,
                    Pais = "Itália",
                    Cidade = "Sicília",
                    ObraR = "Poderoso Chefão",
                    PromocaoId = null
                },
                new Destino
                {
                    Id = 4,
                    Pais = "Irlanda",
                    Cidade = "Condado de Down",
                    ObraR = "Game of Thrones",
                    PromocaoId = null
                },
                new Destino
                {
                    Id = 5,
                    Pais = "Georgia",
                    Cidade = "Atlanta",
                    ObraR = "Stranger Things",
                    PromocaoId = 1
                },
                new Destino
                {
                    Id = 6,
                    Pais = "Estados Unidos",
                    Cidade = "Los Angeles",
                    ObraR = "Sitcoms em geral",
                    PromocaoId = null
                },
                new Destino
                {
                    Id = 7,
                    Pais = "Inglaterra",
                    Cidade = "Londres",
                    ObraR = "Sandman",
                    PromocaoId = 2 
                }

            );
        }
    }
}
