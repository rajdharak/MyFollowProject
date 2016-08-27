using MyFollowOwin.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MyFolllowOwin.Models
{
    //Class name and enum name cannot be the same. 
    //I have named enum instance as ProductMedia
    public class ProductMedia:CommonProperty
    {
        public string Data { get; set; }
    }
}