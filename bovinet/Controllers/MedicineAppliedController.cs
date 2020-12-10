using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Entity;
using Data;
using Logic;
using bovinet.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace bovinet.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MedicineAppliedController : ControllerBase
    {
        private readonly MedicineAppliedService _medicineAppliedService;
        public MedicineAppliedController(BovinetContext context)
        {
            _medicineAppliedService = new MedicineAppliedService(context);
        }
        // GET: api/<MedicineAppliedController>
        [HttpGet]
        public IEnumerable<MedicineAppliedViewModel> Get()
        {
            var medicinesApplied = _medicineAppliedService.Consult().Select(p => new MedicineAppliedViewModel(p));
            return medicinesApplied;
        }

        // POST api/<MedicineAppliedController>
        [HttpPost]
        public ActionResult<MedicineAppliedViewModel> Post(MedicineAppliedInputModel medicineAppliedInput)
        {
            MedicineApplied medicineApplied = MedicineAppliedMapper(medicineAppliedInput);
            SaveMedicineAppliedResponse saveMedicineAppliedResponse = _medicineAppliedService.Save(medicineApplied);
            var response = saveMedicineAppliedResponse;
            if (response.Error)
            {
                return BadRequest(response.Error);
            }
            return Ok(response.MedicineApplied);
        }
        [HttpDelete("{identification}")]
        public ActionResult<string> Delete(string identification)
        {
            string messaje = _medicineAppliedService.Delete(identification);
            return Ok(messaje);
        }
        public MedicineApplied MedicineAppliedMapper(MedicineAppliedInputModel medicineAppliedInput)
        {
            var medicineApplied = new MedicineApplied
            {
                Id = medicineAppliedInput.Id,
                Date = medicineAppliedInput.Date
            };
            return medicineApplied;
        }
    }
}
