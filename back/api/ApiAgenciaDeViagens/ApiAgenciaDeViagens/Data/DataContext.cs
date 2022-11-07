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
                

        }
    }
}
