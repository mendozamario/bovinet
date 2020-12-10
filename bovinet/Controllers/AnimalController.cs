using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Entity;
using bovinet.Models;
using Logic;
using Data;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace bovinet.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AnimalController : ControllerBase
    {
        private readonly AnimalService _animalService;
        public AnimalController(BovinetContext context)
        {
            _animalService = new AnimalService(context);
        }
        // GET: api/<AnimalController>
        [HttpGet]
        public IEnumerable<AnimalViewModel> Get()
        {
            var animals = _animalService.Consult().Select(p => new AnimalViewModel(p));
            return animals;
        }
        // GET api/<PersonaController>/5
        [HttpGet("{id}")]
        public ActionResult<Animal> Get(string code)
        {
            try
            {
                var animal = _animalService.FindAnimal(code);
                if(animal == null)
                {
                    return NotFound();
                }
                return Ok(animal);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }
        // POST api/<AnimalController>
        [HttpPost]
        public ActionResult<AnimalViewModel> Post(AnimalInputModel animalInput)
        {
            Animal animal = AnimalMapper(animalInput);
            SaveAnimalResponse saveAnimalResponse = _animalService.Save(animal);
            var response = saveAnimalResponse;
            if (response.Error)
            {
                return BadRequest(response.Message);
            }
            return Ok(response.Animal);
        }
        
        [HttpDelete("{identification}")]
        public ActionResult<string> Delete(string identification)
        {
            string messaje = _animalService.Delete(identification);
            return Ok(messaje);
        }
        [HttpPut("{identificacion}")]
        public ActionResult<string> Put(AnimalInputModel animalInput)
        {
            Animal animal = AnimalMapper(animalInput);
            var mensaje = _animalService.Update(animal);
            return Ok(mensaje);
        }
        public Animal AnimalMapper(AnimalInputModel animalInput)
        {
            var animal = new Animal
            {
                Code = animalInput.Code,
                Breed = animalInput.Breed,
                Weigth = animalInput.Weigth,
                DateBirth = animalInput.DateBirth,
                Type = animalInput.Type,
                Status = animalInput.Status,
                Origin = animalInput.Origin,
                OwnerId =  animalInput.OwnerId
            };
            return animal;
        }
    }
}
