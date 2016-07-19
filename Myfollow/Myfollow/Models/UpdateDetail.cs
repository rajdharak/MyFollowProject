using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Myfollow.Models
{
    public class UpdateDetail
    {
        [Key]
        public int UpdateId { get; set; }

        [Required]
        [MaxLength(140)]
        public string Title { get; set; }

        [MaxLength(1000)]
        public string Details { get; set; }

        [Required]
        public ICollection<Media> Media { get; set; }
        public Products Products { get; set; }
    }
}