using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Encoder.Migrations
{
    /// <inheritdoc />
    public partial class InitialScript : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "TextConverts",
                columns: table => new
                {
                    OriginalText = table.Column<string>(type: "nvarchar(450)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TextConverts", x => x.OriginalText);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "TextConverts");
        }
    }
}
