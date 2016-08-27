using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace MyFollowOwin.Models
{
    public class AddressInfo
    {
        [Required]
        [StringLength(160, ErrorMessage = "The Street1 must contains 10 characters")]
        public string Street1 { get; set; }
        [StringLength(160, ErrorMessage = "The Street2 must contains 10 characters")]
        public string Street2 { get; set; }

        [Required]
        [StringLength(160, ErrorMessage = "The City must contains 10 characters")]
        public string City { get; set; }

        [Required]
        [StringLength(160, ErrorMessage = "The State must contains 10 characters")]
        public string State { get; set; }

        [Required]
        [StringLength(160, ErrorMessage = "The Country must contains 10 characters")]
        public string Country { get; set; }

        [Required]
        public long Pin { get; set; }

        [Required]
        [StringLength(10, ErrorMessage = "The Mobile must contains 10 characters", MinimumLength = 10)]
        public string ContactNo { get; set; }
    }
}