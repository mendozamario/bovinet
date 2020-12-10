using bovinet.Models;
using Data;
using Entity;
using Logic;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace bovinet.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MedicineController : ControllerBase
    {
        private readonly MedicineService _medicineServices;
        public MedicineController(BovinetContext context)
        {
            _medicineServices = new MedicineService(context);
        }
        // GET: api/<MedicineController>
        [HttpGet]
        public IEnumerable<MedicineViewModel> Get()
        {
            var medicines = _medicineServices.Consult().Select(p => new MedicineViewModel(p));
            return medicines;
        }

        // POST api/<MedicineController>
        [HttpPost]
        public ActionResult<MedicineViewModel> Post(MedicineInputModel medicineInput)
        {
            Medicine medicine = MedicineMapper(medicineInput);
            SaveMedicineResponse saveMedicineResponse =_medicineServices.Save(medicine);
            var response = saveMedicineResponse;
            if (response.Error)
            {
                return BadRequest(response.Message);
            }
            return Ok(response.Medicine);
        }

        [HttpDelete("{identification}")]
        public ActionResult<string> Delete(string identification)
        {
            string messaje = _medicineServices.Delete(identification);
            return Ok(messaje);
        }
        public Medicine MedicineMapper(MedicineInputModel medicineInput)
        {
            var medicine = new Medicine
            {
                Code = medicineInput.Code,
                Name = medicineInput.Name,
                Type = medicineInput.Type,
                ExpirationDate = medicineInput.ExpirationDate,
                UnitCost = medicineInput.UnitCost,
                Quantity = medicineInput.Quantity
            };
            return medicine;
        }
    }
}
