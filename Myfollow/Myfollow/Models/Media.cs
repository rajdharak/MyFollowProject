using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace Myfollow.Models
{
    public class Media
    {
        [Key]
        public int MediaId { get; set; }
        public string Data { get; set; }

        [ForeignKey("UpdateId")]
        public UpdateDetail UpdateDetails;
    }
}