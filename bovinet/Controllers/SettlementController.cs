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
    public class SettlementController : ControllerBase
    {
        private readonly SettlementService _settlementService;
        public SettlementController(BovinetContext context)
        {
            _settlementService = new SettlementService(context);
        }
        // GET: api/<SettlementController>
        [HttpGet]
        public IEnumerable<SettlementViewModel> Get()
        {
            var settlements = _settlementService.Consult().Select(result => new SettlementViewModel(result));
            return settlements;
        }
        // POST api/<SettlementController>
        [HttpPost]
        public ActionResult<SettlementViewModel> Post(SettlementInputModel settlementInput)
        {
            Settlement settlement = SettlementMapper(settlementInput);
            SaveSettlementResponse saveSettlementResponse = _settlementService.Save(settlement);
            var response = saveSettlementResponse;
            if (response.Error)
            {
                return BadRequest(response.Error);
            }
            return Ok(response.Settlement);
        }
        [HttpDelete("{identification}")]
        public ActionResult<string> Delete(string identification)
        {
            string messaje = _settlementService.Delete(identification);
            return Ok(messaje);
        }
        private Settlement SettlementMapper(SettlementInputModel settlementInput)
        {
            var settlement = new Settlement
            {
                Code = settlementInput.Code,
                SettlementDate = settlementInput.SettlementDate,
                Salary = settlementInput.Salary,
                Discount = settlementInput.Discount,
                Bonus = settlementInput.Bonus,
                EmployeeId = settlementInput.EmployeeId
            };
            return settlement;
        }
    }
}
