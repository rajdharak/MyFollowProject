using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Myfollow.Models
{
    public class Followers
    {
        [Key]
        public int FollowerId { get; set; }

        public Users Users { get; set; }

        public Products Products { get; set; }
    }
}