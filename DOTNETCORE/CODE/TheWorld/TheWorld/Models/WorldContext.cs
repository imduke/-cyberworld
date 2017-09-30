using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TheWorld.Models
{
    public class WorldContext : DbContext 
    {
        private IConfigurationRoot _config;
        public WorldContext(IConfigurationRoot configurationRoot)
        {
            _config = configurationRoot;
        }

        public DbSet<Trip> Trips { get; set; }
        public DbSet<Stop> Stops { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder dbContextOptionsBuilder) {
            base.OnConfiguring(dbContextOptionsBuilder);
            dbContextOptionsBuilder.UseSqlServer(_config["ConnectionString:WorldContextConnection"]);
        }
    }
}
