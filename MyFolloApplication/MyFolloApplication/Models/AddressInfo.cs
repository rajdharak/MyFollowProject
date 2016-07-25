using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MyFolloApplication.Models
{
    public class AddressInfo
    {
        public string Street1 { get; set; }
        public string Street2 { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string Country { get; set; }
        public long Pin { get; set; }
        public string ContactNo { get; set; }

    }
}