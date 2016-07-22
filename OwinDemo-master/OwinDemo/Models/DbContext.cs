using Microsoft.AspNet.Identity.EntityFramework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace OwinDemo.Models
{
    public class DbContext: IdentityDbContext<User>
    {
        public DbContext() : base("Dbcontext")
        {

        }
    }
}