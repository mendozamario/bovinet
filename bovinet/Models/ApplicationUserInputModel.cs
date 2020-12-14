using System.ComponentModel.DataAnnotations;

namespace bovinet.Models
{
    public class ApplicationUserInputModel
    {
        [Required(ErrorMessage = "Nombre de usuario requerido")]
        public string Username { get; set; }

        [Required(ErrorMessage = "La contraseña de acceso es requerida")]
        public string Password { get; set; }

        [Required(ErrorMessage = "El email de acceso es requerido")]
        public string Email { get; set; }
    }
}
