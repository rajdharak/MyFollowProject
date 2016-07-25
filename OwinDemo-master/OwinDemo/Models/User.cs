using System;
using System.ComponentModel.DataAnnotations;
using Microsoft.AspNet.Identity.EntityFramework;
namespace OwinDemo.Models
{
    public class User:IdentityUser
    {
        [Required]
        public string DateOfBirth { get; set; }       

    }
}