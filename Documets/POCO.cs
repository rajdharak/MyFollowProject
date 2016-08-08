public class CommonProperties
{
    public int ID { get; set; }
    public DateTime CreateDate { get; set; }
    public DateTime ModifiedDate { get; set; }
}
public class Users :CommonProperties
{
  
    [Required]
    public string UserName { get; set; }

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

   
    public AddressInfo Address { get; set; }
    
    public string CompanyName { get; set; }

    public string Description { get; set; }
    
    public int FoundedYear { get; set; }
    [Url]
    public string WebsiteUrl { get; set; }
    public ICollection<Products> Products { get; set; }
}​
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

public enum Platform
{
    Mobile,
    Web,
    IOT
}
public class Products : CommonProperties
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

}
public class UpdateDetail:CommonProperties
{ 
    [Required]
    [MaxLength(140)]
    public string Title { get; set; }

    [MaxLength(1000)]
    public string Details { get; set; }

    [Required]
    public ICollection<Media> Media { get; set; }
    public Products Products { get; set; }
}
    public class Media:CommonProperties
    {
        public string Data { get; set; }
        public UpdateDetail UpdateDetails;
    }
public class Followers:CommonProperties
{
   
    public Users Users { get; set; }

    public Products Products { get; set; }

}