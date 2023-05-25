using Microsoft.EntityFrameworkCore;

namespace Encoder.Models
{
    public class DBContext :DbContext
    {
        public DBContext(DbContextOptions<DBContext> options) : base(options) { }
        public DbSet<TextConvert> TextConverts { get; set; }
    }
}
