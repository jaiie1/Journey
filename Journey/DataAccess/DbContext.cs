using Microsoft.AspNet.Identity.EntityFramework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Journey.DataAccess
{
    public class DbContext :IdentityDbContext<IdentityUser>
    {
        public DbContext() : base("Journey")
        {
        }


    }
}