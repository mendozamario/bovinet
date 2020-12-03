using System;
using Entity;
using Data;
using System.Collections.Generic;
using System.Linq;

namespace Logic
{
    public class AnimalService
    {
        private readonly BovinetContext _context;
        public AnimalService(BovinetContext context)
        {
            _context = context;
        } 
        public SaveAnimalResponse Save(Animal animal)
        {
            try
            {
                var animalSearched = _context.Animals.Find(animal.Code);
                if (animalSearched != null)
                {
                    return new SaveAnimalResponse("Error, animal has been registered");
                }
                _context.Animals.Add(animal);
                _context.SaveChanges();
                return new SaveAnimalResponse(animal);
            }
            catch (System.Exception e)
            {
                return new SaveAnimalResponse($"Aplication Error: {e.Message}");
            }
        }
        public List<Animal> Consult ()
        {
            List<Animal> animals = _context.Animals.ToList();
            return animals; 
        }
        public string Delete(string code)
        {
            try
            {
                var animal = _context.Animals.Find(code);
                if (animal != null)
                {
                    _context.Animals.Remove(animal);
                    _context.SaveChanges();
                    return "Animal has been removed";
                }
                else
                {
                    return "Animal dont registered";
                }
            }
            catch (Exception e)
            {
                return $"Application Error: {e.Message}";
            }
        }
    }

    public class SaveAnimalResponse
    {
        public SaveAnimalResponse(string message)
        {
            Message = message;
            Error = true;
        }
        public SaveAnimalResponse(Animal animal)
        {
            Animal = animal;
            Error = false;
        }
        public bool Error { get; set; }
        public string Message { get; set; }
        public Animal Animal { get; set; }
    }
}
