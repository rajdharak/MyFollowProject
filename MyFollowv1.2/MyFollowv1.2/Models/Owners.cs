using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MyFollowv1._2.Models
{
    public class Owners
    {
        public int Id { get; set; }
        public string CompanyName { get; set; }

        public string Description { get; set; }

        public string FoundedYear { get; set; }

        public string WebsiteUrl { get; set; }

        ApplicationUser User { get; set; }
    }
}