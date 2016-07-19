using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

public enum Platform
{
    Mobile,
    Web,
    IOT
}

namespace Myfollow.Models
{
    public class Products :CommonProperties
    {
        [Required]
        public string Name { get; set; }
        [Required]
        public string Description { get; set; }
        [Required]
        [Url]
        public string HomePageUrl { get; set; }
        [Required]
        [Url]
        public string PlayStoreUrl { get; set; }
        [Required]
        [Url]
        public string AppStoreUrl { get; set; }

        public Platform Type { get; set; }

        public Users Users { get; set; }

        public ICollection<UpdateDetail> UpdateDetails { get; set; }
        public ICollection<Followers> Followers { get; set; }

    }
}