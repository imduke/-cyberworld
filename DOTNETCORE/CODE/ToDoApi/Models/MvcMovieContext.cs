using Microsoft.EntityFrameworkCore;

namespace TodoApi.Models
{
    public class MvcMovieContext : DbContext
    {
        public MvcMovieContext (DbContextOptions<MvcMovieContext> options)
            : base(options)
        {
        }

        public DbSet<MvcMovie> MovieItems { get; set; }
    }
}