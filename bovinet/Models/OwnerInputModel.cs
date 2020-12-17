using Entity;
using System.ComponentModel.DataAnnotations;

namespace bovinet.Models
{
    public class OwnerInputModel
    {
        [Required(ErrorMessage = "Identification is required")]
        public string Id { get; set; }
        [Required(ErrorMessage = "Name is required")]
        public string Name { get; set; }
        [Required(ErrorMessage = "Mail is required"), RegularExpression(@"^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$", ErrorMessage = "Email is not valid.")]
        public string Mail { get; set; }
        [Required(ErrorMessage = "Password is required")]
        public string Password { get; set; }
        [Required(ErrorMessage = "Phone number is required")]
        public string PhoneNumber { get; set; }
        [Required(ErrorMessage = "Type is required")]
        public string Type { get; set; } = "User";
        public string UserId { get; set; }
    }
    public class OwnerViewModel : OwnerInputModel
    {
        public OwnerViewModel(Owner owner)
        {
            Id = owner.Id;
            Name = owner.Name;
            Mail = owner.Mail;
            Password = owner.Password;
            PhoneNumber = owner.PhoneNumber;
            Type = owner.Type;
            UserId = owner.UserId;
        }
    }
}
