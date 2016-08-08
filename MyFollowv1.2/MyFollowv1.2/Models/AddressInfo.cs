using System.ComponentModel.DataAnnotations;

namespace MyFollowv1._2.Models
{
    public class AddressInfo
    {
        [Required]
        [StringLength(160)]
        public string Street1 { get; set; }
        [StringLength(160)]
        public string Street2 { get; set; }
        [Required]
        [StringLength(160)]
        public string City { get; set; }
        [Required]
        [StringLength(160)]
        public string State { get; set; }
        [Required]
        [StringLength(160)]
        public string Country { get; set; }
        [Required]
        [DataType(DataType.PostalCode)]
        public long Pin { get; set; }
        [Required]
        [DataType(DataType.PhoneNumber)]
        public string ContactNo { get; set; }
    }
}