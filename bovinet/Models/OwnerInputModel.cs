using Entity;

namespace bovinet.Models
{
    public class OwnerInputModel
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string Mail { get; set; }
        public string Password { get; set; }
        public string PhoneNumber { get; set; }
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
