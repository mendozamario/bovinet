using System;
using System.ComponentModel.DataAnnotations;
using bovinet.Filters;
using Entity;

namespace bovinet.Models
{
    public class AnimalInputModel
    {
        [Required(ErrorMessage = "El codigo del animal es requerido")]
        public string Code { get; set; }
        [Required(ErrorMessage = "El la raza del animal es requerida")]
        public string Breed { get; set; }
        [Range(10, 1200, ErrorMessage = "El peso debe estar entre 10kg y 1200kg")]
        public float Weigth { get; set; }
        [Required(ErrorMessage = "La fecha es requerida")]
        public string DateBirth { get; set; }
        public string Type { get; set; }
        public string Status { get; set; }
        public string Origin { get; set; }
        [Required(ErrorMessage = "El id del Owner es necesario")]
        public string OwnerId { get; set; }
    }
    public class AnimalViewModel : AnimalInputModel
    {
        public AnimalViewModel (Animal animal)
        {
            Code = animal.Code;
            Breed = animal.Breed;
            Weigth = animal.Weigth;
            DateBirth = animal.DateBirth;
            Type = animal.Type;
            Status = animal.Status;
            Origin = animal.Origin;
            OwnerId = animal.OwnerId;
        }
    }
}
