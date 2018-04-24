using Journey.Models;
using Microsoft.AspNet.Identity.EntityFramework;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace Journey.DataAccess
{
    public class DefaultDataContext :IdentityDbContext<IdentityUser>
    {
        public DefaultDataContext() : base("DefaultConnection")
        {
        }

       
        public DbSet<Vehicle> Vehicles { get; set; }

        public DbSet<Carguide> Carguides { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
        }

        public System.Data.Entity.DbSet<Journey.Models.User> User { get; set; }

    }
}