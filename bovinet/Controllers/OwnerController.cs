using System.Collections.Generic;
using System.Linq;
using bovinet.Models;
using Data;
using Entity;
using Logic;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace bovinet.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OwnerController : ControllerBase
    {
        private readonly OwnerService _ownerService;
        public OwnerController(BovinetContext context)
        {
            _ownerService = new OwnerService(context);
        }
        // GET: api/<OwnerController>
        [HttpGet]
        public IEnumerable<OwnerViewModel> Get()
        {
            var owners = _ownerService.Consult().Select(p => new OwnerViewModel(p));
            return owners;
        }
        // GET: api/<OwnerController>
        [HttpGet("{id}")]
        public OwnerViewModel Get(string id)
        {
            var owner = _ownerService.Consult().Where(p => p.Id == id || p.UserId == id).Select(p => new OwnerViewModel(p)).FirstOrDefault();
            return owner;
        }
        // POST api/<OwnerController>
        [HttpPost]
        public ActionResult<OwnerViewModel> Post(OwnerInputModel ownerInput)
        {
            Owner owner = OwnerMapper(ownerInput);
            SaveOwnerRespone saveOwnerRespone = _ownerService.Save(owner);
            var response = saveOwnerRespone;
            if (response.Error)
            {
                return BadRequest(response.Error);
            }
            return Ok(response.Owner);
        }

        [HttpDelete("{identification}")]
        public ActionResult<string> Delete(string identification)
        {
            string messaje = _ownerService.Delete(identification);
            return Ok(messaje);
        }
        public Owner OwnerMapper(OwnerInputModel ownerInput)
        {
            var owner = new Owner
            {
                Id = ownerInput.Id,
                Name = ownerInput.Name,
                Mail = ownerInput.Mail,
                Password = ownerInput.Password,
                PhoneNumber = ownerInput.PhoneNumber,
                Type = ownerInput.Type,
                UserId = ownerInput.UserId
            };

            return owner;
        }
    }
}
