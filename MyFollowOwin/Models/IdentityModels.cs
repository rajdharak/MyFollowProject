﻿using System.Data.Entity;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using System.ComponentModel.DataAnnotations;
using static MyFollowOwin.Models.RegisterViewModel;
using System;
using MyFollowOwin.Models;
using MyFolllowOwin.Models;
using MyFollowOwin.Migrations;

namespace MyFollowOwin.Models
{   

    public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
    {
        public ApplicationDbContext()
            : base("DefaultConnection", throwIfV1Schema: false)
        {
   
        }

        public static ApplicationDbContext Create()
        {
            return new ApplicationDbContext();
        }
       
        public DbSet<ProductOwners> Owners { get; set; }
        public DbSet<Followers> Followers { get; set; }
        public DbSet<OwnerProductMapping> AddedProducts { get; set; }
        public DbSet<Products> Products { get; set; }
        public DbSet<ProductUpdates> ProductUpdates { get; set; }
        public object AspNetUsers { get; internal set; }
        public DbSet<ProductMedia> ProductMedias { get; set; }
    }
}