using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Myfollow.Models
{
    public class Users
    {

        [Required]
        public string Name { get; set; }

        [Required]
        [DataType(DataType.EmailAddress)]
        [EmailAddress]
        public string Email { get; set; }

        [Required]
        [DataType(DataType.Password)]
        [Display(Name = "Password")]
        public string Password { get; set; }

        [Required]
        [DisplayFormat(DataFormatString = "{0:MMM dd, yyyy}")]
        public DateTime DateOfBirth { get; set; }

        [Required]
        public AddressInfo Address { get; set; }

        public string CompanyName { get; set; }

        public string Description { get; set; }

        public int FoundedYear { get; set; }
        [Url]
        public string WebsiteUrl { get; set; }

        public ICollection<Followers> Followers { get; set; }
        public ICollection<Products> Products { get; set; }
    }
}