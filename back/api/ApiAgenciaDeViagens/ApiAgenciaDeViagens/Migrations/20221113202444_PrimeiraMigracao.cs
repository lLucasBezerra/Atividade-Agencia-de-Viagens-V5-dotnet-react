using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ApiAgenciaDeViagens.Migrations
{
    public partial class PrimeiraMigracao : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterDatabase()
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "clientes",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    cpf = table.Column<string>(type: "VARCHAR(11)", nullable: true)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    origem = table.Column<string>(type: "VARCHAR(30)", nullable: true)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    dataIda = table.Column<DateTime>(type: "DATE", nullable: false),
                    dataVolta = table.Column<DateTime>(type: "DATE", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_clientes", x => x.Id);
                })
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "Promocoes",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    nomePromocao = table.Column<string>(type: "VARCHAR(25)", nullable: true)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    desconto = table.Column<sbyte>(type: "TINYINT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Promocoes", x => x.Id);
                })
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "Voos",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    companhiaAerea = table.Column<string>(type: "VARCHAR(30)", nullable: true)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    preco = table.Column<decimal>(type: "DECIMAL(10,2)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Voos", x => x.Id);
                })
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "Destinos",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    pais = table.Column<string>(type: "VARCHAR(50)", nullable: true)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    cidade = table.Column<string>(type: "VARCHAR(50)", nullable: true)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    obraRelacionada = table.Column<string>(type: "VARCHAR(100)", nullable: true)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    PromocaoId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Destinos", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Destinos_Promocoes_PromocaoId",
                        column: x => x.PromocaoId,
                        principalTable: "Promocoes",
                        principalColumn: "Id");
                })
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "Escolhas",
                columns: table => new
                {
                    ClienteId = table.Column<int>(type: "int", nullable: false),
                    DestinoId = table.Column<int>(type: "int", nullable: false),
                    vooId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Escolhas", x => new { x.ClienteId, x.DestinoId, x.vooId });
                    table.ForeignKey(
                        name: "FK_Escolhas_clientes_ClienteId",
                        column: x => x.ClienteId,
                        principalTable: "clientes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Escolhas_Destinos_DestinoId",
                        column: x => x.DestinoId,
                        principalTable: "Destinos",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Escolhas_Voos_vooId",
                        column: x => x.vooId,
                        principalTable: "Voos",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                })
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.InsertData(
                table: "Destinos",
                columns: new[] { "Id", "cidade", "obraRelacionada", "pais", "PromocaoId" },
                values: new object[,]
                {
                    { 1, "Cinque-Terre", "Luca", "Itália", null },
                    { 2, "París", "Ratatoulle", "Itália", null },
                    { 3, "Sicília", "Poderoso Chefão", "Itália", null },
                    { 4, "Condado de Down", "Game of Thrones", "Irlanda", null },
                    { 6, "Los Angeles", "Sitcoms em geral", "Estados Unidos", null }
                });

            migrationBuilder.InsertData(
                table: "Promocoes",
                columns: new[] { "Id", "desconto", "nomePromocao" },
                values: new object[,]
                {
                    { 1, (sbyte)20, "Promo Inaugural" },
                    { 2, (sbyte)35, "Novo Destino" },
                    { 3, (sbyte)40, "Black Friday" }
                });

            migrationBuilder.InsertData(
                table: "Voos",
                columns: new[] { "Id", "companhiaAerea", "preco" },
                values: new object[,]
                {
                    { 1, "LATAM Airlines", 2500m },
                    { 2, "Delta Airlines", 3100m },
                    { 3, "Avianca", 5000m },
                    { 4, "Azul", 2700m }
                });

            migrationBuilder.InsertData(
                table: "Destinos",
                columns: new[] { "Id", "cidade", "obraRelacionada", "pais", "PromocaoId" },
                values: new object[] { 5, "Atlanta", "Stranger Things", "Georgia", 1 });

            migrationBuilder.InsertData(
                table: "Destinos",
                columns: new[] { "Id", "cidade", "obraRelacionada", "pais", "PromocaoId" },
                values: new object[] { 7, "Londres", "Sandman", "Inglaterra", 2 });

            migrationBuilder.CreateIndex(
                name: "IX_Destinos_PromocaoId",
                table: "Destinos",
                column: "PromocaoId");

            migrationBuilder.CreateIndex(
                name: "IX_Escolhas_DestinoId",
                table: "Escolhas",
                column: "DestinoId");

            migrationBuilder.CreateIndex(
                name: "IX_Escolhas_vooId",
                table: "Escolhas",
                column: "vooId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Escolhas");

            migrationBuilder.DropTable(
                name: "clientes");

            migrationBuilder.DropTable(
                name: "Destinos");

            migrationBuilder.DropTable(
                name: "Voos");

            migrationBuilder.DropTable(
                name: "Promocoes");
        }
    }
}
