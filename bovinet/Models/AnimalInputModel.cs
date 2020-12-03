using System;
using Entity;

namespace bovinet.Models
{
    public class AnimalInputModel
    {
        public string Code { get; set; }
        public string Breed { get; set; }
        public float Weigth { get; set; }
        public string DateBirth { get; set; }
        public string Type { get; set; }
        public string Status { get; set; }
        public string Origin { get; set; }
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
        }
    }
}