using Forma1.Models;
using Microsoft.EntityFrameworkCore;

namespace Forma1.DAL
{
    public class TeamDbContext : DbContext
    {
        public DbSet<Team> Teams { get; set; }
        public TeamDbContext(DbContextOptions options) : base(options) { }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Team>().ToTable("teams");
            modelBuilder.Entity<Team>().HasKey(t => t.Id);
            modelBuilder.Entity<Team>().Property(t => t.Name).HasMaxLength(50);
        }

    }
}
