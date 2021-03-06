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
    public class EmployeeController : ControllerBase
    {
        private readonly EmployeeService _employeeService;
        public EmployeeController(BovinetContext context)
        {
            _employeeService = new EmployeeService(context);   
        }
        // GET: api/<EmployeeController>
        [HttpGet]
        public IEnumerable<EmployeeViewModel> Get()
        {
            var employees = _employeeService.Consult().Select(p => new EmployeeViewModel(p));
            return employees;
        }
         // GET: api/<EmployeeController>
        [HttpGet("{id}")]
        public EmployeeViewModel Get(string id)
        {
            var employee = _employeeService.Consult().Where(p => p.Id == id).Select(p => new EmployeeViewModel(p)).FirstOrDefault();
            return employee;
        }
        // POST api/<EmployeeController>
        [HttpPost]
        public ActionResult<EmployeeViewModel> Post(EmployeeInputModel employeeInput)
        {
            Employee employee = EmployeeMapper(employeeInput);
            SaveEmployeeResponse saveEmployeeResponse = _employeeService.Save(employee);
            var response = saveEmployeeResponse;
            if (response.Error)
            {
                return BadRequest(response.Message);
            }
            return Ok(response.Employee);
        }

        [HttpDelete("{identification}")]
        public ActionResult<string> Delete(string identification)
        {
            string messaje = _employeeService.Delete(identification);
            return Ok(messaje);
        }

        private Employee EmployeeMapper(EmployeeInputModel employeeInput)
        {
            var Employee = new Employee
            {
                Id = employeeInput.Id,
                Name = employeeInput.Name,
                Position = employeeInput.Position,
                ContractDate = employeeInput.ContractDate,
                Salary = employeeInput.Salary
            };
            return Employee;
        }
    }
}
