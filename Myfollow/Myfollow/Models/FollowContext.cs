using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace Myfollow.Models
{
    public class FollowContext : DbContext
    {
        public DbSet<Users> Users { get; set; }
        public DbSet<Products> Products { get; set; }
        public DbSet<AddressInfo> AddressInfo { get; set; }
        public DbSet<CommonProperties> CommonProprtties { get; set; }
        public DbSet<Media> Media { get; set; }
        public DbSet<UpdateDetail> UpdateDetails { get; set; }
        public DbSet<Followers> Followers { get; set; }
    }
}