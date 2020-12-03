using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Data;
using Entity;
using Logic;
using bovinet.Models;

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
        public Owner OwnerMapper(OwnerInputModel ownerInput)
        {
            var owner = new Owner
            {
                Id = ownerInput.Id,
                Name = ownerInput.Name,
                Mail = ownerInput.Mail,
                Password = ownerInput.Password,
                PhoneNumber = ownerInput.PhoneNumber,
                Type = ownerInput.Type
            };
            return owner;
        }
    }
}
